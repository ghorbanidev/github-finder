import "./App.css";
import { useEffect } from 'react';
import { getRepos, getUser } from "./services/UserService";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import History from "./pages/History";
import { useNavigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home';

const App = () => {

  const [query, setQuery] = useState("")
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [userFound, setUserFound] = useState(false)
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem("history")) || [])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data: userData, status } = await getUser(query)
        const { data: userRepos } = await getRepos(query)
        if (status === 200) {
          setUser(userData)
          setRepos(userRepos)
          setUserFound(true)
          setHistory(history.length ? [...history, { userSearch: query, avatar: userData.avatar_url, time: new Date().toLocaleString() }] : [{ userSearch: query, avatar: userData.avatar_url, time: new Date().toLocaleString() }])
        }
      } catch (error) {
        if (error.request.status === 404) {
          setUserFound(false)
          toast.error("User Not Found");
        } else {
          toast.error(error.message);
        }
      }
    }

    fetchUser()

  }, [query])


  // Fetch User By Search
  const handleUserSearch = (event) => {
    event.preventDefault();
    setQuery(event.target[0].value)
    event.target[0].value = ""
  }

  // Save User To Local Storage
  const saveToLocalstorage = () => {
    if (history.length) {
      localStorage.setItem("history", JSON.stringify(history))
    }
  }
  saveToLocalstorage()

  // Fetch User By History Search
  const fetchUserByHistory = (user) => {
    setQuery(user)
    navigate("/")
  }

  // Clear All User From LocalStorage
  const clearAllStorage = () => {
    localStorage.clear()
    setHistory([])
    navigate("/")
  }

  return (
    <div className="app">
      <ToastContainer position="top-right" theme="colored" />
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <Routes>
              <Route path={"/"} element={<Home query={query} search={handleUserSearch} userFound={userFound} user={user} repos={repos} />} />
              <Route path={"/history"} element={<History setQuery={setQuery} history={history} fetchUser={fetchUserByHistory} clearAll={clearAllStorage} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;
