import Image from "next/image";
import SectionTitle from "./SectionTitle";
import {AiFillThunderbolt} from "react-icons/ai"
import { profileImg } from "@/public/assets";


const About = () => {
  return (
    <section 
        id='about'
        className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
        <SectionTitle title="About Me" titleNo="01" />
        <div className="flex flex-col lgl:flex-row gap-16">
            <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4 ">
                <p>
                Hello! My name is Mohammed Affan Zuhaibuddin. I'm a passionate Fullstack Web Developer with excellent
                <span className="text-textGreen">
                {" "} C++, Python and Java {" "}
                </span>
                skills as well as experience in Machine Learning. My stack consists of HTML, CSS, JavaScript, NodeJS, 
                <span className="text-textGreen">
                {" "} Reactjs {" "}
                </span>
                , MongoDB,
                <span className="text-textGreen">
                {" "} AWS {" "}
                </span>
                 , and Google Cloud Platform. 
                </p>
                <p>
                I've contributed to real-world projects, 
                such as enhancing the Employee Dashboard with 
                data visualization and reducing overfitting in CNN models. 
                My work also extends to 
                <span className="text-textGreen">
                {" "} user-friendly web development {" "}
                </span>
                , as seen in 
                <span className="text-textGreen">
                {" "} Haven {" "}
                </span>
                , a hostel-finding website, and 
                <span className="text-textGreen">
                {" "} Activity Point Tracker {" "}
                </span>
                , a student activity monitoring app.
                </p>
                <p>
                With proficiency in Git, Docker, Kubernetes, and Terraform, I'm equipped to handle end-to-end development. Explore my portfolio for more, and let's connect for potential collaborations!
                </p>
                <p>Here are a few technologies I have been working with recently:</p>
                <ul className="max-w-[600px] text-sm font-titleFont grid grid-cols-4 gap-3 mt-6 ">
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt/>
                        </span>
                        C++
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt/>
                        </span>
                        Reactjs
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt/>
                        </span>
                        Expressjs
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt/>
                        </span>
                        AWS
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt/>
                        </span>
                        Python
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt/>
                        </span>
                        Nextjs
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt/>
                        </span>
                        Nodejs
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt/>
                        </span>
                        Google Cloud Platform
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt/>
                        </span>
                        Java
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt/>
                        </span>
                        JavaScript
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt/>
                        </span>
                        MongoDB
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt/>
                        </span>
                        Docker
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt/>
                        </span>
                        TailwindCSS
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt/>
                        </span>
                        Github
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt/>
                        </span>
                        Git
                    </li>
                    
                    
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt/>
                        </span>
                        Kubernetes
                    </li>
                </ul>
            </div>
            <div className="w-full lgl:w-1/3 h-80 relative group">
                <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
                    <div className="w-[287px] h-full relative z-20 flex pl-6 lgl:pl-0">
                        <Image 
                            className="rounded-lg h-full object-cover "
                            src={profileImg}
                            alt="profileImg"
                        />
                        <div className="hidden lgl:inline-block absolute w-4/5 h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300 "></div>
                    </div>
                    </div>
                    <div className="hidden lgl:inline-flex w-4/5 h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" ></div>
            </div>
        </div>
    </section>
  )
}

export default About