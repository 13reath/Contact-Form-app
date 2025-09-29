interface PageLayoutProps {
    children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="w-full min-h-screen flex items-center p-4 sm:p-8 font-family-karla bg-green-200 text-grey-900">
            {children}
        </div>
    );
}
