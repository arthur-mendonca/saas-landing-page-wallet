import { Star } from "lucide-react"
import Image from "next/image"

export const UserFeedback = (): React.JSX.Element => {
    return (
        <div className="w-full bg-[#2b2b2b] flex justify-center px-6 py-12">
            <div className="max-w-[800px] w-full rounded-3xl border bg-linear-to-br from-purple-200 to-purple-300  p-8 sm:p-10 shadow-[0_1px_0_rgba(255,255,255,0.06)]">
                <blockquote className="text-black text-lg leading-relaxed mb-8 font-medium">
                    &quot;Wallet is a great product! All of my most important information is there - credit cards, transit cards,
                    boarding passes, tickets, and more. And I don&apos;t need to worry because it&apos;s all in one place! thanks!&quot;
                </blockquote>

                <div className="flex items-center gap-4">
                    <Image
                        src="/avatar.png"
                        alt="Johnny Owens"
                        className="w-14 h-14 rounded-full object-cover"
                        width={56}
                        height={56}
                    />
                    <div>
                        <div className="font-semibold mb-1 text-(--gray)">Johnny Owens</div>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-[#2b2b2b] text-[#2b2b2b]" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
