import React from "react";
import { TbMenu2 } from 'react-icons/tb';
import { FaDiceFour } from 'react-icons/fa';
import { TbSchool } from 'react-icons/tb';
import { TbFileCertificate } from 'react-icons/tb';
import { GoGraph } from 'react-icons/go';
import { TbCamera } from 'react-icons/tb';
import { RiQuestionLine } from 'react-icons/ri';
const logo = require("../assets/icon.png");

export default function Sidebar() {
  return (
    <div className="sidebar fixed flex flex-col justify-between justify-items-center items-center content-center self-center h-screen">
      <div className="first-group space-y-6 flex flex-col justify-center justify-items-center items-center content-center self-center h-1/4">
        {/* eslint-disable-next-line */}
        <a href="#" className="border-l-4 border-transparent border-solid px-6 py-4"><TbMenu2 className="hover:scale-110 transition-all" size={25} color={'#858B94'}/></a>
        {/* eslint-disable-next-line */}
        <a href="#" className="border-l-4 border-transparent border-solid px-6 py-4"><img className="hover:scale-110 transition-all" src={logo} width={25} alt="Ufounders Logo" /></a>
      </div>
      <div className="second-group flex flex-col justify-start justify-items-center items-start content-center self-center mt-28 h-3/4">
        {/* eslint-disable-next-line */}
        <a href="#" className="border-l-4 border-black border-solid px-6 py-4"><FaDiceFour className="hover:scale-110 transition-all" size={25} color={'#000'}/></a>
        {/* eslint-disable-next-line */}
        <a href="#" className="border-l-4 border-transparent border-solid px-6 py-4"><TbSchool className="hover:scale-110 transition-all" size={25} color={'#858B94'}/></a>
        {/* eslint-disable-next-line */}
        <a href="#" className="border-l-4 border-transparent border-solid px-6 py-4"><TbFileCertificate className="hover:scale-110 transition-all" size={25} color={'#858B94'}/></a>
        {/* eslint-disable-next-line */}
        <a href="#" className="border-l-4 border-transparent border-solid px-6 py-4"><GoGraph className="hover:scale-110 transition-all" size={25} color={'#858B94'}/></a>
        {/* eslint-disable-next-line */}
        <a href="#" className="border-l-4 border-transparent border-solid px-6 py-4"><TbCamera className="hover:scale-110 transition-all" size={25} color={'#858B94'}/></a>
        {/* eslint-disable-next-line */}
        <a href="#" className="border-l-4 border-transparent border-solid px-6 py-4"><RiQuestionLine className="hover:scale-110 transition-all" size={25} color={'#858B94'}/></a>
      </div>
    </div>
  );
}
