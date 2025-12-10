export const Footer = (): React.JSX.Element => {
    return (
        <footer className="w-full bg-[#2b2b2b] py-10 relative">
            <div className="absolute inset-x-0 top-0 h-px bg-white/20 w-[90%] mx-auto" />

            <div className="max-w-[1280px] mx-auto w-[90%] flex flex-col-reverse items-start md:flex-row md:justify-between gap-10 ">
                <div className="flex flex-col gap-6">

                    <h2 className="text-white text-2xl font-semibold hidden md:block">Wallet</h2>

                    <nav aria-label="Footer navigation">
                        <ul className="flex flex-wrap flex-col items-start md:flex-row gap-x-6 gap-y-3 text-white">
                            <li className="opacity-80">© Wallet {new Date().getFullYear()}</li>
                            <li>
                                <a href="#privacy" className="opacity-80 hover:opacity-100 transition-opacity">Privacy policy</a>
                            </li>
                            <li>
                                <a href="#cookies" className="opacity-80 hover:opacity-100 transition-opacity">Cookies policy</a>
                            </li>
                            <li>
                                <a href="#terms" className="opacity-80 hover:opacity-100 transition-opacity">Terms of use</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="flex flex-col gap-4 md:items-end">

                    <h2 className="text-white text-2xl font-semibold md:hidden">Wallet</h2>

                    <span className="text-white text-base opacity-80">Updates right to your Inbox</span>
                    <form className="flex w-full md:w-auto items-center gap-4" aria-label="Subscribe">
                        <label htmlFor="footer-email" className="sr-only">Email Address</label>
                        <input
                            id="footer-email"
                            type="email"
                            placeholder="Email Address"
                            className="w-full md:w-[360px] h-[50px] rounded-[15px] bg-[#333333] text-white placeholder-white/40 px-4 outline-none focus:ring-2 focus:ring-white/20"
                        />
                        <button
                            type="submit"
                            className="w-[140px] h-[50px] rounded-[15px] bg-[#bfaff2] text-[#333333] font-semibold hover:bg-[#b09ee8] transition-colors"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
}
