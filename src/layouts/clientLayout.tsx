import Footer from "@/components/Footer";
import HeaderFix from "@/components/HeaderFix";
import { Outlet } from "react-router-dom";
import '../styles/Website/ScrollToTopButton.css';

function ClientLayout() {


  return (
    <>
      <div className="client_layout_container">
        <HeaderFix />
        <div className="content_outlet">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ClientLayout;
