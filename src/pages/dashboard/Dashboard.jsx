import React, { useContext } from "react";
import Search from "../../components/Search/Search";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import logo from "../../assets/chatgpt.svg";
import Chats from "../../components/Chats/Chats";
import { MainContext } from "../../context/context";

const Dashboard = () => {
  const ctx = useContext(MainContext);

  return (
    <div className="bg-[#212121] w-full relative">
      {ctx?.selectedQuestions ? (
        <Chats />
      ) : (
        <div className="flex flex-col text-white items-center mt-56">
          <div className="p-2 bg-white rounded-full mb-2">
            <img src={logo} alt="logo" />
          </div>

          <p className="text-2xl">How can I help you today?</p>
        </div>
      )}

      <Search />
    </div>
  );
};

export default Dashboard;
