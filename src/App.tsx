import { Route, Routes } from 'react-router-dom';
import './App.css';
import ROUTES from './routes';

function App() {
    return (
        <Routes>
            {Object.values(ROUTES).map((ROUTE) => (
                <Route
                    index={ROUTE.path === '/' ? true : undefined}
                    key={ROUTE.path}
                    {...ROUTE}
                    element={<ROUTE.element />}
                />
            ))}
        </Routes>
    );
}

export default App;
