import React, { useEffect, useState } from 'react'
import { HiTicket } from 'react-icons/hi';
import axios from 'axios'
import uuid from 'react-uuid';

export default function Main() {

  interface User {
    address: string,
    birthdate: string,
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    present: boolean,
    ticket: number,
    _id: string
  }

  const [userData, setUserData] = useState<string | null>(null)

  const obtainData = async () => {
    try {
      const endpoint : string = "https://6f7smj4fdc.execute-api.us-east-1.amazonaws.com/default/techJobMission";
      const response = await axios.get(endpoint)
      setUserData(response.data);
      console.log(response.data[0])
      console.log(response.data)
    }
    catch (error) {
      console.log("Something happened:  ", error);
    }
  }

  useEffect(() => {
    obtainData();
  }, [])
  

  return (
    <div className='w-full'>
      <div className='bg-purple-200 p-16 flex flex-col justify-center justify-items-center items-start content-center self-start'>
        <h1 className='text-2xl font-ufo1 font-semibold text-black mb-2'>Bienvenido de nuevo, Rodrigo &#x1F44B;</h1>
        <h5 className='text-sm font-ufo1 font-medium text-[#858B94]'>Estas son las personas que han comprado la entrada</h5>
      </div>

      <div className=' bg-red-200 pl-16'>
        { userData !== null &&
          userData.map((element:{address: string, birthdate: string, email: string, firstName: string, lastName: string, phone: string, present: boolean, ticket: number, _id: string}) => {
            return (
              <div className='container flex flex-col'>
                <div className='all-thirds flex flex-row'>
                  <div>
                    <HiTicket className='rotate-90' size={55} color={'#A3ABB5'}/>
                  </div>
                  <div className='first-third p-4 b-yellow-400 w-2/12'>
                    <p className='text-black font-bold' key={uuid()}>{element.firstName}{" "}{element.lastName}</p>
                      {element.present !== false ?
                        <p className='text-[#858B94] font-regular mt-2' key={uuid()}>Ha entrado</p>
                      :
                        <p className='text-[#858B94] font-regular mt-2' key={uuid()}>No Ha Entrado</p>}
                  </div>
                  <div className='second-third p-4 b-purple-400 w-3/12'>
                    <p className='text-black font-regular'>ID</p>
                    <p className='text-[#858B94] font-regular mt-2' key={uuid()}>{element._id}</p>
                  </div>
                  <div className='third-third p-4 b-orange-400 w-7/12'>
                    <p className='text-black font-regular'>N<sup>o</sup> de ticket</p>
                    <p className='text-[#858B94] font-regular mt-2' key={uuid()}>{element.ticket}</p>
                  </div>
                </div>
                <hr className="my-4 h-px bg-gray-400 border-1" />
              </div>
            )
          })     
        }
        
      </div>

    </div>
  )
}
