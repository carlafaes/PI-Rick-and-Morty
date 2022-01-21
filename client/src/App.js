
//import { Router } from 'react-router';
import { Route,Routes} from 'react-router-dom';
import Cards from './components/Cards';
import Create from './components/Create';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import Detail from './components/Detail';




function App() {
  return (
    
    <div className="App">
      <div>
        <NavBar/>
      </div>
      <Routes> 
        <Route path='/home' element={<Cards/>}/>
        <Route path='/favs' element={<h1>fav</h1>}/>
        <Route path='/create' element={<Create/>}/>    
        <Route exact path="/" element={<Landing/>} />    
        <Route path='/home/:id' element={<Detail/>} />
      </Routes> 
       
    </div>
  );
}

export default App;