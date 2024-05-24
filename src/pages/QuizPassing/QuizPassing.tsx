import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { selectQuizById } from '../../store/slices/quizesSlice';
import Button from '../../components/Button';
import QuizOptions from './components/QuizOptions/QuizOptions';
import { IAnswer } from '../../types/question';

interface QuizPassingProps {}

const QuizPassing: FC<QuizPassingProps> = ({}) => {
    const [selectedAnswers, setSelectedAnswers] = useState<IAnswer[]>([]);
    const [selectedAnswerIdx, setSelectedAnswerIdx] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { pathname } = useLocation();
    const quiz = useAppSelector((state) => selectQuizById(state, pathname.split('/')[2]));

    if (!quiz) return;

    const goToNextQuestion = () => {
        setSelectedAnswerIdx(0);
        setSelectedAnswers((answers) => [
            ...answers,
            quiz.questions[currentQuestion].answers[selectedAnswerIdx],
        ]);
        setCurrentQuestion(currentQuestion + 1);
    };

    return (
        <div className="container mx-auto flex flex-col gap-2">
            <h2 className="bg-blue-500 font-bold text-xl text-white text-center p-4">
                {quiz.name}
            </h2>
            {currentQuestion < quiz.questions.length && (
                <p>
                    Question {currentQuestion + 1} of {quiz.questions.length}
                </p>
            )}
            {currentQuestion < quiz.questions.length ? (
                <>
                    <p>{quiz.questions[currentQuestion].name}</p>
                    <QuizOptions
                        options={quiz.questions[currentQuestion].answers}
                        setSelectedAnswerIdx={setSelectedAnswerIdx}
                    />
                </>
            ) : (
                <p>
                    Your score is{' '}
                    {selectedAnswers.reduce((acc, answr) => {
                        if (answr.isTrue) acc++;
                        return acc;
                    }, 0)}{' '}
                    of {quiz.questions.length}
                </p>
            )}
            <Button onClick={goToNextQuestion}>Next Question</Button>
        </div>
    );
};

export default QuizPassing;
