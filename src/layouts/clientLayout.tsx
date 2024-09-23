import Footer from "@/components/Footer";
import HeaderFix from "@/components/HeaderFix";
import { Outlet } from "react-router-dom";

function ClientLayout() {

  return (
    <>
        <HeaderFix/>
        <Outlet/>
        <Footer/>
    </>
  );
}

export default ClientLayout;
