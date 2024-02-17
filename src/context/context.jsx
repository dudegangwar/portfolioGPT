import Aboutme from "../components/Aboutme/Aboutme";
import Edustats from "../components/Aboutme/Edustats";
import Projects from "../components/Aboutme/Projects";
import { questions } from "../constants/questions";
import { createContext, useState } from "react";

export const MainContext = createContext(null);

const MainContextProvider = ({ children }) => {
  const [selectedQuestions, setSelectedQuestions] = useState(null);
  const [question, setquestion] = useState([
    {
      question: "Who is Anuj Kumar?",
      answer:<Aboutme/>,
    },
    {
      question: "What Are Anuj's Educational Stats?",
      answer:<Edustats/>,
    },
    {
      question: "What all projects Anuj have completed?",
      answer:<Projects/>,
    }
  ]);
  const [value, setValue] = useState("");

  const handleQuestionSelection = (question) => {
    // console.log(question)
    setSelectedQuestions(question);
    setValue(question.question);
  };

  return (
    <MainContext.Provider
      value={{
        question,
        handleQuestionSelection,
        selectedQuestions,
        search:value,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
