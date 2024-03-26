import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../../core/pages/Login/Login";
import { Home } from "../../core/pages/Home/Home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
