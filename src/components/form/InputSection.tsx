import TextInput from '../ui/TextInput';

interface InputSectionProps {
    formData: { name: string; lname: string; mail: string };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function InputSection({ formData, onChange }: InputSectionProps) {
    return (
        <div className="flex flex-col gap-4">
            <div className="sm:flex sm:gap-4">
                <TextInput
                    label="First Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={onChange}
                />
                <TextInput
                    label="Last Name"
                    name="lname"
                    type="text"
                    value={formData.lname}
                    onChange={onChange}
                />
            </div>
            <TextInput
                label="Email Address"
                name="mail"
                type="email"
                value={formData.mail}
                onChange={onChange}
            />
        </div>
    );
}
