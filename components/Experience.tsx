import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Flipr from './Works/Flipr'
import Coincent from './Works/Coincent';
import SmartInterviews from './Works/SmartInterviews';

const Experience = () => {
    const [WorkSmart,setWorkSmart] = useState(true);
    const [WorkFlipr,setWorkFlipr] = useState(false);
    const [WorkCoincent,setWorkCoincent] = useState(false);

    const handleSmart=()=>{
        setWorkSmart(true);
        setWorkFlipr(false);
        setWorkCoincent(false);
    }

    const handleFlipr=()=>{
        setWorkSmart(false);
        setWorkFlipr(true);
        setWorkCoincent(false);
    };

    const handleCoincent=()=>{
        setWorkSmart(false);
        setWorkFlipr(false);
        setWorkCoincent(true);
    };



  return (
    <section
      id="experience"
      className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'
    >
        <SectionTitle title='Professional Background' titleNo='02'/>
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
            <ul className='md:w-32 flex flex-col '>
                <li 
                 onClick={handleSmart}
                className={`${WorkSmart ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                >
                    Smart Interviews
                </li>
                <li 
                    onClick={handleFlipr}
                    className={`${WorkFlipr ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
                    } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                    >
                    Flipr Innovation Labs
                </li>
                <li 
                 onClick={handleCoincent}
                className={`${WorkCoincent ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                >
                    Coincent
                </li>
            </ul>
            {WorkFlipr && <Flipr/>}
            {WorkCoincent && <Coincent/>}
            {WorkSmart && <SmartInterviews/>}
        </div>
    </section>
  )
}

export default Experience