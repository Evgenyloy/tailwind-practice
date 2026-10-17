import RecentItem from "../recentItem/RecentItem";
import Container from "../ui/Container";
import Title from "../ui/Title";
import { recentPosts } from "./data";

function Recent() {
  return (
    <section className="p-30 pb-130">
      <Container>
        <Title title={"Most Recent"} />
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
