# Sant Website 開發手冊

## 日期

2026/08/06

---

# Day019

## 主題

完成 Articles CSS Component 化。

---

# 今日目標

將 Articles 的 CSS 從 App.css 中拆分，建立獨立樣式檔，使 Component 與樣式完全對應。

---

# 完成內容

## 1. 建立 Articles.css

建立位置：

src/components/Articles/

新增：

Articles.css

---

## 2. Articles.jsx 引入 CSS

第一行加入：

```jsx
import "./Articles.css";
```

完成後 Articles Component 可自行管理樣式。

---

## 3. App.css 拆分

將以下樣式移出：

- #articles h2
- .article-list
- .article-card
- .article-card h3
- .article-card p
- .article-card a
- .article-card a:hover

全部搬移至：

Articles.css

App.css 保留共用樣式。

---

## 4. 測試結果

完成後：

- 網站正常顯示
- 無版面錯亂
- 無 Console Error
- Vite Hot Reload 正常
- Articles 顯示正常
- Hover 效果正常

---

# 學習重點

## React Component CSS 模組化

每一個 Component：

```
Component.jsx
        │
        ├── import "./Component.css"
        │
        ▼
Component.css
```

目的：

- JSX 與 CSS 放在一起
- Component 可獨立維護
- 提高可讀性
- 降低 App.css 複雜度
- 符合 React 專案架構

---

# 今日成果

目前已完成 CSS Component 化：

- ✅ Hero
- ✅ About
- ✅ LearningMap
- ✅ Articles

尚未完成：

- Resources
- Results
- Contact
- Footer

---

# 專案目前進度

首頁 Component：

100%

首頁 CSS Component：

50%

網站整體完成度（預估）：

約 80%

---

# 今日心得

今天開始已能熟悉 CSS Component 化流程：

1. 建立 Component.css
2. JSX import CSS
3. 從 App.css 找出對應樣式
4. 剪下並搬移
5. App.css 刪除原始樣式
6. 測試畫面
7. 確認無錯誤

操作速度較前幾日明顯提升，已開始建立 React Component 模組化的思維，而非僅依照步驟操作。

---

# 下期預計（Day020）

預計完成：

- Resources.css
- Results.css
- Contact.css
- Footer.css

完成後：

首頁 CSS 將全面完成 Component 化，正式結束首頁樣式拆分階段，下一步將開始規劃網站功能擴充（如 Router、Markdown、作品展示等）。

---

版本：v1.0