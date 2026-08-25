"use client";

import { useMemo, useState } from "react";
import { resolveScentResult, type BaseScentFamily } from "./scent-results";

const profiles = {
  citrus: {
    name: "柑橘清透調",
    summary: "偏好明亮、乾淨、帶果皮質感，並希望香氣保持輕盈。",
    affirmation: "你選擇的是一份有光、有空氣感，也讓人願意靠近的香氣。",
    detail: "它從清亮果皮感開始，慢慢走向柔和花草，最後留下乾淨而透明的木質尾韻。整體不厚重，也不急著佔滿空間，而是用清楚、自然的層次留下印象。",
    structure: ["前段｜柑橘果皮與明亮氣息", "中段｜淡雅花草作為過渡", "尾段｜透明木質收束"],
  },
  floral: {
    name: "細緻花香調",
    summary: "偏好花朵的層次與柔和轉折，不喜歡單一甜味或過度張揚。",
    affirmation: "你喜歡的花香有分寸、有層次，溫柔卻不失去自己的輪廓。",
    detail: "它不是濃厚甜膩的花束，而是花瓣、綠葉與淡木質之間細緻的轉折。靠近時能感受到柔和變化，離開後仍留下清雅、耐聞的氣味印象。",
    structure: ["前段｜柔和清香", "中段｜細緻花香主體", "尾段｜淡木質與柔暖氣息"],
  },
  green: {
    name: "草本綠意調",
    summary: "偏好葉片、芳香草本與輪廓清楚的植物氣息。",
    affirmation: "你的香氣帶著真實植物的生命感，清楚、自然，也很有辨識度。",
    detail: "它從新鮮葉片與青綠氣息展開，中段保留芳香草本的清楚輪廓，再由乾淨木質收束。香氣不甜膩，帶有俐落而自然的植物質地。",
    structure: ["前段｜鮮綠葉片", "中段｜芳香草本主體", "尾段｜乾淨木質"],
  },
  woody: {
    name: "靜謐木香調",
    summary: "偏好沉穩、溫潤而甜感輕淡的香氣，欣賞木香隨時間慢慢展開的深度。",
    affirmation: "你偏好的香氣安靜而有力量，不需要張揚，就能留下清楚印象。",
    detail: "開場是一縷清新的辛香與青綠氣息，像晨光落進安靜林間；片刻之後，溫潤木香逐漸展開，與柔和樹脂交織。它的甜感輕淡，氣息沉靜而細膩，最後留下貼近肌膚、令人想再次靠近的優雅餘韻。",
    structure: ["前段｜清新微辛，帶一縷青綠氣息", "中段｜溫潤木香逐漸展開", "尾段｜柔和樹脂留下沉靜餘韻"],
  },
  amber: {
    name: "溫暖琥珀調",
    summary: "偏好圓潤、溫暖、慢慢展開的辛香與樹脂氣息。",
    affirmation: "你喜歡的是一份溫暖而有包覆感、能慢慢被記住的香氣。",
    detail: "它從柔和辛香開始，經過溫暖花木，最後留下圓潤樹脂感。香氣有深度卻不沉重，層次會隨時間慢慢展開，留下柔暖而完整的尾韻。",
    structure: ["前段｜柔和辛香", "中段｜溫暖花木", "尾段｜樹脂與琥珀感"],
  },
};

type ProfileKey = keyof typeof profiles;
type Score = Partial<Record<ProfileKey, number>>;
type Option = {
  label: string;
  note: string;
  score?: Score;
  trait?: { key: "sweetness" | "temperature" | "texture" | "intensity" | "duration" | "occasion" | "topDirection" | "heartDirection" | "baseDirection" | "finish"; value: string };
  avoid?: string;
};

const questions: Array<{ stage: string; title: string; help: string; options: Option[] }> = [
  {
    stage: "01｜第一嗅覺反應",
    title: "如果面前有五張試香紙，你會先拿起哪一張？",
    help: "直接選第一個想聞的氣味，不需要猜自己的個性。",
    options: [
      { label: "剛剝開的柑橘果皮", note: "微酸、明亮，帶真實果皮感", score: { citrus: 4, green: 1 } },
      { label: "帶露水的細緻花瓣", note: "柔和、有層次，但不甜膩", score: { floral: 4, citrus: 1 } },
      { label: "指尖揉開的新鮮葉片", note: "鮮綠、俐落，帶植物汁液感", score: { green: 4, woody: 1 } },
      { label: "陽光曬暖的木質與安靜書房", note: "沉靜、溫潤，帶一點柔和辛香", score: { woody: 4, amber: 1 } },
      { label: "烘焙香料與溫暖樹脂", note: "圓潤、微辛香、慢慢展開", score: { amber: 4, woody: 1 } },
    ],
  },
  {
    stage: "02｜氣味轉折",
    title: "你希望香氣從開始到最後，怎麼變化？",
    help: "這會影響前段、中段與尾段的配置。",
    options: [
      { label: "明亮開場，最後乾淨淡去", note: "開場有光感，尾韻不厚重", score: { citrus: 4, woody: 1 } },
      { label: "先含蓄，花香慢慢被聞見", note: "層次逐步出現，不一開始就很甜", score: { floral: 4, woody: 1 } },
      { label: "先鮮綠，最後留下淡木質", note: "像葉片逐漸乾燥後的變化", score: { green: 4, woody: 1 } },
      { label: "從清新微辛，慢慢走向沉靜木香", note: "氣息由明亮轉為溫潤，尾韻安定", score: { woody: 4, green: 1 } },
      { label: "開始柔和，尾韻越來越溫暖", note: "喜歡停留後的圓潤與包覆感", score: { amber: 4, floral: 1 } },
    ],
  },
  {
    stage: "03｜甜度",
    title: "你可以接受多少甜味？",
    help: "甜度會直接影響花香、果香與樹脂調的表現。",
    options: [
      { label: "幾乎不要甜", note: "偏乾燥、清楚、俐落", score: { woody: 1, green: 1 }, trait: { key: "sweetness", value: "低甜度" } },
      { label: "只要一點圓潤感", note: "能柔化氣味，但不成為主角", score: { floral: 1, citrus: 1 }, trait: { key: "sweetness", value: "微甜" } },
      { label: "可以明顯溫暖柔甜", note: "接受較飽滿的花香或樹脂感", score: { amber: 2, floral: 1 }, trait: { key: "sweetness", value: "柔甜" } },
    ],
  },
  {
    stage: "04｜溫度感",
    title: "你想讓這份香氣呈現什麼溫度？",
    help: "不是季節測驗，而是確認氣味在鼻腔裡的冷暖印象。",
    options: [
      { label: "偏冷、清透", note: "像空氣、果皮或薄霧", score: { citrus: 1, green: 1 }, trait: { key: "temperature", value: "清冷" } },
      { label: "中性、自然", note: "不刻意冷，也不明顯溫熱", score: { woody: 1, floral: 1 }, trait: { key: "temperature", value: "中性" } },
      { label: "偏暖、圓潤", note: "像木頭、辛香或夕陽的暖度", score: { amber: 2, woody: 1 }, trait: { key: "temperature", value: "溫暖" } },
    ],
  },
  {
    stage: "05｜氣味質地",
    title: "如果香氣也有觸感，你偏好哪一種？",
    help: "不同質地會讓香氣呈現透明、柔滑或保有清楚的材料感。",
    options: [
      { label: "透明，有空氣感", note: "氣味之間保留空間，不厚重", score: { citrus: 2 }, trait: { key: "texture", value: "透明" } },
      { label: "柔滑，像細緻布料", note: "層次融合，邊緣不尖銳", score: { floral: 2, amber: 1 }, trait: { key: "texture", value: "柔滑" } },
      { label: "乾爽，層次清晰", note: "木香、葉片與辛香各自可辨，卻自然融合", score: { woody: 2, green: 1 }, trait: { key: "texture", value: "乾燥" } },
    ],
  },
  {
    stage: "06｜香氣距離",
    title: "你希望別人在多近的距離才聞得到？",
    help: "這不是越濃越好，而是確認你舒服的擴散範圍。",
    options: [
      { label: "只有自己靠近時聞得到", note: "像一個貼近自己的氣味記號", trait: { key: "intensity", value: "輕柔・近距離" } },
      { label: "坐在身旁的人隱約聞到", note: "有存在感，但不主動進入別人的空間", trait: { key: "intensity", value: "適中・一臂距離" } },
      { label: "走近時就能感覺到", note: "希望它成為清楚的個人氣味印象", trait: { key: "intensity", value: "明顯・近身擴散" } },
    ],
  },
  {
    stage: "07｜停留時間",
    title: "你希望這份香氣大約陪伴多久？",
    help: "實際停留會受素材與環境影響，這題先確認你的期待。",
    options: [
      { label: "短暫出現即可", note: "約一段短時間，適合重新補聞", trait: { key: "duration", value: "短暫、可重複補聞" } },
      { label: "陪伴半天左右", note: "需要前、中、後段都有清楚轉折", trait: { key: "duration", value: "中等停留" } },
      { label: "希望尾韻停留更久", note: "會提高木質或樹脂尾段的比重", score: { woody: 1, amber: 1 }, trait: { key: "duration", value: "較長尾韻" } },
    ],
  },
  {
    stage: "08｜使用情境",
    title: "你最可能在哪一個時刻使用它？",
    help: "同一種香氣放在工作桌、個人穿戴或空間裡，設計方式會不同。",
    options: [
      { label: "出門前的個人氣味", note: "需要容易辨識、靠近自己也舒服", trait: { key: "occasion", value: "個人日常" } },
      { label: "閱讀或獨處時", note: "希望安靜、不搶走注意力", score: { woody: 1, floral: 1 }, trait: { key: "occasion", value: "閱讀與獨處" } },
      { label: "工作桌或創作空間", note: "偏好清楚、不甜膩的輪廓", score: { green: 1, citrus: 1 }, trait: { key: "occasion", value: "工作與創作" } },
      { label: "與重要的人相聚時", note: "希望有記憶點，也保有適當距離", score: { floral: 1, amber: 1 }, trait: { key: "occasion", value: "相聚時刻" } },
    ],
  },
  {
    stage: "09｜排除條件",
    title: "以下哪一種感受，最不希望出現在試香裡？",
    help: "先知道不能出現什麼，能減少收到後不喜歡的可能。",
    options: [
      { label: "太甜，像糖果", note: "排除明顯甜膩感", avoid: "明顯甜味" },
      { label: "太尖銳，像清潔用品", note: "排除過度銳利的清新感", avoid: "尖銳清新感" },
      { label: "太粉，像濃厚化妝香", note: "排除明顯粉感", avoid: "濃厚粉感" },
      { label: "太厚重，停留太久", note: "排除濃厚與包覆感", avoid: "厚重尾韻" },
      { label: "太綠，像揉碎藥草", note: "排除強烈草本氣息", avoid: "強烈草本" },
    ],
  },
  {
    stage: "10｜尾韻確認",
    title: "二十分鐘後，你最想在試香紙上留下什麼？",
    help: "尾韻最接近真正會留下的印象，因此這題會加重判定。",
    options: [
      { label: "乾淨透明，像光穿過空氣", note: "不黏膩，保持清楚", score: { citrus: 5 } },
      { label: "細緻花香，近聞才有層次", note: "柔和但不單薄", score: { floral: 5 } },
      { label: "鮮綠草本，輪廓俐落", note: "帶自然葉片感", score: { green: 5 } },
      { label: "沉靜木香，溫潤而安定", note: "柔和、不張揚，留下細緻餘韻", score: { woody: 5 } },
      { label: "溫暖樹脂，圓潤地停留", note: "尾韻較深、有包覆感", score: { amber: 5 } },
    ],
  },
  {
    stage: "11｜最初印象",
    title: "香氣剛出現時，哪一個畫面最讓你想靠近？",
    help: "不用認識精油，只要選擇鼻子最喜歡的第一印象。",
    options: [
      { label: "剛剝開、帶一點微苦的柑橘皮", note: "清亮、有精神，但不是甜果汁", score: { citrus: 2, floral: 1 }, trait: { key: "topDirection", value: "T01" } },
      { label: "成熟橙子散出的圓潤果香", note: "親切、溫暖，帶自然甜感", score: { citrus: 2, amber: 1 }, trait: { key: "topDirection", value: "T02" } },
      { label: "切開檸檬時飛出的清爽香氣", note: "明快、俐落，像乾淨的光線", score: { citrus: 2, green: 1 }, trait: { key: "topDirection", value: "T03" } },
      { label: "手指揉開柑橘樹葉的青綠氣息", note: "有葉片、微苦與淡淡木質感", score: { green: 2, woody: 1 }, trait: { key: "topDirection", value: "T04" } },
      { label: "曬乾花草後留下的乾淨清香", note: "柔和、不甜，帶自然草本輪廓", score: { floral: 2, green: 1 }, trait: { key: "topDirection", value: "T05" } },
    ],
  },
  {
    stage: "12｜香氣中心",
    title: "香氣慢慢展開後，你希望停留在哪一種氛圍？",
    help: "想像聞了幾分鐘之後，你最希望繼續感受到的畫面。",
    options: [
      { label: "風吹過乾淨花草田的清香", note: "柔和花草與淡淡綠意，很自然", score: { floral: 2, green: 1 }, trait: { key: "heartDirection", value: "H01" } },
      { label: "帶著綠葉感的細緻玫瑰花香", note: "有花朵層次，但不厚重粉甜", score: { floral: 3 }, trait: { key: "heartDirection", value: "H02" } },
      { label: "白色花瓣靠近乾淨木頭的氣息", note: "花木柔和、清潔，不甜膩", score: { floral: 2, woody: 1 }, trait: { key: "heartDirection", value: "H03" } },
      { label: "午後溫暖香草園的氣息", note: "草本中帶一點柔甜與深度", score: { green: 2, amber: 1 }, trait: { key: "heartDirection", value: "H04" } },
      { label: "安靜空間裡淡淡的透明樹脂香", note: "微辛香、清透，慢慢連向木質", score: { woody: 2, amber: 1 }, trait: { key: "heartDirection", value: "H05" } },
    ],
  },
  {
    stage: "13｜留下的尾韻",
    title: "二十分鐘後，你最希望試香紙留下哪種感覺？",
    help: "選擇你願意一再靠近聞的尾韻，不需要判斷它是哪一種材料。",
    options: [
      { label: "安靜書房裡溫潤而乾淨的木香", note: "沉穩、細緻，讓人自然放慢呼吸", score: { woody: 3 }, trait: { key: "baseDirection", value: "B01" } },
      { label: "空氣中若有似無的淡樹脂香", note: "透明、微辛，留有呼吸空間", score: { woody: 2, amber: 1 }, trait: { key: "baseDirection", value: "B02" } },
      { label: "雨後土地與乾燥落葉", note: "深色、微濕潤，材料感明顯", score: { woody: 2, green: 1 }, trait: { key: "baseDirection", value: "B03" } },
      { label: "溫暖樹脂包住淡淡甜香", note: "圓潤、柔暖，讓氣味邊緣更柔和", score: { amber: 3 }, trait: { key: "baseDirection", value: "B04" } },
      { label: "夜色森林裡溫暖而深沉的木香", note: "帶一點泥土與輕柔煙燻，餘韻悠長", score: { woody: 3 }, trait: { key: "baseDirection", value: "B05" } },
    ],
  },
  {
    stage: "14｜最後定調",
    title: "如果只能再加上一個細節，你希望它往哪裡走？",
    help: "這是最後的氣味微調，請選擇你希望收到的最終氣質。",
    options: [
      { label: "更明亮透明", note: "增加空氣感，讓香氣顯得輕盈清楚", score: { citrus: 2 }, trait: { key: "finish", value: "明亮透明" } },
      { label: "更柔和花香", note: "把花木邊緣變得柔順、細緻", score: { floral: 2 }, trait: { key: "finish", value: "柔和花香" } },
      { label: "更鮮綠俐落", note: "補上葉片微苦感與清楚輪廓", score: { green: 2 }, trait: { key: "finish", value: "鮮綠俐落" } },
      { label: "更沉靜木香", note: "讓木香更溫潤，尾韻安定而悠長", score: { woody: 2 }, trait: { key: "finish", value: "乾燥木質" } },
      { label: "更溫暖圓潤", note: "柔化氣味邊緣，留下溫暖包覆感", score: { amber: 2 }, trait: { key: "finish", value: "溫暖圓潤" } },
    ],
  },
];

const sweetnessCopy: Record<string, string> = {
  "低甜度": "你偏好甜感輕淡，讓香氣的明亮、青綠與木香層次更清楚",
  "微甜": "你保留了一點圓潤感，讓香氣柔和卻不顯甜膩",
  "柔甜": "你接受溫暖柔甜的層次，使香氣更飽滿、更有包覆感",
};

const temperatureCopy: Record<string, string> = {
  "清冷": "帶著偏冷、清透的氣息",
  "中性": "維持自然、平衡的溫度",
  "溫暖": "呈現溫暖、圓潤的氣息",
};

const textureCopy: Record<string, string> = {
  "透明": "像光線一樣保有空氣與留白",
  "柔滑": "各層氣味柔順銜接，像細緻布料般自然",
  "乾燥": "氣息乾爽清晰，木香、葉片與辛香自然分明",
};

const occasionCopy: Record<string, string> = {
  "個人日常": "放進日常穿戴時，它會成為一個貼近你、容易辨識的氣味記號",
  "閱讀與獨處": "在閱讀或獨處時，它以安靜、不搶走注意力的方式陪伴",
  "工作與創作": "放在工作與創作時刻，它保有清楚輪廓，也為空間留下呼吸感",
  "相聚時刻": "在與重要的人相聚時，它有記憶點，也保留舒服的靠近距離",
};

const finishCopy: Record<string, string> = {
  "明亮透明": "最後的明亮透明感，會讓整體顯得輕盈而清楚",
  "柔和花香": "最後的柔和花香，會讓轉折更細緻、更容易親近",
  "鮮綠俐落": "最後的鮮綠線條，會讓香氣更有精神與辨識度",
  "乾燥木質": "最後的沉靜木香，會留下溫潤、安定而耐聞的餘韻",
  "溫暖圓潤": "最後的溫暖圓潤感，會讓整體留下柔和而完整的尾韻",
};

const intensityPublicCopy: Record<string, string> = {
  "輕柔・近距離": "只在靠近時輕輕被感受到",
  "適中・一臂距離": "在自然靠近時被柔和感受到",
  "明顯・近身擴散": "走近時便能清楚感受到",
};

const intensityPublicLabel: Record<string, string> = {
  "輕柔・近距離": "輕柔貼近",
  "適中・一臂距離": "柔和可感",
  "明顯・近身擴散": "清楚展開",
};

const durationPublicCopy: Record<string, string> = {
  "短暫、可重複補聞": "保留輕快、適合再次補聞的餘韻",
  "中等停留": "以從容的節奏陪伴數個小時",
  "較長尾韻": "讓尾韻綿長而緩緩延續",
};

function buildPersonalFeedback(traits: Record<string, string>) {
  return [
    `${sweetnessCopy[traits.sweetness]}；整體${temperatureCopy[traits.temperature]}，${textureCopy[traits.texture]}。`,
    `${occasionCopy[traits.occasion]}。香氣${intensityPublicCopy[traits.intensity]}，並${durationPublicCopy[traits.duration]}；${finishCopy[traits.finish]}。`,
  ];
}

function getVisualVariant(traits: Record<string, string>) {
  const signal = `${traits.topDirection}${traits.heartDirection}${traits.baseDirection}${traits.finish}`;
  return Array.from(signal).reduce((sum, character) => sum + character.charCodeAt(0), 0) % 3;
}

function buildProductCode(answers: Option[]) {
  const stamp = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Taipei", year: "2-digit", month: "2-digit", day: "2-digit" })
    .format(new Date())
    .replaceAll("-", "");
  const signature = answers.map((answer) => answer.label).join("|");
  const hash = Array.from(signature).reduce((value, character) => ((value * 31) + character.charCodeAt(0)) >>> 0, 2166136261);
  return `WSP-${stamp}-${String(hash % 10000).padStart(4, "0")}`;
}

export default function ScentQuizPreview() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Option[]>([]);

  const outcome = useMemo(() => {
    if (answers.length < questions.length) return null;
    const tally: Record<ProfileKey, number> = { citrus: 0, floral: 0, green: 0, woody: 0, amber: 0 };
    answers.forEach((answer) => Object.entries(answer.score ?? {}).forEach(([key, value]) => { tally[key as ProfileKey] += value ?? 0; }));
    const ranked = (Object.keys(profiles) as ProfileKey[]).sort((a, b) => tally[b] - tally[a]);
    const traits = Object.fromEntries(answers.filter((answer) => answer.trait).map((answer) => [answer.trait!.key, answer.trait!.value])) as Record<string, string>;
    const primary = resolveScentResult(ranked as BaseScentFamily[], traits);
    return {
      primaryKey: primary.family,
      primary,
      traits,
      personalFeedback: buildPersonalFeedback(traits),
      visualVariant: getVisualVariant(traits),
      productCode: buildProductCode(answers),
    };
  }, [answers]);

  function choose(option: Option) { setAnswers((current) => [...current, option]); setStep((current) => Math.min(current + 1, questions.length)); }
  function back() { setAnswers((current) => current.slice(0, -1)); setStep((current) => Math.max(current - 1, 0)); }
  function restart() { setAnswers([]); setStep(0); }

  if (outcome) {
    return (
      <div className="quiz-result-card quiz-result-detailed" aria-live="polite">
        <aside className={`scent-result-visual scent-result-${outcome.primaryKey} scent-card-variant-${outcome.visualVariant}`} aria-label={`${outcome.primary.name}香氣圖卡`}>
          <div className="scent-card-brand"><small><span>Dr. IVY ×</span><b>WELLINA</b></small><em>SCENT PORTRAIT</em></div>
          <div className="scent-card-orbit"><i /><i /><i /></div>
          <div className="scent-card-copy">
            <p>{outcome.primary.subtitle}</p>
            <strong>{outcome.primary.name}</strong>
            <span>{outcome.traits.texture}・{outcome.traits.temperature}<br />{outcome.productCode}</span>
          </div>
        </aside>
        <div>
          <p className="section-kicker">YOUR SCENT PORTRAIT</p>
          <h3>{outcome.primary.name}</h3>
          <p className="result-affirmation">{outcome.primary.affirmation}</p>
          <p className="result-long-description">{outcome.primary.detail}</p>
          <div className="personal-feedback-copy">
            {outcome.personalFeedback.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="result-notes"><span>{outcome.traits.texture}</span><span>{outcome.traits.temperature}</span><span>{intensityPublicLabel[outcome.traits.intensity]}</span></div>
          <dl className="scent-result-details">
            <div><dt>香氣編號</dt><dd>{outcome.productCode}</dd></div>
            <div><dt>香氣展開</dt><dd>{outcome.primary.structure.join(" ／ ")}</dd></div>
            <div><dt>你的感受</dt><dd>{outcome.traits.sweetness}・{outcome.traits.temperature}・{outcome.traits.texture}</dd></div>
            <div><dt>適合時刻</dt><dd>{outcome.traits.occasion}；香氣{intensityPublicCopy[outcome.traits.intensity]}，並{durationPublicCopy[outcome.traits.duration]}。</dd></div>
          </dl>
          <p className="result-blessing">Dr. IVY 想對你說：願這份香氣，陪你在日常裡留下一段溫柔而清楚的記憶。</p>
          <p className="result-disclaimer">這份結果呈現你的氣味偏好，不代表人格或身心狀態。香氣編號可供保存本次結果；正式訂購與再購功能將於寄送服務開放後使用。</p>
          <div className="result-actions"><a className="button button-deep" href="#scent-delivery">看看我的專屬試香</a><button type="button" onClick={restart}>重新測驗</button></div>
        </div>
      </div>
    );
  }

  const question = questions[step];
  return (
    <div className="quiz-demo-card quiz-demo-professional">
      <div className="quiz-progress" aria-label={`測驗進度 ${step + 1} / ${questions.length}`}><span style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div>
      <div className="quiz-question-meta"><p className="quiz-step">QUESTION {step + 1} / {questions.length}</p><span>{question.stage}</span></div>
      <h3>{question.title}</h3>
      <p className="quiz-help">{question.help}</p>
      <div className={`quiz-options ${question.options.length <= 3 ? "three-options" : "five-options"}`}>
        {question.options.map((option, index) => (
          <button type="button" key={option.label} onClick={() => choose(option)}><small>0{index + 1}</small><strong>{option.label}</strong><span>{option.note}</span><i>選這一個 →</i></button>
        ))}
      </div>
      {step > 0 && <button className="quiz-back" type="button" onClick={back}>← 回上一題</button>}
    </div>
  );
}
