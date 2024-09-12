import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./global.css";
import PageHome from "./pages/Website/home/page";
import Register from "./components/Register"; // Import Register component
import Login from "./components/Login";
import Contact from "./pages/Website/home/components/Contact";

function App() {
  return (
    <Routes>
      {/* Route cho phụ*/}
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contact' element={<Contact />} />
      
      {/* Route cho trang chủ */}
      <Route path='/' element={
        <>
          <div className="home-container">
            <Header />
            <PageHome />
          </div>
        </>
      } />
    </Routes>
  );
}

export default App;
