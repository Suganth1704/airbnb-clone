import {Navbar} from './Components/Navbar';
import {Card} from './Components/Card'
import data from './data';
import './App.css';

function App() {

  let rendering_crads =data.map((items)=>{
    return(<Card {...items} 
      
      /*item={items}*/ 
       />)
  })
  return (
    <div className="App">
      <Navbar/>
      <section className="cardlist">
        {rendering_crads}
      </section>
      
    </div>
  );
}

export default App;
//1st method
/*img={items.coverImg} 
      rating={items.stats.rating} 
      reviewCount={items.stats.reviewCount}
      location={items.location} 
      title={items.title}
      price={items.price}
      openspots={items.openSpots}*/

//2nd method
//{...items} 

//3rd method
//item={items} props.item---> componentss