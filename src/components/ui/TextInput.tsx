interface TextInputProps {
    label: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function TextInput({ label, name, type, value, onChange }: TextInputProps) {
    return (
        <div>
            <label>
                {label} <span className="text-green-600">*</span>
            </label>
            <input
                className="border border-grey-500 rounded-lg p-2 my-2 w-full focus:outline-none focus:border-green-600"
                type={type}
                required
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
