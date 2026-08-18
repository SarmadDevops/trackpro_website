import underline from "../assets/underline.png";

// Wraps text with the hand-drawn orange underline PNG under it.
export default function Underlined({ children, className = "" }) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <img
        src={underline}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-full w-[108%] -translate-x-1/2 -translate-y-2 select-none"
      />
    </span>
  );
}
