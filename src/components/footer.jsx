import { Github, LinkedinIcon,TwitterIcon} from "lucide-react";
import { logo } from "../constants/assets";

const Footer = () => {
    return <footer>
        <div className="container flex flex-col gap-5 ">
            <div className="flex flex-wrap justify-center gap-6 sm:justify-between">
                <div className="flex w-fit items-center gap-x-3">
                    <img src={logo}
                    alt="logo"
                    className="w-10 hover:animate-wiggle"
                    />
                    <p className="text-xl font-semibold text-text">DEVANSH</p>
                    
                </div>
                <ul className="flex flex-wrap items-center justify-center gap-4 ">
                    <li className="btn-primary size-fit p-2 animate-wiggle">
                        <a href="https://github.com/devil-1964" className="btn-primary size-fit p-2">
                            <Github/>
                        </a>
                    </li>
                    <li className="btn-primary size-fit p-2 animate-wiggle">
                        <a href="https://linkedin.com/in/devansh-2aaab1256/" className="btn-primary size-fit p-2">
                            <LinkedinIcon/>
                        </a>
                    </li>
                    <li className="btn-primary size-fit p-2 animate-wiggle">
                        <a href="https://x.com/Devansh1Devil" className="btn-primary size-fit p-2">
                            <TwitterIcon/>
                        </a>
                    </li>
                    


                </ul>

            </div>
            <hr className="border-gray-30"/>
            <div>
                <p className="text-center text-sm font-medium text-text pb-3">
                    @2024
                </p>
            </div>
        </div>
    </footer>;
};

export default Footer;
