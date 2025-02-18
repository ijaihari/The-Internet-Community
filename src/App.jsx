import { Routes, Route } from "react-router";
import Header from "./components/header";
import HomePage from "./components/Home";
import Articles from "./components/Articles";
import UserArticles from "./components/User-Articles";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/article' element={<Articles />} />
        <Route path='/article/:articleUserName' element={<UserArticles />} />
      </Routes>
    </div>
  );
}

export default App;