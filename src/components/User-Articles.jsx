import { Link, useParams } from "react-router-dom";
import { userArticles } from "../data/articles";
import { userDetails } from "../data/users";

function UserArticles() {
    const { articleUserName } = useParams()
    console.log(articleUserName);



    const SeletedArticle = userArticles.find((user) => user.username === articleUserName)
    console.log(SeletedArticle);

    const ArticleAuthor = userDetails.find((user) => user.username === articleUserName);
    console.log(ArticleAuthor);
    return (
        <div className="window">

            <h1>User Article</h1>
            <section className="user-article-container">
                <section className="user">
                    <img className="user-image" src="https://randomuser.me/api/portraits/men/10.jpg" alt="" width={50} />
                    <section className="u">
                        <h3 className="user-name">Jai Hari Nataraj</h3>
                        <Link to={'/'}><p className="user-id">@ijaihari</p></Link>
                    </section>
                </section>
                <h1 className="article-title">{SeletedArticle.article.title}</h1>
                <p className="pub-date">26 Nov, 2024</p>
                <p className="article-content">{SeletedArticle.article.content}</p>
            </section>
            <section></section>
        </div>
    );
}

export default UserArticles;