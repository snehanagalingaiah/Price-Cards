
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Cardinfo} from './components/Cardinfo';
import Card from './components/Card';


function App() {
  
  const cardData = Cardinfo;

  return (
    <div className="App">    
 <div className="row row-cols-1 row-cols-md-3 g-4">

{
  cardData.map(card => <Card card={card}/>)
}
  
</div>    
    </div>

  );
}



export default App;
