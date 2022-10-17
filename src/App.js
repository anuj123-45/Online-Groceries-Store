
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ren from './render';

import Signup from './signup';
import Login from './login';
import CartList from './cartlist';
import Admin from './admin_page';
import Cat from './cat_sec';

export default function App() {
  return (

<BrowserRouter>
<Routes>
<Route  path='/' element={<Admin/>}/>
<Route  exact path='/gotohome' element={<Ren/>}/>
<Route  path='/mainpage' element={<Cat/>}/>
<Route  path='/mainpage/home' element={<Cat/>}/>
<Route  path='/grocery/signup' element={<Signup/>}/>
<Route  path='/grocery/login' element={<Login/>}/>
<Route  path='/cartlist' element={<CartList/>}/>
</Routes>
    </BrowserRouter>

  );
}
