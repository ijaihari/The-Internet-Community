import { Link } from "react-router";
import { userArticles } from "../data/articles";

function Articles() {

    return (
        <div className="window">
            <h1 className="pg-title">Articles</h1>
            <div className="art-container">
                <section className="category-container">
                    <section className="category-sticky">
                        <h2 className="category-title">Category</h2>
                        <ul>
                            <li class="cat-list"><button onclick="">All</button></li>
                            <li class="cat-list"><button onclick="">Technology</button></li>
                            <li class="cat-list"><button onclick="">Health & Wellness</button></li>
                            <li class="cat-list"><button onclick="">Finance</button></li>
                            <li class="cat-list"><button onclick="">Education</button></li>
                            <li class="cat-list"><button onclick="">Science</button></li>
                            <li class="cat-list"><button onclick="">Lifestyle</button></li>
                            <li class="cat-list"><button onclick="">Business & Startups</button></li>
                            <li class="cat-list"><button onclick="">Entertainment</button></li>
                            <li class="cat-list"><button onclick="">Sports</button></li>
                            <li class="cat-list"><button onclick="">Environment</button></li>
                        </ul>
                    </section>
                </section>
                <section className="main-articles">
                    {userArticles.map((article, index) => (<section className="article-block" key={index}>
                        <h3>{article.article.title}</h3>
                        <p className="pub-date">Published date: {article.article.date}</p>
                        <p>{article.article.summary}</p>
                        <Link to={`/article/${article.username}`}><h4 className="o-b-link">Read full article</h4></Link>
                    </section>))
                    }
                </section>
            </div>
        </div>
    );
}

export default Articles;