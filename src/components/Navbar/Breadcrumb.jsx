import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const parts = location.pathname.split("/").filter(Boolean);

  if (location.pathname === "/") return null;

  const toTitle = (str) =>
    str.replace(/-/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase());

  return (
    <nav className="text-sm text-gray-500 py-2 px-4">
      <Link to="/" className="text-blue-600 hover:underline">
        Home
      </Link>

      {parts.map((seg, idx) => {
        const path = "/" + parts.slice(0, idx + 1).join("/");
        const isLast = idx === parts.length - 1;

        // special case: /product/:id -> "product" ko link mat banao
        const isProductParent =
          seg.toLowerCase() === "product" && parts.length === 2 && idx === 0;

        return (
          <span key={path}>
            <span className="mx-1 text-gray-400">»</span>
            {isLast || isProductParent ? (
              <span className="text-gray-700">{toTitle(seg)}</span>
            ) : (
              <Link to={path} className="text-blue-600 hover:underline">
                {toTitle(seg)}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
