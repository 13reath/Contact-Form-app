interface QueryProps {
    label: string;
    value: string;
    name: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Query({ label, value, name, checked, onChange }: QueryProps) {
    return (
        <div className="border border-grey-500 rounded-lg p-4 px-8 w-full flex gap-4 items-center cursor-pointer hover:border-green-600 transition-colors">
            <input
                className="scale-150 cursor-pointer"
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                required
            />
            <label className="cursor-pointer">{label}</label>
        </div>
    );
}
