import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/logo.png";

export default function Logo({ dark = false }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const img = <img src={logoImg} alt="TrackPro" className="h-20 w-auto object-contain" />;

  if (isHome) {
    return (
      <a href="#top" className="flex items-center gap-2" aria-label="TrackPro home">
        {img}
      </a>
    );
  }

  return (
    <Link to="/" className="flex items-center gap-2" aria-label="TrackPro home">
      {img}
    </Link>
  );
}
