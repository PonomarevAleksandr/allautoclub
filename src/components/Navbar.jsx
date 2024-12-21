const Navbar = ({ navbarContent }) => {
    if (!navbarContent) return null;

    return (
        <div className="flex justify-center items-center fixed top-3 w-full z-10">
            <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
                <a href="/#home" className="nav-item">{navbarContent.home}</a>
                <a href="/#club" className="nav-item">{navbarContent.club}</a>
                <a href="/#calc" className="nav-item">{navbarContent.calc}</a>
                <a
                    href="/#offer"
                    className="nav-item bg-orange-400 text-gray-900 hover:bg-white/70 hover:text-gray-900"
                >
                    {navbarContent.contacts}
                </a>
            </nav>
        </div>
    );
};

export default Navbar;
