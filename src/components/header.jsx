import React from "react";
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { navbarLinks } from "../constants"
import MobileNavbar from "./mobileNavbar"
import { Menu, Moon, Send, Sun } from "lucide-react";
import { logo } from "../constants/assets"
import { useClickOutside, useResize, useScroll } from "../hook/index"
import { navbarVariants } from "../constants/motion";

const Header = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState("")
    const mobileNavbarRef = React.useRef(null)
    const { resizedX } = useResize({ targetX: 786 });
    const { scrolledY } = useScroll({ targetY: 100 });
    const location = useLocation();
    const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');

    useClickOutside(mobileNavbarRef, () => setToggleMenu(false))

    React.useEffect(() => {
        // Apply the theme to the document
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        // Save the theme preference in local storage
        localStorage.setItem('theme', theme);
      }, [theme]);
    
      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
      };

    React.useEffect(() => {
        if (resizedX) setToggleMenu(false)
    }, [resizedX])
    React.useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]")
            let currentSection = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 60) {
                    currentSection = section.getAttribute("id")
                }
            })
            setActiveSection(currentSection)
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);

    React.useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash)
            if (element) {
                element.scrollIntoView({ behaviour: "smooth" })
            }
        }
    }, [location])
    return (
        <>
            <motion.header className="fixed z-[1000]  flex w-full items-center"
                variants={navbarVariants}
                initial={["default", "slideStart"]}
                animate={[scrolledY ? "active" : "default", "slideEnd"]}
                transition={{ duration: 0.3 }}
            >
                <div className=" flex h-full items-center w-full justify-between bg-background pl-5">
                    <Link to={"/home"}
                        className="flex h-3/4 items-center gap-x-2">
                        <img src={logo}
                            alt="logo"
                            className="h-full max-h-10 max-w-10"
                        />
                        <p className="text-base font-semibold text-text">DEVANSH</p>
                    </Link>
                    <nav className="hidden md:block">
                        <ul className="flex gap-x-4">
                            {navbarLinks.map((link) => (
                                <li key={link.id}>
                                    <Link to={link.path} className={`link ${activeSection === link.id ? "text-primary-50" : ""}`}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="hidden md:inline-flex">

                        <Link to={"/contact"} className="btn-primary ">Contact<Send /></Link>
                        <button onClick={toggleTheme} className="btn btn-primary p-3 ml-2 mr-5">
                        {theme === 'dark' ? <Moon/> : <Sun/>}
                        </button>
                    </div>

                    <button className="cursor-pointer text-text md:hidden" onClick={() => setToggleMenu(true)}>
                        <Menu />
                    </button>
                </div>
            </motion.header>
            <AnimatePresence>
                {toggleMenu && <MobileNavbar setToggleMenu={setToggleMenu} ref={mobileNavbarRef} activeSection={activeSection} />}
            </AnimatePresence>
        </>
    );
};
export default Header;
