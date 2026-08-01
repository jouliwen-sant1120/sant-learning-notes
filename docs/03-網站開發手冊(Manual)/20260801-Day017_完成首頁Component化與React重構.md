# 20260801-Day017_完成首頁Component化與React重構

日期：2026/08/01

---

# 今日目標

完成首頁剩餘區塊的 Component 化，讓 App.jsx 僅保留畫面組裝功能。

今日完成：

- Articles Component
- Resources Component
- Contact Component
- Footer Component

至此，首頁所有主要區塊皆已完成元件化。

---

# 今日完成內容

## 1. 建立四個新的 Component

建立以下資料夾與 JSX：

```
src/components/

Articles/
    Articles.jsx

Resources/
    Resources.jsx

Contact/
    Contact.jsx

Footer/
    Footer.jsx
```

每個 Component 均負責自己的畫面內容，不再將所有 JSX 集中於 App.jsx。

---

## 2. App.jsx 完成瘦身

搬移前：

App.jsx 同時負責：

- Navbar
- Hero
- About
- LearningMap
- Articles
- Resources
- Results
- Contact
- Footer

所有 JSX 集中於同一檔案。

---

搬移後：

```jsx
<>
    <Navbar />

    <main>
        <Hero />
        <About />
        <LearningMap />
        <Articles />
        <Resources />

        <section id="results">
            ...
        </section>

        <Contact />
    </main>

    <Footer />
</>
```

App.jsx 已轉變為首頁的組裝中心，不再負責各區塊內容。

---

## 3. Resources Component 學到的重點

Resources.jsx 第一次需要引用外部資料。

因此加入：

```jsx
import { resources } from "../../data";
```

由於 Resources.jsx 位於：

```
src/components/Resources/
```

必須退回兩層才能找到：

```
src/data.js
```

因此路徑使用：

```
../../data
```

這也是目前第一個需要 import 資料的 Component。

---

## 4. Contact 與 Footer 的位置修正

一開始將 Contact 放在 Results 前面。

測試後發現網站流程不自然。

因此重新調整為：

```
Hero

↓

About

↓

LearningMap

↓

Articles

↓

Resources

↓

成果分享(Results)

↓

聯絡我(Contact)

↓

Footer
```

網站閱讀流程更加完整。

---

Footer 則放置於：

```jsx
</main>

<Footer />
```

而不是：

```jsx
<main>

...

<Footer />

</main>
```

原因：

Footer 屬於整個網站的頁尾，不屬於主要內容(Main)。

---

# 今日最大的學習

## React Component 並不是複製貼上

真正重要的是：

每個 Component 只負責一件事情。

例如：

```
Navbar

只負責導覽列

Hero

只負責首頁 Banner

Articles

只負責文章區

Footer

只負責頁尾
```

App.jsx 則負責：

把所有 Component 排列組裝。

這就是 React 的核心設計理念：

**Component-Based Architecture（元件化架構）**

---

# 今日建立的開發 SOP

今天第一次建立完整的重構流程。

未來所有大型修改皆遵循此流程：

```
建立 Component

↓

搬移程式碼

↓

Import Component

↓

確認畫面正常

↓

刪除 App.jsx 原始程式

↓

再次測試
```

今天所有 Component 皆採此方式完成。

過程中雖然速度較慢，

但幾乎沒有造成網站錯誤。

這也是實務開發常見的 Refactor（重構）方式。

---

# 首頁 Component 完成度

| Component | 狀態 |
|-----------|------|
| Navbar | ✅ |
| Hero | ✅ |
| About | ✅ |
| LearningMap | ✅ |
| Articles | ✅ |
| Resources | ✅ |
| Results | 暫保留於 App.jsx |
| Contact | ✅ |
| Footer | ✅ |

首頁 Component 化完成度：

**8 / 9（Results 暫未獨立）**

---

# 專案成果

目前首頁已成功完成 Component 化。

App.jsx 已由數百行 JSX，轉變為清楚的首頁組裝中心。

Component 架構更加符合 React 專案的維護方式，也為後續加入 Router、Markdown、文章系統及更多功能奠定良好的基礎。

---

# 下期規劃（Day018）

預計開始：

- Results Component 化
- App.jsx 完成首頁 100% 元件化
- 各 Component CSS 模組化
- App.css 僅保留全域樣式