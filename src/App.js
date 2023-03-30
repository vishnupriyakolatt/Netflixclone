import React from "react";
import './App.css'
import {originals,actions,comedy,Horror,Romance} from './urls'
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
  <div className="App">
<NavBar/>
<Banner/>
<RowPost url={originals} title='Netflix Originals'/>
<RowPost url={actions} title='Action' issmall/>
<RowPost url={comedy} title='comedy' issmall/>
<RowPost url={Horror} title='Horror Movies' issmall/>
<RowPost url={Romance} title='Romance Movies' issmall/>


    </div>
  );
}

export default App;
