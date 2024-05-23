import { ComponentProps, FC } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button
            className="bg-blue-800 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            {...props}>
            {children}
        </button>
    );
};

export default Button;
