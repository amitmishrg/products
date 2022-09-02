const Header: React.FC = () => (
  <header className="bg-white">
    <div className="mx-auto max-w-7xl py-5 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <h1 className="text-3xl font-bold tracking-tight text-slate-800">
        axiamatic
      </h1>
      <a
        href="/"
        className="text-sm font-light text-slate-400 hover:text-slate-500 underline "
      >
        Exit Setup
      </a>
    </div>
  </header>
);

export default Header;
