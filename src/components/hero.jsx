import { Typewriter } from "react-simple-typewriter"
import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import {motion} from "framer-motion"
import {arrow01, arrow02, home, lines} from "../constants/assets"
import {leftSideVariants, rightSideVariants} from "../constants/motion"
const Hero = () => {
    return <section id="home" className="flex min-h-screen items-center">
        <div className="container flex flex-col-reverse items-center jusify-between gap-y-12 md:flex-row">
            <motion.div 
            variants={leftSideVariants}
            initial="hidden"
            animate="visible"
            className="relative flex flex-col items-center gap-y-7 text-center md:w-1/2 md:items-start md:text-start">
            <img src={arrow01} className="absolute right-0 top-0 hidden w-8 -translate-y-full sm:block lg:w-14"/>
                <div className="flex flex-col gap-y-4 ">
                    <h1 className="text-h1 font-bold text-text">
                        Hi, I&apos;m <span className="text-secondary-50">Devansh</span>
                    </h1>
                    <h2 className="text-h2 text-text">
                        I&apos;m a <span className="text-primary-50">
                            <Typewriter cursor
                                cursorBlinking
                                delaySpeed={1300}
                                deleteSpeed={25}
                                typeSpeed={80}
                                loop={0}
                                words={[
                                    "Full-Stack Developer"
                                    , "Student",
                                    "Tech-Enthusiast"

                                ]}

                            />

                        </span>
                    </h2>
                    <p className="text-lg font-normal text-gray-50">
                        Learning DSA and building full-stack skills to grow from foundational to proficient, with the goal of securing a position in the tech industry.
                    </p>
                    <Link

                        to={"/contact"}
                        className="btn-primary w-fit max-sm:mx-auto"
                    >
                        Contact <Send/>
                    </Link>
                    <img src={arrow02} className="absolute -bottom-4 left-0 hidden w-8 translate-y-full md:block lg:w-12"/>
                </div>

            </motion.div>
            <motion.div
            variants={rightSideVariants}
            initial="hidden"
            animate="visible"
            className="relative flex h-full justify-end md:w-1/2 ">
                    <img src={home} alt="Devansh"
                    className="w-full max-w-80 md:max-w-[70%]"/>
                    <img src={lines} alt="lines" className="absolute -top-3 w-10 md:w-14"/>
            </motion.div>

        </div>
    </section>;
};

export default Hero;


