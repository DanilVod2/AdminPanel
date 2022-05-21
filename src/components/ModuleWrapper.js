import React from "react";
import cn from "classnames";
const ModuleWrapper = ({ myClass, children }) => {
  return (
    <div
      className={cn(`flex drop-shadow-sm p-5  bg-white rounded-md ${myClass}`)}
    >
      {children}
    </div>
  );
};

export default ModuleWrapper;
