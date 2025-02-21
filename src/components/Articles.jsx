import { Link } from "react-router";
import { userArticles } from "../data/articles";

function Articles() {
   
    return (
        <div className="window">
            <h1 className="pg-title">Articles</h1>
            <div className="art-container">
                <section className="main-articles">
                   {userArticles.map((article, index)=>(<section className="article-block"key={index}>
                        <h3>{article.article.title}</h3>
                        <p>{article.article.summary}</p>
                    <Link to={`/article/${article.username}`}><h4 className="article-link">Read more</h4></Link>
                    </section>)) 
                    
                    }
                </section>
                <section className="recent-articles">
                    <h2>Recent articles</h2>
                </section>
            </div>
        </div>
    );
}

export default Articles;