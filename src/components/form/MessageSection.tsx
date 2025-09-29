import Label from '../ui/Label';

interface MessageSectionsProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function MessageSection({ value, onChange: handleChange }: MessageSectionsProps) {
    return (
        <div>
            <Label>Message</Label>

            <textarea
                className="border border-grey-500 rounded-lg p-2 my-2 w-full h-48 sm:h-32 resize-none focus:outline-none focus:border-green-600"
                name="message"
                value={value}
                placeholder="What would you like to tell us?"
                onChange={handleChange}
                required
            />
        </div>
    );
}
