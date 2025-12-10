import Image from "next/image";

export const ProductImage = (): React.JSX.Element => {
    return (
        <div className="px-4 relative w-full bg-[#2b2b2b] py-8 sm:py-10 md:py-12 lg:py-16">
            <div
                className="relative mx-auto max-w-[1080px] w-full h-[265px] sm:h-[450px] md:h-[550px] lg:h-[600px] bg-[#fdf5df] rounded-[20px] overflow-hidden"
            >
                <Image
                    src="/product-img.png"
                    alt="Product Image"
                    fill
                    sizes="(min-width: 1024px) 1080px, (min-width: 640px) 1000px, 100vw"
                    className="object-cover object-center"
                />
            </div>
        </div>
    );
};
