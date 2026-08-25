import { Link } from "react-router-dom";
import "./Articles.css";

function Articles() {
  return (
    <section id="articles">
      <h2>精選文章</h2>

      <div className="article-list">
        <article className="article-card">
          <h3>AI 如何改變我的工作方式</h3>
          <p>分享 AI 工具如何協助提升工作效率與學習成果。</p>
          <Link to="/articles/ai-workflow">閱讀更多 →</Link>
        </article>

        <article className="article-card">
          <h3>Power BI 學習筆記</h3>
          <p>記錄資料分析、視覺化與實作心得。</p>
          <a href="#">閱讀更多 →</a>
        </article>

        <article className="article-card">
          <h3>Excel 工作技巧</h3>
          <p>整理實用函數、Power Query 與工作應用技巧。</p>
          <a href="#">閱讀更多 →</a>
        </article>
      </div>
    </section>
  );
}

export default Articles;