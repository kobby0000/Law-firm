import React from "react";
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

//Pages
import {
  Home,
  About,
  Faq,
  Contact,
  Notary,
  Natural,
  Construction,
  Insolvency,
  Financing,
  Mergers,
  Dispute,
  Corporate,
  Diversity,
  Apprenticeship
} from "./pages/Index";

//Layouts
import RootLayout from "./Layouts/RootLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<RootLayout/>} >
      <Route index element= {<Home />} />
      <Route path="/the-firm" element= {<About />} />
      <Route path="/corporate-aquisition" element= {<Corporate />} />
      <Route path="/faq" element= {<Faq />} />
      <Route path="/dispute" element= {<Dispute />} />
      <Route path="/contact" element= {<Contact />} />
      <Route path="/Mergers-Aquisition" element= {<Mergers />} />
      <Route path="/real-estate-constuction" element= {<Construction/>} />
      <Route path="/restructuring-insolvency" element= {<Insolvency />} />
      <Route path="/project-financing" element= {<Financing />} />
      <Route path="/notary" element= {<Notary />} />
      <Route path="/natural-resource" element= {<Natural />} />
      <Route path="/diversity-inclusion" element= {<Diversity />} />
      <Route path="/apprenticeship" element= {<Apprenticeship />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
