import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import PropertyListingForm from "./pages/PropertyListingForm";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/property_listing_form"
            element={<PropertyListingForm />}
          />
          <Route path="/confirm" element={<Confirmation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
