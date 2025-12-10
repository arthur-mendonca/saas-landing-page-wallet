import { ReactNode } from "react";

export const GlobalLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div
            className="max-w-[1280px] w-full mx-auto min-h-screen font-sans dark:bg-black"
        >
            <main className="min-h-screen flex-12 bg-amber-600">
                {children}
            </main>
        </div>
    );
};

