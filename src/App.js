import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Footer from './components/Footer/Footer';
import OfferingService from './components/pages/OfferingService/OfferingService';
import Blogs from './components/pages/Blogs/Blogs';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import Checkout from './components/Checkout/Checkout';
import RequireAuth from './components/auth/RequireAuth/RequireAuth';
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import UserAccount from './components/auth/UserAccount/UserAccount';




function App() {
  return (
    <div className="App">
     <Header></Header>
     
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/services' element ={<OfferingService></OfferingService>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/checkout' element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/sign-up' element={<Register></Register>}></Route>
       <Route path='/user-account' element={<UserAccount></UserAccount>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
     
    </div>
);
}

export default App;
