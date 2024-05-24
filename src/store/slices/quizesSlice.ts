import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IQuestion } from '../../types/question';

interface QuizesState {
    quizes: Array<IQuestion[]>;
}

const initialState: QuizesState = {
    quizes: [],
};

const quizesSlice = createSlice({
    name: 'quizes',
    initialState,
    reducers: {
        addQuiz: (state, action: PayloadAction<IQuestion[]>) => {
            state.quizes.push(action.payload);
        },
    },
});

export const { addQuiz } = quizesSlice.actions;

export default quizesSlice.reducer;
