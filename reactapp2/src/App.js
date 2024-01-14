import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupPage from "./pages/signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<> Hello </>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
