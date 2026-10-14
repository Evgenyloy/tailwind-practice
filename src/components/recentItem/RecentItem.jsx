function RecentItem({ image, title, excerpt, authorName, authorAvatar, date }) {
  return (
    <article className="flex w-full max-w-[296px] flex-col bg-white">
      <img
        className="mb-[14px] w-full max-w-[296px] h-150 object-cover"
        src={image}
        alt=""
      />
      <div className="relative z-10 grow-1 p-[13px]">
        <h2 className="mb-[6px] text-[16px] text-[#101315FF]">{title}</h2>
        <p className="mb-[15px] text-[13px] text-[#7a7a7a]">{excerpt}</p>
      </div>
      <div className="flex basis-[48px] items-center justify-between border-t border-gray-200 px-[13px]">
        <div className="flex items-center">
          <img
            className="h-[26px] w-[26px] overflow-hidden rounded-2xl"
            src={authorAvatar}
            alt=""
          />
          <span className="ml-[10px] text-[12px] text-[#999999]">
            {authorName}
          </span>
        </div>
        <div className="text-[12px] text-[#999999]">{date}</div>
      </div>
    </article>
  );
}

export default RecentItem;
