import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Alerts from "./components/layouts/Alerts"
import Footer from './components/layouts/Footer';
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import Home from "./Pages/Home";
import User from "./Pages/User";
import { GithubProvider } from "./context/github/GitHubContext";
import {AlertProvider} from "./context/alerts/AlertContext";



function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">

          <Navbar />

          
          <main className='container mx-auto px-3 pb-12'>
          <Alerts />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:loginid" element={<User />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />

        </div>
      </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
