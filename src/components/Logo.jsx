import logoImg from "../assets/logo.png";

export default function Logo({ dark = false }) {
  return (
    <a href="#top" className="flex items-center gap-2" aria-label="TrackPro home">
      <img src={logoImg} alt="TrackPro" className="h-20 w-auto object-contain" />
    </a>
  );
}
