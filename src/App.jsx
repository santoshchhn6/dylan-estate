import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import PageNotFound from "./pages/PageNotFound";
import PropertyListingForm from "./pages/PropertyListingForm";
import Confirmation from "./pages/Confirmation";
import PropertyPreview from "./pages/PropertyPreview";

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
          <Route path="/property_preview" element={<PropertyPreview />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
