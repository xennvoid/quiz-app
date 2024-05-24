import { FC } from 'react';
import { IAnswer } from '../../../../types/question';

interface QuizOptionsProps {
    options: IAnswer[];
    setSelectedAnswerIdx: React.Dispatch<React.SetStateAction<number>>;
}

const QuizOptions: FC<QuizOptionsProps> = ({ options, setSelectedAnswerIdx }) => {
    return (
        <form className="flex flex-col gap-2">
            {options.map((opt, i) => (
                <div key={opt.text}>
                    <label htmlFor={`r-${i}`} className="flex flex-row gap-2 cursor-pointer">
                        <input
                            type="radio"
                            id={`r-${i}`}
                            name="radio"
                            onClick={() => setSelectedAnswerIdx(i)}
                        />
                        {opt.text}
                    </label>
                </div>
            ))}
        </form>
    );
};

export default QuizOptions;
