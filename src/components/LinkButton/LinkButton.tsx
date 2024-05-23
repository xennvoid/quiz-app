import { ComponentProps, FC } from 'react';
import { Link } from 'react-router-dom';
import { IPath } from '../../routes';

interface LinkButtonProps extends ComponentProps<'a'> {
    to: IPath;
    children: React.ReactNode;
}

const LinkButton: FC<LinkButtonProps> = ({ to, children }) => {
    return (
        <Link
            to={to}
            className="bg-green-900 text-white font-bold px-4 py-2 rounded-md hover:bg-green-500 transition duration-300 ease-in">
            {children}
        </Link>
    );
};

export default LinkButton;
