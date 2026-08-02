# Sant Website 開發手冊

## 日期

2026/08/01

---

# Day018

## 主題

完成 Results Component，
完成首頁全部 Component 化。

---

# 今日目標

完成首頁所有區塊 Component 化。

---

# 完成內容

## Results Component

建立：

src/components/Results/

建立：

Results.jsx

內容：

- 成果分享
- results.map()
- article-card
- key={item.title}

資料來源：

data.js

---

## App.jsx

新增

import Results from "./components/Results/Results";

首頁改為

<Results />

並移除舊有 Results JSX。

---

# 今日完成 Component

- Navbar
- Hero
- About
- LearningMap
- Articles
- Resources
- Results
- Contact
- Footer

首頁完成 Component 化。

---

# App.jsx 架構

```jsx
<>
  <Navbar />

  <main>
    <Hero />
    <About />
    <LearningMap />
    <Articles />
    <Resources />
    <Results />
  </main>

  <Contact />

  <Footer />
</>
```

App.jsx 已成為首頁組裝中心。

---

# 專案成果

首頁由大型 JSX

↓

拆分為九個獨立 Component。

Component：

- Navbar
- Hero
- About
- LearningMap
- Articles
- Resources
- Results
- Contact
- Footer

專案結構更符合 React 開發模式。

---

# 本日心得

Component 化最大的好處：

- 容易維護
- 容易閱讀
- 容易擴充
- 可重複使用

App.jsx 不再負責所有畫面，
而只負責組裝各個元件。

---

# 目前進度

首頁 Component

██████████

100%

---

網站整體

約 60%

---

# 下期規劃 (Day019)

預計開始：

## CSS 模組化

建立：

Hero.css

About.css

LearningMap.css

Articles.css

Resources.css

Results.css

Contact.css

Footer.css

Navbar.css

最後：

App.css

只保留：

- body
- html
- reset
- 共用 class

完成後，

Component 將真正做到：

JSX

CSS

完全分離。

---

# Git Commit

refactor: 完成 Results Component 並完成首頁 Component 化