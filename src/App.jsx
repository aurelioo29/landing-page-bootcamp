import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Import useLocation
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
// import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import DataScienceRoadmap from "./components/roadmapDetails/DataScienceRoadmap";
import DataAnalyticsRoadmap from "./components/roadmapDetails/DataAnalyticsRoadmap";
import DataEngineeringRoadmap from "./components/roadmapDetails/DataEngineeringRoadmap";
import Contact from "./components/Contact";

function App() {
  const location = useLocation();

  // Scroll to the specific section on route change
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Roadmap />
              <FAQ />
              <Contact />
            </>
          }
        />
        <Route path="/datascience-roadmap" element={<DataScienceRoadmap />} />
        <Route
          path="/dataanalytics-roadmap"
          element={<DataAnalyticsRoadmap />}
        />
        <Route
          path="/dataengineering-roadmap"
          element={<DataEngineeringRoadmap />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
