20260901-Day027_建立About頁面與Navbar路由連結.md

一、本期主題

建立 About 獨立頁面，並完成 Navbar「關於我」路由串接。

本期開始依照「先建立頁面 → 建立 Route → Navbar 串接 →
實際測試」的方式，逐步將目前可以執行的網站，往可維護的多頁面網站架構整理。

二、本期完成內容

1. 建立 About 頁面

建立：

src/pages/About.jsx

目前內容為：

function About() {
  return (
    <main>
      <h1>關於我</h1>
      <p>這裡將介紹 Sant 的學習與工作歷程。</p>
    </main>
  );
}

export default About;

2. App.jsx 建立 About Route

在：

src/App.jsx

加入：

import About from "./pages/About";

並建立：

<Route path="/about" element={<About />} />

目前主要路由包含：

/                     → Home
/about                → About
/articles/ai-workflow → AiWorkflow

3. Navbar「關於我」改為 React Router Link

原本：

<a href="#about">關於我</a>

改為：

<Link to="/about">關於我</Link>

並使用：

import { Link } from "react-router-dom";

目前 Navbar 已確認：

<Link to="/">首頁</Link>
<Link to="/about">關於我</Link>

其他尚未完成獨立頁面的項目暫時維持原狀，沒有一次全部修改。

三、實際測試結果

About 頁面測試

瀏覽器測試網址：

http://localhost:5173/sant-learning-notes/about

結果：

正常顯示 About 頁面。

Navbar 測試

從首頁：

首頁
↓
Navbar「關於我」
↓
/about
↓
About 頁面

測試結果：

成功。

四、本期工程原則

本期確認後續網站開發採用「一次處理一個明確功能」的方式。

建立頁面
    ↓
建立 Route
    ↓
Navbar 串接
    ↓
瀏覽器測試
    ↓
確認成功
    ↓
本期收工

避免一次修改大量檔案，降低路由與首頁架構互相影響的風險。

五、本期完成判定

項目                        狀態

About.jsx 建立              ✅
App.jsx 建立 /about Route   ✅
Navbar「關於我」改為 Link   ✅
首頁 → 關於我測試           ✅
About 頁面正常顯示          ✅

本期完成。

六、下一期方向

下一期不預先一次修改所有 Navbar 連結。

依目前網站架構，逐一處理尚未完成的網站區塊，原則仍為：

一個頁面 / 一個功能
→ Route
→ Navbar Link
→ 測試

實際下一期 Day 編號依下一次實際開發日期遞增，不沿用本期日期。

七、Git 紀錄建議

本期 Git Commit 訊息：

feat: 完成 About 頁面與 Navbar 路由連結 (Day027)

八、本期收工

Day027 完成。

本期工程到此結束。