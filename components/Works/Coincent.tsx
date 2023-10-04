import { motion } from "framer-motion";
import {TiArrowForward} from "react-icons/ti";

const Coincent = () => {
  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.1}}
        className="w-full"
    > 
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            AI Intern
            <span className="text-textGreen tracking-wide">@Coincentai</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            Oct 2022 - Dec 2022
        </p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward/>
                </span>
                Engineered a convolutional neural network using TensorFlow to classify images of 10 fashion categories.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward/>
                </span>
                Utilized a range of diverse platforms, languages, and data science tools, such as TensorFlow, Scikit-Learn, Seaborn, and Keras.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward/>
                </span>
                Enhanced a novel data augmentation technique that boosted accuracy by 12% and reduced overfitting on the training set by 30%.
            </li>
        </ul>
    </motion.div>
  )
}

export default Coincent