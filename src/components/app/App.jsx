import Hero from "../hero/Hero";
import Ribbon from "../ribbon/Ribbon";
import Favorites from "../favorites/Favorites";
import Recent from "../recent/Recent";

function App() {
  return (
    <div>
      <div className="relative">
        <Hero />
        <Ribbon />
        <Favorites />
        <Recent />
      </div>
    </div>
  );
}

export default App;
