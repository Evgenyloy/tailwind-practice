import Navigation from "../navigation/Navigation";
import Container from "../ui/Container";

function Hero() {
  return (
    <section className="relative h-500 w-full text-white">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="/image/hero.webp"
        alt="image"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex h-full flex-col">
        <Container>
          <Navigation />

          <div className="flex flex-1 flex-col items-center justify-center px-4 pt-150 text-center">
            <h1 className="mb-5 text-5xl font-bold">Let's do it together</h1>
            <h2 className="mb-43 text-[17px]">
              {" "}
              We travel the world in search of stories. Come along for the ride.
            </h2>
            <button className="cursor-pointer rounded-sm bg-[#dd783f] px-30 py-12 duration-75 ease-linear hover:bg-[#ee600e]">
              View Latest Posts
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Hero;
