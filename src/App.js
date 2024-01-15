import Button from "./components/Button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { AuthContextProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <AuthContextProvider>
    <Routes>
      {/* <Button btnClass={"btn-primary"} title='Sign Up!' /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
