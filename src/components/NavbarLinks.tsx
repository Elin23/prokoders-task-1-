import { Link, useLocation } from "react-router-dom";

type NavLink = {
  label: string;
  href: string;
};

interface NavLinksProps {
  links: NavLink[];
  closeMenu?: () => void;
}

const NavLinks = ({ links, closeMenu }: NavLinksProps) => {
  const location = useLocation();

  return (
    <>
      {links.map((item, i) => {
        const isActive = location.pathname === item.href;

        return (
          <li key={i}>
            <Link to={item.href} onClick={closeMenu}
              className={` relative pb-1 font-medium transition-colors duration-300
                ${isActive ? "text-indigo-accent after:w-full" : "text-charcoal hover:text-indigo-accent after:w-0"}
                after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-indigo-accent after:transition-all after:duration-300
              `}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
