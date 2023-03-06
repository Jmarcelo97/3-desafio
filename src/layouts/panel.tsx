import { Breadcrumb } from "../components/Breadcrumb";

type PanelLayoutProps = {
    children: React.ReactNode;
}

export function PanelLayout({ children }: PanelLayoutProps) {
    return (
        <div className="flex flex-col max-w-5xl mx-auto gap-4">
            <Breadcrumb />
            {children}
        </div>
    );
}