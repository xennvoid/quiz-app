import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { IQuiz } from '../../../../../types/question';
import Button from '../../../../../components/Button';
import { IQuizContext, QuizContext } from '../../../../../context/QuizContext';
import LinkButton from '../../../../../components/LinkButton';

interface QuizCardProps {
    quiz: IQuiz;
}

const QuizCard: FC<QuizCardProps> = ({ quiz }) => {
    const { removeQuiz } = useContext(QuizContext) as IQuizContext;

    const deleteQuiz = () => {
        removeQuiz(quiz.id);
    };

    return (
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg p-5 cursor-pointer flex flex-col gap-2">
            <Button
                className="bg-red-500 text-white p-1 rounded-md flex self-end"
                onClick={deleteQuiz}>
                X
            </Button>
            <Link to={`/quiz/${quiz.id}`}>
                <h3 className="text-green-800 font-bold text-xl">{quiz.name}</h3>
                <p className="py-2">
                    Quiz consists of <strong>{quiz.questions.length}</strong> questions!
                </p>
            </Link>
            <LinkButton to={`/quiz/edit/${quiz.id}`}>Edit</LinkButton>
        </div>
    );
};

export default QuizCard;
