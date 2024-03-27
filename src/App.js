import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Explore from "./components/pages/Explore";
import PopularDestinations from "./components/pages/PopularDestinations";
import Contact from "./components/pages/Contact";
import TravelTips from "./components/pages/TravelTips";
import Faq from "./components/pages/Faq";
import PopularActivities from "./components/pages/PopularActivities";

// Import other components
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidebar className="sidebar" />
        <main className="main">
          <Routes>
            <Route path="/Explore" element={<Explore />} />
            <Route
              path="/PopularDestinations"
              element={<PopularDestinations />}
            />
            <Route path="/PopularActivities" element={<PopularActivities />} />
            <Route path="/TravelTips" element={<TravelTips />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/Contact" element={<Contact />} />
            {/* Define other routes here */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
