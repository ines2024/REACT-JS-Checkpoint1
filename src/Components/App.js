import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './Navbar'
import Shoplist from './Shoplist';
import data from './data';

function App() {
  return (
    <div className="APP">
        <Navbar1/>
        <Shoplist products={data} />

    </div>
  )
}

export default App