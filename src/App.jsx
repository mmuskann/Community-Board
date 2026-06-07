import './App.css';
import PlaceCard from './components/PlaceCard';

const App = () => {
  
  return (
    <div className="App">
      <h1>Summer in NYC</h1>
      <h2>Discover Spots To Visit In New York City During The Summer.</h2>

      <div className="place-cards-container">
        <PlaceCard 
          image="https://example.com/image1.jpg" 
          name="Central Park" 
          borough="Manhattan" 
          />
        <PlaceCard 
          image="https://example.com/image2.jpg" 
          name="Brooklyn Bridge" 
          borough="Brooklyn" 
          />
        <PlaceCard 
          image="https://example.com/image3.jpg" 
          name="Statue of Liberty" 
          borough="Manhattan" 
          />
        <PlaceCard 
          image="https://example.com/image3.jpg" 
          name="Rockaway Beach" 
          borough="Queens" 
          />
        <PlaceCard 
          image="https://example.com/image3.jpg" 
          name="Coney Island" 
          borough="Brooklyn" 
          />
        <PlaceCard
          image="https://example.com/image3.jpg"
          name="Queens County Farm Museum"
          borough="Queens"
         />
        <PlaceCard
          image="https://example.com/image3.jpg"
          name="Flushing Meadows Corona Park"
          borough="Queens"
         />
        <PlaceCard
          image="https://example.com/image3.jpg"
          name="Bronx Zoo"
          borough="Bronx"
         />
        <PlaceCard
          image="https://example.com/image3.jpg"
          name="New York Botanical Garden"
          borough="Bronx"
         />
        <PlaceCard
          image="https://example.com/image3.jpg"
          name="Vessel"
          borough="Manhattan"
         />
      </div>
    </div>
  );
};

export default App;