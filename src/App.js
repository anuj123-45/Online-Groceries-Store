
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ren from './render';




export default function App() {
  return (

<BrowserRouter>
<Routes>
<Route path="/" element={<Ren/>}/>
<Route path="/home" element={<Ren/>}/>

</Routes>
    </BrowserRouter>

  );
}
