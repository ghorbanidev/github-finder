const History = ({ history, fetchUser, clearAll }) => {
    return (
        <>
            <div className="card my-5">
                <div className="card-header border-bottom py-4 px-3 px-sm-4 d-flex align-items-center justify-content-between">
                    <h2 className="fs-5 mb-0 text-white">History Search</h2>
                    <button onClick={() => clearAll()} disabled={!history.length} className="d-inline-flex align-items-center btn btn-danger">
                        Clear All
                    </button>
                </div>
                <div className="card-body px-3 px-sm-4 py-0">
                    <ul className="list-group list-group-flush">
                        {history.length > 0 ? history.map((h, i) => (
                            <li key={i} className="list-group-item bg-transparent border-bottom py-3 px-0 last-border-bottom">
                                <div className="row align-items-center">
                                    <div role="button" onClick={() => fetchUser(h.userSearch)} className="col-auto">
                                        <img alt="user" className="user-avatar bordered p-1 rounded-circle"
                                            src={h.avatar} />
                                    </div>
                                    <div className="col-auto px-0">
                                        <h3 role="button" onClick={() => fetchUser(h.userSearch)} className="fs-6 mb-0 text-white">{h.userSearch}</h3>
                                    </div>
                                    <div className="col text-end">
                                        <a href="http"
                                            className="btn btn-sm btn-gray-600 border-gray-500 d-inline-flex align-items-center text-muted">
                                            {h.time}
                                        </a>
                                    </div>
                                </div>
                            </li>
                        )) : <li className="list-group-item bg-transparent text-center border-bottom py-3 px-0 fs-5 last-border-bottom"><b>no user in History</b></li>}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default History;