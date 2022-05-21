import React from "react";
import { Ticket } from "./ChsTickets";
import Modal from "./Modal";

const PersonCard = () => {
  return (
    <div className="w-[40vw]">
      <div className="header flex   justify-between items-center">
        <div className="wrapper flex">
          <img src={require("../Avatar.png")} width="75px" alt="" />
          <div className="text ml-4">
            <div className="name">Elliot Møller</div>
            <div className="phone text-[#748AA1] text-sm">8 800 555 3535</div>
            <div className="role text-[#748AA1] text-sm">
              Администратор пляжа
            </div>
          </div>
        </div>
        <button className="h-10 text-white w-[170px] rounded-md  bg-gradient-to-r from-cyan-500 to-blue-500">
          Написать
        </button>
      </div>
      <div className="wrapper flex relative w-full mt-10">
        <div class="progress-bar">
          <span class="bar">
            <span class="progress"></span>
          </span>
        </div>
      </div>
      <div className="text flex mt-3 justify-between">
        <div className="level">Профессиональный уровень 10</div>
        {/* <div className="points font-bold">2000 баллов</div> */}
      </div>
      <h1 className="mt-3">Тикеты</h1>
      <div className=" wrapper5 tickets mt-3 overflow-y-scroll h-[200px]">
        {Array(5)
          .fill("")
          .map((el) => (
            <Ticket></Ticket>
          ))}
      </div>
    </div>
  );
};
const Person = ({ color, setIsOpen }) => {
  return (
    <div
      onClick={() => setIsOpen(true)}
      className="flex flex-col  border-b-[1px] pb-5 hover:bg-[#f7f7f8] hover:cursor-pointer"
    >
      <div className="flex mt-5 justify-between">
        <div className="flex">
          <img src={require("../Avatar.png")} width="50px" alt="" />
          <div className="textContainer ml-5 flex flex-col">
            <div className="name">Eliot</div>
            <div className="desc text-[#748AA1] text-sm">Администратор </div>
          </div>
        </div>
        <div className="status float-right"></div>
      </div>
    </div>
  );
};

const Personals = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className=" overflow-y-scroll wrapper5">
      <div className=" textContainer mt-5 flex items-center justify-between w-full flex-col">
        <div className="flex items-center mb-5 justify-between w-full">
          <h1 className="text-xs">Персонал</h1>
        </div>
        <div className="persons w-full">
          {Array(5)
            .fill("")
            .map((el) => (
              <Person setIsOpen={setIsOpen}></Person>
            ))}
        </div>
      </div>
      <Modal
        onClose={() => {
          setIsOpen(false);
        }}
        open={isOpen}
      >
        <div className="content flex flex-col">
          <PersonCard></PersonCard>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="bg-[#F5F6FA] rounded-md mt-5 h-10"
          >
            Закрыть
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Personals;
