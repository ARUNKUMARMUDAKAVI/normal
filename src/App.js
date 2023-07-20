import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { MyOrders } from './components/MyOrders'
import { Login } from './components/Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Header } from './components/Header';
import { Cart } from './components/Cart';

function App() {
  return (
    <div className='nav'>
    <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<div>Page Not Found</div>}/>
      </Routes>
    </div>
  );
}

export default App;
