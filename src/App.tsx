import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

import Home from "./pages/Home";
import Birthday from "./pages/Birthday";
import SendWish from "./pages/SendWish";
import Wishes from "./pages/Wishes";
import AdminLogin from "./pages/AdminLogin";

import "./index.css";
import "./App.css";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/wish" element={<SendWish />} />
          <Route path="/wishes" element={<Wishes />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          
          <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
        </Routes>

        

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;