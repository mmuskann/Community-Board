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
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Brooklyn_Bridge_Manhattan.jpg/330px-Brooklyn_Bridge_Manhattan.jpg" 
          name="Brooklyn Bridge" 
          borough="Brooklyn" 
          location="https://maps.app.goo.gl/vCW3mvDFHxH8dWPV8"
        />

        <PlaceCard 
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Front_view_of_Statue_of_Liberty_%28cropped%29.jpg/330px-Front_view_of_Statue_of_Liberty_%28cropped%29.jpg" 
          name="Statue of Liberty" 
          borough="Manhattan" 
          location="https://maps.app.goo.gl/Wz49pvZmCh98a78x7"
        />

        <PlaceCard 
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Sunset_on_the_boardwalk_%2848067690428%29.jpg/330px-Sunset_on_the_boardwalk_%2848067690428%29.jpg" 
          name="Rockaway Beach" 
          borough="Queens" 
          location="https://maps.app.goo.gl/rhRZ7USoXMKi6Zeu7"
        />

        <PlaceCard 
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Coney_Island_beach_and_amusement_parks_%28June_2016%29.jpg/330px-Coney_Island_beach_and_amusement_parks_%28June_2016%29.jpg" 
          name="Coney Island" 
          borough="Brooklyn" 
          location="https://maps.app.goo.gl/ny1DFuVhczXJLneb9"
        />

        <PlaceCard
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/QFM_farmhouse_jeh.jpg/330px-QFM_farmhouse_jeh.jpg"
          name="Queens County Farm Museum"
          borough="Queens"
          location="https://maps.app.goo.gl/esLUykthsuNe8w7W6"
        />

        <PlaceCard
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Flushing_Meadows%E2%80%93Corona_Park.jpg/330px-Flushing_Meadows%E2%80%93Corona_Park.jpg"
          name="Flushing Meadows Corona Park"
          borough="Queens"
          location="https://maps.app.goo.gl/5pNDDCwESu4rkSi96"
        />

        <PlaceCard
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Bronx_Zoo_001.jpg/330px-Bronx_Zoo_001.jpg"
          name="Bronx Zoo"
          borough="Bronx"
          location="https://maps.app.goo.gl/X4g2QKwZuuKcMv5w8"
        />

        <PlaceCard
          image="https://upload.wikimedia.org/wikipedia/commons/8/8a/The_New_York_Botanical_Garden_Visitor_Center.jpg"
          name="New York Botanical Garden"
          borough="Bronx"
          location="https://maps.app.goo.gl/HqAkyobFYD8ph6Sv9"
        />

        <PlaceCard
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Hudson_Yards_Plaza_March_2019_53.jpg/330px-Hudson_Yards_Plaza_March_2019_53.jpg"
          name="Vessel"
          borough="Manhattan"
          location="https://maps.app.goo.gl/auLCqTCL159MJFMb9"
        />
      </div>

    </div>
  );
};

export default App;