import { useParams } from "react-router";
import { userDetails } from "../data/users";

function Profile() {
    const { profileId } = useParams();

    console.log(profileId);

    const profileUser = userDetails.find((user) => user.username === profileId);
    console.log(profileUser);

    return (
        
        <div className="profile-page window">
            <section >
                <section className="user">
                    <img className="user-image" src={profileUser.profileImage} alt="" width={50} />
                    <section className="u">
                        <h3 className="user-name">{profileUser.name}</h3>
                        <p className="user-id">{profileUser.username}</p>
                    </section>
                </section>
                <section className="f-f-count">
                    <section className="followers">
                         <p>100</p>
                         <h4>Followers</h4>
                    </section>
                    <section className="followers">
                         <p>100</p>
                         <h4>Following</h4>
                    </section>
                    <section className="followers">
                         <p>100</p>
                         <h4>Followers</h4>
                    </section>
                </section>
            </section>
        </div>
    );
}

export default Profile;