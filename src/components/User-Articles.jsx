import { Link, useNavigate, useParams } from "react-router-dom";
import { userArticles } from "../data/articles";
import { userDetails } from "../data/users";

function UserArticles() {
 const navigate = useNavigate()
    const { articleUserName } = useParams()

    const SeletedArticle = userArticles.find((user) => user.username === articleUserName)
    console.log(SeletedArticle);

    const ArticleUser = userDetails.find((user) => user.username === articleUserName)
    console.log(ArticleUser);

    return (
        <div className="window user-article">
            <article className="user-article-container">
                <h1 className="article-title">{SeletedArticle.article.title}</h1>
                <p className="pub-date">Published date: {SeletedArticle.article.date}</p>
                <p className="article-content">{SeletedArticle.article.content}</p>
                <Link to={"/article"}><button className="art-back-link">Back to articles</button></Link>
            </article>
            <article className="user-profile-container">
                <section className="user">
                    <img className="user-image" src={ArticleUser.profileImage} alt="" width={50} />
                    <section className="u">
                        <h3 className="user-name">{ArticleUser.name}</h3>
                        <Link to={`/profile/${ArticleUser.username}`}><p className="user-id">{ArticleUser.username}</p></Link>
                    </section>
                </section>
                <section className="user-details">
                    <p><strong>Company: </strong><span className="user-details-span">{ArticleUser.company}</span></p>
                    <p><strong>Job Role: </strong><span className="user-details-span">{ArticleUser.jobRole}</span></p>
                    <p><strong>Experience: </strong><span className="user-details-span">{ArticleUser.experience}</span></p>
                    <button onClick={()=> navigate(`/profile/${ArticleUser.username}`)} className="view-profile">View Profile</button>
                </section>
            </article>
        </div>
    );
}

export default UserArticles;