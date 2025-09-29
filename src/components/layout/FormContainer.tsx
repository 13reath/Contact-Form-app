interface FormContainerProps {
    children: React.ReactNode;
}

export default function FormContainer({ children }: FormContainerProps) {
    return (
        <div className="w-full max-w-2xl sm:my-20 mx-auto p-6 sm:p-8 rounded-2xl bg-white">
            {children}
        </div>
    );
}
