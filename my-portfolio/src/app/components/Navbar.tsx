import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-6 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Shraddha</h1>
      <div className="space-x-4">
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
