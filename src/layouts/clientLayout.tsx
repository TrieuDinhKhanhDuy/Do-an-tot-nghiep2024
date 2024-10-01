import Footer from "@/components/Footer";
import HeaderFix from "@/components/HeaderFix";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Outlet } from "react-router-dom";
import '../styles/Website/ScrollToTopButton.css';

function ClientLayout() {


  return (
    <>
      <div className="client_layout_container">
        <ScrollToTopButton />
        <HeaderFix />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default ClientLayout;
