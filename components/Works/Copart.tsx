import { motion } from "framer-motion";
import {TiArrowForward} from "react-icons/ti";

const Copart = () => {
  return ( 
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.1}}
        className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            Intern Software Engineer
            <span className="text-textGreen tracking-wide">@Copart (CIC)</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            May 2024 - Present
        </p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward/>
                </span>Worked on the end-to-end development of an application using the Flask framework, which helps developers display server information.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward/>
                </span>
                Developed an automated solution to streamline table creation by replicating the schema from a source server to a target server.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward/>
                </span>
                Enhanced skills in Flask, SQL, Jinja templates, and Google Charts, while gaining in-depth knowledge of Solr.
            </li>
        </ul>
    </motion.div>
  )
}

export default Copart
