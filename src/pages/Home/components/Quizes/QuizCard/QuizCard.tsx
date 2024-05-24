import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IQuiz } from '../../../../../types/question';

interface QuizCardProps {
    quiz: IQuiz;
}

const QuizCard: FC<QuizCardProps> = ({ quiz }) => {
    return (
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg p-5 cursor-pointer">
            <Link to={`/quiz/${quiz.id}`}>
                <h3 className="text-green-800 font-bold text-xl">{quiz.name}</h3>
                <p className="py-2">
                    Quiz consists of <strong>{quiz.questions.length}</strong> questions!
                </p>
            </Link>
        </div>
    );
};

export default QuizCard;
