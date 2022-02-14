import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'

import './assets/scss/Main.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Routes/Home';
import Terms from './Routes/Terms';
import Policy from './Routes/Policy';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="terms" element={<Terms />} />
          <Route exact path="policy" element={<Policy />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
