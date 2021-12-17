
import './App.css';
import {Route, Switch} from "react-router-dom"
import Home from './Pages/Home/index';
import Blog from './Pages/Blog/Blog'

function App() {
  return (
    <div className="App">
     <Switch>
       <Route path="/" component={Home}/>
       <Route Path="/blog/:id" component={Blog}/>
     </Switch>
    </div>
  );
}

export default App;
