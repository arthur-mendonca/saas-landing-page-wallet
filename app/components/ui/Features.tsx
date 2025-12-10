import { CreditCard, DollarSign, Wallet } from "lucide-react"

type CardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradientClass: string;
};

const Card = ({ icon, title, description, gradientClass }: CardProps): React.JSX.Element => {
    return (
        <div className="flex flex-col items-center text-center lg:w-72">
            <div className={`w-16 h-16 rounded-2xl ${gradientClass} flex items-center justify-center mb-6`}>
                {icon}
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

export const Features = (): React.JSX.Element => {
    return (
        <div className="bg-[#2b2b2b] w-full flex justify-center items-center px-10 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card
                    icon={<CreditCard className="w-8 h-8 text-white" />}
                    title="Customizable card"
                    description="Custom your own card for your exact incomes and expenses needs."
                    gradientClass="bg-linear-to-br from-blue-400 to-cyan-300"
                />
                <Card
                    icon={<DollarSign className="w-8 h-8 text-white" />}
                    title="No payment fee"
                    description="Transfer your payment all over the world with no payment fee."
                    gradientClass="bg-linear-to-br from-purple-400 to-purple-300"
                />
                <Card
                    icon={<Wallet className="w-8 h-8 text-white" />}
                    title="All in one place"
                    description="The right place to keep your credit and debit cards, boarding passes & more."
                    gradientClass="bg-linear-to-br from-orange-400 to-yellow-300"
                />
            </div>
        </div>
    )
}
