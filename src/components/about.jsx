import SectionTitle from "./sectionTitle"
import { about, rhombus } from "../constants/assets"
import { motion } from "framer-motion";
import { leftSideVariants, rightSideVariants } from "../constants/motion";
import { Download } from "lucide-react";
const About = () => {
    return <section id="about" className="relative bg-[url(/src/assets/topography.svg)] bg-cover bg-no-repeat">
        <div className="container relative flex flex-col items-center gap-y-9 ">
            <img src={rhombus} alt="rhombus" className="absolute right-[5%] -z-10 w-12" />
            <SectionTitle title="ABOUT ME" subtitle="How would I describe myself?" />
            <div className="flex w-full flex-col items-center justify-between gap-12 md:flex-row">
                <motion.div
                    variants={leftSideVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "0px 0px -200px 0px", once: true }}
                    className="flex w-full justify-center md:justify-start md:w-5/12">
                    <img src={about} alt="Devansh" className="rounded-full aspect-square w-full max-w-[400px]" />
                </motion.div>
                <motion.div
                    variants={rightSideVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "0px 0px -200px 0px", once: true }}
                    className="flex flex-col  items-center  gap-y-5 text-center md:w-1/2 md:items-end md:text-start">
                    <div className="flex flex-col gap-y-3">
                        <p className="textp-3xlg font-semibold text-gray-90">
                            Hi, I&apos;m Devansh
                        </p>
                        <p className="text-lg font-normal text-gray-50">I&apos;m a full-stack web developer eager to advance my career by mastering data structures and algorithms. I stay updated with industry trends to continuously improve my skills and tackle new challenges.</p>
                    </div>
                    <div className="md:mt-12">
                        <a href="" download="" target="_blank"><button className="btn-primary " >
                            Download Resume<Download/>
                        </button></a>
                    </div>

                </motion.div>
            </div>
        </div>
    </section>;
};

export default About;
