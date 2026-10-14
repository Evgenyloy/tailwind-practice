import FavoritesItems from "../favorites-items/FavoritesItems";
import Container from "../ui/Container";
import Title from "../ui/Title";
import { posts } from "./data";

function Favorites() {
  return (
    <section className="pt-60 pb-50">
      <Container>
        <Title title={"Featured Posts"} />
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
