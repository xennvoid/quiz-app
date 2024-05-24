import { FC } from 'react';

interface QuizQuestionCountProps {
    currentQuestion: number;
    questionCount: number;
}

const QuizQuestionCount: FC<QuizQuestionCountProps> = ({ currentQuestion, questionCount }) => {
    return (
        <p>
            Question {currentQuestion + 1} of {questionCount}
        </p>
    );
};

export default QuizQuestionCount;
