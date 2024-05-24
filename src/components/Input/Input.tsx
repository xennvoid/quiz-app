import { ComponentProps, FC } from 'react';

interface InputProps extends ComponentProps<'input'> {}

const Input: FC<InputProps> = (props) => {
    return <input className="px-2 py-2 outline-none bg-gray-200 rounded-md" {...props} />;
};

export default Input;
