import "./App.scss";
import "./style.scss";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Companies from "./pages/Companies";
import Contact from "./pages/Contact";
import Termandconditions from "./pages/Termandconditions";

function App() {
  console.log(
    "render mode:",
    !!(
      typeof window !== "undefined" &&
      window.document &&
      window.document.createElement
    )
      ? "SPA"
      : "SSR"
  );
  return (
    <div className="App">
      {/*Meta tags*/}
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="React SSR Nexsphere" />
        <title>Nexsphere</title>
      </Helmet>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/termandconditions" element={<Termandconditions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/companies" element={<Companies />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
