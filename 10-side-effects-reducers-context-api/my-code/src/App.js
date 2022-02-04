import React, { useContext } from "react";

import AuthContext from "./context/auth-context";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const authCtx = useContext(AuthContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const userSession = localStorage.getItem("userLoggedin");
  //   if (userSession === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("userLoggedin", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.setItem("userLoggedin", "0");
  //   setIsLoggedIn(false);
  // };

  return (
    <>
    {/* // <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}> */}
      <MainHeader />
      <main>
        {!authCtx.isLoggedIn && <Login />}
        {authCtx.isLoggedIn && <Home />}
      </main>
    {/* // </AuthContext.Provider> */}
    </>
  );
}

export default App;
