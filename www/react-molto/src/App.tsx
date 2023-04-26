import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const App: React.FunctionComponent = () => {
  return (
      <React.StrictMode>
          <BrowserRouter>
              <div className="App">
                  <header className="App-header">
                  </header>
                  <h1>Hello React Router</h1>
              </div>
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
          </BrowserRouter>
      </React.StrictMode>
  );
}

const Login: React.FunctionComponent = () => {
    return <h2>Login</h2>;
}

const Index: React.FunctionComponent = () => {
    return <h2>Index</h2>;
}

const Home: React.FunctionComponent = () => {
    return <h2>Home</h2>;
}

const MyPage: React.FunctionComponent = () => {
    return <h2>MyPage</h2>;
}

export default App;
