import { FC } from 'react';
import LinkButton from '../../components/LinkButton';
import Quizes from './components/Quizes';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
    return (
        <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-green-900 text-center">Quiz App</h1>
            <LinkButton to="/create">Add Quiz</LinkButton>
            <div className="py-8">
                <Quizes />
            </div>
        </div>
    );
};

export default Home;
