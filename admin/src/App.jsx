import React from 'react';
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin";

export const backend_url = 'http://localhost:5000';
export const currency = '₹';

const App= ()=> {
  return (
      <div>
        <Navbar />
        <Admin />
        <Footer />
      </div>

  );
}

export default App;
