import React from "react";
import {motion} from "framer-motion"
import { X } from "lucide-react";
import PropTypes from "prop-types"
import {mobileNavbarVariants} from "../constants/motion"
import { navbarLinks } from "../constants/index";
import { Link } from "react-router-dom";


const MobileNavbar = React.forwardRef(({ setToggleMenu, activeSection }, ref) => {
    return <motion.div ref={ref} className="fixed right-0 top-0 z-[100000] h-dvh max-w-72 bg-background px-4 py-[50px] shadow-lg"  variants={mobileNavbarVariants}
    initial="hidden"
    animate="visible"
    exit="hidden">
        <button className="absolute right-0 top-0 m-4 text-text"
          
           onClick={() => { setToggleMenu(false) }}>
            <X />
        </button>
        <nav className="flex h-full flex-col justify-between">
            <ul className="flex w-full flex-col gap-y-4">
                {navbarLinks.map((link, index) => (
                    <li key={index} >
                        <Link to={link.path}
                            className={`link ${activeSection===link.id?"text-primary-50":""}`}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to={"./contact"}
                className="btn-primary">
                Contact
            </Link>
        </nav>
    </motion.div>;
});

MobileNavbar.propTypes = {
    setToggleMenu: PropTypes.func,
    activeSection: PropTypes.string,

}

MobileNavbar.displayName = "MobileNavbar";

export default MobileNavbar;
