import { Route, Routes } from "react-router-dom";

//components
// import Register from "./component/form/register/Register";
// import Login from "./component/form/login/Login";
// import Main from "./component/main/Main";

//polaris
import '@shopify/polaris/build/esm/styles.css';


function App() {
  return (
    <>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Main />} />
          </Routes>
    </>
  );
}

export default App;
