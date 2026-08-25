export type ContentLink = {
  label: string;
  title: string;
  href: string;
};

export type ContentSection = {
  number: string;
  title: string;
  copy: string;
  points?: string[];
};

export type SearchGuide = {
  kind: "search";
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  lead: string;
  sections: ContentSection[];
  questions: string[];
  related: ContentLink[];
};

export type OilGuide = {
  kind: "oil";
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  lead: string;
  botanical: {
    commonName: string;
    scientificName: string;
    family: string;
    note: string;
    sourceLabel: string;
    sourceUrl: string;
  };
  image: {
    src: string;
    alt: string;
    credit: string;
    license: string;
    sourceUrl: string;
  };
  research: {
    title: string;
    journal: string;
    year: string;
    note: string;
    sourceUrl: string;
  }[];
  scentWords: string[];
  sections: ContentSection[];
  related: ContentLink[];
};

export type CoursePath = {
  id: string;
  number: string;
  title: string;
  forWhom: string;
  startWith: string;
  nextStep: string;
  href: string;
};

export const searchGuides: SearchGuide[] = [
  {
    kind: "search",
    slug: "essential-oil-choice",
    eyebrow: "START WITH CLARITY",
    title: "精油怎麼選？先從用途與標籤開始",
    summary: "第一次選精油時，先釐清學習目的，再閱讀植物學名、萃取部位、來源與產品說明，會比只看商品名稱更清楚。",
    lead: "這是一張選擇地圖，不替任何人指定單一答案。先知道自己要嗅聞、擴香、調香，或進一步學習，再回到可核對的產品資料。",
    sections: [
      { number: "01", title: "先寫下使用目的", copy: "把需求寫成具體情境，例如認識單方香氣、練習擴香、學習調香，或準備進入系統課程。", points: ["避免只用模糊的效果詞挑選", "一次先設定一個學習目標", "特殊情況先詢問合格專業人員"] },
      { number: "02", title: "讀懂產品標籤", copy: "至少查看植物學名、植物部位、萃取方式、產地或來源、批次與使用說明；資料不完整時先保留疑問。", points: ["中文俗名相同，不代表植物一定相同", "以完整標示協助辨識", "保留購買來源與批次資料"] },
      { number: "03", title: "先單方、再比較", copy: "初學時可以一次觀察一種香氣，記下第一印象、前後變化與個人聯想，再進入兩種以上的比較。", points: ["使用聞香紙或課堂指定方式", "記錄時間與香氣變化", "嗅覺感受沒有唯一標準答案"] },
    ],
    questions: ["我想學的是日常使用，還是專業調香？", "我能否從標籤找到完整植物學名？", "產品是否提供清楚的保存與使用說明？", "我是否需要老師帶領安全觀念與實作流程？"],
    related: [
      { label: "COURSE GUIDE", title: "幫我選課導航", href: "/course-guide/" },
      { label: "KNOWLEDGE", title: "從薰衣草精油開始閱讀標籤", href: "/lavender-essential-oil/" },
      { label: "WELLINA", title: "品牌故事與產品介紹", href: "/wellina-products/" },
    ],
  },
  {
    kind: "search",
    slug: "essential-oil-diffusing",
    eyebrow: "DIFFUSING BASICS",
    title: "精油擴香入門：從空間、設備與紀錄開始",
    summary: "擴香不是只挑一個喜歡的味道，也要一起考慮空間大小、設備說明、使用者與環境條件。",
    lead: "先把擴香當成一項可以觀察與調整的氣味練習。從單方、短時間與清楚紀錄開始，更容易知道自己真正喜歡什麼。",
    sections: [
      { number: "01", title: "先看空間與使用者", copy: "確認空間是否通風、有哪些人或動物共同使用，以及設備放置位置；有特殊需求時先向合格專業人員詢問。" },
      { number: "02", title: "依設備說明操作", copy: "不同擴香設備的容量、清潔方式與操作時間不同，優先依產品與設備原廠說明，不自行套用固定數字。" },
      { number: "03", title: "建立擴香紀錄", copy: "記下使用的精油、空間、時間、第一印象與後續感受。累積幾次之後，就能比較出自己的偏好。" },
    ],
    questions: ["這個空間有哪些人會一起使用？", "設備原廠的使用與清潔方式是什麼？", "我能否先以單一香氣建立基準？", "使用後是否有任何不舒服，需要立即停止？"],
    related: [
      { label: "FIRST STEP", title: "精油怎麼選？", href: "/essential-oil-choice/" },
      { label: "KNOWLEDGE", title: "認識尤加利精油的物種標示", href: "/eucalyptus-essential-oil/" },
      { label: "COURSE GUIDE", title: "幫我找到適合的入門課", href: "/course-guide/" },
    ],
  },
  {
    kind: "search",
    slug: "essential-oil-perfume",
    eyebrow: "SCENT CREATION",
    title: "精油香水與調香入門：先學會描述香氣",
    summary: "調香的第一步不是急著追求完成品，而是建立嗅聞、描述、比較與記錄香氣的能力。",
    lead: "一張聞香紙、一份嗅聞紀錄，就能成為調香學習的開始。先建立自己的香氣語言，再理解原料如何彼此呼應。",
    sections: [
      { number: "01", title: "建立香氣詞彙", copy: "用花香、草本、木質、清新、甜潤等方向記錄第一印象，也可以寫下顏色、畫面與記憶。" },
      { number: "02", title: "比較前後變化", copy: "同一香氣在不同時間可能呈現不同感受。記下嗅聞時間與變化，比只寫喜歡或不喜歡更有用。" },
      { number: "03", title: "從小型練習累積", copy: "先練習兩到三種原料的關係，再逐步增加複雜度；所有比例、基底與使用方式以課程帶領及材料說明為準。" },
    ],
    questions: ["我能否用三個詞描述這個香氣？", "它讓我想到什麼顏色、材質或畫面？", "經過一段時間後，哪些部分改變了？", "我想走生活體驗、品牌香氣，還是專業調香路徑？"],
    related: [
      { label: "CAREER", title: "如何成為調香師？", href: "/become-perfumer/" },
      { label: "KNOWLEDGE", title: "從玫瑰精油練習氣味記錄", href: "/rose-essential-oil/" },
      { label: "COURSE GUIDE", title: "幫我選課導航", href: "/course-guide/" },
    ],
  },
  {
    kind: "search",
    slug: "become-aromatherapist",
    eyebrow: "LEARNING PATH",
    title: "如何成為芳療師？先看清楚學習目標與路徑",
    summary: "不同課程與機構的培訓目標、時數、評量及證書關係可能不同，先從自己想投入的方向開始比較。",
    lead: "與其先問哪一張證書最好，不如先確認自己希望累積生活應用、專業知識、教學能力，或跨專業工作的哪一部分。",
    sections: [
      { number: "01", title: "定義自己的角色方向", copy: "先區分興趣學習、專業進修、講師培訓或國際認證。不同目標需要的課程深度與實作累積不同。" },
      { number: "02", title: "比較完整課程資訊", copy: "查看先備條件、內容、時數、講師、評量、教材、實作與課後支持，不只看課程名稱。" },
      { number: "03", title: "核對證書與發證關係", copy: "若涉及國際單位，應從官方來源確認正式名稱、適用範圍、學校關係與目前有效狀態。" },
    ],
    questions: ["我想把芳香知識用在哪個工作或生活場景？", "我需要的是單次體驗、完整培訓，還是講師能力？", "課程的評量與實作方式是否寫清楚？", "認證關係能否在官方來源查到？"],
    related: [
      { label: "COMPARE", title: "芳療課程與國際認證怎麼比較？", href: "/compare-aromatherapy-courses/" },
      { label: "COURSE GUIDE", title: "幫我選課導航", href: "/course-guide/" },
      { label: "CURRENT COURSES", title: "查看 WELLINA 現有課程", href: "https://dr-wellina.com/class/" },
    ],
  },
  {
    kind: "search",
    slug: "become-perfumer",
    eyebrow: "PERFUMER PATH",
    title: "如何成為調香師？從嗅覺訓練到作品紀錄",
    summary: "調香學習可以從氣味詞彙、原料辨識、配方紀錄與作品整理逐步累積，再依目標選擇生活、品牌或專業路徑。",
    lead: "調香不是只靠靈感。能穩定描述、重複記錄與回頭修正，才能讓一個氣味想法逐漸成為可溝通的作品。",
    sections: [
      { number: "01", title: "練習嗅聞與描述", copy: "建立自己的香氣詞彙，同時學會使用共通分類與原料名稱，讓感受可以被記錄與討論。" },
      { number: "02", title: "累積原料與配方紀錄", copy: "每次練習保留日期、原料、比例、嗅聞變化與修改理由，逐步形成可回顧的學習檔案。" },
      { number: "03", title: "形成作品與方向", copy: "依興趣選擇個人香氣、活動體驗、品牌氣味或更完整的專業訓練，再補足相應知識。" },
    ],
    questions: ["我是否願意持續做嗅聞紀錄？", "我想創作個人香氣，還是處理品牌需求？", "課程是否包含原料辨識、實作與作品回饋？", "完成後能留下哪些可回顧的作品資料？"],
    related: [
      { label: "BEGINNER", title: "精油香水與調香入門", href: "/essential-oil-perfume/" },
      { label: "COURSE GUIDE", title: "幫我選課導航", href: "/course-guide/" },
      { label: "COLLABORATION", title: "了解品牌香氣合作", href: "/#collaboration" },
    ],
  },
  {
    kind: "search",
    slug: "compare-aromatherapy-courses",
    eyebrow: "COURSE COMPARISON",
    title: "芳療課程與國際認證怎麼比較？",
    summary: "比較課程時，除了名稱與價格，也要一起看學習目標、內容、時數、師資、評量、實作及證書來源。",
    lead: "比較課程時，不只看名稱與價格，也要理解學習內容、實作方式、評量標準及證書來源。",
    sections: [
      { number: "01", title: "先比較課程本身", copy: "列出適合對象、先備條件、課程內容、總時數、授課形式、實作與評量方式。" },
      { number: "02", title: "再比較證書關係", copy: "分開確認授課機構、發證單位、考評方式、有效期間與官方查詢來源，避免只看標誌或簡稱。" },
      { number: "03", title: "最後看學習支持", copy: "確認是否有課後教材、練習回饋、複習方式、下一階段課程與可聯絡的諮詢窗口。" },
    ],
    questions: ["課程目標與適合對象是否清楚？", "時數、實作與評量方式是否完整？", "授課、考評與發證單位是否分開說明？", "官方來源與有效狀態是否可以查核？", "課後能否持續取得學習資料與支持？"],
    related: [
      { label: "CAREER", title: "如何成為芳療師？", href: "/become-aromatherapist/" },
      { label: "COURSE GUIDE", title: "幫我選課導航", href: "/course-guide/" },
      { label: "CURRENT COURSES", title: "查看 WELLINA 現有課程", href: "https://dr-wellina.com/class/" },
    ],
  },
];

export const oilGuides: OilGuide[] = [
  {
    kind: "oil",
    slug: "lavender-essential-oil",
    eyebrow: "ESSENTIAL OIL NOTE · 01",
    title: "薰衣草精油：先從植物學名開始認識",
    summary: "薰衣草是常見名稱，但不同物種不能只靠中文名稱判斷。本頁以真正薰衣草作為標籤閱讀與嗅聞記錄的起點。",
    lead: "從植物身分、產品標籤與嗅聞記錄開始，建立清楚而可持續的精油學習方式。",
    botanical: { commonName: "真正薰衣草", scientificName: "Lavandula angustifolia Mill.", family: "Lamiaceae 唇形科", note: "Kew 將此學名列為目前接受的物種名。實際產品仍應以標籤上的完整學名與資料為準。", sourceLabel: "Kew Science · Plants of the World Online", sourceUrl: "https://powo.science.kew.org/taxon/449008-1" },
    image: { src: "/images/essential-oils/lavandula-angustifolia.jpg", alt: "真正薰衣草 Lavandula angustifolia 的花序與植株", credit: "Bernard DUPONT", license: "CC BY-SA 2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:True_Lavender_(Lavandula_angustifolia)_(8331930335).jpg" },
    research: [{ title: "Essential Oil Profile and Yield of Corolla, Calyx, Leaf, and Whole Flowering Top of Cultivated Lavandula angustifolia Mill. (Lamiaceae) from Utah", journal: "Molecules", year: "2021", note: "比較花冠、花萼、葉片與開花頂端的精油產率及 GC-FID／GC-MS 香氣成分輪廓。", sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/33920647/" }],
    scentWords: ["花香", "草本", "清新", "柔和", "乾燥植物感"],
    sections: [
      { number: "01", title: "閱讀標籤", copy: "先找完整植物學名，再查看植物部位、萃取方式、來源、批次與使用說明。" },
      { number: "02", title: "建立嗅聞紀錄", copy: "在聞香紙上記下剛開始、稍後與更久之後的感受；氣味詞只是提示，不是標準答案。" },
      { number: "03", title: "進入課程應用", copy: "把植物辨識與嗅聞記錄帶進單方認識、調香練習及課堂配方，逐步累積自己的學習筆記。" },
    ],
    related: [
      { label: "NEXT OIL", title: "茶樹精油", href: "/tea-tree-essential-oil/" },
      { label: "START", title: "精油怎麼選？", href: "/essential-oil-choice/" },
      { label: "COURSE", title: "幫我選課導航", href: "/course-guide/" },
    ],
  },
  {
    kind: "oil",
    slug: "tea-tree-essential-oil",
    eyebrow: "ESSENTIAL OIL NOTE · 02",
    title: "茶樹精油：用完整學名確認植物身分",
    summary: "看到茶樹兩個字時，仍要回到植物學名與產品資料。本頁以 Melaleuca alternifolia 作為辨識起點。",
    lead: "先練習辨識，再談使用。中文名稱、商品名稱與植物學名各自扮演不同角色，不能互相取代。",
    botanical: { commonName: "茶樹", scientificName: "Melaleuca alternifolia (Maiden & Betche) Cheel", family: "Myrtaceae 桃金孃科", note: "Kew 將此學名列為目前接受的物種名。官網只使用植物辨識資料，不由此延伸產品效果。", sourceLabel: "Kew Science · Plants of the World Online", sourceUrl: "https://powo.science.kew.org/taxon/597833-1" },
    image: { src: "/images/essential-oils/melaleuca-alternifolia.jpg", alt: "茶樹 Melaleuca alternifolia 的白色花序與葉片", credit: "Geoff Derrin", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Melaleuca_alternifolia_flowers.jpg" },
    research: [{ title: "Chemical and Biological Characterization of Melaleuca alternifolia Essential Oil", journal: "Plants", year: "2022", note: "以 GC-MS 分析茶樹精油的化學組成；網站引用限於原料特性與研究方法閱讀。", sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/35214891/" }],
    scentWords: ["清新", "草本", "綠葉", "乾爽", "鮮明"],
    sections: [
      { number: "01", title: "辨認資料層次", copy: "依序核對中文名稱、完整學名、科別、植物部位與萃取資料，建立自己的原料卡。" },
      { number: "02", title: "比較個人感受", copy: "以少量嗅聞練習記錄強弱、距離與時間變化，不把個人感受寫成所有人的共同結果。" },
      { number: "03", title: "保留安全資訊", copy: "保存原產品標籤、批次與使用說明；進行配方練習時，依課程帶領與材料說明操作。" },
    ],
    related: [
      { label: "NEXT OIL", title: "薄荷精油", href: "/peppermint-essential-oil/" },
      { label: "START", title: "精油怎麼選？", href: "/essential-oil-choice/" },
      { label: "COURSE", title: "幫我選課導航", href: "/course-guide/" },
    ],
  },
  {
    kind: "oil",
    slug: "peppermint-essential-oil",
    eyebrow: "ESSENTIAL OIL NOTE · 03",
    title: "薄荷精油：學名中的乘號也很重要",
    summary: "胡椒薄荷的學名 Mentha × piperita 帶有雜交符號；閱讀標籤時，每一個字元都可能是植物辨識的一部分。",
    lead: "這一頁把薄荷變成一堂標籤閱讀課。先確認物種，再用嗅聞紀錄建立自己的香氣語言。",
    botanical: { commonName: "胡椒薄荷", scientificName: "Mentha × piperita L.", family: "Lamiaceae 唇形科", note: "Kew 將此名稱列為目前接受的雜交種，並保留學名中的 × 符號。", sourceLabel: "Kew Science · Plants of the World Online", sourceUrl: "https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A450969-1" },
    image: { src: "/images/essential-oils/mentha-piperita.jpg", alt: "胡椒薄荷 Mentha × piperita 的紫色花序", credit: "Dinnye", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Flowers_of_Mentha_%C3%97_piperita.jpg" },
    research: [{ title: "Chemical composition, olfactory evaluation and antioxidant effects of essential oil from Mentha x piperita", journal: "Natural Product Communications", year: "2009", note: "以 GC/FID 與 GC-MS 分析胡椒薄荷精油成分，並包含嗅覺評估資料。", sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/19768994/" }],
    scentWords: ["薄荷", "清涼感", "穿透", "草本", "鮮明"],
    sections: [
      { number: "01", title: "保留完整學名", copy: "建立原料資料時不要省略雜交符號、命名者與標籤上的其他辨識資訊。" },
      { number: "02", title: "控制嗅聞節奏", copy: "香氣強度因人而異。以課堂指定方式保持距離並適時休息，有不舒服就停止。" },
      { number: "03", title: "連到調香筆記", copy: "記錄它與花香、木質或其他草本原料並置時的感受，先寫觀察，不急著下結論。" },
    ],
    related: [
      { label: "NEXT OIL", title: "玫瑰精油", href: "/rose-essential-oil/" },
      { label: "DIFFUSING", title: "精油擴香入門", href: "/essential-oil-diffusing/" },
      { label: "COURSE", title: "幫我選課導航", href: "/course-guide/" },
    ],
  },
  {
    kind: "oil",
    slug: "rose-essential-oil",
    eyebrow: "ESSENTIAL OIL NOTE · 04",
    title: "玫瑰精油：先辨認名稱，再記錄香氣層次",
    summary: "玫瑰相關原料有不同植物與製作資料。本頁以大馬士革玫瑰的植物名稱作為閱讀示例。",
    lead: "玫瑰不只是一個氣味印象。從學名、原料型態與嗅聞變化開始記錄，能讓感受變得更清楚。",
    botanical: { commonName: "大馬士革玫瑰", scientificName: "Rosa × damascena Herrm.", family: "Rosaceae 薔薇科", note: "Kew 將此名稱列為人工雜交類群。實際原料仍需同時核對學名、產品類型與製作資料。", sourceLabel: "Kew Science · Plants of the World Online", sourceUrl: "https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A2968261-4" },
    image: { src: "/images/essential-oils/rosa-damascena.jpg", alt: "大馬士革玫瑰 Rosa × damascena 的粉紅色花朵", credit: "H. Zell", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Rosa_damascena_003.JPG" },
    research: [{ title: "Rosa × damascena Herrm. essential oil: anti-tyrosinase activity and phytochemical composition", journal: "Frontiers in Pharmacology", year: "2024", note: "研究以 GC-MS 建立大馬士革玫瑰精油的植化成分資料；官網不將體外研究結果轉寫成個人使用效果。", sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/39323629/" }],
    scentWords: ["花香", "柔潤", "甜感", "綠意", "層次"],
    sections: [
      { number: "01", title: "先確認原料身分", copy: "查看完整學名、原料型態、萃取或製作方式、產地與批次，避免只以玫瑰二字推定。" },
      { number: "02", title: "描述香氣層次", copy: "除了花香，也可以記錄甜感、綠意、粉感、明暗與聯想到的材質；保留自己的語言。" },
      { number: "03", title: "連結調香學習", copy: "把單方紀錄帶進調香課，比較它在不同組合中的位置；正式配方需完成內容與安全審核。" },
    ],
    related: [
      { label: "NEXT OIL", title: "尤加利精油", href: "/eucalyptus-essential-oil/" },
      { label: "PERFUME", title: "精油香水與調香入門", href: "/essential-oil-perfume/" },
      { label: "COURSE", title: "幫我選課導航", href: "/course-guide/" },
    ],
  },
  {
    kind: "oil",
    slug: "eucalyptus-essential-oil",
    eyebrow: "ESSENTIAL OIL NOTE · 05",
    title: "尤加利精油：一個常用名，可能對應不同物種",
    summary: "尤加利是一個廣泛使用的中文名稱。本頁以藍膠尤加利作為植物辨識示例，提醒閱讀者回到完整學名。",
    lead: "同樣寫著尤加利，實際植物未必相同。先看學名，再比較香氣與產品資料，是最重要的入門動作。",
    botanical: { commonName: "藍膠尤加利", scientificName: "Eucalyptus globulus Labill.", family: "Myrtaceae 桃金孃科", note: "Kew 將此學名列為目前接受的物種名。本頁不以這一物種代表所有尤加利類原料。", sourceLabel: "Kew Science · Plants of the World Online", sourceUrl: "https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A592965-1" },
    image: { src: "/images/essential-oils/eucalyptus-globulus.jpg", alt: "藍膠尤加利 Eucalyptus globulus 的葉片、花與果實", credit: "Forest & Kim Starr", license: "CC BY 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Starr_051123-5467_Eucalyptus_globulus.jpg" },
    research: [{ title: "Chemical Composition and Biological Activities of Eucalyptus globulus Essential Oil", journal: "Plants", year: "2023", note: "以 GC 與 GC-MS 分析藍膠尤加利精油的化學組成；研究結果僅依原研究條件理解。", sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/36903935/" }],
    scentWords: ["清新", "葉片", "穿透", "乾爽", "樹木"],
    sections: [
      { number: "01", title: "不要只看中文名稱", copy: "尤加利相關產品應以完整植物學名協助辨識，並保留植物部位、萃取方式與批次資料。" },
      { number: "02", title: "分開比較不同原料", copy: "若課堂上有不同尤加利原料，分別使用聞香紙並清楚編號，避免名稱與感受混在一起。" },
      { number: "03", title: "先閱讀使用說明", copy: "依產品標籤與設備說明操作；有兒童、動物或特殊需求的環境，先尋求合格專業建議。" },
    ],
    related: [
      { label: "FIRST OIL", title: "回到薰衣草精油", href: "/lavender-essential-oil/" },
      { label: "DIFFUSING", title: "精油擴香入門", href: "/essential-oil-diffusing/" },
      { label: "COURSE", title: "幫我選課導航", href: "/course-guide/" },
    ],
  },
];

export const coursePaths: CoursePath[] = [
  { id: "experience", number: "01", title: "我想先體驗香氣", forWhom: "第一次接觸、想了解自己是否喜歡調香與精油學習。", startWith: "主題調香、單次活動或生活化入門內容。", nextStep: "先看現有體驗課，再依喜歡的主題進入進階學習。", href: "https://dr-wellina.com/class/" },
  { id: "daily", number: "02", title: "我想學日常應用", forWhom: "希望看懂標籤、建立安全觀念，並整理自己的香氣筆記。", startWith: "精油辨識、嗅聞紀錄、擴香與基礎調香。", nextStep: "先閱讀五個精油知識頁，再選擇有實作帶領的課程。", href: "/essential-oil-choice/" },
  { id: "professional", number: "03", title: "我想系統進修", forWhom: "希望建立較完整的芳香知識、原料理解與實作能力。", startWith: "先確認先備條件、課程時數、實作、評量與課後支持。", nextStep: "使用課程比較清單，整理自己的目標後再諮詢。", href: "/compare-aromatherapy-courses/" },
  { id: "trainer", number: "04", title: "我想培養教學能力", forWhom: "已有基礎，希望學習課程設計、示範、帶領與安全表達。", startWith: "從課程設計、示範練習、帶領技巧與安全表達建立教學基礎。", nextStep: "向 WELLINA 說明背景、經驗與希望授課的對象。", href: "https://tr.ee/HpdgvcwyGW" },
  { id: "international", number: "05", title: "我想了解國際認證", forWhom: "希望比較不同機構、培訓標準、評量與證書關係。", startWith: "先確認正式單位、課程關係、考評方式與官方來源。", nextStep: "比較課程內容、評量方式、證書名稱與申請條件。", href: "/compare-aromatherapy-courses/" },
  { id: "organization", number: "06", title: "我要規劃團體活動", forWhom: "企業、學校、社區或品牌，希望邀請講師或設計香氣活動。", startWith: "依對象、人數、時間、場域與活動目的規劃。", nextStep: "直接提供活動需求，由 WELLINA 回覆適合的合作方向。", href: "https://tr.ee/HpdgvcwyGW" },
];

export const allContentPages = [...searchGuides, ...oilGuides];

export function getContentPage(slug: string) {
  return allContentPages.find((page) => page.slug === slug);
}

export const contentPageSlugs = allContentPages.map((page) => page.slug);
