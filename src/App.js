import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import MainNavbar from './components/MainNavbar';

export default function App() {
    return (
      <>
        <MainNavbar />

        <Routes>
              <Route element={<Homepage/>} path="/"></Route>
              <Route element={<Contact/>} path="/contact"></Route>

              {/* <Route path="*">
                  <Error404 />
              </Route> */}
          </Routes>

        </>
    );
}
