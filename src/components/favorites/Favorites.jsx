import FavoritesItems from "../favorites-items/FavoritesItems";

function Favorites() {
  return (
    <section>
      <div className="mx-auto max-w-940">
        <h2 className="font-20 py-60 text-center text-[20px] text-[#2e2e2eFF]">
          Featured Posts
        </h2>
        <div className="flex justify-between">
          <FavoritesItems />
          <FavoritesItems />
        </div>
      </div>
    </section>
  );
}

export default Favorites;
