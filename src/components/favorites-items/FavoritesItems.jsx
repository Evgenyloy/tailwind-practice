import favoriteImg1 from "../../../public/image/favorites/favorites1.webp";
import favoriteImg2 from "../../../public/image/favorites/favorites2.webp";
import author1 from "../../../public/image/favorites/author1.webp";

function FavoritesItems() {
  const date = new Date();

  return (
    <article className="relative w-[100%] max-w-[460px] text-[#ffffffb2]">
      <img
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src={favoriteImg1}
        alt=""
      />
      <div className="p-20">
        <h2 className="mb-6 pt-156 text-[27px] text-[#ffffff]">
          The Road Ahead
        </h2>
        <p className="mb-12">
          The road ahead might be paved - it might not be.
        </p>
        <div className="flex justify-between">
          <div className="flex gap-10">
            <img
              className="h-26 w-26 overflow-hidden rounded-2xl"
              src={author1}
              alt=""
            />
            <span>Mat Vogels</span>
          </div>
          <div className="">
            {date.toLocaleString("ru-Ru", { dateStyle: "long" })}
          </div>
        </div>
      </div>
    </article>
  );
}

export default FavoritesItems;
