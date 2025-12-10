import Image from "next/image";

export const CTA = (): React.JSX.Element => {
    return (
        <section className="w-full bg-[#2b2b2b] pb-8 md:py-16  ">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 text-center md:text-start md:grid-cols-2 gap-12 lg:gap-0 items-center px-24">
                <div className="flex flex-col gap-6 items-center md:items-start">
                    <h2 className="text-white text-4xl sm:text-5xl md:text-6xl leading-normal font-semibold tracking-tight">
                        Questions?
                        <br />
                        Let’s talk
                    </h2>
                    <p className="text-white/40 text-base sm:text-lg max-w-md">
                        Contact us through our 24/7 live chat. We’re always happy to help!
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center w-[175px] h-[50px] rounded-[15px] bg-[#f8d57e] text-[#333333] font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#f8d57e] focus:ring-offset-2 focus:ring-offset-[#2b2b2b] transition-opacity"
                    >
                        Get started
                    </a>
                </div>

                <div className="flex justify-center">
                    <Image src={"/wallet.png"} alt="Wallet Image" width={450} height={360} />
                </div>
            </div>
        </section>
    );
}
