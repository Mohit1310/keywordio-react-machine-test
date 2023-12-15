import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CreateAds from "./pages/CreateAds";
import CreateMediaAd from "./pages/CreateMediaAd";
import CreateTextAd from "./pages/CreateTextAd";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Router>
      <Navbar />
      <Provider store={store}>
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<CreateAds />} path="/createAds" />
          <Route element={<CreateMediaAd />} path="/createMediaAd" />
          <Route element={<CreateTextAd />} path="/createTextAd" />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
