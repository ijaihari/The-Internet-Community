import { useParams } from "react-router";
import { userArticles } from "../data/articles";

function UserArticles() {
    const { articleUserName } = useParams()
    console.log(articleUserName);
    const SeletedArticle = userArticles.find((user) => user.username == articleUserName)
    console.log(SeletedArticle);
    return (
        <div className="window">
            <h1>User Article</h1>
            <section className="user-article-container">
             <h1>{SeletedArticle.article.title}</h1>
             <p>{SeletedArticle.article.content}</p>
            </section>
        </div>
    );
}

export default UserArticles;