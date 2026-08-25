export type BaseScentFamily = "citrus" | "floral" | "green" | "woody" | "amber";

export type PublicScentResult = {
  id: `S${string}`;
  family: BaseScentFamily;
  name: string;
  subtitle: string;
  affirmation: string;
  detail: string;
  structure: [string, string, string];
};

export const scentResults: Record<string, PublicScentResult> = {
  S01: {
    id: "S01", family: "citrus", name: "晨光柑橘調", subtitle: "Hespéridé Lumineux",
    affirmation: "你喜歡香氣帶著光感出現，清楚、輕盈，也保有自然的生命力。",
    detail: "最初是新鮮柑橘果皮散出的明亮氣息，片刻後轉為柔和而通透的清香，最後留下乾淨、輕盈的淡木質餘韻。它不厚重，也不急著佔滿空間，像晨光一樣自然展開。",
    structure: ["前段｜明亮而微帶果皮感", "中段｜清透柔和的芳香氣息", "尾段｜乾淨輕盈的淡木質"],
  },
  S02: {
    id: "S02", family: "citrus", name: "柑橘草本調", subtitle: "Hespéridé Aromatique",
    affirmation: "你偏好的清新不是單薄，而是帶著葉片與芳香草本的清楚層次。",
    detail: "香氣先以帶微苦感的柑橘果皮開場，接著浮現新鮮葉片與芳香草本，最後由乾淨木香收束。明亮與青綠彼此平衡，聞起來俐落、自然，又保有柔和的轉折。",
    structure: ["前段｜明亮微苦的柑橘果皮", "中段｜新鮮葉片與芳香草本", "尾段｜清爽乾淨的木香"],
  },
  S03: {
    id: "S03", family: "floral", name: "柔美花果調", subtitle: "Floral Fruité",
    affirmation: "你喜歡花與果實之間柔和、有光澤的層次，甜美卻不顯稚氣。",
    detail: "最初是一抹圓潤而清新的果香，隨後柔軟花瓣慢慢展開，尾韻留下淡木質與若有似無的溫暖甜感。整體明亮親切，又保有細緻而成熟的氣質。",
    structure: ["前段｜清新圓潤的果香", "中段｜柔軟細緻的花瓣氣息", "尾段｜淡木質與輕柔甜感"],
  },
  S04: {
    id: "S04", family: "floral", name: "清新花香調", subtitle: "Floral Frais",
    affirmation: "你喜歡的是能呼吸的花香，清雅、自然，靠近時才看見細節。",
    detail: "香氣從帶露水感的清新氣息開始，逐漸走進細緻花瓣與淡淡綠意，最後留下透明而柔和的木質餘韻。花香有層次但不濃厚，像自然光下剛綻放的花朵。",
    structure: ["前段｜帶露水感的清新氣息", "中段｜細緻花瓣與淡淡綠意", "尾段｜透明柔和的木質餘韻"],
  },
  S05: {
    id: "S05", family: "floral", name: "柔暖花香調", subtitle: "Floral Tendre",
    affirmation: "你偏好的花香有溫度、有包覆感，也保留從容而清楚的輪廓。",
    detail: "最初是柔和清香，片刻後花瓣逐漸變得圓潤溫暖，最後以淡木質與輕柔甜感收尾。它不追求濃烈，而是用細緻的暖度，留下親近又耐聞的印象。",
    structure: ["前段｜柔和清雅的氣息", "中段｜圓潤溫暖的花香", "尾段｜淡木質與輕柔甜感"],
  },
  S06: {
    id: "S06", family: "floral", name: "優雅花木調", subtitle: "Floral Boisé",
    affirmation: "你欣賞花香的細緻，也喜歡木香帶來的沉穩與餘韻。",
    detail: "香氣以清雅花瓣開場，隨後花香與溫潤木質自然交織，最後留下柔和、安靜而有深度的尾韻。花朵沒有被甜味包覆，木香也不顯厚重，呈現從容而優雅的平衡。",
    structure: ["前段｜清雅細緻的花瓣", "中段｜花香與溫潤木質交織", "尾段｜安靜而有深度的餘韻"],
  },
  S07: {
    id: "S07", family: "green", name: "芳香草本調", subtitle: "Aromatique",
    affirmation: "你喜歡植物被輕輕揉開時，那種鮮明、自然又充滿精神的氣息。",
    detail: "最初是清爽葉片與芳香草本的氣息，接著出現柔和而乾淨的植物層次，最後由淡木質平穩收束。整體清楚、不甜膩，聞得到真實植物的生命感。",
    structure: ["前段｜清爽葉片與芳香草本", "中段｜乾淨自然的植物氣息", "尾段｜平穩淡雅的木質"],
  },
  S08: {
    id: "S08", family: "green", name: "森林綠意調", subtitle: "Vert Boisé",
    affirmation: "你偏好的綠意帶著森林深度，清新之外，還有安靜而耐聞的層次。",
    detail: "香氣從新鮮葉片與微涼空氣開始，慢慢走向芳香草本與柔和木香，最後留下乾淨、沉靜的森林餘韻。青綠氣息鮮明但不尖銳，像走進有光線穿過的林間。",
    structure: ["前段｜新鮮葉片與微涼空氣", "中段｜芳香草本與柔和木香", "尾段｜沉靜乾淨的森林餘韻"],
  },
  S09: {
    id: "S09", family: "woody", name: "靜謐木香調", subtitle: "Boisé Serein",
    affirmation: "你偏好的香氣安靜而有力量，不需要張揚，也能留下清楚印象。",
    detail: "開場是一縷清新的微辛與青綠氣息，片刻後溫潤木香逐漸展開，與柔和樹脂彼此交織。甜感輕淡，氣息沉靜細膩，最後留下貼近自己、令人想再次靠近的優雅餘韻。",
    structure: ["前段｜清新微辛與一縷青綠", "中段｜溫潤木香逐漸展開", "尾段｜柔和樹脂與沉靜餘韻"],
  },
  S10: {
    id: "S10", family: "woody", name: "辛香木質調", subtitle: "Boisé Épicé",
    affirmation: "你喜歡木香中有一點溫暖辛香，沉穩之中仍保有鮮明個性。",
    detail: "最初是柔和而明亮的辛香氣息，隨後溫潤木質成為核心，最後以圓潤樹脂和淡淡暖意收束。辛香不刺激，木香不沉重，整體具有清楚節奏與成熟質感。",
    structure: ["前段｜柔和明亮的辛香", "中段｜溫潤而清楚的木香", "尾段｜圓潤樹脂與淡淡暖意"],
  },
  S11: {
    id: "S11", family: "amber", name: "溫暖樹脂調", subtitle: "Ambré Résineux",
    affirmation: "你喜歡香氣慢慢展開，帶著圓潤暖度，也能讓人記得它的餘韻。",
    detail: "香氣從柔和辛香開始，逐漸浮現溫暖花木與透明樹脂，最後留下圓潤、細緻而悠長的尾韻。它有深度卻不顯厚重，像暖光在空間裡緩緩停留。",
    structure: ["前段｜柔和而細緻的辛香", "中段｜溫暖花木與透明樹脂", "尾段｜圓潤悠長的暖香"],
  },
  S12: {
    id: "S12", family: "woody", name: "大地根系調", subtitle: "Boisé Terreux",
    affirmation: "你欣賞香氣與土地相連的深度，沉穩、真實，也帶著安靜的存在感。",
    detail: "最初是微涼葉片與淡淡辛香，接著浮現根系、乾燥落葉與深色木質的氣息，最後留下溫暖而平穩的土地餘韻。它深沉但不封閉，仍保有自然的空氣與層次。",
    structure: ["前段｜微涼葉片與淡淡辛香", "中段｜根系、落葉與深色木質", "尾段｜溫暖平穩的大地餘韻"],
  },
  S13: {
    id: "S13", family: "floral", name: "絲絨花香調", subtitle: "Floral Velours",
    affirmation: "你喜歡花香柔滑地靠近，細緻、豐潤，卻仍保有優雅分寸。",
    detail: "香氣從柔和清香展開，花瓣在中段呈現如絲絨般細緻的層次，最後由溫暖木質與輕柔甜感承接。整體豐潤卻不甜膩，留下柔軟而成熟的印象。",
    structure: ["前段｜柔和而細緻的清香", "中段｜豐潤柔滑的花瓣氣息", "尾段｜溫暖木質與輕柔甜感"],
  },
  S14: {
    id: "S14", family: "green", name: "芳香馥奇調", subtitle: "Fougère Aromatique",
    affirmation: "你喜歡清新草本與木香之間俐落、平衡而富有層次的轉折。",
    detail: "最初是清爽芳香草本與淡淡柑橘氣息，隨後轉為柔和花草與乾淨木香，最後留下沉穩而不厚重的餘韻。清新與深度彼此平衡，呈現清楚而有質感的氣味輪廓。",
    structure: ["前段｜清爽草本與淡淡柑橘", "中段｜柔和花草與乾淨木香", "尾段｜沉穩清晰的芳香餘韻"],
  },
  S15: {
    id: "S15", family: "amber", name: "花果柑苔調", subtitle: "Chypré Fruité",
    affirmation: "你喜歡明亮花果與深邃尾韻並存，讓香氣既迷人，也有值得探索的層次。",
    detail: "香氣先以明亮果香與細緻花瓣開場，片刻後轉入帶綠意的花木氣息，最後留下深沉卻柔和的木質與大地餘韻。前段有光，尾段有深度，形成優雅而鮮明的對比。",
    structure: ["前段｜明亮果香與細緻花瓣", "中段｜帶綠意的花木氣息", "尾段｜柔和深邃的木質餘韻"],
  },
};

export function resolveScentResult(ranked: BaseScentFamily[], traits: Record<string, string>) {
  const [primary, secondary] = ranked;
  const { topDirection: top, heartDirection: heart, baseDirection: base, finish, sweetness, temperature, texture } = traits;

  if (primary === "citrus") {
    if (secondary === "floral" && (heart === "H02" || heart === "H03" || sweetness === "柔甜")) return scentResults.S03;
    if (secondary === "green" || top === "T04" || finish === "鮮綠俐落") return scentResults.S02;
    return scentResults.S01;
  }
  if (primary === "floral") {
    if (secondary === "citrus" && (base === "B03" || base === "B05")) return scentResults.S15;
    if (texture === "柔滑" && sweetness === "柔甜") return scentResults.S13;
    if (secondary === "woody" || heart === "H03" || base === "B01") return scentResults.S06;
    if (temperature === "溫暖" || sweetness === "柔甜") return scentResults.S05;
    return scentResults.S04;
  }
  if (primary === "green") {
    if (secondary === "citrus" || top === "T01" || top === "T02" || top === "T03") return scentResults.S02;
    if (secondary === "woody" && (heart === "H01" || heart === "H04")) return scentResults.S14;
    if (secondary === "woody" || base === "B01" || base === "B03" || base === "B05") return scentResults.S08;
    return scentResults.S07;
  }
  if (primary === "woody") {
    if (base === "B03" || base === "B05") return scentResults.S12;
    if (secondary === "green" && (heart === "H01" || heart === "H04")) return scentResults.S14;
    if (secondary === "amber" || temperature === "溫暖" || finish === "溫暖圓潤") return scentResults.S10;
    return scentResults.S09;
  }
  if (secondary === "floral" && (top === "T01" || top === "T02") && (base === "B03" || base === "B05")) return scentResults.S15;
  if (secondary === "woody" && (base === "B03" || base === "B05")) return scentResults.S12;
  if (secondary === "woody" && finish === "乾燥木質") return scentResults.S10;
  return scentResults.S11;
}
