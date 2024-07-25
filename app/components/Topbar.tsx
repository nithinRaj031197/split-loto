const TopBar = () => {
  return (
    <div className=" text-black p-4 flex justify-between items-center">
      <div className="flex gap-4">
          <div className="text-2xl font-bold">💵</div>
          <div className="text-2xl font-bold">ItsSplit</div>
      </div>
      <nav className="flex gap-4">
        <button>Log in</button>
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">Sign up</button>
      </nav>
    </div>
  );
};

export default TopBar;
