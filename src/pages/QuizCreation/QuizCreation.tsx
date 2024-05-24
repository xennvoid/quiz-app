import { ChangeEvent, FC, useState, MouseEvent } from 'react';
import Button from '../../components/Button';
import QuestionCreateForm from './components/QuestionCreateForm';
import { IQuestion } from '../../types/question';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../../store/hooks';
import { addQuiz } from '../../store/slices/quizesSlice';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';

interface QuizCreationProps {}

const QuizCreation: FC<QuizCreationProps> = ({}) => {
    const [infoMessage, setInfoMessage] = useState<string>('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [quizName, setQuizName] = useState<string>('');
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

    const createQuiz = () => {
        if (quizName.length <= 0 || questions.length <= 0) {
            setInfoMessage('You must add quiz name and add at least 1 question');
            return;
        }
        dispatch(addQuiz({ name: quizName, questions }));
        setInfoMessage('');
        setTimeout(() => navigate('/'), 1000);
    };

    return (
        <div className="container mx-auto flex flex-col gap-5">
            <Input
                value={quizName}
                onChange={(e) => setQuizName(e.target.value)}
                placeholder="Your Quiz Name Here..."
            />
            {questions.map((question, i) => (
                <QuestionCreateForm
                    key={i}
                    questionNumber={i + 1}
                    question={question}
                    changeQuestionName={changeQuestionName}
                    addNewAnswer={addNewAnswer}
                    setQuestions={setQuestions}
                    deleteQuestion={deleteQuestion}
                />
            ))}
            <Button onClick={addNewQuestion}>Add new question</Button>
            {infoMessage && (
                <p className="text-red-500 font-bold border-2 border-solid">{infoMessage}</p>
            )}
            <Button onClick={createQuiz}>Create Quiz</Button>
        </div>
    );
};

export default QuizCreation;
