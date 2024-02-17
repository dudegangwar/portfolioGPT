import React, { useContext } from "react";
import { MainContext } from "../../context/context";

const Options = ({ heading,handleClose }) => {
  const ctx = useContext(MainContext);
  // console.log(ctx)

  return (
    <div className={`option-container ${heading ? "mt-10" : ""}`}>
      {heading && <p className="option-text-title text-sm">Yesterday</p>}
      <div className="option-wrapper text-white">
        {ctx.question.map((item, index) => {
          return (
            <div
              className="py-1 hover:bg-gray-700 cursor-pointer rounded"
              key={index}
              onClick={() => {
                ctx.handleQuestionSelection(item)
                handleClose && handleClose()
            }}
            >
              <p className="text-sm font-light ">{item.question}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
