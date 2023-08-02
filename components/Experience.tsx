import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Flipr from './Works/Flipr'
import Coincent from './Works/Coincent';
import ReactDB from './Works/ReactDB';
import Triology from './Works/Triology';

const Experience = () => {
    const [WorkFlipr,setWorkFlipr] = useState(true);
    const [WorkCoincent,setWorkCoincent] = useState(false);
    const [WorkReactdb,setWorkReactdb] = useState(false);
    const [WorkTriology,setWorkTriology] = useState(false);

    const handleFlipr=()=>{
        setWorkFlipr(true);
        setWorkCoincent(false);
        setWorkReactdb(false);
        setWorkTriology(false);
    };

    const handleCoincent=()=>{
        setWorkFlipr(false);
        setWorkCoincent(true);
        setWorkReactdb(false);
        setWorkTriology(false);
    };

    const handleReactdb=()=>{
        setWorkFlipr(false);
        setWorkCoincent(false);
        setWorkReactdb(true);
        setWorkTriology(false);
    };

    const handleTriology=()=>{
        setWorkFlipr(false);
        setWorkCoincent(false);
        setWorkReactdb(false);
        setWorkTriology(true);
    };

  return (
    <section
      id="experience"
      className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'
    >
        <SectionTitle title='Where I have Worked' titleNo='02'/>
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
            <ul className='md:w-32 flex flex-col '>
                <li 
                    onClick={handleFlipr}
                    className={`${WorkFlipr ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
                    } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                    >
                    Flip Innovation Labs
                </li>
                <li 
                 onClick={handleCoincent}
                className={`${WorkCoincent ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                >
                    Coincent
                </li>
                <li 
                onClick={handleReactdb}
                className={`${WorkReactdb ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                >
                    ReactBD
                </li>
                <li 
                onClick={handleTriology}
                className={`${WorkTriology ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                >
                    Triology Innovations
                </li>
            </ul>
            {WorkFlipr && <Flipr/>}
            {WorkCoincent && <Coincent/>}
            {WorkReactdb && <ReactDB/>}
            {WorkTriology && <Triology/>}
        </div>
    </section>
  )
}

export default Experience