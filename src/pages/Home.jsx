import LatestRepositories from '../components/LatestRepositories';
import User from '../components/User';
import SearchBox from './../components/SearchBox';
const Home = ({ query, search, userFound, user, repos }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {/*  Search Box  */}
                        <SearchBox search={search} />
                        {/* <Spinner /> */}
                        {query.length > 0 && userFound && (
                            <>
                                <User user={user} />
                                <LatestRepositories repos={repos} />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;