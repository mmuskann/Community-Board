import './App.css';
import PlaceCard from './components/PlaceCard';

const App = () => {
  return (
    <div className="App">
      <h1>Summer in NYC</h1>
      <h2>Discover Spots To Visit In New York City During The Summer</h2>

      <div className="place-cards-container">
        <PlaceCard 
          image="https://static.vecteezy.com/system/resources/previews/005/088/062/non_2x/central-park-aerial-view-in-manhattan-new-york-huge-beautiful-park-is-surrounded-by-skyscraper-photo.jpeg" 
          name="Central Park" 
          borough="Manhattan" 
          location="https://maps.app.goo.gl/ZP8CS7UMAKpCXjQcA"
        />

        <PlaceCard 
          image="https://images.pexels.com/photos/236451/pexels-photo-236451.jpeg?cs=srgb&dl=architecture-bridge-brooklyn-bridge-city-236451.jpg&fm=jpg"
          name="Brooklyn Bridge" 
          borough="Brooklyn" 
          location="https://maps.app.goo.gl/vCW3mvDFHxH8dWPV8"
        />

        <PlaceCard 
          image="https://www.jsonline.com/gcdn/-mm-/da1a872f48ed97eb6defd3820cb60eddd5f01b1f/c=0-10-1496-855/local/-/media/2017/07/10/USATODAY/USATODAY/636352926625258379-StatueofLibertyPaulGanasNPSPhotoCroppedSmall.jpg?width=1496&height=845&fit=crop&format=pjpg&auto=webp"
          name="Statue of Liberty" 
          borough="Manhattan" 
          location="https://maps.app.goo.gl/Wz49pvZmCh98a78x7"
        />

        <PlaceCard 
          image="https://media.timeout.com/images/103945430/image.jpg"
          name="Rockaway Beach" 
          borough="Queens" 
          location="https://maps.app.goo.gl/rhRZ7USoXMKi6Zeu7"
        />

        <PlaceCard 
          image="https://images.ctfassets.net/1aemqu6a6t65/4bV6HSFbVMv7fk7hYLPTQF/f4e92af77d820eed565eb4317e166395/Boardwalk-Coney-Island-Brooklyn-NYC-Photo-Brittany-Petronella.jpg"
          name="Coney Island" 
          borough="Brooklyn" 
          location="https://maps.app.goo.gl/ny1DFuVhczXJLneb9"
        />

        <PlaceCard
          image="https://th.bing.com/th/id/R.ee011555252baec07a27da23ba577ca4?rik=roksYJzu0AXlEw&pid=ImgRaw&r=0"
          name="Queens County Farm Museum"
          borough="Queens"
          location="https://maps.app.goo.gl/esLUykthsuNe8w7W6"
        />

        <PlaceCard
          image="https://tse4.mm.bing.net/th/id/OIP.ixNS5UzBhCOafYKqgSfqmwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          name="Flushing Meadows Corona Park"
          borough="Queens"
          location="https://maps.app.goo.gl/5pNDDCwESu4rkSi96"
        />

        <PlaceCard
          image="https://gonewyork.com/wp-content/uploads/2022/02/NYC-Bronx-Zoo-Entrance-AdobeStock_125152163-2048x1365.jpg"
          name="Bronx Zoo"
          borough="Bronx"
          location="https://maps.app.goo.gl/X4g2QKwZuuKcMv5w8"
        />

        <PlaceCard
          image="https://th.bing.com/th/id/R.a3c3b653ffe03b31b9feba6851ba1395?rik=GWXkJiYLd%2bYClg&pid=ImgRaw&r=0"
          name="New York Botanical Garden"
          borough="Bronx"
          location="https://maps.app.goo.gl/HqAkyobFYD8ph6Sv9"
        />

        <PlaceCard
          image="https://cdn-imgix.headout.com/media/images/8dac3a22f55050f55960dfdee34f6fc4-30975-new-york-vessel---general-admission-tickets-04.jpg?auto=format&q=90&crop=faces&fit=crop"
          name="Vessel"
          borough="Manhattan"
          location="https://maps.app.goo.gl/auLCqTCL159MJFMb9"
        />
      </div>

    </div>
  );
};

export default App;