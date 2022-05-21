import React from "react";
import ModuleWrapper from "./components/ModuleWrapper";
import LineChart from "./components/LineChart";
import ChsTickets from "./components/ChsTickets";
import TopContragent from "./components/TopContragent";
import { BarChart } from "./components/BarChart";
import Sheslongi from "./components/Sheslongi";
import Personals from "./components/Personals";
function App() {
  return (
    <div className="App  h-screen" style={{ backgroundColor: "#F5F6FA" }}>
      <div className="wrapper5 mx-20 flex justify-start overflow-y-scroll h-screen">
        <div className="contentWrapper flex w-full">
          <div className="centerContent w-[70%]">
            <h1 className="text-1xl mt-4 w-full">Административная панель</h1>
            <div className="wrapper mt-10">
              <ModuleWrapper>
                <LineChart></LineChart>
              </ModuleWrapper>
            </div>
            <div className="wrapper1 flex justify-between mt-10">
              <div className="wrapper2 w-[45%]">
                <ModuleWrapper myClass={"wrapper5 overflow-y-scroll"}>
                  <ChsTickets></ChsTickets>
                </ModuleWrapper>
              </div>
              <div className="wrapper2  w-[45%]">
                <ModuleWrapper myClass="flex flex-col">
                  <TopContragent></TopContragent>
                  <BarChart></BarChart>
                </ModuleWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightContent w-[25%] right-0 top-0 h-screen absolute ">
        <ModuleWrapper
          myClass={"h-screen wrapper5 flex flex-col overflow-y-scroll"}
        >
          <Sheslongi></Sheslongi>
          <Personals></Personals>
        </ModuleWrapper>
      </div>
    </div>
  );
}

export default App;
