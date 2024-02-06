// components/Sidebar.tsx
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Sidebar: React.FC = () => {
  const router = useRouter();

  const initialState = { isOpen: false };
  const [data, setData] = useState(initialState);

  const links = [
    { href: "/dashboard/account", label: "Account" },
    { href: "/dashboard/analytics", label: "Analytics" },
    { href: "/dashboard/settings", label: "Settings" },
  ];

  const toggleSidebar = () => {
    setData({
      ...data,
      isOpen: !data.isOpen,
    });
  };

  return (
    <div className="sidebar-container">
      {/* add a button with an icon to toggle the sidebar */}
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      {/* add a class name to the sidebar based on the state */}
      <aside className={`sidebar ${data.isOpen ? "open" : "close"}`}>
        <h2 className="text-lg font-bold">Dashboard</h2>
        <ul className="mt-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <p
                  className={`block py-2 px-4 rounded ${
                    router.pathname === link.href
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {link.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
