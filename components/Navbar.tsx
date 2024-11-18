import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
