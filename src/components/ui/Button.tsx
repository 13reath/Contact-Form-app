interface ButtonProps {
    children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
    return (
        <button
            className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
            type="submit"
        >
            {children}
        </button>
    );
}
