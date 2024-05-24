import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IQuestion, IQuiz } from '../../types/question';

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
            state.quizes.push({ name: action.payload.name, questions: action.payload.questions });
        },
    },
});

export const { addQuiz } = quizesSlice.actions;

export default quizesSlice.reducer;
