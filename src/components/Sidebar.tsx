import React from "react";
import { TbMenu2 } from 'react-icons/tb';
import { FaDiceFour } from 'react-icons/fa';
import { TbSchool } from 'react-icons/tb';
import { TbFileCertificate } from 'react-icons/tb';
import { GoGraph } from 'react-icons/go';
import { TbCamera } from 'react-icons/tb';
import { RiQuestionLine } from 'react-icons/ri';
const logo =  require("../assets/ico.png");

export default function Sidebar() {
  return (
    <div className="sidebar h-screen w-[72px]">
      <aside className="flex flex-col justify-start justify-items-start items-start content-start mt-2">

          <div className="h-1/4 flex flex-col justify-center justify-items-center items-center content-center overflow-y-auto">
            <ul>
              <li>
                <a href="/" className="flex items-center p-4 border-l-4 border-transparent border-solid">
                  <TbMenu2 size={21} color={'#A3ABB5'}/>
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center p-4 border-l-4 border-transparent border-solid mt-4">
                  <img src={logo} alt="Ufounders Logo"/>
                </a>
              </li>
            </ul>
          </div>

          <div className="h-full flex flex-col justify-center justify-items-center items-center content-center overflow-y-auto mt-24">
            <ul>
              <li>
                <a href="/" className="flex items-center p-4 border-l-4 border-black border-solid">
                  <FaDiceFour size={21} color={'#000000'}/>
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center p-4 border-l-4 border-transparent border-solid">
                  <TbSchool size={21} color={'#A3ABB5'}/>
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center p-4 border-l-4 border-transparent border-solid">
                  <TbFileCertificate size={21} color={'#A3ABB5'}/>
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center p-4 border-l-4 border-transparent border-solid">
                  <GoGraph size={21} color={'#A3ABB5'}/>
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center p-4 border-l-4 border-transparent border-solid">
                  <TbCamera size={21} color={'#A3ABB5'}/>
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center p-4 border-l-4 border-transparent border-solid">
                  <RiQuestionLine size={21} color={'#A3ABB5'}/>
                </a>
              </li>
            </ul>
        </div>
        
      </aside>
    </div>
  );
}
