import { FC } from 'react';
import { IAnswer } from '../../../../types/question';

interface QuizScoreProps {
    selectedAnswers: IAnswer[];
    questionsCount: number;
}

const QuizScore: FC<QuizScoreProps> = ({ selectedAnswers, questionsCount }) => {
    return (
        <p>
            Your score is{' '}
            {selectedAnswers.reduce((acc, answr) => {
                if (answr.isTrue) acc++;
                return acc;
            }, 0)}{' '}
            of {questionsCount}
        </p>
    );
};

export default QuizScore;
