import {BrowserRouter, Route, Routes} from "react-router-dom"

//Components
import Homepage from "./components/Homepage";
import Menu from "./components/Menu";
import Contacts from "./pages/Contacts";

//Pages
import Projects from "./pages/Projects";
import Error from "./pages/Error";

const App = () => {
  return (
      <BrowserRouter>
          <Menu />
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact-me" element={<Contacts />} />
              <Route path="*" element={<Error />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
