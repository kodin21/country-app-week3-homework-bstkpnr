import './App.css';
import Country from './component/Country/Country';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="container ">
        <div>
          <div className="column">
            <div className="text-center">
              <Link to="" type="button" style={linkStyle}>
                Ülkeler Listesi
              </Link>
            </div>
          </div>
        </div>

        <Route path="/" component={Country} exact />
      </div>
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
