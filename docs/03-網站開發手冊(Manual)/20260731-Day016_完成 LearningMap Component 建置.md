# Day016｜完成 LearningMap Component 建置

日期：2026-07-31

---

# 本期目標

完成首頁 LearningMap（我分享什麼）區塊的 Component 建置，持續簡化 App.jsx，讓網站架構更加模組化。

---

# 本期重點

- 建立 LearningMap Component
- 將「我分享什麼」區塊獨立管理
- 建立 App → LearningMap 的引用關係
- 完成第四個首頁 Component
- 驗證網站畫面維持一致

---

# 本期完成內容

## 1. 建立 LearningMap Component

建立：

```
src/components/LearningMap/LearningMap.jsx
```

將首頁「我分享什麼」內容獨立至 LearningMap Component。

---

## 2. App.jsx 引用 LearningMap

新增：

```jsx
import LearningMap from "./components/LearningMap/LearningMap";
```

並於 `<main>` 中使用：

```jsx
<LearningMap />
```

取代原本直接寫於 App.jsx 的內容。

---

## 3. localhost 驗證

執行：

```bash
npm run dev
```

確認：

- LearningMap 正常顯示
- 網站版面維持一致
- Component 引用正常
- 網站功能未受影響

---

# 本期學習重點

透過首頁各區塊逐步 Component 化，網站架構已由單一 App.jsx 逐步轉為多個獨立元件共同組成。

App.jsx 的角色已逐漸成為網站首頁的組裝中心，各 Component 可獨立維護與擴充。

---

# 本期心得

完成首頁第四個 Component（LearningMap）。

目前 Component 化流程已成為固定開發模式，後續將重心逐步轉向網站功能建置與視覺優化，而非重複練習 Component 拆分。

---

# 下期規劃（Day017）

預計完成：

- Articles Component
- localhost 驗證
- Git Commit
- GitHub Pages 更新

---

# 專案進度

首頁 Component 建置進度：

- ✅ Navbar
- ✅ Hero
- ✅ About
- ✅ LearningMap
- ⏳ Articles
- ⏳ Resources
- ⏳ Contact
- ⏳ Footer

完成度：4 / 8（50%）