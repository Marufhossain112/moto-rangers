import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Blogs from "../HomePage/Blogs/Blogs";
import Home from "../HomePage/Home/Home";
import ProductCategoriesId from "../HomePage/ProductCategoriesId/ProductCategoriesId";
import Main from "../Main/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import DashboardLayout from "../Pages/DashboardLayout/DashboardLayout";
import Login from "../Pages/Login/Login";
import MyProducts from "../Pages/MyProducts/MyProducts";
import SignUp from "../Pages/SignUp/SignUp";
// import AdminRoute from "./AdminRoute/AdminRoute";
import AllBuyers from "./AdminRoute/AllBuyers/AllBuyers";
import AllSellers from "./AdminRoute/AllSelles/AllSellers";
import ReportedItems from "./AdminRoute/ReportedItems/ReportedItems";
// import BuyerRoute from "./BuyerRoute/BuyerRoute";
import PrivateRoute from "./PrivateRouter/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allbikes/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ProductCategoriesId></ProductCategoriesId>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-resale.vercel.app/allbikes/${params.id}`),
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/addproduct",
        element: (
          <SellerRoute>
            {" "}
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproduct",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myorders",
        element: (
          // <BuyerRoute>
          <MyOrders></MyOrders>
          // </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          // <AdminRoute>
          <AllSellers></AllSellers>
          // </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          // <AdminRoute>
          <AllBuyers></AllBuyers>
          // </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reporteditems",
        element: <ReportedItems></ReportedItems>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);
