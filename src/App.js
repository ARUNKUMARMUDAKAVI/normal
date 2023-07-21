import { Home } from './components/Home/Home';
import { Profile } from './components/Profile/Profile';
import { MyOrders } from './components/Myorders/MyOrders'
import { Login } from './components/Login/Login';
import { Routes, Route} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Cart } from './components/Cart/Cart';
import { SignUp } from './components/Signup/SignUp';

function App() {
  return (
    <div className='nav'>
    <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<div>Page Not Found</div>}/>
      </Routes>
    </div>
  );
}

export default App;
