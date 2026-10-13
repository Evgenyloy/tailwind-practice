import RecentItem from "../recentItem/RecentItem";
import Container from "../ui/Container";
import { recentPosts } from "./data";

function Recent() {
  return (
    <section>
      <Container>
        <div className="flex flex-wrap gap-24">
          {recentPosts.map((item) => (
            <RecentItem key={crypto.randomUUID()} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Recent;
