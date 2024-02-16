import React, { useContext } from "react";
import Chat from "./chat/chat";
import { MainContext } from "../../context/context";

const Chats = () => {
  const ctx = useContext(MainContext);
  console.log(ctx.selectedQuestions);
  return (
    <div className="flex justify-center mt-20">
      <div className="w-[746px]">
        {ctx.selectedQuestions &&
        Object.keys(ctx.selectedQuestions).length > 0 ? (
          <>
            <Chat question text={ctx.selectedQuestions.question} />
            <Chat text={ctx.selectedQuestions.answer} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Chats;
