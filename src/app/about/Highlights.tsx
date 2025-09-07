const Highlights = () => {
    return (
        <section>
            <h2 className="text-2xl text-foreground font-semibold mb-4">Highlights</h2>
            <ul className="list-inside space-y-4 text-base sm:text-lg text-muted mb-6">
                <li>
                    🦆 <strong className="text-foreground">Scholarship - 2025 DxHub/AWS AI Camp:</strong> Selected to learn AI at Cal Poly SLO DxHub; built AI procurements solution for CSU&apos;s.
                </li>
                <li>
                    🏆 <strong className="text-foreground">Winner  – 2023 Consensys NAVH Hackathon:</strong> Built the frontend for an automated payments system in a Web3 programming competition.
                </li>
                <li>
                    💡 <strong className="text-foreground">HackFS 2022:</strong> Co-developed an NFT Rental Marketplace; project received grant interest from judges.
                </li>
                <li>
                    🛡️ <strong className="text-foreground">Collegiate Cyber Defense Competitions:</strong> Participated in multiple WRCCDC, picoCTF, and Hivestorm events, applying real-world security and infrastructure hardening concepts.
                </li>

            </ul>
        </section>
    );
};

export default Highlights;