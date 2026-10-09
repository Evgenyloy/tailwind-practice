import Hero from "../hero/Hero";
import Ribbon from "../ribbon/Ribbon";
import Favorites from "../favorites/Favorites";

function App() {
  return (
    <div>
      <div className="relative">
        <Hero />
        <Ribbon />
        <Favorites />
      </div>
    </div>
  );
}

export default App;
