import underline from "../assets/underline.png";

export default function Underlined({ children, className = "", width = "100%" }) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <img
        src={underline}
        alt=""
        aria-hidden="true"
        style={{ maxWidth: width }}
        className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 top-[70%] w-full"
      />
    </span>
  );
}
