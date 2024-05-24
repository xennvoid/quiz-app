import { ChangeEvent, FC, MouseEvent } from 'react';
import Button from '../../../../components/Button';
import { IQuestion } from '../../../../types/question';
import Input from '../../../../components/Input';
import Answers from '../Answers';

interface QuestionCreateFormProps {
    questionNumber: number;
    question: IQuestion;
    changeQuestionName: (e: ChangeEvent<HTMLInputElement>) => void;
    addNewAnswer: (e: MouseEvent<HTMLButtonElement>, id: string) => void;
    setQuestions: React.Dispatch<React.SetStateAction<IQuestion[]>>;
    deleteQuestion: (id: string) => void;
}

const QuestionCreateForm: FC<QuestionCreateFormProps> = ({
    questionNumber,
    question,
    changeQuestionName,
    addNewAnswer,
    setQuestions,
    deleteQuestion,
}) => {
    return (
        <form
            className="flex flex-col gap-2 border-2 border-solid border-gray-100 p-3"
            onSubmit={(e) => e.preventDefault()}>
            <Button
                className="bg-red-600 text-white p-2 ml-auto rounded-md"
                onClick={() => deleteQuestion(question.id)}>
                Delete Question
            </Button>
            <label htmlFor={question.id}>
                <Input
                    id={question.id}
                    size={question.name.length}
                    type="text"
                    placeholder={`Question ${questionNumber} description`}
                    onChange={changeQuestionName}
                    value={question.name}
                />
            </label>
            <Answers answers={question.answers} question={question} setQuestions={setQuestions} />
            <Button onClick={(e) => addNewAnswer(e, question.id)}>Add new answer</Button>
        </form>
    );
};

export default QuestionCreateForm;
