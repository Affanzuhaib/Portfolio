import {TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin} from "react-icons/sl";
import {FaKaggle} from "react-icons/fa"
import {SiLeetcode, SiCodechef} from "react-icons/si"

import React from 'react'

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4 ">
        <a href="https://www.linkedin.com/in/affan-zuhaib-73b389209/" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 ">
                    <SlSocialLinkedin/>
                </span>
            </a>
            <a href="https://leetcode.com/affanzuhaibuddin/" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 ">
                    <SiLeetcode/>
                </span>
            </a>
            <a href="https://github.com/Affanzuhaib" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 ">
                    <TbBrandGithub/>
                </span>
            </a>
            <a href="https://www.kaggle.com/affanzuhaib" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 ">
                    <FaKaggle/>
                </span>
            </a>
            <a href="https://www.codechef.com/users/cbit2_20_c137" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 ">
                    <SiCodechef/>
                </span>
            </a>
    </div>
  )
}

export default Footer