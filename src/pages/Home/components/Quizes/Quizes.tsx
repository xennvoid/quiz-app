import { FC } from 'react';
import QuizCard from './QuizCard';
import { useAppSelector } from '../../../../store/hooks';

interface QuizesProps {}

const Quizes: FC<QuizesProps> = ({}) => {
    const { quizes } = useAppSelector((state) => state.quizes);

    return (
        <div className="container grid grid-cols-4 gap-4">
            {quizes.map((quiz, i) => (
                <QuizCard key={i} quiz={quiz} />
            ))}
        </div>
    );
};

export default Quizes;
