import { ChangeEvent, FC, MouseEvent } from 'react';
import Input from '../../../../../components/Input';
import { IAnswer, IQuestion } from '../../../../../types/question';
import Button from '../../../../../components/Button';

interface AnswerProps {
    answer: IAnswer;
    question: IQuestion;
    answerNumber: number;
    setQuestions: React.Dispatch<React.SetStateAction<IQuestion[]>>;
}

const Answer: FC<AnswerProps> = ({ answer, question, answerNumber, setQuestions }) => {
    const changeAnswerText = (e: ChangeEvent<HTMLInputElement>) => {
        setQuestions((questions) =>
            questions.map((q) => {
                if (q.id === question.id) {
                    return {
                        ...q,
                        answers: q.answers.map((answr) =>
                            answr.id === answer.id ? { ...answr, text: e.target.value } : answr,
                        ),
                    };
                }
                return q;
            }),
        );
    };

    const makeAnswerTrue = () => {
        setQuestions((questions) =>
            questions.map((q) => {
                if (q.id === question.id) {
                    return {
                        ...q,
                        answers: q.answers.map((answr) =>
                            answr.id === answer.id
                                ? { ...answr, isTrue: true }
                                : { ...answr, isTrue: false },
                        ),
                    };
                }
                return q;
            }),
        );
    };

    const removeAnswer = () => {
        setQuestions((questions) =>
            questions.map((q) => {
                if (q.id === question.id) {
                    return {
                        ...q,
                        answers: q.answers.filter((answr) => answr.id !== answer.id),
                    };
                }
                return q;
            }),
        );
    };

    return (
        <div className="flex gap-3">
            <Button
                className={
                    answer.isTrue
                        ? 'bg-green-500 text-white px-4 py-1 rounded-md'
                        : 'bg-red-200 text-black px-4 py-1 rounded-md'
                }
                onClick={makeAnswerTrue}>
                {answer.isTrue ? 'True' : 'False'}
            </Button>
            <Input
                className={
                    answer.isTrue
                        ? 'w-full bg-green-500 p-2 text-white placeholder:text-white'
                        : 'w-full bg-blue-200 p-2'
                }
                type="text"
                value={answer.text}
                placeholder={`Answer №${answerNumber}`}
                onChange={changeAnswerText}
            />
            <Button className="bg-red-500 text-white px-4 py-1 rounded-md" onClick={removeAnswer}>
                Remove
            </Button>
        </div>
    );
};

export default Answer;
