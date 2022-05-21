import React from "react";
import Status from "./Status";
export const Ticket = ({ color }) => {
  return (
    <div className="flex flex-col  border-b-[1px] pb-5 ">
      <div className="flex mt-5 justify-between">
        <div className="flex">
          <img src={require("../Avatar.png")} width="50px" alt="" />
          <div className="textContainer ml-5 flex flex-col">
            <div className="name">Eliot</div>
            <div className="desc">Пользователь</div>
          </div>
        </div>
        <div className="status float-right">
          <Status color={color}></Status>
        </div>
      </div>
      <div className="description mt-3">Описаие</div>
    </div>
  );
};
const ChsTickets = () => {
  return (
    <div className="w-full ">
      <h1>ЧС тикеты</h1>
      <div className="wrapper5 h-[100px] ">
        {Array(5)
          .fill("")
          .map((el) => (
            <Ticket color="red" />
          ))}
      </div>
    </div>
  );
};

export default ChsTickets;
