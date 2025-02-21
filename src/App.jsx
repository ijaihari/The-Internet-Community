import { Routes, Route } from "react-router";
import Header from "./components/header";
import HomePage from "./components/Home";
import UserArticles from "./components/User-Articles";
import Articles from "./components/articles";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/article' element={<Articles />} />
        <Route path='/article/:articleUserName' element={<UserArticles />} />
        <Route path="/profile/:profileId" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;