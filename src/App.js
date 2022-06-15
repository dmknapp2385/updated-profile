import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Components/Homepage';
import Nav from './Components/Nav';
import Works from './Components/Works';
import Contact from './Components/Contact';
import {useSpring, config} from 'react-spring';


function App() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
  });

  return (
    <div >
      <Nav props={props}></Nav>
      <Router>
        <Routes>
          <Route path="/"  element={<Homepage props={props}/>}>
          </Route>
          <Route path="/works"  element={<Works/>}>
          </Route>
          <Route path="/contact"  element={<Contact props={props}/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
