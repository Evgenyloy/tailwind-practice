function Navigation() {
  return (
    <div className="z-10 flex w-full justify-between py-15 text-white uppercase">
      <p className="cursor-pointer">Escape</p>
      <ul className="flex cursor-pointer gap-20">
        <li className="transition-transform duration-100 hover:scale-110">
          <a href="#">home</a>
        </li>
        <li className="transition-transform duration-100 hover:scale-110">
          <a href="#">categories</a>
        </li>
        <li className="transition-transform duration-100 hover:scale-110">
          <a href="#">about</a>
        </li>
        <li className="transition-transform duration-100 hover:scale-110">
          <a href="#">contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
