
import { Route, Routes } from 'react-router-dom';

//components
import Register from "./routes/form/register/Register";
import Login from "./routes/form/login/Login";
// import Main from "./component/main/Main";

//polaris
import '@shopify/polaris/build/esm/styles.css';


const App: React.FunctionComponent = () => {
    return (

        <>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/*" element={<Main />} /> */}
            </Routes>
        </>

    );
}

export default App;
