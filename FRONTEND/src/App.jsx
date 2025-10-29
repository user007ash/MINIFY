import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShortUrlPage from "./pages/ShortUrlPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ShortUrlPage" element={<ShortUrlPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
