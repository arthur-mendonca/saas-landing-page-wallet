import Image from "next/image";
import React from "react";

export const Header = (): React.JSX.Element => {
    return (
        <header className="w-full bg-[#2b2b2b]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-12">
                <div className="flex flex-col gap-6">
                    <h1 className="font-headline-60px font-(--headline-60px-font-weight) text-white text-(length:--headline-60px-font-size) tracking-(--headline-60px-letter-spacing) leading-(--headline-60px-line-height) [font-style:var(--headline-60px-font-style)]">
                        SaaS Landing Page Template
                    </h1>
                    <p className="opacity-40 font-body-18px font-(--body-18px-font-weight) text-white text-(length:--body-18px-font-size) tracking-(--body-18px-letter-spacing) leading-(--body-18px-line-height) [font-style:var(--body-18px-font-style)]">
                        This is a template Figma file, turned into code using Anima. Learn
                        more at AnimaApp.com
                    </p>
                    <div>
                        <a
                            className="inline-flex items-center justify-center w-[175px] h-[50px] bg-(--yellow) rounded-[15px] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 focus:ring-offset-[#2b2b2b] transition-opacity duration-200"
                            href="https://animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-pets&utm_medium=figma-samples"
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label="Get started with Anima"
                        >
                            <span className="font-body-18px font-(--body-18px-font-weight) text-[#333333] text-(length:--body-18px-font-size) text-center tracking-(--body-18px-letter-spacing) leading-(--body-18px-line-height) whitespace-nowrap [font-style:var(--body-18px-font-style)]">
                                Get started
                            </span>
                        </a>
                    </div>
                </div>

                <div className="rounded-[20px] bg-[#333333] p-2">
                    <Image
                        className="w-full h-auto rounded-[16px]"
                        alt="SaaS Dashboard Analytics Screenshot"
                        height={892}
                        src="https://cdn.animaapp.com/projects/6244654aadb8856e2018d330/files/1000x892.gif"
                        width={1000}
                        sizes="(min-width: 768px) 500px, 100vw"
                        priority
                    />
                </div>
            </div>
        </header>
    );
};
