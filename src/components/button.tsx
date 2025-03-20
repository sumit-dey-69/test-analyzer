import { ReactNode } from "react";

type Props = {
  onClick: () => void;
  children: ReactNode;
};

function Button({ onClick, children }: Props) {
  return (
    <button
      className="bg-white hover:bg-white/20 text-black hover:text-white text-[0.85em] font-bold px-3 py-2 rounded-sm w-max"
      onClick={onClick}
    >
      <span className="text-[0.85em]">{children}</span>
    </button>
  );
}

export default Button;
