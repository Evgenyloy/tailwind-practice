import { twMerge } from "tailwind-merge";

function Title({ title, className = "" }) {
  return (
    <h2
      className={twMerge(
        `relative mb-[35px] text-center text-[20px] tracking-widest after:absolute after:bottom-[-13px] after:left-1/2 after:h-[1px] after:w-[200px] after:-translate-x-1/2 after:bg-gray-300 after:content-[''] ${className}`,
      )}
    >
      {title}
    </h2>
  );
}

export default Title;
