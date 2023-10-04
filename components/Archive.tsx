import React,{useState} from 'react'
import ArchiveCard from './ArchiveCard'

const Archive = () => {
  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
        <div className='w-full flex flex-col items-center'>
            <h2 className='text-3xl font-titleFont font-semibold'>
                Other NoteWorthy Projects
            </h2>
            <p className='text-sm font-titleFont text-textGreen'>
                View the archive
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
            <ArchiveCard 
            title="Netflix Clone" des="Developed a full-featured Netflix clone as a personal project, demonstrating proficiency in web development, design, and user interface/user experience (UI/UX) design." 
            listItem={["Reactjs","TailwindCSS","Nodejs"]}
            link="https://github.com/Affanzuhaib/Netflix_Clone"
            />
            <ArchiveCard 
            title="Image Segmentation for auto mobiles" des="This project uses OpenCV for video-based vehicle detection and counting in traffic control, improving accuracy through background subtraction." 
            listItem={["OpenCV","Jupyter","COCO dataset"]}
            link="https://github.com/Affanzuhaib/Image_Segmentation_for_auto_mobiles"
            />
            <ArchiveCard 
            title="Placement ERP System" des="This project facilitates swift and effective campus selections, benefiting both graduating students and recruiters by expediting the placement process." listItem={["Django","SQL lite3","getform.io"]}
            link="https://github.com/Affanzuhaib/Placement-ERP-System"
            />
        </div>
    </div>
  )
}

export default Archive