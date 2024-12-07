import Footer from "@/components/Footer";
import HeaderFix from "@/components/HeaderFix";
import { Outlet } from "react-router-dom";
import '../styles/Website/ScrollToTopButton.css';
import { LinearProgress } from "@mui/material";
import useAuth from "@/hooks/useAuth";

function ClientLayout() {
  const { loading } = useAuth();

  return (
    

    <>
      <div className="client_layout_container">
        <HeaderFix />
                   {loading ? (<><LinearProgress /> </>) : (<></>)}

        <div className="content_outlet">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ClientLayout;
