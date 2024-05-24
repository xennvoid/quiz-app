import { ChangeEvent, FC, useState, MouseEvent } from 'react';
import Button from '../../components/Button';
import QuestionCreateForm from './components/QuestionCreateForm';
import { IQuestion } from '../../types/question';
import { v4 as uuidv4 } from 'uuid';

interface QuizCreationProps {}

const QuizCreation: FC<QuizCreationProps> = ({}) => {
    const [questions, setQuestions] = useState<IQuestion[]>([
        {
            id: '1',
            name: 'What is React?',
            answers: [
                { id: uuidv4(), text: 'Library', isTrue: true },
                { id: uuidv4(), text: 'Programming Language', isTrue: false },
                { id: uuidv4(), text: `I don't know`, isTrue: false },
            ],
        },
        {
            id: '2',
            name: 'What is JS?',
            answers: [
                { id: uuidv4(), text: 'Library', isTrue: false },
                { id: uuidv4(), text: 'Programming Language', isTrue: true },
                { id: uuidv4(), text: `I don't know`, isTrue: false },
                { id: uuidv4(), text: `...`, isTrue: false },
            ],
        },
    ]);

    const addNewQuestion = () => {
        setQuestions([...questions, { id: uuidv4(), name: '', answers: [] }]);
    };

    const changeQuestionName = (e: ChangeEvent<HTMLInputElement>) => {
        setQuestions((questions) =>
            questions.map((question) => {
                if (e.target.id === question.id) {
                    return {
                        ...question,
                        name: e.target.value,
                    };
                }
                return question;
            }),
        );
    };

    const deleteQuestion = (id: string) => {
        setQuestions((questions) => questions.filter((question) => question.id !== id));
    };

    const addNewAnswer = (e: MouseEvent<HTMLButtonElement>, id: string) => {
        e.preventDefault();
        setQuestions((questions) =>
            questions.map((question) => {
                if (question.id === id) {
                    return {
                        ...question,
                        answers: [...question.answers, { id: uuidv4(), text: '', isTrue: false }],
                    };
                }
                return question;
            }),
        );
    };

    return (
        <div className="container mx-auto flex flex-col gap-5">
            <Button onClick={addNewQuestion}>Add new question</Button>
        </div>
    );
};

export default QuizCreation;
