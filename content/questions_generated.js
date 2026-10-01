const SAMPLE_QUESTIONS = [
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM1 – Derivative Instrument and Derivative Market Features",
        "text": "Compared to over-the-counter (OTC) derivatives that are not cleared, the credit risk of exchange-traded derivatives is most likely:",
        "options": [
            "lower.",
            "the same.",
            "higher."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because derivative exchanges require collateral on deposit upon inception and during the life of a trade in order to minimize counterparty credit risk. This deposit is paid by each counterparty via a financial intermediary to the exchange, which then provides a guarantee against counterparty default, whereas OTC (over-the-counter) instruments have less transparency, usually involve more counterparty risk. Therefore, compared to OTC derivatives that are not cleared, the credit risk of exchange-traded derivatives is lower."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM1 – Derivative Instrument and Derivative Market Features",
        "text": "Which of the following statements is most accurate?",
        "options": [
            "Longevity is an example of an underlying of a derivative",
            "A convertible bond is an example of a stand-alone derivative",
            "Derivatives directly pass through the returns of the underlying"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because other derivative underlyings include weather, cryptocurrencies, and longevity, all of which can influence the financial performance of various market participants. Therefore, longevity is an example of an underlying of a derivative."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM1 – Derivative Instrument and Derivative Market Features",
        "text": "Derivatives derive their performance from:",
        "options": [
            "the performance of the underlying asset.",
            "eliminating the risk of counterparty default.",
            "the straight pass-through performance of the underlying."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the most common definition of a derivative is a financial instrument that derives its performance from the performance of the underlying asset."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM1 – Derivative Instrument and Derivative Market Features",
        "text": "Compared to over-the-counter (OTC) derivative markets, exchange-traded derivative markets most likely have greater:",
        "options": [
            "flexibility.",
            "transparency.",
            "customization."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because many transactions in OTC markets will retain a degree of privacy with lower transparency. In contrast, exchange markets are said to have transparency, which means that full information on all transactions is disclosed to exchanges and regulatory bodies. Therefore, exchange-traded derivatives markets have greater transparency than OTC derivatives markets."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM1 – Derivative Instrument and Derivative Market Features",
        "text": "Which of the following derivative underlyings is an example of a soft commodity?",
        "options": [
            "Gold",
            "Crude oil",
            "Soybeans"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because soft commodities are agricultural products, such as cattle and corn, and hard commodities are natural resources, such as crude oil and metals. Also, crude oil, soybeans, copper, and gold are all commodities. Commodities are considered either 'hard' (those mined, such as copper, or extracted, such as oil) or 'soft' (those grown over a period of time, such as livestock, grains, and cash crops, such as coffee)."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text": "An investor buys a call for $5.75 that has a strike price of $130. If the value at expiration for this call is $17.80, the price of the underlying at expiration is closest to:",
        "options": [
            "$112.20.",
            "$142.05",
            "$147.80."
        ],
        "correctAnswer": 2,
        "explanation": "[ADDED BY CLAUDE, not in book] Call value at expiration = Max(0, ST - X), so 17.80 = ST - 130 and ST = $147.80. The $5.75 premium is a distractor: it affects profit, not value at expiration. Choice B ($142.05) is the trap from subtracting the premium: 130 + 17.80 - 5.75."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text": "A call option had the following characteristics on the date it was created: Exercise price $20; Option premium $3. If the price of the underlying is $17 at expiration, the profit to the option holder is closest to:",
        "options": [
            "-$3.",
            "$0.",
            "$3."
        ],
        "correctAnswer": 0,
        "explanation": "[ADDED BY CLAUDE, not in book] ST = $17 is below X = $20, so the call expires worthless (payoff $0). Profit = payoff - premium paid = 0 - 3 = -$3."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text": "If ST denotes the price of the underlying at the expiration date and X is the exercise price of the option, the payoff at expiration to a call seller is best described as:",
        "options": [
            "-Max(0, ST - X).",
            "-Max(0, X - ST).",
            "Max(0, ST - X)."
        ],
        "correctAnswer": 0,
        "explanation": "[ADDED BY CLAUDE, not in book] Options are zero-sum. The call buyer's payoff is Max(0, ST - X), so the seller's payoff is the negative of that. Choice B is the put seller's payoff; choice C is the call buyer's payoff."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text": "A call option that is sold for $4 has an exercise price of $40. If the price of the underlying is $43 at expiration, the value of the option to the seller is closest to:",
        "options": [
            "-$3, and the loss to the seller is $1.",
            "-$3, and the profit to the seller is $1.",
            "$3, and the loss to the seller is $1."
        ],
        "correctAnswer": 1,
        "explanation": "[ADDED BY CLAUDE, not in book] Value to the seller at expiration = -Max(0, 43 - 40) = -$3. Profit = value + premium received = -3 + 4 = +$1."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text": "An investor pays $5 for a European put option with an exercise price of $102. At expiration, if the price of the underlying is $100, the value of the put option is:",
        "options": [
            "-$3.",
            "$0.",
            "$2."
        ],
        "correctAnswer": 2,
        "explanation": "[ADDED BY CLAUDE, not in book] Put value at expiration = Max(0, X - ST) = 102 - 100 = $2. The premium is not part of 'value'. Choice A (-$3) is the profit (2 - 5), which the question did not ask for."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text": "A put option and the underlying stock: Stock price at expiration $85; European put strike price $78. The value of the put option to the option seller at expiration is:",
        "options": [
            "-$7.",
            "$0.",
            "$7."
        ],
        "correctAnswer": 1,
        "explanation": "[ADDED BY CLAUDE, not in book] The seller's payoff is -Max(0, X - ST) = -Max(0, 78 - 85) = $0. The put is out of the money, so it expires worthless and the seller owes nothing."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text": "All else being equal, if the price of the underlying at expiration exceeds the exercise price, the option value at expiration for the seller of a put most likely is:",
        "options": [
            "less than the option value at expiration for the seller of a call.",
            "equal to the option value at expiration for the seller of a call.",
            "greater than the option value at expiration for the seller of a call."
        ],
        "correctAnswer": 2,
        "explanation": "[ADDED BY CLAUDE, not in book] If ST > X, the put expires worthless, so the put seller's value is $0. The call is in the money, so the call seller's value is -(ST - X), which is negative. $0 is greater than a negative number."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text": "An investor gathers the following information about a European put option and its underlying: Exercise price $29; Option purchase price $2; Spot price at the time of the option purchase $28. If the price of the underlying at expiration is $27, the profit for a buyer of the put is:",
        "options": [
            "-$1.",
            "$0.",
            "$2."
        ],
        "correctAnswer": 1,
        "explanation": "Book text (this is the feedback shown for the wrong choice C): Incorrect because it represents value or payoff at expiration to the put buyer, not profit for the put buyer. The value of payoff is pT = Max(0, X - ST), where pT is the value of the put option at expiration, X is the exercise price of the option, and ST is the price of the underlying at expiration. Therefore, pT = Max(0, $29 - $27) = $2. This is not the profit, which is $0, as described in the response rationale for the correct answer."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text": "A call option has the following characteristics: Value of underlying at expiration $2,020; Exercise price $2,100; Call premium $80. The profit to the call seller is closest to:",
        "options": [
            "-$80.",
            "$0.",
            "$80."
        ],
        "correctAnswer": 2,
        "explanation": "[ADDED BY CLAUDE, not in book] ST = 2,020 is below X = 2,100, so the call expires worthless and the seller pays nothing at expiration. The seller keeps the $80 premium, so profit = +$80."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text": "Which of the following is most likely an example of a contingent claim? A(n):",
        "options": [
            "swap contract",
            "option contract",
            "futures contract"
        ],
        "correctAnswer": 1,
        "explanation": "[ADDED BY CLAUDE, not in book] A contingent claim has a payoff that depends on the outcome of a future event (the underlying moving past the strike). Options are the contingent claims; swaps, futures and forwards are forward commitments, where both parties are obligated to transact."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text": "Forward contracts have:",
        "options": [
            "less counter-party risk than futures.",
            "the same level of counter-party risk as futures.",
            "more counter-party risk than futures."
        ],
        "correctAnswer": 2,
        "explanation": "[ADDED BY CLAUDE, not in book] Forwards are private OTC contracts with no clearinghouse guarantee, no margining, and no daily settlement, so credit risk builds up until expiration. Futures are cleared, with margin and daily mark-to-market, which lowers counterparty risk."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text": "The payoff to the seller of a forward contract at expiration is defined as the:",
        "options": [
            "forward price plus the value of the underlying at expiration.",
            "forward price minus the value of the underlying at expiration.",
            "value of the underlying at expiration minus the forward price."
        ],
        "correctAnswer": 1,
        "explanation": "[ADDED BY CLAUDE, not in book] The seller agrees to deliver at the forward price F0(T). If the underlying is worth ST at expiration, the seller's payoff is F0(T) - ST. Choice C (ST - F0(T)) is the buyer's payoff."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text": "Which of the following characteristics is most likely common to both forwards and swaps?",
        "options": [
            "Customization of contract terms",
            "Marked to the settlement price on a daily basis",
            "Multiple payments over the life of the contract"
        ],
        "correctAnswer": 0,
        "explanation": "[ADDED BY CLAUDE, not in book] Both forwards and swaps are OTC, privately negotiated contracts, so terms are customized. Daily marking to the settlement price is a futures feature. Multiple payments over the life is a swap feature; a forward has a single settlement at expiration."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text": "A forward commitment:",
        "options": [
            "has a linear payoff in relation to the underlying.",
            "involves an exchange of cash at contract initiation.",
            "provides one party the right to transact at a later date."
        ],
        "correctAnswer": 0,
        "explanation": "[ADDED BY CLAUDE, not in book] Forward commitments (forwards, futures, swaps) have linear, symmetric payoffs: gains and losses move one-for-one with the underlying. Typically no cash changes hands at initiation, and both parties are obligated (not given a right) to transact. Choice C describes an option."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text": "Which of the following types of derivatives has a non-linear payoff?",
        "options": [
            "Swaps",
            "Options",
            "Forwards"
        ],
        "correctAnswer": 1,
        "explanation": "[ADDED BY CLAUDE, not in book] An option's payoff is kinked at the strike (Max(0, ST - X) for a call), so it is non-linear. Swaps and forwards are forward commitments with linear payoffs."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM3 – Derivative Benefits, Risks, and Issuer and Investor Uses",
        "text": "The potential divergence between the cash flow timing of a derivative instrument versus its underlying best describes:",
        "options": [
            "basis risk.",
            "liquidity risk.",
            "systemic risk."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because liquidity risk is described as potential divergence between the cash flow timing of a derivative instrument versus an underlying or hedged transaction."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM3 – Derivative Benefits, Risks, and Issuer and Investor Uses",
        "text": "The potential divergence between the expected value of a derivative instrument versus an underlying or hedged transaction best describes:",
        "options": [
            "basis risk.",
            "liquidity risk.",
            "systemic risk."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because basis risk is the potential divergence between the expected value of a derivative instrument versus an underlying or hedged transaction."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM3 – Derivative Benefits, Risks, and Issuer and Investor Uses",
        "text": "A commodities producer selling its inventory forward in anticipation of lower prices in the future is an example of a:",
        "options": [
            "fair value hedge.",
            "cash flow hedge.",
            "net investment hedge."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because a fair value hedge designation applies when a derivative is deemed to offset the fluctuation in fair value of an asset or liability. A commodities producer might sell its inventory forward in anticipation of lower future prices."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM3 – Derivative Benefits, Risks, and Issuer and Investor Uses",
        "text": "Basis risk is best described as a(n):",
        "options": [
            "investor's inability to meet a margin call due to a lack of funds.",
            "potential divergence between the expected value of a derivative and its underlying.",
            "divergence in the cash flow timing of a derivative versus that of an underlying transaction."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because basis risk is the potential divergence between the expected value of a derivative instrument versus an underlying or hedged transaction."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM3 – Derivative Benefits, Risks, and Issuer and Investor Uses",
        "text": "With respect to hedge accounting designation types, a:",
        "options": [
            "foreign exchange forward to hedge forecasted sales is an example of a fair value hedge.",
            "commodity futures contract used to hedge inventory is an example of a cash flow hedge.",
            "currency forward to offset the foreign exchange risk of equity of a foreign operation is an example of a net investment hedge."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because currency forward designated as offsetting the FX risk of the equity of a foreign operation is an example of a net investment hedge."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM3 – Derivative Benefits, Risks, and Issuer and Investor Uses",
        "text": "A principal argument against using derivatives is that they:",
        "options": [
            "destabilize the financial system.",
            "are ineffective in transferring risk between parties.",
            "prevent price discovery of underlying assets in spot markets."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the two principal arguments against derivatives are that they are such speculative devices that they effectively permit legalized gambling and that they destabilize the financial system."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM4 – Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives",
        "text": "If the net cost of carry is zero, the forward price of a commodity is most likely:",
        "options": [
            "less than the commodity's spot price compounded at the risk-free rate over the life of the contract.",
            "equal to the commodity's spot price compounded at the risk-free rate over the life of the contract.",
            "greater than the commodity's spot price compounded at the risk-free rate over the life of the contract."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the forward price of an asset with benefits and/or costs is the spot price compounded at the risk-free rate over the life of the contract minus the future value of those benefits and costs. That is, F0(T) = S0(1+r)^T - (γ - θ)(1+r)^T, where the net cost of carry consists of the benefits, denoted as γ (dividends or interest plus convenience yield), minus the costs, denoted as θ. When net cost of carry is zero, the term (γ - θ) is zero, resulting in (γ - θ)(1+r)^T being zero. Then, F0(T) = S0(1+r)^T. Hence, the forward price of a commodity is equal to the commodity's spot price compounded at the risk-free rate over the life of the contract when the net cost of carry is zero."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM4 – Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives",
        "text": "All else being equal, the cost of carry on a dividend-paying stock is:",
        "options": [
            "lower than the cost of carry on a stock with no dividends.",
            "the same as the cost of carry on a stock with no dividends.",
            "higher than the cost of carry on a stock with no dividends."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the benefit of the dividend reduces the costs associated with carrying the stock. The cost of carry is the net of the costs and benefits related to owning an underlying asset for a specific period. The cost of carry is the opportunity cost plus other costs of ownership less benefits of ownership, and stock dividends or bond coupons are examples of cash flow benefits."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM4 – Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives",
        "text": "Which of the following asset classes is most likely to have a convenience yield?",
        "options": [
            "Commodities",
            "Interest rates",
            "Foreign exchange"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because convenience yield is a non-cash benefit associated with physical assets. In contrast to securities or cash stored electronically, commodities usually involve known costs associated with the storage, insurance, transportation, and potential spoilage (in the case of soft commodities) of these physical assets. A non-cash benefit of holding a physical commodity versus a derivative is known as a convenience yield."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM4 – Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives",
        "text": "The risk-free rate is 3% and the risk premium for an asset is 2%. If an investor creates a perfect hedge by combining the asset with a derivative, the combined position should earn:",
        "options": [
            "0%.",
            "3%.",
            "5%."
        ],
        "correctAnswer": 1,
        "explanation": "Book text (written as feedback on the wrong choice, 5%): Incorrect because when a long position in the underlying is combined with a short position in the derivative to produce a perfect hedge, all of the risk is eliminated and the position should earn the risk-free rate not 5 percent. This incorrect answer choice is equal to the risk-free rate of 3% plus the risk premium of 2%."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM4 – Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives",
        "text": "The rate typically used in derivative pricing models to discount expected payoffs is the:",
        "options": [
            "risk-free rate.",
            "risk-free rate plus a risk premium.",
            "risk-free rate multiplied by the risk-neutral probability."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because virtually all derivative pricing models ultimately take this form: discounting the expected payoff of the derivative at the risk-free rate."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM5 – Pricing and Valuation of Forward Contracts",
        "text": "A stock with a dividend yield of 3% is trading in the spot market at $50. If the annual risk-free rate is 5%, the 6-month forward price of the stock is closest to:",
        "options": [
            "$49.50.",
            "$50.50.",
            "$51.27."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the forward price is: F0(T) = S0 e^((r - i)T) where r is the risk-free rate, i is the dividend yield, and T is the time period. F0(T) = $50 e^((0.05 - 0.03) x 0.5) = $50.50251 = approx. $50.50."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM5 – Pricing and Valuation of Forward Contracts",
        "text": "Two-year and three-year government benchmark zero-coupon bonds are priced at 96 and 93 (per 100 face value), respectively. The implied one-year forward rate in two years' time is closest to:",
        "options": [
            "3.00%.",
            "3.23%.",
            "3.36%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because a discount factor may also be interpreted as the price of a zero-coupon cash flow or bond. The price equivalent of a zero rate is the present value of a currency unit on a future date, known as a discount factor. The discount factor for period i (DFi) is: DFi = 1/(1+zi)^i. Accordingly, the equivalent zero rate is: DF2 = 0.96 = 1/(1+z2)^2; and z2 = 2.0621%. DF3 = 0.93 = 1/(1+z3)^3; and z3 = 2.4485%. The implied forward rate between period A and period B is denoted as IFR(A,B-A). It is a forward rate on a bond that starts in period A and ends in period B. A general formula for the relationship between the two spot rates (zA, zB) and the implied forward rate: (1+zA)^A x (1+IFR(A,B-A))^(B-A) = (1+zB)^B. (1.020621)^2 x (1+IFR(2,1))^(3-2) = (1.024485)^3. (1+IFR(2,1)) = (1.024485)^3 / (1.020621)^2 = 1.075269 / 1.041667 = 1.032258. IFR(2,1) = 1.032258 - 1 = 3.2258% = approx. 3.23%."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM5 – Pricing and Valuation of Forward Contracts",
        "text": "A forward agreement has the following terms: Spot price at inception $275; Forward price $285; Number of shares 2,000. At expiration, if the spot price is $282, the value to the seller is:",
        "options": [
            "-$6,000.",
            "$6,000.",
            "$14,000."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the value at expiration for the seller: = F0(T) - ST = $285 - $282 = $3. Hence the total value is $3 x 2,000 shares = $6,000."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM5 – Pricing and Valuation of Forward Contracts",
        "text": "An investor observes that the price of an underlying asset is $20. The investor immediately enters into forward contract to purchase the underlying asset in one year at a price of $10. At contract initiation, the value of the forward contract is closest to:",
        "options": [
            "$0.",
            "$10.",
            "$30."
        ],
        "correctAnswer": 0,
        "explanation": "[ADDED BY CLAUDE, not in book] Book key is A. Reasoning behind it: a forward contract is set up so that its value at initiation is zero (the forward price is chosen so that no cash changes hands). The value of a long forward at time t is St - F0(T)/(1+r)^(T-t), which is zero at initiation only when F0(T) = S0(1+r)^T."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM5 – Pricing and Valuation of Forward Contracts",
        "text": "The spot price of an asset is $70.00. If the annual risk-free rate is 2.50%, the 9-month forward price is closest to:",
        "options": [
            "$68.72.",
            "$71.31.",
            "$71.75."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the forward price is the spot price compounded at the risk-free rate over the life of the contract or F0(T) = S0 (1+r)^T where S0 is the current spot price, r is the risk-free rate and T is time. Therefore, the 9-month forward price is equal to $70.00 (1+.025)^0.75 = $71.31."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM5 – Pricing and Valuation of Forward Contracts",
        "text": "Which of the following derivatives realize a gain as the market reference rate rises above the initial fixed rate?",
        "options": [
            "Long forward rate agreements only",
            "Short interest rate futures contracts only",
            "Both long forward rate agreements and short interest rate futures contracts"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because realizing a gain on the FRA contract as rates rise. Note that this would be equivalent to taking a short position on a CNY MRR futures contract if one were available. A long FRA (i.e., FRA floating-rate receiver (fixed-rate payer) position realizes a gain as MRR rises. A short futures contract price is based on (100 - yield), which gains as yield-to-maturity (MRR) rises."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM6 – Pricing and Valuation of Futures Contracts",
        "text": "An analyst gathers: the current spot price of crude oil is $120 per barrel; the risk-free rate is 3% with annual compounding; a futures contract has 182 days until settlement; the storage cost is $5 per barrel, payable at the end of the futures contract. Based on 365 days per year, the futures price per barrel of crude oil is closest to:",
        "options": [
            "$126.78.",
            "$126.86.",
            "$126.93."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the futures price for a commodity with known storage cost amounts may be determined as: f0(T) = [S0 + PV0(C)] x (1+r)^T. PV0(C) = $5 x (1+3%)^(-182/365). f0(T) = [$120 + $5 x (1+3%)^(-182/365)] x (1+3%)^(182/365) = $126.781768 = approx. $126.78."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM6 – Pricing and Valuation of Futures Contracts",
        "text": "Which of the following interest rate derivatives most likely has the largest convexity bias?",
        "options": [
            "Forward rate agreement on a 1-month market reference rate",
            "Forward rate agreement on a 3-month market reference rate",
            "Interest rate futures contract on a 3-month market reference rate"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the discounting feature of the FRA, which is not present in the futures contract, leads to a convexity bias that is greater for longer discounting periods. Since the length of the discounting period depends on the maturity of the underlying market reference rate, 3-month market reference rate results in a longer discounting period than the 1-month rate."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM6 – Pricing and Valuation of Futures Contracts",
        "text": "A futures contract's:",
        "options": [
            "mark-to-market is not settled until maturity.",
            "price remains fixed until the contract matures.",
            "variation margin reduces counterparty credit risk."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the daily settlement mechanism resets the futures MTM to zero, and variation margin is exchanged to settle the difference, reducing counterparty credit risk."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM6 – Pricing and Valuation of Futures Contracts",
        "text": "The differential between forward and futures prices is determined by which of the following?",
        "options": [
            "Interest rate volatility only",
            "The correlation between futures prices and interest rates only",
            "Both interest rate volatility and the correlation between futures prices and interest rates"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the different patterns of cash flows for forwards and futures can lead to a difference in the pricing of forwards versus futures. Forward and futures prices are identical under certain conditions, namely: if interest rates are constant, or if futures prices and interest rates are uncorrelated. On the other hand, violations of these assumptions can give rise to differences in pricing between these two contracts. For example, if futures prices are positively correlated with interest rates, long futures contracts are more attractive than long forward positions for the same underlying and maturity. The reason is because rising prices lead to futures profits that are reinvested in periods of rising interest rates, and falling prices lead to losses that occur in periods of falling interest rates. The price differential will also vary with the volatility of interest rates. Therefore, the differential between forward and futures prices is determined by both interest rate volatility and the correlation between futures prices and interest rates."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM6 – Pricing and Valuation of Futures Contracts",
        "text": "All else being equal, the price of a forward contract is most likely higher than the price of a futures contract if interest rates are:",
        "options": [
            "negatively correlated with futures prices.",
            "uncorrelated with futures prices.",
            "positively correlated with futures prices."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because a negative correlation between futures prices and interest rates leads to forwards being more desirable than futures to the long position. The reason is that rising prices lead to futures profits that are reinvested in periods of falling interest rates, and falling prices lead to losses that occur in periods of rising interest rates. It is far better to receive all cash flows at expiration under such conditions than to receive them in the interim periods. This condition makes forwards more attractive than futures. The more desirable contract will tend to have the higher price. Therefore, the price of the forward contract is higher than the price of the futures contract on the same underlying when interest rates are negatively correlated with futures prices."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM7 – Pricing and Valuation of Interest Rates and Other Swaps",
        "text": "A $10 million interest rate swap with annual payments has a fixed swap rate of 1.95%. The implied forward rates are: Year 1 = 0.50%; Year 2 = 1.15%; Year 3 = 1.35%. The periodic settlement value in Year 3 for the fixed-rate payer is expected to be closest to:",
        "options": [
            "-$95,000.",
            "-$60,000.",
            "$60,000."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the periodic settlement value = (MRR - sN) x Notional amount x Period. The market reference rate (MMR) for Year 3 is 1.35%, thus: = (0.0135 - 0.0195) x $10,000,000 x 1 = -$60,000."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM7 – Pricing and Valuation of Interest Rates and Other Swaps",
        "text": "A series of forward rate agreements and an interest rate swap contract covering the same periods and using the same market reference rate will most likely have the same:",
        "options": [
            "fixed rates.",
            "cash flows upfront.",
            "settlement cash flows."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because similarities between interest rate forwards and swaps include the symmetric payoff profile and the fact that no cash flow is exchanged upfront."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM7 – Pricing and Valuation of Interest Rates and Other Swaps",
        "text": "From the fixed-rate receiver's perspective, if the market reference rate increases, the value of a swap contract:",
        "options": [
            "decreases.",
            "stays the same.",
            "increases."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the fixed-rate receiver pays the market reference rate and receives the par swap par rate. If the market reference rate increases, they are paying more and the value of the contract decreases to them. Another interpretation of an interest rate swap is that the fixed-rate payer (floating-rate receiver) is long a floating-rate note (FRN) priced at the MRR and short a fixed-rate bond with a coupon equal to the fixed swap rate. Similarly, the fixed-rate receiver (floating-rate payer) is long a fixed-rate bond with a coupon equal to the swap rate and short a floating-rate note priced at the MRR. A rise in the expected forward rates after inception will increase the present value of floating payments, while the fixed-swap rate will remain the same."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM7 – Pricing and Valuation of Interest Rates and Other Swaps",
        "text": "A swap is most likely similar to a series of forward contracts when:",
        "options": [
            "all forward contracts are created with the combined value equal to zero.",
            "all forward contracts are entered into at the price created in the forward market.",
            "the value of the long forward contracts are matched with the value of the short forward contracts at each swap payment date."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because, in a swap, each forward contract will be created at the fixed price that corresponds to the fixed price of a swap of the same maturity with payments made at the same dates as the series of forward contracts. That means that some of the forward contracts would have positive values and some would have negative values, but their combined values would equal zero."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM8 – Pricing and Valuation of Options",
        "text": "An American put has a strike price of ¥5,000 and expires in one year. The current price of the underlying is ¥4,200 and the risk-free rate is 2%. The maximum value of this put is:",
        "options": [
            "¥800.",
            "¥4,900.",
            "¥5,000."
        ],
        "correctAnswer": 2,
        "explanation": "[ADDED BY CLAUDE, not in book] The most a put can ever pay is if the underlying falls to zero, so its upper bound is the exercise price X. For an American put, which can be exercised at any time, that bound is X itself (¥5,000). For a European put the bound would be PV of X. The current price and the interest rate are distractors."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM8 – Pricing and Valuation of Options",
        "text": "All, else held equal, the value of a European call option is best characterized as having a:",
        "options": [
            "negative relationship with the price of the underlying.",
            "negative relationship with the volatility of the underlying.",
            "positive relationship with the time to expiration."
        ],
        "correctAnswer": 2,
        "explanation": "Correct. The value of a European call option is directly related to the time to expiration. That is, all else held equal, the value of a European call option is higher the longer the time to expiration."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM8 – Pricing and Valuation of Options",
        "text": "The upper bound of a call value is the:",
        "options": [
            "underlying's price.",
            "underlying's price plus the present value of its exercise price or zero, whichever is greater.",
            "underlying's price minus the present value of its exercise price or zero, whichever is greater."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the upper no-arbitrage bound of a call value is the underlying's spot price."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM8 – Pricing and Valuation of Options",
        "text": "If the price of the underlying is $57, which of the following long option positions is out of the money? A:",
        "options": [
            "put with a strike price of $60",
            "put with a strike price of $50",
            "call with a strike price of $50"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because when the underlying has not reached the exercise price (currently lower for a call, higher for a put), the option is said to be out-of-the-money. In this case, as the underlying price of $57 is higher than the strike price of $50, the put is out of the money."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM8 – Pricing and Valuation of Options",
        "text": "A put option with the greatest moneyness has a strike price:",
        "options": [
            "less than the price of the underlying.",
            "equal to the price of the underlying.",
            "greater than the price of the underlying."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because when the underlying is beyond the exercise price in the appropriate direction (higher for a call, lower for a put), the option is said to be in-the-money. In addition, for puts to expire in-the-money, the value of the underlying must fall below the exercise price. The higher the exercise price, the better chance the underlying has of getting below it. Likewise, if the value of the underlying does fall below the exercise price, the higher the exercise price, the greater the payoff. So, if X is higher, ST will be below it more often, and if ST is less than X, the payoff of X - ST is greater, the higher is X for whatever value of ST occurs. Therefore, a put option with the greatest moneyness has a strike price greater than the price of the underlying."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM8 – Pricing and Valuation of Options",
        "text": "Which of the following European options has the greatest value at expiration? A:",
        "options": [
            "call with an exercise price of 72 and an underlying priced at 83",
            "call with an exercise price of 83 and an underlying priced at 70",
            "put with an exercise price of 70 and an underlying priced at 83"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the value of the call option at expiration is the greater of either zero or the underlying price at expiration minus the exercise price, which is typically written as: cT = Max(0, ST - X), where cT = call option price at expiration and ST = underlying price at expiration. Therefore, a call option with an exercise price of 72 and an underlying priced at 83 will have a value: cT = Max(0, 83 - 72) = 11."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM8 – Pricing and Valuation of Options",
        "text": "All else being equal, if the exercise values of a European call option and a European put option on the same underlying are equal, both options must be:",
        "options": [
            "in-the-money options.",
            "at-the-money options.",
            "out-of-the-money options."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the value of a European call at expiration is the exercise value, which is the greater of zero or the value of the underlying minus the exercise price. And the value of a European put at expiration is the exercise value, which is the greater of zero or the exercise price minus the value of the underlying. This means if the call option is in-the-money (out-of-the-money), the put option of the same strike will be out-of-the-money (in-the-money). That is, if the exercise value of a call (put) option is positive, the exercise value of a put (call) option will be zero. But when the underlying is precisely at the exercise price (the option is said to be at-the-money), the exercise value of a European call and a European put will the same, which is zero. Therefore, all else being equal, if the exercise values of a European call option and a European put option are the same, then the European call and the European put must be both at-the-money options."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM8 – Pricing and Valuation of Options",
        "text": "The value of a long position in a European put option is directly related to the:",
        "options": [
            "exercise price.",
            "risk-free interest rate.",
            "value of the underlying."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the value of a European put option is directly related to the exercise price."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM8 – Pricing and Valuation of Options",
        "text": "The current price of the underlying is $7.40 and the annual risk-free rate is 6%. The minimum price for a 6-month call option with a strike price of $7.50 is closest to:",
        "options": [
            "$0.00.",
            "$0.12.",
            "$0.31."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the price for a European call option is known to satisfy the formula c0 >= Max[0, S0 - X/(1+r)^T] where c0 is the current price of the European call option, S0 is the current stock price, X is the strike price, r is the risk-free interest rate and T is time. Therefore the minimum price is equal to Max[0, $7.40 - $7.50/(1.06)^(6/12)] = Max[0, $7.40 - $7.28] = Max[0, $0.12] = $0.12."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM8 – Pricing and Valuation of Options",
        "text": "The upper bound of a put value is the:",
        "options": [
            "exercise price.",
            "price of the underlying.",
            "present value of the exercise price minus the spot price."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the exercise price, X, therefore represents the upper bound on the put value."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM8 – Pricing and Valuation of Options",
        "text": "The value of a European call option is inversely related to the:",
        "options": [
            "exercise price.",
            "time to expiration.",
            "risk-free interest rate."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the value of a European call option is inversely related to the exercise price."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM8 – Pricing and Valuation of Options",
        "text": "All else being equal, if the risk-free rate increases, the value of a European put option:",
        "options": [
            "decreases.",
            "remains the same.",
            "increases."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the value of a European put is inversely related to the risk-free interest rate. Therefore, an increase in the risk-free rate decreases the value of a European put option."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM8 – Pricing and Valuation of Options",
        "text": "For a European call option with one month until expiration, if the spot price is below the exercise price, the call option most likely has:",
        "options": [
            "positive time value only.",
            "positive intrinsic value only.",
            "both positive time value and positive intrinsic value."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because a European call option with two months until expiration will typically have positive time value, where time value reflects the value of the uncertainty that arises from the volatility in the underlying. In addition, cT = Max (0, ST - X) or intrinsic value equals the greater of zero or the value of the underlying minus exercise price. The call option is out-of-the-money and therefore, has zero intrinsic value."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM9 – Option Replication Using Put–Call Parity",
        "text": "An analyst gathers: Call price $10; Stock price $40; Exercise price $60; Interest rate 3%; Time to expiry 1 year. According to put-call parity, the price of the put is closest to:",
        "options": [
            "$28.25.",
            "$30.00.",
            "$108.25."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because S0 + p0 = c0 + X/(1+r)^T. This relationship is known as put-call parity. Here S0 is the spot price, p0 is the put premium, X is the strike price and r is the interest rate. S0 + p0 = c0 + X/(1+r)^T; 40 + p0 = 10 + 60/1.03; p0 = 10 + 60/1.03 - 40 = 28.25242718 = 28.25"
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM9 – Option Replication Using Put–Call Parity",
        "text": "All else being equal, the cost of a fiduciary call must be:",
        "options": [
            "less than the cost of a synthetic protective put.",
            "equal to the cost of a synthetic protective put.",
            "greater than the cost of a synthetic protective put."
        ],
        "correctAnswer": 1,
        "explanation": "Book text (labelled 'Incorrect' in the book although B is the key): Incorrect because the cost of the fiduciary call must equal the cost of the synthetic protective put, giving us what is referred to as put-call-forward parity."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM9 – Option Replication Using Put–Call Parity",
        "text": "Based on put-call parity, the payoff on a short underlying position is equivalent to the payoff on a portfolio consisting of a:",
        "options": [
            "short call, a long put, and a long bond.",
            "short call, a long put, and a short bond.",
            "long call, a short put, and a short bond."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the put-call parity relationship implies that a long underlying can be mimicked as follows: S0 = c0 - p0 + X/(1+r)^T. This implies that a short underlying position is equivalent to: -S0 = -c0 + p0 - X/(1+r)^T, that is, a short call, a long put, and a short bond."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM9 – Option Replication Using Put–Call Parity",
        "text": "According to put-call-forward parity, a trader can create a synthetic short position in a risk-free bond by setting up a long position in a call option along with a:",
        "options": [
            "short position in a forward contract and a long position in a put.",
            "long position in a forward contract and a short position in a put.",
            "short position in a forward contract and a short position in a put."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because combining the synthetic asset with the put-call parity relationship - so, substituting the present value of F0(T) for S0 - we have what is referred to as put-call forward parity: F0(T)(1+r)^-T + p0 = c0 + X(1+r)^-T, where F0(T)(1+r)^-T is the present value of F0(T) discounted at the risk-free rate, p0 is the price of the put option on the underlying at t=0, c0 is the price of the call option on the underlying at t=0, X(1+r)^-T is a risk free bond that pays the amount of the exercise price X at t=T. In other words, under put-call parity, at t = 0 the price of the long underlying asset plus the long put must equal the price of the long call plus the risk-free asset. Rearranging the formula yields: -X(1+r)^-T = c0 - p0 - F0(T)(1+r)^-T. In other words, one can create a synthetic short position in a risk-free bond by going long a call, short a put, and short a forward contract."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM9 – Option Replication Using Put–Call Parity",
        "text": "According to put-call-forward parity, the payoff on a synthetic protective put is equivalent to the payoff on a portfolio consisting of:",
        "options": [
            "a long call and a long risk-free bond.",
            "a long call, a short forward contract and a long risk-free bond.",
            "a long put, a short forward contract and a short risk-free bond."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because recall our put-call parity discussion and assume that Investor A creates his protective put in a slightly different manner. Instead of buying the asset, he buys a forward contract and a risk-free bond in which the face value is the forward price. This strategy is a synthetic protective put. Because we showed that the fiduciary call is equivalent to the protective put, a fiduciary call has to be equivalent to a protective put with a forward contract. Therefore, the payoff on a synthetic protective put = the payoff on a fiduciary call; synthetic protective put = long risk-free bond + long forward contract + long put = long call + long risk-free bond."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM9 – Option Replication Using Put–Call Parity",
        "text": "According to put-call parity, the payoff of a long risk-free bond can be replicated synthetically by going:",
        "options": [
            "long an asset, long a put and long a call.",
            "long an asset, long a put and short a call.",
            "long an asset, short a put and short a call."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to put-call parity, X/(1+r)^T = S0 + p0 - c0, long bond = long asset, long put, short call. Therefore, the payoff of a long risk-free bond can be synthetically created by going long an asset, long a put and short a call."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM9 – Option Replication Using Put–Call Parity",
        "text": "A fiduciary call is a strategy in which a trader purchases a call option:",
        "options": [
            "and takes a short position in the underlying asset.",
            "with funds received from selling short a zero coupon bond of the same maturity as the call option.",
            "along with a zero coupon bond of the same maturity as the call option and with a face value equal to the exercise price of the option."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because this combination of instruments is the precise definition of a fiduciary call. At time 0, this investor buys a call option on this asset with an exercise price of X that expires at T and a risk-free zero-coupon bond with a face value of X that matures at T. This strategy is sometimes known as a fiduciary call."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM9 – Option Replication Using Put–Call Parity",
        "text": "Which of the following is most accurate? Put-call-forward parity:",
        "options": [
            "assumes that the strike of the options is equal to the forward price of the underlying.",
            "is derived by equating the price of an at the money put to the price of an at the money call.",
            "assumes that the maturity of the put option, the call option, the forward and the bond are the same."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the put-call-forward parity equation is formed by comparing the maturity payoffs of synthetic protective put and a fiduciary call. It follows that maturity of all the components have to be the same. Because we showed that the fiduciary call is equivalent to the protective put, a fiduciary call has to be equivalent to a protective put with a forward contract. It follows that the cost of the fiduciary call must equal the cost of the synthetic protective put, giving us what is referred to as put-call-forward parity."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM9 – Option Replication Using Put–Call Parity",
        "text": "All else being equal, based on put-call-forward parity, the price of a put is higher than the price of a call when:",
        "options": [
            "the forward price of the underlying is lower than the exercise price.",
            "the forward price of the underlying is equal to the exercise price.",
            "the forward price of the underlying is higher than the exercise price."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because it follows that the cost of the fiduciary call must equal the cost of the synthetic protective put, giving us what is referred to as put-call-forward parity, F0(T)/(1+r)^T + p0 = c0 + X/(1+r)^T. Rearranging this equation results in: p0 - c0 = [X - F0(T)]/(1+r)^T. Based on this parity equation, p0 > c0 when X > F0(T)."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM9 – Option Replication Using Put–Call Parity",
        "text": "An analyst gathers: Put price $120; Forward price $110; Exercise price $100; Interest rate 2%; Time to expiry 1 year. According to put-call-forward parity, the price of the call is closest to:",
        "options": [
            "$127.84.",
            "$129.80.",
            ""
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the cost of the fiduciary call must equal the cost of the synthetic protective put, giving us what is referred to as put-call-forward parity, F0(T)/(1+r)^T + p0 = c0 + X/(1+r)^T. Here F0(T) is the forward price at expiration, X is the strike price and r is the interest rate, p0 is the put premium and c0 is the call premium. 110/1.02 + 120 = c0 + 100/1.02; 110/1.02 + 120 - 100/1.02 = c0; c0 = 129.803922 = 129.80"
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM9 – Option Replication Using Put–Call Parity",
        "text": "According to put-call parity, a long put option is equivalent to being:",
        "options": [
            "long a call, short the underlying asset, and long a risk-free bond.",
            "long a call, long the underlying asset, and short a risk-free bond.",
            "short a call, long the underlying asset, and long a risk-free bond."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the formula for put-call parity is S0 + p0 = c0 + X/(1+r)^T, where S0 is the stock price at time zero, p0 is the price of a put option at time zero, c0 is the price of a call option at time zero, X is the strike price, r is the risk-free rate, and T is time. By using the symbols and the signs in these versions of put-call parity, we can see several important interpretations. In the equations below, plus signs mean long and minus signs mean short: p0 = c0 - S0 + X/(1+r)^T => long put = long call, short asset, long bond."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM10 – Valuing a Derivative Using a One-Period Binomial Model",
        "text": "Which of the following factors affects the option price when using a binomial model? The:",
        "options": [
            "risk-free rate.",
            "level of investors' risk aversion.",
            "expected return of the underlying."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the value of the call option today, c0, is computed as the expected value of the option at expiration, c1u and c1d, discounted at the risk-free rate, r. Also, this no-arbitrage derivative value established separately from investor views on risk is referred to as risk-neutral pricing."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM10 – Valuing a Derivative Using a One-Period Binomial Model",
        "text": "An analyst gathers: Current price of underlying asset $16.0; End of period upward price $22.0; End of period downward price $12.0; Risk-free rate 4.0%. Using a one-period binomial model, the risk-neutral probability of a price increase is closest to:",
        "options": [
            "0.38.",
            "0.46.",
            "0.54."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the risk-neutral probability (pi) is the computed probability used in binomial option pricing by which the discounted weighted sum of expected values of the underlying, S1u = Ru S0 and S1d = Rd S0, equal the current option price. Specifically, this probability is computed using the risk-free rate and assumed up gross return and down gross return of the underlying as in Equation 7. pi = (1 + r - Rd) / (Ru - Rd). More specifically, pi is the risk-neutral probability of an increase in the underlying price to S1u = Ru S0, and (1 - pi) is that of a decrease, S1d = Rd S0. Thus, an increase from $16 to $22 or a decrease from $16 to $12 corresponds to: Ru = $22/$16 = 1.375 and Rd = $12/$16 = 0.75. Using the risk-neutral probability (pi) of a price increase: pi = (1 + 0.04 - 0.75) / (1.375 - 0.75) = 0.29/0.625 = 0.464 = approx. 0.46."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM10 – Valuing a Derivative Using a One-Period Binomial Model",
        "text": "All else being equal, if the up gross return increases in a one-period binomial model, the risk-neutral probability of an upward price movement of the asset will:",
        "options": [
            "decrease.",
            "remain the same.",
            "increase."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the risk-neutral probability (pi) is the computed probability used in binomial option pricing by which the discounted weighted sum of expected values of the underlying, S1u = Ru S0 and S1d = Rd S0, equal the current option price. Specifically, this probability is computed using the risk-free rate and assumed up gross return and down gross return of the underlying as in pi = (1 + r - Rd)/(Ru - Rd). So, if the up gross return increases in a one-period binomial model, the denominator will increase. Therefore, the risk-neutral probability of an upward price movement of the asset, (pi), decreases."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM10 – Valuing a Derivative Using a One-Period Binomial Model",
        "text": "An analyst collects: Current stock price €26; Gross return from an up move 1.10; Gross return from a down move 0.75; Call and put exercise price €22. Based on a one-period binomial pricing model, which of the following has the largest payoff?",
        "options": [
            "Put option following an up move.",
            "Put option following a down move.",
            "Call option following a down move."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the payoff of a put option following a down move is p1d = Max (0, X - S1d) where X is the exercise price and S1d is the price after a down move. In this case, S1d = €26(0.75) = €19.50. So, p1d = Max (0, €22 - €19.50) = €2.50, which is greater than the payoffs of other two responses."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Derivatives",
        "lm": "LM10 – Valuing a Derivative Using a One-Period Binomial Model",
        "text": "Risk-neutral pricing establishes no-arbitrage option values independent of the:",
        "options": [
            "spot price of the underlying.",
            "investor's views on the volatility of the underlying.",
            "future price of the underlying following an up or down move."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because this no-arbitrage derivative value established separately from investor views on risk is referred to as risk-neutral pricing. Volatility generally means risk because the expected price risk of the underlying, is known as implied volatility. Therefore, risk-neutral pricing establishes no-arbitrage option values independent of the investor views on the underlying's volatility."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM1 – The Firm and Market Structures",
        "text": "Firms operating under a monopolistic competition market structure most likely:",
        "options": [
            "have few competitors.",
            "benefit from high barriers to entry.",
            "sell products that are close substitutes for those offered by other firms."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because under monopolistic competition, the products offered by each seller are close substitutes for the products offered by other firms, and each firm tries to make its product look different."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM1 – The Firm and Market Structures",
        "text": "A market structure characterized by homogeneous/standardized product differentiation is best described as:",
        "options": [
            "monopoly.",
            "monopolistic competition.",
            "perfect competition and oligopoly."
        ],
        "correctAnswer": 2,
        "explanation": "Correct. Perfect competition and oligopoly are characterized by homogeneous/standardized product differentiation. Book table (market structure: degree of product differentiation): Perfect competition: Homogeneous/standardized; Monopolistic competition: Differentiated; Oligopoly: Homogeneous/standardized; Monopoly: Unique product."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM1 – The Firm and Market Structures",
        "text": "Which of the following statements about a downward-sloping long-run average cost (LRAC) curve is most accurate? A downward-sloping LRAC curve is representative of a firm experiencing:",
        "options": [
            "economies of scale.",
            "diseconomies of scale.",
            "decreasing levels of investment."
        ],
        "correctAnswer": 0,
        "explanation": "Correct. When the LRAC curve is downward sloping, it means the firm is producing units at lower average costs per unit as production levels rise. This situation represents economies of scale in production."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM1 – The Firm and Market Structures",
        "text": "In a perfectly competitive market, a firm's breakeven point is the minimum point of the:",
        "options": [
            "average total cost curve.",
            "average fixed cost curve.",
            "average variable cost curve."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because economists refer to the minimum AVC point as the shutdown point and the minimum ATC point as the breakeven point."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM1 – The Firm and Market Structures",
        "text": "In the long run, a monopolistically competitive firm:",
        "options": [
            "earns positive economic profits.",
            "faces a perfectly elastic demand curve.",
            "produces at a higher level of average cost than the minimum average cost."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because in the hybrid market of monopolistic competition, zero economic profit in long-run equilibrium resembles perfect competition. However, the long-run level of output, Q1, is less than Q2, which corresponds to the minimum average cost of production and would be the long-run level of output in a perfectly competitive market."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM1 – The Firm and Market Structures",
        "text": "In an oligopoly market, which of the following best describes the situation when firms have no incentive to deviate from their current pricing strategy based on the anticipated choices of competitors?",
        "options": [
            "The Nash equilibrium",
            "The Stackelberg model",
            "Pricing interdependence"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the Nash equilibrium is present when two or more participants in a non-cooperative game have no incentive to deviate from their respective equilibrium strategies after they have considered and anticipated their opponent's rational choices or strategies."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM1 – The Firm and Market Structures",
        "text": "In which of the following market structures does marginal revenue equal price?",
        "options": [
            "Oligopoly",
            "Monopoly",
            "Perfect competition"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because only in perfect competition does the marginal revenue equal price. In the remaining structures, price generally exceeds marginal revenue because a firm can sell more units only by reducing the per unit price."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM1 – The Firm and Market Structures",
        "text": "The perfectly competitive firm's supply curve is its long-run:",
        "options": [
            "marginal cost schedule.",
            "average revenue schedule.",
            "average total cost schedule."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the long-run marginal cost schedule is the perfectly competitive firm's supply curve."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM1 – The Firm and Market Structures",
        "text": "To calculate the Herfindahl-Hirschman index:",
        "options": [
            "add the market shares of the largest firms.",
            "add the market shares of the largest firms and then square the sum.",
            "square the market shares of the largest firms and then add the results."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because to avoid the known issues with concentration ratios, economists O.C. Herfindahl and A.O. Hirschman suggested an index where the market shares of the top N companies are first squared and then added."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM1 – The Firm and Market Structures",
        "text": "An analyst gathers the following information about three markets (number of sellers / non-price competition): Market 1: Many / None; Market 2: Few / Strong; Market 3: Many / Strong. Which market is most likely an oligopoly?",
        "options": [
            "Market 1",
            "Market 2",
            "Market 3"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because in an oligopoly market there are a small number of potential sellers and products are often highly differentiated through marketing, features, and other non-price strategies."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM1 – The Firm and Market Structures",
        "text": "Monopolistic competition is best characterized by:",
        "options": [
            "high barriers to entry and exit.",
            "a small number of buyers and sellers.",
            "product differentiation through non-price strategies."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because for a monopolistically competitive firm: suppliers differentiate their products through advertising and other non-price strategies."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM1 – The Firm and Market Structures",
        "text": "If a perfectly competitive industry becomes monopolistically competitive, each firm's long-run average total cost per unit sold will most likely:",
        "options": [
            "decrease.",
            "remain the same.",
            "increase."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because unlike long-run equilibrium in perfect competition, in the market of monopolistic competition, the equilibrium position is at a higher level of average cost than the level of output that minimizes average cost. Average cost does not reach its minimum until output level Q2 is achieved. Under perfect competition a product is produced at the efficient quantity (marginal revenue equals marginal cost) and average total cost is minimized. The demand faced by each firm is perfectly elastic (horizontal demand curve). However, under monopolistic competition the demand curve is downward sloping and the quantity produced (marginal revenue equals marginal cost) is not where average total cost is minimized. Thus, average total cost is lower under perfect competition."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM1 – The Firm and Market Structures",
        "text": "If a monopolistically competitive industry becomes perfectly competitive, each firm's long-run average total cost per unit sold will most likely:",
        "options": [
            "decrease.",
            "remain the same.",
            "increase."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because under perfect competition a product is produced at the efficient quantity (marginal revenue equals marginal cost) and the average total cost is minimized. The demand curve faced by each firm is perfectly elastic (horizontal demand curve). However, under monopolistic competition the demand curve is downward sloping and the quantity produced (marginal revenue equals marginal cost) is not where average total cost is minimized. Thus, average total cost is lower under perfect competition."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM1 – The Firm and Market Structures",
        "text": "In the short run, the shutdown point of a company with a total variable cost of $3 million and a total fixed cost of $5 million is when total revenue declines to:",
        "options": [
            "$3 million.",
            "$5 million.",
            "$8 million."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because as long as the firm's revenues cover at least its variable cost, the firm is better off continuing to operate. If price is greater than average variable cost (AVC), the firm is covering not only all of its variable cost but also a portion of fixed cost. Also, average revenue (AR) is revenue per unit."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM2 – Understanding Business Cycles",
        "text": "Which of the following is most likely a lagging economic indicator?",
        "options": [
            "Inventory-sales ratio",
            "S&P 500 Stock Index",
            "Manufacturers' new orders for consumer goods and materials"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because inventories accumulate as sales initially decline and then, once a business adjusts its ordering, become depleted as sales pick up, so this ratio tends to lag the cycle."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM2 – Understanding Business Cycles",
        "text": "During the recovery phase of the business cycle, inflation most likely:",
        "options": [
            "decelerates but with a lag.",
            "remains moderate.",
            "further accelerates."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because, in the 'recovery' phase, inflation remains moderate."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM2 – Understanding Business Cycles",
        "text": "Which of the following indexes is most likely considered a leading economic indicator?",
        "options": [
            "Consumer price index",
            "Broad stock market index",
            "Industrial production index"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because as a leading economic indicator, a positive change in the S&P 500 Index is supposed to lead (come before) an increase in aggregate economic activity. An increase in the S&P 500 would be positive for future economic growth, all else equal. Additionally, the Euro Stoxx Equity Index is considered a leading indicator in the Eurozone."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM2 – Understanding Business Cycles",
        "text": "The interest rate spread between 10-year treasury yields and overnight borrowing rates most likely:",
        "options": [
            "is a lagging economic indicator.",
            "decreases when the market expects an economic downturn.",
            "increases as the market expects future short-term interest rates to decrease."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because long-term yields express market expectations about the direction of short-term interest rates, and rates ultimately follow the economic cycle up and down, a wider spread, by anticipating short rate increases, also anticipates an economic upswing. Conversely, a narrower spread, by anticipating short rate decreases, also anticipates an economic downturn."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM2 – Understanding Business Cycles",
        "text": "Which of the following is most likely a coincident indicator of economic activity?",
        "options": [
            "Average duration of unemployment",
            "Average weekly hours, manufacturing",
            "Employees on non-agricultural payrolls"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because once recession or recovery is clear, businesses adjust their full-time payrolls. Non-agricultural payrolls and manufacturing and trade sales are coincident indicators."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM2 – Understanding Business Cycles",
        "text": "The business cycle phase that is characterized by slowing growth in economic activity is the:",
        "options": [
            "slowdown.",
            "expansion.",
            "contraction."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because in the slowdown phase, activity measures are above average but decelerating. Moving to below-average rates of growth."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM3 – Fiscal Policy",
        "text": "Which of the following changes most likely reflects a discretionary fiscal policy action?",
        "options": [
            "A decrease in corporate tax revenues due to lower corporate profitability",
            "An increase in government expenditures due to new infrastructure projects",
            "An increase in payments of unemployment benefits due to increasing unemployment"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because in addition to these automatic adjustments, governments also use discretionary fiscal adjustments to influence aggregate demand. These will involve tax changes and/or spending cuts or increase usually with the aim of stabilizing the economy. An increase in government expenditures due to new infrastructure projects is a discretionary fiscal policy action because new public spending on social goods and infrastructure, such as hospitals and schools, boosting personal incomes with the objective of raising aggregate demand."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM3 – Fiscal Policy",
        "text": "With respect to fiscal policy, transfer payments are best described as:",
        "options": [
            "welfare payments.",
            "infrastructure spending.",
            "spending on recurring goods and services."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because transfer payments are welfare payments made through the social security system, and, depending on the country, comprise payments for state pensions, housing benefits, tax credits and income support for poorer families, child benefits, unemployment benefits and job search allowances."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM3 – Fiscal Policy",
        "text": "A decline in tax revenues due to a recession is best described as an example of a(n):",
        "options": [
            "automatic stabilizer.",
            "expansionary fiscal policy.",
            "contractionary fiscal policy."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because falling tax revenues due to a recession is an example of automatic stabilizer, not a discretionary fiscal policy. Automatic stabilizers will lead to changes in the budget deficit unrelated to fiscal policy changes; a recession will cause tax revenues to fall and the budget deficit to rise."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM3 – Fiscal Policy",
        "text": "Which of the following is an expansionary fiscal policy?",
        "options": [
            "An increase in sales taxes",
            "A decrease in interest rates",
            "An increase in public spending on infrastructure"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because there are a number of ways that fiscal policy can influence aggregate demand. Expansionary policy could take the form of new public spending on social goods and infrastructure."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM3 – Fiscal Policy",
        "text": "Which of the following fiscal policy actions is most likely contractionary?",
        "options": [
            "Increasing taxes and decreasing spending",
            "Decreasing taxes and increasing spending",
            "Decreasing taxes and decreasing spending"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because increasing taxes and decreasing spending are indicative of a contractionary fiscal policy. When an economy has full employment and wages and prices are rising too fast - then government spending may be reduced and taxes raised (contractionary fiscal policy)."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM3 – Fiscal Policy",
        "text": "A fiscal policy tool that can immediately influence spending is most likely:",
        "options": [
            "indirect taxes.",
            "exchange rate targeting.",
            "capital expenditure plans."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because indirect taxes can be adjusted almost immediately after they are announced and can influence spending behavior instantly and generate revenue for the government at little or no cost to the government."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM3 – Fiscal Policy",
        "text": "An objective of fiscal policy is to:",
        "options": [
            "maintain price stability.",
            "redistribute the wealth within an economy.",
            "influence the quantity of credit in an economy."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because fiscal policy can be used to redistribute income and wealth."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM3 – Fiscal Policy",
        "text": "Which of the following government actions is most likely an expansionary fiscal policy?",
        "options": [
            "Increasing sales tax rate",
            "Decreasing savings tax rate",
            "Decreasing infrastructure spending"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because a decrease in taxes, including tax on savings, would be expansionary fiscal policy. For example, an expansionary policy could take the form of cuts in tax rates on personal savings to raise disposable income for those with savings, with the objective of raising consumer demand."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM3 – Fiscal Policy",
        "text": "An argument against being concerned about high national debt levels is that:",
        "options": [
            "the debt is owed internally to fellow citizens.",
            "government borrowing leads to higher private sector investment.",
            "the central bank can print money to finance a government deficit."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because this internally owed debt may overstate the problem. The arguments against being concerned about national debt (relative to GDP) include the following: The scale of the problem may be overstated because the debt is owed internally to fellow citizens."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM4 – Monetary Policy",
        "text": "Monetary policy is used to:",
        "options": [
            "promote stable growth.",
            "redistribute income and wealth.",
            "determine taxation and spending."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the overarching goal of both monetary and fiscal policy is normally the creation of an economic environment where growth is stable and positive and inflation is stable and low."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM4 – Monetary Policy",
        "text": "If an economy has a long-term growth potential of 2% per year and the central bank's inflation target is 3% per year, the neutral rate of interest is most likely:",
        "options": [
            "1%.",
            "3%.",
            "5%."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the Neutral rate = Trend growth + Inflation target = 2% + 3% = 5%."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM4 – Monetary Policy",
        "text": "The inflation target of an effective central bank is most likely:",
        "options": [
            "equal to zero to avoid the risk of deflation.",
            "sufficiently below zero to maintain high credibility.",
            "low enough to ensure a significant degree of price stability."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because an inflation-targeting framework normally has a clear, symmetric and forward-looking medium-term inflation target, sufficiently above 0 percent to avoid the risk of deflation but low enough to ensure a significant degree of price stability."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM4 – Monetary Policy",
        "text": "Which of the following is most likely to limit the effectiveness of monetary policy?",
        "options": [
            "A liquidity trap",
            "The crowding out effect",
            "A time lag to implement government spending"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because there may be occasions where the demand for money becomes infinitely elastic so that further injections of money into the economy will not serve to further lower interest rates or affect real activity. This is known as a liquidity trap. In this extreme circumstance, monetary policy can become completely ineffective."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM4 – Monetary Policy",
        "text": "When a central bank sells government bonds to commercial banks, broad money growth:",
        "options": [
            "decreases.",
            "remains the same.",
            "increases."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because when a central bank sells government bonds to a commercial bank the reserves of commercial banks decline, reducing their capacity to make loans (i.e., create credit) to households and corporations and thus causing broad money growth to decline through the money multiplier mechanism."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM4 – Monetary Policy",
        "text": "With respect to conventional monetary policy, combating inflation is most likely:",
        "options": [
            "less difficult than combating deflation.",
            "equally difficult as combating deflation.",
            "more difficult than combating deflation."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because deflation is more difficult for conventional monetary policy to deal with than inflation. This is because once the monetary authority has cut nominal interest rates to zero to stimulate the economy, it cannot cut them any further."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM4 – Monetary Policy",
        "text": "Fiat money:",
        "options": [
            "is not currently used in any major economy.",
            "can be exchanged for a precious metal at the country's central bank.",
            "derives its value via government decree and because people accept it for payment."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because fiat money derives its value via government decree and because people accept it for payment of goods and services and for debt repayment."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM4 – Monetary Policy",
        "text": "Which of the following is a limitation of monetary policy?",
        "options": [
            "The presence of automatic stabilizers in the economy",
            "The ineffectiveness of interest rate adjustments in deflationary environments",
            "The uneven distribution of income and wealth among different segments of the population"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because this is a limitation of monetary policy. The limitations of monetary policy include problems in the transmission mechanism and the relative ineffectiveness of interest rate adjustment as a policy tool in deflationary environments."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM4 – Monetary Policy",
        "text": "To be effective in targeting inflation a central bank is least likely to need:",
        "options": [
            "government oversight.",
            "transparency of decisions.",
            "credibility with market participants."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because an inflation-targeting framework normally has an independent and credible central bank. Such an independent central back does not need government oversight."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM4 – Monetary Policy",
        "text": "An analyst gathers the following data about an economy: Real trend growth rate 0.5%; Central bank's policy rate 1.5%. If monetary policy is contractionary, the central bank's inflation target is:",
        "options": [
            "less than 1.0%.",
            "equal to 1.0%.",
            "greater than 1.0%."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because when policy rates are above the neutral rate, monetary policy is contractionary; when they are below the neutral rate, monetary policy is expansionary. The calculation of the neutral rate is as follows: Neutral rate = Trend growth + Inflation target. Therefore, if monetary policy is contractionary then the policy rate (1.5%) must be greater than the neutral rate. Hence the long-term inflation rate must be less than 1.0% in order for the policy rate to be greater than the neutral rate."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM4 – Monetary Policy",
        "text": "To reduce inflation, a central bank most likely implements an interest rate policy that is:",
        "options": [
            "contractionary.",
            "neutral.",
            "expansionary."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because when central banks believe that economic activity is likely to lead to an increase in inflation, they might increase interest rates, thereby reducing liquidity. In these cases, market analysts describe such actions as contractionary."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM4 – Monetary Policy",
        "text": "Under which of the following conditions is monetary policy most effective? When the:",
        "options": [
            "demand for money is infinitely elastic.",
            "central bank targets an exchange rate.",
            "risk of inflation is greater than deflation."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because deflation is more problematic for the central bank than inflation. Deflation is a pervasive and persistent fall in a general price index and is more difficult for conventional monetary policy to deal with than inflation. This is because cutting nominal interest rates much below zero to stimulate the economy is difficult. It is at this point that the economic conditions for a liquidity trap arise."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM4 – Monetary Policy",
        "text": "Which of the following monetary policy actions is most likely considered expansionary? The central bank:",
        "options": [
            "acts as the lender in a repurchase agreement.",
            "sells government bonds to commercial banks.",
            "raises reserve requirements of commercial banks."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because if the central bank wishes to increase the supply of money, it might buy bonds (usually government bonds) from the banks, with an agreement to sell them back at some time in the future. This transaction is known as a repurchase agreement. The lender in a repurchase agreement is the party that initially buys the bonds and agrees to sell them back at a later point in time. By purchasing bonds from banks, the central bank is increasing the money supply, or increasing liquidity, which is expansionary."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM4 – Monetary Policy",
        "text": "The overarching objective of most central banks is to maintain:",
        "options": [
            "price stability.",
            "full employment.",
            "the government's ability to service its debt."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because there is one overarching objective that most central banks seem to acknowledge explicitly, and that is the objective of maintaining price stability."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM4 – Monetary Policy",
        "text": "All else being equal, and assuming that wages and prices of goods are rigid, a decrease in government spending and decreasing interest rates most likely reflect:",
        "options": [
            "easy fiscal policy and easy monetary policy.",
            "tight fiscal policy and easy monetary policy.",
            "easy fiscal policy and tight monetary policy."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because it's a tight fiscal policy/easy monetary policy: if a fiscal contraction is accompanied by expansionary monetary policy and low interest rates, then the private sector will be stimulated and will rise as a share of GDP, while the public sector will shrink. Falling government spending leads to a drop in aggregate demand or contraction."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM4 – Monetary Policy",
        "text": "A role of most central banks is to:",
        "options": [
            "set income tax rates.",
            "decide on government expenditures.",
            "regulate their country's payments system."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because central banks play several key roles in modern economies. Generally, a central bank is the regulator and supervisor of the payments system."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM4 – Monetary Policy",
        "text": "If contractionary fiscal policy and expansionary monetary policy have offsetting effects on GDP, the public sector's share of GDP will most likely:",
        "options": [
            "decrease.",
            "remain the same.",
            "increase."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because if a fiscal contraction is accompanied by expansionary monetary policy and low interest rates, then the private sector will be stimulated and will rise as a share of GDP, while the public sector will shrink."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM5 – Introduction to Geopolitics",
        "text": "With respect to motivations for globalization, which of the following is best characterized as an intrinsic gain?",
        "options": [
            "Increased supply chain efficiency",
            "Accelerated productivity from learning new methods",
            "Access to resources that are not readily available in the home country"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because intrinsic gain is a side effect or consequence of an activity that generates a benefit beyond profit itself. It is difficult to measure but contributes to globalization's momentum. It can also be a stabilizing force, increasing empathy between actors and reducing the likelihood that a geopolitical threat is levied. One example of intrinsic gain is the accelerated productivity from learning new methods."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM5 – Introduction to Geopolitics",
        "text": "Which of the following behavioral archetypes best describes a country that is high on the globalization spectrum but low on the cooperation spectrum?",
        "options": [
            "Autarky",
            "Hegemony",
            "Bilateralism"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because using the two axes we have discussed - political cooperation versus non-cooperation and globalization versus nationalism - investment analysts can assess geopolitical actors and the likelihood of threat to investment outcomes. Specifically, there are four archetypes of country behavior: autarky, hegemony, multilateralism, and bilateralism, where hegemony is situated low on the cooperation spectrum and high on the globalization spectrum. Hegemonic countries tend to be regional or even global leaders, and they use their political or economic influence of others to control resources. State-owned enterprises tend to control key export markets. Examples of hegemonic countries include the United States and Russia."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM5 – Introduction to Geopolitics",
        "text": "With respect to geopolitics, setting standards for the size and shape of containers used for shipping is most likely an example of:",
        "options": [
            "regulatory cooperation.",
            "process standardization.",
            "operational synchronization."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because an example of operational synchronization is standards set for containers of uniform size and shape using multi-modal forms of transport (land, sea, air, rail) and port cranes."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM5 – Introduction to Geopolitics",
        "text": "Which of the following would most likely lead to an increase in globalization? A decrease in:",
        "options": [
            "soft power.",
            "nationalism.",
            "standardization."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because globalization is marked by economic and financial cooperation, including the active trade of goods and services, capital flows, currency exchange, and cultural and information exchange. Actors participating in globalization are likely to reach beyond their national borders for access to new markets, talent, or learning. By contrast, anti-globalization or nationalism is the promotion of a country's own economic interests to the exclusion or detriment of the interests of other nations."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM5 – Introduction to Geopolitics",
        "text": "Which of the following changes are investors most likely to make in response to a black swan risk?",
        "options": [
            "Tactical",
            "Sector specific",
            "Asset allocation"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the velocity of geopolitical risk is the pace at which it impacts an investor portfolio. For the sake of simplicity, we explore short-term or 'high velocity' impacts, medium-term, and long-term or 'low velocity' impacts. In the short term, we may see volatility in the markets affecting entire industries or even the entire market. Exogenous or 'black swan' events tend to fit into this category, causing market volatility and investor flight to quality. A black swan risk is an event that is rare and difficult to predict but has an important impact. Investors with the appropriate time horizon and risk tolerance may make tactical changes to their investment choices as a result of these events. Long-term changes are unlikely to be necessary."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM5 – Introduction to Geopolitics",
        "text": "Cyber threats most likely fall into the category of:",
        "options": [
            "event risk.",
            "thematic risk.",
            "exogenous risk."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because cyber threats are another example of thematic risk."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM5 – Introduction to Geopolitics",
        "text": "Natural disasters are an example of:",
        "options": [
            "event risk.",
            "thematic risk.",
            "exogenous risk."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because exogenous risk is a sudden or unanticipated risk that impacts either a country's cooperative stance, the ability of non-state actors to globalize, or both. Examples include sudden uprisings, invasions, or the aftermath of natural disasters."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM5 – Introduction to Geopolitics",
        "text": "Which of the following is most likely a benefit of globalization?",
        "options": [
            "Increased profits",
            "More equal income distribution",
            "Stronger environmental, social, and governance standards"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the opportunity to generate higher profits may motivate companies to globalize. The first way to generate profit is to increase sales. Companies may choose to engage in globalization in order to access new customers for their goods and services. Another way to increase profits is to reduce costs. Globalization allows companies to access lower tax-operating environments, reduce labor costs, or seek other supply chain efficiency gains."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM6 – International Trade",
        "text": "Which of the following organizations was founded with the goal of assisting in the reconstruction of the international payment system?",
        "options": [
            "The World Trade Organization",
            "The International Monetary Fund",
            "The International Bank for Reconstruction and Development"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because IMF was founded with the goal to stabilize exchange rates and assist the reconstruction of the world's international payment system."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM6 – International Trade",
        "text": "The main objective of the World Bank Group is to:",
        "options": [
            "support exchange rate stability and an open system of international payments.",
            "provide the legal and institutional foundation of the multilateral trading system.",
            "help developing countries fight poverty and enhance environmentally sound economic growth."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the World Bank's main objective is to help developing countries fight poverty and enhance environmentally sound economic growth."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM6 – International Trade",
        "text": "With respect to trading blocs, a common market most likely incorporates all aspects of a(n):",
        "options": [
            "customs union.",
            "monetary union.",
            "economic union."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the common market is the next level of economic integration that incorporates all aspects of the customs union and extends it by allowing free movement of factors of production among members."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM6 – International Trade",
        "text": "The implementation of an export subsidy for a normal good produced in a small country will most likely increase the:",
        "options": [
            "domestic consumption of the good.",
            "price of the good in the domestic market.",
            "national welfare of the country providing the subsidy."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because in the case of an export subsidy, the exporter has the incentive to shift sales from the domestic to the export market because it receives the international price plus the per-unit subsidy for each unit of the good exported. This scenario raises the price in the domestic market by the amount of the subsidy in the small country case (price before subsidy plus subsidy)."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM6 – International Trade",
        "text": "An argument against free trade is that:",
        "options": [
            "it has the potential to lead to greater income inequality.",
            "it increases average production costs in goods and services.",
            "it discourages foreign research and development in an economy."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because opponents of free trade point to the potential for greater income inequality and the loss of jobs in developed countries as a result of import competition."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM6 – International Trade",
        "text": "When a country that is a price taker imposes a tariff on an imported good:",
        "options": [
            "national welfare increases.",
            "consumers gain consumer surplus.",
            "local producers gain producer surplus."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the economic impact of a tariff on imports in a small country is one that is a price taker in the world market for a product and cannot influence the world market price. The welfare effect can be summarized as follows: Consumers suffer a loss of consumer surplus, local producers gain producer surplus and the net welfare effect results in a deadweight loss to the country's welfare."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM6 – International Trade",
        "text": "When a country has a fiscal surplus and an excess of private saving over investment, its exports are:",
        "options": [
            "less than its imports.",
            "equal to its imports.",
            "greater than its imports."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because using a fundamental identity from macroeconomics, the relationship between the trade balance and expenditure/saving decisions can be expressed as: X - M = (S - I) + (T - G) where X represents exports, M is imports, S is private savings, I is investment in plant and equipment, T is taxes net of transfers, and G is government expenditure. From this relationship, we can see that a trade surplus (X > M) must be reflected in a fiscal surplus (T > [G]), an excess of private saving over investment (S > I), or both. We can also see that when a country has a fiscal surplus (T > G) and an excess of private saving over investment (S > I), its exports are greater than its imports (X > M)."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM7 – Capital Flows and the FX Market",
        "text": "An analyst gathers: Foreign inflation rate 2%; Domestic inflation rate 3%; Change in nominal exchange rate 6%. Note: the exchange rate is expressed as the number of units of domestic currency per unit of foreign currency. The change in the real exchange rate is closest to:",
        "options": [
            "4%.",
            "5%.",
            "7%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the change in the real exchange rate is (1 + dS(d/f)/S(d/f)) x (1 + dP(f)/P(f)) / (1 + dP(d)/P(d)) - 1 = (1 + 6%) x (1 + 2%) / (1 + 3%) - 1 = 1.06 x 1.02/1.03 - 1 = 0.0497 = approx. 0.05 = 5%, where dS(d/f)/S(d/f) is the change of the nominal exchange rate, dP(f)/P(f) is the foreign inflation rate, and dP(d)/P(d) is the domestic inflation rate. Using the appropriate approximate formula, 6.0% + 2.0% - 3.0% = 5% leads to the same answer choice."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM7 – Capital Flows and the FX Market",
        "text": "The conversion of nominal exchange rates into real exchange rates requires the:",
        "options": [
            "GDP of both countries.",
            "price levels in both countries.",
            "interest rates in both countries."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because real exchange rates, which are indexes often constructed by economists and other market analysts to assess changes in the relative purchasing power of one currency compared with another. Creating these indexes requires adjusting the nominal exchange rate by using the price levels in each country of the currency pair."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM7 – Capital Flows and the FX Market",
        "text": "Price levels increase by 2% in the US and by 6% in the Eurozone. If the nominal spot exchange rate of the USD/EUR (amount of US dollars per 1 euro) decreases by 4%, the absolute change in the real exchange rate is closest to:",
        "options": [
            "0%.",
            "4%.",
            "8%."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the change in the real exchange rate is: [formula missing in the scan] Thus, the change in the real exchange rate is approximately zero percent. The rough calculation is: -4% + 6% - 2% = 0%."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM7 – Capital Flows and the FX Market",
        "text": "An ideal international currency regime would most likely have:",
        "options": [
            "currencies that are fully convertible.",
            "floating exchange rates between currencies.",
            "a common monetary policy across different countries."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the ideal currency regime would have three properties. One of those properties is, all currencies would be fully convertible (i.e., currencies could be freely exchanged for any purpose and in any amount). This condition ensures unrestricted flow of capital."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM7 – Capital Flows and the FX Market",
        "text": "In contrast to real exchange rates, nominal foreign exchange rates:",
        "options": [
            "tend to deviate from purchasing power parity.",
            "represent the relative price levels in the domestic and foreign countries.",
            "are indexes useful for understanding international trade and capital flows."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because nominal exchange rates exhibit persistent deviations from PPP."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM7 – Capital Flows and the FX Market",
        "text": "Which of the following economic conditions for a country best supports a well-functioning currency board exchange rate system?",
        "options": [
            "Flexible domestic prices and wages",
            "Rapid growth in supply of the global reserve asset",
            "Large non-traded sectors of the domestic economy"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because a currency board system works best if domestic prices and wages are very flexible."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM7 – Capital Flows and the FX Market",
        "text": "Dollarization is best described as an exchange rate regime whereby a country:",
        "options": [
            "uses the currency of another nation as its medium of exchange.",
            "participates in a monetary union whose members share the same legal tender.",
            "makes a commitment to exchange domestic currency for a specified foreign currency at a fixed exchange rate."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because in case of dollarization the country uses the currency of another nation as its medium of exchange and unit of account."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM7 – Capital Flows and the FX Market",
        "text": "All else being equal, in an efficient market a forward exchange rate will decrease as a result of an increase in the:",
        "options": [
            "spot exchange rate.",
            "foreign risk-free interest rate.",
            "domestic risk-free interest rate."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the arbitrage equation can be re-arranged, as needs require, to get the formula for the forward rate, as follows: F(f/d) = S(f/d) x [(1 + if)/(1 + id)], where F(f/d) is the forward exchange rate, S(f/d) is the spot exchange rate, if is the foreign risk-free interest rate, and id is the domestic risk-free interest rate. Therefore, the forward exchange rate will decrease as a result of an increase in the domestic risk-free interest rate."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM7 – Capital Flows and the FX Market",
        "text": "An analyst gathers: USD/AUD spot rate 0.8027; AUD 1-year interest rate 3.30%; USD 1-year interest rate 2.42%. USD/AUD is the amount of USD per 1 AUD. The USD/AUD 1-year forward rate is closest to:",
        "options": [
            "0.7959.",
            "0.8096.",
            "0.8292."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because F(f/d) = S(f/d) x ((1+if)/(1+id)). Substituting the values, F(f/d) = 0.8027 x ((1+0.0242)/(1+0.033)) = approx. 0.7959."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM7 – Capital Flows and the FX Market",
        "text": "With respect to the foreign exchange market, an arbitrage relationship involving countries' relative interest rates serves as the basis for:",
        "options": [
            "real exchange rates.",
            "forward exchange rates.",
            "nominal exchange rates."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because forward exchange rates are based on an arbitrage relationship that equates the investment return on two alternative but equivalent investments, which involves the relationship between the risk-free interest rates of the two countries concerned. The arbitrage relationship is F(f/d) = S(f/d)(1 + if)/(1 + id), where F(f/d) is the forward rate, S(f/d) is the spot rate, and if (id) is the foreign (domestic) risk-free interest rate."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM7 – Capital Flows and the FX Market",
        "text": "An analyst gathers the following foreign exchange rate information (CAD/USD is the amount of CAD per 1 USD; JPY/USD is the amount of JPY per 1 USD): CAD/USD beginning of period 1.3216, end of period 1.2944; JPY/USD beginning of period 105.42, end of period 104.74. The percentage change in the JPY/CAD cross-rate for the period is closest to:",
        "options": [
            "-2.7%.",
            "1.4%.",
            "2.8%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because sometimes it is necessary to invert one of the quotes in order to get the intermediary currency to cancel out in the equation to get the cross-rate. For example, to get a Canada-yen (JPY/CAD) quote, one is typically using the dollar-Canada (CAD/USD) rate and dollar-yen (JPY/USD) rate, which are the market conventions. Hence, to get a Canada-yen (JPY/CAD) quote, we must first invert the dollar-Canada (CAD/USD) quote before multiplying by the dollar-yen (JPY/USD) quote. The beginning of period JPY/CAD exchange rate is therefore = 1/1.3216 x 105.42 = 0.75666 x 105.42 = 79.77. The end of period JPY/CAD exchange rate is therefore = 1/1.2944 x 104.74 = 0.77256 x 104.74 = 80.92. The percentage change in the JPY/CAD exchange rate over the period is therefore = 80.92/79.77 - 1 = 1.44% = approx. 1.4%."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM7 – Capital Flows and the FX Market",
        "text": "If the spot USD/EUR exchange rate (the amount of USD per 1 EUR) is 1.1605 and the 1-year forward rate is 1.17240, the forward points are:",
        "options": [
            "+101.5.",
            "+102.5.",
            "+119.0."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the forward rate is calculated as (1.17240 - 1.1605) x 10,000 = 119.0."
    },
    {
        "source": "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject": "Economics",
        "lm": "LM7 – Capital Flows and the FX Market",
        "text": "An analyst gathers the following information about spot rates: USD/GBP 1.2604 (amount of USD per 1 GBP); USD/EUR 1.1786 (amount of USD per 1 EUR). The spot EUR/GBP cross rate is closest to:",
        "options": [
            "0.9351.",
            "1.0694.",
            "1.4855."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because sometimes it is necessary to invert one of the quotes in order to get the intermediary currency to cancel out in the equation to get the cross-rate. For example, to get a Canada-yen (JPY/CAD) quote, one is typically using the dollar-Canada (CAD/USD) rate and dollar-yen (JPY/USD) rate, which are the market conventions. This Canada-yen calculation requires that the dollar-Canada rate (CAD/USD) be inverted to a USD/CAD quote for the calculations to work. The formula for the EUR/GBP cross rate is USD/GBP x (USD/EUR)^-1 = USD/GBP x EUR/USD = 1.2604 / 1.1786 = approx. 1.0694."
    },
    {
        "id": "vikas-vohra-fixed-income-8",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "In the securitization process, the trustee most likely:",
        "options": [
            "sells the underlying collateral.",
            "owns the underlying collateral.",
            "holds the underlying collateral."
        ],
        "correctAnswer": 2,
        "explanation": "8. C is correct because a trustee or trustee agent is typically a financial institution with \ntrust powers that safeguards the assets after they have been sold to the SPE, holds \nthe funds due to the ABS holders until they are paid, and provides periodic \ninformation to the ABS holders."
    },
    {
        "id": "vikas-vohra-fixed-income-9",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "The coupon of a residential mortgage-backed security is the:",
        "options": [
            "pass-through rate.",
            "weighted average coupon rate.",
            "rate on the underlying pool of mortgages."
        ],
        "correctAnswer": 0,
        "explanation": "9. A is correct because a mortgage pass-through security Õs coupon rate is called the \npass- through rate. The pass-through rate is lower than the mortgage rate on the \n\n                                                                                    \n \nunderlying pool of mortgages by an amount equal to the servicing and other \nadministrative fees. The pass-through rate that the investor receives is said to be \n\"net interest\" or \"net coupon."
    },
    {
        "id": "vikas-vohra-fixed-income-10",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "The stated annual yield to maturity on a semiannual bond basis is 3.66%. The effective \nannual yield is closest to:",
        "options": [
            "3.63%.",
            "3.69%.",
            "7.45%."
        ],
        "correctAnswer": 1,
        "explanation": "10. B is correct because an effective annual rate has a periodicity of one because there \nis just one compounding period in the year. No calculations are required based on the \nintuitive idea that due to semi-annual compounding, the effective annual yield must \nbe slightly higher. The formula to calculate the effective annual yield of a semi-annual \npay bond is: \n= (1 +  𝑦𝑖𝑒𝑙𝑑/2)ଶ – 1 = (1 +  0.0366/2)ଶ – 1 = 1.036935 – 1 = .036935 ≈ 3.69%."
    },
    {
        "id": "vikas-vohra-fixed-income-11",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "In a securitization, the purchase agreement between the seller of the collateral and \nthe special purpose entity most likely provides:",
        "options": [
            "a description of the transaction structure.",
            "representations about the quality of the assets.",
            "documentation of enhancements used to reduce credit risk."
        ],
        "correctAnswer": 1,
        "explanation": "11. B is correct because an important legal document is the purchase agreement between \nthe seller of the collateral and the SPE, which sets forth the representations and \nwarranties that the seller makes about the assets sold. These representations and \nwarranties assure investors about the quality of the assets."
    },
    {
        "id": "vikas-vohra-fixed-income-12",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information about a bond: \n \nThe approximate convexity of this bond is closest to:",
        "options": [
            "521.",
            "1,042.",
            "2,604."
        ],
        "correctAnswer": 1,
        "explanation": "12. B is correct because ApproxCon ="
    },
    {
        "id": "vikas-vohra-fixed-income-13",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "A break-even reinvestment rate is most likely equivalent to a(n):",
        "options": [
            "par rate.",
            "spot rate.",
            "implied forward rate."
        ],
        "correctAnswer": 2,
        "explanation": "13. C is correct because an implied forward rate is a break-even reinvestment rate. It \nlinks the return on an investment in a shorter-term zero-coupon bond to the return \non an investment in a longer-term zero-coupon bond."
    },
    {
        "id": "vikas-vohra-fixed-income-14",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "A bond trading at its no-arbitrage value is priced at a premium. The sum of the \npresent value of the bond's cash flows discounted at spot rates is:",
        "options": [
            "less than the sum of the present values of the bond's cash flows discounted at \nits yield to maturity. \n\nFixed Income: Practice Pack \nFaculty: Vikas Vohra                                                                                   Page 3 of 35",
            "equal to the sum of the present values of the bond's cash flows discounted at its \nyield to maturity.",
            "greater than the sum of the present values of the bond's cash flows discounted \nat its yield to maturity."
        ],
        "correctAnswer": 1,
        "explanation": "14. B is correct because bond price (or value) determined using the spot rates is \nsometimes referred to as the bondÕs 'no-arbitrage value'. If the current market price \nequals the 'no-arbitrage value, discounting the cash flows by either spot rates or \nyield to maturity arrives to the same price."
    },
    {
        "id": "vikas-vohra-fixed-income-15",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information about a company that only has senior \nunsecured debt: \n \nIn a bankruptcy scenario, if the priority of claims is enforced, it is most likely that:",
        "options": [
            "fixed-rate bond is repaid first because it matures earlier.",
            "both bondholders are repaid proportionally to the amount owed.",
            "FRN is repaid first because it has the highest amount outstanding."
        ],
        "correctAnswer": 1,
        "explanation": "15. B is correct because both bonds represent forms of senior unsecured debt and \ntherefore, all creditors are at the same level of the capital structure and treated as \none class; thus, a senior unsecured bondholder whose debt is due in 30 years has the \nsame pro rata claim in bankruptcy as one whose debt matures in six months. This \nprovision is referred to as bonds ranking pari passu ('on an equal footing') in right of \npayment."
    },
    {
        "id": "vikas-vohra-fixed-income-16",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "All else being equal, reinvestment risk is greatest for:",
        "options": [
            "putable bonds.",
            "callable bonds.",
            "non-callable convertible bonds."
        ],
        "correctAnswer": 1,
        "explanation": "16. B is correct because callable bonds present investors with a higher level of \nreinvestment risk than non-callable bonds; that is, if the bonds are called, \nbondholders have to reinvest funds in a lower interest rate environment."
    },
    {
        "id": "vikas-vohra-fixed-income-17",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst is concerned that a bond might be downgraded one category by Standard \n& Poor's and become non-investment grade. The current rating of this bond is most \nlikely:",
        "options": [
            "A–.",
            "BB–.",
            "BBB–."
        ],
        "correctAnswer": 2,
        "explanation": "17. C is correct because BBB– is the lowest rating for investment grade bonds. A one-\ncategory downgrade (from BBB– to BB–) would make the bond non-investment grade."
    },
    {
        "id": "vikas-vohra-fixed-income-18",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "A corporation with a holding company structure has debt at both its parent holding \ncompany and operating subsidiaries. Debt at the operating level must be serviced \nbefore funds can be upstreamed to pay debt at the holding company. This \narrangement best describes:",
        "options": [
            "structural subordination.",
            "a cross-default provision.",
            "the corporate family rating."
        ],
        "correctAnswer": 0,
        "explanation": "18. A is correct because another factor considered by rating agencies is structural \nsubordination, which can arise when a corporation with a holding company structure \nhas debt at both its parent holding company and operating subsidiaries. Debt at the \noperating subsidiaries will get serviced by the cash flow and assets of the \nsubsidiaries before funds can be passed (“upstreamed”) to the holding company to \nservice debt at that level."
    },
    {
        "id": "vikas-vohra-fixed-income-19",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "For an option-free fixed-rate bond trading at a premium, as the coupon payment date \napproaches, Macaulay duration most likely:",
        "options": [
            "decreases.",
            "remains constant.",
            "increases."
        ],
        "correctAnswer": 0,
        "explanation": "19. A is correct because as times passes during the coupon period (moving from right to \nleft in the diagram), the Macaulay duration declines smoothly and then jumps upward \nafter the coupon is paid. The usual pattern is that longer times-to-maturity \ncorrespond to higher Macaulay duration statistics. This pattern always holds for \nbonds trading at par value or at a premium above par. Conversely, a shorter time to \nmaturity corresponds to a lower Macaulay duration during the coupon period."
    },
    {
        "id": "vikas-vohra-fixed-income-20",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Using the rating scale from Standard & Poor's or Fitch, the lowest rating for an \ninvestment-grade bond is:",
        "options": [
            "BBB–.",
            "BBB.",
            "BBB+."
        ],
        "correctAnswer": 0,
        "explanation": "20. A is correct because bonds rated Baa3 or higher by Moody's and BBB– or higher by \nStandard & Poor's and Fitch are considered investment grade."
    },
    {
        "id": "vikas-vohra-fixed-income-21",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "The EBITDA/interest expense ratio is best classified as a:",
        "options": [
            "leverage ratio.",
            "coverage ratio.",
            "profitability ratio."
        ],
        "correctAnswer": 1,
        "explanation": "21. B is correct because coverage ratios measure an issuer's ability to meet—to “cover”—\nits interest payments. The two most common are the EBITDA/interest expense and \nEBIT/interest expense ratios."
    },
    {
        "id": "vikas-vohra-fixed-income-22",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Which of the following statements is most accurate? US commercial paper typically:",
        "options": [
            "requires the issuer to pledge collateral.",
            "requires the issuer to have a backup line of credit.",
            "has a maturity ranging from a few days up to two years."
        ],
        "correctAnswer": 1,
        "explanation": "22. B is correct because credit rating agencies often require that commercial paper \nissuers secure a backup line of credit from banks."
    },
    {
        "id": "vikas-vohra-fixed-income-23",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "The current yield for a 4.5% coupon, 10-year bond, with a maturity par value of $100 \nand currently priced at $85.70 is closest to:",
        "options": [
            "4.50%.",
            "5.25%.",
            "5.93%."
        ],
        "correctAnswer": 1,
        "explanation": "23. B is correct because current yield is calculated as ($4.5/$85.70) = 5.25%."
    },
    {
        "id": "vikas-vohra-fixed-income-24",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Which of the following types of collateralized debt obligations (CDOs) are most likely \nbacked by asset-backed securities?",
        "options": [
            "Structured finance CDOs",
            "Collateralized loan obligations",
            "Collateralized bond obligations"
        ],
        "correctAnswer": 0,
        "explanation": "24. A is correct because collateralized debt obligation (CDO) is a generic term used to \ndescribe a security backed by a diversified pool of one or more debt obligations: \nCDOs backed by ABS, RMBS, CMBS, and other CDOs are structured finance CDOs."
    },
    {
        "id": "vikas-vohra-fixed-income-25",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information about a 6% coupon bond currently \ntrading at par: \n \nThe bond's effective duration is closest to:",
        "options": [
            "3.75.",
            "7.45.",
            "7.50."
        ],
        "correctAnswer": 1,
        "explanation": "25. B is correct because effective duration = (PV+ − PV- ) / (2 × Δcurve × PV0) = ( 100.75 \n− 99.26) / (2 × 0.001 × 100.00) = 7.45."
    },
    {
        "id": "vikas-vohra-fixed-income-26",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information about a pension plan's liabilities: \n \nIf interest rates are currently 1.0%, the effective duration of the liabilities is \nclosest to:",
        "options": [
            "6.5.",
            "12.9.",
            "25.8."
        ],
        "correctAnswer": 1,
        "explanation": "26. B is correct because effective duration = (PV– – PV+)/(2 × ΔCurve × PV0) = ($198 \nmillion – $174 million)/(2 × 0.005 × $186 million) = 12.9032 ≈ 12.9."
    },
    {
        "id": "vikas-vohra-fixed-income-27",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Which of the following is a curve duration measure?",
        "options": [
            "Modified duration",
            "Effective duration",
            "Macaulay duration"
        ],
        "correctAnswer": 1,
        "explanation": "27. B is correct because effective duration is a curve duration statistic in that it \nmeasures interest rate risk in terms of a parallel shift in the benchmark yield curve."
    },
    {
        "id": "vikas-vohra-fixed-income-28",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Bonds issued in the Eurobond market are most likely:",
        "options": [
            "denominated only in euros.",
            "in the form of registered bonds.",
            "issued within the jurisdiction of the issuer's home country."
        ],
        "correctAnswer": 1,
        "explanation": "28. B is correct because Eurobonds, domestic, and foreign bonds are now registered \nbonds for which ownership is recorded by either name or serial number."
    },
    {
        "id": "vikas-vohra-fixed-income-29",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "For a coupon bond with a negative yield, compounding more frequently within the year \nresults in a yield-to-maturity that is:",
        "options": [
            "more negative.",
            "the same.",
            "less negative."
        ],
        "correctAnswer": 0,
        "explanation": "29. A is correct because compounding more frequently within the year results in a lower \n(more negative) yield-to-maturity."
    },
    {
        "id": "vikas-vohra-fixed-income-30",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "All else being equal, expected loss for a debt instrument:",
        "options": [
            "is independent of the recovery rate.",
            "decreases as the recovery rate increases.",
            "changes proportionally to the recovery rate."
        ],
        "correctAnswer": 1,
        "explanation": "30. B is correct because Expected loss = Default probability × Loss severity given default, \nwhere loss severity is often expressed as (1 – Recovery rate), where the recovery \nrate is the percentage of the principal amount recovered in the event of default. \nThus expected loss can also be written as Expected loss = Default probability × (1 – \nRecovery rate), which means that the higher the recovery rate, the lower the \nexpected loss."
    },
    {
        "id": "vikas-vohra-fixed-income-31",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Matrix pricing is most likely used to estimate the price of a bond that:",
        "options": [
            "is highly liquid.",
            "is not yet issued.",
            "has unknown credit quality."
        ],
        "correctAnswer": 1,
        "explanation": "31. B is correct because for bonds that are not yet issued it is common to estimate the \nmarket discount rate and price based on the quoted or flat prices of more frequently \ntraded comparable bonds. These comparable bonds have similar times-to-maturity, \ncoupon rates, and credit quality. This estimation process is called matrix pricing."
    },
    {
        "id": "vikas-vohra-fixed-income-32",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "All else being equal, the risk of a strategic default for a non-recourse mortgage is \nmost likely:",
        "options": [
            "lower than for a recourse mortgage.",
            "the same as for a recourse mortgage. \n\nFixed Income: Practice Pack \nFaculty: Vikas Vohra                                                                                   Page 6 of 35",
            "greater than for a recourse mortgage."
        ],
        "correctAnswer": 2,
        "explanation": "32. C is correct because for a non-recourse mortgage, the borrower may have an incentive \nto default on an underwater mortgage and allow the lender to foreclose on the \nproperty, even if resources are available to continue to make mortgage payments. \nThis type of default by a borrower is referred to as a “strategic default. In countries \nwhere residential mortgages are recourse loans, a strategic default is less likely \nbecause the lender can seek to recover the shortfall from the borrower's other \nassets and/or income. Therefore, the risk of a strategic default is higher for a non-\nrecourse mortgage."
    },
    {
        "id": "vikas-vohra-fixed-income-33",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "For bonds with embedded options, the most appropriate measure of price sensitivity \nto interest rate changes is:",
        "options": [
            "effective duration.",
            "modified duration.",
            "Macaulay duration."
        ],
        "correctAnswer": 0,
        "explanation": "33. A is correct because effective duration is essential to the measurement of the \ninterest rate risk of a complex bond, such as a bond that contains an embedded call \noption. In brief, a callable bond does not have a well-defined internal rate of return \n(yield-to-maturity). Therefore, yield duration statistics, such as modified and \nMacaulay durations, do not apply; effective duration is the appropriate duration \nmeasure."
    },
    {
        "id": "vikas-vohra-fixed-income-34",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "For a bond with an embedded option, effective duration is the most appropriate \nmeasure of interest rate risk because the bond's:",
        "options": [
            "future cash flows are uncertain.",
            "internal rate of return is well-defined.",
            "pricing is sensitive to changes in credit spreads."
        ],
        "correctAnswer": 0,
        "explanation": "34. A is correct because effective duration is essential to the measurement of the \ninterest rate risk of a complex bond, such as a bond that contains an embedded call \noption. The problem is that future cash flows are uncertain because they are \ncontingent on future interest rates. The issuerÕs decision to call the bond depends on \nthe ability to refinance the debt at a lower cost of funds. Effective duration is the \nappropriate duration measure."
    },
    {
        "id": "vikas-vohra-fixed-income-35",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information about a spot curve: \n \nIf the coupon rate of a 3-year annual-pay bond is 4%, the price of the bond is closest \nto:",
        "options": [
            "97.28.",
            "99.86.",
            "100.00."
        ],
        "correctAnswer": 1,
        "explanation": "35. B is correct because given the spot rates, the price of a bond can be calculated using \nthe following formula: PV ="
    },
    {
        "id": "vikas-vohra-fixed-income-36",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "The price of an option-free bond increases by 7% when the yield to maturity \ndecreases by 100 basis points. If the price of this bond decreases by 7%, the yield \nto maturity most likely increases by:",
        "options": [
            "less than 100 basis points.",
            "100 basis points.",
            "more than 100 basis points."
        ],
        "correctAnswer": 2,
        "explanation": "36. C is correct because for the same coupon rate and time-to-maturity, the percentage \nprice change is greater (in absolute value, meaning without regard to the sign of the \nchange) when the market discount rate goes down than when it goes up (the convexity \neffect)."
    },
    {
        "id": "vikas-vohra-fixed-income-37",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "All else being equal, the absolute value of the percentage price change for an option-\nfree bond is most likely:",
        "options": [
            "less when the market discount rate decreases than when it increases by the same \namount.",
            "the same whether the market discount rate decreases or increases by the same \namount.",
            "greater when the market discount rate decreases than when it increases by the \nsame amount."
        ],
        "correctAnswer": 2,
        "explanation": "37. C is correct because for the same coupon rate and time-to-maturity, the percentage \nprice change is greater (in absolute value, meaning without regard to the sign of the \nchange) when the market discount rate goes down than when it goes up (the convexity \neffect)."
    },
    {
        "id": "vikas-vohra-fixed-income-38",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information about three option-free bonds: \n \nAll else being equal, if the market discount rate decreases by 50 basis points, the \nbond most likely to experience the greatest percentage price change is:",
        "options": [
            "Bond 1.",
            "Bond 2.",
            "Bond 3."
        ],
        "correctAnswer": 2,
        "explanation": "38. C is correct because for the same time-to-maturity, a lower-coupon bond has a \ngreater percentage price change than a higher-coupon bond when their market \ndiscount rates change by the same amount (the coupon effect). Bond 3 has the same \ntime-to-maturity as Bond 1 but a lower coupon, thus Bond 3 would experience a \ngreater percentage price change compared to Bond 1. Also, generally, for the same \ncoupon rate, a longer-term bond has a greater percentage price change than a \nshorter-term bond when their market discount rates change by the same amount (the \nmaturity effect). Bond 3 has the same coupon rate as Bond 2 but a longer maturity, \nthus Bond 3 would experience a greater percentage price change compared to Bond"
    },
    {
        "id": "vikas-vohra-fixed-income-39",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Implied forward rates are best defined as the:",
        "options": [
            "geometric average of spot rates.",
            "breakeven reinvestment rates between zero-coupon bonds.",
            "current yield to maturity on zero-coupon bonds of different maturities."
        ],
        "correctAnswer": 1,
        "explanation": "39. B is correct because implied forward rates (also known as forward yields) are \ncalculated from spot rates. An implied forward rate is a break-even reinvestment \nrate. When the market is in equilibrium (no arbitrage) the implied forward rate is the \nsame as the forward rate."
    },
    {
        "id": "vikas-vohra-fixed-income-40",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Effective duration is the most appropriate measure of interest rate risk for a bond \nwith an embedded option because the bond does not have a well-defined:",
        "options": [
            "effective convexity.",
            "internal rate of return.",
            "curve duration statistic."
        ],
        "correctAnswer": 1,
        "explanation": "40. B is correct because in brief, a callable bond does not have a well-defined internal \nrate of return (yield-to-maturity). Therefore, yield duration statistics, such as \nmodified and Macaulay durations, do not apply; effective duration is the appropriate \nduration measure."
    },
    {
        "id": "vikas-vohra-fixed-income-41",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "When interest rates increase, mortgage-backed securities most likely exhibit \nincreased:",
        "options": [
            "extension risk.",
            "contraction risk.",
            "reinvestment risk."
        ],
        "correctAnswer": 0,
        "explanation": "41. A is correct because extension risk is the risk that when interest rates rise, \nprepayments will be lower than forecasted because homeowners are reluctant to give \nup the benefits of a contractual interest rate that now looks low. As a result, a \nsecurity backed by mortgages will typically have a longer maturity than was \nanticipated at the time of purchase."
    },
    {
        "id": "vikas-vohra-fixed-income-42",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Tightening corporate bond yield spreads are most likely associated with:",
        "options": [
            "issuersÕ deteriorating creditworthiness.",
            "periods of high demand for corporate bonds.",
            "broker-dealers' reduced ability and willingness to make markets."
        ],
        "correctAnswer": 1,
        "explanation": "42. B is correct because in periods of high demand for bonds, spreads will move tighter."
    },
    {
        "id": "vikas-vohra-fixed-income-43",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "In a repurchase agreement:",
        "options": [
            "only the lender of funds is exposed to credit risk.",
            "credit risk is eliminated by using highly rated sovereign bonds as collateral.",
            "the initial margin offers partial protection against changes in the market value of \nthe collateral."
        ],
        "correctAnswer": 2,
        "explanation": "43. C is correct because in addition to the high quality of underlying securities, repos \ninclude features designed to reduce the risk of a collateral shortfall over the \ncontract life. One such feature is the provision of collateral in excess of the cash \nexchanged, known as initial margin."
    },
    {
        "id": "vikas-vohra-fixed-income-44",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "With respect to a bond with an embedded option, for parallel shifts in the benchmark \nyield curve, effective duration most likely indicates the same interest rate sensitivity \nas:",
        "options": [
            "key rate durations.",
            "modified duration.",
            "Macaulay duration."
        ],
        "correctAnswer": 0,
        "explanation": "44. A is correct because for parallel shifts in the benchmark yield curve, key rate \ndurations will indicate the same interest rate sensitivity as effective duration."
    },
    {
        "id": "vikas-vohra-fixed-income-45",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "In a securitization, a senior/subordinated structure is most likely a form of:",
        "options": [
            "time tranching.",
            "credit tranching.",
            "prepayment risk management."
        ],
        "correctAnswer": 1,
        "explanation": "45. B is correct because it is common for securitizations to include a form of internal \ncredit enhancement called subordination, also referred to as credit tranching. In \nsuch a structure, there is more than one bond class or tranche, and the bond classes \ndiffer as to how they will share any losses resulting from defaults of the borrowers \nwhose loans are in the collateral. The bond classes are classified as senior bond \nclasses or subordinated bond classes—hence, the reason this structure is also \nreferred to as a senior/subordinated structure."
    },
    {
        "id": "vikas-vohra-fixed-income-46",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Modified duration is the most appropriate measure of interest rate risk for which of \nthe following securities?",
        "options": [
            "Callable bond",
            "US Treasury bond",
            "Mortgage-backed bond"
        ],
        "correctAnswer": 1,
        "explanation": "46. B is correct because modified duration can be used to measure the interest rate risk \nof a non-complex bond such as a US Treasury bond, while effective duration is \nessential to the measurement of the interest rate risk of a complex bond, such as a \nbond that contains an embedded call option."
    },
    {
        "id": "vikas-vohra-fixed-income-47",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "The percentage price change for a bond, given a change in its yield to maturity, is \nbest estimated by:",
        "options": [
            "effective duration.",
            "modified duration.",
            "Macaulay duration."
        ],
        "correctAnswer": 1,
        "explanation": "47. B is correct because modified duration is a yield duration statistic in that it measures \ninterest rate risk in terms of a change in the bondÕs own yield-to-maturity.  Modified \nduration provides an estimate of the percentage price change for a bond given a \nchange in its yield-to-maturity."
    },
    {
        "id": "vikas-vohra-fixed-income-48",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information about an annual-pay bond: \n \nIf the yield to maturity decreases by 100 basis points, the expected percentage \nchange in the bondÕs price is closest to:",
        "options": [
            "9.43%.",
            "9.57%.",
            "10.00%."
        ],
        "correctAnswer": 1,
        "explanation": "48. B is correct because modified duration provides an estimate of the percentage price \nchange for a bond given a change in its yield-to-maturity [YTM]. \nModified duration = Macaulay Duration / (1+r) = 10.0/1.045 = 9.5694 \n%*SYMBOL*PV≈ ¬AnnModDur × ∆Yield = –9.5694 × –1% = 9.5694% ≈ 9.57%."
    },
    {
        "id": "vikas-vohra-fixed-income-49",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Which of the following is most likely a negative covenant?",
        "options": [
            "The issuer must comply with all laws and regulations.",
            "The issuance of new debt must be junior to existing bondholder debt.",
            "New debt obligations are treated the same as the borrower Õs other senior debt \ninstruments."
        ],
        "correctAnswer": 1,
        "explanation": "49. B is correct because negative pledges prevent the issuance of debt that would be \nsenior to or rank in priority ahead of the existing bondholdersÕ debt. This is a negative \ncovenant."
    },
    {
        "id": "vikas-vohra-fixed-income-50",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information about a 4% annual-payment bond with a \ncurrent yield-to-maturity of 4.0%: \n \nThe bondÕs annualized Macaulay duration is closest to:",
        "options": [
            "4.28.",
            "4.45.",
            "4.63."
        ],
        "correctAnswer": 2,
        "explanation": "50. C is correct because it adjusts the Approximate Modified Duration by 1 + yield to \nmaturity to determine the Macaulay duration. AppxModDur = [(PV-) − (PV+)]/[2 × \n(ΔYield) × (PV0)] = (100.45 – 99.56)/(2 × 0.001 × 100) = 4.45. \nMacaulay duration = modified duration × (1 + YTM) = 4.45 × (1 + 0.04) = 4.628 ≈ 4.63."
    },
    {
        "id": "vikas-vohra-fixed-income-51",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information about a company (in $ millions): \n \nInterest coverage using EBIT is closest to:",
        "options": [
            "7x.",
            "8x.",
            "9x."
        ],
        "correctAnswer": 1,
        "explanation": "51. B is correct because operating income is defined as operating revenues minus \noperating expenses and is commonly referred to as 'earnings before interest and \ntaxes' (EBIT). Interest coverage using EBIT is operating income/interest expense. \n= $120/15 = 8."
    },
    {
        "id": "vikas-vohra-fixed-income-52",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Which of the following duration statistics best measures the sensitivity of a bond Õs \nprice to a flattening of the yield curve?",
        "options": [
            "Key rate duration",
            "Effective duration",
            "Macaulay duration"
        ],
        "correctAnswer": 0,
        "explanation": "52. A is correct because key rate duration (or partial duration ) is a measure of a bondÕs \nsensitivity to a change in the benchmark yield curve at a specific maturity segment. \nIn contrast to effective duration, key rate durations help identify 'shaping risk' for \na bond—that is, a bondÕs sensitivity to changes in the shape of the benchmark yield \ncurve (e.g., the yield curve becoming steeper or flatter)."
    },
    {
        "id": "vikas-vohra-fixed-income-53",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "All else being equal, an investment-grade bond issuer most likely has:",
        "options": [
            "less market liquidity risk than a below-investment-grade issuer.",
            "the same market liquidity risk as a below-investment-grade issuer.",
            "greater market liquidity risk than a below-investment-grade issuer."
        ],
        "correctAnswer": 0,
        "explanation": "53. A is correct because market liquidity risk is the risk that the price at which investors \ncan actually transact—buying or selling—may differ from the price indicated in the \nmarket. The lower the quality of the issuer, the higher the market liquidity risk."
    },
    {
        "id": "vikas-vohra-fixed-income-54",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information about an option-free bond: \n \nIf yields are expected to decrease by 50 basis points, the expected price change for \nthe bond is closest to:",
        "options": [
            "$11,000.",
            "$22,000. \n\nFixed Income: Practice Pack \nFaculty: Vikas Vohra                                                                                   Page 10 of 35",
            "$24,000."
        ],
        "correctAnswer": 0,
        "explanation": "54. A is correct because modified duration provides an estimate of the percentage price \nchange for a bond given a change in its yield-to-maturity. A modified duration of 2.4 \ntranslates to a 2.4% percentage price change given a 100 basis points change in the \nbond's yield to maturity. Therefore, for a 50 basis point decrease in yields, the \nbond's price will change by (2.4)(0.0050)($912,575) = $10,951 ≈ $11,000."
    },
    {
        "id": "vikas-vohra-fixed-income-55",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "The price value of a basis point (PVBP) for a bond with a full price of 103.50 and a \nmodified duration of 6.2 is closest to:",
        "options": [
            "0.0642.",
            "0.6420.",
            "6.4200."
        ],
        "correctAnswer": 0,
        "explanation": "55. A is correct because modified duration provides an estimate of the percentage price \nchange for a bond given a change in its yield-to-maturity: %ΔPVFull ≈ −AnnModDur × \nΔYield. Also, another version of money duration is the price value of a basis point \n(PVBP) for the bond. The PVBP is an estimate of the change in the full price given a 1 \nbp change in the yield-to-maturity. Here: −6.2 × 0.0001 = 0.00062 and PVBP = 0.00062 \n× 103.50 = 0.06417, rounded to 0.0642."
    },
    {
        "id": "vikas-vohra-fixed-income-56",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following details about a bond portfolio: \n \nIf each bond has a par value of £25 million, the modified duration of this bond \nportfolio is closest to:",
        "options": [
            "5.8.",
            "6.1.",
            "6.2."
        ],
        "correctAnswer": 0,
        "explanation": "56. A is correct because money duration (MoneyDur) is calculated as the annual modified \nduration times the full price (PVFull) of the bond, including accrued interest. Thus \nthe modified durations of the bonds are 730/95 = 7.6842 and 515/120 = 4.29167, \nrespectively.  \n \nThe modified duration of a bond portfolio is calculated as the weighted average of \nthe statistics for the individual bonds. The shares of overall portfolio market value \nare the weights. Here, the market values of the bonds are £25 million * 95/100 = \n£23,750,000 and £25 million * 120/100 = £30,000,000. Thus the weight of the first \nbond in the portfolio is £23,750,000 / (£23,750,000 + £30,000,000) = 44.186% and \nthe weight of the second bond in the portfolio is £30,000,000 / (£23,750,000 + \n£30,000,000) = 55.814%. The modified duration of the portfolio is therefore \n44.186% * 7.6842 + 55.814% * 4.29167 = 3.3953 + 2.3953 = 5.7907, rounded to 5.8."
    },
    {
        "id": "vikas-vohra-fixed-income-57",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "With respect to the credit rating agencies' practice of notching, the size of a \nnotching adjustment:",
        "options": [
            "is larger for higher-rated credits.",
            "is standardized between rating agencies.",
            "depends on the rating of the issuer's senior unsecured debt."
        ],
        "correctAnswer": 2,
        "explanation": "57. C is correct because recognizing different payment priorities, and thus the potential \nfor higher (or lower) loss severity in the event of default, the rating agencies have \nadopted a notching process whereby their credit ratings on issues can be moved up \nor down from the issuer rating, which is usually the rating applied to its senior \nunsecured debt. As a general rule, the higher the senior unsecured rating, the smaller \nthe notching adjustment. The reason behind this is that the higher the rating, the \nlower the perceived risk of default; so, the need to 'notch' the rating to capture the \npotential difference in loss severity is greatly reduced. For lower-rated credits, \nhowever, the risk of default is greater and thus the potential difference in loss from \na lower (or higher) priority ranking is a bigger consideration in assessing an issue Õs \ncredit riskiness."
    },
    {
        "id": "vikas-vohra-fixed-income-58",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Which of the following is most likely a key factor in the credit analysis of revenue-\nbacked non-sovereign government bonds?",
        "options": [
            "Per capita income",
            "Breadth of the tax base",
            "Debt-service-coverage ratio of the project"
        ],
        "correctAnswer": 2,
        "explanation": "58. C is correct because revenue bonds are issued for specific project financing (e.g., \nfinancing for a new sewer system, a toll road, bridge, hospital, a sports arena, etc.). \nRevenue bonds, which are issued to finance a specific project, have a higher degree \nof risk than GO bonds because they are dependent on a single source of revenue. A \nkey credit measure for revenue-backed non-sovereign government bonds is the debt-\nservice-coverage (DSC) ratio, which measures how much revenue is available to cover \ndebt payments (principal and interest) after operating expenses."
    },
    {
        "id": "vikas-vohra-fixed-income-59",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst observes the following yields to maturity on zero-coupon government \nbonds: \n \nThe 2y1y implied forward rate is closest to:",
        "options": [
            "4.5%.",
            "5.5%.",
            "6.6%."
        ],
        "correctAnswer": 1,
        "explanation": "59. B is correct because the 2y1y yield is the implied one-year forward yield two years \nfrom now. The 2y1y implied yield"
    },
    {
        "id": "vikas-vohra-fixed-income-60",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information: \n \nBased only on this information, the estimated market discount rate for a 5-year bond \nwith similar credit quality is:",
        "options": [
            "4.2%.",
            "4.4%.",
            "4.6%."
        ],
        "correctAnswer": 0,
        "explanation": "60. A is correct because some fixed-rate bonds are not actively traded. Therefore, there \nis no market price available to calculate the rate of return required by investors. In \nthese situations, it is common to estimate the market discount rate and price based \non the quoted or flat prices of more frequently traded comparable bonds. These \ncomparable bonds have similar times-to-maturity, coupon rates, and credit quality. \nThis estimation process is called matrix pricing. The estimated market discount rate \ncan be obtained with linear interpolation. Using linear interpolation between the two \ngiven bonds, we have: 0.034 + (5 – 3) / (8 – 3) × (0.054 – 0.034) = 0.034 + 2 / 5 × 0.02 \n= 0.042 = 4.2%."
    },
    {
        "id": "vikas-vohra-fixed-income-61",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Compared to an otherwise similar option-free bond, investors require a higher yield \nfor a corporate bond with a:",
        "options": [
            "put provision.",
            "call provision.",
            "conversion provision."
        ],
        "correctAnswer": 1,
        "explanation": "61. B is correct because the call provision is a valuable option for the issuer. Thus, other \nthings equal, investors require a higher yield (and thus pay a lower price) for a callable \nbond than for an otherwise similar non-callable bond."
    },
    {
        "id": "vikas-vohra-fixed-income-62",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "The price of a bond issued in the United Kingdom by a US-based company and \ndenominated in British pounds most likely changes when:",
        "options": [
            "US interest rates change only.",
            "British interest rates change only.",
            "both US and British interest rates change."
        ],
        "correctAnswer": 1,
        "explanation": "62. B is correct because the currency denomination of a bond Õs cash flows influences \nwhich countryÕs interest rates affect a bondÕs price. The price of a bond issued by a \n\n                                                                                    \n \nUS-based company and denominated in British pounds will be affected by British \ninterest rates."
    },
    {
        "id": "vikas-vohra-fixed-income-63",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "A floating-rate note makes semiannual interest payments and has a coupon rate equal \nto the six-month market reference rate plus 45 basis points. The interest payments \nare made in June and December. If the six-month market reference rate was 1.95% \nin June and 2.25% in December of the same year, the coupon rate paid in December \nof that year was closest to:",
        "options": [
            "2.40%.",
            "2.55%.",
            "2.70%."
        ],
        "correctAnswer": 0,
        "explanation": "63. A is correct because the applicable interest rate in December is the six-month \nmarket reference rate in June plus the 45 basis point margin = 1.95% + 0.45% = \n2.40%."
    },
    {
        "id": "vikas-vohra-fixed-income-64",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst observes the following price-yield relationship for an option-free bond: \n \nIf the bond trades at 101.80 per 100 of par value, its approximate modified duration \nis closest to:",
        "options": [
            "1.72.",
            "2.25.",
            "3.44."
        ],
        "correctAnswer": 0,
        "explanation": "64. A is correct because the approximate modified duration of a bond is calculated as \nfollows: \nApproxModDur = ((PV–) – (PV+)) / (2 × (ΔYield) × PV0) \n= (103.40 – 100.95) / (2 × 0.0070 × 101.80) \n= 2.45 / 1.4252 = 1.7191 ≈ 1.72."
    },
    {
        "id": "vikas-vohra-fixed-income-65",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information about a bond which is currently trading \nat 95.35 per 100 par: \n \nThe effective duration of the bond is closest to:",
        "options": [
            "6.5.",
            "7.6.",
            "8.7."
        ],
        "correctAnswer": 1,
        "explanation": "65. B is correct because the effective duration of a bond is the sensitivity of the bond's \nprice to a change in a benchmark yield curve. \nEffDur = [(PV– ) – (PV+)] / [2 × (ΔCurve) × (PV0)] \nWith PV0 = 95.35, PV– = 99.50, PV+ = 92.25, \nEffDur = (99.50 – 92.25) / (2 × 0.005 × 95.35) = 7.60."
    },
    {
        "id": "vikas-vohra-fixed-income-66",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information about a bond: \n \nIf the market discount rate is 4.75% for the holding period, the future value of \nreinvested coupons at the end of the holding period is closest to:",
        "options": [
            "15.05.",
            "17.30.",
            "18.12."
        ],
        "correctAnswer": 1,
        "explanation": "66. B is correct because the first coupon is reinvested at 4.75% for two years, the \nsecond coupon is reinvested at 4.75% for one year, and the third coupon has not yet \nbeen reinvested.  \n \n(5.50 × 1.0475^2) + (5.50 × 1.0475) + 5.50 = 17.2962 ≈ 17.30. \n \nInterest rates are the rates at which coupon payments are reinvested and the market \ndiscount rates at the time of purchase and at the time of sale if the bond is not held \nto maturity."
    },
    {
        "id": "vikas-vohra-fixed-income-67",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Bonds are quoted using the:",
        "options": [
            "full price and settled using the flat price.",
            "flat price and settled using the full price.",
            "\"dirty\" price and settled using the invoice price."
        ],
        "correctAnswer": 1,
        "explanation": "67. B is correct because the flat price usually is quoted by bond dealers. If a trade takes \nplace, the accrued interest is added to the flat price to obtain the full price paid by \nthe buyer and received by the seller on the settlement date."
    },
    {
        "id": "vikas-vohra-fixed-income-68",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Which of the following does not depend on the market discount rate? A bond's:",
        "options": [
            "flat price",
            "full price",
            "accrued interest"
        ],
        "correctAnswer": 2,
        "explanation": "68. C is correct because the accrued interest part of the full price does not depend on \nthe yield-to-maturity."
    },
    {
        "id": "vikas-vohra-fixed-income-69",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An investor determines the following information about the price sensitivity of an \noption-free bond: \n \nIf the current price is 106, the duration of this bond is closest to:",
        "options": [
            "2.1. \n\nFixed Income: Practice Pack \nFaculty: Vikas Vohra                                                                                   Page 13 of 35",
            "2.8.",
            "3.0."
        ],
        "correctAnswer": 1,
        "explanation": "69. B is correct because the following formula estimates the approximate percentage \nprice change for a 100 basis point change in yield (duration) is:"
    },
    {
        "id": "vikas-vohra-fixed-income-70",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "The number of common shares a convertible bond can be converted into is the:",
        "options": [
            "conversion ratio.",
            "conversion price.",
            "conversion value."
        ],
        "correctAnswer": 0,
        "explanation": "70. A is correct because the conversion ratio is the number of common shares that each \nbond can be converted into."
    },
    {
        "id": "vikas-vohra-fixed-income-71",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "A credit card receivable asset-backed security most likely:",
        "options": [
            "faces high prepayment risk.",
            "uses fully-amortizing loans as collateral.",
            "reinvests principal repayments during the lockout period."
        ],
        "correctAnswer": 2,
        "explanation": "71. C is correct because the collateral of credit card receivable ABS is a pool of non-\namortizing loans. These loans have lockout periods during which the cash flows that \nare paid out to security holders are based only on finance charges collected and fees. \nWhen the lockout period is over, the principal that is repaid by the cardholders is no \nlonger reinvested but instead is distributed to investors."
    },
    {
        "id": "vikas-vohra-fixed-income-72",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information about a bond currently trading at par: \n \nThe effective duration of this bond is closest to:",
        "options": [
            "2.5.",
            "5.0.",
            "10.0."
        ],
        "correctAnswer": 2,
        "explanation": "72. C is correct because the effective duration is calculated as (PV- – PV+)/(2 × ∆Curve \n× PV0), where: PV- = the bond price when the benchmark yield is decreased, PV+ = the \nbond price when the benchmark yield is increased, and PV0 = then current bond price. \nEffective duration = (103 – 98)/(2 × 0.0025 × 100) = 10."
    },
    {
        "id": "vikas-vohra-fixed-income-73",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following spot and forward rates: \n \nThe 2-year forward rate, four years from today is closest to:",
        "options": [
            "2%.",
            "3%.",
            "4%."
        ],
        "correctAnswer": 0,
        "explanation": "73. A is correct."
    },
    {
        "id": "vikas-vohra-fixed-income-74",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "A bond issuer has a credit rating of BBB. Based only on this information, the rating \nof a senior unsecured bond from this issuer is most likely to be:",
        "options": [
            "lower than BBB.",
            "BBB.",
            "higher than BBB."
        ],
        "correctAnswer": 1,
        "explanation": "74. B is correct because the issuer credit rating usually applies to its senior unsecured \ndebt."
    },
    {
        "id": "vikas-vohra-fixed-income-75",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information about a zero-coupon bond: \n \nIf the yield decreases by 1%, the bond's percentage change in price is closest to:",
        "options": [
            "4.76%.",
            "5.05%.",
            "5.14%."
        ],
        "correctAnswer": 1,
        "explanation": "75. B is correct because the Macaulay duration of a zero-coupon bond is its time-to-\nmaturity and modified duration is the Macaulay duration statistic divided by one plus \nthe yield per period. \n \nHere, modified duration = 5/1.02 = 4.901961. \n \nThus, the percentage change in price = –4.901961 * –0.01 + (0.5 * 28.835 * –0.012) = \n0.04901961 + 0.0014418 = 5.04614%, rounded to 5.05%."
    },
    {
        "id": "vikas-vohra-fixed-income-76",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "The Macaulay duration of a zero-coupon bond is most likely:",
        "options": [
            "less than the time to maturity.",
            "equal to the time to maturity.",
            "greater than the time to maturity."
        ],
        "correctAnswer": 1,
        "explanation": "76. B is correct because the Macaulay duration of a zero-coupon bond is its time-to-\nmaturity."
    },
    {
        "id": "vikas-vohra-fixed-income-77",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "US municipal bonds are best described as:",
        "options": [
            "agency bonds.",
            "non-sovereign bonds.",
            "quasi-government bonds."
        ],
        "correctAnswer": 1,
        "explanation": "77. B is correct because the main types of non-sovereign government issuers include \nagencies, public banks, supranationals, and regional governments. Regional \nGovernment Issuers. These include provincial, state, and local governments, referred \nto as municipal bonds in the US and most often as local authority bonds elsewhere, \nwithin a specific sovereign jurisdiction."
    },
    {
        "id": "vikas-vohra-fixed-income-78",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "A bond portfolio consists of the following option-free annual-pay coupon bonds: \n \nThe modified duration of this portfolio is closest to:",
        "options": [
            "5.9.",
            "6.0.",
            "6.1."
        ],
        "correctAnswer": 0,
        "explanation": "78. A is correct because the Macaulay and modified durations for the portfolio are \ncalculated as the weighted average of the statistics for the individual bonds. The \nshares of overall portfolio market value are the weights. \n \nFirst we calculate the modified duration (ModDur) of the individual bonds using \nformula below: \nModDur = MacDur / (1 + r)  \nModDur of Bond 1 = 7.5 / (1 + 4%) = 7.211538 \nModDur of Bond 2 = 5.4 / (1 + 3%) = 5.242718. \n \nNext, we calculate the weights for the individual bonds based on market values, as \nfollows: \nWeight for Bond 1 = $200,000 / ($200,000 + $400,000) = 0.333333 \nWeight for Bond 2 = $400,000 / ($200,000 + $400,000) = 0.666667 \n \nModified duration of the portfolio = (Weight for Bond 1 × ModDur of Bond 1) + \n(Weight for Bond 2 × ModDur of Bond 2) = (0.333333 × 7.211538) + (0.666667 × \n5.242718) = 5.898992 ≈ 5.9."
    },
    {
        "id": "vikas-vohra-fixed-income-79",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information about forward rates: \n \nUsing only this information, the price per 100 of par value of a 3-year, 1% annual \ncoupon bond is closest to:",
        "options": [
            "84.05.",
            "91.74.",
            "96.23."
        ],
        "correctAnswer": 2,
        "explanation": "79. C is correct."
    },
    {
        "id": "vikas-vohra-fixed-income-80",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "With respect to interest rate risk, an investor who sells a fixed-rate bond after the \nfirst coupon is received and before its maturity is exposed to:",
        "options": [
            "market price risk, only.",
            "coupon reinvestment risk, only.",
            "both market price risk and coupon reinvestment risk."
        ],
        "correctAnswer": 2,
        "explanation": "80. C is correct because the investor faces coupon reinvestment risk for all coupons \nreceived (first coupon plus any others until sale) and also faces market price risk as \nchanges in the interest rate will impact the sale price of the bond.   \n \nCoupon reinvestment risk matters more when the investor has a long-term horizon \nrelative to the time-to-maturity of the bond. For instance, a buy-and-hold investor \nonly has coupon reinvestment risk. Market price risk matters more when the investor \nhas a short-term horizon relative to the time-to-maturity. For example, an investor \nwho sells the bond before the first coupon is received has only market price risk."
    },
    {
        "id": "vikas-vohra-fixed-income-81",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "For an option-free fixed-rate corporate bond, the duration and convexity statistics \nare most likely relevant for a change in:",
        "options": [
            "the credit spread only.",
            "the benchmark yield only.",
            "both the credit spread and the benchmark yield."
        ],
        "correctAnswer": 2,
        "explanation": "81. C is correct because the key point is that for an option-free fixed-rate bond, the \nsame duration and convexity statistics that apply for a change in benchmark yield \nalso apply for a change in spread."
    },
    {
        "id": "vikas-vohra-fixed-income-82",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information about a callable bond that pays interest \nannually: \n \nThis bond's yield to worst is the:",
        "options": [
            "yield to maturity.",
            "yield to first call.",
            "yield to second call."
        ],
        "correctAnswer": 2,
        "explanation": "82. C is correct because the lowest of the sequence of yields-to-call and the yield-to-\nmaturity is known as the yield-to-worst. The sequence of yields for the bond is as \nfollows:"
    },
    {
        "id": "vikas-vohra-fixed-income-83",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information about three option-free bonds, each \ntrading at a premium: \n \nAll else being equal, the bond with the lowest Macaulay duration is most likely:",
        "options": [
            "Bond 1.",
            "Bond 2.",
            "Bond 3."
        ],
        "correctAnswer": 2,
        "explanation": "83. C is correct because the Macaulay and modified duration statistics for a fixed-rate \nbond depend primarily on the coupon rate, yield-to-maturity, and time-to-maturity. A \nhigher coupon rate or a higher yield-to-maturity reduces the duration measures. A \nlonger time-to-maturity usually leads to a higher duration. It always does so for a \nbond priced at a premium or at par value.\" In this case, Bond 3 has a higher coupon, \nthe same or higher yield-to-maturity, and the shortest time to maturity. It therefore \nhas the lowest Macaulay duration."
    },
    {
        "id": "vikas-vohra-fixed-income-84",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information about a bond: \n \n\n                                                                                    \n \nThe bond's money duration (per 100 of par value) is closest to:",
        "options": [
            "553.67.",
            "561.51.",
            "575.70."
        ],
        "correctAnswer": 0,
        "explanation": "84. A is correct because the money duration equals the product of modified duration and \nfull price. \n \nFull price = Clean price + Accrued interest = 114.75 + 1.625 = 116.375; \n \nMoney duration = Modified duration × Full Price = 116.375 × 4.8250 = 561.5094 ≈ \n561.51. \n \nModified duration is a measure of the percentage price change of a bond given a \nchange in its yield-to-maturity. A related statistic is money duration. The money \nduration of a bond is a measure of the price change in units of the currency in which \nthe bond is denominated. The money duration can be stated per 100 of par value or \nin terms of the actual position size of the bond in the portfolio. In the United States, \nmoney duration is commonly called 'dollar duration.' Money duration (MoneyDur) is \ncalculated as the annual modified duration times the full price (PVFull) of the bond, \nincluding accrued interest."
    },
    {
        "id": "vikas-vohra-fixed-income-85",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Effective duration is:",
        "options": [
            "a useful interest rate risk measure only for bonds with embedded options.",
            "an accurate estimate of interest rate risk only when the assumed benchmark rate \nchange is small.",
            "the same as the modified duration of an option-free bond only when the yield \ncurve is perfectly flat."
        ],
        "correctAnswer": 2,
        "explanation": "85. C is correct because the modified duration and effective duration on an option-free \nbond are identical only in the rare circumstance of an absolutely flat yield curve."
    },
    {
        "id": "vikas-vohra-fixed-income-86",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An investor gathers the following information about a bond portfolio comprised of \ntwo option-free bonds: \n \nThe duration of the portfolio is closest to:",
        "options": [
            "4.33.",
            "4.40.",
            "4.55."
        ],
        "correctAnswer": 1,
        "explanation": "86. B is correct because the portfolio's duration is the weighted average (by market \nvalue) of the duration of the bonds in the portfolio. \n \nDuration of portfolio = [(120,000 ÷ 300,000) × 5] + [(180,000 ÷ 300,000) × 4] \n= (0.4 × 5) + (0.6 × 4) \n= 2.00 + 2.40 \n= 4.40"
    },
    {
        "id": "vikas-vohra-fixed-income-87",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An analyst gathers the following information about a bond that pays interest annually: \n \nIf the market discount rate is 5%, the market value of this bond is closest to:",
        "options": [
            "$89,839.",
            "$97,277.",
            "$102,775."
        ],
        "correctAnswer": 1,
        "explanation": "87. B is correct because the price of the bond is the present value of the promised cash \nflows and is calculated as follows:"
    },
    {
        "id": "vikas-vohra-fixed-income-88",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Which of the following mortgage features most likely benefits the lender?",
        "options": [
            "Non-recourse loan",
            "Prepayment option",
            "Prepayment penalty"
        ],
        "correctAnswer": 2,
        "explanation": "88. C is correct because the purpose of the prepayment penalty is to compensate the \nlender for the difference between the contract rate and the prevailing mortgage \nrate if the borrower prepays when interest rates decline."
    },
    {
        "id": "vikas-vohra-fixed-income-89",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "With respect to the notching process adopted by credit rating agencies, a \ncorporate's subordinated debt is most likely:",
        "options": [
            "notched up from the corporate's junior subordinated debt.",
            "subject to a smaller notching adjustment the higher the corporate's issuer rating. \n\nFixed Income: Practice Pack \nFaculty: Vikas Vohra                                                                                   Page 17 of 35",
            "notched down from the corporate's issuer rating due to higher probability of \ndefault."
        ],
        "correctAnswer": 1,
        "explanation": "89. B is correct because the rating agencies have adopted a notching process whereby \ntheir credit ratings on issues can be moved up or down from the issuer rating, which \nis usually the rating applied to its senior unsecured debt. As a general rule, the higher \nthe senior unsecured rating, the smaller the notching adjustment."
    },
    {
        "id": "vikas-vohra-fixed-income-90",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Money market yields are:",
        "options": [
            "annualized and compounded.",
            "stated for a common periodicity.",
            "stated on a simple interest basis."
        ],
        "correctAnswer": 2,
        "explanation": "90. C is correct because the rate of return on a money market instrument is stated on a \nsimple interest basis."
    },
    {
        "id": "vikas-vohra-fixed-income-91",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "A portfolio manager gathers the following information about an option-free bond that \nwas held to maturity: \n \nThe yield to maturity at purchase was most likely:",
        "options": [
            "less than 4.2%.",
            "equal to 4.2%.",
            "greater than 4.2%."
        ],
        "correctAnswer": 2,
        "explanation": "91. C is correct because the realized horizon yield matches the original yield-to-maturity \nif (1) coupon payments are reinvested at the same interest rate as the original yield-\nto-maturity, and (2) the bond is sold at a price on the constant-yield price trajectory, \nwhich implies that the investor does not have any capital gains or losses when the \nbond is sold. Since the reinvestment rate is less than the horizon yield and the bond \nis held to maturity, the yield to maturity is greater than the horizon yield."
    },
    {
        "id": "vikas-vohra-fixed-income-92",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "A three-year, semiannual-pay bond with a $100 par value and a 5% coupon rate is \npurchased for $108. One year later, if the yield to maturity has decreased by 100 \nbasis points, the change in the value of this bond is closest to:",
        "options": [
            "$0.57.",
            "$1.52.",
            "$3.08."
        ],
        "correctAnswer": 0,
        "explanation": "92. A is correct because the value of a bond is calculated as:"
    },
    {
        "id": "vikas-vohra-fixed-income-93",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "The yield spread of a specific bond over the standard swap rate in that currency of \nthe same tenor best describes the:",
        "options": [
            "I-spread.",
            "Z-spread.",
            "option-adjusted spread."
        ],
        "correctAnswer": 0,
        "explanation": "93. A is correct because the yield spread of a specific bond over the standard swap rate \nin that currency of the same tenor is known as the I-spread or interpolated spread \nto the swap curve."
    },
    {
        "id": "vikas-vohra-fixed-income-94",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "For a fixed-rate bond, when interest rates decrease, the future value of reinvested \ncoupon payments most likely:",
        "options": [
            "decreases and the market price of the bond increases.",
            "increases and the market price of the bond decreases.",
            "increases and the market price of the bond increases."
        ],
        "correctAnswer": 0,
        "explanation": "94. A is correct because there are two offsetting types of interest rate risk that affect \nthe bond investor: coupon reinvestment risk and market price risk. The future value \nof reinvested coupon payments (and in a portfolio, the principal on bonds that mature \nbefore the horizon date) increases when interest rates go up and decreases when \n\n                                                                                    \n \nrates go down. The sale price on a bond that matures after the horizon date (and \nthus needs to be sold) decreases when interest rates go up and increases when rates \ngo down."
    },
    {
        "id": "vikas-vohra-fixed-income-95",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Which of the following debt categories has the highest ranking in terms of priority \nof payment?",
        "options": [
            "Second lien debt",
            "Subordinated debt",
            "Senior unsecured debt"
        ],
        "correctAnswer": 0,
        "explanation": "95. A is correct because this is a secured debt and therefore has higher priority than \nany u nsecured debt. In the event of default, unsecured debtholders Õ claims rank \nbelow (i.e., get paid after) those of secured creditors under what Õs known as the \npriority of claims. First lien debt or loan refers to a pledge of certain assets that \ncould include buildings but might also include property and equipment, licenses, \npatents, brands, and so on. There can also be second lien, or even third lien, secured \ndebt, which, as the name implies, has a secured interest in the pledged assets but \nranks below first lien debt in both collateral protection and priority of payment."
    },
    {
        "id": "vikas-vohra-fixed-income-96",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "The yield spread over an interpolated sovereign bond is best described as a(n):",
        "options": [
            "I-spread.",
            "G-spread.",
            "Z-spread."
        ],
        "correctAnswer": 1,
        "explanation": "96. B is correct because the yield spread in basis points over an actual or interpolated \ngovernment bond is known as the G-spread. The spread over a government bond is the \nreturn for bearing greater credit, liquidity, and other risks relative to the sovereign \nbond."
    },
    {
        "id": "vikas-vohra-fixed-income-97",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "In a securitization, time tranching most likely refers to differences in:",
        "options": [
            "default risk.",
            "expected maturities.",
            "underlying collateral."
        ],
        "correctAnswer": 1,
        "explanation": "97. B is correct because the creation of bond classes that possess different expected \nmaturities is referred to as time tranching."
    },
    {
        "id": "vikas-vohra-fixed-income-98",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "For a floating-rate note, the specified yield spread over the reference rate best \ndefines the:",
        "options": [
            "coupon.",
            "quoted margin.",
            "required margin."
        ],
        "correctAnswer": 1,
        "explanation": "98. B is correct because this specified yield spread over the reference rate is called the \nquoted margin on the FRN. The role of the quoted margin is to compensate the \ninvestor for the difference in the credit risk of the issuer and that implied by the \nreference rate."
    },
    {
        "id": "vikas-vohra-fixed-income-99",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An investor holds a bond with the following characteristics: \n \nIf the duration gap is zero, the investment horizon is closest to:",
        "options": [
            "6.8 years.",
            "7.4 years.",
            "8.1 years."
        ],
        "correctAnswer": 2,
        "explanation": "99. C is correct because we use the fact that ModDur = MacDur / (1 + r) to calculate the \nMacaulay duration of the bond: MacDur = 7.4 × (1 + 9%) = 8.07. Because the duration \ngap is equal to the bond's Macaulay duration minus the investment horizon the \ninvestment horizon is closest to 8.1 years."
    },
    {
        "id": "vikas-vohra-fixed-income-100",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "All else being equal, when the market interest rate falls below a bond's coupon \nrate, potential price appreciation is most limited for a:",
        "options": [
            "putable bond.",
            "callable bond.",
            "option-free bond."
        ],
        "correctAnswer": 1,
        "explanation": "100. B is correct because when interest rates are low, the effective duration of the \ncallable bond is lower than that of the otherwise comparable non-callable bond \nbecause the callable bond price does not increase as much when benchmark yields \nfall. The presence of the call option limits price appreciation especially when interest \nrates are falling and the bond is more likely to be called."
    },
    {
        "id": "vikas-vohra-fixed-income-101",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Callable bonds exhibit:",
        "options": [
            "positive convexity only.",
            "negative convexity only.",
            "either positive or negative convexity."
        ],
        "correctAnswer": 2,
        "explanation": "101. C is correct because when the benchmark yield is high and the value of the \nembedded call option is low, the callable and the non-callable bonds experience very \nsimilar effects from interest rate changes. They both have positive convexity. But \nas the benchmark yield is reduced, the curves diverge. At some point, the callable \n                                                                                    \n \nbond moves into the range of negative convexity, which indicates that the embedded \ncall option has more value to the issuer and is more likely to be exercised."
    },
    {
        "id": "vikas-vohra-fixed-income-102",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An investors sells a fixed-rate bond originally purchased at a discount. The \nresulting capital gain or loss should be measured by comparing the bond's selling price \nwith its:",
        "options": [
            "par value.",
            "carrying value.",
            "purchase price."
        ],
        "correctAnswer": 1,
        "explanation": "102. B is correct because capital gains arise if a bond is sold at a price above its \nconstant-yield price trajectory and capital losses occur if a bond is sold at a price \nbelow its constant-yield price trajectory. Also, capital gains and losses are measured \nfrom the carrying value of the bond and not from the purchase price. The carrying \nvalue includes the amortization of the discount or premium if the bond is purchased \nat a price below or above par value. The carrying value is any point on the constant-\nyield price trajectory."
    },
    {
        "id": "vikas-vohra-fixed-income-103",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "An investor gathers the following information about an investment in a bond with \na 10-year tenor: \n \nIf the holding period was seven years, the horizon yield is closest to:",
        "options": [
            "2.29%.",
            "2.86%.",
            "4.11%."
        ],
        "correctAnswer": 2,
        "explanation": "103. C is correct because a horizon yield is the internal rate of return between the \ntotal return (the sum of reinvested coupon payments and the sale price or redemption \namount) and the purchase price of the bond. The horizon yield on a bond investment \nis the annualized holding-period rate of return. \n95.27 = (102.06 + 24.28) / (1 + r)^7 => r = 0.041147 ≈ 4.11%. \nCalculator solution: N = 7; PV = –95.27; FV = 102.06 + 24.28; CPT I/Y = 4.11%."
    },
    {
        "id": "vikas-vohra-fixed-income-104",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "A commercial paper has the following characteristics: \n \nFor a 365-day year, the discount rate is closest to:",
        "options": [
            "6.2%.",
            "6.4%.",
            "6.6%."
        ],
        "correctAnswer": 1,
        "explanation": "104. B is correct because the discount rate, DR = (Year/Days) × ((FV – PV)/FV), where \nYear = number of days in the year, Days = number of days between settlement and \nmaturity, FV = future value paid at maturity/face value of the money market \ninstrument, PV = present value/price of the money market instrument, and FV – PV, \nis the interest earned. \n \nDR = (365/160) × (140,500/5,000,000) = 0.0641 ≈ 6.4%."
    },
    {
        "id": "vikas-vohra-fixed-income-105",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "Two par bonds have the same duration but different convexity. All else being \nequal, if yields to maturity increase by 10 basis points, it is most likely that:",
        "options": [
            "the more convex bond underperforms the less convex bond.",
            "both bond prices decrease by the same amount.",
            "the more convex bond outperforms the less convex bond."
        ],
        "correctAnswer": 2,
        "explanation": "105. C is correct because the two bonds are assumed to have the same price, yield-to-\nmaturity, and modified duration. The benefit of greater convexity occurs when their \nyields-to-maturity change. And for the same increase in yield-to-maturity, the more \nconvex bond depreciates less in price [than the less convex bond]."
    },
    {
        "id": "vikas-vohra-fixed-income-106",
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "LM - Fixed Income",
        "text": "A bond has the following characteristics: \n \nFor a yield to maturity of 4%, the price of the bond per 100 of par value is closest \nto:",
        "options": [
            "122.20.",
            "122.41.",
            "122.53. \n \n \n \n \n \n\n                                                                                    \n \nSolutions"
        ],
        "correctAnswer": 1,
        "explanation": "106. B is correct because"
    },
    {
        "id": "vikas-vohra-portfolio-management-8",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Venture capital is best classified as a sub-category of:",
        "options": [
            "real estate.",
            "hedge funds. \nAlternative Investments: Practice Pack \nFaculty: Vikas Vohra                                                                        Page 2 of 18",
            "private equity."
        ],
        "correctAnswer": 1,
        "explanation": "8. B is correct because a risk-neutral investor would maximize return irrespective of \nrisk. This is because such an investor cares only about return and not about risk, so \nhigher return investments are more desirable even if they come with higher risk."
    },
    {
        "id": "vikas-vohra-portfolio-management-9",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "The market has a return of 8% and a standard deviation of returns of 12%. The risk-\nfree rate is 2%. If a portfolio has a Sharpe ratio of 0.8, the portfolio's M square \nalpha is closest to:",
        "options": [
            "3.6%.",
            "5.6%.",
            "11.6%."
        ],
        "correctAnswer": 0,
        "explanation": "9. A is correct because 𝑀! provides a measure of portfolio return that is adjusted for \nthe total risk of the portfolio and is computed as 𝑀! = [E(Rp) − Rf](σm/σp) + Rf = SR \n× σm + Rf , where SR = Sharpe ratio, σm = market standard deviation of returns, and \nRf = risk-free rate. Thus, 𝑀! = 0.8 × 0.12 + 0.02 = 0.116. The difference between the \nrisk-adjusted performance of the portfolio and the performance of the market is \nfrequently referred to as 𝑀! alpha. Thus, 𝑀! alpha = 0.116 – 0.08 = 0.036 = 3.6%."
    },
    {
        "id": "vikas-vohra-portfolio-management-10",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following is most likely a consequence of overconfidence bias? \nInvestors:",
        "options": [
            "holding poorly diversified portfolios.",
            "continuing to hold classes of assets with which they are familiar.",
            "holding investments in a loss position longer than justified, in the hope that they \nwill return to breakeven."
        ],
        "correctAnswer": 0,
        "explanation": "10. A is correct because overconfidence bias is a bias in which people demonstrate \nunwarranted faith in their own abilities. As a result of overconfidence bias, FMPs \n                                                                         \n \n[financial market participants] may hold poorly diversified portfolios, which may \nresult in significant downside risk."
    },
    {
        "id": "vikas-vohra-portfolio-management-11",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Failing to act in pursuit of long-term goals in favor of short-term satisfaction best \ndescribes which of the following emotional biases?",
        "options": [
            "Self-control bias",
            "Endowment bias",
            "Loss-aversion bias"
        ],
        "correctAnswer": 0,
        "explanation": "11. A is correct because self-control bias is a bias in which people fail to act in pursuit \nof their long-term, overarching goals in favor of short-term satisfaction."
    },
    {
        "id": "vikas-vohra-portfolio-management-12",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "When creating a long-only portfolio, which of the following correlation coefficients \nbetween assets would be most effective at reducing portfolio risk?",
        "options": [
            "–0.5.",
            "0.",
            "0.5."
        ],
        "correctAnswer": 0,
        "explanation": "12. A is correct because –0.5 is the smallest of the three correlations and the closer the \ncorrelation coefficient is to –1, the greater the reduction in portfolio risk. The \ncorrelation coefficient between two assets determines the effect on portfolio risk \nwhen the two assets are combined. You will find that portfolio risk is unaffected when \nthe two assets are perfectly correlated (ρ12 = +1). In other words, the portfolio's \nstandard deviation is simply a weighted average of the standard deviations of the two \nassets and as such a portfolio's risk is unchanged with the addition of assets with \nthe same risk parameters. Portfolio risk falls, however, when the two assets are not \nperfectly correlated (ρ12 < +1). Sufficiently low values of the correlation coefficient \ncan make the portfolio riskless under certain conditions. For an extreme case in which \nρ12 = –1 (that is, the two asset returns move in opposite directions), the portfolio can \nbe made risk free."
    },
    {
        "id": "vikas-vohra-portfolio-management-13",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following can best be explained by overconfidence when predicting \ncompanies' earnings growth rates?",
        "options": [
            "Base-rate neglect",
            "The value anomaly",
            "The disposition effect"
        ],
        "correctAnswer": 1,
        "explanation": "13. B is correct because a number of other studies have offered behavioral explanations \nfor value anomalies, presenting the anomalies as mispricing rather than compensation \nfor increased risk. These studies recognize the emotional factors involved in \nappraising stocks. Overconfidence can also be involved in predicting growth rates, \npotentially leading growth stocks to be overvalued, leading to the value anomaly."
    },
    {
        "id": "vikas-vohra-portfolio-management-14",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following is most likely developed by combining a client's investment \nobjectives and constraints with long-term capital market expectations?",
        "options": [
            "Risk budget",
            "Strategic asset allocation",
            "Investment policy statement"
        ],
        "correctAnswer": 1,
        "explanation": "14. B is correct because a strategic asset allocation results from combining the \nconstraints and objectives articulated in the IPS [investment policy statement] and \nlong-term capital market expectations regarding the asset classes."
    },
    {
        "id": "vikas-vohra-portfolio-management-15",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "The diversification ratio of a portfolio is best described as the ratio of the:",
        "options": [
            "standard deviation of the equally weighted portfolio's returns to the average \nstandard deviation of the individual securities' returns.",
            "standard deviation of the market-capitalization-weighted portfolio's returns to \nthe standard deviation of the equally weighted portfolio's returns.",
            "average standard deviation of the individual securities' returns to the standard \ndeviation of the market-capitalization-weighted portfolio's returns."
        ],
        "correctAnswer": 0,
        "explanation": "15. A is correct because a simple measure of the value of diversification is calculated as \nthe ratio of the standard deviation of the equally weighted portfolio to the standard \ndeviation of the randomly selected security. This ratio may be referred to as the \ndiversification ratio. In the example of the 5-stock portfolio given, the equally \nweighted portfolio’s standard deviation is approximately 71 percent of the average \nstandard deviation of the 5 stocks (24.9%); i.e., the denominator is the average \nstandard deviation of all individual securities in the portfolio and the numerator is \nthe standard deviation of the equally weighted portfolio."
    },
    {
        "id": "vikas-vohra-portfolio-management-16",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "In regard to the asset allocation process, a top-down analysis most likely begins with \nan examination of:",
        "options": [
            "macroeconomic growth.",
            "a company's board of directors.",
            "the expected growth of a company's competitors."
        ],
        "correctAnswer": 0,
        "explanation": "16. A is correct because a top-down analysis begins with consideration of macroeconomic \nconditions. Based on the current and forecasted economic environment, analysts \nevaluate markets and industries with the purpose of investing in those that are \nexpected to perform well. Finally, specific companies within these industries are \nconsidered for investment."
    },
    {
        "id": "vikas-vohra-portfolio-management-17",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following is most likely a consequence of the illusion of control bias?",
        "options": [
            "An investor's portfolio turnover is too low.",
            "The investor's portfolio contains concentrated positions in companies.",
            "An investor uses a simple forecasting model for portfolio construction."
        ],
        "correctAnswer": 1,
        "explanation": "17. B is correct because as a result of illusion of control bias, FMPs [financial market \nparticipants] may inadequately diversify portfolios. Research has found that some \ninvestors prefer to invest in companies that they feel they have control over, such \nas the companies they work for, leading them to hold concentrated positions."
    },
    {
        "id": "vikas-vohra-portfolio-management-18",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following is best classified as a non-financial risk?",
        "options": [
            "Credit risk",
            "Liquidity risk",
            "Accounting risk"
        ],
        "correctAnswer": 2,
        "explanation": "18. C is correct because although most risks have monetary consequences, there are a \nnumber of risks that are typically classified as non-financial in nature. These risks \narise from a variety of sources, such as the relationship between the entity and \ncounterparties, regulators, governments, the environment, suppliers, customers, and \nemployees. The following three non-financial risks are related: regulatory risk, \naccounting risk, and tax risk. They could even be collectively referred to as \ncompliance risk because they all deal with the matter of conforming to policies, laws, \nrules, and regulations as set forth by governments and authoritative bodies, such as \naccounting governing boards."
    },
    {
        "id": "vikas-vohra-portfolio-management-19",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Portfolio rebalancing is best described as a process aimed at:",
        "options": [
            "generating alpha.",
            "aligning portfolio weights with the tactical asset allocation decision.",
            "restoring the portfolio's original exposures to systematic risk factors."
        ],
        "correctAnswer": 2,
        "explanation": "19. C is correct because as the portfolio is constructed and its value changes with the \nreturns of the asset classes and securities in which it is invested, the weights of the \nasset classes will gradually deviate from the policy weights in the strategic asset \nallocation. This process is referred to as drift. Periodically, or when a certain \nthreshold deviation from the policy weight (the bandwidth) has been breached, the \nportfolio should be rebalanced back to the policy weights. The set of rules that guide \nthe process of restoring the portfolio’s original exposures to systematic risk factors \nis known as the rebalancing policy."
    },
    {
        "id": "vikas-vohra-portfolio-management-20",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "The risk–return trade-off of a portfolio of only risky assets most likely improves \nwhen a risk-free asset is added to the portfolio because:",
        "options": [
            "the risk-free asset is uncorrelated with the other assets in the portfolio.",
            "the lower return on the risk-free asset provides a diversification effect.",
            "the correlations among the risky assets decrease, providing a diversification \neffect."
        ],
        "correctAnswer": 0,
        "explanation": "20. A is correct because an investor's portfolio improves if a risk-free asset is added to \nthe mix. In other words, a combination of the risk-free asset and a risky asset can \nresult in a better risk–return trade-off than an investment in only one type of asset \nbecause the risk-free asset has zero correlation with the risky asset."
    },
    {
        "id": "vikas-vohra-portfolio-management-21",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following best describes a potential consequence of the regret-aversion \nbias for financial market participants?",
        "options": [
            "Engaging in herding behaviour",
            "Borrowing excessively to finance present consumption",
            "Misidentifying risk tolerances because of how questions about risk tolerance were \nframed"
        ],
        "correctAnswer": 0,
        "explanation": "21. A is correct because as a result of regret-aversion bias, FMPs [financial market \nparticipants] may engage in herding behavior. FMPs may feel safer in popular \ninvestments in order to limit potential future regret. Regret-aversion bias is an \nemotional bias in which people tend to avoid making decisions out of fear that the \ndecision will turn out poorly."
    },
    {
        "id": "vikas-vohra-portfolio-management-22",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Cognitive errors:",
        "options": [
            "stem from impulses and intuition.",
            "result in the same decision as assumed by traditional finance theory.",
            "can often be corrected or eliminated through better information, education, and \nadvice."
        ],
        "correctAnswer": 2,
        "explanation": "22. C is correct because cognitive errors can often be Correct ed or eliminated through \nbetter information, education, and advice."
    },
    {
        "id": "vikas-vohra-portfolio-management-23",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Exchange-traded funds (ETFs):",
        "options": [
            "are priced once a trading day.",
            "usually pay out dividends to shareholders.",
            "are generally structured as closed-end funds."
        ],
        "correctAnswer": 1,
        "explanation": "23. B is correct because dividends on ETFs are paid out to the shareholders whereas \nmutual funds usually reinvest the dividends."
    },
    {
        "id": "vikas-vohra-portfolio-management-24",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Two assets have the following characteristics: \n \nThe variance of returns for an equally weighted portfolio of the two assets is closest \nto:",
        "options": [
            "0.038.",
            "0.048.",
            "0.055."
        ],
        "correctAnswer": 1,
        "explanation": "24. B is correct because for a two asset portfolio, the expression for portfolio variance \nsimplifies to the following using correlation:"
    },
    {
        "id": "vikas-vohra-portfolio-management-25",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "With respect to return-generating models, statistical factor models:",
        "options": [
            "only include factors that have economic meaning.",
            "identify factors that explain the covariance in observed returns.",
            "only include factors that have a fundamental connection to returns."
        ],
        "correctAnswer": 1,
        "explanation": "25. B is correct because in a statistical factor model, historical and cross-sectional \nreturn data are analyzed to identify factors that explain variance or covariance in \nobserved returns."
    },
    {
        "id": "vikas-vohra-portfolio-management-26",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following statements about asset allocation is most accurate?",
        "options": [
            "Investors should diversify their wealth between asset classes in order to \neliminate systematic risk.",
            "Investors with a below-average risk tolerance should have an above-average \nweight in alternative investments.",
            "Adding asset classes with a low correlation to existing asset classes improves an \ninvestor's risk–return trade-off."
        ],
        "correctAnswer": 2,
        "explanation": "26. C is correct because in general, adding assets classes with low correlation improves \nthe risk–return trade-off (more return for similar risk)."
    },
    {
        "id": "vikas-vohra-portfolio-management-27",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "An analyst gathers the following information about a portfolio and the market: \n \nJensen’s alpha for the portfolio is:",
        "options": [
            "0.0%.",
            "1.2%.",
            "2.2%."
        ],
        "correctAnswer": 1,
        "explanation": "27. B is correct because Jensen’s alpha is defined as the portfolio return less (the risk-\nfree rate plus the portfolio beta times (the market return minus the risk-free rate)). \nTherefore, Jensen's alpha = 7% – (1% + 1.2 × (5% – 1%)) = 7.0% – 5.8% = 1.2%."
    },
    {
        "id": "vikas-vohra-portfolio-management-28",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following behavioral biases is most likely the hardest to correct?",
        "options": [
            "Hindsight bias",
            "Loss-aversion bias",
            "Representativeness bias"
        ],
        "correctAnswer": 1,
        "explanation": "28. B is correct because loss-aversion bias is an emotional bias, as opposed to a cognitive \nerror, and cognitive errors can often be Correct ed or eliminated through better \ninformation, education, and advice. Emotional biases, on the other hand, are harder \nto Correct because they stem from impulses and intuitions. Thus, it is often possible \nonly to recognize an emotional bias and adapt to it. Loss-aversion bias refers to the \ntendency to strongly prefer avoiding losses to achieving gains."
    },
    {
        "id": "vikas-vohra-portfolio-management-29",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Momentum, defined as relative past stock returns, is most likely a factor in:",
        "options": [
            "fundamental factor models.",
            "the Carhart four-factor model.",
            "the Fama–French three-factor model."
        ],
        "correctAnswer": 1,
        "explanation": "29. B is correct because Mark Carhart (1997) extended the Fama and French model by \nadding another factor: momentum, defined as relative past stock returns. The best \nexample of a practical model is the four-factor model proposed by Fama and French \n(1992) and Carhart (1997)."
    },
    {
        "id": "vikas-vohra-portfolio-management-30",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following measures uses only systematic risk to evaluate portfolio \nperformance?",
        "options": [
            "M square",
            "Sharpe ratio",
            "Jensen's alpha"
        ],
        "correctAnswer": 2,
        "explanation": "30. C is correct because Jensen’s alpha is based on systematic risk. The difference \nbetween the actual portfolio return and the calculated risk-adjusted return is a \nmeasure of the portfolio’s performance relative to the market portfolio and is called \nJensen’s alpha."
    },
    {
        "id": "vikas-vohra-portfolio-management-31",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "When evaluating the return distribution of an asset class, the probability of extreme \nreturns is best assessed by the distribution's:",
        "options": [
            "kurtosis.",
            "variance.",
            "skewness."
        ],
        "correctAnswer": 0,
        "explanation": "31. A is correct because in evaluating investments using only the mean (expected return) \nand variance (risk), we are implicitly making two important assumptions: 1) that the \nreturns are normally distributed and can be fully characterized by their means and \nvariances and 2) that markets are not only informationally efficient but that they are \nalso operationally efficient. To the extent that these assumptions are violated, we \nneed to consider additional investment characteristics. One of them is kurtosis. \nKurtosis refers to fat tails or higher than normal probabilities for extreme returns \nand has the effect of increasing an asset’s risk that is not captured in a mean –\nvariance framework. This applies to asset returns as several market participants note \nthat the probability and the magnitude of extreme events is underappreciated and \nwas a primary contributing factor to the financial crisis of 2008."
    },
    {
        "id": "vikas-vohra-portfolio-management-32",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Robo-advisers most likely:",
        "options": [
            "face high barriers to entry.",
            "cater to the demand from investors with lower levels of investable assets.",
            "prefer actively managed funds to index funds when constructing client portfolios."
        ],
        "correctAnswer": 1,
        "explanation": "32. B is correct because rapid growth in robo-advisory assets is based on several industry \ntrends including growing demand from 'mass affluent' and younger investors. \nTraditional investment advice has often underserved younger and 'mass affluent' \ninvestors with lower relative levels of investable assets."
    },
    {
        "id": "vikas-vohra-portfolio-management-33",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following is most closely associated with representativeness bias?",
        "options": [
            "Momentum",
            "The halo effect",
            "Bubbles and crashes"
        ],
        "correctAnswer": 1,
        "explanation": "33. B is correct because representativeness bias attributes one positive trait as being \nrepresentative of an overall positive investment. The halo effect extends a favorable \nevaluation of some characteristics to other characteristics. A company with a good \ngrowth record and good previous share price performance might be seen as a good \ninvestment, with higher expected returns than its risk characteristics merit. This \nview is a form of representativeness that can lead investors to extrapolate recent \npast performance into expected returns."
    },
    {
        "id": "vikas-vohra-portfolio-management-34",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following statements about different types of investors is most \naccurate?",
        "options": [
            "For banks, the liquidity of their investments is a paramount concern.",
            "For endowments, investment horizons are short due to their short-term spending \nneeds.",
            "For insurance companies, the risk tolerance of their general and surplus accounts \nis typically the same."
        ],
        "correctAnswer": 0,
        "explanation": "34. A is correct because liquidity is a paramount concern for banks that stand ready to \nmeet depositor requests for withdrawals."
    },
    {
        "id": "vikas-vohra-portfolio-management-35",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following is most likely undertaken during the risk budgeting process?",
        "options": [
            "Assessing risk appetite",
            "Setting a limit for value at risk (VaR)",
            "Establishing a reserve to cover potential future losses"
        ],
        "correctAnswer": 1,
        "explanation": "35. B is correct because risk budgeting quantifies and allocates the tolerable risk by \nspecific metrics. Four well-known single-dimension measures that are often used are \nstandard deviation, beta, value at risk (VaR), and scenario loss."
    },
    {
        "id": "vikas-vohra-portfolio-management-36",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "The portfolio approach to investing most likely:",
        "options": [
            "prevents portfolio losses during market downturns.",
            "reduces the systematic risk of individual assets in a portfolio.",
            "helps avoid disastrous investment outcomes during normal market conditions."
        ],
        "correctAnswer": 2,
        "explanation": "36. C is correct because portfolio diversification helps investors avoid disastrous \ninvestment outcomes. A main tenet of the portfolio approach to investing is \ndiversification. A disastrous outcome can result from ‘putting all your eggs into one \nbasket' or investing everything into one stock whose value could then go to zero. A \ndiversified portfolio holding many securities is likely to avoid this outcome. Although \ndiversification may not prevent losses during market downturns, it does help avoid \ndisastrous investment outcomes during normal market conditions."
    },
    {
        "id": "vikas-vohra-portfolio-management-37",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "A client's time horizon is most appropriately used by an investment adviser to \ndetermine the client's:",
        "options": [
            "risk attitude.",
            "ability to take risk.",
            "willingness to take risk."
        ],
        "correctAnswer": 1,
        "explanation": "37. B is correct because the ability to bear risk is measured mainly in terms of objective \nfactors, such as time horizon, expected income, and the level of wealth relative to \nliabilities."
    },
    {
        "id": "vikas-vohra-portfolio-management-38",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following sections of an investment policy statement most likely \nprovides guidance on obtaining feedback on investment results?",
        "options": [
            "Investment Guidelines",
            "Evaluation and Review",
            "Statement of Duties and Responsibilities"
        ],
        "correctAnswer": 1,
        "explanation": "38. B is correct because the Evaluation and Review section provides guidance on obtaining \nfeedback on investment results."
    },
    {
        "id": "vikas-vohra-portfolio-management-39",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "The security market line plots the expected return of a portfolio against a measure \nof the portfolio's:",
        "options": [
            "total risk.",
            "systematic risk.",
            "unsystematic risk."
        ],
        "correctAnswer": 1,
        "explanation": "39. B is correct because the security market line (SML) is a graphical representation of \nthe capital asset pricing model with beta, reflecting systematic risk, on the x-axis \nand expected return on the y-axis."
    },
    {
        "id": "vikas-vohra-portfolio-management-40",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "An analyst estimates the standard deviation of returns for the market portfolio to \nbe 15% and the standard deviation of returns for a stock to be 25%. If the \ncorrelation of returns between the stock and the market portfolio is 0.6, the stock \nhas:",
        "options": [
            "less systematic risk than the market portfolio.",
            "the same systematic risk as the market portfolio.",
            "more systematic risk than the market portfolio."
        ],
        "correctAnswer": 1,
        "explanation": "40. B is correct because the amount of systematic risk for a company is measured by the \nstock's beta. β = ρi,m × σi / σm = 0.60 × 0.25 / 0.15 = 0.15 / 0.15 = 1. Since the \ncompany's beta equals the market portfolio's beta (the market portfolio's beta with \nitself equals 1), the company has the same level of systematic risk as the market \nportfolio."
    },
    {
        "id": "vikas-vohra-portfolio-management-41",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Risk-averse investors make investment decisions that maximize:",
        "options": [
            "both return and risk.",
            "return irrespective of risk.",
            "return for the same amount of risk."
        ],
        "correctAnswer": 2,
        "explanation": "41. C is correct because risk-averse investors make investment decisions based on the \nrisk–return trade-off, maximizing return for the same risk, and minimizing risk for \nthe same return."
    },
    {
        "id": "vikas-vohra-portfolio-management-42",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Sovereign wealth funds are best described as investment funds:",
        "options": [
            "owned by governments.",
            "traded as closed-end country funds.",
            "restricted from investing in foreign securities."
        ],
        "correctAnswer": 0,
        "explanation": "42. A is correct because sovereign wealth funds (SWFs) are government -owned \ninvestment funds."
    },
    {
        "id": "vikas-vohra-portfolio-management-43",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following lines is plotted on a graph with the excess return of a security \non the y-axis and the excess return of the market on the x-axis?",
        "options": [
            "Capital market line",
            "Security market line",
            "Security characteristic line"
        ],
        "correctAnswer": 2,
        "explanation": "43. C is correct because similar to the SML (security market line), we can draw a security \ncharacteristic line (SCL) for a security. The SCL is a plot of the excess return of the \nsecurity on the excess return of the market. The security characteristic line can also \nbe estimated by regressing the excess security return, Ri – Rf, on the excess market \nreturn, Rm – Rf."
    },
    {
        "id": "vikas-vohra-portfolio-management-44",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "According to capital market theory, the only type of risk that is priced is:",
        "options": [
            "systematic risk.",
            "diversifiable risk.",
            "idiosyncratic risk."
        ],
        "correctAnswer": 0,
        "explanation": "44. A is correct because systematic or non-diversifiable risk is priced and investors are \ncompensated for holding assets or portfolios based only on that investment's \nsystematic risk. Investors do not receive any return for accepting nonsystematic or \ndiversifiable risk. Pricing or valuing an asset is equivalent to estimating its expected \nrate of return."
    },
    {
        "id": "vikas-vohra-portfolio-management-45",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following is most accurate regarding an investment policy statement \n(IPS)?",
        "options": [
            "Policies on sustainable investing require a separate IPS.",
            "Investment constraints can be determined by the client or by the law.",
            "Clients can specify different spending goals, but each goal must have the same \nrisk tolerance and return objective."
        ],
        "correctAnswer": 1,
        "explanation": "45. B is correct because the constraints may be internal (i.e., set by the client), or \nexternal (i.e., set by law or regulation)."
    },
    {
        "id": "vikas-vohra-portfolio-management-46",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "An investor's ability to take risk:",
        "options": [
            "is a function of risk tolerance.",
            "is typically assessed by a psychometric questionnaire.",
            "increases with the length of the investment horizon, all else being equal."
        ],
        "correctAnswer": 2,
        "explanation": "46. C is correct because the ability to bear risk is measured mainly in terms of objective \nfactors, such as time horizon, expected income, and the level of wealth relative to \nliabilities. For example, an investor with a 20-year time horizon can be considered to \nhave a greater ability to bear risk, other things being equal, than an investor with a \n2-year horizon. This difference is because over 20 years there is more scope for \nlosses to be recovered or other adjustments to circumstances to be made than there \nis over two years."
    },
    {
        "id": "vikas-vohra-portfolio-management-47",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "The capital market line most likely consists of portfolios that:",
        "options": [
            "are fully diversified.",
            "have zero systematic risk.",
            "have nonsystematic risk equal to beta."
        ],
        "correctAnswer": 0,
        "explanation": "47. A is correct because the capital market line (CML) does not apply to all securities or \nassets but only to portfolios on the efficient frontier. The efficient frontier gives \noptimal combinations of expected return and total risk. Total risk and systematic risk \nare equal only for efficient portfolios because those portfolios have no diversifiable \nrisk remaining. Thus, the CML holds only for well-diversified portfolios."
    },
    {
        "id": "vikas-vohra-portfolio-management-48",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "The Markowitz efficient frontier is best described as a curve that:",
        "options": [
            "lies above and to the left of the minimum-variance frontier.",
            "connects the minimum-variance portfolios for all possible returns.",
            "contains all portfolios of risky assets that rational, risk-averse investors will \nchoose."
        ],
        "correctAnswer": 2,
        "explanation": "48. C is correct because the Markowitz efficient frontier contains all portfolios of risky \nassets that rational, risk-averse investors will choose."
    },
    {
        "id": "vikas-vohra-portfolio-management-49",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following most likely affects a client’s ability to take risk? The client’s:",
        "options": [
            "utility function",
            "degree of risk aversion",
            "level of wealth relative to liabilities"
        ],
        "correctAnswer": 2,
        "explanation": "49. C is correct because the ability to bear risk is measured mainly in terms of objective \nfactors, such as time horizon, expected income, and the level of wealth relative to \nliabilities."
    },
    {
        "id": "vikas-vohra-portfolio-management-50",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "The expected return for a security is equal to the market’s risk premium. If the risk-\nfree rate is positive and the CAPM holds, the beta of the security is:",
        "options": [
            "less than 1.",
            "equal to 1.",
            "greater than 1."
        ],
        "correctAnswer": 0,
        "explanation": "50. A is correct because the CAPM equation is E(Ri) = Rf + β[E(Rm) – Rf]. Therefore, the \nbeta of the security has to be less than 1 in order for the security’s return to be the \nsame as the market risk premium, given that the risk-free rate is positive."
    },
    {
        "id": "vikas-vohra-portfolio-management-51",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following characteristics is most likely used to determine an investor's \nability to take risk? The investor's:",
        "options": [
            "risk attitude.",
            "self-confidence.",
            "years until retirement."
        ],
        "correctAnswer": 2,
        "explanation": "51. C is correct because the ability to bear risk is measured mainly in terms of objective \nfactors, such as time horizon, For example, an investor with a 20-year time horizon \ncan be considered to have a greater ability to bear risk, other things being equal, \nthan an investor with a 2-year horizon."
    },
    {
        "id": "vikas-vohra-portfolio-management-52",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "An analyst gathers the following information: \n \nAccording to the CAPM, the expected return of the security is closest to:",
        "options": [
            "5.7%.",
            "13.2%.",
            "16.0%."
        ],
        "correctAnswer": 1,
        "explanation": "52. B is correct because the expected return of the security can be calculated using the \nCAPM equation: E(Ri) = Rf + β[E(Rm) – Rf]. The beta of the security can be calculated \nusing the equation β = (ρi,m × σi)/σm. Therefore, β = (0.8 × 35%)/20% = 1.4. Beta is \nthe product of the asset’s correlation with the market with a ratio of standard \ndeviations of return (i.e., the ratio of the asset’s standard deviation to the market’s). \nTherefore, using the CAPM equation: E(Ri) = 2% + 1.4 × (10% − 2%) = 13.2%."
    },
    {
        "id": "vikas-vohra-portfolio-management-53",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "The correlation of returns between two securities with equal standard deviation of \nreturns is 0.75. If the covariance of returns is 5.5%2, the standard deviation of \nreturns for each security is closest to:",
        "options": [
            "2.7%.",
            "3.7%.",
            "7.3%."
        ],
        "correctAnswer": 0,
        "explanation": "53. A is correct because the correlation between the returns of the two securities is:"
    },
    {
        "id": "vikas-vohra-portfolio-management-54",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "An analyst gathers the following information about an asset and the market: \n \nBased on the CAPM, the asset's beta is closest to:",
        "options": [
            "0.80.",
            "1.00.",
            "1.25."
        ],
        "correctAnswer": 0,
        "explanation": "54. A is correct because the expected return of an asset is E(Ri) = Rf + βi[E(Rm) – Rf], \nwhere Ri, Rm, and Rf denote the return on the asset, the market, and the risk-free \nasset, respectively, βi is the asset's beta, and [E(Rm) – Rf ] is the market risk \npremium. Thus, βi = [E(Ri) – Rf] / [E(Rm) – Rf] = [5% – 1%] / 5% = 4%/5% = 0.8."
    },
    {
        "id": "vikas-vohra-portfolio-management-55",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Long-term historical data on the risk–return trade-off of securities show that \ninvestors are most likely:",
        "options": [
            "risk averse.",
            "risk neutral.",
            "risk seeking."
        ],
        "correctAnswer": 0,
        "explanation": "55. A is correct because the expression 'risk–return trade-off' refers to the positive \nrelationship between expected risk and return. In other words, a higher return is not \npossible to attain in efficient markets and over long periods of time without accepting \nhigher risk. Expected returns should be greater for assets with greater risk. Over \nlong periods of time, we observe that higher risk does result in higher mean returns. \nThus, it is reasonable to claim that, over the long term, market prices reward higher \nrisk with higher returns, which is a characteristic of a risk-averse investor."
    },
    {
        "id": "vikas-vohra-portfolio-management-56",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Information regarding the permissible use of derivatives in a portfolio is most likely \nfound in which of the following sections of an investment policy statement?",
        "options": [
            "Procedures",
            "Investment Guidelines",
            "Statement of Duties and Responsibilities"
        ],
        "correctAnswer": 1,
        "explanation": "56. B is correct because the Investment Guidelines section of an Investment Policy \nStatement (IPS) provides information about how policy should be executed (e.g., on \nthe permissible use of leverage and derivatives) and on specific types of assets \nexcluded from investment, if any."
    },
    {
        "id": "vikas-vohra-portfolio-management-57",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "In the portfolio management process, the feedback step most likely involves:",
        "options": [
            "rebalancing the portfolio.",
            "deciding on an asset allocation.",
            "understanding the client's constraints."
        ],
        "correctAnswer": 0,
        "explanation": "57. A is correct because the feedback step assists the portfolio manager in rebalancing \nthe portfolio due to a change in, for example, market conditions or the circumstances \nof the client."
    },
    {
        "id": "vikas-vohra-portfolio-management-58",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following investment principles best explains the use of strategic asset \nallocation in portfolio construction?",
        "options": [
            "Returns on similar assets reflect exposures to certain sets of systematic factors.",
            "Nonsystematic risk accounts for most of the change in portfolio value over the \nlong term.",
            "Deviating from policy exposures to systematic risk factors may add value to the \nportfolio."
        ],
        "correctAnswer": 0,
        "explanation": "58. A is correct because the focus on the SAA [strategic asset allocation] is the result \nof a number of important investment principles. One such principle is that the returns \nto groups of similar assets (e.g., long-term debt claims) predictably reflect exposures \nto certain sets of systematic factors (e.g., for the debt claims, unexpected changes \nin the inflation rate)."
    },
    {
        "id": "vikas-vohra-portfolio-management-59",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "In the investment policy statement of a pension fund, a countrywide limit on the \nproportion of high-risk assets that can be held in long-term pension portfolios is most \nlikely a:",
        "options": [
            "liquidity constraint.",
            "legal and regulatory constraint.",
            "time horizon constraint."
        ],
        "correctAnswer": 1,
        "explanation": "59. B is correct because the IPS should state any legal and regulatory restrictions that \nconstrain how the portfolio is invested. In some countries, such institutional investors \nas pension funds are subject to restrictions on the composition of the portfolio. For \nexample, there may be a limit on the proportion of equities or other risky assets in \nthe portfolio, or on the proportion of the portfolio that may be invested overseas."
    },
    {
        "id": "vikas-vohra-portfolio-management-60",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "The global minimum-variance portfolio is a portfolio that lies:",
        "options": [
            "anywhere along the minimum-variance frontier.",
            "at the left-most point of the minimum-variance frontier. \n\nPortfolio Management: Practice Pack \nFaculty: Vikas Vohra                                                                        Page 10 of 30",
            "at the upper right-most point of the minimum-variance frontier."
        ],
        "correctAnswer": 1,
        "explanation": "60. B is correct because the left-most point on the minimum-variance frontier is the \nportfolio with the minimum variance among all portfolios of risky assets, and is \nreferred to as the global minimum-variance portfolio."
    },
    {
        "id": "vikas-vohra-portfolio-management-61",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following principles best explains the focus on a strategic asset \nallocation when constructing a client's IPS?",
        "options": [
            "Adding assets with high correlation improves the risk–return trade-off.",
            "Nonsystematic risk accounts for most of a portfolio’s change in value over the \nlong term.",
            "The returns to groups of similar assets predictably reflect exposures to certain \nsystematic factors."
        ],
        "correctAnswer": 2,
        "explanation": "61. C is correct because the focus on the SAA (strategic asset allocation) is the result \nof a number of important investment principles. A second principle is that the returns \nto groups of similar assets (e.g., long-term debt claims) predictably reflect exposures \nto certain sets of systematic factors (e.g., for the debt claims, unexpected changes \nin the interest rate)."
    },
    {
        "id": "vikas-vohra-portfolio-management-62",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following sections of an investment policy statement (IPS) most likely \nexplains how and when the IPS should be reviewed?",
        "options": [
            "Procedures",
            "Investment Guidelines",
            "Statement of Duties and Responsibilities"
        ],
        "correctAnswer": 0,
        "explanation": "62. A is correct because the IPS should be reviewed on a regular basis to ensure that it \nremains consistent with the client's circumstances and requirements. The IPS should \nalso be reviewed if the manager becomes aware of a material change in the client's \ncircumstances, or on the initiative of the client when his or her objectives, time \nhorizon, or liquidity needs change. The major components of an IPS include the \nfollowing section: Procedures. This section explains the steps to take to keep the IPS \ncurrent and the procedures to follow to respond to various contingencies."
    },
    {
        "id": "vikas-vohra-portfolio-management-63",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following best describes a characteristic of defined contribution \npension plans?",
        "options": [
            "The employee accepts the investment and inflation risk.",
            "The employer is responsible for adequately funding the plan.",
            "Defined contribution plans typically have a higher cost to the company than \ndefined benefit plans."
        ],
        "correctAnswer": 0,
        "explanation": "63. A is correct because the key to a defined contribution (DC) plan is that the employee \naccepts the investment and inflation risk and is responsible for ensuring that there \nare enough assets in the plan to meet their needs upon retirement."
    },
    {
        "id": "vikas-vohra-portfolio-management-64",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "The market model is most likely used to predict:",
        "options": [
            "market returns in a future period.",
            "economic growth in a future period.",
            "company-specific returns in a future period."
        ],
        "correctAnswer": 2,
        "explanation": "64. C is correct because the intercept, αi, and slope coefficient, βi, of the market model \ncan be estimated by using historical security and market returns. These parameter \nestimates are then used to predict company-specific returns that a security may earn \nin a future period."
    },
    {
        "id": "vikas-vohra-portfolio-management-65",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Open-end mutual funds typically:",
        "options": [
            "are priced intraday.",
            "have a fixed number of shares outstanding.",
            "have a larger required minimum investment than ETFs."
        ],
        "correctAnswer": 2,
        "explanation": "65. C is correct because the minimum required investment in ETFs is usually smaller than \nthat of mutual funds."
    },
    {
        "id": "vikas-vohra-portfolio-management-66",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "A portfolio consists of two securities with the following characteristics: \n \nIf the portfolio has an expected return of 12.6% and the returns of the two \nsecurities are uncorrelated, the portfolio's standard deviation is closest to:",
        "options": [
            "13.4%.",
            "15.2%.",
            "19.2%."
        ],
        "correctAnswer": 1,
        "explanation": "66. B is correct because the portfolio's weights are calculated by setting the portfolio \nreturn equal to 12.6%. The portfolio return of a two-security portfolio is:"
    },
    {
        "id": "vikas-vohra-portfolio-management-67",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "An equally weighted portfolio is composed of two risky assets. If the correlation of \nasset returns is equal to zero, the portfolio standard deviation is:",
        "options": [
            "equal to zero.",
            "equal to the weighted average of the assets' standard deviations.",
            "less than the weighted average of the assets' standard deviations."
        ],
        "correctAnswer": 2,
        "explanation": "67. C is correct because the portfolio risk is less than the weighted average of risks \nwhen the correlation of asset returns is less than one."
    },
    {
        "id": "vikas-vohra-portfolio-management-68",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "If all investors have homogeneous expectations, the total risk and expected return \nof portfolios consisting of the risk-free asset and the optimal risky portfolio are \nplotted on the:",
        "options": [
            "capital market line.",
            "security market line.",
            "security characteristic line."
        ],
        "correctAnswer": 0,
        "explanation": "68. A is correct because the risk-free asset could be combined with a risky portfolio to \ncreate a capital allocation line (CAL). A specific CAL that uses the market portfolio \nas the optimal risky portfolio is known as the capital market line. When assuming \nhomogeneous expectations, only one optimal portfolio exists. The capital market line \nis shown in Exhibit 3, where the standard deviation (σp), or total risk, is on the x-axis \nand expected portfolio return, E(Rp), is on the y-axis."
    },
    {
        "id": "vikas-vohra-portfolio-management-69",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "The risk–return profile of a portfolio's strategic asset allocation is most likely \ndetermined by the expected returns and risks of the individual asset classes and the:",
        "options": [
            "correlations between those asset classes.",
            "use of security selection for each of those asset classes.",
            "allowable deviation of portfolio weights from policy weights for those asset \nclasses."
        ],
        "correctAnswer": 0,
        "explanation": "69. A is correct because the risk–return profile of the strategic asset allocation depends \non the expected returns and risks of the individual asset classes, as well as the \ncorrelation between those asset classes."
    },
    {
        "id": "vikas-vohra-portfolio-management-70",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "A portfolio has an annual return of 15.2% and a standard deviation of returns of \n11.7%. If the risk-free rate is 3.1%, the portfolio's Sharpe ratio is closest to:",
        "options": [
            "1.03.",
            "1.30.",
            "1.56."
        ],
        "correctAnswer": 0,
        "explanation": "70. A is correct because the Sharpe ratio is defined as the portfolio’s risk premium \ndivided by its risk. Hence, the Sharpe ratio = (Rp – Rf) / σp = (15.2% – 3.1%) / 11.7% \n= 12.1% / 11.7% = 1.0342 ≈ 1.03."
    },
    {
        "id": "vikas-vohra-portfolio-management-71",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following is best classified as a financial risk?",
        "options": [
            "Tax risk",
            "Credit risk",
            "Accounting risk"
        ],
        "correctAnswer": 1,
        "explanation": "71. B is correct because the risk management industry has come to classify three types \nof risks as primarily financial in nature and the second primary financial risk is credit \nrisk."
    },
    {
        "id": "vikas-vohra-portfolio-management-72",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "The risk management measure that captures the sensitivity of a derivative’s delta to \na change in the value of the underlying best describes:",
        "options": [
            "rho.",
            "vega.",
            "gamma."
        ],
        "correctAnswer": 2,
        "explanation": "72. C is correct because the sensitivity of the derivative price to a small change in the \nvalue of the underlying asset is called the delta. Large changes are captured by the \nconcept of gamma. Whereas delta is a first-order risk, gamma is considered a second-\norder risk because it reflects the risk of changes in delta. Gamma is a numerical \nmeasure of how sensitive an option’s delta is to a change in the value of the underlying."
    },
    {
        "id": "vikas-vohra-portfolio-management-73",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "The intercept on the y-axis of the security characteristic line is:",
        "options": [
            "beta.",
            "Jensen's alpha.",
            "the risk-free rate of return."
        ],
        "correctAnswer": 1,
        "explanation": "73. B is correct because the SCL is a plot of the excess return of the security on the \nexcess return of the market. Jensen's alpha is the intercept and the beta is the \nslope."
    },
    {
        "id": "vikas-vohra-portfolio-management-74",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "With respect to an investment policy statement, which of the following is most closely \nlinked to the client’s distinctive needs?",
        "options": [
            "The evaluation and review section \nPortfolio Management: Practice Pack \nFaculty: Vikas Vohra                                                                        Page 12 of 30",
            "The objectives and constraints sections",
            "The statement of duties and responsibilities"
        ],
        "correctAnswer": 1,
        "explanation": "74. B is correct because the sections that are most closely linked to the client’s \ndistinctive needs, and probably the most important from a planning perspective, are \nthose dealing with investment objectives and constraints. An IPS [investment policy \nstatement] focusing on these two elements has been called an IPS in an ‘objectives \nand constraints’ format."
    },
    {
        "id": "vikas-vohra-portfolio-management-75",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "The slope of the security market line is most likely the:",
        "options": [
            "security's beta.",
            "market risk premium.",
            "market risk premium divided by the market standard deviation."
        ],
        "correctAnswer": 1,
        "explanation": "75. B is correct because the security market line (SML) is a graphical representation of \nthe capital asset pricing model with beta, reflecting systematic risk, on the x-axis \nand expected return on the y-axis. The slope of this line is the market risk premium, \nRm – Rf."
    },
    {
        "id": "vikas-vohra-portfolio-management-76",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following performance measures is equal to the slope of the capital \nallocation line?",
        "options": [
            "M-square",
            "Sharpe ratio",
            "Treynor ratio"
        ],
        "correctAnswer": 1,
        "explanation": "76. B is correct because the Sharpe ratio, also called the reward-to-variability ratio, is \nsimply the slope of the capital allocation line."
    },
    {
        "id": "vikas-vohra-portfolio-management-77",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following sections of an investment policy statement for a pension plan \nmost likely specifies the discretion that portfolio managers have with respect to \nexecuting the investment strategy?",
        "options": [
            "Procedures",
            "Investment Constraints",
            "Statement of Duties and Responsibilities"
        ],
        "correctAnswer": 2,
        "explanation": "77. C is correct because the Statement of Duties and Responsibilities section details the \nduties and responsibilities of the client, the custodian of the client’s assets, and the \ninvestment managers. In the case of an institution, such as a pension plan or university \nendowment, the IPS may set out the governance arrangements that apply to the \ninvestment funds. For example, this information could cover the investment \ncommittee’s approach to appointing and reviewing investment managers for the \nportfolio, and the discretion that those managers have."
    },
    {
        "id": "vikas-vohra-portfolio-management-78",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following measures is most appropriate to evaluate the performance of \na portfolio that is not fully diversified?",
        "options": [
            "Sharpe ratio",
            "Treynor ratio",
            "Jensen's alpha"
        ],
        "correctAnswer": 0,
        "explanation": "78. A is correct because total risk is relevant for an investor when he or she holds a \nportfolio that is not fully diversified, which is not a desirable portfolio. In such cases, \nthe Sharpe ratio and M2 are appropriate performance measures. The Sharpe ratio \nuses total risk as a measure of risk."
    },
    {
        "id": "vikas-vohra-portfolio-management-80",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following metrics is most appropriate to estimate a bond's average \nextreme loss?",
        "options": [
            "VaR of loss",
            "Standard deviation of loss",
            "Expected loss given default"
        ],
        "correctAnswer": 2,
        "explanation": "80. C is correct because the statistics used to estimate VaR can be used to gauge average \nextreme losses. Conditional VaR or CVaR is a common tail loss measure, defined as \nthe weighted average of all loss outcomes in the statistical distribution that exceed \nthe VaR loss. Another tail risk metric in the credit risk space that is analogous to \nCVaR is expected loss given default, which answers the question for a debt security, \nIf the underlying company or asset defaults, how much do we lose on average?"
    },
    {
        "id": "vikas-vohra-portfolio-management-81",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "An analyst gathers the following information about the security market line (SML) \nand a stock: \n \nAccording to capital market theory, if the analyst believes the stock will have a \nreturn of 7%, the stock is:",
        "options": [
            "undervalued.",
            "properly valued.",
            "overvalued."
        ],
        "correctAnswer": 2,
        "explanation": "81. C is correct because the security market line (SML) is a graphical representation of \nthe capital asset pricing model with beta, reflecting systematic risk, on the x-axis \nand expected return on the y-axis. Using the same concept as the capital market line, \nthe SML intersects the y-axis at the risk-free rate of return, and the slope of this \nline is the market risk premium, Rm – Rf . Potential investors can plot a security’s \nexpected return and beta against the SML and use this relationship to decide \nwhether the security is overvalued or undervalued in the market. All securities that \nreflect the consensus market view are points directly on the SML (i.e., properly \nvalued). If a point representing the estimated return of an asset is above the SML, \nthe asset has a low level of risk relative to the amount of expected return and would \nbe a good choice for investment. In contrast, if the point representing a particular \nasset is below the SML, the stock is considered overvalued. The asset will be on the \nSML if the forecasted return equals the expected return of 0.02 + 1.3 × 0.05 = 0.085 \n= 8.5%. Since the analyst forecasts the return of the asset to be 7%, which is lower \nthan the expected return according to the CAPM, the security plots below the SML \nand should be considered overvalued."
    },
    {
        "id": "vikas-vohra-portfolio-management-82",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Relative to passive market-cap-weighted strategies, smart beta strategies typically \nhave:",
        "options": [
            "lower management fees and higher portfolio turnover.",
            "higher management fees and lower portfolio turnover.",
            "higher management fees and higher portfolio turnover."
        ],
        "correctAnswer": 2,
        "explanation": "82. C is correct because typically, smart beta strategies feature somewhat higher \nmanagement fees and higher portfolio turnover relative to passive market -cap \nweighted strategies."
    },
    {
        "id": "vikas-vohra-portfolio-management-83",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "When defining asset classes for a strategic asset allocation, which of the following \npairwise correlations between asset class returns is most preferable?",
        "options": [
            "0.0",
            "0.5",
            "1.0"
        ],
        "correctAnswer": 0,
        "explanation": "83. A is correct because when defining asset classes, a number of criteria apply. \nIntuitively, an asset class should contain relatively homogeneous assets while \nproviding diversification relative to other asset classes. In statistical terms, risk and \nreturn expectations should be similar and paired correlations of assets should be \nrelatively high within an asset class but should be lower versus assets in other asset \nclasses. A between asset class correlation of zero would indicate better defined \nasset classes than higher correlations would."
    },
    {
        "id": "vikas-vohra-portfolio-management-84",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "According to capital market theory, an efficient market does not reward investors \nfor taking on:",
        "options": [
            "market risk.",
            "systematic risk.",
            "idiosyncratic risk."
        ],
        "correctAnswer": 2,
        "explanation": "84. C is correct because we can assume that in an efficient market, no incremental reward \ncan be earned for taking on diversifiable risk. Nonsystematic risk is the risk that \npertains to a single company or industry and is also known as company -specific, \nindustry-specific, diversifiable, or idiosyncratic risk."
    },
    {
        "id": "vikas-vohra-portfolio-management-85",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following is most likely a legal and regulatory constraint in an investment \npolicy statement?",
        "options": [
            "A pension fund's decision to limit investments in real estate",
            "A taxable investor's requirement to avoid investments in securities generating \ninterest income",
            "A public company director's restriction on trading the company's stock shortly \nbefore the publication of financial results"
        ],
        "correctAnswer": 2,
        "explanation": "85. C is correct because when an individual has access to material nonpublic information \nabout a particular security, this situation may also form a [legal and regulatory] \nconstraint. For example, the directors of a public company may need to refrain from \ntrading the company's stock at certain points of the year before financial results are \npublished. The IPS should note this constraint so that the portfolio manager does \nnot inadvertently trade the stock on the client's behalf."
    },
    {
        "id": "vikas-vohra-portfolio-management-86",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "When defining asset classes, the paired correlations of assets within an asset class \nshould be:",
        "options": [
            "negative.",
            "zero.",
            "Positive."
        ],
        "correctAnswer": 2,
        "explanation": "86. C is correct because when defining asset classes an asset class should contain \nrelatively homogeneous assets and paired correlations of assets should be relatively \nhigh within an asset class."
    },
    {
        "id": "vikas-vohra-portfolio-management-87",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "An investor gathers the following information about a security and the market: \n \nThe correlation between the security's returns and the market's returns is closest \nto:",
        "options": [
            "0.2.",
            "0.5.",
            "0.8."
        ],
        "correctAnswer": 1,
        "explanation": "87. B is correct because βi = ρi,m × σi/σm, where ρi,m denotes the correlation between \nthe asset returns and the market returns, and σi and σm denote the standard \ndeviation of the asset returns and the market returns, respectively. Thus, correlation \nρi,m = βi × σm/σi = 0.35 × 0.18/0.12 = 0.525 ≈ 0.5."
    },
    {
        "id": "vikas-vohra-portfolio-management-88",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "A bank determines that its value at risk (VaR) is £5 million at 5% for one day. The \nbank is expecting a minimum loss of £5 million once every:",
        "options": [
            "5 business days.",
            "13 business days.",
            "20 business days."
        ],
        "correctAnswer": 2,
        "explanation": "88. C is correct because with a probability of 5% and a measurement period of one day, \nwe can interpret the bank’s VaR as expecting a minimum loss of £5 million once every \n20 business days."
    },
    {
        "id": "vikas-vohra-portfolio-management-89",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "A good risk management process should:",
        "options": [
            "predict when a crisis will occur.",
            "consider the balance between expected returns and losses.",
            "only consider losses occurring from events that have a high likelihood."
        ],
        "correctAnswer": 1,
        "explanation": "89. B is correct because a good risk management process would include a deep discussion \nat the governance level about the balance between the likely returns and the \nunlikely—but sizable—losses and whether such losses are tolerable."
    },
    {
        "id": "vikas-vohra-portfolio-management-90",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "A portfolio consisting of two securities has the following characteristics: \n \nIf the correlation of returns between the two securities is 0.20, the portfolio's \nstandard deviation of returns is closest to:",
        "options": [
            "1.8%.",
            "9.1%.",
            "13.4%."
        ],
        "correctAnswer": 2,
        "explanation": "90. C is correct because σport ="
    },
    {
        "id": "vikas-vohra-portfolio-management-91",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "An investor has a 15-year time horizon but needs to withdraw funds from her \nportfolio in one year's time to pay for tuition fees. Which of the following \ninvestments is most suitable to cover the investor's liquidity requirement due to the \ntuition fees?",
        "options": [
            "Commercial paper",
            "Private equity securities",
            "Large-capitalization stocks"
        ],
        "correctAnswer": 0,
        "explanation": "91. A is correct because, although the investor has a time horizon of 15 years, she has \nliquidity needs in one year. When the client does have such a requirement, the \nmanager should allocate part of the portfolio to cover the liability. This part of the \nportfolio will be invested in assets that are liquid—that is, easily converted to cash—\nand low risk at the point in time the liquidity need is actually present (e.g., a bond \nmaturing at the time when private education expenses will be incurred), so that their \nvalue is known with reasonable certainty. Commercial paper is a short -term, \nnegotiable, unsecured promissory note that represents a debt obligation of the \nissuer. Thus, commercial paper being a short-term investment, it is more suitable \ncompared to private equity and large-capitalization stocks to be included in the \nportion of the investor's portfolio that has the short-term liquidity need."
    },
    {
        "id": "vikas-vohra-portfolio-management-92",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "With respect to capital market theory, which of the following statements is most \naccurate?",
        "options": [
            "The optimal risky portfolio is dependent on the risk-free rate.",
            "The optimal risky portfolio is dependent on the investor's risk profile.",
            "The investor's optimal portfolio must lie on the Markowitz efficient frontier."
        ],
        "correctAnswer": 0,
        "explanation": "92. A is correct because, for a given Markowitz efficient frontier, a different risk-free \nrate will result in a different tangent to the frontier, hence a different optimal risky \nportfolio. CAL(P) is the optimal capital allocation line and Portfolio P is the optimal \nrisky portfolio. Thus, with the addition of the risk-free asset, we are able to narrow \nour selection of risky portfolios to a single optimal risky portfolio, P, which is at the \ntangent of CAL(P) and the efficient frontier of risky assets."
    },
    {
        "id": "vikas-vohra-portfolio-management-94",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "A security with a beta of 1.5 has an expected return of 11% according to the CAPM. \nIf the risk-free rate is 2%, the market risk premium is closest to:",
        "options": [
            "4.0%.",
            "6.0%.",
            "7.3%."
        ],
        "correctAnswer": 1,
        "explanation": "94. B is correct because, according to the CAPM, the expected return of a security is \nE(Ri) = Rf + βi[E(Rm) – Rf], such that [E(Rm) – Rf ]= [E(Ri) – Rf]/βi = (0.11 – 0.02)/1.5 \n= 0.06 = 6%. The market risk premium is E(Rm) – Rf = 6%."
    },
    {
        "id": "vikas-vohra-portfolio-management-95",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "An analyst gathers the following information about a portfolio and the market: \n \nThe portfolio's Treynor ratio is closest to:",
        "options": [
            "0.060.",
            "0.114.",
            "0.413."
        ],
        "correctAnswer": 1,
        "explanation": "95. B is correct because"
    },
    {
        "id": "vikas-vohra-portfolio-management-96",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "For an equally weighted portfolio, an increase in the correlations between asset \nreturns most likely decreases the:",
        "options": [
            "portfolio's expected return.",
            "portfolio's standard deviation of returns.",
            "level of risk reduction provided by the portfolio."
        ],
        "correctAnswer": 2,
        "explanation": "96. C is correct because, as the correlations between asset returns increase, the \ndiversification benefit provided by portfolios decreases. A major reason that \nportfolios can effectively reduce risk is that combining securities whose returns do \nnot move together provides diversification. However, an important issue is that the \nco-movement or correlation pattern of the securities' returns in the portfolio can \nchange in a manner unfavorable to the investor. When we examine the returns of a \nset of global equity indexes over the last 15 years, we observe a reduction in the \ndiversification benefit due to a change in the pattern of co-movements of returns. \nThe degree to which these global equity indexes move together has increased over \ntime. \n \nThe lesson is that although portfolio diversification generally does reduce risk, it \ndoes not necessarily provide the same level of risk reduction during times of severe \nmarket turmoil as it does when the economy and markets are operating ‘normally'."
    },
    {
        "id": "vikas-vohra-portfolio-management-99",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "In risk management, which of the following should be taken into account when \ndetermining an enterprise’s risk tolerance?",
        "options": [
            "Management compensation",
            "The enterprise’s value at risk (VaR)",
            "The government and regulatory landscape"
        ],
        "correctAnswer": 2,
        "explanation": "99. C is correct because, in the context of risk management, factors such as a company’s \ngoals, its expertise in certain areas, and its strategies will help a board determine \nwhich risks the company may pursue and with how much intensity. The government \nand regulatory landscape is important too, both in their ex ante demands on how \ncompanies approach risk and in the likely ex post reaction in the event of disasters."
    },
    {
        "id": "vikas-vohra-portfolio-management-100",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Two investors have indifference curves that are tangent to the same capital \nallocation line (CAL). If Investor 1 is more risk averse than Investor 2, Investor 1's \noptimal portfolio is:",
        "options": [
            "to the left of Investor 2's optimal portfolio on the CAL.",
            "at the same point on the CAL as Investor 2's optimal portfolio.",
            "to the right of Investor 2's optimal portfolio on the CAL. \n \nSolutions"
        ],
        "correctAnswer": 0,
        "explanation": "100. A is correct because the optimal portfolio maximizes the return per unit of risk \n(as it is on the capital allocation line), and it simultaneously supplies the investor with \nthe most satisfaction (utility). \n\nAlternative Investments: Practice Pack \n\ncandidates for practice purpose."
    },
    {
        "id": "vikas-vohra-portfolio-management-2",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following forms of digital asset investment most likely involves the use \nof a cryptocurrency wallet?",
        "options": [
            "Direct investment",
            "Indirect investment via ETFs",
            "Indirect investment via coin trusts"
        ],
        "correctAnswer": 1,
        "explanation": "2. B is correct because risk management is the process by which an organization or \nindividual defines the level of risk to be taken, measures the level of risk being taken, \nand adjusts the latter toward the former, with the goal of maximizing the company’s \nor portfolio’s value. Said differently, risk management comprises all the decisions and \nactions needed to best achieve organizational or personal objectives while bearing a \ntolerable level of risk."
    },
    {
        "id": "vikas-vohra-portfolio-management-3",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "The correlation of cryptocurrencies with traditional assets has been:",
        "options": [
            "decreasing.",
            "steady.",
            "increasing."
        ],
        "correctAnswer": 2,
        "explanation": "3. C is correct because risk governance is the top-down (not bottom-up) process and \nguidance that directs risk management activities to align with and support the overall \nenterprise."
    },
    {
        "id": "vikas-vohra-portfolio-management-4",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Which of the following is most likely a major driver of bitcoin returns?",
        "options": [
            "Increased market adoption",
            "The prospect of underlying cashflow generation",
            "Consistently high correlation with traditional asset classes"
        ],
        "correctAnswer": 2,
        "explanation": "4. C is correct because a benchmark is used as a relative return objective and a good \nbenchmark should be investable."
    },
    {
        "id": "vikas-vohra-portfolio-management-5",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Cryptocurrencies can be issued by:",
        "options": [
            "individuals only.",
            "corporations and organisations only.",
            "individuals, corporations and organisations."
        ],
        "correctAnswer": 1,
        "explanation": "5. B is correct because a combination of the risk-free asset and a risky asset can result \nin a better risk–return trade-off than an investment in only one type of asset because \nthe risk-free asset has zero correlation with the risky asset. The optimal risky \nportfolio is a risky asset, and thus has zero correlation with the risk-free asset."
    },
    {
        "id": "vikas-vohra-portfolio-management-6",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "Compared to traditional financial assets, digital assets:",
        "options": [
            "can be invested in through indirect investment vehicles such as ETFs.",
            "are generally recorded in private ledgers maintained by central intermediaries.",
            "do not have an inherent value based on underlying assets or on potential cash \nflows."
        ],
        "correctAnswer": 1,
        "explanation": "6. B is correct because a leveraged portfolio is a portfolio that has a negative \ninvestment in the risk-free asset. \n \nA portfolio's expected return, E(Rp), is calculated as: E(Rp) = w1Rf + (1 – w1)E(Rm), \nwhere w1 is the proportion invested in the risk-free asset, returning Rf, and E(Rm) is \nthe expected return on the market portfolio. \n \nThus, 0.18 = w1 × 0.03 + (1 – w1) × 0.15 \n \n0.18 – 0.15 = w1 × (0.03 – 0.15) \n \n0.03 = w1 × (–0.12) \n \nw1 = 0.03/(–0.12) \n \nw1 = –0.25 \n \nA negative proportion invested in the risk-free rate implies a leveraged portfolio."
    },
    {
        "id": "vikas-vohra-portfolio-management-7",
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "LM - Portfolio Management",
        "text": "A measure that restricts new investors in a hedge fund from redeeming their capital \nfor a set amount of time in order to implement the fund's investment strategy is \nknown as a:",
        "options": [
            "gate.",
            "notice period.",
            "lockup period."
        ],
        "correctAnswer": 1,
        "explanation": "7. B is correct because a risk-free asset (𝜎! = 0) generates the same utility for all \nindividuals. If 𝜎! = 0, then U = E(r) - 1/2(A)(\t𝜎!) = E(r) for all individuals."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-6",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following statements is most accurate? Cryptocurrencies:",
        "options": [
            "exhibit low volatility.",
            "have no limits on the total amount of currency that may be issued.",
            "allow transactions between parties without the need for an intermediary."
        ],
        "correctAnswer": 0,
        "explanation": "6. A is correct because (1) Kim discusses his concerns with Frost before executing the \ntrade, (2) Frost acknowledges this discussion and accepts the conditions of \nunsuitability, (3) Kim's firm does not require approval for unsuitable trades since it \nhas no policy on the subject, and (4) the request does not have a material impact on \nFrost's portfolio since it represents only one percent of its value, hence no \nmodification of the IPS is required. According to Standard III(C), Suitability, in \ncases of unsolicited trade requests that a member or candidate knows are unsuitable \nfor a client, the member or candidate should refrain from making the trade until he \nor she discusses the concerns with the client. Following the discussion, the member \nor candidate may follow his or her firm’s policies regarding the necessary client \napproval for executing unsuitable trades. At a minimum, the client should acknowledge \nthe discussion and accept the conditions that make the recommendation unsuitable. \nShould the unsolicited request be expected to have a material impact on the portfolio, \n                                                                         \n \nthe member or candidate should use this opportunity to update the investment policy \nstatement."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-7",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following is a recommended procedure for compliance with the Standard \nrelating to loyalty, prudence, and care? Members should:",
        "options": [
            "eliminate all actual and potential conflicts of interest.",
            "make their clients aware of all forms of manager compensation.",
            "submit to each client, at least annually, an itemized statement showing the funds \nand securities in custody."
        ],
        "correctAnswer": 1,
        "explanation": "7. B is correct because a recommended procedure for Standard III (A), Loyalty, \nPrudence, and Care is members and candidates should make their clients aware of all \nforms of manager compensation."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-8",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the Standards, a member who is asked to produce an issuer -paid \nresearch report is required to:",
        "options": [
            "avoid cash compensation.",
            "disclose the nature of their compensation in the report.",
            "decline to write the report if the member's firm provides investment banking \nservices to the issuer."
        ],
        "correctAnswer": 1,
        "explanation": "8. B is correct because according to Standard I (B), Independence and Objectivity, \nmembers are required to disclose their compensation. Members and candidates must \nadhere to strict standards of conduct that govern how the research is to be \nconducted and what disclosures must be made in the report. Analysts must engage in \nthorough, independent, and unbiased analysis and must fully disclose potential \nconflicts of interest, including the nature of their compensation."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-9",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Ann Jules, CFA, discovered that her employer, Plutus Investments Inc. (PII), inflates \ninvestment performance in PII's marketing brochure. In accordance with firm policy, \nJules uses PII’s marketing brochure to present to prospective clients. In addition, \nJules emails stock recommendations to her clients in capsule form and offers \nadditional information only upon request. Jules has most likely violated the \nStandards:",
        "options": [
            "by emailing stock recommendations to her clients in capsule form.",
            "only by using PII’s marketing brochure to present to prospective clients.",
            "both by emailing stock recommendations to her clients in capsule form and by \nusing PII’s marketing brochure to present to prospective clients."
        ],
        "correctAnswer": 1,
        "explanation": "9. B is correct because according to Standard I(C), Misrepresentation members and \nCandidates must not knowingly make any misrepresentations relating to investment \nanalysis, recommendations, actions, or other professional activities. By using PII’s \nmarketing brochure that inflates performance to present to prospective clients, \nJules has violated Standard I(C)."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-10",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Maria Jennings, CFA, overhears the CEO of United Retail saying that the quarterly \nreport to be released next week will miss analysts' expectations. Jennings \nimmediately calls her brother who owns the stock to tell him what she overheard. \nOne week later, Jennings writes a report on another company, KTD retail. She uses \npublic and nonmaterial nonpublic information for her analysis to issue a \"buy\" \nrecommendation. Has Jennings most likely violated the Standards?",
        "options": [
            "No",
            "Yes, by calling her brother to tell him what she overheard \nEthical and Professional Standards \nFaculty: Vikas Vohra                                                                        Page 3 of 58",
            "Yes, by using public and nonmaterial nonpublic information for her analysis to issue \na \"buy\" recommendation"
        ],
        "correctAnswer": 1,
        "explanation": "10. B is correct because according to Standard II (A), Material Nonpublic Information, \nMembers and Candidates who possess material nonpublic information that could \naffect the value of an investment must not act or cause others to act on the \ninformation. Also, Information is “material” if its disclosure would probably have an \nimpact on the price of a security or if reasonable investors would want to know the \ninformation before making an investment decision -- such as the results of an \nupcoming quarterly report from a reliable source (the CEO). Jennings prompted her \nsister to act on it, hence, violated the Standard."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-11",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the Standards, which of the following is most likely considered material \nnonpublic information?",
        "options": [
            "The recent execution of a large buy order from a hedge fund.",
            "Significant legal challenges revealed at an internal meeting of the company's \nmanagement.",
            "Recent increases in a company's board remuneration discussed at the annual \ngeneral meeting."
        ],
        "correctAnswer": 1,
        "explanation": "11. B is correct because according to Standard II(A) Material Nonpublic Information, \nmaterial information may include, but is not limited to, information on the following: \nsignificant legal disputes."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-12",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the Standard relating to fair dealing, when members disseminate \ninvestment recommendations, they are most likely required to make every effort to \ntreat individual clients in a(n):",
        "options": [
            "fair and equal manner.",
            "fair and impartial manner.",
            "equal and impartial manner."
        ],
        "correctAnswer": 1,
        "explanation": "12. B is correct because according to Standard III (B), Fair Dealing, members and \ncandidates must make every effort to treat all individual and institutional clients in \na fair and impartial manner. Additionally, the term 'fairly' implies that the member \nor candidate must take care not to discriminate against any clients when \ndisseminating investment recommendations or taking investment action. Standard \nIII(B) does not state 'equally' because members and candidates could not possibly \nreach all clients at exactly the same time..."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-13",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the recommended procedure for compliance with the Standard relating \nto fair dealing, a member who works in a large firm should:",
        "options": [
            "offer different levels of service to clients selectively based on the clients' \ninvestment needs.",
            "disclose to clients and prospective clients how she selects accounts to participate \nin an order.",
            "inform all firm staff of the content of upcoming investment recommendations to \nassure that all clients' investment needs are met."
        ],
        "correctAnswer": 1,
        "explanation": "13. B is correct because according to Standard III (B), Fair Dealing, Members and \ncandidates should disclose to clients and prospective clients how they select accounts \nto participate in an order."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-14",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following statements is accurate according to the Standards? \nStatement 1: A member, prior to leaving his current employer, may contact potential \nclients for purposes of soliciting their business for their new employer. \nStatement 2: A member, while still employed, is free to make arrangements outside \nof normal working hours to apply for a license with the local regulator to set up a \ncompeting business.",
        "options": [
            "Statement 1 only.",
            "Statement 2 only.",
            "Both Statement 1 and Statement 2."
        ],
        "correctAnswer": 1,
        "explanation": "14. B is correct because according to Standard IV(A), Loyalty, a departing employee is \ngenerally free to make arrangements or preparations to go into a competitive business \nbefore terminating the relationship with his or her employer as long as such \npreparations do not breach the employee’s duty of  loyalty. Also, Allen’s [the \nmember's] preparation for the new business by registering with the regulatory \nauthorities does not conflict with the work for her employer if the preparations have \nbeen done on Allen’s [the member's] own time outside the office and if Allen [the \nmember] will not be soliciting clients for the business or otherwise operating the new \ncompany until she has left her current employer. Therefore, Statement 2 is accurate."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-15",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the Standard relating to disclosure of conflicts, buy-side members \nshould disclose to clients their:",
        "options": [
            "beneficial ownership in any security.",
            "firm's procedures for reporting requirements for personal transactions.",
            "firm's policies on blackout periods during which the member cannot trade for \nclients."
        ],
        "correctAnswer": 1,
        "explanation": "15. B is correct because according to Standard VI(A), Disclosure of Conflicts, buy-side \nmembers and candidates should disclose their procedures for reporting requirements \nfor personal transactions. Conflicts arising from personal investing are discussed \nmore fully in the guidance for Standard VI(B). Therefore, not disclosing the \nprocedure for a buy-side member is a violation."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-16",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Michael Mak, CFA, is a portfolio manager at an investment firm. After comprehensive \nresearch, Mak buys Advance One Tech's (AOT) stock for all his clients for whom the \ninvestment is suitable. He then buys AOT shares for his brother's fee -paying \naccount, in which Mak has beneficial ownership. AOT's stock price declines \nsignificantly after a month, resulting in substantial losses for all his clients. Are \nMak's actions consistent with the Standards?",
        "options": [
            "Yes",
            "No, Mak's actions are not consistent with the Standard relating to priority of \ntransactions",
            "No, Mak's actions are not consistent with the Standard relating to diligence and \nreasonable basis"
        ],
        "correctAnswer": 1,
        "explanation": "16. B is correct because according to Standard VI(B), Priority of Transactions, family \naccounts that are client accounts should be treated like any other firm account and \nshould neither be given special treatment nor be disadvantaged because of the family \nrelationship. If a member or candidate has a beneficial ownership in the account, \nhowever, the member or candidate may be subject to preclearance or reporting \nrequirements of the employer or applicable law. Mak should treat his brother's fee \npaying account like any other firm account and should not be disadvantaged. \nTherefore, Mak's actions are not consistent with the Standard relating to priority \nof transactions."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-17",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "With respect to the GIPS standards, which of the following statements is most \naccurate? Verification:",
        "options": [
            "of GIPS compliance is mandatory if the firm claims GIPS compliance.",
            "is performed by the firm when self -regulating and certifying its claim of \ncompliance.",
            "tests whether the firm's processes are designed to present performance results \nin compliance with the GIPS standards."
        ],
        "correctAnswer": 2,
        "explanation": "17. C is correct because according to GIPS, Verification is a process by which an \nindependent verification firm (verifier) conducts testing of a firm on a firm-wide \nbasis in accordance with the required verification procedures of the GIPS standards. \nVerification provides assurance on whether the firm’s policies and procedures related \nto composite and pooled fund maintenance, as well as the calculation, presentation, \nand distribution of performance, have been designed in compliance with the GIPS \nstandards and have been implemented on a firm-wide basis."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-18",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following is a violation of the Standard relating to conduct as \nparticipants in CFA Institute Programs? A candidate:",
        "options": [
            "discusses broad topic areas covered in the curriculum in an online forum.",
            "tells her brother, after taking the exam, how glad she was that no questions about \nthe binomial model were asked.",
            "publishes on a social media website her disappointment about what she thinks is \nan overly academic CFA Program."
        ],
        "correctAnswer": 1,
        "explanation": "18. B is correct because according to Standard VII (A), Conduct as Participants in CFA \nInstitute Programs, CFA Institute program rules, regulations, and policies prohibit \ncandidates from disclosing confidential material gained during the exam process. \nExamples of information that cannot be disclosed by candidates sitting for an exam \ninclude but are not limited to broad topical areas and formulas tested or not tested \non the exam. Therefore, the candidate has violated Standard VII (A) by telling her \nbrother how glad she was that no questions about the binomial model were asked."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-19",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Johny Lumunon, CFA, shows prospective clients the investment performance of an \naccount with \"balanced\" investment objectives and highlights how account has \noutperformed the benchmark in the last 10 years. He does not disclose that this is \nthe best performing account, and that half of the accounts with “balanced” \ninvestment objectives managed by his firm underperformed the benchmark during \nthe same period. Lumunon has most likely violated the Standard(s) relating to:",
        "options": [
            "only misrepresentation.",
            "only performance presentation.",
            "both misrepresentation and performance presentation."
        ],
        "correctAnswer": 2,
        "explanation": "19. C is correct because according to Standard I (C), Misrepresentation, a member or \ncandidate must not knowingly omit or misrepresent information or give a false \nimpression of a firm, organization, or security in the member’s or candidate’s oral \n                                                                         \n \nrepresentations, advertising (whether in the press or through brochures), electronic \ncommunications, or written materials (whether publicly disseminated or not). By \nshowing investment results of only one “balanced” account, and failing to disclose that \nthat this is the best-performing account and that half of the balanced accounts \nunderperformed the benchmark, Lumunon has violated Standard I (C). Further \nStandard III (D), Performance Presentation, requires members and candidates to \navoid misstating performance or misleading clients and prospective clients about the \ninvestment performance of members or candidates or their firms. This standard \nencourages full disclosure of investment performance data to clients and prospective \nclients. Thus, Lumunon has also violated Standard III (D)."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-20",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Jordan Kope, CFA, is an analyst with a hedge fund and works closely with Deepa Bose \nwho earned her CFA designation 15 years ago. Kope becomes aware that Bose uses \nher CFA designation even though she no longer pays her membership dues. During \nseveral meetings that Bose and Kope have with the firm’s clients, Bose emphasizes \nthat all her team members, including herself, are CFA charterholde rs. To be \nconsistent with the Standards, Kope should:",
        "options": [
            "only dissociate himself from activities involving Bose. \nEthical and Professional Standards \nFaculty: Vikas Vohra                                                                        Page 5 of 58",
            "only report Bose's conduct to the fund's compliance department.",
            "dissociate himself from activities involving Bose and report Bose's conduct to the \nfund's compliance department."
        ],
        "correctAnswer": 2,
        "explanation": "20. C is correct because according to Standard I(A), Knowledge of the Law, Members and \nCandidates must not knowingly participate or assist in and must dissociate from any \nviolation of such laws, rules, or regulations. In this case, by staying silent in a client \nmeeting in which he knows false information is being given to a potential investor that \ncould cause harm to that investor, Kope would be seen as assisting Bose in providing \nthat false information, even though Kope is not actively engaging in the misconduct \nhimself. Kope should report her conduct to the fund’s compliance department for it \nto address and should dissociate himself from activities involving Bose and report \nBose's conduct to the fund's compliance department."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-21",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the recommended procedures for compliance with the Standard relating \nto responsibilities of supervisors, a firm's code of ethics should:",
        "options": [
            "only be written in plain language.",
            "only be integrated in the firm's compliance procedures.",
            "both be written in plain language and be integrated in the firm's compliance \nprocedures."
        ],
        "correctAnswer": 0,
        "explanation": "21. A is correct because according to recommended procedures for compliance with \nStandard IV (C), Responsibilities of Supervisors, Stand-alone codes of ethics should \nbe written in plain language and should address general fiduciary concepts."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-22",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the Standard relating to diligence and reasonable basis, a member is \nrequired to:",
        "options": [
            "exercise diligence, independence, and thoroughness in analyzing investments.",
            "become an expert in the technical aspects of the models used for investment \nrecommendations.",
            "dissociate and remove her name from a company group report if the report does \nnot reflect her opinion."
        ],
        "correctAnswer": 0,
        "explanation": "22. A is correct because according to Sta ndard V(A) Investment Analysis, \nRecommendations, and Actions - Diligence and Reasonable Basis, Members and \nCandidates must: Exercise diligence, independence, and thoroughness in analyzing \ninvestments, making investment recommendations, and taking investment actions."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-23",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "After completing Level II of the CFA exam, Aashi Banerjee posts several comments \non an online chatroom for CFA program candidates. Which of the following comments \nviolate the Standard relating to conduct as participants in CFA Institute programs? \nComment 1: CFA Institute must revise the topic area weights on the exam. \nComment 2: There were no questions on GIPS standards.",
        "options": [
            "Comment 1 only",
            "Comment 2 only",
            "Both Comment 1 and Comment 2"
        ],
        "correctAnswer": 1,
        "explanation": "23. B is correct because according to Standard VII(A), when expressing a personal \nopinion, a candidate is prohibited from disclosing content -specific information, \nincluding any actual exam question and the information as to subject matter covered \nor not covered in the exam. By making Comment 2, Banerjee may have provided \ninformation on the subject matter covered on the exam and hence violated the \nStandard."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-24",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following activities violates the Standard relating  to market \nmanipulation? \nActivity 1: A member secures a dominant position in futures contracts to influence \nthe price of the underlying. The transaction results in large losses for the member. \nActivity 2: A member frequently trades a stock in multiple client accounts with an \nintent to increase the volume of the stock. The transactions result in large gains for \nthe clients.",
        "options": [
            "Activity 1 only",
            "Activity 2 only",
            "Both Activity 1 and Activity 2"
        ],
        "correctAnswer": 2,
        "explanation": "24. C is correct because according to Standard II(B), Market Manipulation, transaction-\nbased manipulation includes, but is not limited to, the following: transactions that \nartificially affect prices or volume to give the impression of activity or price \nmovement in a financial instrument, which represent a diversion from the \nexpectations of a fair and efficient market, and securing a controlling, dominant \nposition in a financial instrument to exploit and manipulate the price of a related \nderivative and/or the underlying asset. Also, the intent of the action is critical to \ndetermining whether it is a violation of this standard.\" Despite the losses, Activity 1 \n                                                                         \n \nis a violation of Standard II(B) because the intent was to influence the price of the \nunderlying. Activity 2 is also a violation as the intent was to increase the volume of \nthe stock."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-25",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following statements regarding the GIPS standards is accurate?",
        "options": [
            "All fee-paying client portfolios must be included in at least one composite.",
            "All portfolios with the same investment mandate are aggregated into a composite.",
            "Aggregation of portfolios into composites is based on the actual performance of \nthe portfolios every year."
        ],
        "correctAnswer": 1,
        "explanation": "25. B is correct because according to the GIPS standards, A composite is an aggregation \nof one or more portfolios managed according to a similar investment mandate, \nobjective, or strategy."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-26",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Claus Holm, CFA, directs most of his clients' trades to RRT Company (RRT), despite \nRRT's higher-than-average commissions. In return, RRT refers individual clients to \nHolm for asset management services. Holm does not disclose the arrangement to his \nclients or prospective clients. Holm has most likely violated the Standard(s) relating:",
        "options": [
            "only to referral fees.",
            "only to loyalty, prudence, and care.",
            "both to referral fees and to loyalty, prudence, and care."
        ],
        "correctAnswer": 2,
        "explanation": "26. C is correct because according to Standard III (A), Loyalty, Prudence and Care. \nConflicts may arise when an investment manager uses client brokerage to purchase \nresearch services, a practice commonly called 'soft dollars' or 'soft commissions.' A \nmember or candidate who pays a higher brokerage commission than he or she would \nnormally pay to allow for the purchase of goods or services, without corresponding \nbenefit to the client, violates the duty of loyalty to the client. Paying higher fees in \nreturn for referrals does not represent a corresponding benefit to Holm's clients. \nTherefore, this arrangement violates the duty of loyalty to his clients. In addition, \nHolm has violated Standard VI (C), Referral Fees, which states the responsibility of \nmembers and candidates to inform their employer, clients, and prospective clients of \nany benefit received for referrals of customers and clients."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-27",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Emma Fischer, CFA, is an analyst covering the banking sector. She has declared \nbankruptcy due to large unpaid personal medical bills. On weekends, she participates \nin public protests for climate protection. She was recently arrested for trespassing \nduring a protest, which is an act of civil disobedience in her country. Has Fischer \nviolated the Standards?",
        "options": [
            "No",
            "Yes, she has violated the Standard relating to misconduct",
            "Yes, she has violated the Standard relating to loyalty, prudence and care"
        ],
        "correctAnswer": 0,
        "explanation": "27. A is correct because according to Standard I (D), Misconduct, personal bankruptcy \nmay not reflect on the integrity or trustworthiness of the person declaring \nbankruptcy, but if the circumstances of the bankruptcy involve fraudulent or \ndeceitful business conduct, the bankruptcy may be a violation of this standard. Also, \ngenerally, Standard I(D) is not meant to cover legal transgressions resulting from \nacts of civil disobedience in support of personal beliefs because such conduct does \nnot reflect poorly on the member’s or candidate’s professional reputation, integrity, \nor competence. Therefore, Fischer has not violated Standard I (D). Further, \nStandard III (A), Loyalty, Prudence, and Care, states that Members and Candidates \nhave a duty of loyalty to their clients and must act with reasonable care and exercise \nprudent judgment. Members and Candidates must act for the benefit of their clients \nand place their clients’ interests before their employer’s or their own interests. \nNeither Fischer's bankruptcy no nor the act of trespassing during a protest imposes \non her duty of loyalty to her clients. She has not violated Standard III (A)."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-28",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following is a recommended procedure for compliance with the Standard \nrelating to independence and objectivity? Members should encourage their firms to:",
        "options": [
            "prohibit any employee participation in equity-related IPOs.",
            "remove a corporate client company from the research universe and put it on a \nrestricted list if the firm is unwilling to disseminate adverse opinions about the \ncompany.",
            "provide every client with the procedures and policies for reporting potentially \nunethical behaviour, violations of regulations, or other activities that may harm \nthe firm’s reputation."
        ],
        "correctAnswer": 1,
        "explanation": "28. B is correct because according to the recommended procedures for compliance with \nStandard I (B), Independence and Objectivity, Create a restricted list: If the firm \nis unwilling to permit dissemination of adverse opinions about a corporate client, \nmembers and candidates should encourage the firm to remove the controversial \ncompany from the research universe and put it on a restricted list so that the firm \ndisseminates only factual information about the company."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-29",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the recommended procedure for compliance with the Standard relating \nto misconduct, members should encourage their firms to disseminate a list of \npotential violations and associated disciplinary sanctions to:",
        "options": [
            "all clients only.",
            "all employees only.",
            "both all clients and all employees."
        ],
        "correctAnswer": 1,
        "explanation": "29. B is correct because according to the recommended procedures for compliance with \nStandard I(D), misconduct, members and candidates should encourage their firms to \nadopt the following policies and procedures to support the principles of Standard \n                                                                         \n \nI(D): List of violations: Disseminate to all employees a list of potential violations and \nassociated disciplinary sanctions, up to and including dismissal from the firm."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-30",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the recommended procedures for compliance with the Standard relating \nto misconduct, members should encourage their firms to:",
        "options": [
            "conduct background checks of all employees at least annually.",
            "develop and adopt a code of ethics to which every employee must subscribe.",
            "check references of potential clients to ensure that they are of good character."
        ],
        "correctAnswer": 1,
        "explanation": "30. B is correct because according to the recommended procedures for compliance with \nthe Standard I (D), Misconduct, members should encourage their firms to develop \nand/or adopt a code of ethics to which every employee must subscribe."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-31",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the guidance for the Standard relating to loyalty, prudence, and care, \nwhich of the following statements is most accurate?",
        "options": [
            "Voting proxies is necessary in all instances.",
            "Members must maximize the economic value of proxies for clients. \nEthical and Professional Standards \nFaculty: Vikas Vohra                                                                        Page 7 of 58",
            "Consistent application of proxy policies includes voting with management on all \nnonroutine governance matters."
        ],
        "correctAnswer": 1,
        "explanation": "31. B is correct because according to Standard III (A), Loyalty, Prudence, and Care, \nproxies have economic value to a client, and members and candidates must ensure \nthat they properly safeguard and maximize this value."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-32",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the guidance for the Standards, which of the following statements are \naccurate? \nStatement 1: Employees must place employer interests ahead of personal interests \nin all matters. \nStatement 2: Senior management of a member's firm should create financial \ncompensation structures that do not drive unethical behavior.",
        "options": [
            "Statement 1 only.",
            "Statement 2 only.",
            "Both Statement 1 and Statement 2."
        ],
        "correctAnswer": 1,
        "explanation": "32. B is correct because according to Standard IV (A), Loyalty, the employer is \nresponsible for a positive working environment, which includes an ethical workplace. \nSenior management has the additional responsibility to devise compensation \nstructures and incentive arrangements that do not encourage unethical behavior. \nTherefore, Statement 2 is accurate."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-33",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "A member believes a colleague is participating in unethical activities at work. The \nmember does not disassociate himself from the activities of his colleague. The \nmember has most likely violated:",
        "options": [
            "only the Standard relating to knowledge of the law.",
            "only the Standard relating to disclosure of conflicts.",
            "both the Standard relating to knowledge of the law and the Standard relating to \ndisclosure of conflicts."
        ],
        "correctAnswer": 0,
        "explanation": "33. A is correct because according to Standard I(A) Knowledge of the Law, if a member \nor candidate has reasonable grounds to believe that imminent or ongoing client or \nemployer activities are illegal or unethical, the member or candidate must \ndisassociate, or separate, from the activity. Inaction combined with continuing \nassociation with those involved in illegal or unethical conduct may be constructed as \nparticipation or assistance in the illegal or unethical conduct."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-34",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the Standard relating to loyalty, members must:",
        "options": [
            "place their employer's interest above their personal interests in all matters.",
            "notify their employer before engaging in an independent practice while still \nemployed.",
            "never act against their employer’s interests when complying with their duties to \nclients."
        ],
        "correctAnswer": 1,
        "explanation": "34. B is correct because although Standard IV (A), Loyalty, ;does not preclude members \nor candidates from entering into an independent business  while still employed, \nmembers and candidates who plan to engage in independent practice for compensation \nmust notify their employer and describe the types of services they will render to \nprospective independent clients, the expected duration of the services, and the \ncompensation for the services. Members and candidates should not render services \nuntil they receive consent from their employer to all of the terms of the \narrangement."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-35",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Andrew Milton, CFA, is an advisor working with individual clients. Milton is careful to \nrecommend investments for his clients that are consistent with their overall \nobjectives and risk tolerance. His firm gives its advisors a bonus for recommending \nthe firm's proprietary products. If all other variables are equal in an investment \nchoice, Milton uses the proprietary products. Milton does not inform the clients of \nthis bonus. Has Milton most likely violated the Standards?",
        "options": [
            "No.",
            "Yes, the Standard relating to suitability.",
            "Yes, the Standard relating to loyalty, prudence, and care."
        ],
        "correctAnswer": 2,
        "explanation": "35. C is correct because according to Standard III (A), Loyalty, Prudence, and Care, \nParticular care must be taken to detect whether the goals of the investment manager \nor the firm in conducting business, selling products, and executing security \ntransactions potentially conflict with the best interests and objectives of the client. \nWhen members and candidates cannot avoid potential conflicts between their firm \nand clients’ interests, they must provide clear and factual disclosures of the \ncircumstances to the clients. Milton must disclose that he receives a bonus for using \nthe firm's proprietary funds to the client, and is in violation of this Standard."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-36",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following are among the recommended procedures for compliance with \nthe Standard relating to independence and objectivity? \nProcedure 1: Impose limits on investment personnel acquiring securities in private \nplacements. \nProcedure 2: Prohibit employees from receiving reimbursement from corporate \nissuers for air transportation when attending meetings at the issuers' headquarters. \n                                                                         \n \nProcedure 3: Remove a company from the restricted list if the firm is unwilling to \npermit dissemination of adverse opinions about the company.",
        "options": [
            "Procedure 1 and Procedure 2",
            "Procedure 1 and Procedure 3",
            "Procedure 2 and Procedure"
        ],
        "correctAnswer": 0,
        "explanation": "36. A is correct because according to Standard I(B), Independence and Objectivity, \nmembers and Candidates must use reasonable care and judgment to achieve and \nmaintain independence and objectivity in their professional activities. \n                                                                         \n \n \nAs for Procedure 1, restrict investments: Members and candidates should encourage \ntheir investment firms to develop formal policies related to employee purchases of \nequity or equity-related IPOs. Firms should require prior approval for employee \nparticipation in IPOs, with prompt disclosure of investment actions taken following \nthe offering. Strict limits should be imposed on investment personnel acquiring \nsecurities in private placements. \nAs for Procedure 2, restrict special cost arrangements: When attending meetings at \nan issuer’s headquarters, members and candidates should pay for commercial \ntransportation and hotel charges. No corporate issuer should reimburse members or \ncandidates for air transportation."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-37",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Vinod Shah, CFA, is a fund manager for the employee pension plan of Jupiter \nCorporation, a publicly traded company. Shah owes a primary duty of loyalty, \nprudence, and care to the:",
        "options": [
            "shareholders of Jupiter.",
            "management of Jupiter.",
            "beneficiaries of the pension fund."
        ],
        "correctAnswer": 2,
        "explanation": "37. C is correct because according to Standard III (A), Loyalty, Prudence, and Care, the \nshareholders are not the beneficiaries of his fund. When the manager is responsible \nfor the portfolios of pension plans or trusts, however, the client is not the person or \nentity who hires the manager but, rather, the beneficiaries of the plan or trust. The \nduty of loyalty is owed to the ultimate beneficiaries."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-38",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Min Joon, CFA, works in the client services department at an investment firm. Joon \nhas been short-selling stocks on his personal account in anticipation of a significant \ndecline in the market. His transactions do not disadvantage his firm's clients. \nFollowing a dramatic rise in the markets, Joon is unable to cover his short positions \nand is forced to declare personal bankruptcy. Has Joon violated the Standards?",
        "options": [
            "No",
            "Yes, the Standard relating to misconduct",
            "Yes, the Standard relating to loyalty, prudence, and care"
        ],
        "correctAnswer": 0,
        "explanation": "38. A is correct because according to Standard I(D), Misconduct, Members and \nCandidates must not engage in any professional conduct involving dis­honesty, fraud, \nor deceit or commit any act that reflects adversely on their professional reputation, \nintegrity, or competence. Joon’s actions do not result from fraudulent or deceitful \nbusiness conduct and personal bankruptcy may not reflect on the integrity or \ntrustworthiness of the person declaring bankruptcy. Also, according to Standard \nIII(A), Loyalty, Prudence, and Care, Members and Candidates must act for the \nbenefit of their clients and place their clients’ interests before their employer’s or \ntheir own interests. There is nothing here to suggest that Joon has not acted for the \nbenefit of his clients."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-39",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "A member secures a controlling, dominant position in an option on a stock in order to \nbenefit from trading the stock. The option trades are reported by the exchange and \nthe increased option trading volume leads other traders to take positions in the option \nand in the underlying stock. The member has violated the Standards:",
        "options": [
            "by engaging in transaction-based manipulation only.",
            "by engaging in information-based manipulation only.",
            "by engaging in both transaction -based manipulation and information-based \nmanipulation."
        ],
        "correctAnswer": 0,
        "explanation": "39. A is correct because according to Standard II (B), Market Manipulation, Transaction-\nbased manipulation involves instances where a member or candidate knew or should \nhave known that his or her actions could affect the pricing of a security. This type \nof manipulation includes, but is not limited to, the following: securing a controlling, \ndominant position in a financial instrument to exploit and manipulate the price of a \nrelated derivative and/or the underlying asset."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-40",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following is a recommended procedure for compliance with the Standard \nrelating to performance presentation? When presenting performance, members \nshould:",
        "options": [
            "exclude terminated accounts.",
            "use a single representative account for each investment mandate.",
            "disclose that investment results are simulated when model results are used."
        ],
        "correctAnswer": 2,
        "explanation": "40. C is correct because according to Standard III (D), Performance Presentation, \n\"[m]embers and candidates can also meet their obligations under Standard III (D) \n[relating to performance presentation] by ... ■ including disclosures that fully explain \nthe performance results being reported (for example, stating, when appropriate, that \nresults are simulated when model results are used, clearly indicating when the \nperformance record is that of a prior entity, or disclosing whether the performance \nis gross of fees, net of fees, or after tax)...\" Hence, the use of simulated results \nshould be disclosed."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-41",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Mary Rein, CFA, makes a brief presentation about her firm's performance to a group \nof current and prospective clients. According to the Standard relating to \nperformance presentation, is Rein required to make available the detailed information \nsupporting her presentation to clients upon request?",
        "options": [
            "No.",
            "Yes, only to current clients.",
            "Yes, both to current clients and to prospective clients."
        ],
        "correctAnswer": 2,
        "explanation": "41. C is correct because according to Standard III (D), Performance Presentation, if the \npresentation is brief, the member or candidate must make available to clients and \nprospects, on request, the detailed information supporting that communication. Best \npractice dictates that brief presentations include a reference to the limited nature \nof the information provided."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-42",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the Standard relating to suitability, a member who manages a mutual \nfund is required:",
        "options": [
            "only to invest in a manner consistent with the fund's stated mandate.",
            "only to determine the suitability of the fund for investors who may be purchasing \nshares in the fund.",
            "both to invest in a manner consistent with the fund's stated mandate and to \ndetermine the suitability of the fund for investors who may be purchasing shares \nin the fund."
        ],
        "correctAnswer": 0,
        "explanation": "42. A is correct because according to Standard III (C), Suitability, Some members and \ncandidates do not manage money for individuals but are responsible for managing a \nfund to an index or an expected mandate. The responsibility of these members and \ncandidates is to invest in a manner consistent with the stated mandate."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-43",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Richard Hicks, CFA, is an investment advisor. A friend asks Hicks to share client \ncontacts in order to solicit charitable donations. Hicks responds that he is unable to \nshare current clients' contact details and instead provides e -mail addresses of \nseveral former clients. The next day, Hicks finds out that one of his colleagues, \nClaudia Moll, a Level III candidate in the CFA Program, has failed to inform her \nsupervisor about her personal bankruptcy resulting from large medical bills. Have the \nStandards most likely been violated?",
        "options": [
            "No.",
            "Yes, by Moll.",
            "Yes, by Hicks."
        ],
        "correctAnswer": 2,
        "explanation": "43. C is correct because according to Standard III (E), Preservation of Confidentiality, \nThis standard protects the confidentiality of client information even if the person \nor entity is no longer a client of the member or candidate. Therefore, members and \ncandidates must continue to maintain the confidentiality of client records even after \nthe client relationship has ended. Thus revealing e-mails of former clients is a \nviolation."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-44",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Tom Dixon, CFA, provides a brief summary of his investment performance to his \nclients. He indicates that further information is available upon request. He tells his \nclients they can expect a return of 5% in the next three years based on his strong \ntrack record. Has Dixon most likely violated the Standards?",
        "options": [
            "No.",
            "Yes, by indicating that further information is available upon request.",
            "Yes, by telling his clients they can expect a return of 5% in the next three years."
        ],
        "correctAnswer": 2,
        "explanation": "44. C is correct because according to Standard III(D), Performance Presentation, \nmembers and candidates should not state or imply that clients will obtain or benefit \nfrom a rate of return that was generated in the past. Also, If the presentation is \nbrief, the member or candidate must make available to clients and prospects, on \nrequest, the detailed information supporting that communication."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-45",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the Standard relating to additional compensation arrangements, a \nmember who is offered additional compensation from a third party for services that \nconflict with his employer’s interest:",
        "options": [
            "is prohibited from accepting the additional compensation in all cases.",
            "is required to notify his employer about compensation from the third party \nimmediately after receiving it.",
            "must obtain written consent from his employer and the third party offering fees \nto the member before accepting the compensation."
        ],
        "correctAnswer": 2,
        "explanation": "45. C is correct because according to Standard IV (B), Additional Compensation \nArrangements, Members and Candidates must not accept gifts, benefits, \ncompensation, or consideration that competes with or might reasonably be expected \nto create a conflict of interest with their employer’s interest unless they obtain \nwritten consent from all parties involved. Also, Standard IV (B) requires members \nand candidates to obtain permission from their employer before accepting \ncompensation or other benefits from third parties for the services rendered to the \nemployer or for any services that might create a conflict with their employer’s \ninterest. Thus, the consent in writing from both parties is needed before accepting \nthe compensation."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-46",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "John Run, CFA, manages client accounts for an investment firm. A client says to Run: \n“For every year my portfolio beats the benchmark by 5%, you can use my beach home \nfor a week.” Run also serves on the board of Core Air Ltd. (Core). He does not receive \ncash payments from Core for board services but Core sends Run a family voucher for \na flight. Run accepts both offers and does not inform his firm about the beach home \noffer or the flight voucher. Has Run most likely violated the Standard relating to \nadditional compensation arrangements?",
        "options": [
            "No. \nEthical and Professional Standards \nFaculty: Vikas Vohra                                                                        Page 10 of 58",
            "Yes, only because Run accepts the beach home offer without i nforming his \nemployer.",
            "Yes, both because Run accepts the beach home offer and the family flight voucher \nwithout informing his employer."
        ],
        "correctAnswer": 2,
        "explanation": "46. C is correct because according to Standard IV (B), Additional Com pensation \nArrangements, Members and Candidates must not accept gifts, benefits, \ncompensation, or consideration that competes with or might reasonably be expected \nto create a conflict of interest with their employer's interest unless they obtain \nwritten consent from all parties involved. Further, Standard IV (B) states: \nCompensation and benefits include direct compensation by the client and any indirect \ncompensation or other benefits received from third parties. Therefore, Run has to \nobtain written consent from his employer before accepting the beach home offer and \nthe family flight voucher. By failing to do so, Run has violated Standard IV (B)."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-47",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Johanna Ayers, CFA, is a portfolio manager. She has a new client and develops an \ninvestment policy statement (IPS) that addresses the client's risk and return \nobjectives and constraints. The client does not disclose assets managed by other \nfirms and Ayers agrees to only manage the portion of the client's assets disclosed to \nher. In a separate document, Ayers develops an investment program and strategic \nasset allocation for the portion of client assets she manages. Has Ayers most likely \nviolated the Standard relating to suitability?",
        "options": [
            "No.",
            "Yes, by keeping the investment program and strategic asset allocation in a \ndocument that is separate from the IPS.",
            "Yes, by agreeing to manage a portion of the client's assets without knowledge of \nthe client's assets managed by other firms."
        ],
        "correctAnswer": 0,
        "explanation": "47. A is correct because according to Standard III (C), Suitability, suitability review can \nbe done most effectively when the client fully discloses his or her complete financial \nportfolio, including those portions not managed by the member or candidate. If \nclients withhold information about their financial portfolios, the suitability analysis \nconducted by members and candidates cannot be expected to be complete; it must \nbe based on the information provided. Ayers may develop an investment program that \nis suitable for the client without knowing about their other assets, even though the \ninformation is not complete. In addition, Standard III (C) also states after \nformulating long-term capital market expectations, members and candidates can \nassist in developing an appropriate strategic asset allocation and investment program \nfor the client, whether these are presented in separate documents or incorporated \nin the IPS or in appendices to the IPS. Ayers may keep these records in a separate \ndocument."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-48",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "A member most likely violates the Standard relating to responsibilities of supervisors \nif she:",
        "options": [
            "accepts supervisory duties before ensuring the firm has adopted a codes of \nethics.",
            "delegates supervisory duties to subordinates who have no prior compliance \nexperience.",
            "relies on a subordinate's statements without initiating an assessment about the \nextent of a potential violation of the Standards."
        ],
        "correctAnswer": 2,
        "explanation": "48. C is correct because according to Standard IV (C) Responsibilities of Supervisors, \nonce a supervisor learns that an employee has violated or may have violated the law \nor the Code and Standards, the supervisor must promptly initiate an assessment to \ndetermine the extent of the wrongdoing. Relying on an employee's statements about \nthe extent of the violation or assurances that the wrongdoing will not reoccur is not \nenough."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-49",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the Standard relating to loyalty, in the absence of a noncompete \nagreement and without employer consent, a member is permitted to:",
        "options": [
            "email himself a list of his clients when leaving his employer.",
            "enter into an independent competitive business while still employed.",
            "contact clients from his previous employer using public information to solicit \nbusiness at his new firm."
        ],
        "correctAnswer": 2,
        "explanation": "49. C is correct because according to Standard IV(A), Loyalty, the standard does not \nprohibit former employees from contacting clients of their previous firm as long as \nthe contact information does not come from the records of the former employer or \nviolate an applicable 'noncompete agreement'. Members and candidates are free to \nuse public information after departing to contact former clients without violating \nStandard IV(A) as long as there is no specific agreement not to do so."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-50",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "To use a quantitative model in her investment research, a member is required by the \nStandards to:",
        "options": [
            "have developed or co-developed the model.",
            "become an expert in every technical aspect of the model developed by others.",
            "understand the assumptions and limitations inherent in the model developed by \nothers."
        ],
        "correctAnswer": 2,
        "explanation": "50. C is correct because according to Standard V (A), Diligence and Reasonable Basis, \nMembers and candidates need to have an understanding of the parameters used in \nmodels and quantitative research that are incorporated into their investment \nrecommendations. Although they are not required to become experts in  every \ntechnical aspect of the models, they must understand the assumptions and limitations \ninherent in any model and how the results were used in the decision-making process. \nTherefore, to use quantitative models in her investment research, a member is \nrequired to understand the assumptions and limitations inherent in the model \ndeveloped by others."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-51",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Tim Newman, CFA, is an investment manager. One of his clients directs Newman to \nuse Mercer brokerage to execute trades. Newman believes Mercer does not offer \nbest execution, but uses the brokerage commissions to purchase research services \nfor his client. Newman informs the client that he may not be getting best execution. \n                                                                         \n \nAre Newman’s actions consistent with the Standard relating to loyalty, prudence, and \ncare?",
        "options": [
            "Yes.",
            "No, because he used commissions to purchase research.",
            "No, because he failed to achieve best execution for the client."
        ],
        "correctAnswer": 0,
        "explanation": "51. A is correct because according to Standard III(A) Loyalty, Prudence and Care, from \ntime to time, a client will direct a manager to use the client’s brokerage to purchase \ngoods or services for the client, a practice that is commonly called \"directed \nbrokerage.\" Because brokerage commission is an asset of the client and is used to \nbenefit that client, not the manager, such a practice does not violate any duty of \nloyalty. Also, the member or candidate should disclose to the client that the client \nmay not be getting best execution from the directed brokerage. In addition, conflicts \n                                                                         \n \nmay arise when an investment manager uses client brokerage to purchase research \nservices, a practice commonly called \"soft dollars\" or \"soft commissions.\" A member \nor candidate who pays a higher brokerage commission than he or she would normally \npay to allow for the purchase of goods or services, without corresponding benefit to \nthe client, violates the duty of loyalty to the client. In this case, the research is of \nhigh quality and benefits the client, so Newman is not in violation of the Standard."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-52",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "After thorough analysis, Algiris Vasilis, CFA, prepares a \"buy\" recommendation on a \ncompany's stock. In the report he writes: \"The company will beat analysts' earnings \nprojections next month.\" Vasilis first shares the recommendation with all clients by \nemail. He then calls each of his clients by phone to present the recommendation. Has \nVasilis violated the Standards?",
        "options": [
            "No",
            "Yes, by calling each of his clients by phone to present the recommendation",
            "Yes, by writing in the report, \"The company will beat analysts' earnings \nprojections next month\""
        ],
        "correctAnswer": 2,
        "explanation": "52. C is correct because according to Standard V (B), Communication with Clients and \nProspective Clients, opinion be separated from fact. Violations often occur when \nreports fail to separate the past from the future by not indicating that earnings \nestimates, changes in the outlook for dividends, or future market price information \nare opinions subject to future circumstances.  In this case, the statement was \nreferring to future outcome which may or may not turn out to be true, thus a violation."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-53",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Melissa Kon, CFA, is an equity analyst. She recently left her job at Hamm Capital (HC) \nto join Eagle Investments (EI). Kon obtains the express consent of HC to take one of \nher historical research reports with her. At EI, she diligently updates and publishes \nthe report. Afterwards, she re-creates supporting records from memory for record \nkeeping purposes. Has Kon violated the Standards?",
        "options": [
            "No.",
            "Yes, by publishing the updated research report.",
            "Yes, by re-creating supporting records from memory."
        ],
        "correctAnswer": 2,
        "explanation": "53. C is correct because according to Standard V (C), Record Retention, a member must \nnot re-create supporting records from memory. Standard V(C), Record Retention, \nstates The member or candidate cannot use historical recommendations or research \nreports created at the previous firm because the supporting documentation is \nunavailable. For future use, the member or candidate must re-create the supporting \nrecords at the new firm with information gathered through public sources or directly \nfrom the covered company and not from memory or sources obtained at the previous \nemployer."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-54",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Amy Joy, CFA, works at Parklane Investments Ltd. (PIL). When presenting to PIL’s \nprospective clients, Joy uses a brief investment performance summary and makes \navailable detailed supporting information only upon client request. Has Joy violated \nthe Standards?",
        "options": [
            "No.",
            "Yes, the Standard relating to fair dealing.",
            "Yes, the Standard relating to performance presentation."
        ],
        "correctAnswer": 0,
        "explanation": "54. A is correct because according to Standard III(D), Performance Presentation, if the \npresentation is brief, the member or candidate must make available to clients and \nprospects, on request, the detailed information supporting that communication. By \nmaking available detailed supporting information on request, Joy does not violate \nStandard III(D). In addition, Joy does not violate Standard III(B), Fair Dealing, \nwhich states that members and Candidates must deal fairly and objectively with all \nclients when providing investment analysis, making investment recommendations, \ntaking investment action, or engaging in other professional activities."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-55",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Hannah Hostettler, CFA, is a portfolio manager at a wealth management firm. \nHostettler has an arrangement with a lawyer, whereby she refers clients who need \nlegal advice to the lawyer, who in turn refers clients to Hostettler. Because no \nreferral fees are involved, Hostettler does not disclose this arrangement to her \nexisting or prospective clients. Has Hostettler most likely violated the Standards?",
        "options": [
            "No.",
            "Yes, only by failing to disclose the arrangement to existing clients.",
            "Yes, both by failing to disclose the arrangement to existing clients and to \nprospective clients."
        ],
        "correctAnswer": 2,
        "explanation": "55. C is correct because according to Standard VI (C), Referral Fees, members must \ndisclose to clients and potential clients any referral arrangements and must disclose \nall consideration. “Consideration includes all fees, whether paid in cash, in soft dollars, \nor in-kind.” Thus, Hostettler would need to disclose the full bi -lateral referral \narrangement to both clients and prospective clients."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-56",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Thomas Huang, CFA, is an investment advisor for Newline Partners (NP). NP has an \nagreement with brokerage firm Ridge Capital (RC). Huang refers clients to RC in \nexchange for compensation. RC pays a cash fee to NP for referrals. Before entering \ninto formal agreements for services, Huang makes the following disclosure to NP's \nclients: \"Please note that Newline Partners receives an annual cash percentage fee \nfrom Ridge Capital for the referral of clients.\" Huang omits disclosure of the \nestimated dollar value of the referrals. Has Huang violated the Standards?",
        "options": [
            "No.",
            "Yes, by accepting a cash fee for referral of clients.",
            "Yes, by not disclosing the estimated dollar value of the fee."
        ],
        "correctAnswer": 2,
        "explanation": "56. C is correct because according to Standard VI(C), Referral Fees, members must \ndisclose both the nature of the cons ideration and the estimated dollar value. \nAppropriate disclosure means that members and candidates must advise the client or \nprospective client, before entry into any formal agreement for services, of any \nbenefit given or received for the recommendation of any services provided by the \nmember or candidate. In addition, the member or candidate must disclose the nature \nof the consideration or benefit—for example, flat fee or percentage basis, one-time \n                                                                         \n \nor continuing benefit, based on performance, benefit in the form of provision of \nresearch or other noncash benefit—together with the estimated dollar value. \nConsideration includes all fees, whether paid in cash, in soft dollars, or in kind."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-57",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following is a recommended procedure for compliance with the Standard \nrelating to preservation of confidentiality? \nProcedure 1: Members should convey to clients that not all firm -sponsored \ncommunication methods may be suitable for transmitting confidential information. \nProcedure 2: Members should encourage their firms to provide periodic training on \nconfidentiality procedures to all clients. \nProcedure 3: Members should become experts in information technology security in \norder to protect client confidentiality.",
        "options": [
            "Procedure 1",
            "Procedure 2",
            "Procedure 3"
        ],
        "correctAnswer": 0,
        "explanation": "57. A is correct because according to Standard III(E) relating to preservation of \nconfidentiality, members and candidates should convey to clients that not all firm-\nsponsored resources may be appropriate for such communications."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-58",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Marianne Lynn is registered for the CFA Level I exam. A few weeks after \nregistration, she realizes that she is unable to prepare for the exam due to work \ncommitments, so she informs CFA Institute that she declines to sit for the exam. \nAfterwards, shortly before the exam date, she posts on social media that she is a \nCFA candidate. Separately, Thomas Petrov, CFA, posts his investment views \nanonymously on social media and tags his post using \"#CFAcharter.\" Who has violated \nthe Standards?",
        "options": [
            "Lynn only",
            "Petrov only",
            "Both Lynn and Petrov"
        ],
        "correctAnswer": 2,
        "explanation": "58. C is correct because according to Standard VII(B), Reference to CFA Institute, the \nCFA Designation and the CFA Program, Petrov violates Standard VII(B) because \nwhere individuals may anonymously express their opinions, pseudonyms or online \nprofile names created to hide a member’s identity should not be tagged with the CFA \ndesignation. Lynn violates Standard VII(B) because if an individual is registered for \nthe CFA Program but declines to sit for an exam or otherwise does not meet the \ndefinition of a candidate as described in the CFA Institute Bylaws, then that \nindividual is no longer considered an active candidate."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-59",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Melinda Jacobs, CFA, is a portfolio manager with SFM Asset Managers (SFM). Jacobs \nteaches an investment course at a business school on weekends for a fee. Jacobs is \nplanning to leave SFM and has begun to develop marketing materials for a new \nbusiness that will compete with SFM. Has Jacobs most likely violated the Standards?",
        "options": [
            "No",
            "Yes, by accepting a fee from the business school",
            "Yes, by developing marketing materials for her new business that will compete \nwith SFM"
        ],
        "correctAnswer": 0,
        "explanation": "59. A is correct because according to Standard IV (A), Loyalty, there is a requirement \nthat members and candidates abstain from independent competitive activity that \ncould conflict with the interests of their employer. Jacobs' teaching assignment at a \nbusiness school on weekends does not appear to be in conflict with her role as a \nportfolio manager. Also, with respect to Standard IV (B), Additional Compensation \nArrangements, Members and Candidates must not accept gifts, benefits, \ncompensation, or consideration that competes with or might reasonably be expected \nto create a conflict of interest with their employer's interest unless they obtain \nwritten consent from all parties involved. Because her teaching activity is not in \ncompetition with, nor would it be expected to create a conflict of interest with her \nemployer, she is not in violation of the Standards regarding her teaching assignment. \nJacobs is also not in violation of the Standards with respect to her actions to make \narrangements to start a competing business because a departing employee is generally \nfree to make arrangements or preparations to go into a competitive business before \nterminating the relationship with his or her employer as long as such preparations do \nnot breach the employee's duty of loyalty. There is nothing in this instance to suggest \nthat is the case."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-60",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following individuals can refer to themselves as a candidate in the CFA \nProgram? \nIndividual 1: Has passed Level II and expects to register for Level III in a couple of \nmonths \nIndividual 2: Has failed Level I and expects to retake the exam in its next \nadministration \nIndividual 3: Is awaiting results of the Level III exam",
        "options": [
            "Individual 1",
            "Individual 2",
            "Individual 3"
        ],
        "correctAnswer": 2,
        "explanation": "60. C is correct because according to Standard VII(B), Reference to CFA Institute, the \nCFA Designation, and the CFA Program, a person is a candidate in the CFA Program if \nthe registered person has sat for a specified examination but exam results have not \nyet been received."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-61",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Kelvin Lee, CFA, is a portfolio manager at an investment firm. His social media profile \nreads: \"Kelvin Lee passed all three CFA examinations in three consecutive years. As \na CFA charterholder, Lee achieves better investment performance results.\" Has Lee \nviolated the Standards?",
        "options": [
            "No",
            "Yes, by stating that he passed all three CFA Program examinations in three \nconsecutive years",
            "Yes, by stating that he achieves better investment performance results as a CFA \ncharterholder"
        ],
        "correctAnswer": 2,
        "explanation": "61. C is correct because according to Standard VII(B), Reference to CFA Institute, the \nCFA Designation, and the CFA Program, those who have earned the right to use the \nChartered Financial Analyst designation are encouraged to do so but only in a manner \nthat does not misrepresent or exaggerate the meaning or implications of the \ndesignation. In addition, if the candidate then goes on to claim or imply superior \n                                                                         \n \nability by obtaining the designation in only three years, however, he or she is in \nviolation of Standard VII(B). Lee states that as a CFA charterholder, he achieves \nbetter investment performance results. Therefore, he has violated the Standard \nVII(B)."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-62",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the Standards, which of the following statements relating to a member \nin a supervisory position is accurate? \nStatement 1: The member must make reasonable efforts to ensure that anyone \nsubject to her supervision complies with the Code and Standards. \nStatement 2: The member must adopt the CFA Institute Code of Ethics to substitute \nfor lack of compliance procedures until the firm adopts reasonable procedures to \nallow adequate exercise of supervisory responsibility.",
        "options": [
            "Statement 1 only",
            "Statement 2 only",
            "Both Statement 1 and Statement 2"
        ],
        "correctAnswer": 0,
        "explanation": "62. A is correct because according to Standard IV(C), Responsibilities of Supervisors, \nMembers and Candidates must make reasonable efforts to ensure that anyone \nsubject to their supervision or authority complies with applicable laws, rules, \nregulations, and the Code and Standards. Therefore, Statement 1 is accurate."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-63",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Emma Berkstein, CFA, uses third-party data to prepare a report on a company. \nBerkstein does not check the validity of this data herself, but instead relies on her \nsenior colleagues to conduct due diligence. Another analyst at the same firm, Jimmy \nBrooks, CFA, prepares an industry report with a group of colleagues. After thorough \nresearch, the group agrees to issue a report with a positive outlook for the industry. \nBrooks disagrees with this conclusion, but leaves his name in the report. Has the \nStandard relating to diligence and reasonable basis most likely been violated?",
        "options": [
            "No.",
            "Yes, by Brooks.",
            "Yes, by Berkstein."
        ],
        "correctAnswer": 0,
        "explanation": "63. A is correct because according to Standard V (A), Diligence and Reasonable Basis, A \nmember or candidate may rely on others in his or her firm to determine whether \nsecondary or third-party research is sound and use the information in good faith \nunless the member or candidate has reason to question its validity or the processes \nand procedures used by those responsible for the research. Berkstein relied on her \nsenior colleague's due diligence, and there is nothing in the case to suggest she has \nreason to question it, hence no violation. Nor did Brooks violate the Standard by \nleaving his name on the group report: The conclusions or recommendations of the \ngroup report represent the consensus of the group and are not necessarily the views \nof the member or candidate, even though the name of the member or candidate is \nincluded on the report. In some instances, a member or candidate will not agree with \nthe view of the group. If, however, the member or candidate believes that the \nconsensus opinion has a reasonable and adequate basis and is independent and \nobjective, the member or candidate need not decline to be identified with the report. \nIf the member or candidate is confident in the process, the member or candidate \ndoes not need to dissociate from the report even if it does not reflect his or her \nopinion."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-64",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Tania Watt, CFA, issues \"buy\" recommendations for several bonds to her clients \nwithout providing further details. She notifies the clients that additional information \nis available upon request. One week later, the prices of all recommended bonds decline \nbecause of an unexpected increase in interest rates. Watt's clients suffer large \nlosses as a result. Has Watt most likely violated the Standards?",
        "options": [
            "No",
            "Yes, by issuing recommendations which result in large losses for her clients",
            "Yes, by issuing \"buy\" recommendations for several bonds to her clients without \nproviding further details."
        ],
        "correctAnswer": 0,
        "explanation": "64. A is correct because according to Standard V (B), Communication with Clients and \nProspective Clients, If recommendations are contained in capsule form (such as a \nrecommended stock list), members and candidates should notify clients that \nadditional information and analyses are available from the producer of the report. \nAlso, Members and candidates must disclose significant risks known to them at the \ntime of the disclosure. Members and candidates cannot be expected to disclose risks \nthey are unaware of at the time recommendations or investment actions are made. In \nthis case, the central bank action happened after the recommendation was sent out, \nand it was an unexpected move, so Watt cannot be blamed for not warning clients and \ncausing portfolio losses."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-65",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the GIPS standards, a firm:",
        "options": [
            "must include non-discretionary portfolios in the firm’s composites.",
            "may refer to its performance calculation methodology as being \"in accordance \nwith the GIPS standards.\"",
            "may determine a portfolio is non-discretionary if client imposed restrictions \ninterfere with the implementation of the intended strategy."
        ],
        "correctAnswer": 2,
        "explanation": "65. C is correct because according to the fundamentals of compliance of the GIPS \nstandards, If documented client -imposed restrictions interfere with the \nimplementation of the intended strategy to the extent that the portfolio is no longer \nrepresentative of the strategy, the firm may determine that the portfolio is non-\ndiscretionary."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-66",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following is not a key concept of the GIPS standards? The GIP S \nstandards for firms:",
        "options": [
            "require the use of composites.",
            "rely on the integrity of input data.",
            "address every aspect of performance measurement."
        ],
        "correctAnswer": 2,
        "explanation": "66. C is correct because according to the GIPS standards, the GIPS standards do not \naddress every aspect of performance measurement. Therefore, it is not a key \nconcept of the GIPS standards to address every aspect of performance \nmeasurement."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-67",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Jayson Kite, CFA, a senior analyst, is preparing a research report on a shipping \ncompany. Kite concludes that the stock of a company is a good investment and decides \nto put a \"buy\" recommendation on the stock. According to the recommended \nprocedures for compliance, Kite should communicate the recommendation:",
        "options": [
            "within the firm first and then to customers.",
            "to customers first and then within the firm.",
            "simultaneously within the firm and to customers."
        ],
        "correctAnswer": 2,
        "explanation": "67. C is correct because according to the recommended procedures for compliance with \nStandard III (B), Fair Dealing, a common practice to assure fair dealing is to \ncommunicate recommendations simultaneously within the firm and to customers. \nMembers and candidates should encourage firms to develop guidelines that prohibit \npersonnel who have prior knowledge of an investment recommendation from \ndiscussing or taking any action on the pending recommendation. Members and \ncandidates should encourage firms to develop guidelines that prohibit personnel who \nhave prior knowledge of an investment recommendation from discussing or taking any \naction on the pending recommendation."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-68",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Hugh Matthew, CFA, covers several companies within a sector. After thorough \nanalysis of each company, he issues \"buy\" recommendations for each company. In each \nreport, Matthew discloses the assumptions, methodology and risk factors used in his \nresearch. Two weeks later, an unexpected event occurs that negatively impacts the \nsector. As a result, all the companies Matthew covers experience significant losses. \nHas Matthew most likely violated the Standards?",
        "options": [
            "No",
            "Yes, the Standard relating to diligence and reasonable basis",
            "Yes, the Standard relating to communication with clients and prospective clients"
        ],
        "correctAnswer": 0,
        "explanation": "68. A is correct because according to Standard V (B), Investment Analysis, \nRecommendations, and Actions - Communication with Clients and Prospective Clients, \nMembers and candidates cannot be expected to disclose risks they are unaware of at \nthe time recommendations or investment actions are made. In assessing compliance \nwith Standard V(B), it is important to establish knowledge of a purported significant \nrisk or limitation. A one-time investment loss that occurs after the disclosure does \nnot constitute a pertinent factor in assessing whether significant risks and \nlimitations were properly disclosed. Having no knowledge of a risk or limitation that \nsubsequently triggers a loss may reveal a deficiency in the diligence and reasonable \nbasis of the research of the member or candidate but may not reveal a breach of \nStandard V(B)."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-69",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the recommended procedures for compliance with the Standard relating \nto diligence and reasonable basis, members should encourage their firms to:",
        "options": [
            "evaluate the adequacy of external advisors by customizing the evaluation criteria \nfor each advisor. \nEthical and Professional Standards \nFaculty: Vikas Vohra                                                                        Page 15 of 58",
            "establish maximum levels of scenario testing of all computer-based models used \nin evaluating financial instruments.",
            "appoint a supervisory analyst to determine whether research reports have a \nreasonable and adequate basis prior to external circulation."
        ],
        "correctAnswer": 2,
        "explanation": "69. C is correct because according to the recommended procedures for compliance with \nStandard V (A), Diligence and Reasonable Basis, members and candidates should \nencourage their firms to establish a policy requiring that research reports, credit \nratings, and investment recommendations have a basis that can be substantiated as \nreasonable and adequate. An individual employee (a supervisory analyst) or a group of \nemployees (a review committee) should be appointed to review and approve such items \nprior to external circulation to determine whether the criteria established in the \npolicy have been met. Therefore, appointing a supervisory analyst to determine \nwhether research reports have a reasonable and adequate basis, before circulating \nthe reports externally, is a recommended procedure for compliance with Standard V \n(A)."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-70",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "A member works for an investment firm. There are no applicable laws relating to \nrecord retention. The firm's policy requires staff to retain records for five years. A \nlocal investment association recommends retaining records for eight years. At a \nrecent client briefing, some of the firm's largest clients expressed a preference for \nthe firm to retain records for at least ten years. To be consistent with the \nStandards, records should be retained for:",
        "options": [
            "5 years.",
            "8 years.",
            "10 years."
        ],
        "correctAnswer": 0,
        "explanation": "70. A is correct because according to Standard V (C), Record Retention, Local regulators \noften impose requirements on members, candidates, and their firms related to record \nretention that must be followed. Firms may also implement policies detailing the \napplicable time frame for retaining research and client communic ation records. \nFulfilling such regulatory and firm requirements satisfies the requirements of \nStandard V(C). In the absence of regulatory guidance or firm policies, CFA Institute \n                                                                         \n \nrecommends maintaining records for at least seven years. Here, there is no applicable \nlaw. Also, the recommendation of the local industry body and the clients' preferences \nare not relevant. Instead, the member has to abide by the firm's policy to maintain \nrecords for at least 5 years."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-71",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the recommended procedures for compliance with the Standard relating \nto priority of transactions, members should:",
        "options": [
            "discourage clients from trading during blackout periods.",
            "supply copies of their personal securities transactions to clients upon request.",
            "preclear their participation in IPOs even if there is no conflict of interest \nbetween their participation in an IPO and the client’s interests."
        ],
        "correctAnswer": 2,
        "explanation": "71. C is correct because according to the recommended procedures for compliance with \nStandard VI(B), Priority of Transactions, members and candidates should preclear \ntheir participation in IPOs, even in situations without any conflict of interest between \na member's or candidate's participation in an IPO and the client's interest."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-72",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "A member keeps all records supporting his decisions to buy or sell securities, but \ndiscards the records not leading to changes in positions. The member keeps some \nrecords in hard copy but others in electronic form. The member has most likely \nviolated the Standard relating to record retention:",
        "options": [
            "only by discarding the records not leading to changes in positions.",
            "only by keeping some records in hard copy but others in electronic form.",
            "both by discarding the records not leading to changes in positions and by keeping \nsome records in hard copy but others in electronic form."
        ],
        "correctAnswer": 0,
        "explanation": "72. A is correct because according to Standard V (C), Record Retention, The retention \nrequirement applies to decisions to buy or sell a security as well as reviews undertaken \nthat do not lead to a change in position."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-73",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Mary Lorraine, CFA, is a portfolio manager. She adds new factors to her stock \nselection process which affects all existing clients. She omits providing her clients \nwith a written update regarding this change. Instead, Lorraine explains the change \nto her clients over the phone. Has Lorraine violated the Standards?",
        "options": [
            "No",
            "Yes, because she adds new factors to her stock selection process which affects \nall existing clients",
            "Yes, because she fails to provide her clients with a written update about adding \nnew factors to her stock selection process"
        ],
        "correctAnswer": 0,
        "explanation": "73. A is correct because according to Standard V(B), Communication with Clients and \nProspective Clients, The member or candidate must keep clients and other interested \nparties informed on an ongoing basis about changes to the investment process. Also, \nFor purposes of Standard V(B), communication is not confined to a written report. A \npresentation of information can be made via any means of communication, including \nin-person recommendation or description, telephone conversation. Therefore, \nLorraine does not violate Standard V(B) because changing the investment process is \nnot prohibited and verbal communication by phone regarding this change is permitted."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-74",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "A member claims a professional designation she has not earned. This action most \nlikely violates the Standard(s) relating to:",
        "options": [
            "loyalty only.",
            "misconduct only. \nEthical and Professional Standards \nFaculty: Vikas Vohra                                                                        Page 16 of 58",
            "both loyalty and misconduct."
        ],
        "correctAnswer": 2,
        "explanation": "74. C is correct because actions involving unearned designations are violations of \nStandard IV (A), Loyalty but also Standard I (D), Misconduct. The Standard relating \nto loyalty deals with matters related to employment, Members and Candidates must \nact for the benefit of their employer and not deprive their employer of the advantage \nof their skills and abilities, divulge confidential information, or otherwise cause harm \nto their employer. Actions regarding unearned designations are potentially harmful \nto an employer. The standard relating to misconduct requires, Members and \nCandidates must not engage in any professional conduct involving dishonesty, fraud, \nor deceit or commit any act that reflects adversely on their professional reputation, \nintegrity, or competence. Actions regarding unearned designations are dishonest, an \nact of fraud and deceitful and will reflect adversely on a person's professional \nreputation, integrity and competence."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-75",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Sharon Chan, CFA, is an analyst at an investment firm. Chan issues a \"buy\" rating on \na company in which her brother holds shares. Chan does not disclose her brother's \nholdings in her report as she has no beneficial ownership in her brother's account. \nHas Chan violated the Standards?",
        "options": [
            "No",
            "Yes, the Standard relating to disclosure of conflicts",
            "Yes, the Standard relating to communication with clients and prospective clients"
        ],
        "correctAnswer": 0,
        "explanation": "75. A is correct because according to Standard VI(A), Disclosure of Conflicts, Members \nand Candidates must make full and fair disclosure of all matters that could reasonably \nbe expected to impair their independence and objectivity or interfere with \nrespective duties to their clients, prospective clients, and employer. In addition, sell-\nside members and candidates should disclose any materially beneficial ownership \ninterest in a security or other investment that the member or candidate is \nrecommending. Chan has no beneficial ownership in her brother's account, so she is \nnot required to disclose it. Therefore, Chan has not violated the Standard VI(A). \n \n                                                                         \n \nIn addition, Standard V(B), Communication with Clients and Prospective Clients, \nstates that members and candidates should communicate in a recommendation the \nfactors that were instrumental in making the investment recommendation. A critical \npart of this requirement is to distinguish clearly between opinions and facts. In \npreparing a research report, the member or ca ndidate must present the basic \ncharacteristics of the securities being analyzed, which will allow the reader to \nevaluate the report and incorporate information the reader deems relevant to his or \nher investment decision-making process. Standard V(B) is addressing the investment \nprocess communication with clients. Chan has not violated the Standard V(B)."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-76",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Jane Macmara, CFA, has just passed Level III of the CFA exam. In her blog, Macmara \nshares her views: “CFA exams are outrageously difficult,” and “Thankfully, the CAPM \nwas not tested.” Macmara has most likely violated the Standards:",
        "options": [
            "only by writing “Thankfully, the CAPM was not tested.”",
            "only by writing “CFA exams are outrageously difficult.”",
            "by writing both “Thankfully, the CAPM was not tested” and “CFA exams are \noutrageously difficult.”"
        ],
        "correctAnswer": 0,
        "explanation": "76. A is correct because according to Standard VII (A), Conduct as Participants in CFA \nInstitute Programs, CFA Institute program rules, regulations, and policies prohibit \ncandidates from disclosing confidential material gained during the exam process. \nExamples of information that cannot be disclosed by candidates sitting for an exam \ninclude but are not limited to: broad topical areas and formulas tested or not tested \non the exam. Further, All aspects of the exam, including questions, broad topical \nareas, and formulas, tested or not tested, are considered confidential until such time \nas CFA Institute elects to release them publicly. There is no indication that CFA \nInstitute has released details about the exam. Therefore, Macmara has violated \nStandard VII (A) by stating “Thankfully, the CAPM formula was not tested."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-77",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Donovan Jones, CFA, works at Grae Investments (GI). GI's main product invests in \nliquid and illiquid assets. Prices for its illiquid holdings are determined by an \nindependent valuation firm. Jones markets performance of the GI product without \nproviding a comparison benchmark. Jones also switches to a different independent \nvaluation firm because of the firm's reputation for giving illiquid assets higher \nvaluations. Jones has most likely violated the Standard relating to misrepresentation:",
        "options": [
            "only by switching valuation firms.",
            "only by marketing performance without a benchmark.",
            "both by switching valuation firms and by marketing performance without a \nbenchmark."
        ],
        "correctAnswer": 0,
        "explanation": "77. A is correct because according to Standard I (C), Misrepresentation, changing pricing \nproviders should not be based solely on the justification that the new provider \nreports a higher current value of a security."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-78",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following can claim compliance with the GIPS standards?",
        "options": [
            "Consultants who advise investment firms that manage discretionary client assets.",
            "Asset owners that do not compete for business but report their performance to \noversight bodies.",
            "Vendors that provide software to assist investment firms in claiming compliance \nwith the GIPS standards."
        ],
        "correctAnswer": 1,
        "explanation": "78. B is correct because asset owners may comply with the GIPS standards in the same \nway as firms if they compete for business. If they don’t compete for business but \nreport their performance to an oversight body, asset owners may choose to comply \nwith the GIPS Standards for Asset Owners."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-79",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following statements is most accurate? In countries where regulations \nconflict with, or contradict, the GIPS standards, firms that claim compliance are \nrequired to comply with:",
        "options": [
            "local regulations with full disclosure of the conflict.",
            "the stricter of local regulations or the GIPS standards.",
            "local regulations with optional disclosure of the conflict."
        ],
        "correctAnswer": 0,
        "explanation": "79. A is correct because according to the GIPS standards, in cases in which laws and/or \nregulations conflict with the GIPS standards, firms are required to comply with the \nlaws and regulations and make full disclosure of the conflict in the GIPS Report."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-80",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the GIPS standards, a firm must include a terminated composite on the \nfirm's list of composite descriptions for at least:",
        "options": [
            "5 years after the composite termination date.",
            "7 years after the composite termination date.",
            "10 years after the composite termination date."
        ],
        "correctAnswer": 0,
        "explanation": "80. A is correct because according to the GIPS standards, The FIRM MUST include \nterminated COMPOSITES on this list for at least ﬁve years after the COMPOSITE \nTERMINATION DATE."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-81",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the GIPS standards, verification is:",
        "options": [
            "performed with respect to an entire firm.",
            "performed by a firm's compliance department.",
            "mandatory for firms that claim compliance with the GIPS standards."
        ],
        "correctAnswer": 0,
        "explanation": "81. A is correct because according to the GIPS standards, verification is performed with \nrespect to an entire firm, not on specific composites or pooled funds."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-82",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following is a recommended procedure for complying with the Standard \nrelating to preservation of confidentiality? \nProcedure 1: Disclose to authorized fellow employees only information that will \nimprove service to the client \nProcedure 2: Encourage the adoption of standard confidentiality procedures utilized \nby leading firms in the industry",
        "options": [
            "Procedure 1 only",
            "Procedure 2 only",
            "Both Procedure 1 and Procedure 2"
        ],
        "correctAnswer": 0,
        "explanation": "82. A is correct because according to the recommended procedures for compliance with \nStandard II (E), Preservation of Confidentiality, avoid disclosing any information \nreceived from a client except to authorized fellow employees who are also working \n                                                                         \n \nfor the client. Is the information background material that, if disclosed, will enable \nthe member or candidate to improve service to the client?"
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-83",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to recommended procedures for compliance with the Standard relating to \nmaterial nonpublic information, firms should:",
        "options": [
            "review employee trading through the maintenance of watch lists.",
            "prohibit all types of proprietary activity when a firm comes into possession of \nmaterial nonpublic information.",
            "permit regular interdepartmental communication of nonpublic information \nbetween the corporate finance and equity research departments of a firm."
        ],
        "correctAnswer": 0,
        "explanation": "83. A is correct because according to the recommended procedures for compliance with \nStandard II(A) Material Nonpublic Information the use of watch lists is a minimum \nelement of such a system. The minimum elements of such a system include, but are \nnot limited to, the review of employee trading through the maintenance of “watch,” \n“restricted,” and “rumor” lists."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-84",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Tim Howley, CFA, “pumps up” the price of a security by s preading misleading \ninformation and later “dumps” the security after the price reaches an artificially high \nlevel. Howley has most likely violated the Standard relating to:",
        "options": [
            "market manipulation.",
            "independence and objectivity.",
            "material nonpublic information."
        ],
        "correctAnswer": 0,
        "explanation": "84. A is correct because according to the Standard II(B), market manipulation includes \n(1) the dissemination of false or misleading information. Also, information -based \nmanipulation includes, but is not limited to, spreading false rumors to induce trading \nby others. For example, members and candidates must refrain from “pumping up” the \nprice of an investment by issuing misleading positive information or overly optimistic \nprojections of a security’s worth only to later “dump” the investment (i.e., sell it) once \nthe price, fueled by the misleading information’s effect on other market participants, \nreaches an artificially high level."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-85",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following entities can claim compliance with the GIPS standards?",
        "options": [
            "A pension fund that manages investments for its beneficiaries",
            "An investment consulting firm that focuses on enabling clients to self-manage \ntheir investments",
            "A vendor that offers software products designed to help firms achieve \ncompliance with the GIPS standards"
        ],
        "correctAnswer": 0,
        "explanation": "85. A is correct because according to the GIPS standards, only a firm managing assets \ncan claim compliance once the firm has satisfied all applicable requirements of the \nGIPS standards. Further, asset owners may comply with the GIPS standards in the \nsame way as firms if they compete for business. If they don’t compete for business \nbut report their performance to an oversight body, asset owners may choose to \ncomply with the GIPS Standards for Asset Owners. Therefore, a pension fund that \nmanages investments for its beneficiaries can claim compliance with the GIPS \nstandards."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-86",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Timothy Charles, CFA, applies for a role as an investment analyst. In his resume he \nstates, \"CFA charterholders achieve better performance results.\" He adds, \"As a \n                                                                         \n \nCFA charterholder, I am the most qualified to manage client investments.\" Charles \nhas most likely violated the Standards:",
        "options": [
            "only by stating, \"CFA charterholders achieve better performance results.\"",
            "only by stating, \"As a CFA charterholder, I am the most qualified to manage client \ninvestments.\"",
            "both by stating, \"CFA charterholders achieve better performance results\" and by \nstating, \"As a CFA charterholder, I am the most qualified to manage client \ninvestments.\""
        ],
        "correctAnswer": 2,
        "explanation": "86. C is correct because both statements violate Standard VII(B), Reference to CFA \nInstitute, the CFA Designation, and the CFA Program by implying that superior \nperformance from someone with the CFA designation can be expected. Statements \nreferring to CFA Institute, the CFA designation, or the CFA Program that overstate \nthe competency of an individual or imply, either directly or indirectly, that superior \nperformance can be expected from someone with the CFA designation are not allowed \nunder the standard. Improper References ... 'CFA charterholders achieve better \nperformance results' ... 'As a CFA charterholder, I am the most qualified to manage \nclient investments.'\""
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-87",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "David Bravoria, CFA, is an independent financial advisor for a high-net-worth client \nwith whom he had not had contact in more than two years. During a recent brief \ntelephone conversation, the client states that he wants to increase his risk exposure. \nBravoria subsequently recommends and invests in several high-risk venture capital \nfunds on behalf of the client. Bravoria continues, as he has done in the past, to send \nto his client monthly, detailed, itemized investment statements. Did Bravoria most \nlikely violate any CFA Standards?",
        "options": [
            "No.",
            "Yes, with regard to investment statements.",
            "Yes, with regard to purchasing venture capital funds."
        ],
        "correctAnswer": 2,
        "explanation": "87. C is correct because Bravoria violated Standard III(A)–Loyalty, Prudence, and Care \nas he had not updated his client’s profile in more than two years and thus should not \nhave made further investments, particularly in high-risk investments, until such time \nas he updated the client’s risk and return objectives, financial constraints, and \nfinancial position. Bravoria provided his client with investment statements more \nfrequently than that which is required, i.e., quarterly, so was not in violation of regular \naccount information."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-88",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following is most accurate? GIPS compliance:",
        "options": [
            "eliminates investors' need for in-depth due diligence of the GIPS-compliant firm \nonly.",
            "enables the GIPS-compliant firm to participate in competitive bids against other \nGIPS-compliant firms only.",
            "both eliminates investors' need for in-depth due diligence of the GIPS-compliant \nfirm and enables the GIPS-compliant firm to participate in competitive bids \nagainst other GIPS-compliant firms."
        ],
        "correctAnswer": 1,
        "explanation": "88. B is correct because compliance enables the GIPS-compliant firm to participate in \ncompetitive bids against other compliant firms throughout the world."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-89",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following statements is most accurate? Compliance with the GIPS \nstandards:",
        "options": [
            "by firms eliminates the need for in-depth due diligence by investors.",
            "enables firms to participate in competitive bids against other GIPS-compliant \nfirms.",
            "is mandatory for firms conducting business in countries that do not ha ve \nregulations relating to investment performance presentation."
        ],
        "correctAnswer": 1,
        "explanation": "89. B is correct because compliance enables the GIPS-compliant firm to participate in \ncompetitive bids against other compliant firms throughout the world."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-90",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "A firm claiming compliance with GIPS standards is required to:",
        "options": [
            "perform verification of the firm's claim of compliance.",
            "maintain its compliance even after the firm has been verified by an independent \nthird party.",
            "determine selection criteria regarding which existing portfolios to include in a \ncomposite at the end of the reporting period."
        ],
        "correctAnswer": 1,
        "explanation": "90. B is correct because firms that claim compliance with the GIPS standards are \nresponsible for their claim of compliance and for maintaining that compliance. That \nis, firms self-regulate their claim of compliance. Therefore, including when \ncompliance is verified by an independent third party, the firm is always responsible \nfor maintaining that compliance."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-91",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Anita Delgado is a candidate in the CFA Program. After taking the Level II \nexamination, Delgado posts on a social networking website that she found the exam \nto be very difficult and that in her opinion, the CFA Program and CFA Institute were \nlosing credibility with the public. Has Delgado most likely violated the Standards?",
        "options": [
            "No",
            "Yes, by posting information about the exam on a public website",
            "Yes, by compromising the reputation or integrity of CFA Institute"
        ],
        "correctAnswer": 0,
        "explanation": "91. A is correct because Delgado did not violate Standard VII (A), Responsibilities as a \nCFA Institute Member of CFA Candidate. Candidates are prohibited from disclosing \nconfidential material gained during the exam process but are free to discuss the \nexamination in a general manner, such as the fact that she found the exam difficult. \nRegarding her opinion about the CFA Institute, a member must not engage in any \nconduct that compromises the reputation or integrity of CFA Institute. However, \nStandard VII (A) does not cover expressing opinions regarding the CFA Program or \nCFA Institute. Therefore, Delgado's voicing her opinion is not a conduct that \ncompromises the reputation or integrity of CFA Institute."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-92",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "A member manages two fee-paying family accounts at her firm. The member has the \npower to vote on the shares held in Account 1 and the discretion to sell shares held \nin Account 2. According to the Standards, is the member considered a beneficial \nowner of the shares held in her family accounts?",
        "options": [
            "No",
            "Yes, for Account 1 only",
            "Yes, for both Account 1 and Account 2"
        ],
        "correctAnswer": 2,
        "explanation": "92. C is correct because for the purposes of Standard VI(A) Disclosure of Conflicts, \nmembers and candidates beneficially own securities or other investments if they have \na direct or indirect pecuniary interest in the securities, have the power to vote or \ndirect the voting of the shares of the securities or investments, or have the power \nto dispose or direct the disposition of the security or investment. Therefore, the \nmember is considered a beneficial owner for shares held in both Account 1 and \nAccount 2."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-93",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following comments concerning composites meeting the requirements \nof the GIPS standards is correct?",
        "options": [
            "A firm's claim of compliance requires all fee-paying accounts managed by the firm \nbe included in at least one composite.",
            "The requirement to create, use and maintain composites is designed to prevent \nfirms using the best-performing accounts to represent an investment strategy.",
            "A composite must include all actual, fee -paying, discretionary and non-\ndiscretionary portfolios managed in accordance with the same investment \nmandate, objective, or strategy."
        ],
        "correctAnswer": 1,
        "explanation": "93. B is correct because one of the key concepts of the standards is the required use of \ncomposites. A composite is an aggregation of one or more portfolios managed \naccording to a similar investment mandate, objective, or strategy. The requirement \nto create, use and maintain composites is designed to prevent firms from cherry-\npicking—using the best-performing accounts to represent the performance of an \ninvestment strategy."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-94",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "A member most likely violates the Standard relating to market manipulation if he:",
        "options": [
            "secures a dominant position in a stock to win a proxy vote.",
            "exploits market inefficiencies in a thinly traded penny stock.",
            "places both buy and sell orders of a stock at the same price to increase trading \nvolume."
        ],
        "correctAnswer": 2,
        "explanation": "94. C is correct because Members and Candidates must not engage in practices that \ndistort prices or artificially inflate trading volume with the intent to mislead market \nparticipants. Transactions that artificially affect prices or volume to give the \nimpression of activity or price movement in a financial instrument, which represent a \ndiversion from the expectations of a fair and efficient market."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-95",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "The objectives of the GIPS standards include:",
        "options": [
            "promoting financial regulators' interests.",
            "promoting industry self-regulation on a global basis.",
            "obtaining acceptance of multiple local standards for accurate perf ormance \npresentation."
        ],
        "correctAnswer": 1,
        "explanation": "95. B is correct because one of the objectives of the GIPS standards is to promote \nindustry self-regulation on a global basis."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-96",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following is a recommended procedure for compliance with the Standard \nrelating to knowledge of the law? Members should encourage their firms to:",
        "options": [
            "distribute summaries of applicable security laws to clients at least annually.",
            "provide written protocols for reporting suspected legal or regulatory violations.",
            "seek the advice of a regulatory agency when in doubt about which action to take \nregarding potential violations."
        ],
        "correctAnswer": 1,
        "explanation": "96. B is correct because recommended procedures for compliance with Standard I (A), \nKnowledge of the Law, state: Establish procedures for reporting violations: Firms \nmight provide written protocols for reporting suspected viola tions of laws, \nregulations, or company policies."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-97",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Stella Murphy, CFA, a portfolio manager, meets with a client who is concerned about \na security recently added to the portfolio. Murphy review s with the client the \ndecision for buying the security and the risks associated with the company and stock. \nThe following week, the company announces it is buying a company in a non-related \nindustry and the stock falls sharply. The client accuses Murphy of not disclosing all \nthe risks associated with holding the security.  Murphy explains the company's \nacquisition was unexpected and not factored into the forecast. Has Murphy most \nlikely violated the Standards?",
        "options": [
            "No",
            "Yes, the Standard relating to communication with clients",
            "Yes, the Standard relating to diligence and reasonable basis"
        ],
        "correctAnswer": 0,
        "explanation": "97. A is correct because Murphy has not violated any Standards. Standard V(B), \nCommunication with Clients and Prospective Clients, requires members, use \nreasonable judgment in identifying which factors are important to their investment \nanalyses, recommendations, or actions and include those factors in communications \nwith clients and prospective client. Murphy has done this when she reviewed the \ninvestment rationale behind buying the security and the potential investment risks. \nThe appropriateness of risk disclosure should be assessed on the basis of what was \nknown at the time the investment action was taken (often called an ex ante basis). \nMembers must disclose significant risks known to them at the time of the disclosure. \nMembers cannot be expected to disclose risks they are unaware of at the time \nrecommendations or investment actions are made. A one-time investment loss that \noccurs after the disclosure does not constitute a pertinent factor in assessing \nwhether significant risks and limitations were properly disclosed. Murphy has also not \nviolated Standard V(A), Diligence and Reasonable Basis, which requires members, \nhave a reasonable and adequate basis, supported by appropriate research and \ninvestigation, for any investment analysis, recommendation, or action. Murphy has \nexplained the investment thesis supporting the purchase of the security as well as \nthe risk to the earnings stream.  While having no knowledge of a risk or limitation \nthat subsequently triggers a loss may reveal a deficiency in the diligence and \nreasonable basis of the research it is not a violation of the Standard."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-98",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following member actions most likely violates the Standard relating to \nmarket manipulation?",
        "options": [
            "Selling one security and buying another to minimize tax liability",
            "Writing misleading posts on social media about the development of a new product",
            "Dividing a large block order into a series of smaller orders to achieve better \nexecution"
        ],
        "correctAnswer": 1,
        "explanation": "98. B is correct because Standard II(B), Market Manipulation, require members to uphold \nmarket integrity by prohibiting market manipulation. Market manipulation includes \npractices that distort security prices or trading volume with the intent to deceive \npeople or entities that rely on information in the market. This is an example of \ninformation-base manipulation as misleading fake information affects other market \nparticipants."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-99",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Elana Paralova, a Level I CFA candidate working at an asset management firm, wants \nto make a good impression on a prospective client. She tells the prospect: \"Getting \nthe CFA Charter will show I am serious about protecting the interests of my clients \nand it will boost my reputation. Once I get the Charter, I also hope to make more \nmoney by getting promoted!\" Her colleague, Jacob Klemmer, CFA, tells Paralova: \n\"Study all subjects for each exam, you never know what will be included. The three \nexams will be the most difficult exams you will ever take. Any promotion and pay raise \nwill reflect your enhanced skills.\" Did either Paralova or Klemmer violate the \nStandards?",
        "options": [
            "No.",
            "Only Paralova violates the Standards.",
            "Only Klemmer violates the Standards."
        ],
        "correctAnswer": 0,
        "explanation": "99. A is correct because neither Paralova or Klemmer violated CFA Standards through \ntheir statements.  Paralova did not violate Standard VII(B) Reference to CFA \nInstitute, the CFA Designation, and the CFA Program when she made her comments \nabout what getting the Charter will reflect and the hope for a pay raise. The \nStandard states, When referring to CFA Institute, CFA Institute membership, the \nCFA designation, or candidacy in the CFA Program, Members and Candidates must not \nmisrepresent or exaggerate the meaning or implications of membership in CFA \nInstitute, holding the CFA designation, or candidacy in the CFA program. Klemmer \ndid not violate Standard VII (B) Reference to CFA Institute, the CFA Designation, \nand the CFA Program when he expressed his opinion that Paralova's potential pay \nraise will reflect her enhanced skills.   Klemmer also complied with Standard VII(A) \n                                                                         \n \nResponsibilities as a CFA Institute Member or CFA Candidate, Conduct as \nParticipants in CFA Institute Programs when stating an opinion about the difficulty \nof the exam without revealing any specific details or the need to study all subjects. \nThe Standard states that candidates must not engage in any conduct that \ncompromises . . . the integrity, validity, or security of CFA Institute programs."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-100",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Amanda Covington, CFA, works for McJan Investment Management. McJan \nemployees must receive prior clearance of their personal investments in accordance \nwith McJan’s compliance procedures. To obtain prior clearance, McJan employees \nmust provide a written request identifying the security, the quantity of the security \nto be purchased, and the name of the broker through which the transaction will be \nmade. Pre-cleared transactions are approved only for that trading day. As indicated \nbelow, Covington received prior clearance. \n \nTwo days after she received prior clearance, the price of Stock B had decreased, so \nCovington decided to purchase 250 shares of Stock B only. In her decision to \n\n                                                                         \n \npurchase 250 shares of Stock B only, did Covington violate any CFA Institute \nStandards of Professional Conduct?",
        "options": [
            "No.",
            "Yes, relating to diligence and reasonable basis.",
            "Yes, relating to her employer’s compliance procedures."
        ],
        "correctAnswer": 2,
        "explanation": "100. C is correct because prior clearance processes guard against potential and actual \nconflicts of interest; members are required to abide by their employer’s compliance \nprocedures, Standard VI(B)."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-101",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Cecilia Foster, CFA, starts a job as director of research for Sisyphus \nInvestments (SI). In her new job, Foster oversees a small team analysts. Foster \ndiscovers the compliance system at SI is not up to her expectations and tells her \nsupervisor the system needs improvement. The supervisor tells Foster that the firm \nwill consider compliance system improvements in four months, at the start of the \nnext fiscal year. To comply with the Standards, Foster most likely should initially:",
        "options": [
            "resign her new position.",
            "decline in writing to accept supervisory responsibility.",
            "establish departmental procedures to ensure fellow Charterholders comply with \napplicable regulations."
        ],
        "correctAnswer": 1,
        "explanation": "101. B is correct because Standard IV (C), Responsibilities of Supervisors, states if \nthe member or candidate clearly cannot discharge supervisory responsibilities \nbecause of the absence of a compliance system or because of an inadequate \ncompliance system, the member or candidate should decline in writing to accept \nsupervisory responsibility until the firm adopts reasonable procedures to allow \nadequate exercise of supervisory responsibility."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-102",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Wang Dazong, CFA, is a sole proprietor investment advisor. Dazong believes in \nputting his money at risk along with his clients and trades the same securities as his \nclients. In order to ensure fair treatment of all accounts, he rotates trade allocations \nso that each account has an equal likelihood of receiving a fill on their orders. This \nallocation procedure also applies to Dazong's own account. According to the CFA CFA \nInstitute Code of Ethics and Standards of Professional Conduct, the allocation \nprocedure used by Dazong:",
        "options": [
            "complies with the Standards.",
            "requires revision to ensure client trades take precedence.",
            "should be disclosed and written approval received from clients."
        ],
        "correctAnswer": 1,
        "explanation": "102. B is correct because Standard VI(B)–requires client transactions to be given \nprecedence over transactions made on behalf of the member’s or candidate’s firm or \npersonal transactions. Because the advisor trades alongside his clients and allocates \ntrades on a rotating basis, there are times when the advisor’s trades will receive \npriority over his clients in violation of the Code and Standards. A member or \ncandidate having the same investment positions or being co-invested with clients does \nnot always create a conflict. Some clients in certain investment situations require \nmembers or candidates to have aligned interests. Personal investment positions or \ntransactions of members or candidates or their firms should never, however, \nadversely affect client investments."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-103",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Ken Kawasaki, CFA, shares a building with a number of other professionals who \nare also involved in the investment management business. Kawasaki makes \narrangements with several of these professionals, including accountants and lawyers, \nto refer clients to each other. An informal score is kept on the expectation the \nreferrals will equal out over time, eliminating the need for any cash payments. \nKawasaki never mentions this arrangement to clients or prospective clients. Does \nKawasaki's agreement with the other building occupants most likely violate any CFA \nInstitute Standards of Professional Conduct?",
        "options": [
            "No.",
            "Yes, related to referral fees.",
            "Yes, related to communication with clients."
        ],
        "correctAnswer": 1,
        "explanation": "103. B is correct because Standard VI(C) requires disclosure of any compensation, \nconsideration, or benefit received from or paid to others for the recommendation of \nproducts or services. Even without cash changing hands the arrangement provides for \na quid pro quo referral of clients and should be disclosed."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-104",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "François Bernod, CFA, wrote questions for the Level I CFA exam for sev eral \nyears. After leaving the exam writing team, Bernod issues new marketing material for \nhis investment firm, in which he states: “As someone who helped write CFA exams, I \nhave learned unique insights into portfolio management that will be valuable for my \nfirm's clients.” However, in his public blog, Bernod makes several negative statements \n                                                                         \n \nabout certain policies of CFA Institute. Bernod has most likely violated the \nStandards:",
        "options": [
            "only by expressing negative opinions regarding CFA Institute policies.",
            "only by using an association with CFA Institute to further professional goals.",
            "both by expressing negative opinions regarding CFA Institute policies and by using \nan association with CFA Institute to further professional goals."
        ],
        "correctAnswer": 1,
        "explanation": "104. B is correct because Standard VII (A), Conduct as Participants in CFA Institute \nPrograms, states: Standard VII (A) covers the conduct of CFA Institute members \nand candidates involved with the CFA Program and prohibits any conduct that \nundermines the public's confidence that the CFA charter represents a level of \nachievement based on merit and ethical conduct. Conduct covered includes but is not \nlimited to improperly using an association with CFA Institute to further personal or \nprofessional goals. Bernod violated the Standard by stating that his involvement in \nexam writing gave him unique investment insights that will be of value to his firm's \nclients."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-105",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Disclosure of confidential CFA exam information will most likely be detected by \nthe Professional Conduct staff through:",
        "options": [
            "monitoring online and social media.",
            "analysis of Proctor Reports.",
            "annual Professional Conduct Statements."
        ],
        "correctAnswer": 0,
        "explanation": "105. A is correct because Professional Conduct inquiries come from a number of \nsources including the monitoring of online and social media to detect disclosure of \nconfidential exam information."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-106",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the Standard relating to independence and objectivity:",
        "options": [
            "a gift from a client could be considered supplementary compensation.",
            "compensation arrangements should link analyst remuneration to investment \nbanking assignments.",
            "portfolio managers may report sell-side analysts to covered companies if analysts' \nchanges in recommendation adversely affect client portfolios."
        ],
        "correctAnswer": 0,
        "explanation": "106. A is correct because receiving a gift, benefit, or consideration from a client can \nbe distinguished from gifts given by entities seeking to influence a member or \ncandidate to the detriment of other clients. In a client relationship, the client has \nalready entered some type of compensation arrangement with the member, candidate, \nor his or her firm. A gift from a client could be considered supplementary \ncompensation."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-107",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Shirin Regali, CFA, is a well-respected, sell-side analyst covering the biotech \nsector. While researching the market prospects for a drug being trialed by BioHeal \nInc., Regali interviews industry experts who are not affiliated with the trials or \nBioHeal. These experts express confidence that the drug will pass the trials and be \na market success. After thorough analysis and based on these experts' insights, \nRegali issues a \"buy\" recommendation for BioHeal and distributes it to her clients and \nnot to the public. Has Regali most likely violated the Standard relating to material \nnonpublic information?",
        "options": [
            "No",
            "Yes, by distributing the recommendation to her clients and not to the public",
            "Yes, by issuing a \"buy\" recommendation for BioHeal based on insights from \nindustry experts"
        ],
        "correctAnswer": 0,
        "explanation": "107. A is correct because Regali did not violate Standard II (A), Nonpublic Material \nInformation. The Standards permit the use of in dustry experts. Members and \ncandidates may provide compensation to individuals [industry experts] for their \ninsights without violating this standard. In this case, the industry experts are \nunaffiliated with the trials and thus do not have access to inside information on the \ntrials, so their insights can be used to make investment decisions. The Standards also \npermit the sell-side analysts to distribute material information to only clients. Simply \nbecause the public in general would find the conclusions material does not require \nthat the analyst make his or her work public."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-108",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following member actions most likely violates the Standard relating \nto material nonpublic information? \nAction 1: An analyst buys call options on a stock after learning from the company's \nCEO that the company will report earnings exceeding analyst expectations. \nAction 2: An analyst buys an oil company stock after speaking to a well-known industry \nexpert who believes oil prices will rise due to geopolitical risk.",
        "options": [
            "Action 1 only",
            "Action 2 only",
            "both Action 1 and Action 2"
        ],
        "correctAnswer": 0,
        "explanation": "108. A is correct because Standard II(A), Material Nonpublic Information, states that \nMembers and Candidates who possess material nonpublic information that could \naffect the value of an investment must not a ct or cause others to act on the \ninformation. Also, Members and candidates must not use material nonpublic \ninformation to influence their investment actions related to derivatives. Therefore, \na member analyst buying call option on a company stock after learning from its CEO \nthat the company will report earnings exceeding analyst expectation is a violation of \nStandard II(A). In contrast, a member analyst buying an oil company stock after \nspeaking to a well-known industry expert who believes oil prices will rise due to \ngeopolitical risk is not a violation of Standard II(A). This is because a well-known \nindustry expert's view is unlikely to be nonpublic information. Therefore, only Action \n1 violates Standard II(A)."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-109",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "David Andrews, CFA, is an investment manager with Aldona Investments. Aldona \nsecures a block of stock in an oversubscribed initial public offering. Andrews decides \nto prorate the issue to all fee-paying accounts for which it is appropriate, including \nthe fee-paying accounts of his immediate family members. Has Andrews violated the \nStandard relating to fair dealing?",
        "options": [
            "No.",
            "Yes, by prorating the issue to all subscribers.",
            "Yes, by including immediate family members in the transaction."
        ],
        "correctAnswer": 0,
        "explanation": "109. A is correct because Standard III (B), Fair Dealing, states that if the issue is \noversubscribed, then the issue should be prorated to all subscribers. In addition, if \nthe investment professional’s family-member accounts are managed similarly to the \naccounts of other clients of the firm, however, the family-member accounts should \nnot be excluded from buying such shares."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-110",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "John Lee, CFA, manages portfolios for several individuals, including his brother. \nAll of Lee's clients are standard fee-paying clients. Lee subscribes to an IPO for only \nthose clients for whom the IPO is suitable, which includes his brother. Lee does not \nreceive the number of shares requested by his clients and allocates shares of the \nIPO pro-rata to those clients, including his brother. Are Lee's actions most likely \nconsistent with the Standards?",
        "options": [
            "Yes",
            "No, because he allocates the IPO shares to his brother",
            "No, because he fails to allocate the IPO shares to all of his clients"
        ],
        "correctAnswer": 0,
        "explanation": "110. A is correct because Standard III (B), Fair Dealing, states: For example, when \nmaking investments in new offerings or in secondary financings, members and \ncandidates should distribute the issues to all customers for whom the investments \nare appropriate in a manner consistent with the policies of the firm for allocating \nblocks of stock. In addition, if the issue is oversubscribed, members and candidates \n                                                                         \n \nshould forgo any sales to themselves or their immediate families in order to free up \nadditional shares for clients. If the investment professional's family -member \naccounts are managed similarly to the accounts of other clients of the firm, however, \nthe family-member accounts should not be excluded from buying such shares. In this \ncase, Lee's brother has a standard fee-paying, regular account, the IPO is suitable, \nso Lee should include his brother in the pro-rata allocation of the IPO shares."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-111",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following most likely violates the Standard relating to preservation of \nconfidentiality?",
        "options": [
            "Recommending a former client as a potential donor for a local charity",
            "Disclosing details of client activity to the CFA Institute Professional Conduct \nProgram",
            "Providing confidential information about a prospective client when permitted by \nthe prospective client"
        ],
        "correctAnswer": 0,
        "explanation": "111. A is correct because Standard III (E), Preservation of Confidentiality, requires \nMembers and Candidates must keep information about current, former, and \nprospective clients confidential.  Also, this standard protects the confidentiality of \nclient information even if the person or entity is no longer a client of the member or \ncandidate."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-112",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Linda Barr, CFA, a portfolio manager, receives an unsolicited stock order from a \nclient. She discusses the order with her firm's analysts to determine how it will \nimpact that client's portfolio. The analysts determine the stock to be highly \nundervalued and suitable for many of Barr's clients. Barr calls clients for whom the \nstock is suitable to recommend the stock. She then executes a single block trade for \nthe original client as well as other clients for whom the stock is suitable. Barr most \nlikely violated the Standards:",
        "options": [
            "only by executing the single block trade.",
            "only by discussing unsolicited client orders with her analysts.",
            "both by executing the single block trade and by discussing unsolicited client \norders with her analysts."
        ],
        "correctAnswer": 0,
        "explanation": "112. A is correct because Standard III (E), Preservation of Confidentiality, requires \nthat members and candidates preserve the confidentiality of information \ncommunicated to them by their clients, prospective clients, and former clients. \nFurther, if a client or former client expressly authorizes the member or candidate \nto disclose information, however, the member or candidate may follow the terms of \nthe authorization and provide the information. The unsolicited stock order from the \nclient is confidential. So, Barr must obtain the original client's authorization before \nrecommending the stock to other clients. Therefore, Barr has violated Standard III \n(E) by executing without the original's client authorization, a single block trade for \nthe original client as well as other clients for whom the stock is suitable."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-113",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "A member works for a large investment firm. CFA Institute contacts the member \nto request support for a professional conduct investigation. In his response, the \nmember discloses the requested information regarding client activities. Applicable \nlaw requires to maintain client confidentiality. Has the member most likely violated \nthe Standards?",
        "options": [
            "No. \nEthical and Professional Standards \nFaculty: Vikas Vohra                                                                        Page 24 of 58",
            "Yes, the Standard relating to fair dealing.",
            "Yes, the Standard relating to knowledge of the law."
        ],
        "correctAnswer": 2,
        "explanation": "113. C is correct because Standard I (A), Knowledge of the Law, states that Members \nand Candidates must understand and comply with all applicable laws, rules, and \nregulations. While Standard III (E), Preservation of Confidentiality, states that \nWhen permissible under applicable law, members and candidates shall consider the \nPCP an extension of themselves when requested to provide information about a client \nin support of a PCP investigation into their own conduct, this case clearly states that \ndisclosure is not permitted by applicable law. Therefore, the member violates \nStandard I (A) by disclosing client information."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-114",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Iris Hadid, CFA, works as an investment banking analyst. She builds a financial \nmodel to value Ski Mountain Lodge (SML). Hadid's friend, Peter Jackson, CFA, works \nfor a different advisory firm. Hadid shares with Jackson details about her analysis \nto receive his feedback on her valuation of SML. Based on this information, Jackson \nbuys call options on SML. Who has violated the Standards?",
        "options": [
            "Hadid only",
            "Jackson only",
            "Both Hadid and Jackson"
        ],
        "correctAnswer": 2,
        "explanation": "114. C is correct because Standard II(A), Material Nonpublic Information, states that \nMembers and Candidates who possess material nonpublic information that could \naffect the value of an investment must not act or cause others to act on the \ninformation. Also, Members and candidates must not use material nonpublic \ninformation to influence their investment actions related to derivatives. Hadid \ncaused Jackson to act by telling Jackson about her work on SML. Jackson acts on the \ninformation and buys call options on SML. Therefore, both Hadid and Jackson violate \nStandard II(A)."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-115",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which statement regarding market manipulation is consistent with the \nStandards? Members must refrain from:",
        "options": [
            "inducing trading by disseminating verifiable information.",
            "engaging in practices which exploit perceived market inefficiencies.",
            "securing a dominant position in a financial instrument to exploit the price of the \nunderlying asset."
        ],
        "correctAnswer": 2,
        "explanation": "115. C is correct because Standard II(B), Market Manipulation, prohibits such activity. \nTransaction-based manipulation includes, but is not limited to securing a controlling, \n                                                                         \n \ndominant position in a financial instrument to exploit the price of the underlying \nasset."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-116",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "To comply with the Standards, if applicable law requires members to maintain \nconfidentiality of client information, confidentiality must be maintained unless:",
        "options": [
            "the client has died.",
            "the client's information involves illegal activities.",
            "the client permits the disclosure of the information."
        ],
        "correctAnswer": 2,
        "explanation": "116. C is correct because Standard III (E), Preservation of Confidentiality, states \nthat members must keep information about current, former, and prospective clients \nconfidential unless: the client or prospective client permits disclosure of the \ninformation."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-117",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Grace Lee, CFA, is an investment advisor. The investment policy statement of one \nof her clients specifies an equal-weighted portfolio of consumer durables, clean \nenergy, and technology stocks. Over time, the portfolio has become significantly \nover-weighted toward technology stocks due to their superior performance. Lee \nexpects technology stocks to outperform for another year and decides  not to \nrebalance the portfolio. Has Lee violated the Standards?",
        "options": [
            "No.",
            "Yes, only the Standard relating to suitability.",
            "Yes, both the Standard relating to suitability and the Standard relating to loyalty, \nprudence, and care."
        ],
        "correctAnswer": 2,
        "explanation": "117. C is correct because Standard III(C), Suitability, When Members and Candidates \nare in an advisory relationship with a client, they must determine that an investment \nis suitable to the client’s financial situation and consistent with the client’s written \nobjectives, mandates, and constraints before making an investment recommendation \nor taking investment action. Also, the investment professional’s determination of \nsuitability should reflect only the investment recommendations or actions that a \nprudent person would be willing to undertake. Not every investment opportunity will \nbe suitable for every portfolio, regardless of the potential return being offered. Lee \nhas ignored her client’s mandate of an equal-weighted portfolio and is in violation of \nthis standard. Further, according to Standard III(A), Loyalty, Prudence, and Care, \n;Members and Candidates have a duty of loyalty to their clients and must act with \nrea­sonable care and exercise prudent judgment. Also, members and candidates must \nfollow any guidelines set by their clients for the management of their assets. Lee’s \ndecision not to rebalance the portfolio is a violation of this Standard. So, Lee has \nviolated both Standard III(C) and Standard III(A)."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-118",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the Standards, members are required to obtain permission from \ntheir employer before accepting additional compensation from:",
        "options": [
            "clients only.",
            "third parties only.",
            "both clients and third parties."
        ],
        "correctAnswer": 2,
        "explanation": "118. C is correct because Standard IV (B), Additional Compensation Arrangements, \nrequires members and candidates to obtain permission from their employer before \naccepting compensation or other benefits from third parties for the services \nrendered to the employer or for any services that might create a conflict with their \nemployer's interest. Compensation and benefits include direct compensation by the \nclient and any indirect compensation or other benefits received from third parties."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-119",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Frank Taylor, CFA, manages a portfolio for a football club. The club’s chairman is \npleased with Taylor’s work and offers him a front-row ticket to an upcoming, sold-out \nmatch. Taylor accepts the ticket without informing his employer. The chairman also \nprovides Taylor with a performance-based cash incentive for which he receives \npermission from his employer to accept. Has Taylor most likely violated the \nStandards?",
        "options": [
            "No.",
            "Yes, the Standard relating to loyalty, prudence, and care.",
            "Yes, the Standard relating to additional compensation arrangements."
        ],
        "correctAnswer": 2,
        "explanation": "119. C is correct because Standard IV (B), Additional Compensation Arrangements, \nstates that Members and Candidates must not accept gifts, benefits, compensation, \nor consideration that competes with or might reasonably be expected to create a \nconflict of interest with their employer’s interest unless they obtain consent from \nall parties involved.Taylor must inform his employer and obtain consent for accepting \nthe front-row ticket to an upcoming sold out match. Therefore, he has violated this \nStandard."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-120",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Applying standardized criteria for the selection of external managers is a \nrequirement of the Standard relating to:",
        "options": [
            "suitability.",
            "independence and objectivity.",
            "diligence and reasonable basis."
        ],
        "correctAnswer": 2,
        "explanation": "120. C is Correct because Standard V (A), Diligence and Reasonable Basis, s tates \nmembers and candidates who are directly involved with the use of external advisers \nneed to ensure that their firms have standardized criteria for reviewing these \nselected external advisers and managers. Such criteria would include, but would not \nbe limited to, the following: \n \n                                                                         \n \n• reviewing the adviser's established code of ethics, \n• understanding the adviser's compliance and internal control procedures, \n• assessing the quality of the published return information, and \n• reviewing the adviser's investment process and adherence to its stated \nstrategy."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-121",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "The Standard relating to disclosure of conflicts requires a member to:",
        "options": [
            "avoid all actual and potential conflicts of interest.",
            "treat all clients equally when disseminating investment recommendations or taking \ninvestment action.",
            "provide clients and prospective clients with information needed to evaluate the \nobjectivity of investment advice given by the member."
        ],
        "correctAnswer": 2,
        "explanation": "121. C is correct because Standard VI(A), Disclosure of Conflicts requires members \nand candidates to make full and fair disclosure of all matters that could reasonably \nbe expected to impair their independence and obje ctivity or interfere with \nrespective duties to their clients, prospective clients, and employer and protects \ninvestors and employers by requiring members and candidates to fully disclose to \nclients, potential clients, and employers all actual and potential conflicts of interest. \nOnce a member or candidate has made full disclosure, the member’s or candidate’s \nemployer, clients, and prospective clients will have the information needed to evaluate \nthe objectivity of the investment advice or action taken on their behalf."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-122",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "A member uses his firm's composite to show performance to a prospective client. \nThe member states \"Our composite shows that we have outperformed the benchmark \nover the last five years, gross of fees.\" Has the member most likely violated the \nStandards?",
        "options": [
            "No.",
            "Yes, the Standard relating to misrepresentation.",
            "Yes, the Standard relating to performance presentation."
        ],
        "correctAnswer": 0,
        "explanation": "122. A is correct because the member has not violated either of the Standards.  \nStandard I (C), Misrepresentation, prohibits members and candidates from \nguaranteeing clients any specific return on volatile investments. The member is not \nmaking a guarantee or implying a future return to the prospective client, and \ntherefore is not in violation of this Standard. Standard III (D), Performance \nPresentation, states a member or candidate must give a fair and complete \npresentation of performance information whenever communicating data with respect \nto the performance history of individual accounts, composites or groups of accounts, \nor composites of an analyst’s or firm’s performance results. Furthermore, members \nand candidates should not state or imply that clients will obtain or benefit from a \nrate of return that was generated in the past. The member is stating a fact that the \ncomposite shows outperformance, gross of fees, and not implying future returns and \ntherefore is not in violation of this Standard."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-123",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Belen Zapata, CFA, is the owner of Kawah Investments. Kawah promises investors \nreturns of up to 12% per year and claims to achieve this by investing in non -\ninvestment-grade bonds and other fixed-income instruments. Over the next 12 \nmonths, bond market yields reach unprecedented lows, and Zapata finds it impossible \nto achieve the returns she expected. No investments are ever made by Kawah, and \nclients are completely paid back all of their original investment. Zapata most likely \nviolated the CFA Institute Standards of Professional Conduct because of the:",
        "options": [
            "return of capital.",
            "promised returns.",
            "investment mandate."
        ],
        "correctAnswer": 1,
        "explanation": "123. B is correct because the member has misrepresented the returns she could \nrealistically achieve for her clients, violating Standard I(C), which prohibits members \nand candidates from guaranteeing clients any specific return on volatile investments."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-124",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "The GIPS standards:",
        "options": [
            "allow the use of a representative account to present the firm's overall investment \nresults.",
            "require firms to present performance history that only includes accounts \nremaining at the firm.",
            "establish a standardized approach to presenting historical investment results to \nprospective clients."
        ],
        "correctAnswer": 2,
        "explanation": "124. C is correct because the GIPS standards are a practitioner-driven set of ethical \nprinciples that establish a standardized, industry-wide approach for investment firms \nto follow in calculating and presenting their historical investment results to \nprospective clients. Therefore, the GIPS standard establish a standardized approach \nto presenting historical investment results to prospective clients, and this answer is \ncorrect."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-125",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "The GIPS standards were created to:",
        "options": [
            "promote fair, global competition among investment firms.",
            "eliminate the need for costly in-depth due diligence by investors.",
            "serve as a mandatory performance standard for asset management firms in \ncountries without investment performance regulation."
        ],
        "correctAnswer": 0,
        "explanation": "125. A is correct because the objectives of the GIPS standards are as follows: \nPromote fair, global competition among investment firms."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-126",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Jan Loots, CFA, quit his job as a portfolio manager at an investment firm with \nwhich he had a non-solicitation agreement he signed several years ago. Loots received \npermission to take his investment performance history with him and also took a copy \nof the firm’s software-trading platform. Subsequently, Loots sent out messages on \nsocial media sites announcing he was looking for clie nts for his new investment \nmanagement firm. Access to Loots’ social media sites is restricted to friends, family, \nand former clients. Loots least likely violated the CFA Institute Standards of \nProfessional Conduct concerning his:",
        "options": [
            "trading software.",
            "non-solicitation agreement.",
            "investment performance history."
        ],
        "correctAnswer": 2,
        "explanation": "126. C is correct because the portfolio manager received permission to use his \ninvestment performance history from his prior employer. The member violated his \nnon-solicitation agreement by indicating his availability to new clients on several social \nmedia sites accessible by clients of his former employer. This is a violation of \nStandard IV(A)–Loyalty because he did not act for the benefit of his former \nemployer. In this case, the member may cause harm to his former employer if his \nweekend messages result in clients moving to his new business from his former \nemployer. The member also violated this standard by taking his employer’s property, \ntrading software."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-127",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following is a recommended procedure for compliance with the \nStandard relating to misrepresentation? Firms can help prevent misrepresentation \nby:",
        "options": [
            "specifically designating which employees are authorized to speak on behalf of the \nfirm.",
            "performing quarterly competence reviews of employees who deliver firm \npresentations to clients.",
            "ensuring that each employee develops procedures for verifying information of \nthird-party firms provided to clients."
        ],
        "correctAnswer": 0,
        "explanation": "127. A is correct because the recommended procedures for compliance with Standard \nI (C), Misrepresentation, state that firms can also help prevent misrepresentation by \nspecifically designating which employees are authorized to speak on behalf of the \nfirm."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-128",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following is a recommended procedure for compliance with the \nStandard relating to priority of transactions? Investment personnel should:",
        "options": [
            "examine all personal trades for possible conflicts immediately after execution of \nthe trades.",
            "direct their brokers to supply their firms with duplicate confirmations of all their \npersonal securities transactions.",
            "make a one-time disclosure of holdings in which they have a beneficial interest to \ntheir firm upon commencement of the employment relationship."
        ],
        "correctAnswer": 1,
        "explanation": "128. B is correct because the recommended procedures for compliance with Standard \nVI (B), Priority of Transactions, recommend that investment personnel should be \nrequired to direct their brokers to supply to firms duplicate copies or confirmations \nof all their personal securities transactions and copies of periodic statements for all \nsecurities accounts."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-129",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following is a recommended procedure for compliance with the \nStandard relating to suitability? \nProcedure 1: An investor's objectives and constraints should be reviewed annually \nunless there is a reason that dictates more frequent review. \nProcedure 2: A member in an investment advisory relationship with clients should take \ninto consideration performance measurement benchmarks in formulating an \ninvestment policy statement.",
        "options": [
            "Procedure 1 only.",
            "Procedure 2 only.",
            "Both Procedure 1 and Procedure 2."
        ],
        "correctAnswer": 2,
        "explanation": "129. C is correct because the recommended procedures for compliance with Standard \nIII(C), Suitability, state that an investor’s objectives and constraints should be \nmaintained and reviewed periodically to reflect any changes in the client’s \ncircumstances. Annual review is reasonable unless business or other reasons, such as \na major change in market conditions, dictate more frequent review. In addition, in \nformulating an investment policy for the client, the member or candidate should take \nthe following into consideration: performance measurement benchmarks. Therefore, \nboth procedures are recommended for compliance with Standard III(C)."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-130",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the Standard related to independence and objectivity, a member \nmust:",
        "options": [
            "refuse all business-related gifts.",
            "adhere to strict standards of conduct that govern how issuer-paid research is \nconducted.",
            "pay for transportation, hotel and meal expenses when attending meetings at an \nissuer’s headquarters."
        ],
        "correctAnswer": 1,
        "explanation": "130. B is correct because this is a requirement of Standard I(B), Independence and \nObjectivity. Issuer-paid research conducted by independent analysts, however, is \nfraught with potential conflicts. Members must adhere to strict standards of \nconduct that govern how the research is to be conducted and what disclosures must \nbe made in the report. Analysts must engage in thorough, independent, and unbiased \nanalysis and must fully disclose potential conflicts of interest, including the nature \nof their compensation."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-131",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "A member most likely violates the Standard relating to knowledge of the law if \nshe fails to:",
        "options": [
            "dissociate from unethical conduct.",
            "report illegal activity to the appropriate regulatory organization.",
            "have detailed knowledge of all the laws potentially governing her professional \nactivities."
        ],
        "correctAnswer": 0,
        "explanation": "131. A is correct because under Standard I(A), Knowledge of the Law, members and \ncandidates have a responsibility to step away and dissociate from the [unethical] \nactivity. Inaction combined with continuing association with those involved in illegal \nor unethical conduct may be construed as participation or assistance in the illegal or \nunethical conduct."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-132",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Recommended procedures for compliance with the Standard relating to \nresponsibilities of supervisors include:",
        "options": [
            "encouraging employers to provide a copy of the firm's code of ethics to clients.",
            "requiring firms to adopt the CFA Code of Ethics and Standards of Professional \nConduct.",
            "consolidating a code of ethics and specific policies and procedures to ensure \ncompliance."
        ],
        "correctAnswer": 0,
        "explanation": "132. A is correct because under Standard IV(C), Responsibilities of Supervisors, \nmembers and candidates should encourage their employers to provide their codes to \nclients... the code of ethics will be effective in conveying that the firm is committed \nto conducting business in an ethical manner and in the best interests of the clients."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-133",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the GIPS standards, verification must be performed:",
        "options": [
            "with respect to an entire firm.",
            "on specific composites of a firm.",
            "by a firm’s compliance department."
        ],
        "correctAnswer": 0,
        "explanation": "133. A is correct because verification is performed with respect to an entire firm, not \non specific composites or pooled funds."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-134",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "A member leaves her employer to start at a new firm. According to the Standards, \nat her new firm, the member is permitted to recreate supporting records of her work \nat her previous employer from:",
        "options": [
            "memory.",
            "sources obtained at the previous employer.",
            "information provided directly by the covered company."
        ],
        "correctAnswer": 2,
        "explanation": "134. C is correct because this is consistent with Standard V(C), Record Retention. For \nfuture use, the member or candidate must re-create the supporting records at the \nnew firm with information gathered through public sources or directly from the \ncovered company and not from memory or sources obtained at the previous employer."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-135",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the GIPS standards, verification:",
        "options": [
            "is performed on a firm-wide basis.",
            "must be performed by a firm's compliance department.",
            "ensures the accuracy of specific composite presentations."
        ],
        "correctAnswer": 0,
        "explanation": "135. A is correct because verification is performed with respect to an entire firm, not \non specific composites."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-136",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Verification provides assurance that which of the following have been designed in \ncompliance with the GIPS standards?",
        "options": [
            "Only the calculation and presentation of the firm's performance.",
            "Only the firm's policies related to composite and pooled fund maintenance.",
            "Both the calculation and presentation of the firm's performance, and the firm's \npolicies related to composite and pooled fund maintenance."
        ],
        "correctAnswer": 2,
        "explanation": "136. C is correct because verification provides assurance on whether the firm’s policies \nand procedures related to composite and pooled fund maintenance, as well as the \ncalculation, presentation, and distribution of performance, have been designed in \ncompliance with the GIPS standards and have been implemented on a firm-wide basis."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-137",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Sue Yong, CFA, is an analyst at a large investment firm. After thorough research, \nshe issues a \"buy\" rating on a company and submits her report to her firm's \ninvestment committee for review. The committee disagrees with Yong's assumptions \nin the report. As a result, the report is changed to a \"neutral\" rating. The final report \nis issued and Yong agrees to leave her name on the report. Has Yong violated the \nStandards?",
        "options": [
            "No.",
            "Yes, the Standard relating to loyalty, prudence, and care.",
            "Yes, the Standard relating to diligence and reasonable basis."
        ],
        "correctAnswer": 0,
        "explanation": "137. A is Correct because according to Standard V (A), Diligence and Reasonable basis, \nMembers and Candidates must:"
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-138",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the Standard relating to independence and objectivity, which of the \nfollowing is accurate? \nStatement 1: A member should encourage her firm to remove a covered company from \na restricted list if the firm is unwilling to permit dissemination of an adverse opinion \nabout the company. \nStatement 2: A member is prohibited from accepting benefits from corporate issuers \nin the form of allocation of shares in oversubscribed IPOs suitable for firm's clients.",
        "options": [
            "Statement 1 only",
            "Statement 2 only",
            "Both Statement 1 and Statement 2"
        ],
        "correctAnswer": 1,
        "explanation": "138. B is correct because according to Standard I (B), Independence and Objectivity, \none type of benefit is the allocation of shares in oversubscribed IPOs to investment \nmanagers for their personal accounts. This practice affords managers the \nopportunity to make quick profits that may not be available to their clients. Such a \npractice is prohibited under Standard I (B). Therefore, a member is prohibited from \naccepting benefits from corporate issuers in the form of allocation of shares in \noversubscribed IPOs that are suitable for firm's clients. So, Statement 2 is \naccurate."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-139",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Rita Melmo, CFA, is an analyst at a Greensky Investment (GI). On weekends, she \nworks as a paid employee of a local charity where she negotiates purchase \nagreements. Melmo does not disclose the charity employment to GI. Melmo is asked \nto purchase a new truck for the charity and she negotiates a purchase agreement \nwith a local truck dealership. In the purchase agreement, the charity is charged $500 \nmore than the truck's normal sale price. In return, Melmo receives retail vouchers \nworth $500 from the dealership for her private use. Melmo has most likely violated \nthe Standards:",
        "options": [
            "only by failing to disclose the charity employment to GI.",
            "only by negotiating a purchase agreement in which the charity is charged more \nthan the truck's normal sale price. \nEthical and Professional Standards \nFaculty: Vikas Vohra                                                                        Page 29 of 58",
            "both by failing to disclose the charity employment to GI and by negotiating a \npurchase agreement in which the charity is charged more than the truck's normal \nsale price."
        ],
        "correctAnswer": 1,
        "explanation": "139. B is correct because according to Standard I (D), Misconduct, Members and \nCandidates must not engage in any professional conduct involving dishonesty, fraud, \nor deceit or commit any act that reflects adversely on their professional reputation, \nintegrity, or competence. Overcharging the charity by any amount is fraud and \nreflects adversely on Melmo as an investment professional and potentially on her \nemployer and the investment profession."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-140",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "According to the Standard relating to disclosure of conflicts, a member should:",
        "options": [
            "reject a board position in a company on which the member's firm is planning to \ninitiate a research report.",
            "ensure that her firm discloses to clients any rebates received from the service \nfee some classes of mutual funds charge to investors.",
            "place a company on a restricted list and issue factual information about the \ncompany if the member's firm holds options on the company's shares."
        ],
        "correctAnswer": 1,
        "explanation": "140. B is correct because according to Standard VI(A), Disclosure of Conflicts, equally \nimportant is the disclosure of arrangements in which the firm benefits directly from \ninvestment recommendations. An obvious conflict of interest is the rebate of a \nportion of the service fee some classes of mutual funds charge to investors. Members \nand candidates should ensure that their firms disclose such relationships so clients \ncan fully understand the costs of their investments and the benefits received by \ntheir investment manager’s employer."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-141",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following is a recommended procedure for compliance with the \nStandard relating to priority of transactions? \nProcedure 1: Members should disclose personal transactions relating to shares in \ntheir firm's research universe to clients upon request. \nProcedure 2: Members should establish blackout periods prior to trades for clients. \nProcedure 3: Members should treat fee-paying family accounts in which they have \nbeneficial ownership in the same manner as they would treat their personal accounts.",
        "options": [
            "Procedure 1",
            "Procedure 2",
            "Procedure 3"
        ],
        "correctAnswer": 1,
        "explanation": "141. B is correct because according to Standard VI(B), Priority of Transactions, \ninvestment personnel involved in the investment decision-making process should \nestablish blackout periods prior to trades for clients so that managers cannot take \nadvantage of their knowl­edge of client activity by “front-running” client trades \n(trading for one’s personal account before trading for client accounts)."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-142",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Susana Garcia, CFA, is a widely respected analyst covering the transportation \nsector. She completes a new recommendation for a company. The next morning, she \nemails the recommendation to her firm's largest client. After lunch, she emails the \nrecommendation to all other firm clients. One hour later, she calls the largest client \nto discuss the recommendation in detail. Garcia has violated the Standard relating to \nfair dealing:",
        "options": [
            "only by calling the largest client to discuss the recommendation in detail.",
            "only by emailing the recommendation to the largest client prior to sending it to all \nother clients.",
            "both by calling the largest client to discuss the recommendation in detail and by \nemailing the recommendation to the largest client prior to sending it to all other \nclients."
        ],
        "correctAnswer": 1,
        "explanation": "142. B is correct because Garcia has violated Standard III (B), Fair Dealing, by \ndisseminating the sell recommendation to her largest client before th e \nrecommendation is sent to all clients. Each member or candidate is obligated to ensure \nthat information is disseminated in such a manner that all clients have a fair \nopportunity to act on every recommendation. Garcia has not violated Standard III \n(B) by calling her largest client, since she widely disseminated the recommendation \nand provided the information to all her clients prior to discussing it with her largest \nclient. Members and candidates should establish procedures for the timing of \ndissemination of investment recommendations so that all clients are treated fairly—\nthat is, are informed at approximately the same time. Once this distribution has \noccurred, the member or candidate may follow up separately with individual clients, \n                                                                         \n \nbut members and candidates should not give favored clients advance information \nwhen such advance notification may disadvantage other clients."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-143",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "In the absence of regulatory guidance or firm policies, CFA Institute recommends \nmaintaining records for at least:",
        "options": [
            "three years.",
            "five years.",
            "seven years."
        ],
        "correctAnswer": 2,
        "explanation": "143. C is correct because according to Standard V (C), Investment Analysis, \nRecommendations, and Actions - Record Retention, Local regulators often impose \nrequirements on members, candidates, and their firms related to record retention \nthat must be followed. Firms may also implement policies detailing the applicable time \nframe for retaining research and client communication records. Fulfilling such \nregulatory and firm requirements satisfies the requirements of Standard V(C). In \nthe absence of regulatory guidance or firm policies, CFA Institute recommends \nmaintaining records for at least seven years."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-144",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "The Standards require a member to inform which of the following parties of any \nbenefit received for referrals of clients?",
        "options": [
            "Only his employer.",
            "Only his potential clients.",
            "Both his employer and his potential clients."
        ],
        "correctAnswer": 2,
        "explanation": "144. C is correct because Standard VI (C), Referral Fees, states the responsibility of \nmembers and candidates to inform their employer, clients, and prospective clients of \nany benefit received for referrals of customers and clients."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-145",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Asset managers are most likely required to do which of the following as part of \ntheir adherence to the GIPS standards?",
        "options": [
            "Adhere to certain calculation methodologies",
            "Only follow the minimum GIPS requirements at the time of composite creation",
            "Include all non-discretionary funds in at least one composite reflecting the \ninvestment mandate"
        ],
        "correctAnswer": 0,
        "explanation": "145. A is correct because the GIPS standards rely on the integrity of input data, the \nquality of which is critical to creating accurate performance presentations. The \nunderlying valuations of portfolio holdings drive performance. It is essential for \nthese and other inputs to be accurate. The GIPS standards require firms to adhere \nto certain calculation methodologies to allow for comparability across firms."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-146",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "A member employed by an investment firm carries out research at the request of \na client. The records of that research are the property of the:",
        "options": [
            "client.",
            "member.",
            "investment firm."
        ],
        "correctAnswer": 2,
        "explanation": "146. C is correct because, according to Standard V (C), Record Retention, records \ncreated as part of a member’s or candidate’s professional activity on behalf of his or \nher employer are the property of the firm."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-147",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Ann Macharia, CFA, is an independent consultant hired by MK Investment (MKI) \nto review its proposal to manage a large pension fund. While reviewing a draft of the \ndocument, Macharia notices a large section of material has been added to the \nproposal by MKI's CIO. The additional material looks exactly like what Macharai \nwrote for a previous client, describing the client's proprietary investment process. \nMacharia is most likely required to:",
        "options": [
            "remove the added material and report her suspicions to MKI.",
            "wait to say anything until the proposal is submitted to meet the conditions of her \nconsulting contract.",
            "confirm her client uses the same thorough investment process as described in the \nadded material, and make a few minor changes."
        ],
        "correctAnswer": 0,
        "explanation": "147. A is correct because the identical material reflected in her previous client's \nproposal belongs to that client, even though she wrote it on their behalf as their \nconsultant. To use it in its identical format would be considered plagiarism. In \naddition, the description also identifies a proprietary process and is therefore not \napplicable to her existing client's investment process. Consequently, to prevent \nviolating Standard I(C) Misrepresentation the material should be removed. The \nStandard states Members and Candidates must not knowingly make any \nmisrepresentations relating to investment analysis, recommendations, actions, or \nother professional activities. Standard I(C) Misrepresentation prohibits plagiarism in \nthe preparation of material for distribution to employers, associates, clients, \nprospects, or the general public. Macharia should also report the use of plagiarized \nmaterial to the client so they can take action to prevent the event being repeated in \nthe future (Standard I(A) Knowledge of the Law). Allowing the use of plagiarized \nmaterial reflects poorly on a firm and can hurt their reputation.  By reporting to the \nclient Macharia is also protecting the interests of her clients (Standard III(A) \nLoyalty, Prudence, and Care)."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-148",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following statements describe the key concepts of the GIPS \nstandards? \nStatement 1: The GIPS standards are ethical standards to ensure full disclosure of \ninvestment performance. \nStatement 2: The GIPS standards require firms to maintain composites for all \nstrategies for which the firm manages discretionary and nondiscretionary accounts. \nStatement 3: The GIPS standards address all aspects of performance measurement.",
        "options": [
            "Statement 1",
            "Statement 2",
            "Statement 3 \n \n \n \n \n                                                                         \n \nSolutions"
        ],
        "correctAnswer": 0,
        "explanation": "148. A is correct. GIPS standards are ethical standards for investment performance \npresentation to ensure fair representation and full disclosure of investment \nperformance. So, Statement 1 is a key concept of the GIPS standards. \nQuantitative Methods: Practice Pack \n\ncandidates for practice purpose."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-1",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following factors is not used in the calculation of a confidence interval?",
        "options": [
            "Point estimate",
            "Sampling error",
            "Reliability factor"
        ],
        "correctAnswer": 0,
        "explanation": "1. A is correct. CFA charterholders and candidates must place the integrity of the \ninvestment profession and the interests of clients above their own personal interests."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-2",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "An analyst performs a simple linear regression of a stock's monthly return on the \nmonthly return of a market index (both in %) and gathers the following information: \n \nThe 95% prediction interval for the stock's monthly return, given that the \nforecasted monthly return on the index is 3.5%, is closest to:",
        "options": [
            "0.7% to 6.3%.",
            "1.9% to 7.5%.",
            "3.3% to 6.1%."
        ],
        "correctAnswer": 1,
        "explanation": "2. B is correct. A profession is practiced by members who share and agree to adhere to \na common code of ethics, and a profession is based on a specialized knowledge and \nskills and service to others."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-3",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "An investor purchases a stock for $100. Immediately after receiving a dividend of \n$7, the investor sells the stock for $107. The holding period return of the investment \nis closest to:",
        "options": [
            "0%.",
            "7%.",
            "14%."
        ],
        "correctAnswer": 1,
        "explanation": "3. B is correct. Most societies acknowledge the ethical principles of honesty, fairness \nor justice, diligence, and respect for the rights of others. Duplicity or deception \nwould be in violation of most ethical principles."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-4",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "For a sample of 50 observations, in which of the following situations is a \nnonparametric test least likely to be appropriate? The data:",
        "options": [
            "contain outliers.",
            "are given in ranks.",
            "come from a population with a lognormal distribution."
        ],
        "correctAnswer": 0,
        "explanation": "4. A is correct as members and candidates must self-disclose on the annual Professional \nConduct Statement all matters that question their professional conduct, such as \ninvolvement in civil litigation or a criminal investigation or being the subject of a \nwritten complaint."
    },
    {
        "id": "vikas-vohra-ethical-and-professional-standards-5",
        "source": "Vikas Vohra",
        "subject": "Ethical and Professional Standards",
        "lm": "LM - Ethical and Professional Standards",
        "text": "Which of the following test statistics is most appropriate for a hypothesis test \nconcerning the mean difference between two normally distributed populations?",
        "options": [
            "t-statistic",
            "F-statistic",
            "Chi-square statistic"
        ],
        "correctAnswer": 0,
        "explanation": "5. A is correct as soliciting the bank’s client did not violate Standard IV(A)–Loyalty \nbecause the manager is no longer an employee of the bank and there is no indication \nshe obtained the client information from bank sources. The member, however, has \nviolated Standard V(C)–Record Retention, because when she left the bank she took \nthe property of the bank without express permission to do so. In addition, the analyst \nviolated Standard I(C)–Misrepresentation by creating research materials without \nattribution, which is demonstrated when the manager adds to the new report a real \nestate study she saw in the Wall Street Journal, referencing the Journal only. In all \ninstances, a member or candidate must cite the actual source of the information. If \nshe does not obtain the report and review the information, the manager runs the risk \nof relying on second-hand information that may misstate facts. Best practice would \nbe either to obtain the complete study from its original author and cite only that \nauthor or to use the information provided by the intermediary and cite both sources."
    },
    {
        "id": "vikas-vohra-alternative-investments-9",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "A leveraged loan is best defined as a loan:",
        "options": [
            "that is itself levered.",
            "to mature companies in financial difficulty.",
            "that comes with warrants or conversion rights."
        ],
        "correctAnswer": 0,
        "explanation": "9. A is correct because a leveraged loan is a loan that is itself levered. Private debt \nfirms that invest in leveraged loans first borrow money to finance the debt and then \nextend it to another borrower. By using leverage, a private debt firm can enhance \nthe return on its loan portfolio."
    },
    {
        "id": "vikas-vohra-alternative-investments-10",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "From the perspective of a private equity firm, an advantage of exiting a portfolio \ncompany through a special purpose acquisition company (SPAC) most likely include:",
        "options": [
            "floating valuation.",
            "flexibility of the transaction structure.",
            "lower deal risk due to restrictions on redemptions."
        ],
        "correctAnswer": 1,
        "explanation": "10. B is correct because advantages of a SPAC exit include:  \na. extended time for public disclosure on company prospects to build investor \ninterest, \nb. fixed valuation with lower volatility of share pricing, \nc. flexibility of transaction structure to best suit the company’s context, and \nd. association with potentially high-profile and seasoned sponsors and their \nextensive investor network."
    },
    {
        "id": "vikas-vohra-alternative-investments-11",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "With respect to private equity, the growth capital strategy is also known as:",
        "options": [
            "venture capital.",
            "recapitalization.",
            "minority equity investing."
        ],
        "correctAnswer": 2,
        "explanation": "11. C is correct because among several other specialties, some private equity firms \nspecialize in growth capital, also known as growth equity or minority equity investing. \nGrowth capital generally refers to minority equity investments, whereby the firm \ntakes a less-than-controlling interest in more mature companies that are looking for \ncapital to expand or restructure operations, enter new markets, or finance major \nacquisitions."
    },
    {
        "id": "vikas-vohra-alternative-investments-12",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following hedge fund investments require the highest level of scrutiny \nand due diligence?",
        "options": [
            "Level 1 assets",
            "Level 2 assets",
            "Level 3 assets"
        ],
        "correctAnswer": 2,
        "explanation": "12. C is correct because any investment vehicle that is heavily involved with Level 3–\npriced assets deserves increased scrutiny and due diligence. The following is a \nmethodology that involves the categorization of investments into three buckets: \nLevel 1, 2, and 3 asset pricing. Level 3 asset values are computed using only internal \nmodels when outsider broker (Level 2) quotes are not available or not reliable."
    },
    {
        "id": "vikas-vohra-alternative-investments-13",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Hedge funds are most likely to place restrictions on:",
        "options": [
            "redemptions.",
            "the use of leverage.",
            "the use of derivatives."
        ],
        "correctAnswer": 0,
        "explanation": "13. A is correct because alternative investments often have many of the following \ncharacteristics. Restrictions on redemptions (i.e., 'lockups' and 'gates'). As such, \nrestrictions on redemptions are typically imposed [by hedge funds]. Investors may be \nrequired to keep their money in the hedge fund for a minimum period (referred to as \na lockup period) before they are allowed to make withdrawals or redeem shares. \nInvestors may be required to give notice of their intent to redeem; the notice period \nis typically 30–90 days. To redeem shares, investors may be charged a fee, typically \npayable to the fund itself (rather than the manager) so as not to disadvantage \nremaining investors in the fund, particularly in circumstances where the redemption \ntakes place during the lockup period."
    },
    {
        "id": "vikas-vohra-alternative-investments-14",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Crude oil is categorized as:",
        "options": [
            "a soft commodity.",
            "a hard commodity.",
            "neither a soft commodity nor a hard commodity."
        ],
        "correctAnswer": 1,
        "explanation": "14. B is correct because commodities are considered either 'hard' (those mined, such as \ncopper, or extracted, such as oil) or 'soft' (those grown over a period of time, such \nas livestock, grains, and cash crops, such as coffee)."
    },
    {
        "id": "vikas-vohra-alternative-investments-15",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Compared with direct investing, co-investing in alternative investments most likely \noffers:",
        "options": [
            "reduced control over the investment selection process.",
            "the same level of control over the investment selection process.",
            "higher control over the investment selection process."
        ],
        "correctAnswer": 0,
        "explanation": "15. A is correct because co-investing offers reduced control over the investment \nselection process compared with direct investing."
    },
    {
        "id": "vikas-vohra-alternative-investments-16",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following methods of investing in alternative investments provides the \nmost flexibility to the investor?",
        "options": [
            "Co-investing",
            "Fund investing",
            "Direct investing"
        ],
        "correctAnswer": 2,
        "explanation": "16. C is correct because direct investing allows the investor to build a portfolio of \ninvestments to her exact requirements. Direct investing provides the greatest \namount of flexibility for the investor and grants the highest level of control over how \nthe asset is managed."
    },
    {
        "id": "vikas-vohra-alternative-investments-17",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following is best classified as a commodity?",
        "options": [
            "Livestock",
            "Timberland",
            "Agricultural land"
        ],
        "correctAnswer": 0,
        "explanation": "17. A is correct because commodity investments may involve investing in actual physical \ncommodities or in producers of commodities. Commodities are considered either \n'hard' (those mined, such as copper, or extracted, such as oil) or 'soft' (those grown \nover a period of time, such as livestock, grains, and cash crops, such as coffee)."
    },
    {
        "id": "vikas-vohra-alternative-investments-18",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Investors in greenfield infrastructure projects typically:",
        "options": [
            "rely on the assets' financial and operating history.",
            "invest alongside strategic investors or developers.",
            "have lower development risk than investors in brownfield projects."
        ],
        "correctAnswer": 1,
        "explanation": "18. B is correct because greenfield investors typically invest alongside strategic \ninvestors or developers who specialize in developing the underlying assets."
    },
    {
        "id": "vikas-vohra-alternative-investments-19",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "An analyst gathers the following information about a hedge fund: \n \nThe incentive fee (in $ millions) based on returns net of management fees is closest \nto:",
        "options": [
            "7.2.",
            "13.0.",
            "14.7."
        ],
        "correctAnswer": 0,
        "explanation": "19. A is correct because End-of-year AUM = $500 million × 22% = $610 million. \n \nManagement fee = $610 million × 2% = $12.2 million. \n \nThe hurdle rate is a minimum rate of return, typically 8%, that the GP must exceed \nin order to earn the performance fee. GPs typically receive 20% of the total profit \nof the private equity fund net of any hard hurdle rate, in which case the GP earns \nfees on annual returns in excess of the hurdle rate, or net of the soft hurdle rate, in \nwhich case the fee is calculated on the entire annual gross return as long as the set \nhurdle is exceeded. \n \nHard hurdle = $500 million × 10% = $50 million. \n \nIncentive fee (based on returns net of management fees) = ($610 million – $500 \nmillion – $50 million – $12.2 million) × 15% = $47.8 million × 15% = $7.17 million ≈ $7.2 \nmillion."
    },
    {
        "id": "vikas-vohra-alternative-investments-20",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "A hedge fund strategy that seeks to influence a company's policies through the \npurchase of equity is best described as a(n):",
        "options": [
            "activist strategy.",
            "market-neutral strategy.",
            "merger arbitrage strategy."
        ],
        "correctAnswer": 0,
        "explanation": "20. A is correct because event-driven strategies, which include \"activist\", seek to profit \nfrom defined catalyst events, typically those that involve changes in corporate \nstructure, such as an acquisition or restructuring. In activist strategies, hedge fund \nmanagers secure sufficient equity holdings to allow them to influence a company’s \npolicies or direction. The hedge fund manager thus tries to create his or her own \ncatalyst, influencing the investment’s ultimate destiny by creating a desired \ncorporate outcome."
    },
    {
        "id": "vikas-vohra-alternative-investments-21",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Event-driven hedge fund strategies are most likely:",
        "options": [
            "long biased.",
            "based on 'top-down' analysis.",
            "exploiting short-term pricing discrepancies between two related securities."
        ],
        "correctAnswer": 0,
        "explanation": "21. A is correct because event-driven strategies tend to be long biased, with merger \narbitrage having the least bias."
    },
    {
        "id": "vikas-vohra-alternative-investments-22",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following are best categorized as social infrastructure assets?",
        "options": [
            "Airports",
            "Correctional facilities",
            "Telecommunication towers"
        ],
        "correctAnswer": 1,
        "explanation": "22. B is correct because infrastructure investments are frequently categorized on the \nbasis of the underlying assets. The broadest categorization organizes investments \ninto economic and social infrastructure assets. ... Social infrastructure assets are \ndirected toward human activities and include such assets as educational, health care, \nsocial housing, and Correct ional facilities, with the focus on providing, operating, and \nmaintaining the asset infrastructure."
    },
    {
        "id": "vikas-vohra-alternative-investments-23",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following statements is most accurate? Alternative investments:",
        "options": [
            "tend to be more efficiently priced than traditional investments.",
            "fall outside of the definition of long-only positions in stocks, bonds, and cash.",
            "have relatively high correlation of returns with those of traditional investments."
        ],
        "correctAnswer": 1,
        "explanation": "23. B is correct because investing in alternative assets can require handling illiquidity, \ntransacting on private markets, operating sophisticated investment strategies, or \nrisk–return profiles that are very different from those of traditional long -only \ninvestments."
    },
    {
        "id": "vikas-vohra-alternative-investments-24",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "An analyst gathers the following information about a hedge fund: \n• $200 million in assets under management at the beginning of year \n• a 2% management fee based on year-end assets under management \n• a 20% incentive fee calculated net of the management fee \nIf the fund's gross return is 25% during the year, the total fees earned by the fund \nmanager are:",
        "options": [
            "$11 million.",
            "$14 million.",
            "$15 million."
        ],
        "correctAnswer": 1,
        "explanation": "24. B is correct because it calculates the incentive fee net of the management fee. That \nis, the total fee is the sum of the management fee of $5 million ($250 million AUM \ntimes 0.02) and the incentive fee of $9 million ($250 million less $200 million less \nthe $5 million incentive times 0.20), which is $14 million."
    },
    {
        "id": "vikas-vohra-alternative-investments-25",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Management fees are most likely based on assets under management for:",
        "options": [
            "hedge funds only.",
            "private equity funds only.",
            "both hedge funds and private equity funds."
        ],
        "correctAnswer": 0,
        "explanation": "25. A is correct because funds are generally structured with a management fee typically \nranging from 1% to 2% of assets under management (e.g. for hedge funds) or \ncommitted capital (e.g. private equity funds), which is how much money in total that \nLP's have committed to the fund's future investments."
    },
    {
        "id": "vikas-vohra-alternative-investments-26",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "A leveraged private investment vehicle that employs both long and short positions is \nmost likely a:",
        "options": [
            "hedge fund.",
            "private equity fund.",
            "venture capital fund."
        ],
        "correctAnswer": 0,
        "explanation": "26. A is correct because hedge funds are private investment vehicles that manage \nportfolios of securities and/or derivative positions using a variety of strategies. \nAlthough hedge funds may be invested entirely in traditional assets, these vehicles \nare considered alternative because of their private nature. Hedge funds typically \nhave more leeway to pursue investments and strategies offering the potential for \nhigher returns, whether absolute or compared with a specific market benchmark, but \nthese strategies may increase the risk of investment loss. They may involve long and \nshort positions and may be highly leveraged."
    },
    {
        "id": "vikas-vohra-alternative-investments-27",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "A feature that protects hedge fund clients from paying twice for the same \nperformance is most likely a:",
        "options": [
            "discount.",
            "hurdle rate.",
            "high-water mark."
        ],
        "correctAnswer": 2,
        "explanation": "27. C is correct because in hedge funds, fee calculations also take into account a high-\nwater mark, which reﬂects the highest value used to calculate an incentive fee. A \nhigh-water mark is the highest value of the fund investment ever achieved at a \nperformance fee crystallization date, net of fees, by the individual LP. A high-water \nmark clause states that a hedge fund manager must recuperate declines in value from \nthe high-water mark before performance fees can be charged on newly generated \nprofits. The use of high-water marks protects clients from paying twice for the same \nperformance."
    },
    {
        "id": "vikas-vohra-alternative-investments-28",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "A joint venture is an alternative investment structure that is most likely used for:",
        "options": [
            "infrastructure investment.",
            "private equity investment.",
            "real estate direct investment."
        ],
        "correctAnswer": 2,
        "explanation": "28. C is correct because in real estate fund investing, investors may be classified as unit \nholders, and joint ventures are a partnership structure common in real estate direct \ninvesting."
    },
    {
        "id": "vikas-vohra-alternative-investments-29",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Regarding distribution methods in alternative investments, which of the following is \nmost advantageous to the limited partners? A(n):",
        "options": [
            "American waterfall.",
            "deal-by-deal waterfall.",
            "whole-of-fund waterfall."
        ],
        "correctAnswer": 2,
        "explanation": "29. C is correct because in whole-of-fund (European) waterfalls, all distributions go to \nthe LPs as deals are exited and the GP does not participate in any profits until the \nLPs receive their initial investment and the hurdle rate has been met. In contrast to \ndeal-by-deal (American) waterfalls, whole-of-fund waterfalls occur at the aggregate \nfund level and are more advantageous to the LPs."
    },
    {
        "id": "vikas-vohra-alternative-investments-30",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following hedge fund mechanisms is most likely used to impose a \ntemporary restriction on redemptions if needed?",
        "options": [
            "Gate",
            "Notice period",
            "Lockup period"
        ],
        "correctAnswer": 0,
        "explanation": "30. A is correct because in addition to lockup periods, funds sometimes impose a gate, \nwhich limits or restricts redemptions for a period of time."
    },
    {
        "id": "vikas-vohra-alternative-investments-31",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following infrastructure investments most likely have the highest risk?",
        "options": [
            "Brownfield investments with the majority of their return from current yield.",
            "Brownfield investments with the majority of their return from capital \nappreciation.",
            "Greenfield investments with the majority of their return from capital \nappreciation."
        ],
        "correctAnswer": 2,
        "explanation": "31. C is correct because infrastructure funds with a higher -risk profile invest in \nGreenfield projects without guarantees of demand upon completion and with high \nweighting to capital appreciation. Investing in infrastructure assets that are to be \nconstructed is generally referred to as greenfield investment. Greenfield \ninvestments are early-stage investments with a higher-risk profile."
    },
    {
        "id": "vikas-vohra-alternative-investments-32",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following methods of investing in alternative investments requires the \nleast amount of investment expertise?",
        "options": [
            "Co-investing",
            "Fund investing",
            "Direct investing"
        ],
        "correctAnswer": 1,
        "explanation": "32. B is correct because one of the advantages of fund investing is that it provides access \nto alternative investments without possessing a high degree of investment expertise."
    },
    {
        "id": "vikas-vohra-alternative-investments-33",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "The benefits of adding investments in infrastructure assets to a portfolio most likely \ninclude:",
        "options": [
            "inflation protection only.",
            "low correlation with existing portfolio assets only.",
            "both inflation protection and low correlation with existing portfolio assets."
        ],
        "correctAnswer": 2,
        "explanation": "33. C is correct because investing in infrastructure may add an income stream, increase \nportfolio diversification by adding an asset class with typically low correlation with \nexisting investments, and offer some protection against inflation. Low exposure to \nshort-term GDP growth issues may also be a factor."
    },
    {
        "id": "vikas-vohra-alternative-investments-34",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "In co-investing, the investor invests in alternative assets indirectly through a fund \nbut also has the:",
        "options": [
            "right to invest directly in the same assets alongside the fund.",
            "obligation to invest directly in the same assets alongside the fund.",
            "right to invest in the general partner's fund management company."
        ],
        "correctAnswer": 0,
        "explanation": "34. A is correct because in co-investing, the investor invests in assets indirectly through \nthe fund but also possesses rights (known as co-investment rights) to invest directly \nin the same assets. Through co-investing, an investor is able to make an investment \nalongside a fund when the fund identifies deals; the investor is not limited to \nparticipating in the deal solely by investing in the fund."
    },
    {
        "id": "vikas-vohra-alternative-investments-35",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "A disadvantage of direct real estate investing is:",
        "options": [
            "a lack of control.",
            "unfavorable tax rules.",
            "the time required to manage the property."
        ],
        "correctAnswer": 2,
        "explanation": "35. C is correct because major disadvantages to investing directly [in real estate] include \nextensive time required to manage the property. The owner may choose to handle all \naspects of investing in and operating the property, including property selection, asset \nmanagement, property management, leasing, and administration."
    },
    {
        "id": "vikas-vohra-alternative-investments-36",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following statements about private debt is most accurate? Mezzanine \ndebt:",
        "options": [
            "is subordinated to equity in a borrower's capital structure.",
            "is less risky than senior secured debt issued by the same company.",
            "may include additional features such as warrants to provide equity participation \nto lenders."
        ],
        "correctAnswer": 2,
        "explanation": "36. C is correct because mezzanine debt often comes with additional features, such as \nwarrants or conversion rights, which provide equity participation to \nlenders/investors, meaning they have the option of converting their debt into equity \nor purchasing the equity of the underlying borrower under certain circumstances."
    },
    {
        "id": "vikas-vohra-alternative-investments-37",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following statements about private equity performance evaluation is \nmost accurate?",
        "options": [
            "Private equity fund management fees are based on capital called.",
            "Cash flows are frequently described in terms of the J-curve effect.",
            "Managers have no discretion on the timing of the distribution of proceeds."
        ],
        "correctAnswer": 1,
        "explanation": "37. B is correct because private equity investments generally involve an initial capital \ncommitment, but actual capital flows often lag that commitment because capital \n                                                                         \n \n'calls' are staggered over substantive periods of time. Private equity returns are \nfrequently described in terms of the J-curve effect."
    },
    {
        "id": "vikas-vohra-alternative-investments-38",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following is most likely a primary exit strategy for a company held by a \nprivate equity fund's portfolio?",
        "options": [
            "IPO",
            "Management buy-in",
            "Management buyout"
        ],
        "correctAnswer": 0,
        "explanation": "38. A is correct because key private equity investment strategies include leveraged \nbuyouts (e.g., MBOs and MBIs) and venture capital. Primary exit strategies include \ntrade sale, IPO, and recapitalization."
    },
    {
        "id": "vikas-vohra-alternative-investments-39",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "A hedge fund that seeks to profit from a view on overall market direction as \ninfluenced by economic trends best describes a:",
        "options": [
            "macro hedge fund.",
            "multi-strategy hedge fund.",
            "market-neutral hedge fund."
        ],
        "correctAnswer": 0,
        "explanation": "39. A is correct because macro hedge funds use long and short positions to profit from \na view on the overall direction of the market as it is inﬂuenced by major economic \ntrends and events."
    },
    {
        "id": "vikas-vohra-alternative-investments-40",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following is best categorized as core real estate?",
        "options": [
            "A high-quality office building in a rural area",
            "A low-quality office building in a major urban center",
            "A high-quality office building in a major urban center"
        ],
        "correctAnswer": 2,
        "explanation": "40. C is correct because open-end funds generally offer exposure to core real estate, \ncharacterized by well-leased, high-quality institutional real estate in the best \nmarkets. Investors expect core real estate to deliver stable returns, primarily from \nincome."
    },
    {
        "id": "vikas-vohra-alternative-investments-41",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Compared with fund investing in alternative investments, the co-investing method \nmost likely has:",
        "options": [
            "lower management fees.",
            "the same level of management fees.",
            "higher management fees."
        ],
        "correctAnswer": 0,
        "explanation": "41. A is correct because one of the advantages of co-investing is that it has reduced \nmanagement fees. In co-investing, investors co-invest an additional amount into that \nsame investment often without paying management fees on the capital they used for \nthe direct investment (a co-investment, in this case)."
    },
    {
        "id": "vikas-vohra-alternative-investments-42",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following is best described as a relative value hedge fund strategy?",
        "options": [
            "Short biased",
            "Special situations",
            "Convertible bond arbitrage"
        ],
        "correctAnswer": 2,
        "explanation": "42. C is correct because relative value funds seek to profit from a pricing discrepancy \nbetween related securities based on an unusual short -term relationship. The \nexpectation is that the discrepancy will be resolved over time. Examples of relative \nvalue strategies include the following: Convertible bond arbitrage. This conceptually \nmarket-neutral investment strategy seeks to exploit a perceived mispricing between \na convertible bond and its component parts—namely, the underlying bond and the \nembedded stock option—relative to the pricing of a reference equity into which the \nbond may someday convert. The strategy typically involves buying convertible debt \nsecurities and simultaneously selling a certain amount of the same issuer’s common \nstock. As this type of strategy seeks to profit from a pricing discrepancy (an unusual \nshort-term relationship) between related securities, it is best described as a relative \nvalue strategy."
    },
    {
        "id": "vikas-vohra-alternative-investments-43",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following statements about real estate assets is most accurate?",
        "options": [
            "Real estate assets are heterogeneous",
            "Commercial property represents the majority of real estate assets by value",
            "Private real estate has historically had high correlations with other asset classes"
        ],
        "correctAnswer": 0,
        "explanation": "43. A is correct because real estate property has some unique features, including \nheterogeneity (no two properties are identical) and fixed location."
    },
    {
        "id": "vikas-vohra-alternative-investments-44",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following hedge funds most likely have a beta close to zero?",
        "options": [
            "Short-biased funds",
            "Market-neutral funds",
            "Fundamental long/short growth funds"
        ],
        "correctAnswer": 1,
        "explanation": "44. B is correct because the hedge fund takes long positions in securities identified as \nundervalued and short positions in overvalued securities. The hedge fund tries to \nmaintain a net position that is neutral with respect to market risk and other risk \nfactors (size, industry, momentum, value, etc.). Ideally, the portfolio has an overall \nbeta of approximately zero."
    },
    {
        "id": "vikas-vohra-alternative-investments-45",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "A hedge fund has the following characteristics: \n \n\n                                                                         \n \nIf the performance fee is calculated net of the management fee and there were no \ncapital contributions or withdrawals, the net annual return to the investor is closest \nto:",
        "options": [
            "16.3%.",
            "16.4%.",
            "16.5%."
        ],
        "correctAnswer": 1,
        "explanation": "45. B is correct because the hurdle rate is a minimum rate of return, typically 8%, that \nthe GP must exceed in order to earn the performance fee. GPs typically receive 20% \n                                                                         \n \nof the total profit of the private equity fund net of any hard hurdle rate, in which \ncase the GP earns fees on annual returns in excess of the hurdle rate, or net of the \nsoft hurdle rate, in which case the fee is calculated on the entire annual gross return \nas long as the set hurdle is exceeded. \n \nManagement fee = $100 million × 120% × 1% = $1.200 million. \n \nPerformance fee = [($100 million × 20%) – ($100 million × 3%) − $1.200 million)] × 15% \n= $2.370 million. \n \nTotal fee = $1.200 million + $2.370 million = $3.570 million. \n \nInvestor return = ($20 – $3.570) / $100 = 16.430% ≈ 16.4%."
    },
    {
        "id": "vikas-vohra-alternative-investments-46",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "An analyst collects the following information about a hedge fund: \n \nIf the incentive fee is calculated on returns in excess of a 6% hurdle rate, total \nannual fees earned by the fund manager are closest to:",
        "options": [
            "$34,800,000.",
            "$70,800,000.",
            "$78,000,000."
        ],
        "correctAnswer": 1,
        "explanation": "46. B is correct because the hurdle rate is a minimum rate of return, typically 8%, that \nthe GP must exceed in order to earn the performance fee. GPs typically receive 20% \nof the total profit of the private equity fund net of any hard hurdle rate, in which \ncase the GP earns fees on annual returns in excess of the hurdle rate, or net of the \nsoft hurdle rate, in which case the fee is calculated on the entire annual gross return \nas long as the set hurdle is exceeded. \n \nThe management fee is calculated as $1,500,000,000 × (1 + 20%) × 2% = $36,000,000 \nand the incentive fee is calculated as [$1,800,000,000 − $1,500,000,000 – \n($1,500,000,000 × 6%) − $36,000,000] × 20% = $34,800,000. Therefore, the total \nfees earned by the manager are $36,000,000 + $34,800,000 = $70,800,000."
    },
    {
        "id": "vikas-vohra-alternative-investments-47",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "What is the most likely effect of a redemption fee on the returns of the remaining \ninvestors in a hedge fund? A redemption fee:",
        "options": [
            "reduces investor returns.",
            "has no effect on investor returns.",
            "enhances investor returns."
        ],
        "correctAnswer": 2,
        "explanation": "47. C is correct because the fee increases the value of the hedge fund by the fee amount. \nA redemption fee may be charged, typically payable to the fund itself (rather than \nthe manager). This is to protect remaining investors in the fund, particularly in \ncircumstances where the redemption takes place during the lockup period. This \ncharacteristic is called a soft lockup, and it offers a path (albeit an expensive one) \nto redeem early."
    },
    {
        "id": "vikas-vohra-alternative-investments-48",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "If a commodity's storage cost is equal to its convenience yield, its futures prices will \nbe greater than its spot price if the risk-free rate is:",
        "options": [
            "negative.",
            "zero.",
            "positive."
        ],
        "correctAnswer": 2,
        "explanation": "48. C is correct because the futures price can be formalized in the following form: \nFutures price ≈ Spot price(1 + r) + Storage costs − Convenience yield, where r is the \nperiod's short-term risk-free interest rate. Thus, if Storage costs = Convenience \nyield, then Futures price ≈ Spot price(1 + r), from which Futures price > Spot price if \nr > 0."
    },
    {
        "id": "vikas-vohra-alternative-investments-49",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "An analyst gathers the following information about a hedge fund: \n \nIf the incentive fee is based on returns net of management fees, total fees for the \nyear are closest to:",
        "options": [
            "€6.8 million.",
            "€7.5 million. \n\nAlternative Investments: Practice Pack \nFaculty: Vikas Vohra                                                                        Page 8 of 18",
            "€8.8 million."
        ],
        "correctAnswer": 0,
        "explanation": "49. A is correct because the partnership agreement usually specifies that the \nperformance fee is earned only after the fund achieves a return known as a hurdle \nrate. The hurdle rate is a minimum rate of return, typically 8%, that the GP must \nexceed in order to earn the performance fee. GPs typically receive 20% of the total \nprofit of the private equity fund net of any hard hurdle rate, in which case the GP \nearns fees on annual returns in excess of the hurdle rate, or net of the soft hurdle \n                                                                         \n \nrate, in which case the fee is calculated on the entire annual gross return as long as \nthe set hurdle is exceeded. \n \nAUM at year-end = €200 million × 115% = €230 million. \n \nManagement fee = €230 million × 1.5% = €3.45 million. \n \nThe incentive fee is calculated net of management fees and there is also a hard hurdle \nrate. Accordingly, Incentive fee = (€230 million – €200 million – €3.45 million – €10 \nmillion) × 20% = €16.55 million × 20% = €3.31 million; where hard hurdle = €200 million \n× 5% = €10 million."
    },
    {
        "id": "vikas-vohra-alternative-investments-50",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "In the private debt market, venture debt:",
        "options": [
            "entails buying the debt of mature companies in financial difficulty.",
            "provides capital to early-stage companies that may be generating little cash flow.",
            "entails buying the debt of mature companies in financial difficulty and provides \ncapital to early-stage companies that may be generating little cash flow."
        ],
        "correctAnswer": 1,
        "explanation": "50. B is correct because this is the definition of venture debt. Venture debt is private \ndebt funding that provides venture capital backing to start -up or early-stage \ncompanies that may be generating little or negative cash flow."
    },
    {
        "id": "vikas-vohra-alternative-investments-51",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Timberland investments offer:",
        "options": [
            "an income stream only.",
            "the potential for capital gain only.",
            "both an income stream and the potential for capital gain."
        ],
        "correctAnswer": 2,
        "explanation": "51. C is correct because timberland investment involves ownership of raw land and the \nharvesting of its trees for lumber, thus generating an income stream and the \npotential for capital gain."
    },
    {
        "id": "vikas-vohra-alternative-investments-52",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following real estate investing strategies is most likely to focus on \nmodest redevelopment or upgrades, the leasing of vacant space, and the repositioning \nof underlying properties to earn a higher return?",
        "options": [
            "Core-plus",
            "Value-add",
            "Opportunistic"
        ],
        "correctAnswer": 1,
        "explanation": "52. B is correct because value-add investments may require modest redevelopment or \nupgrades, the leasing of vacant space, or repositioning the underlying properties to \nearn a higher return than core properties."
    },
    {
        "id": "vikas-vohra-alternative-investments-53",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "All else being equal, when a commodity futures market is in contango, the forward \ncurve is most likely:",
        "options": [
            "downward sloping.",
            "flat.",
            "upward sloping."
        ],
        "correctAnswer": 2,
        "explanation": "53. C is correct because when futures prices are higher than the spot price, the \ncommodity forward curve is upward sloping, and the prices are referred to as being \nin contango."
    },
    {
        "id": "vikas-vohra-alternative-investments-54",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "With respect to infrastructure investments, a take-or-pay arrangement is most likely \nused to mitigate:",
        "options": [
            "demand risk.",
            "operational risk.",
            "construction risk."
        ],
        "correctAnswer": 0,
        "explanation": "54. A is correct because take-or-pay arrangements, where payments are based upon the \navailability rather than the use of an asset, are used to mitigate demand/volume risk."
    },
    {
        "id": "vikas-vohra-alternative-investments-55",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following is most appropriately categorized as a traditional investment?",
        "options": [
            "Gold",
            "Cash",
            "Real estate"
        ],
        "correctAnswer": 1,
        "explanation": "55. B is correct because alternative investments' is a label for a disparate group of \ninvestments that are distinguished from long-only, publicly traded investments in \nstocks, bonds, and cash (often referred to as traditional investments)."
    },
    {
        "id": "vikas-vohra-alternative-investments-56",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following is most likely a characteristic of private real estate markets?",
        "options": [
            "Transaction costs are high",
            "Private market indexes are investable",
            "It is easy for small investors to establish a diversified portfolio of wholly owned \nproperties"
        ],
        "correctAnswer": 0,
        "explanation": "56. A is correct because, for private real estate markets, transaction costs are high."
    },
    {
        "id": "vikas-vohra-alternative-investments-57",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Alternative investments:",
        "options": [
            "include tangible assets only. \nAlternative Investments: Practice Pack \nFaculty: Vikas Vohra                                                                        Page 9 of 18",
            "include intangible assets only.",
            "may include both tangible and intangible assets."
        ],
        "correctAnswer": 2,
        "explanation": "57. C is correct because alternative Investments into three categories and several \nsubcategories as follows: 1. Private Capital 2. Real Assets 3. Hedge Funds. Other “real \nasset” investments may include tangible assets, such as fine wine, art, antique \nfurniture and automobiles, stamps, coins, and other collectibles, and intangible assets, \nsuch as patents and litigation actions."
    },
    {
        "id": "vikas-vohra-alternative-investments-58",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "In alternative investments, a clawback provision represents the right of:",
        "options": [
            "limited partners to reclaim performance losses.",
            "the general partner to reclaim part of limited partners' distributions.",
            "limited partners to reclaim part of the general partner's performance fee."
        ],
        "correctAnswer": 2,
        "explanation": "58. C is correct because if a general partner (GP) accrues an incentive fee on gains not \nyet fully realized and then subsequently gives back those gains, a limited partner (LP) \n                                                                         \n \nmay claw back prior incentive fee payments. A clawback provision reflects the right \nof LPs to reclaim part of the GP’s performance fee."
    },
    {
        "id": "vikas-vohra-alternative-investments-59",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following is the most conservative approach to valuing a hedge fund's \nunderlying positions?",
        "options": [
            "Using bid prices for long positions and ask prices for short positions",
            "Using bid prices for short positions and ask prices for long positions",
            "Using the average of the bid and ask prices for both long and short positions"
        ],
        "correctAnswer": 0,
        "explanation": "59. A is correct because, when market prices or quotes are used for valuation, funds may \ndiffer in which price or quote they use (bid price, ask price, average quote, or median \nquote). A more conservative and accurate approach is to use bid prices for long \npositions and ask prices for short positions because these are more realistic prices \nat which the positions could be closed. However, some managers use a simplifying \napproach whereby they take the average of the bid and the ask; this approach is not \nas accurate and could be misleading."
    },
    {
        "id": "vikas-vohra-alternative-investments-60",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "All else being equal, which of the following types of private debt is most likely to have \nthe lowest level of risk?",
        "options": [
            "Mezzanine debt",
            "Unitranche debt",
            "Infrastructure debt"
        ],
        "correctAnswer": 2,
        "explanation": "60. C is correct because, as a junior form of subordinated debt, mezzanine private debt \noffers higher growth potential, equity upside, and higher risk, with the comparatively \nhighest returns. Infrastructure debt is senior and poses the lowest risk, as compared \nto unitranche debt and mezzanine debt."
    },
    {
        "id": "vikas-vohra-alternative-investments-61",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "An analyst gathers the following information about a hedge fund: \n \nAn investor's net return is:",
        "options": [
            "13.60%.",
            "14.08%.",
            "14.40%. \n \n \n \n \n \n \n \n \n \n \n \n \n\n                                                                         \n \nSolutions"
        ],
        "correctAnswer": 1,
        "explanation": "61. B is correct because: \n \n$60 million × 2% = $1.2 million management fee. \n \n($60 – $50 – $1.2) million × 20% = $1.76 million incentive fee. \n \nTotal fees = $2.96 million. \n \nInvestor return = ($60 – $50 – $2.96)/$50 million = 14.08%. \nEquity Investments: Practice Pack \n\ncandidates for practice purpose."
    },
    {
        "id": "vikas-vohra-alternative-investments-1",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "A firm reports negative earnings for the year just ended. The price multiple of the \nfirm’s stock that is least likely to be meaningful is:",
        "options": [
            "trailing price to earnings.",
            "price to cash flow.",
            "leading price to earnings."
        ],
        "correctAnswer": 0,
        "explanation": "1. A is correct because decentralized exchanges lack a centralized control mechanism \nand operate on a distributed platform without central coordination or control. This \ncomes with the benefit that should one of the computers on the network be attacked, \nthe exchange remains operational since there are numerous other computers that \ncontinue to operate on the network. That is why attacking decentralized exchanges \nis substantially more difficult, rendering such attacks almost certain to fail. However, \nfor a centralized exchange, trading is hosted on private servers, exposing the \ncentralized exchanges and their clients to security vulnerabilities. Should the \nexchange's servers become compromised, the entire system may become paralyzed, \nhalting trade, and leaking vital user information. Hence, decentralized exchanges are \nless susceptible to attacks from hackers. Moreover, decentralized exchanges are \ndifficult to regulate because no single individual, organization, or group controls the \nsystem. This means that those trading on decentralized exchanges are generally free \nto transact without any regulatory scrutiny. However, some [centralized] exchanges \nare regulated, and depending on jurisdiction, these exchanges may be regulated as \nfinancial exchanges or other types of financial intermediaries. Hence, decentralized \nexchanges are less likely to be regulated."
    },
    {
        "id": "vikas-vohra-alternative-investments-2",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following dates in the dividend chronology can fall on a weekend?",
        "options": [
            "The payment date.",
            "The record date.",
            "The ex-date."
        ],
        "correctAnswer": 0,
        "explanation": "2. A is correct because digital asset investment can take the form of direct investment \non the blockchain or indirect investments. Direct ownership of bitcoin and other  \ncryptocurrencies involves the use of a cryptocurrency wallet, which stores the (public \nand private) digital codes required to access the asset on a computer website or \nmobile device application."
    },
    {
        "id": "vikas-vohra-alternative-investments-3",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "An investor writes a put option on FTSE 100 Index futures. Which of the following \nbest describes the investor’s position with respect to the put contract and her \nexposure to the underlying index future, respectively?",
        "options": [
            "Long, short",
            "Short, long",
            "Short, short"
        ],
        "correctAnswer": 2,
        "explanation": "3. C is correct because the correlation of cryptocurrencies with traditional assets is on \nthe rise."
    },
    {
        "id": "vikas-vohra-alternative-investments-4",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following financial intermediaries is most likely to provide liquidity \nservice to its clients?",
        "options": [
            "Brokers",
            "Dealers",
            "Exchanges"
        ],
        "correctAnswer": 0,
        "explanation": "4. A is correct because in practice, prices (or returns) of cryptocurrencies are driven \nmore by market adoption, network effects, technological advancement, regulatory \ndevelopment, and general market risk appetite."
    },
    {
        "id": "vikas-vohra-alternative-investments-5",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "The value effect market-pricing anomaly most likely occurs when stocks that have \nbelow-average price-to-earnings and market-to-book ratios, as well as above-average \ndividend yields, consistently outperform:",
        "options": [
            "large-cap stocks.",
            "growth stocks.",
            "stocks that have had negative earnings surprises."
        ],
        "correctAnswer": 2,
        "explanation": "5. C is correct because while there were around 70 cryptocurrencies recorded in 2013, \nby early 2022, there were close to 10,000 different cryptocurrencies issued by \ncorporations, organizations, and in many cases, individuals."
    },
    {
        "id": "vikas-vohra-alternative-investments-6",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Depreciation expense is best used in forecasting:",
        "options": [
            "growth capital expenditure only.",
            "maintenance capital expenditure only.",
            "both growth capital expenditure and maintenance capital expenditure."
        ],
        "correctAnswer": 2,
        "explanation": "6. C is correct because, unlike financial assets, most digital assets do not have an \ninherent value based on underlying assets or on the potential cash flow."
    },
    {
        "id": "vikas-vohra-alternative-investments-7",
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "LM - Alternative Investments",
        "text": "Which of the following forecast objects for a bank's revenue is best classified as a \ntop-down driver?",
        "options": [
            "Net interest income",
            "Growth in market share",
            "Growth in the number of branches"
        ],
        "correctAnswer": 2,
        "explanation": "7. C is correct because lockup periods—time periods when investors cannot withdraw \ntheir capital—provide the hedge fund manager the required time to implement and \npotentially realize a strategy’s expected results. Lockup periods apply to new \ninvestors in a hedge fund with the goal of allowing the hedge fund manager time to \nimplement the fund's investment strategy."
    },
    {
        "id": "vikas-vohra-corporate-issuers-8",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Which of the following would most likely be included on a company's \"financial\" \nbalance sheet?",
        "options": [
            "Short-term debt obligations",
            "Relationships with customers",
            "Relationships with key suppliers"
        ],
        "correctAnswer": 0,
        "explanation": "8. A is correct because short-term debt is included in a company's financial balance \nsheet."
    },
    {
        "id": "vikas-vohra-corporate-issuers-9",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "[Question is incorrect on CFA Website] Which of the following is a recommended \nprocedure for complying with the Standard relating to preservation of \nconfidentiality? \n• Procedure 1: Disclose to authorized fellow employees only information that will \nimprove service to the client \n• Procedure 2: Encourage the adoption of standard confidentiality procedures \nutilized by leading firms in the industry",
        "options": [
            "tiered pricing.",
            "dynamic pricing.",
            "value-based pricing."
        ],
        "correctAnswer": 0,
        "explanation": "9. A is correct because tiered pricing is charging different prices to different buyers, \noften based on volume purchased but also based on product features (e.g., base \nversus premium trims of vehicles)."
    },
    {
        "id": "vikas-vohra-corporate-issuers-10",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Which of the following is a pull on a company's liquidity?",
        "options": [
            "Obsolete inventory",
            "Reduced credit limits",
            "Uncollected receivables"
        ],
        "correctAnswer": 1,
        "explanation": "10. B is correct because a pull on liquidity is when disbursements (outflows) are paid too \nquickly by the company or trade credit availability is limited, requiring companies to \nexpend funds before they receive funds from sales that could cover the liability. \nAlso, major pulls on payments include Reduced credit limits. >If a company has a \nhistory of making late payments, suppliers might cut the amount of credit they will \nallow to be outstanding at any time.” So, reduced credit limits are a pull on a company’s \nliquidity."
    },
    {
        "id": "vikas-vohra-corporate-issuers-11",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Which of the following pricing models is most likely used when a firm willingly \nsacrifices margins to build market share?",
        "options": [
            "Dynamic pricing",
            "Freemium pricing",
            "Penetration pricing"
        ],
        "correctAnswer": 2,
        "explanation": "11. C is correct because penetration pricing is an example of discount pricing and is used \nwhen a firm willingly sacrifices margins in order to build scale and market share."
    },
    {
        "id": "vikas-vohra-corporate-issuers-12",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "The sequence of processes involved in the creation of a product, both within and \nexternal to a firm, is best referred to as a:",
        "options": [
            "value chain.",
            "supply chain.",
            "business model."
        ],
        "correctAnswer": 1,
        "explanation": "12. B is correct because a supply chain refers to the sequence of processes involved in \nthe creation of a product, both within and external to a firm. A supply chain includes \nall the steps involved in producing and delivering a physical product to the end \ncustomer, regardless of whether those steps are performed by a single firm."
    },
    {
        "id": "vikas-vohra-corporate-issuers-13",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "A company manufacturing and selling a product using someone else's brand name in \nreturn for a royalty most likely operates:",
        "options": [
            "under a franchise model.",
            "as a contract manufacturer.",
            "under a licensing arrangement."
        ],
        "correctAnswer": 2,
        "explanation": "13. C is correct because a company will produce a product using someone else’s brand \nname in return for a royalty under a licensing arrangement."
    },
    {
        "id": "vikas-vohra-corporate-issuers-14",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "When analyzing a company, analysts should:",
        "options": [
            "ignore the company’s business model.",
            "develop their own understanding of the company’s business model.",
            "rely on management’s description of the company’s business model."
        ],
        "correctAnswer": 1,
        "explanation": "14. B is correct because a clearly described business model helps the analyst understand \na business: how it operates, its strategy, target customers, key partners, prospects, \nrisks, and financial profile. Rather than rely on management’s description of its \nbusiness model, analysts should develop their own understanding."
    },
    {
        "id": "vikas-vohra-corporate-issuers-15",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Which of the following is best categorized as a drag on liquidity?",
        "options": [
            "Insufficient credit lines",
            "Uncollected receivables",
            "Early payments to vendors"
        ],
        "correctAnswer": 1,
        "explanation": "15. B is Correct because a drag on liquidity is when receipts lag, creating pressure from \nthe decreased available funds. Major drags on receipts involve pressures from credit \nmanagement and deterioration in other assets and include: Uncollected receivables. \nThe longer these are outstanding, the greater the risk that they will not be collected \nat all."
    },
    {
        "id": "vikas-vohra-corporate-issuers-16",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Which of the following combination of factors most likely increases a company's \nability to support debt in its capital structure?",
        "options": [
            "High revenue, low cash flow volatility, and a low level of fungible assets",
            "High revenue, low operating leverage, and a high level of fungible assets",
            "Low cash flow volatility, low operating leverage, and a low level of fungible assets"
        ],
        "correctAnswer": 1,
        "explanation": "16. B is correct because an increased ability to support debt is indicated by high revenue, \nlow operating leverage, and greater fungible assets."
    },
    {
        "id": "vikas-vohra-corporate-issuers-17",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "According to the Modigliani–Miller propositions, if a company's debt-to-equity ratio \nincreases, which of the following costs is most likely to exhibit the largest increase?",
        "options": [
            "WACC",
            "Cost of debt",
            "Cost of equity"
        ],
        "correctAnswer": 2,
        "explanation": "17. C is correct because as the debt-to-equity ratio increases and the company uses more \ndebt, its risk goes up and the cost of equity must increase. MM Proposition II holds \n                                                                                    \n \nthat the increase in the cost of equity must exactly offset the greater use of lower \ncost debt."
    },
    {
        "id": "vikas-vohra-corporate-issuers-18",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "At which stage in its life cycle would a typical company most likely have more debt \nthan equity in its capital structure?",
        "options": [
            "Start-up stage",
            "Growth stage",
            "Mature stage"
        ],
        "correctAnswer": 2,
        "explanation": "18. C is correct because at the mature stage, the company becomes able to support low-\ncost debt, often on an unsecured basis. From the company’s perspective, debt \nfinancing is likely to be more attractive than higher-cost equity financing. Also, as \ncompanies mature, business risk typically declines, and their cash flows turn positive \nand become increasingly predictable, allowing for greater use of leverage on more \nattractive (less costly) financing terms. Debt then becomes a larger component of \ntheir capital structures."
    },
    {
        "id": "vikas-vohra-corporate-issuers-19",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "With respect to a publicly listed company, a conflict of interest due to information \nasymmetry is most likely to occur between shareholders and:",
        "options": [
            "creditors.",
            "managers.",
            "customers."
        ],
        "correctAnswer": 1,
        "explanation": "19. B is correct because compared with shareholders, managers typically have greater \naccess to information about the business and are more knowledgeable about its \noperations. Such 'information asymmetry' (that is, unequal access to information) \nmakes it easier for managers to make strategic decisions that are not necessarily in \nthe best interest of shareholders and weakens the ability of shareholders to \nexercise control."
    },
    {
        "id": "vikas-vohra-corporate-issuers-20",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Compared to going concern projects, expansion projects most likely involve:",
        "options": [
            "greater uncertainty only.",
            "greater amounts of capital only.",
            "both greater uncertainty and greater amounts of capital."
        ],
        "correctAnswer": 2,
        "explanation": "20. C is correct because expansion projects typically involve greater uncertainty, time, \nand amounts of capital than going concern projects."
    },
    {
        "id": "vikas-vohra-corporate-issuers-21",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "From the perspective of a corporate issuer, which of the following is a benefit of \nissuing debt rather than equity as a source of capital? Debt is most likely:",
        "options": [
            "cheaper. \nCorporate Issuers: Practice Pack \nFaculty: Vikas Vohra                                                                                   Page 4 of 20",
            "less risky.",
            "more permanent."
        ],
        "correctAnswer": 0,
        "explanation": "21. A is correct because debt represents a cheaper financing source for companies and \na lower risk for investors. Because the returns to lenders are capped and because \nthe cost of debt is lower than the cost of equity, corporations with predictable cash \nflows may prefer to borrow money rather than sell an ownership stake to raise the \ncapital they need to finance their investments. This is because issuing more equity \ndilutes upside return for existing equity owners given that residual value must be \nshared across more owners."
    },
    {
        "id": "vikas-vohra-corporate-issuers-22",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "An improvement in corporate governance structure most likely results in:",
        "options": [
            "lower cost of debt borrowing.",
            "less control by management.",
            "reduced operational efficiency."
        ],
        "correctAnswer": 0,
        "explanation": "22. A is correct because default risks are also mitigated by properly functioning audit \nsystems, transparent and better reporting of earnings, and controlling information \nasymmetries between the company and its capital providers. Lower default risks are \nassociated with better credit ratings for the company and lower costs of debt \nborrowing, given that creditors typically require a lower return when their funds are \nbetter secured and their rights protected. Thus, an effective corporate governance \nstructure will result in lower cost of debt borrowing for the company."
    },
    {
        "id": "vikas-vohra-corporate-issuers-23",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "An analyst gathers the following information about a company's capital investment: \n• Initial cash outlay $90 million \n• Annual before-tax cash flows (year-end) for Year 1 to Year 6 $50 million \n• Marginal tax rate 15% \n• Required rate of return 12% \nThe net present value of the investment is closest to:",
        "options": [
            "$85 million.",
            "$116 million.",
            "$175 million."
        ],
        "correctAnswer": 0,
        "explanation": "23. A is correct because for a capital investment with one investment outlay, made \ninitially, the net present value (NPV) is the present value of the future after-tax cash \nflows minus the investment outlay  \n \n                                                                                    \n \nWe calculate the present value of the future after -tax cash flows using the \ncalculator with the following parameters: \nYearly after-tax payment/cash-flow: PMT = 50 × (1 – 0.15) = 42.5 \nNumber of payments: N = 6 \nInt. rate = 12%, \n \nTo calculate the NPV, from the present value we subtract the initial $90 million \noutflow. Accordingly, NPV = $174.7 million – $90.0 million = $84.7 ≈ $85 million."
    },
    {
        "id": "vikas-vohra-corporate-issuers-24",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Which of the following is most likely a feature of sole proprietorships?",
        "options": [
            "Existence of a legal identity",
            "Operational simplicity and flexibility",
            "Taxation of business profits as corporate income"
        ],
        "correctAnswer": 1,
        "explanation": "24. B is correct because key features of sole proprietorships include the following: \nOperational simplicity and flexibility."
    },
    {
        "id": "vikas-vohra-corporate-issuers-25",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "The source of capital that most likely benefits from a tax shield is:",
        "options": [
            "debt.",
            "equity.",
            "preferred equity."
        ],
        "correctAnswer": 0,
        "explanation": "25. A is correct because if interest can be deducted in full, the tax deductibility of debt \nreduces the effective marginal cost of debt to reflect the income shielded from \ntaxation and the marginal cost of debt is rd(1 – t). The cost of debt capital is the only \ncost of capital that can benefit from a tax shield."
    },
    {
        "id": "vikas-vohra-corporate-issuers-26",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Which of the following mature companies is most likely to use the greatest amount \nof leverage in its capital structure?",
        "options": [
            "Mining company",
            "Software company",
            "Shipping company"
        ],
        "correctAnswer": 2,
        "explanation": "26. C is correct because in real estate, utilities, shipping, airlines, and certain other highly \ncapital-intensive businesses, the underlying assets can be bought and sold fairly \neasily, tend to retain their value regardless of who owns them, and can therefore \nsupport substantial debt secured by those assets."
    },
    {
        "id": "vikas-vohra-corporate-issuers-27",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "A company should exercise the abandonment option on an investment if the present \nvalue of the cash flows from continuing the investment is:",
        "options": [
            "lower than the cash flow from abandoning the investment.",
            "the same as the cash flow from abandoning the investment.",
            "greater than the cash flow from abandoning the investment."
        ],
        "correctAnswer": 0,
        "explanation": "27. A is correct because if the cash flow from abandoning an investment exceeds the \npresent value of the cash flows from continuing the investment, the company should \nexercise the abandonment option. Conversely, if the PV of the cash flows from \ncontinuing the investment is lower than the cash flow from abandoning the \ninvestment, the company should exercise the abandonment option."
    },
    {
        "id": "vikas-vohra-corporate-issuers-28",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Consider the following information about a company: \n \nBased on the Modigliani-Miller propositions, the company's cost of equity is closest \nto:",
        "options": [
            "10.4%.",
            "11.3%.",
            "12.0%."
        ],
        "correctAnswer": 1,
        "explanation": "28. B is correct because Modigliani and Miller also show that the cost of equity for the \nsame company with debt is: re = r0 + (r0 – rd)(1 – t)(D/E), where: \n \nre = cost of equity \n \nro = cost of capital for a company financed only with equity \n \nrd = cost of debt \n \nD = market value of debt \n \nE = market value of equity. \n \n                                                                                    \n \nCost of equity = 0.09 + (0.09 – 0.04)×(1 – 0.25)×(£15,000/(£40,000 – 15,000)) = 0.1125 \n≈ 11.3%."
    },
    {
        "id": "vikas-vohra-corporate-issuers-29",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "All else being equal, a company most likely has a reduced debt capacity when its:",
        "options": [
            "current ratio increases.",
            "leverage ratio decreases.",
            "interest coverage ratio decreases."
        ],
        "correctAnswer": 2,
        "explanation": "29. C is correct because interest coverage ratios are also commonly used to assess \ncompanies’ debt capacities. Generally, these ratios provide an estimate of how many \ntimes a company can cover its interest expense (or interest expense plus lease \npayments) with current earnings (usually measured as EBIT or EBITDA). In other \nwords, interest coverage ratios provide an indication of a company’s financial cushion \nin meeting its debt service obligations. The larger the interest coverage ratio, the \nlarger the financial cushion and the greater the company’s ability to service its debt \nobligations."
    },
    {
        "id": "vikas-vohra-corporate-issuers-30",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "According to the Modigliani–Miller Proposition I without taxes, when a firm increases \nthe proportion of debt in its capital structure, the firm value:",
        "options": [
            "decreases.",
            "remains unchanged.",
            "increases."
        ],
        "correctAnswer": 1,
        "explanation": "30. B is correct because Modigliani and Miller proved that changing the capital structure \ndoes not affect firm value. The value of a firm is thus determined not by the \nsecurities it issues but, rather, by its expected future cash flows."
    },
    {
        "id": "vikas-vohra-corporate-issuers-31",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "With respect to liquidity management, which of the following activities most likely \nprovides access to a primary source of liquidity?",
        "options": [
            "Liquidating obsolete assets",
            "Creating an effective cash management system",
            "Negotiating new debt contracts that delay principal repayment"
        ],
        "correctAnswer": 1,
        "explanation": "31. B is correct because primary sources of liquidity are liquidity sources that are the \nmost readily accessible resources available to the company. One of the examples is \ncash flow management, which is the company's effectiveness in its cash management \nsystem and practices, and the degree of decentralization of the collections or \npayments processes. The more decentralized the system of collections, for example, \nthe more likely the company will be to have cash tied up in the system and not available \nfor use. Therefore, an effective cash management system is a primary source of \nliquidity as it is likely to be the most readily accessible resources available to the \ncompany."
    },
    {
        "id": "vikas-vohra-corporate-issuers-32",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Which of the following company stakeholders is most likely exposed to the greatest \ninformation asymmetry when compared to the company's management?",
        "options": [
            "A bank lender",
            "A public debtholder",
            "A member of the board"
        ],
        "correctAnswer": 1,
        "explanation": "32. B is correct because public debtholders do not have access to non-public information. \nPublic debtholders (or bondholders) rely on public information and credit rating \nagency determinations to make their investment decisions. Unlike shareholders, \ndebtholders do not hold voting power, and they typically have limited influence over \na company’s day-to-day operations."
    },
    {
        "id": "vikas-vohra-corporate-issuers-33",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "According to Modigliani and Miller's Proposition II without taxes:",
        "options": [
            "the cost of bankruptcy is high.",
            "a company's cost of equity is a linear function of its debt-to-assets ratio.",
            "substituting equity with lower-cost debt capital results in an unchanged overall \nWACC."
        ],
        "correctAnswer": 2,
        "explanation": "33. C is correct because MM Proposition II without taxes tells us that adding any amount \nof lower-cost debt capital to the capital structure is always perfectly offset by an \nincrease in the cost of equity, resulting in no change to the company’s overall weighted \naverage cost of capital."
    },
    {
        "id": "vikas-vohra-corporate-issuers-34",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "According to the Modigliani and Miller Proposition I with taxes, the value of a levered \ncompany is greater than the value of the unlevered company by an amount equal to \nthe:",
        "options": [
            "value of the debt.",
            "after-tax interest paid.",
            "tax rate multiplied by the value of the debt."
        ],
        "correctAnswer": 2,
        "explanation": "34. C is correct because Modigliani and Miller show that in the presence of corporate \ntaxes (but not personal taxes), the value of the levered company is greater than that \nof the all-equity company by an amount equal to the tax rate multiplied by the value \nof the debt, also termed the debt tax shield."
    },
    {
        "id": "vikas-vohra-corporate-issuers-35",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "In a limited partnership, business operations are the responsibility of:",
        "options": [
            "the general partner only.",
            "the limited partners only.",
            "both the general partner and the limited partners."
        ],
        "correctAnswer": 0,
        "explanation": "35. A is correct because key features of limited partnerships include: • GP operates the \nbusiness, having unlimited liability, • LPs have limited liability but lack control over \nbusiness operations."
    },
    {
        "id": "vikas-vohra-corporate-issuers-36",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Which of the following is considered a capital allocation pitfall? Basing investment \ndecisions on:",
        "options": [
            "opportunity costs.",
            "after-tax cash flows.",
            "short-run accounting numbers."
        ],
        "correctAnswer": 2,
        "explanation": "36. C is correct because one common pitfall is basing investment decisions on EPS, net \nincome, or ROE: Companies sometimes have incentives to boost earnings per share, \nnet income, or return on equity. Many investments, even those with strong NPVs, do \nnot increase these accounting numbers in the short run and may even reduce them. \nPaying too much attention to short-run accounting numbers can result in a company \nchoosing investments that are not in the long -run economic interests of its \nshareholders."
    },
    {
        "id": "vikas-vohra-corporate-issuers-37",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Which of the following is defined as the sensitivity of a firm’s operating profit to a \nchange in its revenues?",
        "options": [
            "Total leverage",
            "Financial leverage",
            "Operating leverage"
        ],
        "correctAnswer": 2,
        "explanation": "37. C is correct because operating leverage captures the sensitivity of operating profit, \nproxied by EBIT, to a change in revenues."
    },
    {
        "id": "vikas-vohra-corporate-issuers-38",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Proxy voting is best described as permitting:",
        "options": [
            "different voting rights for multiple share classes.",
            "shareholders to cast all of their votes for one board nominee.",
            "shareholders to vote their shares when absent from meetings."
        ],
        "correctAnswer": 2,
        "explanation": "38. C is correct because proxy voting is a process that enables shareholders who are \nunable to attend a meeting to authorize another individual (for example, another \nshareholder or director) to vote on their behalf."
    },
    {
        "id": "vikas-vohra-corporate-issuers-39",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Owners have limited liability in a:",
        "options": [
            "corporation.",
            "sole proprietorship.",
            "general partnership."
        ],
        "correctAnswer": 0,
        "explanation": "39. A is correct because owners in a corporation have limited liability."
    },
    {
        "id": "vikas-vohra-corporate-issuers-40",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Which of the following statements about sources of liquidity is most accurate?",
        "options": [
            "Filing for bankruptcy is considered a secondary source of liquidity.",
            "Secondary sources of liquidity have a lower cost than primary sources of liquidity.",
            "Using a primary source of liquidity impacts the financial and operating positions \nof a company."
        ],
        "correctAnswer": 0,
        "explanation": "40. A is correct because secondary sources include: filing for bankruptcy protection and \nreorganization. Further, reorganization through bankruptcy, may also be considered \na liquidity tool because a company under bankruptcy protection that generates \noperating cash will be liquid and generally able to continue business operations until a \nrestructuring has been devised and approved."
    },
    {
        "id": "vikas-vohra-corporate-issuers-41",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Subsequent to making a capital investment, a company reacts to poor financial results \nfrom the project by abandoning it. This action alone best exemplifies the exercise of \na:",
        "options": [
            "sizing option.",
            "timing option.",
            "flexibility option."
        ],
        "correctAnswer": 0,
        "explanation": "41. A is correct because sizing options encompass abandonment or expansion of capacity. \nIf after investing the company can abandon the investment if the financial results \nare disappointing, it has an abandonment option. At some future date, if the cash flow \nfrom abandoning an investment exceeds the present value of the cash flows from \ncontinuing the investment, the company should exercise the abandonment option. \nConversely, if the company can make additional investments when future financial \nresults are strong, the company has a growth option or an expansion option."
    },
    {
        "id": "vikas-vohra-corporate-issuers-42",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "A measure of how effectively capital is converted into after-tax operating profits is \nthe:",
        "options": [
            "hurdle rate.",
            "cost of capital.",
            "return on invested capital."
        ],
        "correctAnswer": 2,
        "explanation": "42. C is correct because ROIC reflects how effectively a company’s management is able \nto convert capital into after-tax operating profits."
    },
    {
        "id": "vikas-vohra-corporate-issuers-43",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Which of the following statements about corporations is most accurate?",
        "options": [
            "Upside return potential is unlimited for both equity holders and debtholders",
            "Equity is riskier than debt from the perspective of both investors and issuers",
            "Losses for both equity holders and debtholders are limited to their initial \ninvestment"
        ],
        "correctAnswer": 2,
        "explanation": "43. C is correct because shareholder losses are limited to their initial investment. For \nboth equityholders and debtholders, their initial investment represents their \nmaximum possible loss."
    },
    {
        "id": "vikas-vohra-corporate-issuers-44",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "With respect to ESG implementation, which of the following is most likely a social \nfactor?",
        "options": [
            "Board composition",
            "Pollution prevention",
            "Management of human capital"
        ],
        "correctAnswer": 2,
        "explanation": "44. C is correct because social factors considered in ESG implementation generally \npertain to the management of the human capital of a business, including human rights \nand welfare concerns in the workplace; product development; and, in some cases, \ncommunity impact."
    },
    {
        "id": "vikas-vohra-corporate-issuers-45",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Double taxation of profits is most likely a concern for owners in:",
        "options": [
            "corporations.",
            "limited partnerships.",
            "general partnerships."
        ],
        "correctAnswer": 0,
        "explanation": "45. A is correct because tax disadvantage for owners in countries with double taxation \nis a key feature of corporations. In most countries, corporations are taxed directly \non their profits. In many countries, shareholders pay an additional tax on \ndistributions (dividends) that are passed on to them. Economists refer to this as the \ndouble taxation of corporate profits."
    },
    {
        "id": "vikas-vohra-corporate-issuers-46",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Which of the following is an example of a secondary source of liquidity for a company?",
        "options": [
            "Short-term funds",
            "Liquidating assets",
            "Effective cash management"
        ],
        "correctAnswer": 1,
        "explanation": "46. B is correct because the main difference between primary and secondary sources of \nliquidity is that using a primary source is not likely to affect the normal operations \nof the company, whereas using a secondary source might result in a change in the \ncompany’s financial and operating positions. Secondary sources used by companies  \ninclude: liquidating assets, which depends on the degree to which short-term and/or \nlong-term assets can be liquidated and converted into cash without substantial loss \nin value."
    },
    {
        "id": "vikas-vohra-corporate-issuers-47",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Which of the following committees of a board of directors oversees the development \nof the company's conflict of interest policy?",
        "options": [
            "Risk committee",
            "Governance committee",
            "Remuneration committee"
        ],
        "correctAnswer": 1,
        "explanation": "47. B is correct because the main role of the board’s governance committee is to ensure \nthat the company adopts good corporate governance structures and practices. For \nthis purpose, it oversees the development of the governance policies at the company \nsuch as  \n• the corporate governance code \n• the charter of the board and its committees \n• the code of ethics and \n• the conflict of interest policy, among others."
    },
    {
        "id": "vikas-vohra-corporate-issuers-48",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "A company with a required rate of return of 12% is considering a capital project with \nthe following cash flows (in millions): \n \nThe expected IRR for this project is most likely:",
        "options": [
            "less than 12%.",
            "equal to 12%.",
            "greater than 12%."
        ],
        "correctAnswer": 0,
        "explanation": "48. A is correct because the IRR is the discount rate that makes the present value of \nthe future after-tax cash flows equal that investment outlay or ∑nt=1 CFt ÷ (1 + IRR)t \n= Outlay, where IRR is the internal rate of return. Solved using the following \ncalculator inputs: CF0 = −150, CF1 = 8, CF2 = 175, Calculate IRR = 10.7119, rounded to \n10.71% which is less than 12%."
    },
    {
        "id": "vikas-vohra-corporate-issuers-49",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "All else being equal, if interest on debt is tax deductible, an increase in the company's \nmarginal tax rate will:",
        "options": [
            "decrease the company's WACC.",
            "not affect the company's WACC.",
            "increase the company's WACC."
        ],
        "correctAnswer": 0,
        "explanation": "49. A is correct because the marginal cost of debt financing is the cost of debt after \nconsidering the allowable deduction for interest on debt. If interest can be deducted \nin full, the tax deductibility of debt reduces the effective marginal cost of debt to \nreflect the income shielded from taxation (often referred to as the tax shield) and \nthe marginal cost of debt is rd(1 – t). If the marginal tax rate increases, this \nincreases the tax shield and lowers the marginal cost of debt and also the WACC."
    },
    {
        "id": "vikas-vohra-corporate-issuers-50",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "A company increases its debt from 20% to 60% of its capital structure. Based on the \nModigliani and Miller proposition (without taxes) regarding capital structure, the \nWACC of the company:",
        "options": [
            "decreases.",
            "remains the same.",
            "increases."
        ],
        "correctAnswer": 1,
        "explanation": "50. B is correct because the Modigliani and Miller proposition implies that higher leverage \nraises the cost of equity but does not change firm value or WACC."
    },
    {
        "id": "vikas-vohra-corporate-issuers-51",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "The NPV of a new project is expected to be –$0.20 million. An incremental investment \nof $0.40 million would give management the flexibility to switch to a lower cost input \nin the future. If this option has an estimated value of $0.80 million, the value of the \nproject including the option is:",
        "options": [
            "$0.20 million.",
            "$0.40 million.",
            "$1.00 million."
        ],
        "correctAnswer": 0,
        "explanation": "51. A is correct because the NPV, including the real option, should be: \nProject NPV = NPV (based on DCF alone) – Cost of options + Value of options. \nProject NPV = –$0.2 million – $0.4 million + $0.8 million = $0.2 million."
    },
    {
        "id": "vikas-vohra-corporate-issuers-52",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "According to the pecking order theory, company managers most likely prefer to:",
        "options": [
            "issue debt as the last resort.",
            "raise equity first to preserve cash-flow.",
            "rely on internal financing over new equity."
        ],
        "correctAnswer": 2,
        "explanation": "52. C is correct because the pecking order theory suggests that managers choose \nmethods of financing according to a hierarchy that gives first preference to methods \nwith the least potential information content (internally generated funds) and lowest \npreference to the form with the greatest potential information content (public equity \nofferings). In brief, managers prefer internal financing. If internal financing is \ninsufficient, managers next prefer debt, then equity."
    },
    {
        "id": "vikas-vohra-corporate-issuers-53",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Which of the following is most accurate?",
        "options": [
            "Risk appetites are similar among private lenders",
            "Staggered boards provide continuous implementation of strategy and oversight",
            "A company's CEO is responsible for implementing the company’s strategy under \nthe oversight of the company's shareholders"
        ],
        "correctAnswer": 1,
        "explanation": "53. B is correct because the positive aspect of a staggered board, though, is that it \nprovides continuous implementation of strategy and oversight without constantly \nbeing reassessed by new board members, which otherwise risks bringing short -\ntermism into company strategy."
    },
    {
        "id": "vikas-vohra-corporate-issuers-54",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "The potential for conflict between debtholders and shareholders is:",
        "options": [
            "lower for long-term debt than for short-term debt.",
            "the same for long-term debt and short-term debt.",
            "higher for long-term debt than for short-term debt."
        ],
        "correctAnswer": 2,
        "explanation": "54. C is correct because the potential debt/equity conflict is greater in the case of long-\nterm rather than short-term debt because the passage of time exposes debtholders \nto possible changes in business conditions, strategy, and management behavior."
    },
    {
        "id": "vikas-vohra-corporate-issuers-55",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "A corporation's stakeholders most likely include:",
        "options": [
            "shareholders only.",
            "controlling shareholders only.",
            "all shareholders and all employees."
        ],
        "correctAnswer": 2,
        "explanation": "55. C is correct because the primary stakeholder groups of a corporation consist of \nshareholders, creditors, managers (or executives), other employees, board of \ndirectors, customers, suppliers, and governments/regulators (and, by extension, \naffected individuals and community groups)."
    },
    {
        "id": "vikas-vohra-corporate-issuers-56",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "In a corporation, which of the following stakeholder groups is the principal in a \nprincipal–agent relationship?",
        "options": [
            "Shareholders",
            "Board of directors",
            "Senior management"
        ],
        "correctAnswer": 0,
        "explanation": "56. A is correct because the relationship between shareholders and managers/directors \nis a classic example of a principal–agent relationship, whereby shareholders (the \nprincipal in this case) elect directors (an agent) who are expected to protect their \ninterests by appointing senior managers (another agent) to run the company."
    },
    {
        "id": "vikas-vohra-corporate-issuers-57",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "An analyst gathers the following information about a company: \n \nIf the company's marginal tax rate is 40%, its weighted average cost of capital is \nclosest to:",
        "options": [
            "9.7%.",
            "10.9%.",
            "11.6%."
        ],
        "correctAnswer": 1,
        "explanation": "57. B is correct because the WACC = wdrd × (1 – t) + wprp + were. \nWhere: \nwd = the market value weight for debt = 60 / (60 + 20 + 120) = 0.30 \nrd = the before-tax cost of debt = 6% \nt = the company's marginal tax rate = 40% = 0.4 \nwp = the market value weight for preferred stock = 20 / (60 + 20 + 120) = 0.10 \nrp = the marginal cost of preferred stock = 8% \nwe = the market value weight for equity = 120 / (60 + 20 + 120) = 0.60 \n \n                                                                                    \n \nre = the marginal cost of equity = 15% \nWACC = (0.30 × 6% × (1 – 0.4)) + (0.10 × 8%) + (0.60 × 15%) = 10.88%."
    },
    {
        "id": "vikas-vohra-corporate-issuers-58",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Covenants are most likely to exist between a company and its:",
        "options": [
            "creditors.",
            "management.",
            "board of directors."
        ],
        "correctAnswer": 0,
        "explanation": "58. A is correct because to limit bondholders’ risk during the term of a bond (or loan), \nthe bond indenture typically contains covenants, which are the terms and conditions \nof lending agreements, enabling creditors to specify the actions an issuer is obligated \nto perform or prohibited from performing."
    },
    {
        "id": "vikas-vohra-corporate-issuers-59",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "If a company's debt-to-equity ratio is 0.5, the weight of equity applied in estimating \nthe company's WACC is closest to:",
        "options": [
            "0.33.",
            "0.50.",
            "0.67."
        ],
        "correctAnswer": 2,
        "explanation": "59. C is Correct because the weight of debt is determined by the formula: \nwd= D/E / (1 + D/E) where D is the value of debt and E is the value of equity. Weight \nof equity (we) is represented by 1 minus the weight of debt. Calculation: 1 - 0.5/ (1.5) \n= 1 - 0.333 = 0.667 ≈ 0.67."
    },
    {
        "id": "vikas-vohra-corporate-issuers-60",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Compared to those of public companies, share issuances of private companies most \nlikely:",
        "options": [
            "raise larger amounts of capital.",
            "include a larger number of investors.",
            "include investors with longer holding periods."
        ],
        "correctAnswer": 2,
        "explanation": "60. C is correct because to raise more capital after listing, public companies may issue \nadditional shares in the capital markets, typically raising very large amounts from \nmany investors who may then actively trade shares among themselves in the \nsecondary market. In contrast, private companies finance much smaller amounts in \nthe primary market (private debt or equity) with far fewer investors who have much \nlonger holding periods."
    },
    {
        "id": "vikas-vohra-corporate-issuers-61",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Tiered pricing is best described as:",
        "options": [
            "charging different prices at different times.",
            "charging different prices to different buyers.",
            "combining a low price on a piece of equipment with high-margin pricing on repeat-\npurchase consumables."
        ],
        "correctAnswer": 1,
        "explanation": "61. B is correct because tiered pricing charges different prices to different buyers, \nmost commonly based on volume purchased."
    },
    {
        "id": "vikas-vohra-corporate-issuers-62",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "A company is deciding whether to invest in one of two mutually exclusive projects \nwith positive NPVs. If Project 1 has a higher NPV but a lower IRR than Project 2, the \ncompany should:",
        "options": [
            "prefer Project 1.",
            "prefer Project 2.",
            "be indifferent between Project 1 and Project 2."
        ],
        "correctAnswer": 0,
        "explanation": "62. A is correct because when the choice is between two mutually exclusive projects and \nthe NPV and IRR rank the two projects differently, the NPV criterion is strongly \npreferred. ... As a practical matter, once a corporation has the data to calculate the \nNPV, it is fairly trivial to then calculate the IRR and other capital allocation criteria. \nHowever, the most appropriate and theoretically sound criterion is the NPV."
    },
    {
        "id": "vikas-vohra-corporate-issuers-63",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "Compared to private corporations, which of the following is a typical characteristic \nof public corporations?",
        "options": [
            "A government is a shareholder",
            "Shares are listed on a stock exchange",
            "Transfer of ownership between investors is more difficult"
        ],
        "correctAnswer": 1,
        "explanation": "63. B is correct because when it comes to corporations, 'public' and 'private' are typically \ndefined by whether the company’s equity is listed on a stock exchange, although in \nsome countries whether a company is considered public or not may depend on its \nnumber of shareholders, irrespective of whether it is listed."
    },
    {
        "id": "vikas-vohra-corporate-issuers-64",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "When choosing between mutually exclusive projects, an analyst should:",
        "options": [
            "accept the project with the highest IRR.",
            "use the opportunity cost of funds as the discount rate.",
            "accept the projects for which the IRR is greater than the opportunity cost of \nfunds."
        ],
        "correctAnswer": 1,
        "explanation": "64. B is correct because when the choice is between two mutually exclusive projects and \nthe NPV and IRR rank the two projects differently, the NPV criterion is strongly \npreferred. we referred to the rate used in discounting the cash flows as the \n“required rate of return.” The required rate of return is the discount rate that the \nissuer’s suppliers of capital require given the riskiness of the project. This discount \nrate is frequently called the “opportunity cost of funds” or the “cost of capital.” For \na capital investment with one investment outlay, made initially, the net present value \n                                                                                    \n \n(NPV) is the present value of the future after-tax cash flows minus the investment \noutlay, where the discount rate equals the required rate of return."
    },
    {
        "id": "vikas-vohra-corporate-issuers-65",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "An electric vehicle manufacturer invests in a new technology to meet new safety \nstandards. This project is best classified as a(n):",
        "options": [
            "expansion project.",
            "compliance project.",
            "going concern project."
        ],
        "correctAnswer": 1,
        "explanation": "65. B is correct because regulatory and compliance projects are required by third \nparties, such as government regulatory bodies, to meet safety and regulatory \ncompliance standards. The investment in new technology to meet improved safety \nstandards is therefore a compliance project."
    },
    {
        "id": "vikas-vohra-corporate-issuers-66",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "The flow of finished goods from manufacturer to wholesaler, retailer, and finally to \nthe end customer best describes a(n):",
        "options": [
            "direct sales strategy.",
            "omnichannel strategy.",
            "traditional channel strategy."
        ],
        "correctAnswer": 2,
        "explanation": "66. C is correct because, for 'product' businesses, the traditional channel strategy is \ntypically reflected in the flow of finished goods (e.g., from manufacturer to \nwholesaler, retailer, and end customer), each with its own physical facilities and with \nthe product sold and purchased at each stage."
    },
    {
        "id": "vikas-vohra-corporate-issuers-67",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "A company is evaluating the following mutually exclusive capital projects: \n \nIf the hurdle rate is 8%, the company should invest in:",
        "options": [
            "Project 1 only.",
            "Project 2 only.",
            "both Project 1 and Project 2. \n \nSolutions"
        ],
        "correctAnswer": 0,
        "explanation": "67. A is correct because Project 1 has a higher NPV. For mutually exclusive investments \nthat are ranked differently by the NPV and IRR, the NPV criterion is more \neconomically sound. \nDerivatives: Practice Pack"
    },
    {
        "id": "vikas-vohra-corporate-issuers-1",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "All, else held equal, the value of a European call option is best characterized as having \na:",
        "options": [
            "negative relationship with the price of the underlying.",
            "negative relationship with the volatility of the underlying.",
            "positive relationship with the time to expiration."
        ],
        "correctAnswer": 0,
        "explanation": "1. A is correct because debt must be repaid on a pre-specified date in the future with \ninterest."
    },
    {
        "id": "vikas-vohra-corporate-issuers-2",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "All else being equal, which of the following European put options on the same \nunderlying most likely has the highest value? \nParticulars Time to Expiration Exercise Price \nOption 1 2 months $52 \nOption 2 4 months $52 \nOption 3 4 months $58",
        "options": [
            "Option 1",
            "Option 2",
            "Option 3"
        ],
        "correctAnswer": 2,
        "explanation": "2. C is correct because contract manufacturers produce goods to be marketed by \nothers."
    },
    {
        "id": "vikas-vohra-corporate-issuers-3",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "The value of a European put is directly related to the:",
        "options": [
            "risk-free rate.",
            "exercise price.",
            "value of the underlying."
        ],
        "correctAnswer": 2,
        "explanation": "3. C is correct because an issuer’s income statement distinguishes between its financial \nincome or net income once fixed obligations have been met and its 'economic' profit, \nor return to a firm’s owners in excess of what they could have earned elsewhere on \ndifferent investments, known as their required rate of return on equity."
    },
    {
        "id": "vikas-vohra-corporate-issuers-4",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "An investor gathers the following information about a call option: \nOption premium $5 \nExercise price $25 \nPrice of the underlying at initiation $15 \nAt expiration, if the price of the underlying is $30, the value of the call option to the \ncall seller is:",
        "options": [
            "−$5.",
            "$0.",
            "$10."
        ],
        "correctAnswer": 1,
        "explanation": "4. B is correct because private company investors may be limited to qualified or so-\ncalled accredited investors or sophisticated investors, or those deemed to be able \nand willing by regulatory authorities to assume the greater risk of a non -public \noffering."
    },
    {
        "id": "vikas-vohra-corporate-issuers-5",
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "LM - Corporate Issuers",
        "text": "An analyst gathers the following information: \nCall price $10 \nStock price $40 \nExercise price $60 \nInterest rate 3% \nTime to expiry 1 year \nAccording to put-call parity, the price of the put is closest to:",
        "options": [
            "$28.25.",
            "$30.00.",
            "$108.25."
        ],
        "correctAnswer": 2,
        "explanation": "5. C is correct because as multi-sided [two-sided] networks grow—more users join the \nservice, which attracts more merchants, which in turn attracts more users—these \nbusinesses can grow exponentially."
    },
    {
        "id": "vikas-vohra-quantitative-methods-7",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "An analyst gathers the following information about a company: \n \n\n                                                                         \n \nIf all purchases and sales were made on credit, the cash conversion cycle (based on \na 360-day year) is:",
        "options": [
            "less than the utility generated for a risk-averse investor.",
            "equal to the utility generated for a risk-averse investor.",
            "greater than the utility generated for a risk-averse investor."
        ],
        "correctAnswer": 0,
        "explanation": "7. A is correct because algorithmic trading requires access to low-latency networks, and \nwith the wide-spread adoption of algorithmic trading, the need for low -latency \nnetworks has grown. Low-latency systems—systems that operate on networks that \ncommunicate high volumes of data with minimal delay (latency)—are essential for \nautomated trading applications that make decisions based on real-time prices and \nmarket events. In contrast, high-latency systems do not require access to real-time \ndata and calculations. High-frequency trading is a form of algorithmic trading that \nmakes use of vast quantities of granular financial data (tick data, for example) to \nautomatically place trades when certain conditions are met. Trades are executed on \nultra-high-speed, low-latency networks in fractions of a second."
    },
    {
        "id": "vikas-vohra-quantitative-methods-8",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "The failure of machine learning models to accurately predict outcomes can be the \nresult of:",
        "options": [
            "overfitting, but not underfitting.",
            "underfitting, but not overfitting.",
            "either overfitting or underfitting."
        ],
        "correctAnswer": 2,
        "explanation": "8. C is correct because an ML model that has been overfitted is not able to accurately \npredict outcomes using a different dataset and may be too complex. Also, underfitted \nmodels will typically fail to fully discover patterns that underlie the data and thus \nmay not be able to accurately predict outcomes."
    },
    {
        "id": "vikas-vohra-quantitative-methods-9",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "Which of the following is most likely an advantage of traditional financial advisers \nover fully automated digital wealth managers?",
        "options": [
            "Lower account minimums",
            "Dividend reinvestment options",
            "Solutions that better address the needs of complex portfolios"
        ],
        "correctAnswer": 2,
        "explanation": "9. C is correct because as the complexity and size of an investor’s portfolio grows, robo-\nadvisers may not be able to sufficiently address the particular preferences and needs \nof the investor. In the case of extremely affluent investors who may own a greater \nnumber of asset types—including alternative investments (e.g., venture capital, \nprivate equity, hedge funds, and real estate)—in addition to global stocks and bonds \nand have greater demands for customization, the need for a team of human advisers, \neach with particular areas of investment or wealth-management expertise, is likely \nto endure."
    },
    {
        "id": "vikas-vohra-quantitative-methods-10",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "To test whether a population's mean, µ, is greater than zero, the alternative \nhypothesis should be formulated as:",
        "options": [
            "µ ≤ 0.",
            "µ ≥ 0.",
            "µ > 0."
        ],
        "correctAnswer": 2,
        "explanation": "10. C is correct because despite the different ways to formulate hypotheses, we always \nconduct a test of the null hypothesis at the point of equality, θ = θ0. We may have a \n‘suspected' or ‘hoped for' condition for which we want to find supportive evidence. \nIn that case, we can formulate the alternative hypothesis as the statement that this \ncondition is true; the null hypothesis that we test is the statement that this condition \nis not true. Here, the “suspected” condition is that the population's mean is greater \nthan zero (µ > 0)."
    },
    {
        "id": "vikas-vohra-quantitative-methods-11",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "A test of independence is based on the data in a contingency table with 5 rows and 4 \ncolumns. Using a nonparametric test statistic that is chi-square distributed, the \nnumber of degrees of freedom is:",
        "options": [
            "7.",
            "12.",
            "20."
        ],
        "correctAnswer": 1,
        "explanation": "11. B is correct because for a contingency table we can perform a test of independence \nusing a nonparametric test statistic that is chi-square distributed this test statistic \nhas (r – 1)(c – 1) degrees of freedom, where r is the number of rows and c is the \nnumber of columns. Here, r = 5 and c = 4, so degrees of freedom = (5 – 1)(4 – 1) = 4 × \n3 = 12."
    },
    {
        "id": "vikas-vohra-quantitative-methods-12",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "In a parametric test of the correlation between two variables with a sample size of \n51 and sample correlation of 0.6, the t-statistic is closest to:",
        "options": [
            "0.07.",
            "5.25.",
            "6.64."
        ],
        "correctAnswer": 1,
        "explanation": "12. B is correct because for a Parametric Test of a Correlation if the two variables are \nnormally distributed, we can test to determine whether the null hypothesis (H0: ρ = \n0) should be rejected using the sample correlation, r. The formula for the t-test is"
    },
    {
        "id": "vikas-vohra-quantitative-methods-13",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "If a unimodal return distribution is negatively skewed, which of the following most \nlikely has the highest value?",
        "options": [
            "Mean",
            "Mode",
            "Median"
        ],
        "correctAnswer": 1,
        "explanation": "13. B is correct because for the continuous negatively skewed unimodal distribution, the \nmean is less than the median, which is less than the mode. Therefore, the mode has \nthe highest value."
    },
    {
        "id": "vikas-vohra-quantitative-methods-14",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "A portfolio manager will invest €100,000 and is presented with the following \ninformation about three portfolios with normally distributed returns: \n \nIf the manager wants to withdraw €5,000 in one year without invading initial capital, \nthe safety-first optimal portfolio is:",
        "options": [
            "Portfolio 1.",
            "Portfolio 2.",
            "Portfolio 3."
        ],
        "correctAnswer": 2,
        "explanation": "14. C is correct because if returns are normally distributed, the safety-first optimal \nportfolio maximizes the safety-first ratio. SFRatio = [E(RP) – RL] / σP, where E(RP) \nis the expected portfolio return, RL is the investor's minimum acceptable return, and \nσP is the standard deviation of portfolio returns. The minimum acceptable return is \n5% (= €5,000 / €100,000) as the investor needs to withdraw €5,000 without invading \ninitial capital; SFP1 = (23% – 5%) / 15% = 1.20; SFP2 = (12% – 5%) / 6% ≈ 1.17; SFP3 \n= (15% – 5%) / 8% = 1.25. Therefore, Portfolio 3 is the safety-first optimal portfolio. \n“The portfolio for which E(RP) − RL is largest relative to standard deviation minimizes \nP(RP < RL)."
    },
    {
        "id": "vikas-vohra-quantitative-methods-15",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "Which of the following best describes when a transformation of the data may be \nneeded to enable the use of a simple linear regression model? When the:",
        "options": [
            "dependent variable is non-normally distributed",
            "pairs of the dependent and independent variables are uncorrelated with one \nanother",
            "relationship between the independent variable and the dependent variable is non-\nlinear"
        ],
        "correctAnswer": 2,
        "explanation": "15. C is correct because if the relationship between the independent variable and the \ndependent variable is not linear, we can often transform one or both of these \nvariables to convert this relation to a linear form, which then allows the use of simple \nlinear regression."
    },
    {
        "id": "vikas-vohra-quantitative-methods-16",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "For a continuous positively skewed unimodal distribution:",
        "options": [
            "both the mode and the median are less than the mean.",
            "both the mode and the median are greater than the mean.",
            "the mode is less than the mean and the median is greater than the mean."
        ],
        "correctAnswer": 0,
        "explanation": "16. A is correct because for a continuous positively skewed unimodal distribution, the \nmode is less than the median, which is less than the mean."
    },
    {
        "id": "vikas-vohra-quantitative-methods-17",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "In its broadest sense, fintech is best described as:",
        "options": [
            "the vast amount of data being generated by the financial services industry.",
            "the execution of investment strategies through computer-generated algorithms.",
            "technological innovation in the design and delivery of financial services and \nproducts."
        ],
        "correctAnswer": 2,
        "explanation": "17. C is correct because in its broadest sense, the term 'fintech' generally refers to \ntechnology-driven innovation occurring in the financial services industry. For the \npurposes of this reading, fintech refers to technological innovation in the design and \ndelivery of financial services and products. Note, however, that in common usage, \nfintech can also refer to companies (often new, startup companies) involved in \ndeveloping the new technologies and their applications, as well as the business sector \nthat comprises such companies."
    },
    {
        "id": "vikas-vohra-quantitative-methods-18",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "An analyst estimates the following information from a simple linear regression: \n \nThe standard error of the estimate is closest to:",
        "options": [
            "2.5.",
            "3.2.",
            "10.0."
        ],
        "correctAnswer": 1,
        "explanation": "18. B is correct because it is the standard error of the estimate calculated as the square \nroot of the mean square error; (10)^0.5 = 3.2. The mean square error (MSE) is \ncalculated as SSE / (n – 2); 280 / (30 – 2) = 10.0, where SSE is the sum of squares \nerror."
    },
    {
        "id": "vikas-vohra-quantitative-methods-19",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "An analyst draws samples from an original sample to estimate the standard error of \na population mean. Which of the following best describes this sampling procedure?",
        "options": [
            "Bootstrap method",
            "Cluster sampling method",
            "Convenience sampling method"
        ],
        "correctAnswer": 0,
        "explanation": "19. A is correct because in bootstrap, we repeatedly draw samples from the original \nsample, and each resample is of the same size as the original sample. Note that each \nitem drawn is replaced for the next draw (i.e., the identical element is put back into \nthe group so that it can be drawn more than once). Assuming we are looking to find \n\n                                                                         \n \nthe standard error of sample mean, we take many resamples and then compute the \nmean of each resample."
    },
    {
        "id": "vikas-vohra-quantitative-methods-20",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "The null hypothesis for the F-distributed test statistic in a simple linear regression \nmodel tests whether the:",
        "options": [
            "slope is equal to zero.",
            "intercept is equal to zero.",
            "slope is not equal to zero."
        ],
        "correctAnswer": 0,
        "explanation": "20. A is correct because in regression analysis, we can use an F-distributed test statistic \nto test whether the slopes in a regression are equal to zero, with the slopes \ndesignated as bi, against the alternative hypothesis that at least one slope is not \nequal to zero for simple linear regression, these hypotheses simplify to H0: b1 = 0. \nHa: b1 ≠ 0."
    },
    {
        "id": "vikas-vohra-quantitative-methods-21",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "An analyst estimates the probabilities of three possible economic scenarios and the \nprobabilities of a stock having a positive or a negative return in each scenario. These \nscenarios are best represented by a:",
        "options": [
            "tree-map.",
            "tree diagram.",
            "probability density function."
        ],
        "correctAnswer": 1,
        "explanation": "21. B is correct because probabilities for different scenarios and different outcomes \nare best represented using a tree diagram."
    },
    {
        "id": "vikas-vohra-quantitative-methods-22",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "Which of the following is most likely used to detect sentiment shifts in an analyst's \ncommentary?",
        "options": [
            "Tokenization",
            "Data curation",
            "Natural language processing"
        ],
        "correctAnswer": 2,
        "explanation": "22. C is correct because NLP [natural language processing] may be used to monitor analyst \ncommentary to aid investment decision making. Since analysts tend not to change \ntheir buy, hold, and sell recommendations for a company frequently, they may instead \noffer nuanced commentary without making a change in their investment \nrecommendation. NLP can, therefore, be used to detect, monitor, and tag shifts in \nsentiment, potentially ahead of an analyst's recommendation change."
    },
    {
        "id": "vikas-vohra-quantitative-methods-23",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "Which of the following visualizations is most appropriate for interpreting the \ncorrelation between two variables?",
        "options": [
            "Tree-map",
            "Scatter plot",
            "Clustered bar chart"
        ],
        "correctAnswer": 1,
        "explanation": "23. B is correct because scatter plots are a very useful tool for the sensible \ninterpretation of a correlation coefficient. A scatter plot is a type of graph for \nvisualizing the joint variation in two numerical variables. It is a useful tool for \ndisplaying and understanding potential relationships between the variables."
    },
    {
        "id": "vikas-vohra-quantitative-methods-24",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "Roy's safety-first criterion:",
        "options": [
            "evaluates only downside risk.",
            "uses semideviation as a risk measure.",
            "assumes asset prices are normally distributed."
        ],
        "correctAnswer": 0,
        "explanation": "24. A is correct because mean–variance analysis generally considers risk symmetrically in \nthe sense that standard deviation captures variability both above and below the mean. \nAn alternative approach evaluates only downside risk. We discuss one such approach, \nsafety-first rules, as it provides an excellent illustration of the application of normal \ndistribution theory to practical investment problems. Safety-first rules focus on \nshortfall risk, the risk that portfolio value will fall below some minimum acceptable \nlevel over some time horizon. Roy's safety-first criterion states that the optimal \nportfolio minimizes the probability that portfolio return, RP, falls below the \nthreshold level, RL."
    },
    {
        "id": "vikas-vohra-quantitative-methods-25",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "All else being equal, when compared to non-probability sampling, probability sampling \nmost likely yields:",
        "options": [
            "a less representative sample.",
            "an equally representative sample.",
            "a more representative sample."
        ],
        "correctAnswer": 2,
        "explanation": "25. C is correct because probability sampling gives every member of the population an \nequal change of being selected. Hence it can create a sample that is representative \nof the population. In contrast, non-probability sampling depends on factors other \nthan probability considerations, such as a sampler's judgment or the convenience to \naccess data. Consequently there is a significant risk that non-probability sampling \nmight generate a non-representative sample. In general, all else being equal, \nprobability sampling can yield more accuracy and reliability compared with non -\nprobability sampling."
    },
    {
        "id": "vikas-vohra-quantitative-methods-26",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "An analyst examines 30 paired monthly returns for two stock indexes. To determine \nif the mean difference of the returns is zero, the number of degrees of freedom of \nthe t-test is:",
        "options": [
            "28.",
            "29.",
            "58."
        ],
        "correctAnswer": 1,
        "explanation": "26. B is correct because the t-statistic for a paired comparisons test has n – 1 degrees \nof freedom, where n is the number of pairs of observations. When n = 30, the number \nof degrees of freedom is 30 – 1 = 29."
    },
    {
        "id": "vikas-vohra-quantitative-methods-27",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "An analyst calculates the following statistics for a sample with 100 observations: \n \nThe interquartile range of the sample is equal to:",
        "options": [
            "31.",
            "82.",
            "348."
        ],
        "correctAnswer": 1,
        "explanation": "27. B is correct because the interquartile range (IQR) is the difference between the \nthird quartile and the first quartile, or IQR = Q3 − Q1 \" = 93 – 11 = 82. Quartiles \ndivide the distribution into quarters."
    },
    {
        "id": "vikas-vohra-quantitative-methods-28",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "The probability of correctly rejecting a null hypothesis is best defined as the:",
        "options": [
            "p-value.",
            "power of the test.",
            "level of significance."
        ],
        "correctAnswer": 1,
        "explanation": "28. B is correct because the power of a test is the probability of Correct ly rejecting \nthe null—that is, the probability of rejecting the null when it is false."
    },
    {
        "id": "vikas-vohra-quantitative-methods-29",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "Ranked in ascending order, the 19th observation in a sample of 75 is in the second:",
        "options": [
            "decile.",
            "quintile.",
            "quartile."
        ],
        "correctAnswer": 1,
        "explanation": "29. B is correct because the 19th observation is located at the 25th percentile;"
    },
    {
        "id": "vikas-vohra-quantitative-methods-30",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "Sampling error is the difference between the observed value of a:",
        "options": [
            "random variable and the respective statistic.",
            "random variable and its hypothesized value.",
            "statistic and the quantity it is intended to estimate."
        ],
        "correctAnswer": 2,
        "explanation": "30. C is correct because sampling error is the difference between the observed value of \na statistic and the quantity it is intended to estimate."
    },
    {
        "id": "vikas-vohra-quantitative-methods-31",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "The central limit theorem:",
        "options": [
            "requires that the population be approximately normally distributed.",
            "implies that the sample mean is a consistent estimator of the population mean.",
            "states that the product of independent random variables is normally distributed."
        ],
        "correctAnswer": 1,
        "explanation": "31. B is correct because the central limit theorem states that the variance of the \ndistribution of the sample mean is σ2/n. The positive square root of variance is \nstandard deviation. The standard deviation of a sample statistic is known as the \nstandard error of the statistic. The sample mean, in addition to being an efficient \nestimator, is also a consistent estimator of the population mean: As sample size n \ngoes to infinity, its standard error, σ/√n, goes to 0 and its sampling distribution \nbecomes concentrated right over the value of population mean, µ."
    },
    {
        "id": "vikas-vohra-quantitative-methods-32",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "An analyst assumes that a company's future EPS will be either $2.00, $2.20, or \n$2.40. If each scenario is equally likely, the variance [in $2] of the company's future \nEPS is closest to:",
        "options": [
            "0.03.",
            "0.16.",
            "0.20."
        ],
        "correctAnswer": 0,
        "explanation": "32. A is correct because the variance of a random variable is the expected value (the \nprobability-weighted average) of squared deviations from the random variable’s \nexpected value: σ2(X) = E[X – E(X)]^2. Since each scenario is equally likely \n(probability = 1/3), E(X) = (2.0 + 2.2 + 2.4)/3 = 2.2, so σ2(X) = [(2.0 – 2.2)^2 + (2.2 – \n2.2)^2 + (2.4 – 2.2)^2]/3 = [0.04 + 0.04]/3 = 0.08/3 = 0.0267 ≈ 0.03 [in $^2]."
    },
    {
        "id": "vikas-vohra-quantitative-methods-33",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "An analyst observes the following EPS for four companies: –£0.50, £0.50, £2.50, and \n£5.50. The 50th percentile of the EPS values is closest to:",
        "options": [
            "£1.50.",
            "£2.00.",
            "£2.50."
        ],
        "correctAnswer": 0,
        "explanation": "33. A is correct because the 50th percentile is the median, which is the average of the \ntwo middle items; (£0.50 + £2.50)/2 = £1.50. In an odd-numbered sample of n items, \nthe median occupies the (n + 1)/2 position. In an even-numbered sample, we define \nthe median as the mean of the values of items occupying the n/2 and (n + 2)/2 \npositions (the two middle items). Calculating the median may also be more complex; \nto do so, we need to order the observations from smallest to largest, determine \nwhether the sample size is even or odd and, on that basis, apply one of two \n\n                                                                         \n \ncalculations. Alternatively, the 50th percentile when Ly is not a whole number or \ninteger, Ly lies between the two closest integer numbers (one above and one below), \nand we use linear interpolation between those two places to determine Py.  That is, \nLy = (n + 1)(y/100) = (4 + 1)(50/100) = 2.5. Hence, 2 is the closest integer below the \ncalculated location and 3 is the closest integer above the calculated location. Using \nlinear interpolation, P50 = £0.50 + (£2.50 – £0.50) × (2.5 – 2) = £1.50."
    },
    {
        "id": "vikas-vohra-quantitative-methods-34",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "The standard error of the estimate in a simple linear regression is best described as:",
        "options": [
            "a relative measure of fit for the regression.",
            "the percentage of the variation of the dependent variable that is explained by \nthe independent variable.",
            "a measure of the distance between the observed values of the dependent variable \nand those predicted from the estimated regression."
        ],
        "correctAnswer": 2,
        "explanation": "34. C is correct because the standard error of the estimate is a measure of the distance \nbetween the observed values of the dependent variable and those predicted from the \nestimated regression."
    },
    {
        "id": "vikas-vohra-quantitative-methods-36",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "Which of the following measures best quantifies the amount of risk per unit of mean \nreturn?",
        "options": [
            "Sharpe ratio",
            "Standard deviation",
            "Coefficient of variation"
        ],
        "correctAnswer": 2,
        "explanation": "36. C is correct because the coefficient of variation, CV, is the ratio of the standard \ndeviation of a set of observations to their mean value. When the observations are \nreturns, for example, the coefficient of variation measures the amount of risk \n(standard deviation) per unit of mean return."
    },
    {
        "id": "vikas-vohra-quantitative-methods-37",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "An analyst gathers the following returns for seven funds: \n \nThe second quartile return is:",
        "options": [
            "4%.",
            "5%.",
            "6%."
        ],
        "correctAnswer": 1,
        "explanation": "37. B is correct because the formula for the position of a percentile in an array with n \nentries sorted in ascending order is Ly = ( n + 1) × y/100, where y is the percentage \npoint at which we are dividing the distribution and Ly is the location ( L) of the \npercentile ( Py) in the array sorted in ascending order. With seven entries, the \nlocation of the second quartile, or 50th percentile, is: Ly = (7 + 1) × 50/100 = 4. When \nplacing the funds' returns in ascending order (3%; 3%; 4%; 5%; 7%; 8%; 12%), the \nreturn of the 4th fund is 5%. \n \nAlternatively, candidates might realize that the second quartile or 50th percentile is \nthe median. The median is the value of the middle item of a set of items that has \nbeen sorted into ascending or descending order. In an odd-numbered sample of n \nitems, the median occupies the ( n + 1)/2 position. Hence, the median return is 5%."
    },
    {
        "id": "vikas-vohra-quantitative-methods-38",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "The correlation coefficient:",
        "options": [
            "ranges from 0 to 1.",
            "is not affected by outliers.",
            "indicates the strength of the linear relationship between two random variables."
        ],
        "correctAnswer": 2,
        "explanation": "38. C is correct because the correlation coefficient expresses the strength of the linear \nrelationship between the two random variables."
    },
    {
        "id": "vikas-vohra-quantitative-methods-39",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "If the covariance between two positively correlated random variables remains the \nsame but the variance of both variables increases, the correlation between the two \nvariables:",
        "options": [
            "decreases.",
            "stays the same.",
            "increases."
        ],
        "correctAnswer": 0,
        "explanation": "39. A is correct because the correlation between two random variables, Ri and Rj, is \ndefined as ρ(Ri,Rj) = Cov(Ri,Rj)/[σ(Ri)σ(Rj)], where Cov denotes the covariance and σ \nthe standard deviation. Since the standard deviation of each asset occurs in the \ndenominator of the correlation formula, it is clear that, all else being equal, an \nincrease in the variance (hence standard deviation) of either variable will decrease \nthe correlation."
    },
    {
        "id": "vikas-vohra-quantitative-methods-40",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "The correlation between two variables measures:",
        "options": [
            "only their linear relationship.",
            "only their non-linear relationship.",
            "both their linear and non-linear relationships."
        ],
        "correctAnswer": 0,
        "explanation": "40. A is correct because the correlation coefficient is a measure of the linear association \nbetween two variables; it would not be appropriate to use the correlation coefficient \nto measure the non-linear relationship between variables."
    },
    {
        "id": "vikas-vohra-quantitative-methods-41",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "Which of the following is required to compute the standard error of a sample mean \nusing the bootstrap resampling method?",
        "options": [
            "The mean of each resample",
            "The mean of the original sample",
            "The standard deviation of the original sample"
        ],
        "correctAnswer": 0,
        "explanation": "41. A is correct because the equation to estimate the standard error of the sample mean \neffectively computes the sample standard deviation of the different means \ngenerated across all resamples. Hence the mean of each resample is required. \nHowever, neither the mean, nor the standard deviation, of the original sample are \nrequired."
    },
    {
        "id": "vikas-vohra-quantitative-methods-43",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "A tree diagram contains the following information about the dividend per share \npayable by a company under two scenarios: \n \nThe expected dividend per share under the favorable scenario is closest to:",
        "options": [
            "$1.14.",
            "$1.37.",
            "$1.90."
        ],
        "correctAnswer": 2,
        "explanation": "43. C is correct because the expected value of a random variable X given an event or \nscenario S is denoted E(X | S). Suppose the random variable X can take on any one of \nn distinct outcomes X1, X2, …, Xn (these outcomes form a set of mutually exclusive \nand exhaustive events). The expected value of X conditional on S is the first outcome, \nX1, times the probability of the first outcome given S, P(X1 | S), plus the second \noutcome, X2, times the probability of the second outcome given S, P(X2 | S), and so \nforth. In our case, S = Favorable scenario, X1 = Dividend of $2.50, X2 = Dividend of \n$1.50, P(X1 | S) = 0.80, and P(X2 | S) = 0.20. Thus, the expected dividend given the \nfavorable scenario = (0.80 × $2.00) + (0.20 × $1.50) = $1.90."
    },
    {
        "id": "vikas-vohra-quantitative-methods-44",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "The simple linear regression model in which only the independent variable is in \nlogarithmic form is best described as the:",
        "options": [
            "log-lin model.",
            "lin-log model. \n\nQuantitative Methods: Practice Pack \nFaculty: Vikas Vohra                                                                        Page 8 of 22",
            "log-log model."
        ],
        "correctAnswer": 1,
        "explanation": "44. B is correct because the lin-log model is similar to the log-lin model, but only the \nindependent variable is in logarithmic form."
    },
    {
        "id": "vikas-vohra-quantitative-methods-45",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "An analyst produces the following joint probability function for the returns on two \ncompanies, X and Y: \n \nThe expected returns of companies X and Y are 14% and 9%, respectively. The \ncovariance of returns between X and Y (in percent squared) is closest to:",
        "options": [
            "0.",
            "5.",
            "14."
        ],
        "correctAnswer": 2,
        "explanation": "45. C is correct because the formula for calculating the covariance between random \nvariables RA and RB is Cov(RA,RB) = ΣΣP(RA,i,RB,j)(RA,i – E[RA])(RB,j – E[RB]). \n \nThe expected return (given) for each company is: \n \nE[RX] = 0.2(20) + 0.4(15) + 0.4(10) = 4 + 6 + 4 = 14, \n \nE[RY] = 0.2(15) + 0.4(10) + 0.4(5) = 3 + 4 + 2 = 9. \n \n\n                                                                         \n \nHence, Cov(RX,RY) = 0.2(20 – 14)(15 – 9) + 0.4(15 – 14)(10 – 9) + 0.4(10 – 14)(5 – 9) = \n0.2(6)(6) + 0.4(1)(1) + 0.4(–4)(–4) = 7.2 + 0.4 + 6.4 = 14."
    },
    {
        "id": "vikas-vohra-quantitative-methods-46",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "An analyst gathers the following sample returns for a security: \n \nThe mean absolute deviation of the sample returns is:",
        "options": [
            "less than the sample standard deviation.",
            "equal to the sample standard deviation.",
            "greater than the sample standard deviation."
        ],
        "correctAnswer": 0,
        "explanation": "46. A is correct because the mean absolute deviation of 1.5% is less than the sample \nstandard deviation of 1.83%. The mean absolute deviation, MAD, is calculated as:"
    },
    {
        "id": "vikas-vohra-quantitative-methods-47",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "An equally weighted portfolio consists of two securities, each with a standard \ndeviation of 3%. If the two securities' returns are uncorrelated, the portfolio's \nstandard deviation is closest to:",
        "options": [
            "0.0%.",
            "2.1%.",
            "3.0%."
        ],
        "correctAnswer": 1,
        "explanation": "47. B is correct because the portfolio standard deviation is 2.1%;"
    },
    {
        "id": "vikas-vohra-quantitative-methods-48",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "The probability of correctly rejecting a false null hypothesis is best described as one \nminus the:",
        "options": [
            "test statistic's p-value.",
            "probability of a Type I error.",
            "probability of a Type II error."
        ],
        "correctAnswer": 2,
        "explanation": "48. C is correct because the power of a test is the probability of Correct ly rejecting \nthe null–that is, the probability of rejecting the null when it is false. Failing to reject \nthe null hypothesis when it is false is a Type II error. So the power of the test is \nequal to one minus the probability of Type II error."
    },
    {
        "id": "vikas-vohra-quantitative-methods-49",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "All else being equal, which of the following would most likely lead to a wider prediction \ninterval for the dependent variable when re-estimating a linear regression model? An \nincrease in the:",
        "options": [
            "sample size",
            "level of significance",
            "standard error of the estimate"
        ],
        "correctAnswer": 2,
        "explanation": "49. C is correct because the prediction interval is equal to the predicted value of the \ndependent variable plus/minus the critical t-value times the standard error of the \nforecast. The better the fit of the regression model, the smaller the standard error \nof the estimate (se) and, therefore, the smaller standard error of the forecast. \nWhen the standard error of the estimate increases, the standard error of the \nforecast will increase, which will lead to a wider prediction interval if holding other \nthings constant."
    },
    {
        "id": "vikas-vohra-quantitative-methods-50",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "With respect to simple linear regression, a residual is best described as the \ndifference between the observed value of a dependent variable and:",
        "options": [
            "its mean.",
            "its estimated value using a fitted regression line based on the sample.",
            "its expected value based on the true underlying population relationship."
        ],
        "correctAnswer": 1,
        "explanation": "50. B is correct because the residual for the ith observation, ei, is how much the observed \nvalue of Yi differs from the estimated [value] using the regression line. Further, the \nresidual refers to the fitted linear relation based on the sample."
    },
    {
        "id": "vikas-vohra-quantitative-methods-51",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "A portfolio has a mean return of 1.0% and a standard deviation of returns of 2.7%. \nIf the specified minimum target return is 1.0%, the sample target semideviation is:",
        "options": [
            "less than 2.7%.",
            "equal to 2.7%.",
            "greater than 2.7%."
        ],
        "correctAnswer": 0,
        "explanation": "51. A is correct because the target downside deviation = [Σ(Xi – B)^2/(n – 1)]^0.5, where \nXi are the periodic returns below the target return, B is the target return, and n is \nthe total number of periods. Since the sample has a standard deviation of 2.7%, it \nwill have values below and above its mean of 1.0%. Since the target downside deviation \nignores the deviations above the mean, it will be less than the standard deviation."
    },
    {
        "id": "vikas-vohra-quantitative-methods-52",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "An analyst discards the lowest 2.5% and the highest 2.5% of values in a sample, and \ncomputes the mean of the remaining 95% of values. The resulting mean is best \ndescribed as a:",
        "options": [
            "trimmed mean.",
            "harmonic mean.",
            "winsorized mean."
        ],
        "correctAnswer": 0,
        "explanation": "52. A is correct because the trimmed mean is computed by excluding a stated small \npercentage of the lowest and highest values and then computing an arithmetic mean \nof the remaining values. For example, a 5% trimmed mean discards the lowest 2.5% \nand the highest 2.5% of values and computes the mean of the remaining 95% of \nvalues."
    },
    {
        "id": "vikas-vohra-quantitative-methods-53",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "If a stock's continuously compounded return is normally distributed, the future stock \nprice is most likely:",
        "options": [
            "normally distributed.",
            "uniformly distributed.",
            "lognormally distributed."
        ],
        "correctAnswer": 2,
        "explanation": "53. C is correct because the relationship between normal and lognormal distributions is \nif a stock's continuously compounded return is normally distributed, then future \nstock price is necessarily lognormally distributed."
    },
    {
        "id": "vikas-vohra-quantitative-methods-54",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "An analyst considers the population of all existing stocks and selects those where the \ncompany name starts with the letter P. This sampling procedure is most likely an \nexample of:",
        "options": [
            "systematic sampling.",
            "non-probability sampling.",
            "two-stage cluster sampling."
        ],
        "correctAnswer": 1,
        "explanation": "54. B is correct because the sampling procedure does not give every member of the \npopulation an equal chance of being selected. It is based on the analyst's convenience. \nNon-probability sampling depends on factors other than probability considerations, \nsuch as a sampler’s judgment or the convenience to access data."
    },
    {
        "id": "vikas-vohra-quantitative-methods-55",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "The lognormal distribution:",
        "options": [
            "is unbounded.",
            "is asymmetrical.",
            "has the same mean as that of its associated normal distribution."
        ],
        "correctAnswer": 1,
        "explanation": "55. B is correct because the two most noteworthy observations about the lognormal \ndistribution are that it is bounded below by 0 and it is skewed to the right (it has a \nlong right tail), i.e. it is asymmetrical."
    },
    {
        "id": "vikas-vohra-quantitative-methods-56",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "In simple linear regression analysis, the total sum of squares best describes:",
        "options": [
            "a scatter plot.",
            "the variation of the dependent variable.",
            "a paired observation between variables."
        ],
        "correctAnswer": 1,
        "explanation": "56. B is correct because the variation of Y (the dependent variable) is often referred to \nas the sum of squares total (SST), or the total sum of squares."
    },
    {
        "id": "vikas-vohra-quantitative-methods-57",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "The process of representing ownership rights to physical assets on a distributed \nledger is referred to as:",
        "options": [
            "tokenization.",
            "initial coin offering.",
            "consensus mechanism."
        ],
        "correctAnswer": 0,
        "explanation": "57. A is correct because tokenization is the process of representing ownership rights to \nphysical assets on a blockchain or distributed ledger."
    },
    {
        "id": "vikas-vohra-quantitative-methods-58",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "Which of the following statements about distributed ledger technology is most  \naccurate?",
        "options": [
            "Bitcoin uses a permissioned network.",
            "Miners execute smart contracts in the blockchain.",
            "Tokenization can streamline the transfer of ownership of physical assets."
        ],
        "correctAnswer": 2,
        "explanation": "58. C is correct because through tokenization, the process of representing ownership \nrights to physical assets on a blockchain or distributed ledger, distributed ledger \ntechnology (DLT) has the potential to streamline this process by creating a single, \ndigital record of ownership with which to verify ownership title and authenticity, \nincluding all historical activity."
    },
    {
        "id": "vikas-vohra-quantitative-methods-59",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "Which of the following is an underlying assumption of the simple linear regression \nmodel? The regression residuals:",
        "options": [
            "are normally distributed.",
            "have high correlations across observations.",
            "have different variances across observations."
        ],
        "correctAnswer": 0,
        "explanation": "59. A is correct because one of the four key assumptions we need to make to be able to \ndraw valid conclusions from a simple linear regression mode is that regression \nresiduals are normally distributed."
    },
    {
        "id": "vikas-vohra-quantitative-methods-60",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "For a set of return observations, the coefficient of variation is best described as a \nmeasure of:",
        "options": [
            "risk per unit of mean return.",
            "mean excess return earned per unit of risk.",
            "average absolute deviation around the mean return."
        ],
        "correctAnswer": 0,
        "explanation": "60. A is correct because when the observations are returns, the coefficient of variation \nmeasures the amount of risk (standard deviation) per unit of mean return."
    },
    {
        "id": "vikas-vohra-quantitative-methods-61",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "An analyst performs a hypothesis test concerning the difference between the mean \nreturns of two portfolios, assuming normally distributed populations with unknown but \nequal variances. If the analyst decides to change the hypothesized difference in mean \nreturns from 0% to 1%, which of the following will change?",
        "options": [
            "The value of the test statistic",
            "The degrees of freedom used in the test",
            "The pooled estimate of the common population variance"
        ],
        "correctAnswer": 0,
        "explanation": "61. A is correct because when the unknown population variances are equal, a t-test based \non independent random"
    },
    {
        "id": "vikas-vohra-quantitative-methods-62",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "An analyst tabulates the ranks of four paired observations of random variables X and \nY as follows: \n \nThe Spearman rank correlation coefficient between X and Y is closest to:",
        "options": [
            "–0.2.",
            "0.8.",
            "1.0."
        ],
        "correctAnswer": 0,
        "explanation": "62. A is correct because with n as the sample size, the Spearman rank correlation is given \nby:"
    },
    {
        "id": "vikas-vohra-quantitative-methods-63",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "An analyst runs a simple linear regression to test whether the variation in the demand \nfor corn explains the variation in the supply of wheat. In this model, the supply of \nwheat is a(n):",
        "options": [
            "indicator variable.",
            "explained variable.",
            "independent variable."
        ],
        "correctAnswer": 1,
        "explanation": "63. B is correct because variation in the demand for corn is being used to explain the \nvariation in the supply of wheat. Therefore the variation in the supply of wheat is the \ndependent variable, or explained variable. We refer to the variable whose variation \nis being explained as the dependent variable, or the explained variable; it is typically \ndenoted by Y."
    },
    {
        "id": "vikas-vohra-quantitative-methods-64",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "A return distribution with negative skew and a mean of zero most likely has:",
        "options": [
            "frequent small gains and a few extreme losses.",
            "frequent small losses and a few extreme gains.",
            "frequent extreme losses and a few small gains."
        ],
        "correctAnswer": 0,
        "explanation": "64. A is correct because a return distribution with negative skew has frequent small gains \nand a few extreme losses."
    },
    {
        "id": "vikas-vohra-quantitative-methods-65",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "If the relationship between the dependent variable and independent variable is linear, \nthe regression residuals when plotted against the independent value should appear \nto:",
        "options": [
            "be linear.",
            "be random.",
            "follow a pattern."
        ],
        "correctAnswer": 1,
        "explanation": "65. B is correct because when we look at the residuals of a model, what we would like to \nsee is that the residuals are random. The residuals should not exhibit a pattern when \nplotted against the independent variable."
    },
    {
        "id": "vikas-vohra-quantitative-methods-66",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "In which of the following cases is cluster sampling most likely used? When:",
        "options": [
            "conducting a market survey",
            "auditing financial statements",
            "creating a bond portfolio to mirror the performance of a specified index"
        ],
        "correctAnswer": 0,
        "explanation": "66. A is correct because, in cluster sampling, the population is divided into clusters, each \nof which is essentially a mini-representation of the entire populations. Then certain \nclusters are chosen as a whole using simple random sampling. Cluster sampling is \ncommonly used for market surveys, and the most popular version identifies clusters \nbased on geographic parameters."
    },
    {
        "id": "vikas-vohra-quantitative-methods-67",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "Samples are drawn from a population that follows a binomial distribution with a \nprobability of success on a trial of 0.3. According to the central limit theorem, as the \nsample size increases, the distribution of the sample mean approaches a:",
        "options": [
            "negatively skewed distribution.",
            "symmetric distribution.",
            "positively skewed distribution."
        ],
        "correctAnswer": 1,
        "explanation": "67. B is correct because, according to the central limit theorem, the sampling distribution \nof the sample mean will be approximately normal when the sample size n is large. The \nnormal distribution has a skewness of 0 (it is symmetric).  Since the binomial \ndistribution has a mean of np and finite variance of np(1 – p), where n is the number \nof trials and p is the probability of success, the central limit theorem holds."
    },
    {
        "id": "vikas-vohra-quantitative-methods-68",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "A graphical depiction of a continuous distribution shows the left tail to be longer than \nthe right tail. The distribution is best described as having:",
        "options": [
            "negative skewness.",
            "leptokurtosis.",
            "positive skewness."
        ],
        "correctAnswer": 0,
        "explanation": "68. A is correct. A negatively skewed distribution appears as if the left tail has been \npulled away from the mean. The average magnitude of negative deviations from the \nmean is larger than the average magnitude of positive deviations."
    },
    {
        "id": "vikas-vohra-quantitative-methods-69",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "A nonparametric test is most appropriate when:",
        "options": [
            "comparing differences between means.",
            "data are given in ranks.",
            "data meet distributional assumptions."
        ],
        "correctAnswer": 1,
        "explanation": "69. B is correct. A nonparametric test is used under three circumstances: 1) when the \ndata do not meet distributional assumptions, 2) when the data are given in ranks, and \n3) when the hypothesis does not concern a parameter."
    },
    {
        "id": "vikas-vohra-quantitative-methods-70",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "Grouping all publicly traded US firms by sector and then randomly selecting \nsubsamples of firms from each sector according to the sector's proportion in the \ntotal population is an example of:",
        "options": [
            "cluster sampling.",
            "simple random sampling.",
            "stratified random sampling."
        ],
        "correctAnswer": 2,
        "explanation": "70. C is correct because, in stratified random sampling, the population is divided into \nsubpopulations (strata) based on one or more classification criteria. Simple random \nsamples are then drawn from each stratum in sizes proportional to the relative size \nof each stratum in the population."
    },
    {
        "id": "vikas-vohra-quantitative-methods-71",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "In hypothesis testing, which of the following best describes a Type II error?",
        "options": [
            "Rejecting a true null hypothesis",
            "Rejecting a false null hypothesis",
            "Failure to reject a false null hypothesis \n \nSolutions"
        ],
        "correctAnswer": 2,
        "explanation": "71. C is correct because, when we make a decision in a hypothesis test, we run the risk \nof making either a Type I or a Type II error. These are mutually exclusive errors: If \nwe mistakenly reject the null hypothesis, we can only be making a Type I error; if we \nmistakenly fail to reject the null, we can only be making a Type II error. \n\nPortfolio Management: Practice Pack \n\ncandidates for practice purpose."
    },
    {
        "id": "vikas-vohra-quantitative-methods-1",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "Which of the following statements about pension plans is most accurate?",
        "options": [
            "Defined benefit plans typically have a low risk tolerance.",
            "Defined contribution plans typically have a low risk tolerance.",
            "The sponsor of a defined benefit plan specifies the obligation owed to \nparticipants."
        ],
        "correctAnswer": 1,
        "explanation": "1. B is correct because a confidence interval for a parameter is calculated as: Point \nestimate ± Reliability factor × Standard error, where standard error is the standard \nerror of the sample statistic providing the point estimate. Thus, sampling error is not \npart of the calculation. Sampling error is the difference between the observed value \nof a statistic and the quantity it is intended to estimate. It is because of sampling \nerror that confidence intervals are used."
    },
    {
        "id": "vikas-vohra-quantitative-methods-2",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "The process of risk management is best described as the set of decisions that \nmaximizes a company's value while:",
        "options": [
            "minimizing the risk taken.",
            "bearing a tolerable level of risk.",
            "predicting the potential risk correctly."
        ],
        "correctAnswer": 1,
        "explanation": "2. B is correct because a forecasted value of the dependent variable, Yf, is determined \nusing the estimated intercept and slope, as well as the expected or forecasted \nindependent variable, Xf: Yf = b0 + b1Xf,\" where b0 and b1 are the estimated \nintercept and slope coefficients, respectively. Hence, Yf = 1.2% + 1.0 × 3.5% = 4.7%. \n \nNext, the prediction interval is Yf ± tcritical for α/2sf,\" where sf denotes the \nstandard error of the forecast. Hence, the prediction interval is given by: 4.7% ± \n1.4% × 2.032 ≈ (1.9%, 7.5%)."
    },
    {
        "id": "vikas-vohra-quantitative-methods-3",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "Which of the following is least consistent with effective risk governance?",
        "options": [
            "Taking an enterprise-wide view",
            "Defining the enterprise's risk tolerance",
            "Following a bottom-up process to direct risk management activities"
        ],
        "correctAnswer": 2,
        "explanation": "3. C is correct because a holding period return is the return earned from holding an \nasset for a single specified period of time. This return can be generalized and shown \nas a mathematical expression in which P is the price and I is the income: R = (P1 − P0 \n+ D1)/P0  Thus, R = ($107 – $100 + $7)/$100 = $14/$100 = 14%."
    },
    {
        "id": "vikas-vohra-quantitative-methods-4",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "With regard to an investment policy statement, which of the following statements \nabout return objectives is most accurate?",
        "options": [
            "A return objective cannot be a required rate of return.",
            "Return objectives must be set independent of risk objectives.",
            "When setting a relative return objective, a good benchmark should be investable."
        ],
        "correctAnswer": 2,
        "explanation": "4. C is correct because a nonparametric test would be less appropriate compared to \nother answers as in this case a parametric test can be used. We may want to test a \nhypothesis concerning the mean of a population but believe that neither t- nor z-\ndistributed tests are appropriate because the sample is small and may come from a \nmarkedly non-normally distributed population. In that case, we may use a \nnonparametric test. In our case, the data sample is large, thus a  parametric test can \nbe used instead."
    },
    {
        "id": "vikas-vohra-quantitative-methods-5",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "The correlation between the risk-free asset and the optimal risky portfolio is \nexpected to be:",
        "options": [
            "negative.",
            "zero.",
            "positive."
        ],
        "correctAnswer": 0,
        "explanation": "5. A is correct because for a Test of Mean Differences (Normally Distributed \nPopulations, Unknown Population Variances), when we have data consisting of paired \nobservations from samples generated by normally distributed populations with \nunknown variances, a t-test is based on t = (d − µd0)/sd, with n − 1 degrees of freedom, \nwhere n is the number of paired observations, d is the sample mean difference, and \nsd is the standard error of d."
    },
    {
        "id": "vikas-vohra-quantitative-methods-6",
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "LM - Quantitative Methods",
        "text": "An investor who can lend and borrow at the risk-free rate builds a portfolio using the \nrisk-free asset and the market portfolio. The risk-free rate is 3% and the expected \nmarket return is 15%. If the expected portfolio return is 18%, the investor's \nportfolio is:",
        "options": [
            "a lending portfolio.",
            "a leveraged portfolio.",
            "the optimal risky portfolio."
        ],
        "correctAnswer": 2,
        "explanation": "6. C is correct because a cryptocurrency, also known as a digital currency, operates as \nelectronic currency and allows near-real-time transactions between parties without \nthe need for an intermediary, such as a bank."
    },
    {
        "id": "vikas-vohra-equity-investments-8",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Which of the following statements about scenario analysis is most accurate?",
        "options": [
            "Scenario analysis provides a point estimate forecast",
            "Forecast scenarios can be compared to forecasts implied by current valuations",
            "Generic risk factors in scenario analysis are assumed to affect all companies in \nthe same way"
        ],
        "correctAnswer": 1,
        "explanation": "8. B is correct because investors compare these scenarios with other analysts’ (e.g., \nsell-side analysts) forecasts for a company, as well as forecasts implied by current \nvaluations, to make investment decisions."
    },
    {
        "id": "vikas-vohra-equity-investments-9",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Which financial statement forecasting approach is best suited for companies in highly \ncyclical industries?",
        "options": [
            "Historical results",
            "Management guidance",
            "Analyst's discretionary forecasts"
        ],
        "correctAnswer": 2,
        "explanation": "9. C is correct because analyst’s discretionary forecasts include those based on surveys, \nquantitative models, probability distributions, analogies to historical precedents that \ndiffer from comparable companies or industry averages, and other unobservable \ninputs. This approach is most common for companies in cyclical industries, companies \nthat have no or few comparables, those that do not provide management guidance, \nand/or those undergoing a fundamental change like a shift in the competitive or \nregulatory environment."
    },
    {
        "id": "vikas-vohra-equity-investments-10",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Downside and upside risk factors are most likely included in:",
        "options": [
            "an initial company research report only.",
            "a subsequent company research report only.",
            "both initial and subsequent research reports."
        ],
        "correctAnswer": 2,
        "explanation": "10. C is correct because downside and upside risk factors are part of the company \nresearch report element \"Risks\" which is not only part of the initial company research \nreport elements but also listed amongst the five elements for the subsequent \ncompany research report: 1. Front Matter, 2. Recommendation, 3. Analysis of New \nInformation, 4. Valuation and 5. Risks."
    },
    {
        "id": "vikas-vohra-equity-investments-11",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A natural resources company having access to cheap energy most likely will be able to \nsell its output:",
        "options": [
            "at market price.",
            "above market price.",
            "at a price unilaterally set by management."
        ],
        "correctAnswer": 0,
        "explanation": "11. A is correct because in the most competitive markets, where firms are selling nearly \nidentical products, firms are price takers—that is, price is dictated by the forces of \nsupply and demand—and all firms generally sell at the same price, i.e. the prevailing \nmarket price. Other attributes of highly competitive markets include little to no \nproduct differentiation, low barriers to firm entry, available substitutes, a lack of \ncustomer loyalty, and low switching costs for customers. Many markets fit this \ndescription, including retail, oil and gas and other natural resources."
    },
    {
        "id": "vikas-vohra-equity-investments-12",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "[Question is incorrect] An investor considers the following certificates of deposit \n(CDs) available for purchase at face value: \n \nIf each CD has the same maturity and default risk, the opportunity cost of investing \nin CD 1 is closest to:",
        "options": [
            "Debt issuances",
            "Share repurchases",
            "Positive net working capital"
        ],
        "correctAnswer": 0,
        "explanation": "12. A is correct because issuing debt will raise money for a company and so is a source of \ncapital, not a use."
    },
    {
        "id": "vikas-vohra-equity-investments-13",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Clearing instructions for an order most likely indicate:",
        "options": [
            "how to fill the order.",
            "when the order may be filled.",
            "how to arrange the settlement of the trade."
        ],
        "correctAnswer": 2,
        "explanation": "13. C is correct because clearing instructions indicate how to arrange the final \nsettlement of the trade."
    },
    {
        "id": "vikas-vohra-equity-investments-14",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Which of the following statements about forecasting selling, general and \nadministrative (SG&A) expenses is most accurate?",
        "options": [
            "General corporate costs are mostly variable costs",
            "Selling and distribution expenses can be modeled as a percentage of sales \n\nEquity Investments: Practice Pack \nFaculty: Vikas Vohra                                                                        Page 3 of 43",
            "Overall SG&A expenses have a more direct relationship with revenues than cost \nof goods sold"
        ],
        "correctAnswer": 1,
        "explanation": "14. B is correct because selling and distribution expenses often have a large variable \ncomponent and can be modeled as a percentage of sales."
    },
    {
        "id": "vikas-vohra-equity-investments-15",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Preference shares most likely rank above common shares with respect to:",
        "options": [
            "voting rights.",
            "sharing in the operating performance of the company.",
            "the distribution of the company’s net assets upon liquidation."
        ],
        "correctAnswer": 2,
        "explanation": "15. C is correct because preference shares (or preferred stock) rank above common \nshares with respect to the payment of dividends and the distribution of the \ncompany’s net assets upon liquidation."
    },
    {
        "id": "vikas-vohra-equity-investments-16",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A free-cash-flow-to-equity model is a(n):",
        "options": [
            "multiplier model.",
            "present value model.",
            "asset-based valuation model."
        ],
        "correctAnswer": 1,
        "explanation": "16. B is correct because present value models include free-cash-flow-to-equity models."
    },
    {
        "id": "vikas-vohra-equity-investments-17",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An analyst gathers the following information about an equal-weighted index composed \nof three securities: \n \nThe price return of the index is closest to:",
        "options": [
            "20%.",
            "27%.",
            "38%."
        ],
        "correctAnswer": 1,
        "explanation": "17. B is correct because 26.67% is the price return for an equal-weighted index. \n \nPrice return for security A is (End of Period Price / Beginning of Period Price) –1 = \n18/20 – 1 = – 0.1 = – 10%. \n \nPrice return for security B is (End of Period Price / Beginning of Period Price) –1 = \n15/10 – 1 = 0.5 = 50% \n \nPrice return for security C is (End of Period Price / Beginning of Period Price) –1 = \n21/15 – 1 = 0.4 = 40% \n \nEqual weighting = average of the security's returns = (– 10% + 50% + 40%)/3 = \n26.667% ≈ 26.67%."
    },
    {
        "id": "vikas-vohra-equity-investments-18",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A limit order book (in € per share) has the following order prices: \n \nA sell order is behind the market at a price of:",
        "options": [
            "€47.70.",
            "€48.00.",
            "€48.20."
        ],
        "correctAnswer": 2,
        "explanation": "18. C is correct because a buy order placed below the best bid is behind the market. \nSimilarly, a sell order that is above the best offer (ask) is said to be behind the \nmarket. So any sell order higher than 48.00 is behind the market."
    },
    {
        "id": "vikas-vohra-equity-investments-19",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "All else being equal, the preference share with the lowest certainty of future cash \nflows and the greatest potential risk for investors is most likely:",
        "options": [
            "putable with non-cumulative dividends.",
            "non-callable with cumulative dividends.",
            "callable with non-cumulative dividends."
        ],
        "correctAnswer": 2,
        "explanation": "19. C is correct because a callable preference share with non-cumulative dividends has \ngreater uncertainty of cash flows than a putable preference share with non -\ncumulative dividends. From an investor's point of view, putable common or preference \nshares are less risky than their callable or non-callable counterparts.  The callable \npreference share with non-cumulative dividends has greater uncertainty of cash \nflows than the non-callable preference share with cumulative dividends on the basis \nof both its callable feature, as previously described, and its non-cumulative feature. \nCumulative preference shares have lower risk than non-cumulative preference shares."
    },
    {
        "id": "vikas-vohra-equity-investments-20",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "The index weighting method that underrepresents securities that constitute the \nlargest fraction of the target market value is most likely the:",
        "options": [
            "price-weighting method. \n\nEquity Investments: Practice Pack \nFaculty: Vikas Vohra                                                                        Page 4 of 43",
            "equal-weighting method.",
            "market-capitalization-weighting method."
        ],
        "correctAnswer": 1,
        "explanation": "20. B is correct because a disadvantage of an equal-weighted index is that securities that \nconstitute the largest fraction of the target market value are underrepresented, and \nsecurities that constitute a small fraction of the target market value are \noverrepresented."
    },
    {
        "id": "vikas-vohra-equity-investments-21",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An analyst gathers the following information about a company: \n \nIf the investor's required rate of return is 10%, the company's ROE is closest to:",
        "options": [
            "6.9%.",
            "8.0%.",
            "9.7%."
        ],
        "correctAnswer": 0,
        "explanation": "21. A is correct because P0/E1 = p/(r – g), where g = b × ROE \n                                                                         \n \n \nRestating the equation we arrive at: P0/E1 = p/(r – (b × ROE)) where: \np = dividend payout ratio = (1 – retention rate) = (1 – b) \nr = required rate of return on the stock \ng = dividend growth rate = retention rate × ROE \nTherefore, P0/E1 = p/(r – (b × ROE)) is rearranged as: P0/E1 = (1 – b)/(r – (b × ROE)) \nRearranging this equation we arrive at: ROE = (((1 – b)/(P0/E1)) – r)/–b \nROE = (((1 – 45%)/8) – 10%)/–45% ≈ 6.9%."
    },
    {
        "id": "vikas-vohra-equity-investments-22",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Which of the following is least likely to directly affect a company's book value?",
        "options": [
            "Changes in the company's net income",
            "Purchases by the company of its own shares",
            "Investor estimates of the company's future cash flows"
        ],
        "correctAnswer": 2,
        "explanation": "22. C is correct because a company's book value is not directly affected by investor \nestimates."
    },
    {
        "id": "vikas-vohra-equity-investments-23",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "With respect to behavioral biases, when investors tend to be slow to react to new \ninformation and continue to maintain their prior views, this is best described as:",
        "options": [
            "conservatism.",
            "herding behavior.",
            "representativeness."
        ],
        "correctAnswer": 0,
        "explanation": "23. A is correct because conservative investors tend to be slow to react to new \ninformation and continue to maintain their prior views or forecasts."
    },
    {
        "id": "vikas-vohra-equity-investments-24",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "If a stock index's constituents make no distributions to their shareholders, the total \nreturn of the index is:",
        "options": [
            "less than its price return.",
            "equal to its price return.",
            "greater than its price return."
        ],
        "correctAnswer": 1,
        "explanation": "24. B is correct because a total return index reflects not only the prices of the \nconstituent securities but also the reinvestment of all income received since \ninception. As the constituents securities received no income (e.g. dividends or other \ndistributions), the value of the price version equals the value of the total return \nversion of the index."
    },
    {
        "id": "vikas-vohra-equity-investments-25",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A trader gathers the following limit order information about a stock: \n \nIf the trader submits a fill or kill buy order for 20 shares at a limit price of $76.00, \nthe trader's average price per share for this trade will be closest to:",
        "options": [
            "$75.80.",
            "$75.97.",
            "$76.00."
        ],
        "correctAnswer": 1,
        "explanation": "25. B is correct because a limit order conveys almost the same instruction: Obtain the \nbest price immediately available, but in no event accept a price higher than a specified \nlimit price ($76.00) when buying. Furthermore, immediate or cancel orders (IOC) are \ngood only upon receipt by the broker or exchange. If they cannot be filled in part or \nin whole, they cancel immediately. In some markets these orders are also known as \nfill or kill orders. That is, 15 units of the stock would trade or execute immediately \nat: 5 units at $75.90 and 10 units at $76.00. The average trade price per unit = ((5 × \n$75.90) + (10 × $76.00)) / 15 ≈ $75.97."
    },
    {
        "id": "vikas-vohra-equity-investments-26",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An instruction that indicates when an order may be filled is most likely a(n):",
        "options": [
            "validity instruction.",
            "clearing instruction.",
            "execution instruction."
        ],
        "correctAnswer": 0,
        "explanation": "26. A is correct because validity instructions indicate when the order may be filled."
    },
    {
        "id": "vikas-vohra-equity-investments-27",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A stock dividend:",
        "options": [
            "is relevant for valuation of a company.",
            "involves a reduction in the number of shares outstanding.",
            "does not affect the shareholders' proportional ownership in the company."
        ],
        "correctAnswer": 2,
        "explanation": "27. C is correct because a stock dividend divides the “pie” (the market value of \nshareholders’ equity) into smaller pieces without affecting the value of the pie or any \nshareholder’s proportional ownership in the company."
    },
    {
        "id": "vikas-vohra-equity-investments-28",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Common shares that are tradeable on different stock exchanges in different \ncurrencies are best described as:",
        "options": [
            "global registered shares.",
            "global depository receipts.",
            "a basket of listed depository receipts."
        ],
        "correctAnswer": 0,
        "explanation": "28. A is correct because a global registered share (GRS) is a common share that is traded \non different stock exchanges around the world in different currencies."
    },
    {
        "id": "vikas-vohra-equity-investments-29",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A sell order that instructs the broker to obtain the best price immediately available \nwithout specifying a minimum price is a:",
        "options": [
            "stop order.",
            "limit order.",
            "market order."
        ],
        "correctAnswer": 2,
        "explanation": "29. C is correct because a market order instructs the broker or exchange to obtain the \nbest price immediately available when filling the order."
    },
    {
        "id": "vikas-vohra-equity-investments-30",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "All else being equal, a reverse stock split results in:",
        "options": [
            "a decrease in the number of shares and an increase in the share price.",
            "an increase in the number of shares and a decrease in the share price.",
            "an increase in the number of shares and an increase in the share price."
        ],
        "correctAnswer": 0,
        "explanation": "30. A is correct because a reverse stock split involves a reduction in the number of shares \noutstanding with a corresponding increase in share price."
    },
    {
        "id": "vikas-vohra-equity-investments-31",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "All else being equal, which of the following has the same effect on shareholders' \nwealth as a cash dividend?",
        "options": [
            "A stock split",
            "A stock dividend",
            "A share repurchase"
        ],
        "correctAnswer": 2,
        "explanation": "31. C is correct because a share repurchase is viewed as equivalent to the payment of \ncash dividends of equal value in terms of the effect on shareholders’ wealth, all other \nthings being equal."
    },
    {
        "id": "vikas-vohra-equity-investments-32",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Sponsored depository receipts most likely differ from unsponsored ones in terms of \nwhether:",
        "options": [
            "investors have voting rights.",
            "they are traded on exchanges.",
            "their prices are affected by exchange rate movements."
        ],
        "correctAnswer": 0,
        "explanation": "32. A is correct because a sponsored DR is when the foreign company whose shares are \nheld by the depository has a direct involvement in the issuance of the receipts. \nInvestors in sponsored DRs have the same rights as the direct owners of the common \nshares (e.g., the right to vote and the right to receive dividends). In contrast, with \nan unsponsored DR, the underlying foreign company has no involvement with the \nissuance of the receipts. Instead, the depository purchases the foreign company’s \nshares in its domestic market and then issues the receipts through brokerage firms \nin the depository’s local market. In this case, the depository bank, not the investors \nin the DR, retains the voting rights."
    },
    {
        "id": "vikas-vohra-equity-investments-33",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "All else being equal, which of the following are equivalent to stock dividends in terms \nof the economic effect on the company and shareholders?",
        "options": [
            "Stock splits",
            "Cash dividends",
            "Share repurchases"
        ],
        "correctAnswer": 0,
        "explanation": "33. A is correct because a stock dividend divides the “pie” (the market value of \nshareholders’ equity) into smaller pieces without affecting the value of the pie or any \nshareholder’s proportional ownership in the company. Thus, stock dividends are not \nrelevant for valuation. Stock splits and reverse stock splits are similar to stock \ndividends in that they have no economic effect on the company or shareholders."
    },
    {
        "id": "vikas-vohra-equity-investments-34",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Asset-based valuation most likely uses estimates of the company's:",
        "options": [
            "assets only.",
            "assets and liabilities only.",
            "assets, liabilities and projected cash flow."
        ],
        "correctAnswer": 1,
        "explanation": "34. B is correct because an asset-based valuation of a company uses estimates of the \nmarket or fair value of the company’s assets and liabilities."
    },
    {
        "id": "vikas-vohra-equity-investments-35",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "The dividend discount model assumes that dividends are paid:",
        "options": [
            "quarterly.",
            "half yearly.",
            "at the end of each year."
        ],
        "correctAnswer": 2,
        "explanation": "35. C is correct because according to the dividend discount model, each year's dividend \nDt is the expected dividend in year t, assumed to be paid at the end of the year."
    },
    {
        "id": "vikas-vohra-equity-investments-36",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An analyst gathers the following information about a company and its common stock: \n \nUsing the Gordon growth model, the company's dividend payout ratio is closest to:",
        "options": [
            "8%.",
            "33%.",
            "64%."
        ],
        "correctAnswer": 2,
        "explanation": "36. C is correct because according to the Gordon growth model equations"
    },
    {
        "id": "vikas-vohra-equity-investments-37",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Asset-based valuation models are most appropriate for companies with a high \nproportion of:",
        "options": [
            "illiquid assets.",
            "current assets.",
            "intangible assets."
        ],
        "correctAnswer": 1,
        "explanation": "37. B is correct because asset-based valuations work well for companies that do have a \nhigh proportion of current assets and current liabilities."
    },
    {
        "id": "vikas-vohra-equity-investments-38",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Both equity and fixed income indexes can be categorized according to the:",
        "options": [
            "currency of payments.",
            "issuer's economic sector.",
            "degree of inflation protection."
        ],
        "correctAnswer": 1,
        "explanation": "38. B is correct because both equity and fixed income indexes can be constructed \naccording to sector. Similar to equities, fixed-income securities can be categorized \naccording to the issuer’s economic sector, the issuer’s geographic region, or the \neconomic development of the issuer’s geographic region."
    },
    {
        "id": "vikas-vohra-equity-investments-39",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Trading by arbitrageurs most likely:",
        "options": [
            "reduces liquidity.",
            "increases pricing discrepancies.",
            "contributes to market efficiency."
        ],
        "correctAnswer": 2,
        "explanation": "39. C is correct because arbitrageurs are traders who engage in such trades to benefit \nfrom pricing discrepancies (inefficiencies) in markets. Such trading activity \ncontributes to market efficiency. The presence of these arbitrageurs helps pricing \ndiscrepancies disappear quickly."
    },
    {
        "id": "vikas-vohra-equity-investments-40",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A feature of an efficient market is that:",
        "options": [
            "the market reflects all past and present information.",
            "asset prices react to information that is fully anticipated.",
            "an investor can earn consistent, superior, risk-adjusted returns."
        ],
        "correctAnswer": 0,
        "explanation": "40. A is correct because an efficient market is thus a market in which asset prices \nreflect all past and present information."
    },
    {
        "id": "vikas-vohra-equity-investments-41",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Decreased market efficiency is most likely associated with an increase in:",
        "options": [
            "transaction costs.",
            "financial disclosure. \n\nEquity Investments: Practice Pack \nFaculty: Vikas Vohra                                                                        Page 7 of 43",
            "the number of market participants."
        ],
        "correctAnswer": 0,
        "explanation": "41. A is correct because an increase in transaction costs will increase the price \ndiscrepancy between market price and efficient price. Higher transaction costs make \nit more expensive for traders to exploit market inefficiencies, thereby decreasing \nmarket efficiency. Inefficiencies may also be unexploitable if the amount of the \ntransaction cost offsets the amount of the price discrepancy. A price discrepancy \nmust be sufficiently large to leave the investor with a profit (adjusted for risk) after \ntaking account of the transaction costs and information-acquisition costs to reach \nthe conclusion that the discrepancy may represent a market inefficiency."
    },
    {
        "id": "vikas-vohra-equity-investments-42",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Which of the following is most likely a demographic influence on industry growth?",
        "options": [
            "Lifestyle",
            "Distribution of age",
            "Spending behavior"
        ],
        "correctAnswer": 1,
        "explanation": "42. B is correct because changes in distribution of age happen due to demographic \ninfluence. Changes in population size, in the distributions of age and gender, and in \nother demographic characteristics may have significant effects on economic growth \nand on the amounts and types of goods and services consumed."
    },
    {
        "id": "vikas-vohra-equity-investments-43",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Fixed-income indexes most likely:",
        "options": [
            "are more easily replicated than equity indexes.",
            "require the provider to estimate the prices of some constituent securities.",
            "are created from a smaller universe of possible constituent securities than the \nuniverse of equity securities."
        ],
        "correctAnswer": 1,
        "explanation": "43. B is correct because compared to equity indexes, fixed-income index providers must \ncontact dealers to obtain current prices on constituent securities to update the index \nor they must estimate the prices of constituent securities using the prices of traded \nfixed-income securities with similar characteristics."
    },
    {
        "id": "vikas-vohra-equity-investments-44",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "As time passes after inception, the value of the price version of an index is:",
        "options": [
            "less than the value of the total return version.",
            "equal to the value of the total return version.",
            "greater than the value of the total return version."
        ],
        "correctAnswer": 0,
        "explanation": "44. A is correct because at inception, the values of the price and total return versions \nof an index are equal. As time passes, however, the value of the total return index \nwill exceed the value of the price return index."
    },
    {
        "id": "vikas-vohra-equity-investments-45",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "With respect to behavioral finance, which of the following is least likely a behavioral \nbias used to explain pricing anomalies?",
        "options": [
            "Risk aversion",
            "Loss aversion",
            "Overconfidence"
        ],
        "correctAnswer": 0,
        "explanation": "45. A is correct because behavioral finance allows for the possibility that the dislike for \nrisk is not symmetrical, in contrast to the more general models where researchers \nassume that investors do not like risk (risk aversion), whether the risk is that returns \nare higher than expected or lower than expected."
    },
    {
        "id": "vikas-vohra-equity-investments-46",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Companies issue equity securities for which of the following purpose(s)?",
        "options": [
            "Making acquisitions only",
            "Ensuring that debt covenants are met only",
            "Both making acquisitions and ensuring that debt covenants are met"
        ],
        "correctAnswer": 2,
        "explanation": "46. C is correct because companies issue equity to both make acquisitions and ensure that \ndebt covenants are met."
    },
    {
        "id": "vikas-vohra-equity-investments-47",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "The voting method that allows shareholders to cast all their votes for a single \ncandidate is best described as:",
        "options": [
            "proxy voting.",
            "statutory voting.",
            "cumulative voting."
        ],
        "correctAnswer": 2,
        "explanation": "47. C is correct because cumulative voting allows shareholders to direct their total voting \nrights to specific candidates, as opposed to [statutory voting] having to allocate their \nvoting rights evenly among all candidates."
    },
    {
        "id": "vikas-vohra-equity-investments-48",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Convertible preference shares most likely:",
        "options": [
            "are riskier than the underlying common shares for investors.",
            "allow investors to benefit from a rise in the price of the common shares.",
            "are issued primarily by companies of lower risk and used as a financing option."
        ],
        "correctAnswer": 1,
        "explanation": "48. B is correct because convertible preference shares allow investors to benefit from a \nrise in the price of the common shares through the conversion option."
    },
    {
        "id": "vikas-vohra-equity-investments-49",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Industries whose revenues and profits are least affected by fluctuations in the \noverall economy are most likely:",
        "options": [
            "growth industries.",
            "cyclical industries.",
            "defensive industries."
        ],
        "correctAnswer": 2,
        "explanation": "49. C is correct because defensive industries and companies are those whose revenues \nand profits are least affected by fluctuations in overall economic activity. These \nindustries/companies tend to produce staple consumer goods (e.g., bread), to provide \nbasic services (grocery stores, drug stores, fast food outlets)."
    },
    {
        "id": "vikas-vohra-equity-investments-50",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "If it is difficult to find a buyer or a seller for an asset, the asset most likely trades \non:",
        "options": [
            "brokered markets.",
            "order-driven markets.",
            "quote-driven markets."
        ],
        "correctAnswer": 0,
        "explanation": "50. A is correct because brokered markets are markets in which brokers arrange trades \namong their clients. Brokers organize markets for instruments for which finding a \nbuyer or seller willing to trade is difficult because the instruments are unique."
    },
    {
        "id": "vikas-vohra-equity-investments-51",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A disadvantage of using price multiples to value stocks is that:",
        "options": [
            "multiples are not easily calculated.",
            "cross-sectional comparisons are not possible.",
            "accounting methods produce different results that are not easily comparable \nacross companies."
        ],
        "correctAnswer": 2,
        "explanation": "51. C is correct because differences in reporting rules among different markets and in \nchosen accounting methods can result in revenues, earnings, book values, and cash \nflows that are not easily comparable."
    },
    {
        "id": "vikas-vohra-equity-investments-52",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "All else being equal, an increase in which of the following most likely increases a \ncompany's enterprise value?",
        "options": [
            "Book value of debt",
            "Market value of investments",
            "Market value of preferred stock"
        ],
        "correctAnswer": 2,
        "explanation": "52. C is correct because enterprise value is most frequently determined as market \ncapitalization plus market value of preferred stock plus market value of debt minus \ncash and investments (cash equivalents and short-term investments). Therefore, \nenterprise value increases with an increase in the market value of preferred stock."
    },
    {
        "id": "vikas-vohra-equity-investments-53",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "The Global Industry Classification Standard (GICS) classifies industries based on:",
        "options": [
            "statistical similarities.",
            "business-cycle sensitivities.",
            "products and/or services supplied."
        ],
        "correctAnswer": 2,
        "explanation": "53. C is correct because examples of classification systems based on products and/or \nservices include the commercial classification systems ... namely, the Global Industry \nClassification Standard (GICS)."
    },
    {
        "id": "vikas-vohra-equity-investments-54",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Which of the following indexes is composed of futures contracts?",
        "options": [
            "Commodity index",
            "Hedge fund index",
            "Broad equity market index"
        ],
        "correctAnswer": 0,
        "explanation": "54. A is correct because commodity indexes consist of futures contracts on one or more \ncommodities."
    },
    {
        "id": "vikas-vohra-equity-investments-55",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "External factors affecting an industry's growth most likely include:",
        "options": [
            "cost structures.",
            "economies of scale.",
            "technological influences."
        ],
        "correctAnswer": 2,
        "explanation": "55. C is correct because external factors affecting an industry's growth include \nmacroeconomic, technological, demographic, governmental, and social influences."
    },
    {
        "id": "vikas-vohra-equity-investments-56",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Which of the following is most likely used to raise funds for a capital project?",
        "options": [
            "Equity issuance only",
            "A stock dividend only",
            "Both equity issuance and a stock dividend"
        ],
        "correctAnswer": 0,
        "explanation": "56. A is correct because companies often raise money for projects by selling (issuing) \nownership interests (e.g., corporate common stock or partnership interests). \nAlthough these equity instruments legally represent ownership in companies rather \nthan loans to the companies, selling equity to raise capital is simply another mechanism \nfor moving money from the future to the present."
    },
    {
        "id": "vikas-vohra-equity-investments-57",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "In dividend payment chronology, the ex-dividend date most likely comes after the:",
        "options": [
            "record date.",
            "payment date.",
            "declaration date."
        ],
        "correctAnswer": 2,
        "explanation": "57. C is correct because first is the declaration date, the day that the company issues a \nstatement declaring a specific dividend. Next comes the ex-dividend date (or ex- \ndate), the first date that a share trades without (i.e., “ex”) the dividend."
    },
    {
        "id": "vikas-vohra-equity-investments-58",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An analyst gathers the following information about an industry and three comparable \ncompanies within the industry: \n \nBased only on this information, the most overvalued company is:",
        "options": [
            "Company 1.",
            "Company 2.",
            "Company 3."
        ],
        "correctAnswer": 0,
        "explanation": "58. A is correct because Company 1's P/S and P/B are both the highest compared to \nthose of its two peers and the industry average. All else being equal, high P/S and \nP/B multiples point to relatively expensive valuations. Therefore, in the absence of \nconflict between the indications given by P/S and P/B (as both measures are the \n                                                                         \n \nhighest for the same company), the company most likely to be overvalued is Company"
    },
    {
        "id": "vikas-vohra-equity-investments-59",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Which of the following industries or sectors is most likely classified as cyclical?",
        "options": [
            "Utilities",
            "Industrials",
            "Health care"
        ],
        "correctAnswer": 1,
        "explanation": "59. B is correct because examples of cyclical industries and broader sectors are autos, \nhousing, basic materials, industrials, and technology."
    },
    {
        "id": "vikas-vohra-equity-investments-60",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An increase in shares held by controlling shareholders most likely impacts the \nconstituent weightings of a(n):",
        "options": [
            "price-weighted index.",
            "equal-weighted index.",
            "float-adjusted market-capitalization-weighted index."
        ],
        "correctAnswer": 2,
        "explanation": "60. C is correct because float-adjusted market-capitalization-weighted indexes reflect \nthe shares available for public trading [excluding the ones held by controlling \nshareholders] by multiplying the market price per share by the number of shares \navailable to the investing public (i.e., the float-adjusted market capitalization), which \nmeans constituent weights are impacted."
    },
    {
        "id": "vikas-vohra-equity-investments-61",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Free-cash-flow-to-equity is equal to cash flow from operations:",
        "options": [
            "less fixed capital investment less net borrowing.",
            "less fixed capital investment plus net borrowing.",
            "plus fixed capital investment less net borrowing."
        ],
        "correctAnswer": 1,
        "explanation": "61. B is correct because free-cash-flow-to-equity (FCFE) can be expressed as FCFE = \nCFO – FCInv + Net borrowing where CFO is cash flow from operations and FCInv is \nfixed capital investment."
    },
    {
        "id": "vikas-vohra-equity-investments-62",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Over time, which of the following indexes most likely has portfolio weights that shift \naway from securities that have increased in relative value and toward securities that \nhave fallen in relative value? A:",
        "options": [
            "price-weighted index",
            "fundamentally weighted index",
            "market-capitalization-weighted index"
        ],
        "correctAnswer": 1,
        "explanation": "62. B is correct because fundamentally weighted indexes generally will have a contrarian \n'effect' in that the portfolio weights will shift away from securities that have \nincreased in relative value and toward securities that have fallen in relative value \nwhenever the portfolio is rebalanced."
    },
    {
        "id": "vikas-vohra-equity-investments-63",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An analyst gathers the following data for three companies in the same industry (in \nmillions): \n \nBased on enterprise value multiples, which of the three companies is likely the most \nundervalued?",
        "options": [
            "Company 1",
            "Company 2",
            "Company 3"
        ],
        "correctAnswer": 0,
        "explanation": "63. A is correct because EV is often viewed as the cost of a takeover and EBITDA is a \nproxy for operating cash flow. Companies with relatively low EV/EBITDA multiples \nare likely to be undervalued. Company 1 has the lowest EV/EBITDA multiple among \nthe three. \n \nCompany 1: EV/EBITDA = 100,000,000 / 8,000,000 = 12.5; \nCompany 2: EV/EBITDA = 150,000,000 / 10,000,000 = 15.0; \nCompany 3: EV/EBITDA = 200,000,000 / 15,000,000 = 13.3."
    },
    {
        "id": "vikas-vohra-equity-investments-64",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Which of the following statements best describes hedge fund indexes?",
        "options": [
            "Index constituents are regulated entities",
            "Potential survivorship bias is reduced by voluntary performance reporting",
            "There may be little overlap in index constituents between different indexes \noffered by different index providers"
        ],
        "correctAnswer": 2,
        "explanation": "64. C is correct because frequently, a hedge fund reports its performance to only one \ndatabase. The result is little overlap of funds covered by the different indices. With \nlittle overlap between their constituents, different global hedge funds indices may \nreflect very different performance for the hedge fund industry over the same period \nof time."
    },
    {
        "id": "vikas-vohra-equity-investments-65",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A market where security prices fully reflect all publicly known and available \ninformation, but not private information, is:",
        "options": [
            "weak-form efficient.",
            "semi-strong-form efficient.",
            "strong-form efficient."
        ],
        "correctAnswer": 1,
        "explanation": "65. B is correct because in a semi-strong-form efficient market, prices reflect all \npublicly known and available information."
    },
    {
        "id": "vikas-vohra-equity-investments-66",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "In a highly efficient market, a passive investment strategy most likely has:",
        "options": [
            "higher transaction costs than an active strategy.",
            "lower information-seeking costs than an active strategy.",
            "higher risk-adjusted returns before all expenses than an active strategy."
        ],
        "correctAnswer": 1,
        "explanation": "66. B is correct because in a highly efficient market, a passive investment strategy (i.e., \nbuying and holding a broad market portfolio) that does not seek superior risk -\nadjusted returns is preferred to an active investment strategy because of lower \ncosts (for example, transaction and information-seeking costs)."
    },
    {
        "id": "vikas-vohra-equity-investments-67",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Fundamental analysis most likely:",
        "options": [
            "uses stock price patterns to trade.",
            "is an input for passive portfolio management.",
            "helps participants understand the value implications of information."
        ],
        "correctAnswer": 2,
        "explanation": "67. C is correct because fundamental analysis is necessary in a well-functioning market \nbecause this analysis helps the market participants understand the value implications \nof information."
    },
    {
        "id": "vikas-vohra-equity-investments-68",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Which of the following is considered an external influence on industry growth?",
        "options": [
            "Social trends",
            "Barriers to entry",
            "Industry concentration"
        ],
        "correctAnswer": 0,
        "explanation": "68. A is correct because external factors affecting an industry’s growth include \nmacroeconomic, technological, demographic, governmental, and social influences."
    },
    {
        "id": "vikas-vohra-equity-investments-69",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "In a weak-form efficient market, which of the following information is reflected in \nsecurity prices?",
        "options": [
            "Historical prices only",
            "Historical prices and historical trading volumes only",
            "Historical prices, historical trading volumes, and current earnings"
        ],
        "correctAnswer": 1,
        "explanation": "69. B is correct because in the weak-form efficient market hypothesis, security prices \nfully reflect all past market data, which refers to all historical price and trading \nvolume information."
    },
    {
        "id": "vikas-vohra-equity-investments-70",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Security market indices most likely serve as proxies for:",
        "options": [
            "nonsystematic risk.",
            "asset classes in asset allocation models.",
            "the fair value of assets in asset-based valuation models."
        ],
        "correctAnswer": 1,
        "explanation": "70. B is correct because indices play a critical role as proxies for asset classes in asset \nallocation models."
    },
    {
        "id": "vikas-vohra-equity-investments-71",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "When constructing an equity index, each company's weight in the index is dependent \non its number of shares outstanding if the index is:",
        "options": [
            "price weighted.",
            "equal weighted.",
            "market-capitilization weighted."
        ],
        "correctAnswer": 2,
        "explanation": "71. C is correct because in market-capitalization weighting, or value weighting, the weight \non each constituent security is determined by dividing its market capitalization by \nthe total market capitalization (the sum of the market capitalization) of all the \nsecurities in the index. Market capitalization or value is calculated by multiplying the \nnumber of shares outstanding by the market price per share."
    },
    {
        "id": "vikas-vohra-equity-investments-72",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "All else being equal, which of the following preference shares pays the lowest \ndividend?",
        "options": [
            "Putable",
            "Callable",
            "Non-callable"
        ],
        "correctAnswer": 0,
        "explanation": "72. A is correct because from an investor's point of view, putable common or preference \nshares are less risky than their callable or non-callable counterparts because they \ngive the investor the option to sell the shares to the issuer at a pre-determined price. \nAs a result, putable shares generally pay a lower dividend than non-putable shares."
    },
    {
        "id": "vikas-vohra-equity-investments-73",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "When an investment bank guarantees the sale of an entire issue at a negotiated \noffering price, this best describes a(n):",
        "options": [
            "rights offering.",
            "best effort offering.",
            "underwritten offering."
        ],
        "correctAnswer": 2,
        "explanation": "73. C is correct because in an underwritten offering —the most common type of \noffering—the investment bank guarantees the sale of the issue at an offering price \nthat it negotiates with the issuer."
    },
    {
        "id": "vikas-vohra-equity-investments-74",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Management is more likely to focus on short-term results instead of long-term \nearnings growth if a company raises equity through:",
        "options": [
            "venture capital.",
            "a leveraged buyout.",
            "an initial public offering."
        ],
        "correctAnswer": 2,
        "explanation": "74. C is Correct because in operating a publicly traded company, management often feels \npressured to focus on short-term results (e.g., meeting quarterly sales and earnings \ntargets from analysts biased toward near-term price performance) instead of \noperating the company to obtain long-term sustainable revenue and earnings growth."
    },
    {
        "id": "vikas-vohra-equity-investments-75",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An analyst gathers the following information about a security index: \n \nIf the index's value is 100 at the beginning of Period 1, the index's value at the end \nof Period 3 is closest to:",
        "options": [
            "103.",
            "105.",
            "106."
        ],
        "correctAnswer": 1,
        "explanation": "75. B is correct because it is the value of the index at the end of period 3 = Beginning \nvalue × (1+Period 1 return) × (1 + Period 2 return) × (1 + Period 3 return) = 100 × (100 \n+ 12%) × (100 – 8%) × (1 + 2%) ≈ 105.10, which is closest to 105."
    },
    {
        "id": "vikas-vohra-equity-investments-76",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "If the cost to fill trades increases, the market's informational efficiency most likely:",
        "options": [
            "decreases.",
            "remains the same.",
            "increases."
        ],
        "correctAnswer": 0,
        "explanation": "76. A is correct because how accurately prices reflect fundamental information depends \non the costs of obtaining fundamental information and on the liquidity available to \nwell-informed traders. If filling orders is very costly, informed trading may not be \nprofitable. In that case, information-motivated traders will not commit resources to \ncollect and analyze data and they will not trade. Without their research and their \nassociated trading, prices would be less informative."
    },
    {
        "id": "vikas-vohra-equity-investments-77",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An analyst gathers the following information about a company and the economy: \n \nThe best estimate of the company's dividend growth rate is:",
        "options": [
            "5.8%.",
            "6.7%. \n\nEquity Investments: Practice Pack \nFaculty: Vikas Vohra                                                                        Page 12 of 43",
            "7.4%."
        ],
        "correctAnswer": 1,
        "explanation": "77. B is correct because justified forward P/E = p / (r – g), where p = payout ratio = (1 – \nretention rate) and r = required rate of return = nominal risk -free rate + risk \npremium. \n22 = (1 – 0.60) / ((0.025 + 0.06) – g). \n22 = 0.40 / (0.085 – g) and g = 0.0668 ≈ 6.7%."
    },
    {
        "id": "vikas-vohra-equity-investments-78",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Financial intermediaries that help their clients arrange seasoned securities offerings \nare best known as:",
        "options": [
            "investment banks.",
            "commercial banks.",
            "multi-lateral trading facilities."
        ],
        "correctAnswer": 0,
        "explanation": "78. A is correct because investment banks provide advice to their mostly corporate \nclients and help them arrange transactions such as initial and seasoned securities \nofferings. Additionally, a seasoned security is a security that an issuer has already \nissued. If the issuer wants to sell additional units of a previously issued security, it \nmakes a seasoned offering (sometimes called a secondary offering)."
    },
    {
        "id": "vikas-vohra-equity-investments-79",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Over the long run, if a market is semi-strong-form efficient, which of the following \ninvestment strategies should result in the highest return to investors? A(n):",
        "options": [
            "passive investment strategy",
            "active trading strategy seeking to exploit price patterns",
            "active trading strategy seeking to exploit public information"
        ],
        "correctAnswer": 0,
        "explanation": "79. A is correct because if securities markets are weak-form and semi-strong-form \nefficient, the implication is that active trading, whether attempting to exploit price \npatterns or public information, is not likely to generate abnormal returns. In other \nwords, portfolio managers cannot beat the market on a consistent basis, so therefore, \npassive portfolio management should outperform active portfolio management."
    },
    {
        "id": "vikas-vohra-equity-investments-80",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A multi-market index is most appropriately used as a benchmark:",
        "options": [
            "for a single country ETF.",
            "for a small-capitalization growth stock manager.",
            "to calculate beta for the portfolio of a global stock manager."
        ],
        "correctAnswer": 2,
        "explanation": "80. C is correct because indexes also serve as market proxies when measuring risk-\nadjusted performance. The beta of an actively managed portfolio allows investors to \nform a passive alternative with the same level of systematic risk. In this case, multi-\nmarket indexes usually comprise indexes from different countries would serve as \nbenchmarks to calculate beta for the portfolios of global stock managers."
    },
    {
        "id": "vikas-vohra-equity-investments-82",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An investor gathers the following information about a company and its common stock: \n \nIf the required rate of return is 10%, using the Gordon growth model, the intrinsic \nvalue per share of the stock is closest to:",
        "options": [
            "$14.56.",
            "$19.23.",
            "$20.15."
        ],
        "correctAnswer": 2,
        "explanation": "82. C is correct because intrinsic value = V0 = D1/(r – g). Therefore, V0 = $1.048/(0.10 – \n0.048) = $1.048/0.052 ≈ $20.15, where: \n \ng = ROE × retention rate = 0.12 × (1 – 0.60) = 0.048; \n \nD1 = D0 × (1 + g) = $1.00 × 1.048 = $1.048."
    },
    {
        "id": "vikas-vohra-equity-investments-83",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "According to the efficient market hypothesis, if market prices reflect private \ninformation, the market is most likely:",
        "options": [
            "strong-form efficient.",
            "weak-form efficient only.",
            "semi-strong-form efficient, but not strong-form efficient."
        ],
        "correctAnswer": 0,
        "explanation": "83. A is correct because in the case of a strong-form efficient market, insiders would \nnot be able to earn abnormal returns from trading on the basis of private information. \nMarket prices reflect private information under strong form market efficiency."
    },
    {
        "id": "vikas-vohra-equity-investments-84",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "The Global Industry Classification Standard's broadest level of classification is a(n):",
        "options": [
            "sector.",
            "industry.",
            "industry group."
        ],
        "correctAnswer": 0,
        "explanation": "84. A is correct because in the GICS each company is assigned to a sub -industry \naccording to its principal business activity. Each sub-industry belongs to a particular \nindustry; each industry belongs to an industry group; and each group belongs to a \nsector. In June 2009, the GICS classification structure comprised four levels of \ndetail consisting of 154 sub- industries, 68 industries, 24 industry groups, and 10 \nsectors. Therefore, a sector is the broadest level of classification."
    },
    {
        "id": "vikas-vohra-equity-investments-85",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "In which of the following forms of market efficiency are investors able to \nconsistently outperform the market using fundamental analysis?",
        "options": [
            "Weak-form market efficiency",
            "Semi-strong-form market efficiency",
            "Strong-form market efficiency"
        ],
        "correctAnswer": 0,
        "explanation": "85. A is correct because in the weak form of market efficiency, market prices reflect \nall past market data; however, it does not incorporate all public information. \nTherefore, investors may use fundamental analysis to outperform the market."
    },
    {
        "id": "vikas-vohra-equity-investments-86",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Which of the following indexes are regularly rebalanced by the index provider?",
        "options": [
            "Price-weighted indexes only",
            "Equal-weighted indexes only",
            "Both price-weighted indexes and equal-weighted indexes"
        ],
        "correctAnswer": 1,
        "explanation": "86. B is correct because rebalancing is necessary because the weights of the constituent \nsecurities change as their market prices change. The weights of the securities in the \nequal-weighted index at the end of the period are no longer equal. Therefore equal-\nweighted indexes are regularly rebalanced."
    },
    {
        "id": "vikas-vohra-equity-investments-87",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Which of the following best describes an industry-level force in a thorough industry \nanalysis?",
        "options": [
            "Threat of new entrants",
            "Demographic influences",
            "Technological influences"
        ],
        "correctAnswer": 0,
        "explanation": "87. A is correct because industry-level forces driving industry competition include: \nthreat of new entrants, substitution threats, customer and supplier bargaining \nforces, the competitive forces in the industry (rivalry), life -cycle issues, and \nbusiness-cycle considerations."
    },
    {
        "id": "vikas-vohra-equity-investments-88",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An analyst gathers the following information about a price-weighted index composed \nof three stocks: \n \nThe index's price return is closest to:",
        "options": [
            "5.6%.",
            "11.1%.",
            "25.2%."
        ],
        "correctAnswer": 0,
        "explanation": "88. A is correct because it is the price return for the price-weighted index of the three \nstocks and is computed as follows: The price return of an index is expressed as"
    },
    {
        "id": "vikas-vohra-equity-investments-89",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Commercial industry classification systems are most likely updated:",
        "options": [
            "less frequently than government classification systems.",
            "as frequently as government classification systems.",
            "more frequently than government classification systems."
        ],
        "correctAnswer": 2,
        "explanation": "89. C is Correct because most government and commercial classification systems are \nreviewed and, if necessary, updated from time to time. Generally, commercial \nclassification systems are adjusted more frequently than government classification \nsystems, which may be updated only every five years or so."
    },
    {
        "id": "vikas-vohra-equity-investments-90",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A company's net income available to ordinary shareholders divided by the average \ntotal book value of equity is best described the:",
        "options": [
            "company's intrinsic value.",
            "company's return on equity.",
            "minimum required rate of return of investors in the company's equity."
        ],
        "correctAnswer": 1,
        "explanation": "90. B is correct because return on equity (ROE) is computed as net income available to \nordinary shareholders (i.e., after preferred dividends have been deducted) divided \nby the average total book value of equity (BVE)."
    },
    {
        "id": "vikas-vohra-equity-investments-91",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A world equity index is most likely considered a:",
        "options": [
            "style index.",
            "sector index.",
            "multi-market index."
        ],
        "correctAnswer": 2,
        "explanation": "91. C is correct because multi-market indexes usually comprise indexes from different \ncountries and regions and are designed to represent multiple security markets. Multi-\nmarket indexes may represent multiple national markets, geographic regions, \neconomic development groups, and, in some cases, the entire world. World indexes \nare of importance to investors who take a global approach to equity investing without \nany particular bias toward a particular country or region."
    },
    {
        "id": "vikas-vohra-equity-investments-92",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "All else being equal, which of the following preference share characteristics may \ncontain provisions that entitle shareholders to an additional distribution of the \ncompany's assets upon liquidation, above the par value?",
        "options": [
            "Callable",
            "Cumulative",
            "Participating"
        ],
        "correctAnswer": 2,
        "explanation": "92. C is correct because of the three characteristics, only the participating \ncharacteristic is most directly affected by liquidation of the company. Participating \npreference shares can also contain provisions that entitle shareholders to an \nadditional distribution of the company's assets upon liquidation, above the par (or \nface) value of the preference shares."
    },
    {
        "id": "vikas-vohra-equity-investments-93",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A three-stage dividend discount model is most appropriate for valuing a company that \nis:",
        "options": [
            "mature.",
            "transitioning to maturity.",
            "young and entering the growth phase."
        ],
        "correctAnswer": 2,
        "explanation": "93. C is correct because one can make the case that a three-stage DDM would be most \nappropriate for a fairly young company, one that is just entering the growth phase."
    },
    {
        "id": "vikas-vohra-equity-investments-94",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A company's management is most likely able to directly influence the company's:",
        "options": [
            "book value.",
            "market value.",
            "intrinsic value."
        ],
        "correctAnswer": 0,
        "explanation": "94. A is correct because management's decisions directly influence a company's net \nincome, they also directly influence its book value of equity."
    },
    {
        "id": "vikas-vohra-equity-investments-95",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "In contrast to the market value of an equity security, intrinsic value is most likely:",
        "options": [
            "not known with certainty.",
            "constant throughout the life of the security.",
            "determined by the intersection of supply and demand."
        ],
        "correctAnswer": 0,
        "explanation": "95. A is correct because market value is the price at which an asset can currently be \nbought or sold. Intrinsic value (sometimes called fundamental value) is, broadly \nspeaking, the value that would be placed on it by investors if they had a complete \nunderstanding of the asset's investment characteristics. Intrinsic value can be \nestimated but is not known for certain."
    },
    {
        "id": "vikas-vohra-equity-investments-96",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Short sellers are most likely exposed to:",
        "options": [
            "unlimited gains and limited losses.",
            "limited gains and unlimited losses.",
            "unlimited gains and unlimited losses."
        ],
        "correctAnswer": 1,
        "explanation": "96. B is correct because short sellers create short positions in securities by borrowing \nsecurities from security lenders who are long holders. The short sellers then sell the \nborrowed securities to other traders. The potential gains on a short position are \nlimited to no more than 100 percent whereas the potential losses are unbounded."
    },
    {
        "id": "vikas-vohra-equity-investments-97",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "In which markets are government bills most likely traded?",
        "options": [
            "Money markets",
            "Capital markets",
            "Alternative investment markets"
        ],
        "correctAnswer": 0,
        "explanation": "97. A is correct because money markets trade debt instruments maturing in one year or \nless. The most common such instruments are repurchase agreements, negotiable \ncertificates of deposit, government bills."
    },
    {
        "id": "vikas-vohra-equity-investments-98",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Enterprise value is most likely associated with:",
        "options": [
            "multiplier models.",
            "present value models.",
            "asset-based valuation models."
        ],
        "correctAnswer": 0,
        "explanation": "98. A is correct because multiplier models are based chiefly on share price multiples or \nenterprise value multiples. Enterprise value (EV) multiples have the form (Enterprise \nvalue)/(Value of a fundamental variable). Two possible choices for the denominator \nare earnings before interest, taxes, depreciation, and amortization (EBITDA) and \ntotal revenue."
    },
    {
        "id": "vikas-vohra-equity-investments-99",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A characteristic of real assets is that they most likely:",
        "options": [
            "trade in liquid markets.",
            "are inexpensive to manage.",
            "are unique assets with different attributes."
        ],
        "correctAnswer": 2,
        "explanation": "99. C is correct because real assets are unique properties in the sense that no two \nproperties are alike."
    },
    {
        "id": "vikas-vohra-equity-investments-100",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "If a European investor believes the US equity market will decline in the next three \nmonths, the transaction most likely to allow the investor to profit from this view is \nthe purchase of a:",
        "options": [
            "put option.",
            "call option.",
            "currency swap."
        ],
        "correctAnswer": 0,
        "explanation": "100. A is correct because option holders generally will exercise call options if the \nstrike price is below the market price of the underlying instrument, in which case, \nthey will be able to buy at a lower price than the market price. Similarly, they will \nexercise put options if the strike price is above the underlying instrument price so \nthat they will sell at a higher price than the market price. Therefore, if the investor \npurchases a put option and the US market declines, they will profit by buying at the \nlower market price and selling at the higher strike price."
    },
    {
        "id": "vikas-vohra-equity-investments-101",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "If the ability of clients to identify competent agents increases, the need for \nregulation most likely:",
        "options": [
            "decreases.",
            "remains the same.",
            "increases."
        ],
        "correctAnswer": 0,
        "explanation": "101. A is correct because regulation would not be necessary if customers could identify \ncompetent agents and effectively measure their performance. Therefore an increase \nin client ability to identify competent agents would reduce the need for regulation."
    },
    {
        "id": "vikas-vohra-equity-investments-102",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An analyst gathers the following book value information about a company and its \ncommon shares: \n \nThe analyst estimates the market value of net fixed assets to be 125% of book value \nand the market value of inventories to be 90% of book value. If the stock is currently \ntrading at €19.50 per share, the asset-based value per share is most likely:",
        "options": [
            "less than the market price.",
            "equal to the market price.",
            "greater than the market price."
        ],
        "correctAnswer": 1,
        "explanation": "102. B is correct because the asset-based per share value is: market value of assets \nless market value of liabilities = (Total assets + increase in net fixed assets – decrease \n                                                                         \n \nin inventories – total liabilities) / shares outstanding = [(150 + ((80 × 1.25) – 80) + ((20 \n× 0.90) – 20) – 90)] / 4 = (150 + 20 – 2 – 90) / 4 = 19.50. This is the same as the market \nprice."
    },
    {
        "id": "vikas-vohra-equity-investments-103",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "The book value of a company's equity is:",
        "options": [
            "the present value of its future cash flows.",
            "the difference between its total assets and total liabilities.",
            "its share price multiplied by the number of outstanding shares."
        ],
        "correctAnswer": 1,
        "explanation": "103. B is correct because the book value of a company’s equity is the difference \nbetween its total assets and total liabilities."
    },
    {
        "id": "vikas-vohra-equity-investments-104",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A company's ROE most likely decreases if shareholders' equity increases at:",
        "options": [
            "a lower rate than net income.",
            "the same rate as net income.",
            "a higher rate than net income."
        ],
        "correctAnswer": 2,
        "explanation": "104. C is Correct because ROE can increase if net income increases at a faster rate \nthan shareholders' equity or if net income decreases at a slower rate than \nshareholders' equity."
    },
    {
        "id": "vikas-vohra-equity-investments-105",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An equity index representing groups of securities classified on the basis of \nmarket capitalization is most likely a:",
        "options": [
            "style index.",
            "sector index.",
            "multi-market index."
        ],
        "correctAnswer": 0,
        "explanation": "105. A is correct because style indexes represent groups of securities classified \naccording to market capitalization, value, growth, or a combination of these \ncharacteristics. They are intended to reflect the investing styles of certain \ninvestors, such as the growth investor, value investor, or small-cap investor."
    },
    {
        "id": "vikas-vohra-equity-investments-106",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An analyst gathers the following information about common shares: \n \nIf the investor's required rate of return is 9%, the company's justified forward P/E \nis:",
        "options": [
            "less than the peer group's justified forward P/E.",
            "the same as the peer group's justified forward P/E.",
            "greater than the peer group's justified forward P/E."
        ],
        "correctAnswer": 1,
        "explanation": "106. B is correct because the company's justified forward P/E is the same as the peer \ngroup's justified forward P/E. The company's justified forward P/E = p / (r – g) = \n0.40 / (0.09 – 0.05) = 10.0. The peer group's justified forward P/E = 0.50 / (0.09 – \n0.04) = 10.0."
    },
    {
        "id": "vikas-vohra-equity-investments-107",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An analyst gathers the following information about a company's shares: \n \nAll else being equal, at the beginning of trading on 20 August, the company's shares \nwill most likely trade at:",
        "options": [
            "$28.50.",
            "$29.00.",
            "$29.50."
        ],
        "correctAnswer": 0,
        "explanation": "107. A is correct because the ex-dividend date (or ex-date) is the first date that a \nshare trades without (i.e., 'ex') the dividend. Because buyers of a company's shares \non the ex-dividend date are no longer eligible to receive the upcoming dividend, all \nelse being equal, on that day the company's share price immediately decreases by the \namount of the foregone dividend. If the share trades at $29.00 on 19 August (the \nday before ex-date) and the upcoming dividend is $0.50, then all else being equal, the \nshares would trade at $28.50 ($29.00 - $0.50) on the ex-date."
    },
    {
        "id": "vikas-vohra-equity-investments-108",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An analyst gathers the following information about a company's dividend payment \nchronology: \n \nThe last date an investor can purchase the company's stock and be entitled to receive \nthe dividend is most likely:",
        "options": [
            "1 August.",
            "2 August.",
            "4 August."
        ],
        "correctAnswer": 0,
        "explanation": "108. A is correct because the ex-dividend date (or ex-date) is the first date that a \nshare trades without (i.e., 'ex') the dividend. Thus, an investor will be able to receive \nthe company's dividend if he purchases shares no later than on 1 August, one business \nday before ex-date of 2 August."
    },
    {
        "id": "vikas-vohra-equity-investments-109",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "The January effect is an example of:",
        "options": [
            "loss aversion.",
            "an earnings surprise.",
            "a market pricing anomaly."
        ],
        "correctAnswer": 2,
        "explanation": "109. C is correct because the January effect, has been observed in most equity \nmarkets around the world. This anomaly is also known as the \"turn -of-the-year\" \neffect. The January effect is a time series anomaly and is an observed pricing \nanomaly."
    },
    {
        "id": "vikas-vohra-equity-investments-110",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An investor gathers the following data regarding three stocks: \n \nAll else being equal, the investor should purchase:",
        "options": [
            "Stock 1.",
            "Stock 2.",
            "Stock 3."
        ],
        "correctAnswer": 1,
        "explanation": "110. B is correct because the expected rate of return for Stock 2 exceeds the \ninvestor's required rate of return. In other words, the cost of equity can be thought \nof as the minimum expected rate of return that a company must offer its investors \nto purchase its shares in the primary market and to maintain its share price in the \nsecondary market. If this expected rate of return is not maintained in the secondary \nmarket, then the share price will adjust so that it meets the minimum required rate \n                                                                         \n \nof return demanded by investors. For example, if investors require a higher rate of \nreturn on equity than the company’s cost of equity, they would sell their shares and \ninvest their funds elsewhere resulting in a decline in the company’s share price."
    },
    {
        "id": "vikas-vohra-equity-investments-111",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Behavioral finance:",
        "options": [
            "suggests that behavioral biases only affect novice investors.",
            "provides a possible explanation for a number of pricing anomalies.",
            "relies on the assumption that people consider all available information in decision-\nmaking."
        ],
        "correctAnswer": 1,
        "explanation": "111. B is correct because the focus of much of the work in this area is on the behavioral \nbiases that affect investment decisions. The behavior of individuals, in particular \ntheir behavioral biases, has been offered as a possible explanation for a number of \npricing anomalies."
    },
    {
        "id": "vikas-vohra-equity-investments-112",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An analyst gathers and estimates the following information about a company's \nstock: \n \nIf the estimated stock value using the Gordon growth model is $92 per share, the \nrequired return on this stock is closest to:",
        "options": [
            "8.35%.",
            "8.52%.",
            "9.44%."
        ],
        "correctAnswer": 1,
        "explanation": "112. B is correct because the Gordon growth model is V0 = D1 / (r – g), where V0 is \ncurrent value, D1 is next year's dividend (D0 × (1 + g)), r is required return and g is \ngrowth rate. Solving this equation for r is r = D1 / V0 + g = (D0 × (1 + g)) / V0 + g. r = \n($4 × (1 + 4%)) / $92 + 4% = ($4.16) / $92 + 4% = 8.522%, which is closest to 8.52%."
    },
    {
        "id": "vikas-vohra-equity-investments-113",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "The first date that a share trades without the declared dividend is the:",
        "options": [
            "ex-date.",
            "payable date.",
            "declaration date."
        ],
        "correctAnswer": 0,
        "explanation": "113. A is correct because the ex-dividend date (or ex-date), the first date that a \nshare trades without (i.e., “ex”) the dividend."
    },
    {
        "id": "vikas-vohra-equity-investments-114",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A $25 par value non-callable, non-convertible preferred share pays an annual \ndividend rate of 5%. If the required rate of return is 4%, the preferred share's \nintrinsic value is closest to:",
        "options": [
            "$25.25.",
            "$26.00.",
            "$31.25."
        ],
        "correctAnswer": 2,
        "explanation": "114. C is correct because the estimated intrinsic value = $1.25 / 0.04 = $31.25."
    },
    {
        "id": "vikas-vohra-equity-investments-115",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An investor buys a security on margin posting 50% of the initial price as equity. \nAll else being equal, if the price declines 25%, the investor's new leverage ratio is \nclosest to:",
        "options": [
            "2.",
            "3. \n\nEquity Investments: Practice Pack \nFaculty: Vikas Vohra                                                                        Page 18 of 43",
            "4."
        ],
        "correctAnswer": 1,
        "explanation": "115. B is correct because the leverage ratio is defined as the ratio of the value of the \nposition to the value of the equity investment in it. The leverage ratio indicates how \nmany times larger a position is than the equity that supports it. \n \nThe starting leverage = value ⁄equity = 1 ⁄ 0.5 = 2 \n \nThe change in market value is given as 25% decline, implying a new market value of \n75%. \n \nWith leverage of 2, new equity reduces by 2 × 25% = 50%, 50% × 50% = remaining \nequity of 25%. \n \nNew leverage = new value ⁄ new equity = 0.75 ⁄ 0.25 = 3. \n \nExpressed alternatively: New leverage = (1 ‒ 0.25) ⁄ (0.5 ‒ 0.25) = 3."
    },
    {
        "id": "vikas-vohra-equity-investments-116",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "When using a multiplier model, the fundamental variable is stated on:",
        "options": [
            "a trailing basis only.",
            "a forward basis only.",
            "either a forward basis or a trailing basis."
        ],
        "correctAnswer": 2,
        "explanation": "116. C is correct because the fundamental variable may be stated on a forward basis \n(e.g., forecasted EPS for the next year) or a trailing basis (e.g., EPS for the past \nyear), as long as the usage is consistent across companies being examined."
    },
    {
        "id": "vikas-vohra-equity-investments-117",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "For a security position purchased on margin, the leverage ratio is the ratio of the \nvalue of the position to:",
        "options": [
            "the value of equity in the position.",
            "the amount of the margin loan in the position.",
            "the amount of the margin loan plus equity in the position."
        ],
        "correctAnswer": 0,
        "explanation": "117. A is correct because the leverage ratio is the ratio of the value of the position to \nthe value of the equity investment in it."
    },
    {
        "id": "vikas-vohra-equity-investments-118",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A non-callable, non-convertible perpetual preferred share pays a level dividend of \n$1.20 with a current market price of $20. If an investor has a required rate of return \nof 6%, the preferred shares are most likely:",
        "options": [
            "undervalued.",
            "fairly valued.",
            "overvalued."
        ],
        "correctAnswer": 1,
        "explanation": "118. B is correct because the market price is equal to the calculated value based on \nthe stated rate of return. Since the preferred share pays a perpetual level dividend, \n                                                                         \n \nits value is V0 = D0/r = $1.20/0.06 = $20. If the estimated value equals the market \nprice, the analyst infers the security is fairly valued."
    },
    {
        "id": "vikas-vohra-equity-investments-119",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Broker 1 has a minimum margin requirement of 62.5% and Broker 2 has a maximum \nleverage ratio of 1.6. The maximum financial leverage possible with Broker 1 is:",
        "options": [
            "less than the maximum financial leverage with Broker 2.",
            "equal to the maximum financial leverage with Broker 2.",
            "greater than the maximum financial leverage with Broker 2."
        ],
        "correctAnswer": 1,
        "explanation": "119. B is correct because the maximum financial leverage is the same at both firms \ngiven Broker 1's margin requirement and Broker 2's maximum leverage ratio. Leverage \nRatio = 100% / margin requirement: Broker 1 leverage ratio = 100% / 62.5% = 1.6 = \nBroker 2's leverage ratio."
    },
    {
        "id": "vikas-vohra-equity-investments-120",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "If securities are purchased on margin with a maximum leverage ratio of 1.75, the \nminimum margin requirement is closest to:",
        "options": [
            "43%.",
            "57%.",
            "75%."
        ],
        "correctAnswer": 1,
        "explanation": "120. B is correct because the maximum leverage ratio associated with a position \nfinanced by the minimum margin requirement is one divided by the minimum margin \nrequirement. Or, MLR = 1 / MMR and MMR = 1 / MLR. In this case: the minimum margin \nrequirement (MMR) = 1 / 1.75 = 57%."
    },
    {
        "id": "vikas-vohra-equity-investments-121",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Which of the following market anomalies is best described as a time -series \nanomaly?",
        "options": [
            "Size effect",
            "Momentum",
            "Initial Public Offerings"
        ],
        "correctAnswer": 1,
        "explanation": "121. B is correct because the momentum anomaly is best described as a time-series \nanomaly. Momentum anomalies relate to short-term share price patterns where past \nprice moves continued through time to move in the same direction."
    },
    {
        "id": "vikas-vohra-equity-investments-122",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An analyst gathers the following information about a company: \n \nThe justified forward P/E ratio for the company's stock is closest to:",
        "options": [
            "5.7.",
            "8.0.",
            "13.3."
        ],
        "correctAnswer": 2,
        "explanation": "122. C is correct because the justified forward P/E ratio = P0 / E1 = p / (r – g), where \np is the dividend payout ratio, r is the required rate of return, g is the sustainable \ndividend growth rate; g = b × ROE where b is the earning retention rate = (1 – dividend \npayout ratio) and ROE is return on equity. Given g = (1 – 0.40) × 20% = 12%, then the \njustified forward P/E ratio = 0.40 / (0.15 – 0.12) = 13.3."
    },
    {
        "id": "vikas-vohra-equity-investments-123",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A trader uses margin to purchase a stock for $50 by posting 30% equity. If the \nfirst margin call occurs when the price falls below $43.75, the maintenance margin \nrequirement is closest to:",
        "options": [
            "13%.",
            "18%.",
            "20%."
        ],
        "correctAnswer": 2,
        "explanation": "123. C is correct because the margin requirement is equity per share / price per share: \n= (Initial equity + actual price – initial price) / (actual price) = (15+43.75 – 50) / 43.75 \n= 20%."
    },
    {
        "id": "vikas-vohra-equity-investments-124",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A trader buys a stock on margin with the following conditions: \n \nIf the share price declines, the highest price at which the trader will receive a margin \ncall is closest to:",
        "options": [
            "$12.50.",
            "$33.33.",
            "$37.50."
        ],
        "correctAnswer": 1,
        "explanation": "124. B is correct because the original equity of $25 indicates a margin loan of $25 \n($50 ‒ $25). At a stock price of $33.33, equity will equal $33.33 less the $25 margin \nloan, or $8.33, which is 25% of the equity per share. $8.33 ⁄ $33.33 ≈ 25%. To reach \nthis answer through calculation, determine where the equity per share equals the \n25% margin requirement: \n \nEquity ⁄ Share = (P ‒ L) ⁄ P = maintenance margin; \n \nWhere P = Share price and L = Loan amount; \n \n0.25 = (P ‒ $25) ⁄ P; P ≈ $33.33."
    },
    {
        "id": "vikas-vohra-equity-investments-125",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "The observation that a large-capitalization company's stock price is inflated after \nthe company releases unexpected good news at year end is most likely related to the:",
        "options": [
            "value effect.",
            "overreaction effect.",
            "turn-of-the-year effect."
        ],
        "correctAnswer": 1,
        "explanation": "125. B is correct because the overreaction effect or anomaly is described as the \npropensity for investors to overreact to the release of unexpected public \ninformation. Therefore, stock prices will be inflated (depressed) for those companies \nreleasing good (bad) information. In other words, inflated (depressed) here means \nthe change of value that is overshooting (undershooting) the fair (intrinsic) value \n                                                                         \n \nafter incorporating the new information, rather than the price action that goes up \n(down) itself."
    },
    {
        "id": "vikas-vohra-equity-investments-126",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Order matching rules in order-driven trading systems are used to:",
        "options": [
            "match buy orders to sell orders.",
            "determine the prices at which the orders submitted by dealers are matched.",
            "determine the prices at which the orders submitted by customers are matched."
        ],
        "correctAnswer": 0,
        "explanation": "126. A is correct because the order matching rules match buy orders to sell orders."
    },
    {
        "id": "vikas-vohra-equity-investments-127",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Which of the following is an objective of market regulation?",
        "options": [
            "Controlling agency problems only",
            "Ensuring that long-term liabilities are funded only",
            "Both controlling agency problems and ensuring that long -term liabilities are \nfunded"
        ],
        "correctAnswer": 2,
        "explanation": "127. C is correct because the objectives of market regulation include both controlling \nagency problems and ensuring that long-term liabilities are funded.  In total, the \nobjectives of market regulation are:"
    },
    {
        "id": "vikas-vohra-equity-investments-128",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An analyst gathers the following information about a company and its historical \nprice multiples: \n \nBased only on this information, if the share price is $30, the company's shares are \nmost likely overvalued based on:",
        "options": [
            "P/B.",
            "P/E.",
            "P/CF."
        ],
        "correctAnswer": 0,
        "explanation": "128. A is correct because the P/B value for the company is $30 ⁄ $40 = 0.75, which is \nabove the benchmark ratio of 0.6, indicating the shares are overvalued based on P/B \n(i.e. the ratio is higher than the benchmark). Both the P/E and P/CF ratios for the \ncompany are below their benchmarks, and therefore are not overvalued on that basis \n(see calculations options B and C)."
    },
    {
        "id": "vikas-vohra-equity-investments-129",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Porter's five determinants of the intensity of competition in an industry do not \ninclude the:",
        "options": [
            "power of buyers.",
            "threat of substitutes.",
            "position of a company in its life-cycle stage."
        ],
        "correctAnswer": 2,
        "explanation": "129. C is correct because the position of a company in its life-cycle stage is not part \nof Porter's five forces. The five forces are: threat of entry, power of suppliers, \npower of buyers, threat of substitutes, and rivalry among existing competitors."
    },
    {
        "id": "vikas-vohra-equity-investments-130",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A trader reports the following information about an equity investment which was \nsold after 1 year: \n \nThe trader's equity value as a result of the trade is closest to:",
        "options": [
            "$460.",
            "$2,520.",
            "$3,000."
        ],
        "correctAnswer": 1,
        "explanation": "130. B is correct because the remaining equity can be calculated as: \n \nProceeds on sale – payoff amount borrowed – payoff loan interest \nAmount paid to purchase shares = $12 × 2,000 = $24,000 \nEquity investment = $24,000/3 = $8,000 \nAmount borrowed = $24,000 - $8,000 = $16,000 \nInterest on loan = $16,000 × 3% = $480 \nTherefore, remaining equity = 2,000 × $9.5 – $16,000 – 3% × $16,000 = $19,000 – \n$16,000 – $480 = $2,520."
    },
    {
        "id": "vikas-vohra-equity-investments-131",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "If a security’s intrinsic value is $55 per share and is currently selling for $50 per \nshare, the security is:",
        "options": [
            "undervalued.",
            "fairly valued.",
            "overvalued."
        ],
        "correctAnswer": 0,
        "explanation": "131. A is correct because the security’s market price is less than its intrinsic value, \nindicating that it is undervalued. The dividend discount model can be used to estimate \nan asset’s intrinsic value."
    },
    {
        "id": "vikas-vohra-equity-investments-132",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Convertible preference shares:",
        "options": [
            "are popular in financing venture capital and private equity transactions.",
            "are subject to more price volatility than the underlying common shares. \n\nEquity Investments: Practice Pack \nFaculty: Vikas Vohra                                                                        Page 21 of 43",
            "do not increase in value due to an increase in price of the underlying common \nshares."
        ],
        "correctAnswer": 0,
        "explanation": "132. A is correct because the use of convertible preference shares is a popular \nfinancing option in venture capital and private equity transactions in which the issuing \ncompanies are considered to be of higher risk and when it may be years before the \nissuing company 'goes public' (i.e., issues common shares to the public)."
    },
    {
        "id": "vikas-vohra-equity-investments-133",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "If the price of a stock bought on 30% margin increases by 40%, the return on \nequity to the buyer is closest to:",
        "options": [
            "52%.",
            "75%.",
            "133%."
        ],
        "correctAnswer": 2,
        "explanation": "133. C is correct because the return on equity to a margin position is calculated by \nmultiplying the unleveraged return by the financial leverage ratio. The financial \nleverage ratio is equal to 1/margin. In this case, financial leverage is 1/0.30 = 3.3333, \nso the return on equity = 40% × 3.3333 = 133.33%, which is closest to 133%."
    },
    {
        "id": "vikas-vohra-equity-investments-134",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "The size effect anomaly results when it is observed that on a risk-adjusted basis \nsmall cap companies tend to:",
        "options": [
            "underperform equities of large-cap companies.",
            "perform in line with equities of large-cap companies.",
            "outperform equities of large-cap companies."
        ],
        "correctAnswer": 2,
        "explanation": "134. C is correct because the size effect results from the observation that equities \nof small-cap companies tend to outperform equities of large-cap companies on a risk-\nadjusted basis."
    },
    {
        "id": "vikas-vohra-equity-investments-135",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Within Porter’s five forces framework, the power of buyers within an industry is \nmost likely influenced by the:",
        "options": [
            "industry concentration.",
            "availability of lower priced alternative brands.",
            "number of customers for the industry’s products."
        ],
        "correctAnswer": 2,
        "explanation": "135. C is correct because the smaller the number of buyers, the more likely buyer \npower will increase. Bargaining Power of Customers. Affected by: size and \nconcentration of customers, costs of switching to other suppliers, customers’ ability \nto produce the product or service themselves. Are customers able to force price \nreductions or better payment terms? This can affect the intensity of competition by \nexerting influence on suppliers regarding prices (and possibly other factors such as \nproduct quality). For example, auto parts companies generally sell to a small number \nof auto manufacturers, which allows those customers, the auto manufacturers, to be \ntough negotiators when it comes to setting prices."
    },
    {
        "id": "vikas-vohra-equity-investments-136",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An investor purchases 1,000 shares of a non-dividend paying stock on margin and \nsells them after one year as follows: \n \nIgnoring commissions, the investor's holding period return is closest to:",
        "options": [
            "–45%.",
            "–40%.",
            "–23%."
        ],
        "correctAnswer": 0,
        "explanation": "136. A is correct because this is the return on investment to the investor. \n \nTotal purchase price = $25/share × 1,000 shares = $25,000 \n \nLeverage ratio of 2 indicates buyer's equity of 1/2 \n \nBuyer's equity = 1/2 × $25,000 = $12,500 \n \nBorrowed money = $25,000 – $12,500 = $12,500 \n \nInterest on borrowed money = 5% × $12,500 = $625 \n \nSale proceeds = $20/share × 1,000 shares = $20,000 \n \nNet return to buyer = Sale proceeds – purchase price – interest payment = $20,000 \n– $25,000 – $625 = –$5,625 \n \nReturn on investment to the buyer = –$5,625 / $12,500 = –45%"
    },
    {
        "id": "vikas-vohra-equity-investments-137",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An analyst gathers the following information about a market -capitalization-\nweighted index and one of its four constituent stocks: \n \nIf the stock price is $30 per share and the index value is 100, the stock's weight in \nthe index is closest to:",
        "options": [
            "25%.",
            "30%.",
            "35%."
        ],
        "correctAnswer": 2,
        "explanation": "137. C is correct because the stock's weight in a market-capitalization-weighted index \n= market capitalization of stock / market capitalization of index = $20 billion / $57 \nbillion = 35.08%, which is closest to 35%."
    },
    {
        "id": "vikas-vohra-equity-investments-138",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "The beginning value for an index is 1540 and the ending value is 1575. If the \nincome for the period is 55, the total return of the index is closest to:",
        "options": [
            "1.3%.",
            "2.2%.",
            "5.8%."
        ],
        "correctAnswer": 2,
        "explanation": "138. C is correct because the total return of an index is the price appreciation, or \nchange in the value of the price return index, plus income (dividends and/or interest) \nover the period, expressed as a percentage of the beginning value of the price return \n                                                                         \n \nindex. Total return = (ending index value – beginning index value + income) / beginning \nindex value = (1575 – 1540 + 55) / 1540 = 90 / 1540 = 5.8%."
    },
    {
        "id": "vikas-vohra-equity-investments-139",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "If investors can successfully predict future asset prices based on past prices, \nmarkets are most likely:",
        "options": [
            "inefficient.",
            "weak-form efficient only.",
            "semi-strong-form efficient."
        ],
        "correctAnswer": 0,
        "explanation": "139. A is correct because under all forms of market efficiency past trading data are \nalready reflected in current prices and investors cannot predict future price changes \nby extrapolating prices or patterns of prices from the past. Therefore, if investors \ncan predict future asset prices based on past prices, markets are inefficient."
    },
    {
        "id": "vikas-vohra-equity-investments-140",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A company's current dividend (D0) of $3 per share is expected to grow 20% per \nyear for three years, then 5% per year thereafter. If the required rate of return is \n10%, using a multistage dividend discount model, the intrinsic value of the stock at \nthe end of Year 3 is closest to:",
        "options": [
            "$81.79.",
            "$92.53.",
            "$108.86."
        ],
        "correctAnswer": 2,
        "explanation": "140. C is correct because the value at the end of Year 3 (same as at the beginning of \nYear 4) will be: V3 = D3(1 + gL)/(r – gL) = D4/(r – gL), where gL = long-term growth \nrate. The Year 4 dividend equals the initial dividend compounded at 20% for three \nyears, the compounded at 5% for another year; D4 = $3 × (1.2)3 × (1.05) = $5.4432. \nV3 = $5.4432/(0.10 – 0.05) = $108.8640 ≈ $108.86."
    },
    {
        "id": "vikas-vohra-equity-investments-141",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A disadvantage of an equal-weighted index is that:",
        "options": [
            "maintaining equal weights requires frequent reconstitution of the index.",
            "securities that represent a relatively large fraction of the target market value \nare underrepresented.",
            "securities that represent a relatively small fraction of the target market value \nare underrepresented."
        ],
        "correctAnswer": 1,
        "explanation": "141. B is correct because this is considered a disadvantage of an equal weighted index. \nEqual weighting has a number of disadvantages. Securities that constitute the largest \nfraction of the target market value are underrepresented, and securities that \nconstitute a small fraction of the target market value are overrepresented."
    },
    {
        "id": "vikas-vohra-equity-investments-142",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An analyst gathers the following information about a company's non-callable, non-\nconvertible preferred stock: \n \nIf the stock's intrinsic value is €125, the company's semi-annual dividend on the \npreferred stock is closest to:",
        "options": [
            "€6.62.",
            "€7.20.",
            "€9.00."
        ],
        "correctAnswer": 0,
        "explanation": "142. A is correct because using the formula:"
    },
    {
        "id": "vikas-vohra-equity-investments-143",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "In contrast to a public company, a company that has gone private most likely:",
        "options": [
            "faces greater regulatory costs.",
            "focuses more on short-term results.",
            "lacks an active secondary market for its equity."
        ],
        "correctAnswer": 2,
        "explanation": "143. C is correct because there is no active secondary market for equity of private \ncompanies and the shares require negotiations between investors in order to be \ntraded. This is in contrast to public companies, which have secondary markets for \ntrading their equity."
    },
    {
        "id": "vikas-vohra-equity-investments-144",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "An analyst gathers the following information about an equal -weighted index \ncomposed of three stocks: \n \nIf there is a 2% return from dividends for each of the three stocks, the total return \nof the index is:",
        "options": [
            "0%.",
            "2%.",
            "6%."
        ],
        "correctAnswer": 1,
        "explanation": "144. B is correct because total return measures price appreciation plus interest, \ndividends, and other distributions. Thus, the total return of an index is the price \nappreciation, or change in the value of the price return index, plus income (dividends \nand/or interest) over the period, expressed as a percentage of the beginning value \nof the price return index. Price return for Stock 1 = ($8 – $10) / $10 = –0.20 = –20%. \n\n                                                                         \n \nTotal return = price return + dividends = –20% + 2% = –18%. Price return for Stock 2 \n= ($24 – $20) / $20 = 0.20 = 20%. Total return = 20% + 2% = 22%. Price return for \nStock 3 = ($30 – $30) / $30 = 0.00 = 0%. Total return = 0% + 2% = 2%. The total \nreturn of the index = (–18% + 22% + 2%) / 3 = 6% / 3 = 2%."
    },
    {
        "id": "vikas-vohra-equity-investments-145",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Which of the following factors would most likely increase market efficiency? \nLimits on:",
        "options": [
            "short selling",
            "transaction costs",
            "trading by foreign investors"
        ],
        "correctAnswer": 1,
        "explanation": "145. B is correct because transaction costs are incurred in trading to exploit any \nperceived market inefficiency. If there are limits on transaction costs, more \ninvestors would be encouraged to trade. This brings about increased number of \nmarket participants which in turn contributes to market efficiency. One of the most \ncritical factors contributing to the degree of efficiency in a market is the number of \nmarket participants."
    },
    {
        "id": "vikas-vohra-equity-investments-146",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Which of the following index weighting schemes most likely causes a bias in the \nindex when high-priced stocks split?",
        "options": [
            "Price weighted",
            "Equal weighted",
            "Value weighted"
        ],
        "correctAnswer": 0,
        "explanation": "146. A is correct because when a company's shares split, their price declines and their \nweight in a price-weighted index is reduced, regardless of the importance of the \nstock."
    },
    {
        "id": "vikas-vohra-equity-investments-147",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "In the secondary market, funds flow from:",
        "options": [
            "traders to traders.",
            "issuers to investors.",
            "investors to issuers."
        ],
        "correctAnswer": 0,
        "explanation": "147. A is correct because when investors sell securities to others, they trade in the \nsecondary market. In the secondary market, funds flow between traders."
    },
    {
        "id": "vikas-vohra-equity-investments-148",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "When issuers sell securities to investors:",
        "options": [
            "they trade in the primary market.",
            "they trade in the secondary market.",
            "funds flow between the primary and the secondary market."
        ],
        "correctAnswer": 0,
        "explanation": "148. A is correct because when issuers sell securities to investors, practitioners say \nthat they trade in the primary market."
    },
    {
        "id": "vikas-vohra-equity-investments-149",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "In a well-functioning financial system, changes in asset prices primarily reflect \nchanges in:",
        "options": [
            "execution costs.",
            "the demand for liquidity.",
            "fundamental asset values."
        ],
        "correctAnswer": 2,
        "explanation": "149. C is correct because well functioning financial systems are characterized by \nprices that reflect fundamental values so that prices vary primarily in response to \nchanges in fundamental values and not to demands for liquidity made by uninformed \ntraders (informationally efficient markets)."
    },
    {
        "id": "vikas-vohra-equity-investments-150",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "When a company raises common equity capital in the public market, the company \nmost likely:",
        "options": [
            "moves money from the present to the future.",
            "agrees to make scheduled distributions in the future. \n\nEquity Investments: Practice Pack \nFaculty: Vikas Vohra                                                                        Page 24 of 43",
            "is required to meet regulatory reporting requirements."
        ],
        "correctAnswer": 2,
        "explanation": "150. C is correct because when a company sells common stock to raise capital, \nregulatory reporting requirements and accounting standards attempt to ensure the \nproduction of meaningful financial disclosures."
    },
    {
        "id": "vikas-vohra-equity-investments-151",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Preference shares are less risky than common shares because preference shares \nhave:",
        "options": [
            "fixed dividends.",
            "a guaranteed return if a company is liquidated.",
            "a larger portion of total return based on future price return."
        ],
        "correctAnswer": 0,
        "explanation": "151. A is correct because dividends on preference shares are known and fixed, and \nthey account for a large portion of the preference shares’ total return. Therefore, \nthere is less uncertainty about future cash flows."
    },
    {
        "id": "vikas-vohra-equity-investments-152",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "The Gordon growth model assumes a dividend growth rate:",
        "options": [
            "less than the required rate of return.",
            "equal to the required rate of return.",
            "greater than the required rate of return."
        ],
        "correctAnswer": 0,
        "explanation": "152. A is correct because the Gordon growth model assumes that the growth rate \ncannot be greater than the required rate of return. Also, the dividend growth rate is \nstrictly less than the required rate of return."
    },
    {
        "id": "vikas-vohra-equity-investments-153",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Private equity securities most likely:",
        "options": [
            "are listed on public exchanges.",
            "are illiquid and difficult to trade.",
            "have easily available financial information."
        ],
        "correctAnswer": 1,
        "explanation": "153. B is correct because private equity securities do not have “market determined” \nquoted prices, are highly illiquid, and require negotiations between investors in order \nto be traded."
    },
    {
        "id": "vikas-vohra-equity-investments-154",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "The Gordon growth model is most appropriate for valuing the equity of a dividend-\npaying:",
        "options": [
            "electric utility firm.",
            "technology company.",
            "automobile manufacturer. \n \nSolutions"
        ],
        "correctAnswer": 0,
        "explanation": "154. A is correct because of its assumption of a constant growth rate, the Gordon \ngrowth model is particularly appropriate for valuing the equity of dividend-paying \n                                                                         \n \ncompanies that are relatively insensitive to the business cycle and in a mature growth \nphase. Examples might include an electric utility. \nCorporate Issuers: Practice Pack \n\ncandidates for practice purpose."
    },
    {
        "id": "vikas-vohra-equity-investments-1",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "If a corporation is financed with both debt and equity, which of the following must \nthe corporation pay?",
        "options": [
            "Interest only",
            "Dividends only",
            "Both interest and dividends"
        ],
        "correctAnswer": 0,
        "explanation": "1. A is correct. Negative earnings in the last year result in a negative ratio of trailing \nprice to earnings and are not meaningful. Practitioners may use the ratio of (1) current \nprice to cash flow or (2) leading price to earnings by replacing last year’s loss with \nforecasted earnings."
    },
    {
        "id": "vikas-vohra-equity-investments-2",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "A company that produces goods to be marketed by other firms is best described as \nhaving a:",
        "options": [
            "value added reseller business model.",
            "licensing arrangement business model.",
            "contract manufacturer business model."
        ],
        "correctAnswer": 0,
        "explanation": "2. A is correct. The payment date can occur on a weekend or holiday unlike other \npertinent dates, such as the ex-date and record date, which occur only on business \ndays."
    },
    {
        "id": "vikas-vohra-equity-investments-3",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "\"Economic\" profit is best described as the return to a firm's owners:",
        "options": [
            "in the form of retained earnings and distributions to the owners.",
            "after corporate taxes and taxes on distributions have been paid.",
            "in excess of what they could have earned elsewhere on different investments."
        ],
        "correctAnswer": 1,
        "explanation": "3. B is correct. The investor has written a put contract, which means she is short the \noption. She, therefore, must satisfy the obligation to purchase the asset if requested \nto do so by the put owner. The investor has a long exposure to the risk of the \nunderlying index future because she benefits when its quoted price increases—that \nis, when the put declines in value (or suffers a loss when its quoted price decreases \nas the put increases in value)."
    },
    {
        "id": "vikas-vohra-equity-investments-4",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "The purchase of which of the following shares most likely requires investors to be \naccredited?",
        "options": [
            "Public company shares only",
            "Private company shares only",
            "Both public company shares and private company shares"
        ],
        "correctAnswer": 1,
        "explanation": "4. B is correct. The service that dealers provide is liquidity. Liquidity is the ability to \nbuy or sell with low transaction costs when investors want to trade. By allowing their \nclients to trade when they want to trade, dealers provide liquidity to them."
    },
    {
        "id": "vikas-vohra-equity-investments-5",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Which best describes business growth that attracts more customers and merchants, \ncontributing to further growth in the business?",
        "options": [
            "Crowdsourcing",
            "A one-sided network",
            "A multi-sided network"
        ],
        "correctAnswer": 1,
        "explanation": "5. B is correct. The value effect occurs when value stocks, which are generally referred \nto as stocks that have below-average price-to-earnings and market-to-book ratios, \nas well as above-average dividend yields, outperform growth stocks consistently and \nfor long periods."
    },
    {
        "id": "vikas-vohra-equity-investments-6",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "Private companies most likely have:",
        "options": [
            "less share price transparency compared to public companies.",
            "similar share price transparency as public companies.",
            "greater share price transparency compared to public companies."
        ],
        "correctAnswer": 1,
        "explanation": "6. B is correct because depreciation expense can serve as the basis for maintenance \ncapital expenditures, as it is management's estimate of the cost of fixed assets \nexpensed on the income statement in a manner that tracks its use."
    },
    {
        "id": "vikas-vohra-equity-investments-7",
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "LM - Equity Investments",
        "text": "The business model of a knowledge aggregation company that allows its users to \ncontribute directly to online content is best referred to as a:",
        "options": [
            "platform business model.",
            "marketplace business model.",
            "crowdsourcing business model."
        ],
        "correctAnswer": 1,
        "explanation": "7. B is correct because forecast objects for revenues are typically either top-down or \nbottom-up drivers. Common top-down forecast objects include 'growth relative to \nGDP growth' and 'market growth and market share. The analyst first forecasts a \ngrowth rate for a company's product market, and then considers the company's \ncurrent market share and how that share is likely to change over time."
    },
    {
        "id": "vikas-vohra-derivatives-6",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "A bond that allows the issuer to pay interest in the form of additional amounts of the \nexisting bond issue rather than a cash payment best describes a:",
        "options": [
            "step-up coupon bond.",
            "deferred coupon bond.",
            "payment-in-kind coupon bond."
        ],
        "correctAnswer": 1,
        "explanation": "6. B is correct because a discount factor may also be interpreted as the price of a zero-\ncoupon cash flow or bond. The price equivalent of a zero rate is the present value of \na currency unit on a future date, known as a discount factor. The discount factor for \nperiod i (𝐷𝐹#) is: 𝐷𝐹# = 1 / (1+𝑧#). Accordingly, the equivalent zero rate is: \n𝐷𝐹$ = 0.96 = 1 / (1\t+\t𝑧$)$; and 𝑧$ = 2.0621%  \n𝐷𝐹% = 0.93 = 1 / (1\t+\t𝑧%)%; and 𝑧% =  2.4485%  \n \nThe implied forward rate between period A and period B is denoted as 𝐼𝐹𝑅&,(–&. It is \na forward rate on a bond that starts in period A and ends in period B a general formula \nfor the relationship between the two spot rates (𝑧*, 𝑧+) and the implied forward rate \n𝐼𝐹𝑅&,(–&: (1\t+𝑧*)* × (1\t+\t𝐼𝐹𝑅*,+–*)(+-*) = (1\t+𝑧+)+. \n \n(1.020621)^2 × (1 + 𝐼𝐹𝑅$,%–$)^(3–2) = (1.024485)^3 \n \n(1 + 𝐼𝐹𝑅$,/) = (1.024485)^3 / (1.020621)^2  \n \n(1 + 𝐼𝐹𝑅$,/) = (1.075269 / 1.041667) \n \n1 + 𝐼𝐹𝑅$,/ = 1.032258 \n \n𝐼𝐹𝑅$,/ = 1.032258 – 1 = 3.2258% ≈ 3.23%."
    },
    {
        "id": "vikas-vohra-derivatives-7",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "In the event of default, investors in covered bonds most likely have recourse against:",
        "options": [
            "the issuer only.",
            "a segregated pool of assets only.",
            "both the issuer and a segregated pool of assets."
        ],
        "correctAnswer": 1,
        "explanation": "7. B is correct because according to put-call parity, po = c0 – S0 + X/(1 + r)^T, long put \n= long call, short asset, long bond. Therefore, the payoff of a European put option is \nequal to a payoff of a portfolio consisting of a short asset, a long call and a long risk-\nfree bond."
    },
    {
        "id": "vikas-vohra-derivatives-8",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "An investor takes a long position in a risk-free bond and in a forward contract on a \nnon-dividend-paying stock. The forward contract is priced at £50. The annual risk-\nfree rate is 10%. A nine-month put option on the stock with an exercise price of £47 \ntrades at £4. The price of a nine-month call option on the stock with an exercise \nprice of £47 is closest to:",
        "options": [
            "£6.79.",
            "£7.22.",
            "£7.30."
        ],
        "correctAnswer": 0,
        "explanation": "8. A is correct because a long put and a short call are equivalent to a long risk-free bond \nand short forward position: 𝑝\" – 𝑐\" =[X–𝐹\"(T)](1+𝑟)-! as calculated below:"
    },
    {
        "id": "vikas-vohra-derivatives-9",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Which of the following is most accurate?",
        "options": [
            "A forward contract is traded on an organized exchange.",
            "Forward contracts are more transparent than futures contracts.",
            "The buyer of a forward contract agrees to buy the underlying asset at a fixed \nprice on a future date."
        ],
        "correctAnswer": 2,
        "explanation": "9. C is correct because a forward contract is an over-the-counter derivative contract \nin which two parties agree that one party, the buyer, will purchase an underlying asset \nfrom the other party, the seller, at a later date at a fixed price they agree on when \nthe contract is signed."
    },
    {
        "id": "vikas-vohra-derivatives-10",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "A commodities producer selling its inventory forward in anticipation of lower prices \nin the future is an example of a:",
        "options": [
            "fair value hedge.",
            "cash flow hedge.",
            "net investment hedge."
        ],
        "correctAnswer": 0,
        "explanation": "10. A is correct because a fair value hedge designation applies when a derivative is \ndeemed to offset the fluctuation in fair value of an asset or liability. A commodities \nproducer might sell its inventory forward in anticipation of lower future prices."
    },
    {
        "id": "vikas-vohra-derivatives-11",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Which of the following is equal to the greater of zero or the present value of the \nexercise price minus the spot price?",
        "options": [
            "The lower bound of a put option",
            "The lower bound of a call option",
            "The upper bound of a put option"
        ],
        "correctAnswer": 0,
        "explanation": "11. A is correct because a put option buyer will exercise only if the spot price, ST, is \nbelow X at maturity. The exercise price, X, therefore represents the upper bound on \nthe put value. The lower bound is the present value of the exercise price minus the \nspot price or zero, whichever is greater."
    },
    {
        "id": "vikas-vohra-derivatives-12",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Which of the following most likely has an embedded derivative in its structure?",
        "options": [
            "A put option",
            "A callable bond",
            "A futures contract"
        ],
        "correctAnswer": 1,
        "explanation": "12. B is correct because an embedded derivative is a derivative within an underlying, such \nas a callable, puttable, or convertible bond."
    },
    {
        "id": "vikas-vohra-derivatives-13",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Which of the following derivatives most likely requires a payment to be made at the \ninitiation of the contract? A(n):",
        "options": [
            "swap",
            "option",
            "forward"
        ],
        "correctAnswer": 1,
        "explanation": "13. B is correct because an option is a derivative contract in which one party, the buyer, \npays a sum of money to the other party, the seller or writer, and receives the right \nto either buy or sell an underlying asset at a fixed price either on a specific expiration \ndate or at any time prior to the expiration date."
    },
    {
        "id": "vikas-vohra-derivatives-14",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Basis risk is best described as a(n):",
        "options": [
            "investor's inability to meet a margin call due to a lack of funds.",
            "potential divergence between the expected value of a derivative and its \nunderlying.",
            "divergence in the cash flow timing of a derivative versus that of an underlying \ntransaction."
        ],
        "correctAnswer": 1,
        "explanation": "14. B is correct because basis risk is the potential divergence between the expected \nvalue of a derivative instrument versus an underlying or hedged transaction."
    },
    {
        "id": "vikas-vohra-derivatives-15",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Which of the following derivative contracts is best described as a contingent claim?",
        "options": [
            "A swap contract",
            "A forward contract",
            "An option contract"
        ],
        "correctAnswer": 2,
        "explanation": "15. C is correct because another type of derivative is a contingent claim, in which one of \nthe counterparties determines whether and when the trade will settle. An option is \nthe primary contingent claim."
    },
    {
        "id": "vikas-vohra-derivatives-16",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "An investor buys a call option for $4 that has an exercise price of $27. At expiration, \nif the stock price is $22, the call option payoff is:",
        "options": [
            "negative.",
            "zero.",
            "positive."
        ],
        "correctAnswer": 1,
        "explanation": "16. B is correct because cT = Max(0,ST – X), where cT is the value of the call option, or \nthe payoff to the call buyer, X is the strike (or exercise) price, and ST is the stock \nprice at expiration. In this case, cT = Max(0,$22 – $27) = 0."
    },
    {
        "id": "vikas-vohra-derivatives-17",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Which of the following derivatives have a non-linear payoff?",
        "options": [
            "Contingent claims only",
            "Forward commitments only",
            "Both contingent claims and forward commitments"
        ],
        "correctAnswer": 0,
        "explanation": "17. A is correct because asymmetric payoff profile is a common feature of contingent \nclaims, which are sometimes referred to as non-linear derivatives."
    },
    {
        "id": "vikas-vohra-derivatives-18",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "The potential divergence between the expected value of a derivative instrument \nversus an underlying or hedged transaction best describes:",
        "options": [
            "basis risk.",
            "liquidity risk.",
            "systemic risk."
        ],
        "correctAnswer": 0,
        "explanation": "18. A is correct because basis risk is the potential divergence between the expected \nvalue of a derivative instrument versus an underlying or hedged transaction."
    },
    {
        "id": "vikas-vohra-derivatives-19",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "With respect to hedge accounting designation types, a:",
        "options": [
            "foreign exchange forward to hedge forecasted sales is an example of a fair value \nhedge.",
            "commodity futures contract used to hedge inventory is an example of a cash flow \nhedge.",
            "currency forward to offset the foreign exchange risk of equity of a foreign \noperation is an example of a net investment hedge."
        ],
        "correctAnswer": 2,
        "explanation": "19. C is correct because currency forward designated as offsetting the FX risk of the \nequity of a foreign operation is an example of a net investment hedge."
    },
    {
        "id": "vikas-vohra-derivatives-20",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Which of the following statements about derivatives is most accurate?",
        "options": [
            "Derivatives reduce the efficiency of price discovery for the underlying",
            "Transaction cost of derivatives are greater than the transaction cost of the \nunderlying",
            "Excessive risk taking and use of leverage in derivative markets may contribute to \nmarket stress"
        ],
        "correctAnswer": 2,
        "explanation": "20. C is correct because excessive risk taking and use of leverage in derivative markets \nmay contribute to market stress, as in the 2008 financial crisis."
    },
    {
        "id": "vikas-vohra-derivatives-21",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Which of the following asset classes is most likely to have a convenience yield?",
        "options": [
            "Commodities",
            "Interest rates",
            "Foreign exchange"
        ],
        "correctAnswer": 0,
        "explanation": "21. A is correct because convenience yield is a non-cash benefit associated with physical \nassets. In contrast to securities or cash stored electronically, commodities usually \ninvolve known costs associated with the storage, insurance, transportation, and \npotential spoilage (in the case of soft commodities) of these physical assets. A non-\ncash benefit of holding a physical commodity versus a deriva tive is known as a \nconvenience yield."
    },
    {
        "id": "vikas-vohra-derivatives-22",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Counterparty default risk is most likely lowest for which of the following types of \nderivatives?",
        "options": [
            "Swaps",
            "Futures",
            "Forwards"
        ],
        "correctAnswer": 1,
        "explanation": "22. B is correct because exchange-traded derivatives (ETD) are standardized contracts \ntraded on an organized exchange which requires collateral on deposit to protect \nagainst counterparty default and a futures contract is an exchange-traded derivative \n(ETD) with standardized terms set by the exchange. Therefore, futures has lowest \ncounterparty default risk."
    },
    {
        "id": "vikas-vohra-derivatives-23",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "When the strike price of a call option is lower, the likelihood of the option expiring \nin-the-money is:",
        "options": [
            "lower.",
            "unchanged.",
            "higher."
        ],
        "correctAnswer": 2,
        "explanation": "23. C is correct because for a call option, a lower exercise price has two benefits. One is \nthat there are more values of the underlying at expiration that are above the \nexercise price, meaning that there are more outcomes in which the call expires in-\nthe-money."
    },
    {
        "id": "vikas-vohra-derivatives-24",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Derivatives are typically priced by forming a hedge involving the underlying asset and \na derivative such that the combination must pay the:",
        "options": [
            "risk-free rate.",
            "dividend yield.",
            "convenience yield."
        ],
        "correctAnswer": 0,
        "explanation": "24. A is correct because Derivatives are typically priced by forming a hedge involving the \nunderlying asset and a derivative such that the combination must pay the risk-free \nrate and do so for only one derivative price."
    },
    {
        "id": "vikas-vohra-derivatives-25",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "The potential divergence between the cash flow timing of a derivative instrument \nversus its underlying best describes:",
        "options": [
            "basis risk.",
            "liquidity risk. \nDerivatives: Practice Pack \nFaculty: Vikas Vohra                                                                                   Page 5 of 21",
            "systemic risk."
        ],
        "correctAnswer": 1,
        "explanation": "25. B is correct because liquidity risk is described as potential divergence between the \ncash flow timing of a derivative instrument versus an underlying o r hedged \ntransaction."
    },
    {
        "id": "vikas-vohra-derivatives-26",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Before expiration, if the price of the underlying is above the exercise price, the \nEuropean put option has a positive:",
        "options": [
            "time value.",
            "intrinsic value.",
            "exercise value."
        ],
        "correctAnswer": 0,
        "explanation": "26. A is correct because if the underlying is equal to or worth more than the exercise \nprice at expiration (ST ≥ X), the put will simply expire with no value. So, the put is \nworth the greater of either zero or the exercise price minus th e price of the \nunderlying at expiration. Also, the time value of an option is the difference between \nthe market price of the option and its intrinsic value. As the price of the underlying \nis above the exercise price the put has a zero exercise value and only a positive time \nvalue."
    },
    {
        "id": "vikas-vohra-derivatives-27",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "According to put-call-forward parity, the payoff on a fiduciary call is equivalent to \nthe payoff on a portfolio consisting of:",
        "options": [
            "a long call and a short risk-free bond.",
            "a long put, a long forward contract and a long risk-free bond.",
            "a short call, a long forward contract and a long risk-free bond."
        ],
        "correctAnswer": 1,
        "explanation": "27. B is correct because recall our put–call parity discussion and assume that Investor A \ncreates his protective put in a slightly different manner. Instead of buying the asset, \nhe buys a forward contract and a risk-free bond in which the face value is the forward \nprice. This strategy is a synthetic protective put. Because we showed that the \nfiduciary call is equivalent to the protective put, a fiduciary call has to be equivalent \n                                                                                    \n \nto a protective put with a forward contract. Therefore, the payoff on a fiduciary call \n= the payoff on a synthetic protective put, fiduciary call = long call + long risk-free \nbond = long risk-free bond + long forward contract + long put."
    },
    {
        "id": "vikas-vohra-derivatives-28",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Compared to over-the-counter derivatives, exchange-traded derivatives:",
        "options": [
            "are less standardized.",
            "provide less transparency.",
            "have lower transaction costs."
        ],
        "correctAnswer": 2,
        "explanation": "28. C is correct because OTC and ETD markets differ in several ways, including that ETD \ncontracts have lower trading and transaction costs."
    },
    {
        "id": "vikas-vohra-derivatives-29",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "A series of forward rate agreements and an interest rate swap contract covering the \nsame periods and using the same market reference rate will most likely have the \nsame:",
        "options": [
            "fixed rates.",
            "cash flows upfront.",
            "settlement cash flows."
        ],
        "correctAnswer": 1,
        "explanation": "29. B is correct because similarities between interest rate forwards and swaps include \nthe symmetric payoff profile and the fact that no cash flow is exchanged upfront."
    },
    {
        "id": "vikas-vohra-derivatives-30",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "The value of a forward contract at initiation is most likely equal to:",
        "options": [
            "zero.",
            "the spot price minus the forward price.",
            "the forward price minus the spot price."
        ],
        "correctAnswer": 0,
        "explanation": "30. A is correct because neither the long nor the short pays anything to the other at the \ninitiation date of a forward contract, the value of a forward contract when initiated \nis zero."
    },
    {
        "id": "vikas-vohra-derivatives-31",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Which of the following derivatives realize a gain as the market reference rate rises \nabove the initial fixed rate?",
        "options": [
            "Long forward rate agreements only",
            "Short interest rate futures contracts only",
            "Both long forward rate agreements and short interest rate futures contracts"
        ],
        "correctAnswer": 2,
        "explanation": "31. C is correct because realizing a gain on the FRA contract as rates rise. Note that this \nwould be equivalent to taking a short position on a CNY MRR futures contract if one \nwere available. A long FRA (i.e., FRA floating -rate receiver (fixed-rate payer)) \nposition realizes a gain as MRR rises. A short futures contract price is based on (100 \n− yield), which gains as yield-to-maturity (MRR) rises."
    },
    {
        "id": "vikas-vohra-derivatives-32",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "In the over-the-counter derivatives market, most transactions occur between end \nusers and:",
        "options": [
            "dealers.",
            "other end users. \nDerivatives: Practice Pack \nFaculty: Vikas Vohra                                                                                   Page 6 of 21",
            "a central counterparty."
        ],
        "correctAnswer": 0,
        "explanation": "32. A is correct because OTC (over-the-counter) derivative markets involve contracts \nentered between derivatives end users and dealers, or financial intermediaries, such \nas commercial banks or investment banks."
    },
    {
        "id": "vikas-vohra-derivatives-33",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Which of the following statements is most accurate? A standard interest rate swap \nhas:",
        "options": [
            "a symmetric payoff profile.",
            "the principal cash flow exchanged upfront.",
            "periodic settlements that occur at the beginning of each period."
        ],
        "correctAnswer": 0,
        "explanation": "33. A is correct because other similarities between interest rate forwards and swaps \ninclude the symmetric payoff profile and the fact that no cash flow is exchanged \nupfront. The symmetric payoff profile of a swap means that the swap has zero value \nto both parties at contract inception."
    },
    {
        "id": "vikas-vohra-derivatives-34",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "The upper bound of a call price is the:",
        "options": [
            "exercise price.",
            "price of the underlying.",
            "underlying’s price minus the present value of the exercise price."
        ],
        "correctAnswer": 1,
        "explanation": "34. B is correct because the call buyer will not pay more for the right to purchase an \nunderlying than the price of that underlying, which is the upper bound."
    },
    {
        "id": "vikas-vohra-derivatives-35",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "The following portfolios contain a company's stock and a derivative on the stock: \n \nThe portfolio containing a derivative acting as a firm commitment to hedge the stock \nis most likely:",
        "options": [
            "Portfolio 1.",
            "Portfolio 2.",
            "Portfolio 3."
        ],
        "correctAnswer": 0,
        "explanation": "35. A is correct because the buyer of a derivative enters a contract whose value changes \nin a way similar to a long position in the underlying. Thus a short futures position \nhedges the exposure to the underlying: Use of a derivative to offset or neutralize \nexisting or anticipated exposure to an underlying is referred to as hedging, with the \nderivative itself commonly described as a hedge of the underlying transaction. In \naddition, a futures position is a firm commitment: Firm commitments include forward \ncontracts, futures contracts, and swaps involving a periodic exchange of cash flows."
    },
    {
        "id": "vikas-vohra-derivatives-36",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "A futures contract’s:",
        "options": [
            "mark-to-market is not settled until maturity.",
            "price remains fixed until the contract matures.",
            "variation margin reduces counterparty credit risk."
        ],
        "correctAnswer": 2,
        "explanation": "36. C is correct because the daily settlement mechanism resets the futures MTM to \nzero, and variation margin is exchanged to settle the difference, reducing \ncounterparty credit risk."
    },
    {
        "id": "vikas-vohra-derivatives-38",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "If the net cost of carry is zero, the forward price of a commodity is most likely:",
        "options": [
            "less than the commodity's spot price compounded at the risk-free rate over the \nlife of the contract.",
            "equal to the commodity's spot price compounded at the risk-free rate over the \nlife of the contract. \n\nDerivatives: Practice Pack \nFaculty: Vikas Vohra                                                                                   Page 7 of 21",
            "greater than the commodity's spot price compounded at the risk-free rate over \nthe life of the contract."
        ],
        "correctAnswer": 1,
        "explanation": "38. B is correct because The forward price of an asset with benefits and/or costs is the \nspot price compounded at the risk-free rate over the life of the contract minus the \nfuture value of those benefits and costs. That is, F0(T) = S0(1+r)^T – (γ – θ)(1+r)^T, \nwhere the net cost of carry consists of the benefits, denoted as γ (dividends or \ninterest plus convenience yield), minus the costs, denoted as θ. When net cost of \ncarry is zero, the term (γ – θ) is zero, resulting in (γ – θ)(1+r)^T being zero. Then, \nF0(T) = S0(1+r)^T. Hence, the forward price of a c ommodity is equal to the \ncommodity's spot price compounded at the risk-free rate over the life of the \ncontract when the net cost of carry is zero."
    },
    {
        "id": "vikas-vohra-derivatives-39",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Long futures contracts are more attractive than long forward positions for the same \nunderlying and maturity when futures prices and interest rates are:",
        "options": [
            "negatively correlated.",
            "uncorrelated.",
            "positively correlated."
        ],
        "correctAnswer": 2,
        "explanation": "39. C is correct because the different patterns of cash flows for forwards and futures \ncan lead to a difference in the pricing of forwards versus futures and if futures \nprices are positively correlated with interest rates, long futures contracts are more \nattractive than long forward positions for the same underlying and maturity. The \nreason is because rising prices lead to futures profits that are reinvested in periods \nof rising interest rates, and falling prices lead to losses that occur in periods of \nfalling interest rates the more desirable contract will tend to have the higher price."
    },
    {
        "id": "vikas-vohra-derivatives-40",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "The differential between forward and futures prices is determined by which of the \nfollowing?",
        "options": [
            "Interest rate volatility only",
            "The correlation between futures prices and interest rates only",
            "Both interest rate volatility and the correlation between futures prices and \ninterest rates"
        ],
        "correctAnswer": 2,
        "explanation": "40. C is correct because the different patterns of cash flows for forwards and futures \ncan lead to a difference in the pricing of forwards versus futures. Forward and \nfutures prices are identical under certain conditions, namely: ■ if interest rates are \nconstant, or ■ if futures prices and interest rates are uncorrelated. On the other \nhand, violations of these assumptions can give rise to differences in pricing between \nthese two contracts. For example, if futures prices are positively correlated with \ninterest rates, long futures contracts are more attractive than long forward positions \nfor the same underlying and maturity. The reason is because rising prices lead to \nfutures profits that are reinvested in periods of rising interest rates, and falling \nprices lead to losses that occur in periods of falling interest rates. The price \ndifferential will also vary with the volatility of interest rates. Therefore, the \n\n                                                                                    \n \ndifferential between forward and futures prices is determined by both interest rate \nvolatility and the correlation between futures prices and interest rates."
    },
    {
        "id": "vikas-vohra-derivatives-41",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "From the fixed-rate receiver's perspective, if the market reference rate increases, \nthe value of a swap contract:",
        "options": [
            "decreases.",
            "stays the same.",
            "increases."
        ],
        "correctAnswer": 0,
        "explanation": "41. A is correct because the fixed-rate receiver pays the market reference rate and \nreceives the par swap par rate. If the market reference rate increases, they are \npaying more and the value of the contract decreases to them. Another interpretation \nof an interest rate swap is that the fixed-rate payer (floating-rate receiver) is long \na floating-rate note (FRN) priced at the MRR and short a fixed-rate bond with a \ncoupon equal to the fixed swap rate. Similarly, the fixed-rate receiver (floating-rate \npayer) is long a fixed-rate bond with a coupon equal to the swap rate and short a \nfloating-rate note priced at the MRR. A rise in the expected forward rates after \ninception will increase the present value of floating payments, while the fixed-swap \nrate will remain the same."
    },
    {
        "id": "vikas-vohra-derivatives-42",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "An analyst gathers the following information: \nThe current spot price of crude oil is $120 per barrel. \nThe risk-free rate is 3% with annual compounding. \nA futures contract has 182 days until settlement. \nThe storage cost is $5 per barrel, payable at the end of the futures contract. \nBased on 365 days per year, the futures price per barrel of crude oil is closest to:",
        "options": [
            "$126.78.",
            "$126.86.",
            "$126.93."
        ],
        "correctAnswer": 0,
        "explanation": "42. A is correct because the futures price for a commodity with known storage cost \namounts may be determined [as"
    },
    {
        "id": "vikas-vohra-derivatives-43",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Most derivatives pricing models are established on the foundation that:",
        "options": [
            "arbitrage opportunities exist.",
            "only one price for a derivative exists.",
            "the underlying asset price is inferred to determine the derivative price."
        ],
        "correctAnswer": 1,
        "explanation": "43. B is correct because the law of one price can be used to value a derivative security \nsince there is a one-to-one relationship between the derivative and its underlying \nasset at maturity. Therefore, there exists only one price for each derivative."
    },
    {
        "id": "vikas-vohra-derivatives-44",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Which of the following is most accurate regarding a call option replication strategy?",
        "options": [
            "The strategy requires adjustment over the life of the option contract based on \nthe likelihood of exercise",
            "If the call option is exercised, the strategy requires purchasing the underlying \nfrom the proceeds of the loan \nDerivatives: Practice Pack \nFaculty: Vikas Vohra                                                                                   Page 8 of 21",
            "At inception, the strategy requires buying long a forward contract on the \nunderlying and borrowing at the risk free rate"
        ],
        "correctAnswer": 0,
        "explanation": "44. A is correct because the non-linear payoff profile of an option requires that the \nreplicating transaction be adjusted as this likelihood changes, while the replicating \ntrades for a forward commitment remain constant. Also, as in the case of the call \noption, the asymmetric payoff profile requires adjustment over time based on the \nlikelihood of exercise."
    },
    {
        "id": "vikas-vohra-derivatives-45",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "An analyst collects the following information: \n \nBased on a one-period binomial pricing model, which of the following has the largest \npayoff?",
        "options": [
            "Put option following an up move",
            "Put option following a down move",
            "Call option following a down move"
        ],
        "correctAnswer": 1,
        "explanation": "45. B is correct because the payoff of a put option following a down move is p1d = Max \n(0, X – S1d) where X is the exercise price and S1d is the price after a down move. In \nthis case, S1d = €26(0.75) = €19.50. So, p1d = Max (0, €22 - €19.50) = €2.50, which \nis greater than the payoffs of other two responses."
    },
    {
        "id": "vikas-vohra-derivatives-46",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "A $10 million interest rate swap with annual payments has a fixed swap rate of 1.95%. \nThe implied forward rates are: \n \nThe periodic settlement value in Year 3 for the fixed-rate payer is expected to be \nclosest to:",
        "options": [
            "–$95,000.",
            "–$60,000.",
            "$60,000."
        ],
        "correctAnswer": 1,
        "explanation": "46. B is correct because the periodic settlement value = (MRR – sN) × Notional amount × \nPeriod. The market reference rate (MMR) for Year 3 is 1.35%, thus: \n \n= (0.0135 – 0.0195) × $10,000,000 × 1 = –$60,000."
    },
    {
        "id": "vikas-vohra-derivatives-47",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Which of the following best describes put–call–forward parity?",
        "options": [
            "The present value of the exercise price plus the call price equals the put price \nplus the underlying price.",
            "The underlying price plus the call price equals the present value of the exercise \nprice plus the put price.",
            "The call price minus the put price equals the present value of the exercise price \nminus the underlying price."
        ],
        "correctAnswer": 0,
        "explanation": "47. A is correct because the put price plus the underlying price equals the call price plus \nthe present value of the exercise price. Rearranged, this is as follows: The present \nvalue of the exercise price plus the call price equals the put price plus the underlying \nprice."
    },
    {
        "id": "vikas-vohra-derivatives-48",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Consider a put option selling for $2 in which the exercise price is $45. What is the \nprofit for a put buyer if the price of the underlying at expiration is $41?",
        "options": [
            "–$2",
            "$2 \n\nDerivatives: Practice Pack \nFaculty: Vikas Vohra                                                                                   Page 9 of 21",
            "$4"
        ],
        "correctAnswer": 1,
        "explanation": "48. B is correct because the put’s value at expiration = pT = Max(0,X – ST), where pT is \nthe value of the put at expiration, X is the exercise price, and ST is the price of the \nunderlying at expiration. In this case, Max(0,45 – 41) = $4. The put buyer’s profit = \nΠ = pT – p0  (where p0 is the price of the put at time 0), or 4 – 2 = $2."
    },
    {
        "id": "vikas-vohra-derivatives-49",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Based on put-call parity, which of the following is equivalent to a long position in the \nunderlying asset?",
        "options": [
            "Long call, long put, and short bond",
            "Long put, short call, and long bond",
            "Long call, short put, and long bond"
        ],
        "correctAnswer": 2,
        "explanation": "49. C is correct because the put-call parity relationship implies S0 = c0 – p0 + X/(1 + r)^T \nwhich implies that a long asset = long call, short put, long bond."
    },
    {
        "id": "vikas-vohra-derivatives-52",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Which of the following factors affects the option price when using a binomial model? \nThe:",
        "options": [
            "risk-free rate.",
            "level of investors' risk aversion.",
            "expected return of the underlying."
        ],
        "correctAnswer": 0,
        "explanation": "52. A is correct because the value of the call option today, c0, is computed as the \nexpected value of the option at expiration, c1 u and c1 d, discounted at the risk-free \nrate, r. Also, this no-arbitrage derivative value established separately from investor \nviews on risk is referred to as risk-neutral pricing."
    },
    {
        "id": "vikas-vohra-derivatives-53",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "An end user seeking to hedge a specific underlying exposure having non-standard size \nand settlement dates would most likely trade on a(n):",
        "options": [
            "futures market.",
            "over-the-counter derivative market.",
            "exchange-traded derivative market."
        ],
        "correctAnswer": 1,
        "explanation": "53. B is correct because the terms of OTC (over -the-counter) contracts can be \ncustomized to match a desired risk exposure profile. This flexibility is important to \n\n                                                                                    \n \nend users seeking to hedge a specific existing or anticipated underlying exposure \nbased upon non-standard terms."
    },
    {
        "id": "vikas-vohra-derivatives-55",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "A forward agreement has the following terms: \n \nAt expiration, if the spot price is $282, the value to the seller is:",
        "options": [
            "–$6,000.",
            "$6,000.",
            "$14,000."
        ],
        "correctAnswer": 1,
        "explanation": "55. B is correct because the value at expiration for the seller: \n= F0(T) – ST = $285 – $282 = $3. \nHence the total value is $3 × 2,000 shares = $6,000."
    },
    {
        "id": "vikas-vohra-derivatives-56",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "A trader sells a call option on a stock index with a strike price of 2,400 for $25. The \nvalue of a one-point move in the index is $1. At expiration, the stock index is trading \nat 2,450. The trader's profit is:",
        "options": [
            "−$50.",
            "−$25.",
            "$25."
        ],
        "correctAnswer": 1,
        "explanation": "56. B is correct because the writer of a call is the seller of the call: An option is a \nderivative contract in which one party, the buyer, pays a sum of money to the other \nparty, the seller or writer, and receives the right to either buy or sell an underlying \nasset at a fixed price either on a specific expiration date or at any time prior to the \nexpiration date. The profit to the seller of the call is –Max(0,ST – X) + c0, where X \nis the exercise price, ST is the value of the underlying at expiration and c0 is the call \npremium received by the seller. Since one point is equal to one dollar the profit to \nthe call seller is: –Max(0,$2,450 – $2,400) + $25 = –$50 + $25 = –$25."
    },
    {
        "id": "vikas-vohra-derivatives-57",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "An investor buys a call for $5.75 that has a strike price of $130. If the value at \nexpiration for this call is $17.80, the price of the underlying at expiration is closest \nto:",
        "options": [
            "$112.20.",
            "$142.05",
            "$147.80."
        ],
        "correctAnswer": 2,
        "explanation": "57. C is correct because the value or \"payoff to the call buyer\" at expiration is cT = \nMax(0,ST – X) where X is the strike price, ST is the price of the underlying at \nexpiration. Given the information in the stem we get $17.80 = Max(0,ST – $130). \nHence, ST =$ 130 + $17.80 = $147.80."
    },
    {
        "id": "vikas-vohra-derivatives-58",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "An investor sells a European put option with the following characteristics: \n \nIf the price of the underlying at expiration is 1,340, the profit for the seller is:",
        "options": [
            "10.",
            "20.",
            "30."
        ],
        "correctAnswer": 2,
        "explanation": "58. C is correct because to the put seller, the profit is Π = –Max(0,X – ST) + p0, where \nX is the exercise price, ST is the price of the underlying at expiration, and p0 is the \nput price. Therefore, Π = –Max(0,(1,320 – 1,340)) + 30 = 30."
    },
    {
        "id": "vikas-vohra-derivatives-59",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "An analyst gathers the following information about three portfolios each consisting \nof two derivatives on the same underlying: \n \nAll else being equal, which portfolio will benefit from an increase in price of the \nunderlying?",
        "options": [
            "Portfolio 1",
            "Portfolio 2",
            "Portfolio 3"
        ],
        "correctAnswer": 0,
        "explanation": "59. A is correct because both a long forward position and a long call option position will \ngain from an increase in the underlying price."
    },
    {
        "id": "vikas-vohra-derivatives-60",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "All else being equal, the cost of carry on a dividend-paying stock is:",
        "options": [
            "lower than the cost of carry on a stock with no dividends.",
            "the same as the cost of carry on a stock with no dividends.",
            "higher than the cost of carry on a stock with no dividends."
        ],
        "correctAnswer": 0,
        "explanation": "60. A is correct because the benefit of the dividend reduces the costs associated with \ncarrying the stock. The cost of carry is the net of the costs and benefits related to \nowning an underlying asset for a specific period. The cost of carry is the opportunity \ncost plus other costs of ownership less benefits of ownership, and stock dividends or \nbond coupons are examples of cash flow benefits."
    },
    {
        "id": "vikas-vohra-derivatives-61",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "An investor collects the following information about a put option: \nStock price at initiation $220 \nStrike price $210 \nOption premium $9 \nAt expiration, if the price of the stock is $200, the investor's profit from buying \nthe put is:",
        "options": [
            "–$19.",
            "–$9.",
            "$1."
        ],
        "correctAnswer": 2,
        "explanation": "61. C is correct because Π = Max(0,X – ST) – p0 (profit to the put buyer), where ST  is \nthe price of the underlying at expiration, X is the strike price and p0 is the option \npremium. Therefore, the Correct calculation yields: $1 = Max(0,$210 – $200) – $9."
    },
    {
        "id": "vikas-vohra-derivatives-62",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Which of the following interest rate derivatives most likely has the largest convexity \nbias?",
        "options": [
            "Forward rate agreement on a 1-month market reference rate",
            "Forward rate agreement on a 3-month market reference rate",
            "Interest rate futures contract on a 3-month market reference rate"
        ],
        "correctAnswer": 1,
        "explanation": "62. B is correct because the discounting feature of the FRA, which is not present in the \nfutures contract, leads to a convexity bias that is greater for longer discounting \nperiods. Since the length of the discounting period depends on the maturity of the \nunderlying market reference rate, 3-month market reference rate results in a longer \ndiscounting period than the 1-month rate."
    },
    {
        "id": "vikas-vohra-derivatives-63",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "The upper bound of a call value is the:",
        "options": [
            "underlying's price.",
            "underlying’s price plus the present value of its exercise price or zero, whichever \nis greater.",
            "underlying’s price minus the present value of its exercise price or zero, whichever \nis greater."
        ],
        "correctAnswer": 0,
        "explanation": "63. A is correct because the upper no-arbitrage bound of a call price is the underlying's \nspot price."
    },
    {
        "id": "vikas-vohra-derivatives-64",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "Which party in an option contract has the right to sell the underlying stock at the \nexercise price?",
        "options": [
            "The buyer of a call option",
            "The buyer of a put option",
            "The seller of a put option"
        ],
        "correctAnswer": 1,
        "explanation": "64. B is correct, because an option is a derivative contract in which one party, the buyer, \npays a sum of money to the other party, the seller or writer, and receives the right \nto either buy or sell an underlying asset at a fixed price either on a specific expiration \ndate or at any time prior to the expiration date. The right to sell is a (another) type \nof option, referred to as a put or put option."
    },
    {
        "id": "vikas-vohra-derivatives-65",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "All else being equal, if the risk-free rate increases immediately after the inception \nof a forward contract, the value of the contract to the forward buyer will:",
        "options": [
            "decrease.",
            "stay the same.",
            "increase. \n \nSolutions"
        ],
        "correctAnswer": 2,
        "explanation": "65. C is correct because, from the example on the Bioman Contract, the higher risk-free \nrate increases the opportunity cost of a cash position and lowers the present value \nof the forward price. The present value of the forward price has decreased, \nincreasing the value to the buyer. If 𝑆0 is the spot price of the underlying asset at \ntime t, [the equation] shows the forward contract MTM value at time t, 𝑉0 (T), from \nthe long forward position's perspective:\t𝑉0(T) = 𝑆0 − 𝐹\"(T)(1\t+\t𝑟)–(1\t–\t3). \nFixed Income: Practice Pack"
    },
    {
        "id": "vikas-vohra-derivatives-1",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "If an issuer is required to retire a specified portion of the bondÕs principal each year, \nthe bond most likely:",
        "options": [
            "is callable.",
            "is a step-up note.",
            "has a sinking fund provision."
        ],
        "correctAnswer": 2,
        "explanation": "1. C is correct. The value of a European call option is directly related to the time to \nexpiration. That is, all else held equal, the value of a European call option is higher \nthe longer the time to expiration."
    },
    {
        "id": "vikas-vohra-derivatives-2",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "A five-year semiannual bond has a yield to maturity of 8%. Converted to a quarterly \nperiodicity, the yield to maturity is closest to:",
        "options": [
            "1.98%.",
            "3.92%.",
            "7.92%."
        ],
        "correctAnswer": 2,
        "explanation": "2. C is correct because the value of a European put option is directly related to the \nexercise price. Also, The value of a European put option can be either directly or \ninversely related to the time to expiration. The direct effect is more common. Option \n1 and Option 2 have the same exercise price, but Option 2 has a longer time to \nexpiration. So, Option 2 is more likely to have a higher value than Option 1. Option 2 \nand Option 3 have the same time to expiration, but Option 3 has a higher exercise \nprice. So, Option 3 is most likely to have a higher value than Option 2."
    },
    {
        "id": "vikas-vohra-derivatives-3",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "The key rate duration best measures a bond's sensitivity to a change in the:",
        "options": [
            "level of the yield-to-maturity.",
            "slope of the yield-to-worst curve.",
            "shape of the benchmark yield curve."
        ],
        "correctAnswer": 1,
        "explanation": "3. B is correct because \"[t]he value of a European put option is directly related to the \nexercise price.\""
    },
    {
        "id": "vikas-vohra-derivatives-4",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "A bond priced at 99.4 has a modified duration of 6.9 and an annual convexity statistic \nof –212. If the market yield increases by 75 basis points, the price of this bond is \nclosest to:",
        "options": [
            "93.7.",
            "94.3.",
            "94.9."
        ],
        "correctAnswer": 0,
        "explanation": "4. A is correct because –𝑐! = –Max(0,𝑆! – X) (payoff to the call seller), where –𝑐! is the \ncall value at expiration for the call seller, 𝑆! is the price of the underlying at \nexpiration, and X is the strike price. Therefore, the Correct calculation yields: –$5 = \n–Max(0,$30 – $25)."
    },
    {
        "id": "vikas-vohra-derivatives-5",
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "LM - Derivatives",
        "text": "If interest rates rise over the holding period, the total return of a coupon bond held \nuntil maturity is most likely to be:",
        "options": [
            "less than the yield to maturity at purchase.",
            "equal to the yield to maturity at purchase.",
            "greater than the yield to maturity at purchase."
        ],
        "correctAnswer": 0,
        "explanation": "5. A is correct because 𝑆\" + 𝑃\" = 𝐶\" + X / (1+r)^T. This relationship is known as put-call \nparity. Here 𝑆\" is the spot price, 𝑃\" is the put premium, X is the strike price and r is \nthe interest rate. \n𝑆\" + 𝑃\" = 𝐶\" + X / (1+r)^T \n40 + p0 = 10 + 60 / 1.03^1 \np0 = 10 + 60 / 1.03 - 40 \n= 28.25242718 = 28.25"
    }
];
