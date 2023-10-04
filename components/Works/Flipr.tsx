import { motion } from "framer-motion";
import {TiArrowForward} from "react-icons/ti";

const Flipr = () => {
  return ( 
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.1}}
        className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            Full Stack Developer
            <span className="text-textGreen tracking-wide">@Flipr Innovation Labs</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            May 2023 - Jun 2023
        </p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward/>
                </span>
                Written contemporary, effective code that is easy to maintain for a variety of customer and internal projects.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward/>
                </span>
                Effectively use a variety of platforms and frameworks, such as React, Node.js, Docker, AWS, and others, to increase the versatility and adaptability of a project.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward/>
                </span>
                Maintaining regular communication to assure project alignment and success, I successfully collaborated with cross-functional teams made up of engineers, designers, producers, and clients.
            </li>
        </ul>
    </motion.div>
  )
}

export default Flipr
