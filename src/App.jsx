import { Routes, Route } from "react-router";
import Header from "./components/header";
import HomePage from "./components/Home";
import UserArticles from "./components/User-Articles";
import Articles from "./components/articles";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/article' element={<Articles/>} />
        <Route path='/article/:articleUserName' element={<UserArticles />} />
      </Routes>
    </div>
  );
}

export default App;