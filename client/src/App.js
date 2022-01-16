
//import { Router } from 'react-router';
import { Route,Routes} from 'react-router-dom';
import Cards from './components/Cards';



function App() {
  return (
    
    <div className="App">
      <Routes> 
        <Route path='/home' element={<Cards/>}/>
        <Route path='/favs' element={<h1>fav</h1>} />        
      </Routes> 
       
    </div>
  );
}

export default App;