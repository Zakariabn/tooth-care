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




function App() {
  return (
    <div className="App">
     <Header></Header>
     
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/services' element ={<OfferingService></OfferingService>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/checkout' element={<Checkout></Checkout>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
     
    </div>
);
}

export default App;
