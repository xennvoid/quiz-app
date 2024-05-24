import { FC } from 'react';
import { useLocation } from 'react-router-dom';

interface QuizPassingProps {}

const QuizPassing: FC<QuizPassingProps> = ({}) => {
    const { pathname } = useLocation();

    return <div>QuizPassing</div>;
};

export default QuizPassing;
