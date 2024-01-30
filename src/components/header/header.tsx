// components/Header.tsx
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex items-center sticky  w-100 md:w-100 justify-between p-4 bg-blue-500 text-white">
      <nav className="flex gap-5 m-3">
        <a>Home</a>
        <a>Home</a>
        <a>Home</a>
        <a>Home</a>
      </nav>

      <nav className="flex space-x-4">
        <a>Home</a>
        <a>Home</a>
        <a>Home</a>
        <a>Home</a>
      </nav>

      <nav className="flex space-x-4">
        <a>Home</a>
        <a>Home</a>
        <a>Home</a>
        <a>Home</a>
      </nav>
    </header>
  );
};

export default Header;
