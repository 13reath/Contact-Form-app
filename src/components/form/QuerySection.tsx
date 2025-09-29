import Label from '../ui/Label';
import Query from '../ui/Query';

interface QuerySectionProps {
    queryType: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function QuerySection({ queryType, onChange: handleChange }: QuerySectionProps) {
    return (
        <div className="flex flex-col gap-4">
            <Label>Query Type</Label>

            <div className="flex flex-col gap-4 sm:flex-row">
                <Query
                    label="General Enquiry"
                    value="general"
                    name="queryType"
                    checked={queryType === 'general'}
                    onChange={handleChange}
                />
                <Query
                    label="Support Request"
                    value="support"
                    name="queryType"
                    checked={queryType === 'support'}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}
