import Container from "../ui/Container";

function Ribbon() {
  return (
    <section>
      <Container>
        <ul className="flex h-65 flex-wrap content-center justify-between text-[#768088FF]">
          <li>Nature</li>
          <li>Photography</li>
          <li>Relaxation</li>
          <li>Vacation</li>
          <li>Travel</li>
          <li>Adventure</li>
        </ul>
      </Container>
    </section>
  );
}

export default Ribbon;
