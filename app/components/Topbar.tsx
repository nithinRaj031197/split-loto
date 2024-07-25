const TopBar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">MyLogo</div>
      <nav className="flex gap-4">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#services" className="hover:underline">
          Services
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default TopBar;
