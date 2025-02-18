import { Link } from "react-router";

function Articles() {
    return (
        <div className="article">
            <h1 className="pg-title">Articles</h1>
            <div className="art-container">
                <section className="main-articles">
                    <section className="article-block">
                       {/*  <section>
                            <img className="profile" src="https://randomuser.me/api/portraits/men/10.jpg" alt="" width={50}/>
                            <section>
                                <h3>Jai Hari Nataraj</h3>
                                <p>@ijaihari</p>
                            </section>
                        </section> */}
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam ipsam, reiciendis corporis placeat enim cumque accusantium, voluptate neque reprehenderit quasi iste porro explicabo velit voluptatem illo necessitatibus quo sit.</p>
                    <Link><h4 className="article-link">Read more</h4></Link>
                    </section>
                </section>
                <section className="recent-articles">
                    <h2>Recent articles</h2>
                </section>
            </div>
        </div>
    );
}

export default Articles;