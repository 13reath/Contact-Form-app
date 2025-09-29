import Label from '../ui/Label';

interface CheckSectionProps {
    checked: { checked: boolean };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckSection({ checked, onChange: handleChange }: CheckSectionProps) {
    return (
        <div className="flex gap-6 m-1 items-center">
            <input
                className="scale-125  cursor-pointer"
                type="checkbox"
                name="contact"
                checked={checked.checked}
                onChange={handleChange}
                required
            />
            <Label>I consent to being contacted by the team</Label>
        </div>
    );
}
