import { FC, useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../components/Button';
import QuizOptions from './components/QuizOptions/QuizOptions';
import { IAnswer } from '../../types/question';
import QuizScore from './components/QuizScore/QuizScore';
import QuizQuestionCount from './components/QuizQuestionCount';
import ROUTES from '../../routes';
import { QuizContext, IQuizContext } from '../../context/QuizContext';

interface QuizPassingProps {}

const QuizPassing: FC<QuizPassingProps> = ({}) => {
    const [selectedAnswers, setSelectedAnswers] = useState<IAnswer[]>([]);
    const [selectedAnswerIdx, setSelectedAnswerIdx] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { pathname } = useLocation();
    const { quizes } = useContext(QuizContext) as IQuizContext;

    const quiz = quizes.find((quiz) => quiz.id === pathname.split('/')[2]);

    if (!quiz) return;

    const goToNextQuestion = () => {
        setSelectedAnswerIdx(0);
        setSelectedAnswers((answers) => [
            ...answers,
            quiz.questions[currentQuestion].answers[selectedAnswerIdx],
        ]);
        setCurrentQuestion(currentQuestion + 1);
    };

    const lastQuestionNotDone = currentQuestion < quiz.questions.length;

    return (
        <div className="container mx-auto flex flex-col gap-2">
            <h2 className="bg-blue-500 font-bold text-xl text-white text-center p-4">
                {quiz.name}
            </h2>
            {lastQuestionNotDone && (
                <QuizQuestionCount
                    currentQuestion={currentQuestion}
                    questionCount={quiz.questions.length}
                />
            )}
            {lastQuestionNotDone ? (
                <>
                    <p>{quiz.questions[currentQuestion].name}</p>
                    <QuizOptions
                        options={quiz.questions[currentQuestion].answers}
                        setSelectedAnswerIdx={setSelectedAnswerIdx}
                    />
                </>
            ) : (
                <QuizScore
                    questionsCount={quiz.questions.length}
                    selectedAnswers={selectedAnswers}
                />
            )}
            {lastQuestionNotDone ? (
                <Button onClick={goToNextQuestion}>Next Question</Button>
            ) : (
                <Link
                    to={ROUTES.HOME.path}
                    className="bg-black text-white text-center font-bold p-2">
                    To Home Page
                </Link>
            )}
        </div>
    );
};

export default QuizPassing;
