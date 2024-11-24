import { motion } from "framer-motion";
import {TiArrowForward} from "react-icons/ti";

const SmartInterviews = () => {
  return ( 
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.1}}
        className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            DSA Mentor
            <span className="text-textGreen tracking-wide">@Smart Interviews</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            Sep 2023 - Jan 2024
        </p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward/>
                </span>
                Effectively explained C++, Python, Java, and JavaScript code to help mentees learn algorithms and data structures.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward/>
                </span>
                Proficiency in mentoring mentees through substantial problem-solving exercise to improve their coding and computational skills.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward/>
                </span>
                Efficiently found and fixed bugs in the mentees' code, promoting a culture of high-quality and efficient code.
            </li>
        </ul>
    </motion.div>
  )
}

export default SmartInterviews
