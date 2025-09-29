import { useState } from 'react';
import type FormData from './types/form.types';

import PageLayout from './components/layout/PageLayout';
import FormContainer from './components/layout/FormContainer';
import FormHeader from './components/layout/FormHeader';

import InputSection from './components/form/InputSection';
import QuerySection from './components/form/QuerySection';
import MessageSection from './components/form/MessageSection';
import CheckSection from './components/form/CheckSection';

import Button from './components/ui/Button';

export default function App() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        lname: '',
        mail: '',
        message: '',
        queryType: '',
        consent: false,
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
    }

    return (
        <PageLayout>
            <FormContainer>
                <FormHeader />
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <InputSection
                        formData={{
                            name: formData.name,
                            lname: formData.lname,
                            mail: formData.mail,
                        }}
                        onChange={handleChange}
                    />
                    <QuerySection queryType={formData.queryType} onChange={handleChange} />
                    <MessageSection value={formData.message} onChange={handleChange} />
                    <CheckSection checked={{ checked: formData.consent }} onChange={handleChange} />
                    <Button>Submit</Button>
                </form>
            </FormContainer>
        </PageLayout>
    );
}
