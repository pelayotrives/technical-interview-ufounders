// We import native utilities from react, icons from react-icons, axios to fetch data and uuid to have individual keys for each element of the .map.
import React, { useEffect, useState } from "react";
import { HiTicket } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import uuid from "react-uuid";

// We create an interface to be able to get control over the types in the .map.
interface ITicket {
  address: string;
  birthdate: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  present: boolean;
  ticket: number;
  _id: string;
}

// Main function.
export default function Main() {

  // State 1: This will show us every "user/ticket card"
  const [ticket, setTicket] = useState<ITicket[]>([]);
  // State 2: Controls the modal when user clicks on the options icons.
  const [modalTicketID, setModalTicketID] = useState<string>("");

  // We obtain the data asynchronously and specify what kind of data is.
  const obtainData = async () => {
    try {
      const endpoint:string = "https://6f7smj4fdc.execute-api.us-east-1.amazonaws.com/default/techJobMission";
      const response = await axios.get<ITicket[]>(endpoint);
      setTicket(response.data);
      //* console.log(response.data);
    } catch (error) {
      console.log("Something happened:  ", error);
    }
  };

  // This will let us toggle the modal and test it with the logs.
  const toggleModal = (userId: string) => {
    //* console.log("Modifying Modal...");
    //* console.log(`Modal ID: ${userId}`);
    setModalTicketID(userId);
  };

  // Instead of a massive rendering of elements if we had this in the function's body, we assign the HTML to a function so each card will be invoked once.
  const showTicket = (element: ITicket) => {
    return (
      <div className="container flex flex-col text-sm" key={element._id}>
        <div className="all-card-components flex flex-row">
          <div className="icon-ticket flex flex-col justify-center justify-between-center items-center content-center self-center">
            {
              element.present === true ?
              <HiTicket className="rotate-90" size={48} color={"#5DB855"} />
              :
              <HiTicket className="rotate-90" size={48} color={"#E93256"} />  
            }

          </div>
          <div className="first-third p-4 w-2/12 text-sm">
            <p className="text-black font-bold font-ufo2" key={uuid()}>{element.firstName} {element.lastName}</p>
            {
              element.present !== false ?
              <p className="text-[#858B94] font-regular font-ufo2 mt-2" key={uuid()}>Ha entrado</p>
              :
              <p className="text-[#858B94] font-regular font-ufo2 mt-2" key={uuid()}>No Ha Entrado</p>
            }
          </div>
          <div className="second-third p-4 w-3/12 text-sm">
            <p className="text-black font-regular font-ufo2">ID</p>
            <p className="text-[#858B94] font-regular mt-2 font-ufo2" key={uuid()}>{element._id}</p>
          </div>
          <div className="third-third p-4 w-7/12 text-sm">
            <p className="text-black font-regular font-ufo2">Nº de ticket</p>
            <p className="text-[#858B94] font-regular font-ufo2 mt-2" key={uuid()}>{element.ticket}</p>
          </div>
          <div className="four-third flex flex-col justify-center justify-between-center items-center content-center self-center w-1/12">
            <button className="transition-all hover:scale-110" onClick={() => { toggleModal(element._id);}}><FiMoreHorizontal size={25} /></button>
          </div>
        </div>
        <hr className="my-4 h-2 border-gray-400 border-1" />   

        {/* -------------------------------------------------------- Modal --------------------------------------------------------- */}

        {
          modalTicketID === element._id &&
            <div className="modal flex items-center justify-center fixed left-0 top-0 right-0 bottom-0 bg-black/50 z-50">
              <div className="modal-body w-1/2 h-1/2 flex flex-col justify-between justify-items-center items-center content-center bg-white rounded-2xl p-12">
                
                <div className="modal-one text-black flex flex-row w-full ml-[-17px]">
                  <div className="flex flex-col w-1/12">
                    {
                      element.present !== false ?
                      <HiTicket className="rotate-90" size={48} color={"#5DB855"} />
                      :
                      <HiTicket className="rotate-90" size={48} color={"#E93256"} />
                    }
                  </div>
                  <div className="flex flex-col w-5/12">
                    <p className="text-black font-bold font-ufo2" key={uuid()}>{element.firstName} {element.lastName}</p>
                    {
                      element.present !== false ? (
                        <p className="text-[#858B94] font-regular font-ufo2 mt-1" key={uuid()}>Ha entrado</p>
                        ) : (
                        <p className="text-[#858B94] font-regular font-ufo2 mt-1" key={uuid()}>No Ha Entrado</p>
                      )
                    }
                  </div>
                  <div className="flex flex-col justify-center justify-items-start items-end content-start self-start w-6/12">
                    <button className="transition-all cursor-pointer hover:scale-125" onClick={() => toggleModal("")}><AiOutlineCloseCircle className="" size={25} color={"#101B29"} /></button>
                  </div>
                </div>

                <div className="modal-two text-black flex flex-row w-full">
                  <div className="flex flex-col w-4/12 text-sm">
                    <p className="text-black font-regular font-ufo2">ID</p>
                    <p className="text-[#858B94] font-regular mt-2 font-ufo2" key={uuid()}>{element._id}</p>
                  </div>
                  <div className="flex flex-col w-4/12 text-sm">
                    <p className="text-black font-regular font-ufo2">Nº de ticket</p>
                    <p className="text-[#858B94] font-regular font-ufo2 mt-2" key={uuid()}>{element.ticket}</p>
                  </div>
                </div>

                <div className="modal-three flex flex-row w-full">
                  <div className="flex flex-col w-4/12 text-sm">
                    <p className="text-black font-regular font-ufo2">Fecha de nacimiento</p>
                    <p className="text-[#858B94] font-regular font-ufo2 mt-2" key={uuid()}>{element.birthdate}</p>
                  </div>
                  <div className="flex flex-col w-4/12 text-sm">
                    <p className="text-black font-regular font-ufo2">Email</p>
                    <p className="text-[#858B94] font-regular font-ufo2 mt-2" key={uuid()}>{element.email}</p>  
                  </div>
                  <div className="flex flex-col w-4/12 text-sm pl-16">
                    <p className="text-black font-regular font-ufo2">Teléfono</p>
                    <p className="text-[#858B94] font-regular font-ufo2 mt-2" key={uuid()}>{element.phone}</p>
                  </div>
                </div>

                <div className="modal-four text-black w-full">
                    <div className="flex flex-col w-12/12 text-sm">
                      <p className="text-black font-regular font-ufo2">Dirección</p>
                      <p className="text-[#858B94] font-regular font-ufo2 mt-2" key={uuid()}>{element.address}</p>
                    </div>
                </div>

              </div>
            </div>
        }
      </div>
    );
  };

  // obtainData will be invoked once in the render.
  useEffect(() => {
    obtainData();
  }, []);

  // We return the rest of the elements.
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center justify-items-center items-start content-center self-start mt-16">
        <h1 className="text-2xl font-ufo1 font-semibold text-black mb-2">Bienvenido de nuevo, Rodrigo. &#x1F44B;</h1>
        <h5 className="text-[1em] font-ufo1 font-medium text-[#858B94]">Estas son las personas que han comprado entrada</h5>
      </div>

      <div className="mt-16 px-8">
        {
          ticket.length !== 0 ? 
          ticket.map((element: ITicket) => {
            return ( 
              showTicket(element)
            );
          })
          :
          <div className="flex flex-col justify-center justify-between-center items-center content-center self-center">
            <ClipLoader color={"#858B94"} size={20} />
            <p className="text-md text-center font-medium font-ufo1 mt-4">Loading users and tickets...</p>
          </div>
        }
      </div>
    </div>
  );
}
