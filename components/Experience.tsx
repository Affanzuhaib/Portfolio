import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Flipr from './Works/Flipr'
import Coincent from './Works/Coincent';
import SmartInterviews from './Works/SmartInterviews';
import Copart from './Works/Copart';

const Experience = () => {
    const [WorkCopart,setWorkCopart] = useState(true);
    const [WorkSmart,setWorkSmart] = useState(false);
    const [WorkFlipr,setWorkFlipr] = useState(false);
    const [WorkCoincent,setWorkCoincent] = useState(false);

    const handleCopart=()=>{
        setWorkCopart(true);
        setWorkSmart(false);
        setWorkFlipr(false);
        setWorkCoincent(false);
    }

    const handleSmart=()=>{
        setWorkCopart(false);
        setWorkSmart(true);
        setWorkFlipr(false);
        setWorkCoincent(false);
    }

    const handleFlipr=()=>{
        setWorkCopart(false);
        setWorkSmart(false);
        setWorkFlipr(true);
        setWorkCoincent(false);
    };

    const handleCoincent=()=>{
        setWorkCopart(false);
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
                 onClick={handleCopart}
                className={`${WorkCopart ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                >
                    Copart
                </li>
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
            {WorkCopart && <Copart/>}
        </div>
    </section>
  )
}

export default Experience