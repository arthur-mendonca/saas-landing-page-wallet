export const Logos = (): React.JSX.Element => {
    return (
        <div className="relative w-full bg-[#2b2b2b]">
            <div className="absolute inset-x-0 top-0 h-px bg-white/20 w-[90%] mx-auto" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-white/20 w-[90%] mx-auto" />

            <div className="max-w-[1080px] mx-auto py-6 md:py-6">
                <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between md:gap-x-8 gap-y-4">
                    <span
                        aria-label="Accenture"
                        className="block bg-(--gray) h-10 md:h-12 lg:h-20 w-[120px] sm:w-[140px] md:w-[160px] mask-[url(/accenture.svg)] [-webkit-mask-image:url(/accenture.svg)] mask-no-repeat [-webkit-mask-repeat:no-repeat] mask-center [-webkit-mask-position:center] mask-contain [-webkit-mask-size:contain]"
                    />
                    <span
                        aria-label="Apple"
                        className="block bg-(--gray) h-7 sm:h-6 md:h-7 lg:h-12 w-[100px] sm:w-[120px] md:w-[140px] mask-[url(/apple_logo.svg)] [-webkit-mask-image:url(/apple_logo.svg)] mask-no-repeat [-webkit-mask-repeat:no-repeat] mask-center [-webkit-mask-position:center] mask-contain [-webkit-mask-size:contain]"
                    />
                    <span
                        aria-label="Microsoft"
                        className="block bg-(--gray) h-5 sm:h-6 md:h-7 lg:h-9 w-[120px] sm:w-[140px] md:w-[160px] mask-[url(/microsoft.svg)] [-webkit-mask-image:url(/microsoft.svg)] mask-no-repeat [-webkit-mask-repeat:no-repeat] mask-center [-webkit-mask-position:center] mask-contain [-webkit-mask-size:contain]"
                    />
                    <span
                        aria-label="Google"
                        className="block bg-(--gray) h-5 sm:h-6 md:h-7 lg:h-8 w-[110px] sm:w-[130px] md:w-[150px] mask-[url(/google.svg)] [-webkit-mask-image:url(/google.svg)] mask-no-repeat [-webkit-mask-repeat:no-repeat] mask-center [-webkit-mask-position:center] mask-contain [-webkit-mask-size:contain]"
                    />
                    <span
                        aria-label="BearingPoint"
                        className="block bg-(--gray) h-5 sm:h-6 md:h-7 lg:h-8 w-[130px] sm:w-[150px] md:w-[170px] mask-[url(/bearing_point.svg)] [-webkit-mask-image:url(/bearing_point.svg)] mask-no-repeat [-webkit-mask-repeat:no-repeat] mask-center [-webkit-mask-position:center] mask-contain [-webkit-mask-size:contain]"
                    />
                </div>
            </div>
        </div>
    );
};

