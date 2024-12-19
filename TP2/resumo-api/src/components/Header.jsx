const Header = () => {
    return (
      <header className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold">TP2</h1>
        <div>
          <button className="mr-4 px-4 py-2 border rounded-3xl bg-black text-white ">
            Sign Up
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-3xl hover:bg-orange-600">
            Login
          </button>
        </div>
      </header>
    );
  };
  
  export default Header;
  