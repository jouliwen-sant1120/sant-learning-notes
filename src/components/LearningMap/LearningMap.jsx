import "./LearningMap.css";
function LearningMap() {
  return (
    <section id="courses">
      <h2>我分享什麼</h2>

      <div className="card-grid">
        <div className="card">
          <h3>🤖 AI 工作應用</h3>
          <p>分享 AI 工具、工作流程改善與自動化應用。</p>
        </div>

        <div className="card">
          <h3>📊 Power BI</h3>
          <p>分享 Power BI、DAX、Power Query 與資料分析技巧。</p>
        </div>

        <div className="card">
          <h3>📈 Excel</h3>
          <p>分享 Excel、函數、報表設計與工作技巧。</p>
        </div>
      </div>
    </section>
  );
}

export default LearningMap;