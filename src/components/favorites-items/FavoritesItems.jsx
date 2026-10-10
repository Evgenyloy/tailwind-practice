function FavoritesItems({
  image,
  title,
  excerpt,
  authorName,
  authorAvatar,
  date,
}) {
  return (
    <article className="relative w-[100%] max-w-[460px] cursor-pointer text-[#ffffffb2] transition-transform duration-275 hover:scale-101">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={image}
        alt=""
      />
      <div className="relative z-10 p-20">
        <h2 className="mb-6 pt-156 text-[27px] text-[#ffffff]">{title}</h2>
        <p className="mb-12">{excerpt}</p>
        <div className="flex justify-between">
          <div className="flex gap-10">
            <img
              className="h-26 w-26 overflow-hidden rounded-2xl"
              src={authorAvatar}
              alt=""
            />
            <span>{authorName}</span>
          </div>
          <div className="">{date}</div>
        </div>
      </div>
    </article>
  );
}

export default FavoritesItems;
