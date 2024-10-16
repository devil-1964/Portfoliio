import React from "react"
import SectionTitle from "./sectionTitle"
import { motion } from "framer-motion"
import { cir01, cir02 } from "../constants/assets"
import { services } from "../constants"
import PropTypes from "prop-types"
import { fadeInVariants } from "../constants/motion"

const Service = React.forwardRef(({ icon, title, description }, ref) => {
    return (
        <div 
        ref={ref}
        className="flex flex-col items-start gap-y-4 rounded-xl border border-solid border-gray-30 p-6 transition-colors hover:border-primary-50"
        >
           <div className="flex size=[70px] items-center rounded-full bg-primary-50/5 text-primary-50">
            <img src={icon} width={40} className="animate-wiggle"/>
           </div>
            <p className="text-lg font-semibold text-text">{title}</p>
            <p className="text-base font-normal text-gray-50">{description}</p>

        </div>
    );
});

Service.displayName="Service"
Service.propTypes={
    icon:PropTypes.string,
    title:PropTypes.string,
    description:PropTypes.string
}
const ServiceMotion=motion(Service);
const Services = () => {
    return <section>
        <div className="container relative flex flex-col items-center gap-y-9">
            <img src={cir02} className="absolute left-0 top-0 -z-10 -translate-y-14" />
            <img src={cir01} className="absolute right-0 top-0 -z-10 " />
            <SectionTitle title="SKILLS" subtitle="How I Can Contribute" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) =>
                (

                    <ServiceMotion
                    key={service.id}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    variants={fadeInVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,margin:"0px 0px -200px 0px"}}
                    custom={index}
                    />

                ))}
            </div>
        </div>
    </section>
};

export default Services;
