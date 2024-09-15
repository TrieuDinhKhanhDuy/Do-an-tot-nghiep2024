import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./global.css";
import PageHome from "./pages/Website/home/page";
import Register from "./components/Register"; // Import Register component
import Login from "./components/Login";
import Contact from "./pages/Website/home/components/Contact";
import Footer from "./components/Footer";
import List from "./pages/Website/home/list";
import Pay from "./pages/Website/home/pay";
import Bill from "./pages/Website/home/bill";
import DetailBill from "./pages/Website/home/detailBill";
import MyTicket from "./pages/Website/home/myTicket";
import BusTracking from "./pages/Website/home/busTracking";
import HeaderFix from "./components/HeaderFix";

function App() {
  return (
    <Routes>



      {/* Route cho trang chủ */}
      <Route path='/' element={
        <>
          <div className="home-container">
            <Header />
            <PageHome />
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

      <Route path='/register' element={
        <>
          <div className="home-container">
            <Header />
            <Register />
            <Footer />
          </div>
        </>
      } />

      <Route path='/contact' element={
        <>
          <div className="home-container">
            <Header />
            <Contact />
            <Footer />
          </div>
        </>
      } />

      <Route path='/list' element={
        <>
          <div className="list-container">
            <Header />
            <List />
            <Footer />
          </div>
        </>
      } />

      <Route path='/pay' element={
        <>
          <div className="list-container">
            <Header />
            <Pay />
            <Footer />
          </div>
        </>
      } />

      <Route path='/bill' element={
        <>
          <div className="list-container">
            <Header />
            <Bill />
            <Footer />
          </div>
        </>
      } />

      <Route path='/detailbill' element={
        <>
          <div className="list-container">
            <Header />
            <DetailBill />
            <Footer />
          </div>
        </>
      } />

      <Route path='/myticket' element={
        <>
          <div className="list-container">
            <Header />
            <MyTicket />
            <Footer />
          </div>
        </>
      } />

      <Route path='/bustracking' element={
        <>
          <div className="list-container">
            <Header />
            <BusTracking />
            <Footer />
          </div>
        </>
      } />
    </Routes>



  );
}

export default App;
