import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="site-header">
      <div>
        <h1>Sant 學習成長筆記</h1>
        <p>把複雜，變簡單。</p>
      </div>

      <nav>
        <Link to="/">首頁</Link>
        <Link to="/about">關於我</Link>
        <Link to="/courses">我分享什麼</Link>
        <Link to="/articles">精選文章</Link>
        <Link to="/resources">免費資源</Link>
        <Link to="/results">成果分享</Link>
        <a href="#contact">聯絡我</a>
      </nav>
    </header>
  );
}

export default Navbar;