import { BiMenuAltRight } from "react-icons/bi";

export default function MobileMenu() {
  return (
    <div className="tooltip tooltip-bottom" data-tip="Menu">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="text-2xl btn btn-ghost">
          <BiMenuAltRight />
        </label>
        <ul
          tabIndex={0}
          className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="btn btn-ghost">Login</a>
          </li>
          <li>
            <a className="btn btn-ghost">Sign up</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
