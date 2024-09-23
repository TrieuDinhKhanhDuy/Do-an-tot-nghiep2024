import {   useRoutes } from "react-router-dom";
import "./global.css";
import PageHome from "./pages/Website/home/page";
import Register from "./components/Register";
import Login from "./components/Login";
import Contact from "./pages/Website/home/Contact";
import News from "./pages/Website/home/News";
import Gioithieu from "./pages/Website/home/Gioithieu";
import List from "./pages/Website/home/list";
import Pay from "./pages/Website/home/pay";
import Bill from "./pages/Website/home/bill";
import DetailBill from "./pages/Website/home/detailBill";
import MyTicket from "./pages/Website/home/myTicket";
import BusTracking from "./pages/Website/home/busTracking";
import NewsDetails from "./pages/Website/home/NewsDetails"
import DichVuVanTai from "./pages/Website/home/DichVuVanTai";
import ClientLayout from "./layouts/clientLayout";


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
        element: <List />,
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
        path: "/detailbill",
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
        path: '/*',
        element: <h1>404 not found !!</h1>,
      },
    ],
  },
]

function App() {
  const routes = useRoutes(routerConfig);
  return (
    <>{routes}</>
  );
}

export default App;
