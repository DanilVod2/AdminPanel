import React from "react";

const Status = ({ color }) => {
  if (color === "red")
    return (
      <div className="text-xs text-[#B52A52] text-center bg-[#FE9F99] p-2 rounded-3xl min-w-[70px] ">
        Отклонено
      </div>
    );

  return (
    <div className="text-xs text-[#49901A] text-center bg-[#C3EE83] p-2 rounded-3xl min-w-[70px] ">
      Выполнено
    </div>
  );
};

export default Status;
