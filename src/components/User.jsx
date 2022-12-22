const User = ({ user }) => {
    return (
        <div className="card card-body my-5">
            <div className="row align-items-xs-center justify-content-center">
                <div className="col-12 d-flex justify-content-center d-lg-block col-lg-3">
                    <img src={user.avatar_url} alt="profile"
                        className="img-fluid rounded-circle border border-secondary border-3 mb-3" />
                </div>
                <div className="col-12 col-lg-9">
                    <span className="badge text-white border border-danger mt-4 mx-1">Profile Repos : {user.public_repos}</span>
                    <span className="badge text-white border border-warning mt-4 mx-1">Profile Gists : {user.public_gists}</span>
                    <span className="badge text-white border border-success mt-4 mx-1">Profile Followers : {user.followers}</span>
                    <span className="badge text-white border border-info mt-4 mx-1">Profile Following : {user.following}</span>

                    <ul className="list-group mt-5">
                        <li className="list-group-item">Name : {user.name}</li>
                        <li className="list-group-item">Company : {user.company}</li>
                        <li className="list-group-item">Website / Blog : {user.blog}</li>
                        <li className="list-group-item">Location : {user.location}</li>
                        <li className="list-group-item">Member Since : {user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default User;