import { ChangeEvent, FC, useState, MouseEvent, useContext, useEffect } from 'react';
import Button from '../../components/Button';
import QuestionCreateForm from './components/QuestionCreateForm';
import { IQuestion } from '../../types/question';
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import { QuizContext, IQuizContext } from '../../context/QuizContext';
import LinkButton from '../../components/LinkButton';
import ROUTES from '../../routes';

interface QuizCreationProps {}

const QuizCreation: FC<QuizCreationProps> = ({}) => {
    const { pathname } = useLocation();
    const isEditMode = pathname.includes('edit');
    const quizId = pathname.split('/')[3];

    const { addNewQuiz, getQuizById, replaceQuiz } = useContext(QuizContext) as IQuizContext;
    const [infoMessage, setInfoMessage] = useState<string>('');
    const navigate = useNavigate();
    const [quizName, setQuizName] = useState<string>('');
    const [questions, setQuestions] = useState<IQuestion[]>([]);

    useEffect(() => {
        if (isEditMode && quizId) {
            const quiz = getQuizById(quizId);
            if (quiz) {
                setQuizName(quiz.name);
                setQuestions(quiz.questions);
            }
        }
    }, [quizId]);

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

        if (
            questions.some((q) => q.name === '') ||
            questions.some((question) => question.answers.some((answer) => answer.text === ''))
        ) {
            setInfoMessage('Fill in all fields or delete unnecessary ones');
            return;
        }

        if (isEditMode) replaceQuiz(quizId, quizName, questions);
        else addNewQuiz(quizName, questions);

        setInfoMessage('');
        setTimeout(() => navigate('/'), 1000);
    };

    return (
        <div className="container mx-auto flex flex-col gap-5 py-2">
            <div>
                <LinkButton to={ROUTES.HOME.path} className="text-white bg-black text-center">
                    HOME PAGE
                </LinkButton>
            </div>
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
