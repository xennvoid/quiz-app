import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { selectQuizById } from '../../store/slices/quizesSlice';

interface QuizPassingProps {}

const QuizPassing: FC<QuizPassingProps> = ({}) => {
    const { pathname } = useLocation();
    const quiz = useAppSelector((state) => selectQuizById(state, pathname.split('/')[2]));
    const [score, setScore] = useState(0);

    return <div className="container"></div>;
};

export default QuizPassing;
