import { Route, Routes } from "react-router-dom";
import "./global.css";
import PageHome from "./pages/Website/home/page";
import Register from "./components/Register";
import Login from "./components/Login";
import Contact from "./pages/Website/home/components/Contact";
import Footer from "./components/Footer";
import News from "./pages/Website/home/components/News";
import Gioithieu from "./pages/Website/home/components/Gioithieu";
import List from "./pages/Website/home/list";
import Pay from "./pages/Website/home/pay";
import Bill from "./pages/Website/home/bill";
import DetailBill from "./pages/Website/home/detailBill";
import MyTicket from "./pages/Website/home/myTicket";
import BusTracking from "./pages/Website/home/busTracking";
import HeaderFix from "./components/HeaderFix";
import NewsDetails from "./pages/Website/home/components/NewsDetails"
import DichVuVanTai from "./pages/Website/home/components/DichVuVanTai";

function App() {
  return (
    <Routes>

      <Route path='/dichvuvantai' element={
        <>
          <div className="home-container">
            <HeaderFix />
            <DichVuVanTai />
            <Footer />
          </div>
        </>
      } />
      <Route path='/news' element={
        <>
          <div className="home-container">
            <HeaderFix />
            <News />
            <Footer />
          </div>
        </>
      } />
      <Route path='/gioithieu' element={
        <>
          <div className="home-container">
            <HeaderFix />
            <Gioithieu />
            <Footer />
          </div>
        </>
      } />
      <Route path='/contact' element={
        <>
          <div className="home-container">
            <HeaderFix />
            <Contact />
            <Footer />
          </div>
        </>
      } />
      <Route path='/register' element={
        <>
          <div className="home-container">
            <HeaderFix />
            <Register />
            <Footer />
          </div>
        </>
      } />
      <Route path='/list' element={
        <>
          <div className="list-container">
            <HeaderFix />
            <List />
            <Footer />
          </div>
        </>
      } />
      <Route path='/' element={
        <>
          <div className="home-container">
            <HeaderFix />
            <PageHome />
            <Footer />
          </div>
        </>
      } />
      <Route path='/pay' element={
        <>
          <div className="home-container">
            <HeaderFix />
            <Pay />
            <Footer />
          </div>
        </>
      } />

      <Route path='/bill' element={
        <>
          <div className="home-container">
            <HeaderFix />
            <Bill />
            <Footer />
          </div>
        </>
      } />

      <Route path='/detailbill' element={
        <>
          <div className="home-container">
            <HeaderFix />
            <DetailBill />
            <Footer />
          </div>
        </>
      } />

      <Route path='/bustracking' element={
        <>
          <div className="home-container">
            <HeaderFix />
            <BusTracking />
            <Footer />
          </div>
        </>
      } />

      <Route path='/myticket' element={
        <>
          <div className="home-container">
            <HeaderFix />
            <MyTicket />
            <Footer />
          </div>
        </>
      } />

      <Route path='/newsdetail' element={
        <>
          <div className="home-container">
            <HeaderFix />
            <NewsDetails />
            <Footer />
          </div>
        </>
      } />

      <Route path='/login' element={
        <>
          <div className="home-container">
            <HeaderFix />
            <Login />
            <Footer />
          </div>
        </>
      } />
    </Routes>



  );
}

export default App;
