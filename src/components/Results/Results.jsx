import { results } from "../../data";

function Results() {
  return (
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
  );
}

export default Results;