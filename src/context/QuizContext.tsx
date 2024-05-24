import React, { createContext, useEffect, useState } from 'react';
import { IQuestion, IQuiz } from '../types/question';
import { v4 as uuidv4 } from 'uuid';

export interface IQuizContext {
    quizes: IQuiz[];
    setQuizes: React.Dispatch<React.SetStateAction<IQuiz[]>>;
    addNewQuiz: (name: string, questions: IQuestion[]) => void;
    removeQuiz: (id: string) => void;
}

export const QuizContext = createContext<IQuizContext | null>(null);

const QuizContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [quizes, setQuizes] = useState<IQuiz[]>(() => {
        const value = localStorage.getItem('quizes');
        if (typeof value === 'string') {
            return JSON.parse(value);
        }
        return [];
    });

    const addNewQuiz = (name: string, questions: IQuestion[]) => {
        setQuizes((quizes) => [...quizes, { id: uuidv4(), name, questions }]);
    };

    const removeQuiz = (id: string) => {
        setQuizes((quizes) => quizes.filter((quiz) => quiz.id !== id));
    };

    useEffect(() => {
        localStorage.setItem('quizes', JSON.stringify(quizes));
    }, [quizes]);

    return (
        <QuizContext.Provider value={{ quizes, setQuizes, addNewQuiz, removeQuiz }}>
            {children}
        </QuizContext.Provider>
    );
};

export default QuizContextProvider;
