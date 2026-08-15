# Dr. Ivy · WELLINA 官方網站

Dr. Ivy／WELLINA 芳香教育與專業培訓網站的首頁原型與可攜式發佈版本。

## 目前架構

- `app/`：首頁的主要內容與視覺樣式。
- `public/images/`：網站實際使用的 Ivy／WELLINA 圖片。
- `scripts/export-static.mjs`：將首頁轉成不綁平台的靜態網站。
- `docs/`：可直接由 GitHub Pages 發佈，也可搬到其他靜態主機。
- `tests/`：檢查原始首頁與可攜式發佈版本。

## 常用指令

- `pnpm dev`：開啟本機預覽。
- `pnpm build`：檢查原始網站能否建置。
- `pnpm test`：建置、產生 `docs/` 並執行完整測試。
- `pnpm export:static`：更新 GitHub Pages 使用的 `docs/`。

## 發佈與搬家

目前預覽以 GitHub Pages 的 `main` 分支／`docs` 資料夾為主。所有內部圖片與樣式採相對路徑，因此未來可改用自有網域，或將 `docs/` 搬到其他平台，而不必重寫首頁。

完整規則見 `DEPLOYMENT.md`。
