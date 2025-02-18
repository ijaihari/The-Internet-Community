import { Routes, Route } from "react-router";
import Header from "./components/header";
import HomePage from "./components/Home";
import Articles from "./components/Articles";

function App() {
  return (
    <div>
      <Header />
     
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/articles/:userName' element={<Articles/>}/>
      </Routes>
    </div>
  );
}

export default App;