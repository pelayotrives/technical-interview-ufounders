import React, { useEffect, useState } from "react";
import { HiTicket } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import uuid from "react-uuid";

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

export default function Main() {
  const [ticket, setTicket] = useState<ITicket[]>([]);
  const [modalTicketID, setModalTicketID] = useState<string>("");

  const obtainData = async () => {
    try {
      const endpoint: string =
        "https://6f7smj4fdc.execute-api.us-east-1.amazonaws.com/default/techJobMission";
      const response = await axios.get<ITicket[]>(endpoint);
      setTicket(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Something happened:  ", error);
    }
  };

  const toggleModal = (userId: string) => {
    console.log("Modifying Modal...");
    console.log(`Modal ID: ${userId}`);
    setModalTicketID(userId);
  };

  const showTicket = (element:ITicket) => {
    return (
      <div className="container flex flex-col" key={element._id}>
        <div className="all-card-components flex flex-row">
          <div className="icon-ticket flex flex-col justify-center justify-between-center items-center content-center self-center">
            {element.present !== false ? (
              <HiTicket className="rotate-90" size={55} color={"#5DB855"} />
            ) : (
              <HiTicket className="rotate-90" size={55} color={"#E93256"} />
            )}
          </div>
          <div className="first-third p-4 w-2/12">
            <p className="text-black font-bold font-ufo2" key={uuid()}>
              {element.firstName} {element.lastName}
            </p>
            {element.present !== false ? (
              <p
                className="text-[#858B94] font-regular font-ufo2 mt-2"
                key={uuid()}
              >
                Ha entrado
              </p>
            ) : (
              <p
                className="text-[#858B94] font-regular font-ufo2 mt-2"
                key={uuid()}
              >
                No Ha Entrado
              </p>
            )}
          </div>
          <div className="second-third p-4 w-3/12">
            <p className="text-black font-regular font-ufo2">ID</p>
            <p
              className="text-[#858B94] font-regular mt-2 font-ufo2"
              key={uuid()}
            >
              {element._id}
            </p>
          </div>
          <div className="third-third p-4 w-7/12">
            <p className="text-black font-regular font-ufo2">Nº de ticket</p>
            <p
              className="text-[#858B94] font-regular font-ufo2 mt-2"
              key={uuid()}
            >
              {element.ticket}
            </p>
          </div>
          <div className="four-third flex flex-col justify-center justify-between-center items-center content-center self-center w-1/12">
            <button
              className="transition-all"
              onClick={() => {
                toggleModal(element._id);
              }}
            >
              <FiMoreHorizontal size={25} />
            </button>
          </div>
        </div>
        <hr className="my-4 h-px bg-gray-400 border-1" />

        {modalTicketID === element._id && (
          <div
            style={{ backgroundColor: "rgba(125,125,125,0.4)" }}
            className="modal flex items-center justify-center fixed left-0 top-0 right-0 bottom-0"
          >
            <div className="modal-body w-1/3 bg-white p-10">
              <div className="modal-one-third text-black">
                {element.present !== false ? (
                  <HiTicket className="rotate-90" size={55} color={"#5DB855"} />
                ) : (
                  <HiTicket className="rotate-90" size={55} color={"#E93256"} />
                )}
                <p>
                  {element.firstName} {element.lastName}
                </p>
              </div>
              <div className="modal-two-third text-black">
                <p>Content</p>
              </div>
              <div className="modal-three-third text-black">
                <button
                  className="transition-all"
                  onClick={() => toggleModal("")}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    obtainData();
  }, []);

  return (
    <div className="w-full">
      <div className="p-16 flex flex-col justify-center justify-items-center items-start content-center self-start">
        <h1 className="text-2xl font-ufo1 font-semibold text-black mb-2">
          ¡Bienvenido de nuevo, Rodrigo! &#x1F44B;
        </h1>
        <h5 className="text-sm font-ufo1 font-medium text-[#858B94]">
          Estas son las personas que han comprado la entrada
        </h5>
      </div>

      <div className="pl-16">
        {ticket.length !== 0 ? (
          ticket.map((element: ITicket) => {
            return showTicket(element);
          })
        ) : (
          <div className="flex flex-col justify-center justify-between-center items-center content-center self-center">
            <ClipLoader color={"#858B94"} size={30} />
            <p className="text-xl text-center font-regular font-ufo1 mt-4">
              Loading ticket...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
