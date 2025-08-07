import React from 'react'

interface TextAreaProps {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    rows?: number;
    className?: string;
    name?: string;
    id?: string;
    disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
    value,
    onChange,
    placeholder = '',
    rows = 4,
    className = '',
    name = '',
    id = '',
    disabled = false
}) => {
  return (
    <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={rows}
    name={name}
    id={id}
    disabled={disabled}
    className='w-full border-1 border-gray-200 shadow-lg'
    />
  )
}

export default TextArea