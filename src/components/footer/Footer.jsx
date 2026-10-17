import Container from "../ui/Container";
import Title from "../ui/Title";

function Footer() {
  return (
    <footer className="relative h-380 text-white">
      <img
        className="absolute inset-0 -z-100 h-full w-full object-cover"
        src="/image/footer.webp"
        alt=""
      />
      <Container>
        <div className="z-1000 mb-90 pt-[80px]">
          <Title
            title={"Stay in Touch"}
            className={"mb-[40px] text-[#ffffff]"}
          />
          <form className="flex justify-center">
            <input
              type="text"
              className="w-375 bg-white px-[20px] py-[12px] text-gray-800"
              placeholder="Enter your email address"
              name="input"
            />
            <button
              className="bg-white/30 px-44 py-12 backdrop-blur-md"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </Container>
      <div className="bg-gray-800/60 py-35">
        <Container>
          <div className="flex items-center justify-between">
            <p className="text-2xl">Escape.</p>
            <nav className="">
              <ul className="flex gap-20 text-white/80 uppercase">
                <li className="">home</li>
                <li className="">categories</li>
                <li className="">about</li>
                <li className="">contact</li>
              </ul>
            </nav>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
