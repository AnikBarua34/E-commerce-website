import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './pages/AllRoutes/PrivateRoute/PrivateRoute';
import BuyNow from './pages/BuyNow/BuyNow';
import AuthProvider from './pages/context/AuthProvider';
import Home from './pages/HomeItems/Home/Home';
import MoreProducts from './pages/HomeItems/MoreProducts/MoreProducts';
import Products from './pages/HomeItems/Products/Products';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import AdminRoute from './pages/AllRoutes/AdminRoute/AdminRoute';
import DashboardHomee from './pages/Dashboard/DashboardHomee/DashboardHomee';
import PayNow from './pages/Dashboard/PayNow/PayNow';
import ManageAllOrder from './pages/Dashboard/ManageAllOrder/ManageAllOrder';
import Review from './pages/Dashboard/Review/Review';
import ManageProducts from './pages/Dashboard/ManageProducts/ManageProducts';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';
import Blogs from './pages/Blogs/Blogs';
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import EditItem from './pages/Dashboard/EditItem/EditItem';







function App() {
  return (
    <div className="App">
      <AuthProvider>
        
      <BrowserRouter>
      
      <Switch>
        <Route exact path ="/">
        <Home></Home>
        </Route>
        <Route exact path ="/home">
        <Home></Home>
        </Route>
        <Route exact path ="/contactUs">
        <ContactUs></ContactUs>
        </Route>
        <Route exact path ="/aboutUs">
        <AboutUs></AboutUs>
        </Route>
        <Route path ="/products">
          <Products></Products>
        </Route>
        <PrivateRoute path ="/ourBlogs"> 
          <Blogs></Blogs>
        </PrivateRoute>
        <PrivateRoute path ="/buynow/:productId">
          <BuyNow></BuyNow>
        </PrivateRoute>
        <Route path ="/login">
          <Login></Login>
        </Route>
        <Route path ="/register">
          <Register></Register>
        </Route>
        <PrivateRoute path ="/dashboard"> 
          <DashboardHomee></DashboardHomee>
        </PrivateRoute>
        
        <Route path="/moreproducts">
        <MoreProducts></MoreProducts>
        </Route>
        <AdminRoute path="/makeAdmin">
      <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <PrivateRoute path="/paynow">
        <PayNow></PayNow>
        </PrivateRoute>
        <PrivateRoute path="/myorders">
      <MyOrders></MyOrders>
        </PrivateRoute>
        <AdminRoute path="/manageAllOrders">
     <ManageAllOrder></ManageAllOrder>
        </AdminRoute>
        <PrivateRoute path="/review">
       <Review></Review>
        </PrivateRoute>
        <AdminRoute path="/addproduct">
<AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path="/manageProducts">
   <ManageProducts></ManageProducts>
        </AdminRoute>
        <AdminRoute path="/editItems/:id">
   <EditItem></EditItem>
        </AdminRoute>
        <Route path="*">
        <NotFound></NotFound>
        </Route>
      </Switch>
      
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
