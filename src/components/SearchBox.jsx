const SearchBox = ({ search }) => {
    return (
        <>
            <div className="card mt-5">
                <div className="search card-body">
                    <h1 className="text-white">Search GitHub Users</h1>
                    <p className="lead text-white">Enter a username to fetch a user profile and repos</p>
                    <form onSubmit={search}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control bg-transparent text-white"
                                placeholder="GitHub username..." />
                            <input className="btn btn-outline-success border border-3 border-success" type="submit"
                                value="Search" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SearchBox;