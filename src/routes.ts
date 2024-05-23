import Home from './pages/Home';
import QuizCreation from './pages/QuizCreation';

const ROUTES = {
    HOME: {
        path: '/' as const,
        element: Home,
    },
    QUIZ_CREATION: {
        path: '/create' as const,
        element: QuizCreation,
    },
};

export type IPath = (typeof ROUTES)[keyof typeof ROUTES]['path'];

export default ROUTES;
