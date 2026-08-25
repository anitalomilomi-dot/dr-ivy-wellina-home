export function resolveScentProfile(scores, catalog) {
  const validIds = new Set(catalog.profiles.map((profile) => profile.id));
  const ranked = Object.entries(scores)
    .filter(([profileId, score]) => validIds.has(profileId) && Number.isFinite(score))
    .sort(([idA, scoreA], [idB, scoreB]) => scoreB - scoreA || idA.localeCompare(idB));

  if (ranked.length === 0) throw new Error("No valid scent-profile scores were supplied.");
  return catalog.profiles.find((profile) => profile.id === ranked[0][0]);
}

export function getFormulaSlots(profileId, catalog) {
  const profile = catalog.profiles.find((item) => item.id === profileId);
  if (!profile) throw new Error(`Unknown scent profile: ${profileId}`);
  return profile.formulaSlots;
}

export function getApprovedFormula(formulaId, catalog) {
  const formula = catalog.formulas.find((item) => item.id === formulaId);
  if (!formula || formula.status !== "ivy_approved") return null;
  return formula;
}
