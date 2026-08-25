import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { getApprovedFormula, getFormulaSlots, resolveScentProfile } from "../lib/scent-engine/index.mjs";

const catalog = JSON.parse(await readFile(new URL("../data/scent-engine/catalog.v1.json", import.meta.url), "utf8"));
const inventory = JSON.parse(await readFile(new URL("../data/scent-engine/inventory-candidates.v1.json", import.meta.url), "utf8"));
const quiz = JSON.parse(await readFile(new URL("../data/scent-engine/quiz-questions.v1.json", import.meta.url), "utf8"));
const orderSchema = JSON.parse(await readFile(new URL("../data/scent-engine/order-record.schema.json", import.meta.url), "utf8"));

test("後台固定為15個香調、30個配方槽位", () => {
  assert.equal(catalog.profiles.length, 15);
  assert.equal(catalog.profiles.flatMap((profile) => profile.formulaSlots).length, 30);
});

test("每個香調都有8款精油與2款調香單體", () => {
  for (const profile of catalog.profiles) {
    assert.equal(profile.essentialOils.length, 8, profile.name);
    assert.equal(profile.molecules.length, 2, profile.name);
  }
});

test("代表配方總份數與5mL、3%換算一致", () => {
  const pilot = catalog.formulas.find((formula) => formula.id === "S09-A");
  assert.equal(pilot.materials.reduce((total, item) => total + item.parts, 0), 100);
  assert.equal(pilot.fiveMlAtThreePercent.aromaticConcentrateMl, 0.15);
  assert.equal(pilot.fiveMlAtThreePercent.baseToFinalVolumeMl, 4.85);
  assert.equal(pilot.fiveMlAtThreePercent.productionHold, true);
  assert.equal(pilot.olfactiveArchitecture.opening.materials.length, 3);
  assert.equal(pilot.evaluationCheckpoints.length, 4);
});

test("結果選配固定且未核准配方不能交付", () => {
  assert.equal(resolveScentProfile({ S09: 12, S01: 8 }, catalog).id, "S09");
  assert.deepEqual(getFormulaSlots("S09", catalog).map((slot) => slot.id), ["S09-A", "S09-B"]);
  assert.equal(getApprovedFormula("S09-A", catalog), null);
});

test("Ivy新增原料已建檔，身分未確認者保持鎖定", () => {
  assert.equal(inventory.materials.length, 28);
  assert.ok(inventory.materials.some((item) => item.displayName === "喜馬拉雅雪松"));
  assert.ok(inventory.materials.some((item) => item.displayName === "橙花"));
  assert.ok(inventory.materials.some((item) => item.displayName === "依蘭依蘭"));
  for (const item of inventory.materials.filter((material) => material.identityStatus !== "confirmed")) {
    assert.equal(item.formulaStatus, "candidate_hold", item.displayName);
  }
});

test("14題與產品編號、付款、寄件、Ivy建議欄位可交接", () => {
  assert.equal(quiz.questions.length, 14);
  for (const field of ["productCode", "recipient", "payment", "recommendations"]) {
    assert.ok(orderSchema.required.includes(field), field);
  }
});
