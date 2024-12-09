import React from "react";

const Navbar = () => {
  return (
      <div className="flex justify-center items-center fixed top-3 w-full z-10">
          <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
              <a href="#home" className="nav-item">Главная</a>
              <a href="#club" className="nav-item">Клуб</a>
              <a href="#info" className="nav-item">Рассчет</a>
              <a href="#contacts"
                 className="nav-item bg-orange-400 text-gray-900 hover:bg-white/70 hover:text-gray-900">Контакты</a>
          </nav>
      </div>
  );
};

export default Navbar;
