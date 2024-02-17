import React, { useContext } from "react";
import Chat from "./chat/chat";
import { MainContext } from "../../context/context";

const Chats = () => {
  const {selectedQuestions} = useContext(MainContext);
  return (
    <div className="flex justify-center mt-20 h-[70vh] overflow-scroll">
      <div className="w-[746px]">
        {selectedQuestions &&
        Object.keys(selectedQuestions).length > 0 ? (
          <>
            <Chat question text={selectedQuestions.question} />
            <Chat text={selectedQuestions.answer} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Chats;
