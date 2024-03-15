import "./css/base.css";

import { AppProvider } from "./AppContext";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import NotFound from "./components/notFound/NotFound";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Blog_detail from "./pages/blog_detail/Blog_detail";
import Shop_detail from "./pages/shop_detail/Shop_detail";
import Cart from "./pages/cart/Cart";
import Payment from "./pages/payment/Payment";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
    return (
        <div>
            <AppProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='*' element={<Home/>}/>
                        <Route path='/shop' element={<Shop/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='/blog' element={<Blog />}/>
                        <Route path='/blog/:id' element={<Blog_detail/>}/>
                        <Route path='/product/:id' element={<Shop_detail/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='/payment' element={<Payment/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/register' element={<Register/>}/>
                        <Route path='/notFound' element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </AppProvider>
        </div>
    )
}
export default App;