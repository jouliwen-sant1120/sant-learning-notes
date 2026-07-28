# Day013｜第一個 React 元件重構（Navbar）

日期：2026-07-28

---

# 本期目標

開始正式進入 React Component 開發。

完成第一個元件（Navbar）拆分，
理解 React Component 的建立、引用與使用方式。

---

# 本期完成內容

## 1. 建立 Navbar Component

建立：

src/components/Navbar/Navbar.jsx

將原本 App.jsx 的 Header 搬移至 Navbar Component。

---

## 2. App.jsx 引用 Navbar

新增：

```jsx
import Navbar from "./components/Navbar/Navbar";
```

並使用：

```jsx
<Navbar />
```

取代原本 Header。

---

## 3. 完成第一個 Component 重構

將 App.jsx 原本 Header 移除。

目前：

App.jsx

↓

Navbar Component

完成第一個元件化。

---

## 4. 建立 React 開發流程

首次理解 React Component 工作方式：

建立 Component

↓

Import Component

↓

使用 Component

↓

驗證

↓

移除舊程式

---

## 5. 建立網站開發流程

建立本專案固定開發流程：

VS Code（施工）

↓

localhost（⚡ Sant）

↓

Commit

↓

Push

↓

GitHub Pages（🐈‍⬛ 黑貓）

---

# 本期學習重點

以前：

App.jsx

↓

Header（HTML）

現在：

App.jsx

↓

<Navbar />

↓

Navbar.jsx

網站功能完全相同，

但責任正式交由 Component 管理。

這也是 React Component 化的第一步。

---

# 本期心得

今天不是增加網站功能，

而是完成網站架構的重要重構。

理解了：

- Component
- import
- JSX
- localhost（Vite）
- GitHub Pages

也建立了未來網站開發固定流程。

Day013 為 React 元件化正式開始的一天。