import { FC } from 'react';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
    return (
        <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-green-900 text-center">Quiz App</h1>
        </div>
    );
};

export default Home;
