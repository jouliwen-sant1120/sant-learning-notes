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
        <a href="#courses">我分享什麼</a>
        <a href="#articles">精選文章</a>
        <a href="#resources">免費資源</a>
        <a href="#results">成果分享</a>
        <a href="#contact">聯絡我</a>
      </nav>
    </header>
  );
}

export default Navbar;