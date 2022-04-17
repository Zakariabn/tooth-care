import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div className="App">
     <Header></Header>



     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
     </Routes>

     <Footer></Footer>
     
    </div>
  );
}

export default App;
