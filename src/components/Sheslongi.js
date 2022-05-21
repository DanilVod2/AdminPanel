import React from "react";
import cn from "classnames";
import ReactTooltip from "react-tooltip";
const Box = ({ isFree, index }) => {
  return (
    <>
      <div
        className={cn(
          {
            ["w-9 h-[35px] flex justify-center items-center  m-1 rounded-md  bg-[#29CB97] text-white font-bold"]:
              !isFree,
          },
          {
            ["w-9  h-[35px] flex justify-center items-center  m-1 rounded-md  bg-[#E5E9F2] text-[#748AA1]"]:
              isFree,
          }
        )}
      >
        {index}
      </div>
    </>
  );
};
const Sheslongi = () => {
  return (
    <div>
      <h1 className="mb-5">Шезлонги</h1>
      <div className="flex flex-wrap">
        {Array(30)
          .fill("")
          .map((el, index) => (
            <>
              <Box isFree={index % 10} index={index + 1}></Box>
            </>
          ))}
      </div>
    </div>
  );
};

export default Sheslongi;
