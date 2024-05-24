import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IQuiz } from '../../../../../types/question';

interface QuizCardProps {
    quiz: IQuiz;
}

const QuizCard: FC<QuizCardProps> = ({ quiz }) => {
    return (
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg p-5 cursor-pointer">
            <Link to="/">{JSON.stringify(quiz)}</Link>
        </div>
    );
};

export default QuizCard;
