import "./App.css";
import { resources, results } from "./data";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
function App() {
  return (
    <>
      
      <Navbar />
      <main>
       
              <section id="courses">
        <h2>我分享什麼</h2>

        <div className="card-grid">
          <div className="card">
            <h3>🤖 AI 工作應用</h3>
            <p>分享 AI 工具、工作流程改善與實務應用。</p>
          </div>

          <div className="card">
            <h3>📊 Power BI</h3>
            <p>用資料分析與視覺化，協助做出更好的決策。</p>
          </div>

          <div className="card">
            <h3>📈 Excel</h3>
            <p>提升日常工作效率，讓資料整理更輕鬆。</p>
          </div>

          <div className="card">
            <h3>💡 持續學習</h3>
            <p>分享學習方法與知識整理，陪伴一起成長。</p>
          </div>
        </div>
      </section>

              <section id="articles">
        <h2>精選文章</h2>

        <div className="article-list">
          <article className="article-card">
            <h3>AI 如何改變我的工作方式</h3>
            <p>分享 AI 工具如何協助提升工作效率與學習成果。</p>
            <a href="#">閱讀更多 →</a>
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

            <section id="resources">
      <h2>免費資源</h2>

      <div className="article-list">
        {resources.map((resource) => (
          <article className="article-card" key={resource.title}>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <a href="#">立即查看 →</a>
          </article>
        ))}
      </div>
    </section>

              <section id="results">
        <h2>成果分享</h2>

        <div className="article-list">
          {results.map((item) => (
            <article className="article-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

              <section id="contact">
        <h2>聯絡我</h2>

        <p>
          如果你也喜歡持續學習、AI 應用與工作改善，
          <br />
          歡迎一起交流。
        </p>

        <ul>
          <li>📧 Email（建置完成後再填入）</li>
          <li>💼 LinkedIn（預留）</li>
          <li>🐙 GitHub（預留）</li>
        </ul>
      </section>
      </main>

            <footer>
        <p>© 2026 Sant 學習成長筆記</p>
        <p>把複雜，變簡單。</p>
      </footer>
    </>
  );
}

export default App;