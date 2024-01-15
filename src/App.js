import Button from "./components/Button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      {/* <Button btnClass={"btn-primary"} title='Sign Up!' /> */}
      <Route path="/" element={<HomePage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
