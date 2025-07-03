import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/Aboutus/About";
import Homemain from "./Components/Homemain/Homemain";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ModularKitchen from "./Pages/Modular kitchen/ModularKitchen";
import Wardrobe from "./Pages/ModularWardrobe/Wardrobe";
import Furniture from "./Pages/Modular Furniture/Furniture";
import ContactUS from "./Pages/Contactus/Contact";
import MoreService from "./Pages/More Service/MoreService";
import Project from "./Pages/Projectpage/Project";
import WeWork from "./Pages/HowWeWork/WeWork";
import Wantjoin from "./Pages/WantJoin/Wantjoin";
import Bar from "./Pages/Products/Bar";
import ConsoleTable from "./Pages/Products/ConsoleTable";
import Dining from "./Pages/Products/Dining";
import WorkStation from "./Pages/Products/WorkStation";
import OfficeTable from "./Pages/Products/OfficeTable";
import Sofa from "./Pages/Products/Sofa";
import Receptions from "./Pages/Products/Receptions";
import Coffe from "./Pages/Products/Coffe";
import Chairs from "./Pages/Products/Chairs";
import Partition from "./Pages/Products/Partition";
import Mirror from "./Pages/Products/Mirror";
import CentralTable from "./Pages/Products/CentralTable";
import SideTable from "./Pages/Products/SideTable";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homemain />} />
          <Route path="About" element={<AboutUs />} />
          <Route path="kitchen" element={<ModularKitchen />} />
          <Route path="Wardrobe" element={<Wardrobe />} />
          <Route path="Furniture" element={<Furniture />} />
          <Route path="Contact" element={<ContactUS />} />
          <Route path="MoreService" element={<MoreService />} />
          <Route path="Project" element={<Project />} />
          <Route path="WeWork" element={<WeWork />} />
          <Route path="Wantjoin" element={<Wantjoin />} />
          <Route path="bar" element={<Bar />} />
          <Route path="consoleTable" element={<ConsoleTable />} />
          <Route path="dining" element={<Dining />} />
          <Route path="workStation" element={<WorkStation />} />
          <Route path="officeTable" element={<OfficeTable />} />
          <Route path="sofa" element={<Sofa />} />
          <Route path="receptions" element={<Receptions />} />
          <Route path="coffe" element={<Coffe />} />
          <Route path="chairs" element={<Chairs />} />
          <Route path="partition" element={<Partition />} />
          <Route path="mirror" element={<Mirror />} />
          <Route path="centralTable" element={<CentralTable />} />
          <Route path="sideTable" element={<SideTable />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
