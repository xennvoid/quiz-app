import { FC } from 'react';
import Answer from './Answer/Answer';
import { IAnswer, IQuestion } from '../../../../types/question';

interface AnswersProps {
    answers: IAnswer[];
    question: IQuestion;
    setQuestions: React.Dispatch<React.SetStateAction<IQuestion[]>>;
}

const Answers: FC<AnswersProps> = ({ answers, question, setQuestions }) => {
    return (
        <div className="flex flex-col gap-3">
            {answers.map((answer, i) => (
                <Answer
                    key={answer.id}
                    answer={answer}
                    question={question}
                    answerNumber={i + 1}
                    setQuestions={setQuestions}
                />
            ))}
        </div>
    );
};

export default Answers;
