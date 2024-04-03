import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../../core/pages/Login/Login";
import { Home } from "../../core/pages/Home/Home";
import { ProfileCat } from "../../core/pages/ProfileCat/ProfileCat";
import { ProfileUser } from "../../core/pages/ProfileUser/ProfileUser";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/catprofile" element={<ProfileCat />} />
        <Route path="/myprofile" element={<ProfileUser />} />
      </Routes>
    </BrowserRouter>
  )
}
