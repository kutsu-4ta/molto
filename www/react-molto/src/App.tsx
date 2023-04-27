import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from './views/login/_login';
import Home from './views/home/_home';
import MyPage from './views/myPage/_myPage';
import './styles/styles.css';

const App: React.FunctionComponent = () => {
  return (
      <React.StrictMode>
          <BrowserRouter>
              <div className="App">
                  <Routes>
                      <Route path="/" element={<Index/>}/>
                  </Routes>
                  <Routes>
                      <Route path="/login" element={<Login/>}/>
                  </Routes>
                  <Routes>
                      <Route path="/home" element={<Home/>}/>
                  </Routes>
                  <Routes>
                      <Route path="/myPage" element={<MyPage/>}/>
                  </Routes>
              </div>
          </BrowserRouter>
      </React.StrictMode>
  );
}

const Index: React.FunctionComponent = () => {
    return <h2>Index</h2>;
}

export default App;
