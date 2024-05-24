import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { selectQuizById } from '../../store/slices/quizesSlice';
import Button from '../../components/Button';
import QuizOptions from './components/QuizOptions/QuizOptions';

interface QuizPassingProps {}

const QuizPassing: FC<QuizPassingProps> = ({}) => {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { pathname } = useLocation();
    const quiz = useAppSelector((state) => selectQuizById(state, pathname.split('/')[2]));

    if (!quiz) return;

    return (
        <div className="container mx-auto">
            <h2 className="bg-blue-500 font-bold text-xl text-white text-center p-4">
                {quiz.name}
            </h2>
            <QuizOptions options={quiz.questions[currentQuestion].answers} />
            <Button>Next Question</Button>
        </div>
    );
};

export default QuizPassing;
