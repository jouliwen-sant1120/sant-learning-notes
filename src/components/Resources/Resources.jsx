import { resources } from "../../data";
function Resources() {
  return (
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
  );
}

export default Resources;