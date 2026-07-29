# Day015｜完成 About Component 元件化

日期：2026-07-30

---

# 本期目標

完成首頁 About 區塊的 Component 化，持續簡化 App.jsx，讓網站架構更加模組化。

---

# 本期重點

- 建立 About Component
- 將 About 區塊自 App.jsx 拆分
- 建立 App → About 的引用關係
- 確認網站畫面維持一致
- 熟悉 React Component 化流程

---

# 本期完成內容

## 1. 建立 About Component

建立：

```
src/components/About/About.jsx
```

並將首頁 About 區塊完整搬移至 About Component。

---

## 2. App.jsx 引用 About

新增：

```jsx
import About from "./components/About/About";
```

並於 `<main>` 中使用：

```jsx
<About />
```

取代原本直接寫在 App.jsx 的 About 區塊。

---

## 3. 完成第三個 Component 重構

目前首頁 Component 完成情況：

```
App
├── Navbar      ✅
├── Hero        ✅
├── About       ✅
├── LearningMap
└── Footer
```

---

## 4. localhost 驗證

執行：

```bash
npm run dev
```

確認：

- About 正常顯示
- 網站版面維持一致
- Component 引用正常
- 網站功能未受影響

---

# 本期學習重點

透過第三次 Component 重構，已熟悉網站元件化的固定流程：

建立 Component

↓

搬移內容

↓

Import Component

↓

引用 Component

↓

驗證網站畫面

目前已能獨立完成 Component 拆分，不需再逐步說明操作流程。

---

# 本期心得

完成首頁第三個 Component（About）重構。

與前兩期相比，操作更加順暢，Component 化流程已逐漸成為固定開發模式。

App.jsx 的角色持續轉變為網站組裝中心，各功能區塊也開始具備獨立維護能力。

---

# 下期規劃（Day016）

預計完成：

- LearningMap Component
- App.jsx 持續簡化
- localhost 驗證
- Git Commit
- GitHub Pages 更新

---

# 專案開發策略更新

經 Day013～Day015 三次 Component 重構後，已完成 React Component 化基礎練習。

自 Day016 起，調整開發方式：

- 不再重複相同的搬移練習。
- 由 AI 直接提供完整 Component 程式。
- 以網站功能開發與內容建置為主要目標。
- 每期維持約 30 分鐘完成一個明確成果。

---

# 專案進度

首頁 Component 化進度：

- ✅ Navbar
- ✅ Hero
- ✅ About
- ⏳ LearningMap
- ⏳ Footer

完成度：3 / 5（60%）