import { BrowserRouter, Route, Routes } from "react-router-dom";
import  { Layout } from "../../core/components/Layout/Layout";
import { Login } from "../../core/pages/Login/Login";
import { Home } from "../../core/pages/Home/Home";
import { ProfileCat } from "../../core/pages/ProfileCat/ProfileCat";
import { ProfileUser } from "../../core/pages/ProfileUser/ProfileUser";
import { SectionVeterinary } from "../../core/pages/SectionVeterinary/SectionVeterinary";
import { SectionCalendar } from "../../core/pages/SectionCalendar/SectionCalendar";
import { SectionExpenses } from "../../core/pages/SectionExpenses/SectionExpenses";
import { SectionResources } from "../../core/pages/SectionResources/SectionResources";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/catprofile" element={<ProfileCat />} />
          <Route path="/myprofile" element={<ProfileUser />} />
          <Route path="/veterinary" element={<SectionVeterinary />} />
          <Route path="/calendar" element={<SectionCalendar />} />
          <Route path="/expenses" element={<SectionExpenses />} />
          <Route path="/resources" element={<SectionResources />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
