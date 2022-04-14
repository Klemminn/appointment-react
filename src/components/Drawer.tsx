import {
  MenuIcon,
  SearchIcon,
  CalendarIcon,
  TagIcon,
  UserIcon,
  UserGroupIcon,
  CogIcon,
} from "@heroicons/react/solid";

import Link from "./Link";

const items = [
  {
    Icon: SearchIcon,
    label: "Finna tíma",
    link: "/book",
  },
  {
    Icon: CalendarIcon,
    label: "Dagbók",
    link: "/calendar",
  },
  {
    Icon: TagIcon,
    label: "Þjónustur",
    link: "/services",
  },
  {
    Icon: UserIcon,
    label: "Starfsmenn",
    link: "/users",
  },
  {
    Icon: UserGroupIcon,
    label: "Viðskiptavinir",
    link: "/customers",
  },
  {
    Icon: CogIcon,
    label: "Stillingar",
    link: "/settings",
  },
];

const Drawer: React.FC = ({ children }) => (
  <div className="h-screen drawer drawer-mobile w-full">
    <input id="drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      <label
        htmlFor="drawer"
        className="btn bg-transparent border-0 drawer-button lg:hidden flex-column"
      >
        <MenuIcon className="h-5 w-5 text-slate-500" />
      </label>
      {children}
    </div>
    <div className="drawer-side">
      <label htmlFor="drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        {items.map(({ Icon, label, link }) => (
          <li key={link}>
            <Link to={link}>
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Drawer;
