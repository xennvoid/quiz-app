import { configureStore } from '@reduxjs/toolkit';
import quizesReducer from './slices/quizesSlice';

const store = configureStore({
    reducer: { quizes: quizesReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
