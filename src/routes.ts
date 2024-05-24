import Home from './pages/Home';
import QuizCreation from './pages/QuizCreation';
import QuizPassing from './pages/QuizPassing';

const ROUTES = {
    HOME: {
        path: '/' as const,
        element: Home,
    },
    QUIZ_CREATION: {
        path: '/create' as const,
        element: QuizCreation,
    },
    QUIZ_PASS: {
        path: '/quiz/:id' as const,
        element: QuizPassing,
    },
    QUIZ_EDIT: {
        path: '/quiz/edit/:id',
        element: QuizCreation,
    },
};

export type IPath = (typeof ROUTES)[keyof typeof ROUTES]['path'];

export default ROUTES;
