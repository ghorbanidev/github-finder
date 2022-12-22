const LatestRepositories = ({ repos }) => {
    return (
        <div className="card my-5">
            <div className="card-header border-bottom py-4 px-3 px-sm-4 d-flex justify-content-between">
                <h2 className="fs-5 mb-0 text-white card-title fw-bold fs-4">Latest Repositories</h2>
            </div>
            <div className="card-body px-3 px-sm-4 py-0">
                <ul className="list-group list-group-flush">
                    {repos.length > 0 && repos.map(repo => (
                        <li key={repo.id} className="list-group-item bg-transparent border-bottom py-3 px-0 last-border-bottom">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <h5>{repo.name}</h5>
                                </div>

                                <div className="col d-none d-md-block text-end">
                                    <span className="badge bg-warning p-2 my-1 mx-1">Repository Forks : {repo.forks}</span>
                                    <span className="badge bg-success p-2 my-1 mx-1">Repository Stars :{repo.stargazers_count}</span>
                                    <span className="badge bg-info p-2 my-1 mx-1">Repository Watchers : {repo.watchers}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default LatestRepositories;