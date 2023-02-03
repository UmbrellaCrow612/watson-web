import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Navigation() {
  return (
    <nav className="navbar bg-base-100 justify-between">
      <Logo />
      <MobileMenu />
    </nav>
  );
}
