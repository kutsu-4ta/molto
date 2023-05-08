import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";

import AccountSetting from "./views/accountSetting/AccountSetting";
import SignUp from "./views/signUp/SignUp";
import SignIn from "./views/signIn/SignIn";
import Home from "./views/home/Home";
import Artist from "./views/artist/Artist";
import NowPlaying from "./views/nowPlaying/NowPlaying";

// 遷移先 TODO: 【低】定数ファイル
const redirectPathToSignUp         = 'signUp';
const redirectPathToSignIn          = 'signIn';
const redirectPathToHome           = 'home';
const redirectPathToArtist         = 'artist';
const redirectPathToNowPlaying     = 'nowPlaying';
const redirectPathToAccountSetting = 'accountSetting';

const App = () => {
  return (
      <div>
          <p>ああああああ</p>
          <BrowserRouter>
              <Routes>
                  <Route path={redirectPathToSignUp} element={<SignUp/>}/>
                  <Route path={redirectPathToSignIn} element={<SignIn/>}/>
                  <Route path={redirectPathToHome} element={<Home/>}/>
                  <Route path={redirectPathToArtist} element={<Artist/>}/>
                  <Route path={redirectPathToNowPlaying} element={<NowPlaying/>}/>
                  <Route path={redirectPathToAccountSetting} element={<AccountSetting/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
};
export default App;