

export const TopBar = (): React.JSX.Element => {
    return (
        <header className="relative w-full h-[100px] bg-[#2b2b2b]">
            <nav
                className="flex items-center justify-between h-full px-[50px]"
                aria-label="Main navigation"
            >
                <div className="flex items-center">
                    <h1
                        className="flex items-center justify-center font-['Poppins-Regular',Helvetica] font-semibold 
                    text-white text-2xl tracking-[0] leading-6 whitespace-nowrap">
                        Wallet
                    </h1>
                </div>

                <div className="flex items-center gap-8">
                    <button
                        type="button"
                        className="font-['Poppins-Regular',Helvetica] font-normal text-white text-lg text-right tracking-[0] leading-8 cursor-pointer hover:opacity-80 transition-opacity duration-200"
                        aria-label="Sign up"
                    >
                        Sign up
                    </button>

                    <a
                        className="relative w-[175px] h-[50px] bg-[#bfaff2] 
                        rounded-[15px] flex items-center justify-center hover:bg-[#b09ee8] transition-all duration-200 ease-[ease] no-underline"
                        href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-saas&utm_medium=figma-samples"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Log in"
                    >
                        <span
                            className="font-body-18px font-(--body-18px-font-weight) text-[#333333] 
                        text-(length:--body-18px-font-size) text-center tracking-(--body-18px-letter-spacing) 
                        leading-(--body-18px-line-height) whitespace-nowrap [font-style:var(--body-18px-font-style)]"
                        >
                            Log in
                        </span>
                    </a>
                </div>
            </nav>
        </header>
    );
};
