import { questions } from "../constants/questions";
import { createContext, useState } from "react";

export const MainContext = createContext(null);

const MainContextProvider = ({children}) => {
    const [selectedQuestions, setSelectedQuestions] = useState(null)
    const [question, setquestion] = useState(questions)

    const handleQuestionSelection = (question) => {
        // console.log(question)
        setSelectedQuestions(question)
    }

    return (
        <MainContext.Provider value={{question,handleQuestionSelection,selectedQuestions}}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContextProvider