import { Link, useLocation } from "react-router-dom";

export default function HashLink({ href, className, onClick, children }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link to={`/${href}`} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
