import {   useRoutes } from "react-router-dom";
import "./global.css";
import PageHome from "./pages/Website/home/page";
import Register from "./components/Register";
import Login from "./components/Login";
import Contact from "./pages/Website/home/Contact";
import News from "./pages/Website/home/News";
import Gioithieu from "./pages/Website/home/Gioithieu";
import Pay from "./pages/Website/home/pay";
import Bill from "./pages/Website/home/bill";
import DetailBill from "./pages/Website/home/detailBill";
import MyTicket from "./pages/Website/home/myTicket";
import BusTracking from "./pages/Website/home/busTracking";
import NewsDetails from "./pages/Website/home/NewsDetails"
import DichVuVanTai from "./pages/Website/home/DichVuVanTai";
import ClientLayout from "./layouts/clientLayout";
import LocationTable from "./pages/Website/home/locationTable";
import BusRoutes from "./pages/Website/home/busRoutes";
import NotFound from "./components/NoutFound";
import DetailVoucher from "./pages/Website/home/detailVoucher";
import ListVoucher from "./pages/Website/home/listVoucher";
import List_BusFix from "./pages/Website/home/list_bus";
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import ListBusPoup from "./pages/Website/home/listBusPoup"
import ListPoup from "./pages/Website/home/listPoup"
const routerConfig = [
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "/",
        element: <PageHome />,
      },
      {
        path: "/list",
        element: <List_BusFix />,
      },
      {
        path: "/myticket",
        element: <MyTicket />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/about",
        element: <Gioithieu />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <DichVuVanTai />,
      },
      {
        path: "/pay",
        element: <Pay />,
      },
      {
        path: "/bill",
        element: <Bill />,
      },
      {
        path: "/billdetail",
        element: <DetailBill />,
      },
      {
        path: "/newsdetail",
        element: <NewsDetails/>,
      },
      {
        path: "/bustracking",
        element: <BusTracking/>,
      },
      {
        path: "/locationtable",
        element: <LocationTable/>,
      },
      {
        path: "/busroutes",
        element: <BusRoutes/>,
      },
      {
        path: "/voucherdetail",
        element: <DetailVoucher/>,
      },
      {
        path: "/listvoucher",
        element: <ListVoucher/>,
      },
      {
        path: "/listBusPoup",
        element: <ListBusPoup/>,
      },
      {
        path: "/listPoup",
        element: <ListPoup/>,
      },
      {
        path: '/*',
        element: <NotFound />
      },
    ],
  },
]

function App() {
  const routes = useRoutes(routerConfig);
  return (
    <>
    {routes}
    <ToastContainer position="top-right" autoClose={3000} />
    </>
    
  );
}

export default App;
