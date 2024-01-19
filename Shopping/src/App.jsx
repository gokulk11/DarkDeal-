import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import GameList from "./pages/GameList";
import GameBuy from "./pages/GameBuy";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Orders from "./pages/Orders";
import PrivateRoute from "./components/PrivateRoute";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="">
     
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/games" element={<GameList />} />
            <Route path="/game/:id" element={<GameBuy />} />
            <Route element={<PrivateRoute />}>
              <Route path="/cart/:id" element={<Cart />} />
              <Route path="/account" element={<Account />} />
              <Route path="/orders" element={<Orders />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
