import React from "react";
import Modal from "./Modal";
import { ReactComponent as Star } from "../halfStar.svg";
import LineChart from "./LineChart";
import { ReactComponent as Corn } from "../corn2.svg";

const Feedback = ({ index }) => {
  return (
    <div className="mt-3 pb-3 border-b-[1px]">
      {index === 0 && <h1>Отзывы</h1>}
      <div className="wrapper flex justify-between">
        <div className="text flex flex-col">
          <div className="author ">Лучший дядя арменин</div>
          <div className="feedback text-sm text-[#748AA1] my-1">
            Спасибо, самый свежий....
          </div>
          <div className="date text-xs text-[#748AA1] ">20.05.2022</div>
        </div>
        <div className="rating flex items-center mr-3 text-3xl text-[#F3DB00]">
          <Star />
          <div className="points">3.4</div>
        </div>
      </div>
    </div>
  );
};
const Product = ({ index }) => {
  return (
    <div>
      {index === 0 && <h1 className="mt-5">Товары</h1>}
      <div className="wrapper flex items-center justify-between mt-5 pb-3 border-b-[1px]">
        <div className="item flex items-center">
          <img src={require("../pita.png")} alt="" />
          <div className="name ml-3">Сочная шаурма</div>
        </div>
        <div className="cost flex items-center h-6 text-3xl mr-3">
          1<Corn height="25px" fill="#F3DB00" />
        </div>
      </div>
    </div>
  );
};
const PersonCard = () => {
  return (
    <div className="w-[40vw]">
      <div className="header flex   justify-between items-center">
        <div className="wrapper flex">
          <img src={require("../Avatar.png")} width="75px" alt="" />
          <div className="text ml-4">
            <div className="name">Руслан Русланович</div>
            <div className="phone text-[#748AA1] text-sm">8 800 555 3535</div>
            <div className="role text-[#748AA1] text-sm">Поставщик</div>
          </div>
        </div>
        <button className="h-10 text-white w-[170px] rounded-md  bg-gradient-to-r from-cyan-500 to-blue-500">
          Написать
        </button>
      </div>
    </div>
  );
};

const Person = ({ color, setIsOpen }) => {
  return (
    <div
      onClick={() => {
        setIsOpen(true);
      }}
      className="flex flex-col w-[40vw] pb-4 border-b-[1px] hover:bg-[#f7f7f8] hover:cursor-pointer"
    >
      <div className="flex mt-5 ">
        <div className="flex  w-full justify-between">
          <div className="wrapper flex  ">
            <img src={require("../Avatar.png")} width="50px" alt="" />
            <div className="textContainer ml-5 flex flex-col">
              <div className="name">Руслан</div>
              <div className="desc text-[#748AA1] text-sm">Поставщик</div>
            </div>
          </div>
          <div className="rating flex items-center mr-3 text-3xl text-[#F3DB00]">
            <Star />
            <div className="points">3.4</div>
          </div>
        </div>
        <div className="status float-right"></div>
      </div>
    </div>
  );
};

const TopContragent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDopOpen, setIsDopOpen] = React.useState(false);

  return (
    <>
      <div className="textContainer flex items-center justify-between w-full mb-5">
        <h1 className="text-xs">Топ контрагентов</h1>
        <div
          onClick={() => setIsOpen(true)}
          className="allContra text-[10px] underline hover:cursor-pointer"
        >
          Все контрагенты
        </div>
      </div>
      <Modal
        onClose={() => {
          setIsOpen(false);
        }}
        open={isOpen}
      >
        <div className="content flex flex-col wrapper5  h-[50vh] overflow-y-scroll">
          <h1 className="mb-3">Контрагенты</h1>
          {Array(7)
            .fill("")
            .map((el) => (
              <Person setIsOpen={setIsDopOpen}></Person>
            ))}
        </div>
        <button
          onClick={() => {
            setIsOpen(false);
          }}
          className="bg-[#F5F6FA] w-full rounded-md mt-5 h-10"
        >
          Закрыть
        </button>
      </Modal>
      <Modal
        onClose={() => {
          setIsDopOpen(false);
        }}
        open={isDopOpen}
      >
        <div className="content flex flex-col wrapper5  h-[50vh] overflow-y-scroll">
          <PersonCard></PersonCard>
          <LineChart />
          {Array(3)
            .fill("")
            .map((el, index) => (
              <Product index={index}></Product>
            ))}
          {Array(3)
            .fill("")
            .map((el, index) => (
              <Feedback index={index}></Feedback>
            ))}
        </div>

        <button
          onClick={() => {
            setIsDopOpen(false);
          }}
          className="bg-[#F5F6FA] w-full rounded-md mt-5 h-10"
        >
          Закрыть
        </button>
      </Modal>
    </>
  );
};

export default TopContragent;
