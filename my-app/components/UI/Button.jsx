import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Button = ({ label, className, href, ...rest }) => {
  return (
    <button
      className={twMerge(
        "bg-bg border px-6 py-1 border-line text-white rounded-md",
        className
      )}
      {...rest}
    >
      {href ? <Link href={href}>{label}</Link> : label}
    </button>
  );
};

export default Button;
