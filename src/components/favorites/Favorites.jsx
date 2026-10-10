import FavoritesItems from "../favorites-items/FavoritesItems";
import Container from "../ui/Container";
import { posts } from "./data";

function Favorites() {
  return (
    <section className="pt-20 pb-50">
      <Container>
        <h2 className="py-60 text-center text-[20px] text-[#2e2e2eFF]">
          Featured Posts
        </h2>
        <div className="flex justify-between">
          {posts.map((post) => (
            <FavoritesItems key={crypto.randomUUID()} {...post} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Favorites;
