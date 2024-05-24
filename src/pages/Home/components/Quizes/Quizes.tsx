import { FC, useContext } from 'react';
import QuizCard from './QuizCard';
import { IQuizContext, QuizContext } from '../../../../context/QuizContext';

interface QuizesProps {}

const Quizes: FC<QuizesProps> = ({}) => {
    const { quizes } = useContext(QuizContext) as IQuizContext;

    return (
        <div className="container grid grid-cols-4 gap-4">
            {quizes.map((quiz, i) => (
                <QuizCard key={i} quiz={quiz} />
            ))}
        </div>
    );
};

export default Quizes;
