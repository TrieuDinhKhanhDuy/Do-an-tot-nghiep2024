import Footer from "@/components/Footer";
import HeaderFix from "@/components/HeaderFix";
import { Outlet } from "react-router-dom";
import '../styles/Website/ScrollToTopButton.css';
import HeaderUpdate from "@/components/headerUpdate";

function ClientLayout() {


  return (
    <>
      <div className="client_layout_container">
        <HeaderFix />
        {/* <HeaderUpdate/> */}
        <div className="content_outlet">
          <Outlet />
        </div>
        <Footer />

      </div>
    </>
  );
}

export default ClientLayout;
