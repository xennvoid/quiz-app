import { FC } from 'react';
import { IAnswer } from '../../../../types/question';

interface QuizOptionsProps {
    options: IAnswer[];
}

const QuizOptions: FC<QuizOptionsProps> = ({ options }) => {
    return (
        <form>
            {options.map((opt, i) => (
                <div key={opt.text}>
                    <label htmlFor={`r-${i}`} className="flex flex-row gap-2">
                        <input type="radio" value={opt.isTrue ? '1' : '0'} id={`r-${i}`} />
                        {opt.text}
                    </label>
                </div>
            ))}
        </form>
    );
};

export default QuizOptions;
