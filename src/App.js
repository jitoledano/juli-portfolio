import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import SinglePost from './Components/SinglePost';
import Posts from './Components/Posts';
import Projects from './Components/Projects';
import NavBar from './Components/NavBar';
function App() {
  return (
    <BrowserRouter>
      <NavBar>
      
      </NavBar>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Posts} path='/posts' />
        <Route component={Projects} path='/projects' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
