import React, { useContext } from "react";
import Input from "../ui/Input/Input";
import Blocks from "../Blocks/Blocks";
import { MainContext } from "../../context/context";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Options from "../sidebar/Options";

const Search = () => {
  const {search,selectedQuestions} = useContext(MainContext);
  const [blocks, setBlocks] = React.useState([
    {
      title: "Chatbot to give answers from PDFs",
      description:
        "Created a chatbot that allows you to upload your pdf file and it will give you answers based on your questions.",
      link: "https://github.com/dudegangwar/ChatWithPDF",
    },
    {
      title: "Tasker App",
      description: "Tasker is a task management app to help you stay organised and manage your day-to-day tasks.",
      link: "https://github.com/dudegangwar/tasker"
    },
    {
      title: "E-commerce Shopper’s Behaviour Understanding",
      description: "Developed a predictive model to determine whether a user would make a purchase within the year or not.",
      link: "https://www.kaggle.com/competitions/e-commerce-shoppers-behaviour-understanding/overview"
    },
    {
      title: "Other Projects",
      description: "Checkout my other projects on GitHub.",
      link: "https://github.com/dudegangwar?tab=repositories"
    },
  ]);
  
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="bottom-0 w-full px-8 pb-7 absolute left-0 right-0 flex flex-col items-center text-white">
      {!selectedQuestions ? (
        <div className="grid grid-rows-2 grid-flow-col gap-4 grid-cols-2 w-[746px] mb-4">
          {blocks.map((block) => {
            return (
              <Blocks
                title={block.title}
                description={block.description}
                link={block.link}
              />
            );
          })}
        </div>
      ) : null}
      <div className="flex justify-center" onClick={handleClick}>
        <Input value={search} onChange={onChange} />
       
      </div>
      <p className="text-center text-white text-xs text-gray-400 mt-2">
        ChatGPT can make mistakes. Consider checking important information.
      </p>
      <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        
        >
          <div className="w-[746px] bg-[#171717] px-5 py-3">
            <Options handleClose={handleClose} />
          </div>
        </Popover>
    </div>
  );
};

export default Search;
