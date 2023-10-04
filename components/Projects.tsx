import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { activity, gameplay, homePage } from '@/public/assets'
import { TbBrandGithub } from 'react-icons/tb'
import {RxOpenInNewWindow} from "react-icons/rx"

const Projects = () => {
  return (
    <section
        id="project"
        className='max-w-container mx-auto lgl:px-20 py-24'
    >
        <SectionTitle title='My Development Journey' titleNo='03'/>
        <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
        {/* Project one */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row gap-6'>
                <a className='w-full xl:w-1/2 h-auto relative group'
                href="https://www.kaggle.com/code/affanzuhaib/final-submission-in-competition" target='_blank'>
                    <div>
                        <Image className='w-full h-full object-contain'
                        src={gameplay}
                        alt='gameplay'/>
                    </div>
                </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                    Featured Project
                </p>
                <h3 className='text-2xl font-bold'>Real-time Student Performance in Game Play</h3>
                    <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md '>
                    This project uses 
                    <span className='text-textGreen'>{" "}data-driven techniques{" "}</span> 
                    to offer instant feedback, helping students identify and fill knowledge gaps in game-based learning, reducing tracking disparities.
                    </p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGreen'>
                    <li>Machine Learning</li>
                    <li>Data Analysis</li>
                    <li>Tensor Flow</li>
                    <li>Matplotlib</li>
                </ul>
                <div className='text-2xl flex gap-4'>
                    <a 
                    className='hover:text-textGreen duration-300'
                    href="https://www.kaggle.com/code/affanzuhaib/final-submission-in-competition"
                    target='_blank'
                    >
                        <RxOpenInNewWindow/>
                    </a>
                </div>
            </div>
            </div>
        </div>
        {/* Project two */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row-reverse gap-6'>
                <a className='w-full xl:w-1/2 h-auto relative group'
                href="https://github.com/Affanzuhaib/Haven_A-SAFE-PLACE-TO-STAY" target='_blank'>
                    <div>
                        <Image className='w-full h-full object-contain'
                        src={homePage}
                        alt='hostelPage'/>
                    </div>
                </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10'>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                    Featured Project
                </p>
                <h3 className='text-2xl font-bold'>Haven - A Safe Place to Stay</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md'>
                {/* This website enables students to easily find and compare hostels based on location, area, and user feedback, simplifying the hostel search process. */}
                This website streamlines the hostel search process by allowing students to quickly identify and compare hostels based on location, neighborhood, and user reviews.
                </p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGreen'>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>Nodejs</li>
                    <li>Express</li>
                </ul>
                <div className='text-2xl flex gap-4'>
                    <a 
                    className='hover:text-textGreen duration-300'
                    href="https://github.com/Affanzuhaib/Haven_A-SAFE-PLACE-TO-STAY" target='_blank'>
                        <TbBrandGithub/>
                    </a>
                </div>
            </div>
            </div>
        </div>
        {/* Project three */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row gap-6'>
                <a className='w-full xl:w-1/2 h-auto relative group'
                href="https://github.com/Affanzuhaib/Activity_points_tracker" target='_blank'>
                    <div>
                        <Image className='w-full h-full object-contain'
                        src={activity}
                        alt='activity'/>
                    </div>
                </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                    Featured Project
                </p>
                <h3 className='text-2xl font-bold'>Activity Point Tracker</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                Develop website for students to upload certificates (academic, internships, etc.), assign points by certificate type, and provide comprehensive feedback for tracking their activities.
                </p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGreen'>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>Nodejs</li>
                    <li>Express</li>
                </ul>
                <div className='text-2xl flex gap-4'>
                    <a 
                    className='hover:text-textGreen duration-300'
                    href="https://github.com/Affanzuhaib/Activity_points_tracker" target='_blank'>
                        <TbBrandGithub/>
                    </a>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Projects