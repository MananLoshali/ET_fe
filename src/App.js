import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Incomes from "./Pages/Incomes";
import Expenses from "./Pages/Expenses";
import MyProfile from "./Pages/MyProfile";

import NoMatch from "./Pages/NoMatch";
// import Demo from "./Pages/Demo";
import { useSelector } from "react-redux";

function App() {
  const { isAllowed } = useSelector((state) => state.users);
  return (
    <>
      <Routes>
        {isAllowed ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<SignIn />} />
        )}
        {isAllowed ? (
          <Route path="/signin" element={<Navigate to="/" />} />
        ) : (
          <Route path="/signin" element={<SignIn />} />
        )}
        {isAllowed ? (
          <Route path="/signup" element={<Navigate to="/" />} />
        ) : (
          <Route path="/signup" element={<SignUp />} />
        )}
        {isAllowed ? (
          <Route path="/profile" element={<MyProfile />} />
        ) : (
          <Route path="/profile" element={<Navigate to="/signin" />} />
        )}
        {isAllowed ? (
          <Route path="/incomes" element={<Incomes />} />
        ) : (
          <Route path="/incomes" element={<Navigate to="/signin" />} />
        )}
        {isAllowed ? (
          <Route path="/expenses" element={<Expenses />} />
        ) : (
          <Route path="/expenses" element={<Navigate to="/signin" />} />
        )}
        {/* <Route path="/demo" element={<Demo />} /> */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
