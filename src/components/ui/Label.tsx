export default function Label({ children }: { children: React.ReactNode }) {
    return (
        <label>
            {children} <span className="text-green-600">*</span>
        </label>
    );
}
