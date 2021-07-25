import './App.css';
import Country from './component/Country/Country';

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import {Nav, NavItem} from 'react-bootstrap'
import LanguageStatic from './component/Language/Language';


function App() {
  return (
    <Router>
      <div className="container ">
          <Nav variant="pills" defaultActiveKey="/">
            <NavItem>
              <Nav.Link href="/" >
                Ülkeler Listesi
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/static">
                İstatistik

              </Nav.Link>

            </NavItem>
          </Nav>
            </div>

        <Route path="/" component={Country} exact />
        <Route path="/static" component={LanguageStatic} />
    </Router>
  );
}
const linkStyle = {
  margin: "0 0.8rem",
  textDecoration: "none",
  color: 'blue',
  border:'2px solid',
  position: 'relative',

 
  
};
export default App;
