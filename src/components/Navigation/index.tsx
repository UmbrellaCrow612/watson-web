import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navigation() {
  return (
    <nav className="navbar bg-base-100 justify-between">
      <Logo />
      <div className="flex gap-4">
        <ThemeSwitcher />
        <MobileMenu />
      </div>
    </nav>
  );
}
