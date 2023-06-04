// App.js

// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Orders from "./components/Orders";
// import Prototypes from "./components/Prototypes";
import AppStateProvider from "./providers/AppStateProvider";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "./components/Home";
import CheckOut from "./components/Checkout";

function App() {
  return (
    <AppStateProvider>
      {/* <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </AppStateProvider>
  );
}

export default App;
