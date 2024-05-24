import React, { createContext, useEffect, useState } from 'react';
import { IQuestion, IQuiz } from '../types/question';
import { v4 as uuidv4 } from 'uuid';

export interface IQuizContext {
    quizes: IQuiz[];
    setQuizes: React.Dispatch<React.SetStateAction<IQuiz[]>>;
    addNewQuiz: (name: string, questions: IQuestion[]) => void;
}

export const QuizContext = createContext<IQuizContext | null>(null);

const QuizContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [quizes, setQuizes] = useState<IQuiz[]>([]);

    const addNewQuiz = (name: string, questions: IQuestion[]) => {
        setQuizes((quizes) => [...quizes, { id: uuidv4(), name, questions }]);
    };

    useEffect(() => {}, []);

    return (
        <QuizContext.Provider value={{ quizes, setQuizes, addNewQuiz }}>
            {children}
        </QuizContext.Provider>
    );
};

export default QuizContextProvider;
