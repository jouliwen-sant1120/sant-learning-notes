Day025｜React Router 建立第一個獨立文章頁

日期：2026/08/25

一、本期目標

在不破壞原本單頁式首頁的前提下，建立 React Router(React
路由)架構，讓「精選文章」中的第一篇文章可以從首頁進入獨立頁面。

二、本期完成內容

1. 安裝 React Router

於專案根目錄執行：

npm install react-router-dom

2. 設定 BrowserRouter

修改 src/main.jsx，加入：

import { BrowserRouter } from "react-router-dom";

並將 <App /> 包裝：

<BrowserRouter basename="/sant-learning-notes">
  <App />
</BrowserRouter>

basename 用於 GitHub Pages 的網站子路徑：

/sant-learning-notes

避免路由找不到首頁而出現空白畫面。

3. 補完整 Home.jsx

建立路由後，完整首頁內容集中至：

src/pages/Home.jsx

首頁架構：

Home
├─ Navbar
├─ Hero
├─ About
├─ LearningMap
├─ Articles
├─ Resources
├─ Results
├─ Contact
└─ Footer

4. 建立第一篇文章頁

新增：

src/pages/AiWorkflow.jsx

建立第一個獨立文章頁：

/articles/ai-workflow

目前先建立基本測試內容：

AI 如何改變我的工作方式

5. 修改 App.jsx 建立路由

目前路由：

路徑(Path)                頁面(Component)

/                       Home.jsx
/articles/ai-workflow   AiWorkflow.jsx

網站架構：

App.jsx
├─ /
│  └─ Home.jsx
│
└─ /articles/ai-workflow
   └─ AiWorkflow.jsx

6. 串接首頁文章連結

修改：

src/components/Articles/Articles.jsx

加入：

import { Link } from "react-router-dom";

將第一篇文章原本：

<a href="#">閱讀更多 →</a>

改為：

<Link to="/articles/ai-workflow">
  閱讀更多 →
</Link>

三、本期測試結果

已確認：

首頁正常顯示

原有首頁內容已恢復

Home.jsx 正常載入

React Router 正常運作

可直接輸入文章網址

首頁第一篇文章可正常跳轉

網址變更為：

/sant-learning-notes/articles/ai-workflow

目前網站流程：

flowchart TD
    A["首頁 Home"] --> B["精選文章 Articles"]
    B --> C["閱讀更多"]
    C --> D["/articles/ai-workflow"]
    D --> E["AiWorkflow 獨立文章頁"]

四、本期新增檔案

src/pages/AiWorkflow.jsx

五、本期修改檔案

src/main.jsx
src/App.jsx
src/pages/Home.jsx
src/components/Articles/Articles.jsx

六、重要學習紀錄

React Router 路由(Routing)

React Router 用於依不同網址顯示不同頁面。

/
↓
首頁

/articles/ai-workflow
↓
第一篇文章頁

BrowserRouter

負責提供整個網站的路由環境。

Routes

負責集中管理多個路由。

Route

設定網址與頁面的對應關係。

Link

用於 React 網站內部頁面跳轉。

七、⚠️ 本期踩雷紀錄

1. 路由路徑造成首頁空白

GitHub Pages 專案網站不是直接位於根目錄，而是：

/sant-learning-notes/

因此需要：

<BrowserRouter basename="/sant-learning-notes">

否則可能找不到對應路由而出現空白畫面。

2. 建立路由前，首頁內容必須完整移至 Home.jsx

建立路由後：

App.jsx
→ 負責路由

Home.jsx
→ 負責首頁

因此必須確認 Home.jsx 包含完整首頁元件，否則會造成首頁部分區塊消失。

3. 不同檔案的職責不能混用

檔案               主要職責

main.jsx         React 啟動與 BrowserRouter
App.jsx          網站路由管理
Home.jsx         首頁內容
AiWorkflow.jsx   第一篇獨立文章頁
Articles.jsx     精選文章區塊

八、本期成果

原本：

首頁
└─ 精選文章
   └─ 閱讀更多
      ↓
   回到頁面頂端

現在：

首頁
└─ 精選文章
   └─ 閱讀更多
      ↓
   /articles/ai-workflow
      ↓
   第一篇獨立文章頁

