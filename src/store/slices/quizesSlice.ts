import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IQuestion, IQuiz } from '../../types/question';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '..';

interface QuizesState {
    quizes: IQuiz[];
}

const initialState: QuizesState = {
    quizes: [],
};

const quizesSlice = createSlice({
    name: 'quizes',
    initialState,
    reducers: {
        addQuiz: (state, action: PayloadAction<{ name: string; questions: IQuestion[] }>) => {
            state.quizes.push({
                id: uuidv4(),
                name: action.payload.name,
                questions: action.payload.questions,
            });
        },
    },
});

export const { addQuiz } = quizesSlice.actions;

export const selectQuizById = (state: RootState, id: string) => {
    return state.quizes.quizes.find((quiz: IQuiz) => quiz.id === id);
};

export default quizesSlice.reducer;
