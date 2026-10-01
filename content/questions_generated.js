const SAMPLE_QUESTIONS = [
    {
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
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
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM1 - Organizational Forms, Corporate Issuer Features, and Ownership",
        "text": "Owners have limited liability in a:",
        "options": [
            "corporation.",
            "sole proprietorship.",
            "general partnership."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because owners in a corporation have limited liability."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM1 - Organizational Forms, Corporate Issuer Features, and Ownership",
        "text": "Compared to those of public companies, share issuances of private companies most likely:",
        "options": [
            "raise larger amounts of capital.",
            "include a larger number of investors.",
            "include investors with longer holding periods."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because to raise more capital after listing, public companies may issue additional shares in the capital markets, typically raising very large amounts from many investors who may then actively trade shares among themselves in the secondary market. In contrast, private companies finance much smaller amounts in the primary market (private debt or equity) with far fewer investors who have much longer holding periods."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM1 - Organizational Forms, Corporate Issuer Features, and Ownership",
        "text": "Double taxation of profits is most likely a concern for owners in:",
        "options": [
            "corporations.",
            "limited partnerships.",
            "general partnerships."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because tax disadvantage for owners in countries with double taxation is a key feature of corporations. In most countries, corporations are taxed directly on their profits. In many countries, shareholders pay an additional tax on distributions (dividends) that are passed on to them. Economists refer to this as the double taxation of corporate profits."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM1 - Organizational Forms, Corporate Issuer Features, and Ownership",
        "text": "In a limited partnership, business operations are the responsibility of:",
        "options": [
            "the general partner only.",
            "the limited partners only.",
            "both the general partner and the limited partners."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because key features of limited partnerships include: • GP operates the business, having unlimited liability, • LPs have limited liability but lack control over business operations."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM1 - Organizational Forms, Corporate Issuer Features, and Ownership",
        "text": "Compared to private corporations, which of the following is a typical characteristic of public corporations?",
        "options": [
            "A government is a shareholder",
            "Shares are listed on a stock exchange",
            "Transfer of ownership between investors is more difficult"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because when it comes to corporations, 'public' and 'private' are typically defined by whether the company's equity is listed on a stock exchange, although in some countries whether a company is considered public or not may depend on its number of shareholders, irrespective of whether it is listed."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM1 - Organizational Forms, Corporate Issuer Features, and Ownership",
        "text": "The purchase of which of the following shares most likely requires investors to be accredited?",
        "options": [
            "Public company shares only",
            "Private company shares only",
            "Both public company shares and private company shares"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because private company investors may be limited to qualified or so-called accredited investors or sophisticated investors, or those deemed to be able and willing by regulatory authorities to assume the greater risk of a non-public offering."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM1 - Organizational Forms, Corporate Issuer Features, and Ownership",
        "text": "Which of the following statements about corporations is most accurate?",
        "options": [
            "Upside return potential is unlimited for both equity holders and debtholders",
            "Equity is riskier than debt from the perspective of both investors and issuers",
            "Losses for both equity holders and debtholders are limited to their initial investment"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because shareholder losses are limited to their initial investment. For both equity holders and debtholders, their initial investment represents their maximum possible loss."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM2 - Investors and Other Stakeholders",
        "text": "A corporation's stakeholders most likely include:",
        "options": [
            "shareholders only.",
            "controlling shareholders only.",
            "all shareholders and all employees."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the primary stakeholder groups of a corporation consist of shareholders, creditors, managers (or executives), other employees, board of directors, customers, suppliers, and governments/regulators (and, by extension, affected individuals and community groups)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM2 - Investors and Other Stakeholders",
        "text": "Which of the following company stakeholders is most likely exposed to the greatest information asymmetry when compared to the company's management?",
        "options": [
            "A bank lender",
            "A public debtholder",
            "A member of the board"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because public debtholders do not have access to non-public information. Public debtholders (or bondholders) rely on public information and credit rating agency determinations to make their investment decisions. Unlike shareholders, debtholders do not hold voting power, and they typically have limited influence over a company's day-to-day operations."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM2 - Investors and Other Stakeholders",
        "text": "With respect to ESG implementation, which of the following is most likely a social factor?",
        "options": [
            "Board composition",
            "Pollution prevention",
            "Management of human capital"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because social factors considered in ESG implementation generally pertain to the management of the human capital of a business, including human rights and welfare concerns in the workplace; product development; and, in some cases, community impact."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM2 - Investors and Other Stakeholders",
        "text": "The interests of creditors are least likely aligned with the interests of:",
        "options": [
            "suppliers.",
            "shareholders.",
            "long-term customers."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the difference in debt versus equity claims gives rise to potential conflicts of interest. For example, debtholders with a fixed claim tend to be risk averse and prefer that the corporation take actions to ensure sufficient cash flow to meet its debt obligations. For this reason, debtholders tend to prefer that a company raise more equity and limit shareholder distributions. Shareholders, however, tend to prefer greater leverage and shareholder distributions rather than dilutive equity issuance. This potential conflict is greater for long-term debt, as the passage of time exposes debtholders to changes in business conditions, strategy, and management behavior. As a result, long-term creditors are more likely to impose contractual limits on leverage and shareholder distributions."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM2 - Investors and Other Stakeholders",
        "text": "Which of the following stakeholder groups is most likely to have the highest risk tolerance with respect to the volatility of a company's performance?",
        "options": [
            "Creditors",
            "Suppliers",
            "Shareholders"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because shareholders are the most junior class of capital providers; in case of a company bankruptcy, shareholders receive proceeds only after all creditors' claims are paid. In contrast to creditors and suppliers, shareholders generally are inclined to tolerate higher risks in return for higher return potential from strong company performance."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM3 - Corporate Governance: Conflicts, Mechanisms, Risks, and Benefits",
        "text": "Which of the following is most accurate?",
        "options": [
            "Risk appetites are similar among private lenders",
            "Staggered boards provide continuous implementation of strategy and oversight",
            "A company's CEO is responsible for implementing the company's strategy under the oversight of the company's shareholders"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the positive aspect of a staggered board is that it provides continuous implementation of strategy and oversight without constantly being reassessed by new board members, which otherwise risks bringing short-termism into company strategy."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM3 - Corporate Governance: Conflicts, Mechanisms, Risks, and Benefits",
        "text": "Which of the following is most likely a good corporate governance practice?",
        "options": [
            "Disclosing related-party transactions",
            "Rewarding managers for being more risk-averse than shareholders",
            "Designing remuneration policies that encourage managers to focus on short-term stock performance"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because good corporate governance policies on conflicts of interest and related-party transactions require directors and managers to disclose any actual or potential conflict of interest related to the company, as well as any material interests in a transaction that may affect the company."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM3 - Corporate Governance: Conflicts, Mechanisms, Risks, and Benefits",
        "text": "With respect to corporate governance, which of the following represents a principal–agent conflict?",
        "options": [
            "Shareholders and creditors have different investment risk tolerances",
            "Managers seek to maximize their benefits to the detriment of shareholders' interests",
            "Controlling shareholders place their interests ahead of minority shareholders' interests"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because a principal-agent relationship is created when a principal hires an agent to perform a particular task or service. The principal-agent relationship involves obligations, trust, and expectations of loyalty; the agent is expected to act in the best interests of the principal. In a company, principal-agent relationships often lead to conflicts when managers do not act in the best interests of shareholders. The central duty of directors and managers is to act in the best interest of shareholders. Managers may seek to maximize their personal benefits to the detriment of shareholders' interests."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM3 - Corporate Governance: Conflicts, Mechanisms, Risks, and Benefits",
        "text": "Which of the following board committees is most likely responsible for recommending the appointment of an external auditor and proposing its remuneration?",
        "options": [
            "Audit committee",
            "Nominating committee",
            "Remuneration committee"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the audit committee is also responsible for recommending the appointment of an independent external auditor and proposing its remuneration."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM3 - Corporate Governance: Conflicts, Mechanisms, Risks, and Benefits",
        "text": "Managers seeking to retain their jobs by pursuing initiatives they are uniquely suited to manage is most likely an example of:",
        "options": [
            "self-dealing.",
            "entrenchment.",
            "empire building."
        ],
        "correctAnswer": 1,
        "explanation": "Incorrect because empire building relates to management compensation and status that are typically tied to business size (e.g., total revenues, number of employees), which can incentivize managers to seek 'growth for growth's sake,' such as acquisitions that do not increase shareholder value."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM3 - Corporate Governance: Conflicts, Mechanisms, Risks, and Benefits",
        "text": "Which of the following is most likely a primary role of a corporate board of directors?",
        "options": [
            "Voting common shares",
            "Implementing corporate strategy",
            "Appointing the company's top managers"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because a corporate board has many roles including appointing the top management of the company. The board is accountable primarily to shareholders and is responsible for the proper governance of the company. The board guides managers on the company's strategic direction, oversees and monitors management's actions in implementing the strategy, and evaluates and rewards or disciplines management performance. The board also supervises the company's audit, control, and risk management functions and ensures the adoption of proper governance systems and compliance with all applicable laws and regulations."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM3 - Corporate Governance: Conflicts, Mechanisms, Risks, and Benefits",
        "text": "Which of the following features of an executive remuneration plan most likely indicates a misalignment of interests between executives and investors? Executive payouts that:",
        "options": [
            "consist of only cash and no equity.",
            "are consistent with those of similar companies in the same industry.",
            "exhibit significant variation over time based on company performance."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because conflicts arise where the interests of a principal and an agent diverge. In practice, compensation is the main tool used to create alignment of interests between management and board directors on the one hand and shareholders on the other. In principle, management compensation (which may include grants of shares and options to purchase shares in the company) is intended to motivate managers to work hard to maximize shareholder value. However, the alignment of interests between managers and shareholders is rarely perfect. If we consider the typical elements of management compensation, we can identify common examples of misalignment or conflicts. If an executive remuneration plan offers cash only, the incentives between management and investors and other stakeholders may be misaligned."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM3 - Corporate Governance: Conflicts, Mechanisms, Risks, and Benefits",
        "text": "Which of the following board committees is among the three most commonly recommended by corporate governance codes?",
        "options": [
            "Risk committee",
            "Creditor committee",
            "Nominating committee"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the three most common board committees (sometimes referred to as \"core committees\"), recommended by most corporate governance codes and required by some stock exchanges include Audit Committee, Nominating/Governance Committee and, Compensation/Remuneration Committee."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM3 - Corporate Governance: Conflicts, Mechanisms, Risks, and Benefits",
        "text": "Information asymmetry between managers and shareholders is most likely higher if a company:",
        "options": [
            "makes products of greater complexity.",
            "has higher levels of institutional ownership.",
            "provides more transparent accounting information."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because whereas all companies have a certain level of asymmetric information, companies with comparatively high asymmetry in information include those with complex products. These include high-tech companies, companies with little transparency in financial accounting information, and companies with lower levels of institutional ownership. So, companies producing more complex products are likely to have higher levels of information asymmetry between managers and shareholders."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM3 - Corporate Governance: Conflicts, Mechanisms, Risks, and Benefits",
        "text": "Which of the following best reflects a misalignment of interests between managers/directors and shareholders?",
        "options": [
            "A compensation package relying too little on stock options can motivate excessive risk-taking behavior by management",
            "When the overall level of board director compensation is low, directors may avoid speaking out against management in the interest of shareholders",
            "Management compensation which is high and tied to business size may lead to managers pursuing acquisitions that might not increase shareholder value"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because when management compensation are high and tied to the size of the business, it can incentivize managers to seek \"growth for growth's sake,\" such as acquisitions that do not increase shareholder value."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM4 - Working Capital and Liquidity",
        "text": "An analyst gathers the following information (in £ millions) about a company:\n| Cash | 50 |\n| Short-term marketable investments | 37 |\n| Receivables | 15 |\n| Current assets | 114 |\n| Current liabilities | 100 |\nThe quick ratio of this company is closest to:",
        "options": [
            "0.87.",
            "1.02.",
            "1.14."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the quick ratio (also known as the acid-test ratio) is the ratio of the quick assets to current liabilities. Quick assets are those assets that can be most readily converted to cash.\nQuick ratio = (Cash + Short-term marketable investments + Receivables)/Current liabilities\" = (50 + 37 + 15)/100 = 1.02."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM4 - Working Capital and Liquidity",
        "text": "An analyst gathers the following liquidity indicators for a company and its peer group:\n| Indicator | Company | Peer Group |\n| Quick ratio | 0.9 | 1.1 |\n| Operating cycle (days) | 70 | 73 |\n| Cash conversion cycle (days) | 40 | 38 |\nAll else being equal, the company's liquidity compares favorably to the peer group based on the:",
        "options": [
            "quick ratio.",
            "operating cycle.",
            "cash conversion cycle."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because based on the operating cycle, the company's 70 days compares favorably to 73 days for its peer group. The operating cycle is a measure of the time needed to convert raw materials into cash from a sale. In general, the shorter these cycles the greater a company's cash-generating ability and the less its need for liquid assets or outside finance. Of the three measures, the operating cycle is the only measure to which the company has a favorable comparison."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM4 - Working Capital and Liquidity",
        "text": "Which of the following is most likely classified as a drag on liquidity?",
        "options": [
            "Tight credit market conditions",
            "Reduced trade credit availability",
            "Limits on short-term lines of credit"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because a drag on liquidity is when receipts lag, creating pressure from the decreased available funds. Major drags on receipts involve pressures from credit management and deterioration in other assets such as tight credit. When economic conditions make capital scarcer, short-term debt becomes more expensive to arrange and use."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM4 - Working Capital and Liquidity",
        "text": "An analyst gathers the following information (in $ millions) about three peer companies:\n| Company | Year 2 Credit Sales | Year 2 Average Receivables Balance | Year 1 Credit Sales | Year 1 Average Receivables Balance |\n| 1 | 6.5 | 3.0 | 5.0 | 2.5 |\n| 2 | 4.0 | 1.5 | 3.0 | 1.0 |\n| 3 | 3.0 | 1.0 | 2.5 | 0.8 |\nWhich company reduced the average time to collect accounts receivable between Year 1 and Year 2?",
        "options": [
            "Company 1",
            "Company 2",
            "Company 3"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the average time it took Company 1 to collect its accounts receivable decreased from 183 days in Year 1 to 168 days in Year 2. Number of days receivable = Accounts receivable / (Sales on credit / 365). In Year 1 number of days receivable = 2,500,000 / (5,000,000 / 365) = 183 days. In Year 2 number of days receivable = 3,000,000 / (6,500,000 / 365) = 168 days."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM4 - Working Capital and Liquidity",
        "text": "Which of the following is best described as a secondary source of liquidity?",
        "options": [
            "Bank line of credit",
            "Cash flow management",
            "Renegotiated debt contract"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the main difference between the primary and secondary sources of liquidity is that using a primary source is not likely to affect the normal operations of the company, whereas using a secondary source may result in a change in the company's financial and operating positions. Secondary sources include: negotiating debt contracts, relieving pressures from high interest payments or principal repayments."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM4 - Working Capital and Liquidity",
        "text": "An analyst gathers the following information about a company:\n| Metric | Year 1 | Year 2 |\n| Days sales outstanding | 85 | 76 |\n| Days of inventory on hand | 136 | 129 |\n| Days payable outstanding | 29 | 13 |\nThe company's cash conversion cycle in Year 2 is:",
        "options": [
            "shorter than the cash conversion cycle in Year 1.",
            "the same as the cash conversion cycle in Year 1.",
            "longer than the cash conversion cycle in Year 1."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the cash conversion cycle is the same for both years. The cash conversion cycle equals Days of inventory on hand + Days sales outstanding – Days payable outstanding. In Year 1 the cash conversion cycle was 85 + 136 – 29 = 192 days. In Year 2 the cash conversion cycle was 76 + 129 – 13 = 192 days."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM5 - Capital Investments and Capital Allocation",
        "text": "An analyst gathers the following information about a project:\n| Initial outlay | €100 million |\n| Cash flow at end of Year 1 | €65 million |\n| Cash flow at end of Year 2 | €65 million |\n| Cash flow at end of Year 3 | €65 million |\nIf the required rate of return is 15%, the NPV is closest to:",
        "options": [
            "€48 million.",
            "€95 million.",
            "€148 million."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because it discounts all the cash flows at the required return and sums them as follows:\nNPV = sum(t=1 to n) [CFt / (1 + r)^t] – Outlay, where CFt = After-tax cash flow at time t, r = Required rate of return for the investment, Outlay = Investment cash flow at time zero, NPV = 65/(1 + 15%) + 65/(1 + 15%)^2 + 65/(1 + 15%)^3 – 100 ≈ 56.52 + 49.15 + 42.74 – 100 = 148.41 ≈ 48."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM5 - Capital Investments and Capital Allocation",
        "text": "The NPV of a new project is expected to be –$0.20 million. An incremental investment of $0.40 million would give management the flexibility to switch to a lower cost input in the future. If this option has an estimated value of $0.80 million, the value of the project including the option is:",
        "options": [
            "$0.20 million.",
            "$0.40 million.",
            "$1.00 million."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the NPV, including the real option, should be:\nProject NPV = NPV (based on DCF alone) – Cost of options + Value of options.\nProject NPV = –$0.2 million – $0.4 million + $0.8 million = $0.2 million."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM5 - Capital Investments and Capital Allocation",
        "text": "A company is deciding whether to invest in one of two mutually exclusive projects with positive NPVs. If Project 1 has a higher NPV but a lower IRR than Project 2, the company should:",
        "options": [
            "prefer Project 1.",
            "prefer Project 2.",
            "be indifferent between Project 1 and Project 2."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because when the choice is between two mutually exclusive projects and the NPV and IRR rank the two projects differently, the NPV criterion is strongly preferred. As a practical matter, once a corporation has the data to calculate the NPV, it is fairly trivial to then calculate the IRR and other capital allocation criteria. However, the most appropriate and theoretically sound criterion is the NPV."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM5 - Capital Investments and Capital Allocation",
        "text": "Management most likely has the least amount of discretion when deciding to invest in a(n):",
        "options": [
            "regulatory project.",
            "expansion project.",
            "going concern project."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because unlike going concern and expansion projects, for which management has discretion in deciding whether or not to invest, regulatory and compliance projects are required by third parties, such as government regulatory bodies, to meet safety and regulatory compliance standards."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM5 - Capital Investments and Capital Allocation",
        "text": "The ability to abandon an investment if it has produced disappointing financial results is most likely a type of:",
        "options": [
            "sizing option.",
            "flexibility option.",
            "fundamental option."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because an abandonment option is a type of sizing option. If after investing the company can abandon the investment if the financial results are disappointing, it has an abandonment option. At some future date, if the cash flow from abandoning an investment exceeds the present value of the cash flows from continuing the investment, the company should exercise the abandonment option."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM5 - Capital Investments and Capital Allocation",
        "text": "Which statement regarding capital investments is correct?",
        "options": [
            "Going concern projects are investments to increase the size of the business",
            "Regulatory compliance projects seldom increase a firm's expenses with no added revenue",
            "Capital investments are usually necessary if a firm extends its existing operations to adjacent products and services"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because capital investments are also usually necessary if an established firm decides to extend its existing operations to adjacent products and services or expand to new regions or markets."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM5 - Capital Investments and Capital Allocation",
        "text": "Maintenance capital expenditures include:",
        "options": [
            "continuous improvements of existing facilities.",
            "anti-money-laundering training for employees.",
            "investing in solar panel production to benefit from government subsidies."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because continuous improvements of existing facilities are going concern projects. Going concern projects, often known as maintenance capital expenditures, are investments to continue the company's current operations and maintain the existing size of the business. Common going concern projects include replacing assets nearing the end of their useful life, maintaining IT hardware and software, and continuous improvements of existing facilities."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM5 - Capital Investments and Capital Allocation",
        "text": "Which of the following is a common capital allocation pitfall?",
        "options": [
            "Ignoring sunk costs",
            "Anchoring capital investment budgets to prior year amounts",
            "Considering different states of the world for investment alternatives"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because this is often a sign of inertia, which is a common mistake in capital allocation. Inertia is the result of management anchoring their capital investment budgets to prior year amounts. If capital investment each year is static or increasing despite falling returns on investment, the analyst should question the issuer's justification for its capital investment and whether management should be considering alternative uses."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM5 - Capital Investments and Capital Allocation",
        "text": "With respect to capital budgeting, which of the following statements is most accurate? The internal rate of return calculation assumes that a project's interim cash flows are reinvested at the project's:",
        "options": [
            "hurdle rate.",
            "internal rate of return.",
            "weighted average cost of capital."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the IRR assumes reinvestment at the IRR. Mathematically, whenever you discount a cash flow at a particular discount rate, you are implicitly assuming that you can reinvest a cash flow at that same discount rate."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM5 - Capital Investments and Capital Allocation",
        "text": "When evaluating potential capital investments, the most appropriate discount rate is the:",
        "options": [
            "overall cost of capital for the company.",
            "individual investment's required rate of return.",
            "cost of debt or cost of equity, depending on the financing source."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the required rate of return for an investment is the rate of return that a corporate issuer's investors could earn on a similarly risky investment."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM5 - Capital Investments and Capital Allocation",
        "text": "An analyst gathers the following information (in $ millions) about two mutually exclusive capital projects:\n| Project | NPV at 9% Required Rate of Return | NPV at 12% Required Rate of Return | NPV at 15% Required Rate of Return |\n| Project 1 | 50 | 17 | -10 |\n| Project 2 | 61 | 13 | -31 |\nProject 1 should be selected for investment if the required rate of return is:",
        "options": [
            "9%.",
            "12%.",
            "15%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the decision rule for the NPV is: Invest if NPV > 0. In the case of mutually exclusive investment projects, a company should choose the one with the higher NPV."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM5 - Capital Investments and Capital Allocation",
        "text": "A company with a required rate of return of 12% is considering a capital project with the following cash flows (in millions):\n| Initial Outlay | Year 1 | Year 2 |\n| -£150 | £8 | £175 |\nThe expected IRR for the project is closest to:",
        "options": [
            "10.7%.",
            "12.0%.",
            "13.2%."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the IRR is the discount rate that makes the present value of the future after-tax cash flows equal the investment outlay or:\nsum(t=1 to n) [CFt / (1 + IRR)^t] = Outlay,\nwhere IRR is the internal rate of return. Solved using the following calculator inputs: CF0 = –150, CF1 = 8, CF2 = 175, Calculate IRR = 10.7119, rounded to 10.7%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "According to the Modigliani–Miller Proposition I without taxes, when a firm increases the proportion of debt in its capital structure, the firm value:",
        "options": [
            "decreases.",
            "remains unchanged.",
            "increases."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Modigliani and Miller proved that changing the capital structure does not affect firm value. The value of a firm is thus determined not by the securities it issues but, rather, by its expected future cash flows."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "Which of the following is defined as the sensitivity of a firm's operating profit to a change in its revenues?",
        "options": [
            "Total leverage",
            "Financial leverage",
            "Operating leverage"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because operating leverage captures the sensitivity of operating profit, proxied by EBIT, to a change in revenues."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "Consider the following information about a company:\n| Market value of debt outstanding | £15,000 |\n| Market value of company | £40,000 |\n| Cost of debt | 4.0% |\n| Unlevered WACC | 9.0% |\n| Tax rate | 25% |\nBased on the Modigliani–Miller propositions, the company's cost of equity is closest to:",
        "options": [
            "10.4%.",
            "11.3%.",
            "12.0%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Modigliani and Miller also show that the cost of equity for the same company with debt is: re = r0 + (r0 – rd)(1 – t)(D/E), where:\nre = cost of equity\nr0 = cost of capital for a company financed only with equity\nrd = cost of debt\nD = market value of debt\nE = market value of equity.\nCost of equity = 0.09 + (0.09 – 0.04)×(1 – 0.25)×(£15,000/(£40,000 – 15,000)) = 0.1125 ≈ 11.3%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "A company increases its debt from 20% to 60% of its capital structure. Based on the Modigliani and Miller proposition (without taxes) regarding capital structure, the WACC of the company:",
        "options": [
            "decreases.",
            "remains the same.",
            "increases."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the Modigliani and Miller proposition implies that higher leverage raises the cost of equity but does not change firm value or WACC."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "All else being equal, a company most likely has a reduced debt capacity when its:",
        "options": [
            "current ratio increases.",
            "leverage ratio decreases.",
            "interest coverage ratio decreases."
        ],
        "correctAnswer": 2,
        "explanation": "Incorrect because a higher, not lower, leverage ratio would indicate a reduced debt capacity (i.e., ability for a company to take additional debt). Firms with higher proportions of debt in their capital structures face a higher probability of default and have less ability to service additional debt than underleveraged firms."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "Which of the following combination of factors most likely increases a company's ability to support debt in its capital structure?",
        "options": [
            "High revenue, low cash flow volatility, and a low level of fungible assets",
            "High revenue, low operating leverage, and a high level of fungible assets",
            "Low cash flow volatility, low operating leverage, and a low level of fungible assets"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because an increased ability to support debt is indicated by high revenue, low operating leverage, and greater fungible assets."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "According to the pecking order theory, company managers most likely prefer to:",
        "options": [
            "issue debt as the last resort.",
            "raise equity first to preserve cash-flow.",
            "rely on internal financing over new equity."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the pecking order theory suggests that managers choose methods of financing according to a hierarchy that gives first preference to methods with the least potential information content (internally generated funds) and lowest preference to the form with the greatest potential information content (public equity offerings). In brief, managers prefer internal financing. If internal financing is insufficient, managers next prefer debt, then equity."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "The source of capital that most likely benefits from a tax shield is:",
        "options": [
            "debt.",
            "equity.",
            "preferred equity."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because if interest can be deducted in full, the tax deductibility of debt reduces the effective marginal cost of debt to reflect the income shielded from taxation and the marginal cost of debt is rd(1 – t). The cost of debt capital is the only cost of capital that can benefit from a tax shield."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "An analyst gathers the following information about three companies in the same industry but at different stages of their life cycles:\n| Company | Year 1 Revenue ($ millions) | Year 2 Revenue ($ millions) | Year 3 Revenue ($ millions) | Year 3 Debt/Capital |\n| Company 1 | 10 | 11 | 9 | 0% |\n| Company 2 | 30 | 36 | 44 | 8% |\n| Company 3 | 100 | 95 | 97 | 25% |\nThe company in the growth phase of its lifecycle is most likely:",
        "options": [
            "Company 1.",
            "Company 2.",
            "Company 3."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because since the company's revenue is growing steadily (20% in the first year and 22% subsequently) and there is already a small amount of debt in the capital structure, this company is most likely in its growth phase."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "Debt as a proportion of total capital is most likely greatest in which of the following life-cycle stages of a company?",
        "options": [
            "Start-up",
            "Growth",
            "Mature"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because at the maturity stage, the company becomes able to support low-cost debt, often on an unsecured basis. From the company's perspective, debt financing is likely to be more attractive than higher-cost equity financing."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "A corporate treasurer gathers the following information about her company:\n| Debt-to-equity ratio based on market value | 43% |\n| Debt-to-equity ratio based on book value | 52% |\nThe weight of debt in the company's target capital structure is closest to:",
        "options": [
            "34%.",
            "43%.",
            "52%."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because a simple way of transforming a debt-to-equity ratio (D/E) into a weight—that is, D/(D + E)—is to divide D/E by 1 + D/E. While optimal capital structure is calculated using the market value of equity and debt, company capital structure targets often use book value. As such, the weight of debt in the company's target capital structure is most likely 0.52 / (1 + 0.52) = 34.21% ≈ 34%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "An analyst gathers the following information about a US company:\n| Market value of debt | $550 million |\n| Market value of preferred stock | $200 million |\n| Market value of common stock | $450 million |\n| Before-tax cost of debt | 7% |\n| Cost of preferred stock | 9% |\n| Cost of common stock | 12% |\n| Marginal tax rate | 25% |\nThe company's WACC is closest to:",
        "options": [
            "8.0%.",
            "8.4%.",
            "9.2%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the WACC is calculated as follows:\nWACC = wdrd (1 – t) + wprp + were\nWhere:\nwd = proportion of debt = 550 / sum of total capital = 550 / (550 + 200 + 450) = 0.458\nrd = before tax cost of debt = 7%\nt = tax rate = 25%\nwp = proportion of preferred stock = 200 / (550 + 200 + 450) = 0.167\nrp = cost of preferred stock = 9%\nwe = proportion of common stock = 450 / (550 + 200 + 450) = 0.375\nre = cost of common stock = 12%.\nWACC = 0.458 × 0.07 × (1 – 0.25) + 0.167 × 0.09 + 0.375 × 0.12 = 0.024 + 0.0150 + 0.045 = 0.0840 = 8.4%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "According to Modigliani–Miller Proposition I without taxes, all else being equal, the value of a levered firm increases as its:",
        "options": [
            "unlevered value decreases.",
            "debt-to-equity ratio decreases.",
            "expected future cash flows increase."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Modigliani–Miller Proposition I without taxes, the value of a company is determined solely by its expected future cash flows (not its relative use of debt versus equity capital). It's a firm's future cash flows that are the primary driver of value, not capital structure."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "Based on Modigliani–Miller's Proposition II with taxes, if a firm has debt in its capital structure and the tax rate increases, the firm's cost of equity will:",
        "options": [
            "decrease.",
            "remain the same.",
            "increase."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because in the Modigliani–Miller model, the cost of equity, re = r0 + (r0 – rd) × (1 – t) × (D/E). If the tax rate, t, increases, the product of the terms will decrease, decreasing the cost of equity. When t is not zero, the term (1 – t) is less than 1 and serves to reduce the cost of levered equity. The cost of equity still rises as the company increases the amount of debt in its capital structure, but it rises at a slower rate than in the no-tax case."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "A company's cost of equity capital exceeds its cost of debt capital. If interest expenses are tax deductible, which of the following most likely decreases the company's weighted average cost of capital? An increase in the:",
        "options": [
            "weighting of equity",
            "pre-tax cost of debt",
            "marginal corporate tax rate"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the weighted average cost of capital is WACC = [(1 – Tax rate) × Pre-tax cost of debt × Weighting of debt] + (Cost of equity × Weighting of equity). Therefore, an increase in the tax rate decreases the pre-tax cost of debt which decreases the WACC."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "An analyst gathers the following information about a corporation:\n| Before-tax required rate of return of debt investors | 6% |\n| Required rate of return of equity investors | 10% |\n| Tax rate | 15% |\nIf the capital structure of the corporation is 40% debt and 60% equity, the WACC of the corporation is:",
        "options": [
            "7.50%.",
            "8.04%.",
            "8.40%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because WACC = [(1 – Tax rate) × Pre-tax cost of debt × Weighting of debt] + (Cost of equity × Weighting of equity) = (1 – 15%) × 6% × 40% + 10% × 60% = 8.04%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "With respect to capital structure, operating leverage is:",
        "options": [
            "an industry factor.",
            "an issuer-specific factor.",
            "a financial market factor."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because operating leverage is an issuer-specific factor. Debt and equity investors consider the risk and return profile of an issuer and adjust their required rates of return relative to base rates or broad averages by evaluating risk factors, including the following:\n1. Sales risks\n2. Profitability risks (operating leverage)\n3. Financial leverage and interest coverage\n4. Collateral/type of assets owned by the firm"
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "Target capital structure is often expressed using book values of equity and debt because:",
        "options": [
            "capital structure policy is not aligned to measures used by third parties.",
            "market values can fluctuate substantially and seldom impact the appropriate level of borrowing.",
            "for management, the primary concern is the amount and types of capital invested in the company, not by the company."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because market values can fluctuate substantially and seldom impact the appropriate level of borrowing."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "A company's required rate of return is its:",
        "options": [
            "IRR.",
            "WACC.",
            "cost of equity."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because an issuer's weighted-average cost of capital (WACC) blends its costs of debt and equity to obtain a single cost of capital. The WACC, after adjusting for any project-specific risks, is what issuers use as r in NPV analysis and as the hurdle rate for IRR analysis."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "Under the static trade-off theory, the optimal capital structure maximizes:",
        "options": [
            "firm value.",
            "total equity value.",
            "the tax shield from debt."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the debt level corresponding to D, which maximizes firm value, and the associated level of equity are referred to as the optimal capital structure."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "An increased use of debt may result in a reduction in the agency costs of equity according to the:",
        "options": [
            "free cash flow hypothesis.",
            "pecking order theory of capital structure.",
            "static trade-off theory of capital structure."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because in the case of capital structure decisions, savings in the agency costs of equity may arise with the increased use of debt. Similarly, the more financially leveraged a company, the less freedom for managers to either take on more debt or spend cash unwisely. This is the foundation of Michael Jensen's (1986) free cash flow hypothesis."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "When a company's target capital structure is unknown to analysts, which of the following is the least appropriate method to estimate the capital structure weights?",
        "options": [
            "Using the book values of capital components",
            "Using current market values of capital components",
            "Analyzing management's statements to infer the target capital structure"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because using market value weights based on the current capital components is the baseline method recommended. Because the book value of the capital components based on historical values of the capital sources likely will be significantly different from market value, book value is not one of the three recommended approaches."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "All else being equal, if interest on a company's debt is tax deductible, an increase in the tax rate will most likely:",
        "options": [
            "decrease the WACC.",
            "have no impact on the WACC.",
            "increase the WACC."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because if interest can be deducted in full, the tax deductibility of debt reduces the effective marginal cost of debt to reflect the income shielded from taxation and the marginal cost of debt is rd(1 – t). A higher tax rate would result in an increase in the tax deductibility of interest and result in a lower cost of debt and WACC."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM6 - Capital Structure",
        "text": "All else being equal, if a US company's marginal tax rate increases, the company's WACC will most likely:",
        "options": [
            "decrease.",
            "remain unchanged.",
            "increase."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because an increase in the marginal tax rate will cause the after-tax cost of debt to decrease (with no effect on the cost of preferred or common), all else being equal. WACC is calculated using the following formula:\nWACC = wd × rd × (1 – t) + wp × rp + we × re\nwhere\nwd = the proportion of debt the company uses when it raises new funds\nrd = the before-tax marginal cost of debt\nt = the company's marginal tax rate\nwp = the proportion of preferred stock the company uses when it raises new funds\nrp = the marginal cost of preferred stock\nwe = the proportion of equity the company uses when it raises new funds\nre = the marginal cost of equity\nAn increase in the tax rate causes the value of (1 – t) to decrease resulting in a decrease in both the after-tax cost of debt and the WACC."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM7 - Business Models",
        "text": "A pricing approach where a company simultaneously charges different prices to different customers based on purchase volume is best referred to as:",
        "options": [
            "tiered pricing.",
            "bundled pricing.",
            "dynamic pricing."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because economists use the term 'price discrimination' when firms charge different prices to different customers. Tiered pricing charges different prices to different buyers, most commonly based on volume purchased."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM7 - Business Models",
        "text": "The sequence of processes involved in the creation of a product, both within and external to a firm, including all the steps involved in producing a physical product and delivering it to the end customer, regardless of whether those steps are performed by a single firm, is referred to as the:",
        "options": [
            "value chain.",
            "supply chain.",
            "business model."
        ],
        "correctAnswer": 1,
        "explanation": "B is correct. A company's supply chain is the network or system inside and outside the company involved in producing a product or service and delivering it to an end user.\nA is incorrect because value chain refers to the systems and processes within a firm that create value for its customers. It is the 'how' aspect of a business model.\nC is incorrect because the business model is a description of how a business works. It includes descriptions of the core customer base, the product or service that the business offers, the key resources and assets the business uses, and the main partners and suppliers of the business."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM7 - Business Models",
        "text": "The sequence of processes involved in the creation of a product, both within and external to a firm, is best referred to as a:",
        "options": [
            "value chain.",
            "supply chain.",
            "business model."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because a supply chain refers to the sequence of processes involved in the creation of a product, both within and external to a firm. A supply chain includes all the steps involved in producing and delivering a physical product to the end customer, regardless of whether those steps are performed by a single firm."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM7 - Business Models",
        "text": "The business model of a knowledge aggregation company that allows its users to contribute directly to online content is best referred to as a:",
        "options": [
            "platform business model.",
            "marketplace business model.",
            "crowdsourcing business model."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because crowdsourcing business models enable users to contribute directly to a product, service, or online content. Examples include: contests and competitions; online gaming; product development, such as open source software; knowledge aggregation, such as Wikipedia and Waze/Google Maps; fan or hobbyist clubs; and networks of tradespersons or professionals."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM7 - Business Models",
        "text": "Which of the following pricing models is most likely used when a firm willingly sacrifices margins to build market share?",
        "options": [
            "Dynamic pricing",
            "Freemium pricing",
            "Penetration pricing"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because penetration pricing is an example of discount pricing and is used when a firm willingly sacrifices margins in order to build scale and market share."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM7 - Business Models",
        "text": "A company manufacturing and selling a product using someone else's brand name in return for a royalty most likely operates:",
        "options": [
            "under a franchise model.",
            "as a contract manufacturer.",
            "under a licensing arrangement."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because a company will produce a product using someone else's brand name in return for a royalty under a licensing arrangement."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM7 - Business Models",
        "text": "The flow of finished goods from manufacturer to wholesaler, retailer, and finally to the end customer best describes a(n):",
        "options": [
            "direct sales strategy.",
            "omnichannel strategy.",
            "traditional channel strategy."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because, for 'product' businesses, the traditional channel strategy is typically reflected in the flow of finished goods (e.g., from manufacturer to wholesaler, retailer, and end customer), each with its own physical facilities and with the product sold and purchased at each stage."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM7 - Business Models",
        "text": "When analyzing a company, analysts should:",
        "options": [
            "ignore the company's business model.",
            "develop their own understanding of the company's business model.",
            "rely on management's description of the company's business model."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because a clearly described business model helps the analyst understand a business: how it operates, its strategy, target customers, key partners, prospects, risks, and financial profile. Rather than rely on management's description of its business model, analysts should develop their own understanding."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM7 - Business Models",
        "text": "\"Economic\" profit is best described as the return to a firm's owners:",
        "options": [
            "in the form of retained earnings and distributions to the owners.",
            "after corporate taxes and taxes on distributions have been paid.",
            "in excess of what they could have earned elsewhere on different investments."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because an issuer's income statement distinguishes between its financial income or net income once fixed obligations have been met and its 'economic' profit, or return to a firm's owners in excess of what they could have earned elsewhere on different investments, known as their required rate of return on equity."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM7 - Business Models",
        "text": "If a corporation is financed with both debt and equity, which of the following must the corporation pay?",
        "options": [
            "Interest only",
            "Dividends only",
            "Both interest and dividends"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because debt must be repaid on a pre-specified date in the future with interest."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM7 - Business Models",
        "text": "Charging prices that differ based on product features or volume purchased best describes:",
        "options": [
            "tiered pricing.",
            "dynamic pricing.",
            "value-based pricing."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because tiered pricing is charging different prices to different buyers, often based on volume purchased but also based on product features (e.g., base versus premium trims of vehicles)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM7 - Business Models",
        "text": "Which of the following would most likely be included on a company's \"financial\" balance sheet?",
        "options": [
            "Short-term debt obligations",
            "Relationships with customers",
            "Relationships with key suppliers"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because short-term debt is included in a company's financial balance sheet."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Corporate Issuers",
        "lm": "LM7 - Business Models",
        "text": "A company that produces goods to be marketed by other firms is best described as having a:",
        "options": [
            "value added reseller business model.",
            "licensing arrangement business model.",
            "contract manufacturer business model."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because contract manufacturers produce goods to be marketed by others."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "Venture capital is best classified as a sub-category of:",
        "options": [
            "real estate.",
            "hedge funds.",
            "private equity."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because venture capital funds, a specialized form of private equity that typically involves investing in or providing financing to startup or early-stage companies with high growth potential, represent a small portion of the private equity market."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "Management fees are most likely based on assets under management for:",
        "options": [
            "hedge funds only.",
            "private equity funds only.",
            "both hedge funds and private equity funds."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because funds are generally structured with a management fee typically ranging from 1% to 2% of assets under management (e.g. for hedge funds) or committed capital (e.g. private equity funds), which is how much money in total that LP's have committed to the fund's future investments."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "A feature that protects hedge fund clients from paying twice for the same performance is most likely a:",
        "options": [
            "discount.",
            "hurdle rate.",
            "high-water mark."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because in hedge funds, fee calculations also take into account a high-water mark, which reflects the highest value used to calculate an incentive fee. A high-water mark is the highest value of the fund investment ever achieved at a performance fee crystallization date, net of fees, by the individual LP. A high-water mark clause states that a hedge fund manager must recuperate declines in value from the high-water mark before performance fees can be charged on newly generated profits. The use of high-water marks protects clients from paying twice for the same performance."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "In co-investing, the investor invests in alternative assets indirectly through a fund but also has the:\nCorrect answer:",
        "options": [
            "right to invest directly in the same assets alongside the fund.",
            "obligation to invest directly in the same assets alongside the fund.",
            "right to invest in the general partner's fund management company."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because in co-investing, the investor invests in assets indirectly through the fund but also possesses rights (known as co-investment rights) to invest directly in the same assets. Through co-investing, an investor is able to make an investment alongside a fund when the fund identifies deals; the investor is not limited to participating in the deal solely by investing in the fund."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "Which of the following methods of investing in alternative investments provides the most flexibility to the investor?",
        "options": [
            "Co-investing",
            "Fund investing",
            "Direct investing"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because direct investing allows the investor to build a portfolio of investments to her exact requirements. Direct investing provides the greatest amount of flexibility for the investor and grants the highest level of control over how the asset is managed."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "Compared with fund investing in alternative investments, the co-investing method most likely has:",
        "options": [
            "lower management fees.",
            "the same level of management fees.",
            "higher management fees."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because one of the advantages of co-investing is that it has reduced management fees. In co-investing, investors co-invest an additional amount into that same investment often without paying management fees on the capital they used for the direct investment (a co-investment, in this case)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "Compared with co-investing, direct investing in alternative investments most likely offers:",
        "options": [
            "reduced control over the investment selection process.",
            "the same level of control over the investment selection process.",
            "higher control over the investment selection process."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because co-investing offers reduced control over the investment selection process compared with direct investing. Hence, direct investing offers higher control over the investment selection process."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "[Question stem missing in book]",
        "options": [
            "include tangible assets only.",
            "include intangible assets only.",
            "may include both tangible and intangible assets."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because alternative Investments into three categories and several subcategories as follows: 1. Private Capital 2. Real Assets 3. Hedge Funds. Other \"real asset\" investments may include tangible assets, such as fine wine, art, antique furniture and automobiles, stamps, coins, and other collectibles, and intangible assets, such as patents and litigation actions."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "Which of the following is most appropriately categorized as a traditional investment?",
        "options": [
            "Gold",
            "Cash",
            "Real estate"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because alternative investments' is a label for a disparate group of investments that are distinguished from long-only, publicly traded investments in stocks, bonds, and cash (often referred to as traditional investments)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "Which of the following statements is most accurate? Alternative investments:",
        "options": [
            "tend to be more efficiently priced than traditional investments.",
            "fall outside of the definition of long-only positions in stocks, bonds, and cash.",
            "have relatively high correlation of returns with those of traditional investments."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because investing in alternative assets can require handling illiquidity, transacting on private markets, operating sophisticated investment strategies, or risk–return profiles that are very different from those of traditional long-only investments."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "Institutional investors typically begin investing in alternative investments via:",
        "options": [
            "co-investing.",
            "fund investing.",
            "direct investing."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because institutional investors typically begin investing in alternative investments via funds. Then, as they gain experience, they can begin to invest via co-investing and direct investing. The largest and most sophisticated direct investors (such as some sovereign wealth funds) compete with fund managers for access to the best investment opportunities."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "Investors in alternative assets who seek liquidity are most likely to invest in:",
        "options": [
            "hedge funds.",
            "private equity.",
            "real estate investment trusts."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because real estate investment trusts are publicly traded and thus provide liquidity."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "Within a limited partnership structure, the limited partner is most likely to:",
        "options": [
            "jointly control the operations and decisions of the fund.",
            "have total commitments to the fund limited to the upfront cash outflows.",
            "be expected to understand and be able to assume the risks associated with the investments."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because in limited partnerships, the fund manager is the general partner (GP) and investors are the limited partners (LPs). LPs, who are generally accredited investors (owing to legal restrictions on the fund), are expected to understand and be able to assume the risks associated with the investments, which are less regulated than offerings to the general public."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "Which of the following statements about limited partnerships is most accurate? Limited partners:",
        "options": [
            "play passive roles in the partnership.",
            "are involved in the management of the partnership.",
            "make only limited decisions related to the operations of the partnership."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because LPs play passive roles and are not involved with the management of the fund."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "In alternative investments, the American waterfall distribution method is more advantageous to the:",
        "options": [
            "limited partners because performance fees are collected on a per-deal basis.",
            "general partner because performance fees are collected on a per-deal basis.",
            "limited partners because the general partner does not participate in any profits until the hurdle rate has been met."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because this allows the general partner (GP) to get paid before limited partners (LPs) receive both their initial investment and their preferred rate of return on the entire fund. There are two types of waterfalls: deal-by-deal (or American) waterfalls and whole-of-fund (or European) waterfalls. Deal-by-deal waterfalls are more advantageous to the GP because performance fees are collected on a per-deal basis, allowing the GP to get paid before LPs receive both their initial investment and their preferred rate of return (i.e., the hurdle rate) on the entire fund."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "The clawback provision of a private equity fund most likely benefits the:",
        "options": [
            "broker.",
            "investors.",
            "general partner."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because a clawback provision reflects the right of LPs to reclaim part of the GP's performance fee. Along either waterfall path, if a GP ever accrues (or actually pays itself) an incentive fee on gains that are not yet fully realized and then subsequently gives back these gains, an investor is typically able to claw back prior incentive fee accruals and payments."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "A private equity fund structured as a partnership is managed by:",
        "options": [
            "the general partner only.",
            "the limited partners only.",
            "both the general partner and the limited partners."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because in the world of alternative investments, partnership structures are common. In limited partnerships, the fund manager is the general partner (GP) and investors are the limited partners (LPs). LPs, who are generally accredited investors (owing to legal restrictions on the fund), are expected to understand and be able to assume the risks associated with the investments, which are less regulated than offerings to the general public. The GP runs the business and theoretically bears unlimited liability for anything that goes wrong. The GP may also run multiple funds at a time."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "Until drawdown of capital is complete, the management fee on a private equity fund is most likely based on:",
        "options": [
            "drawn capital.",
            "invested capital.",
            "committed capital."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because private equity funds raise committed capital and draw down on those commitments, generally over three to five years, when they have a specific investment to make. Note that the management fee is typically based on committed capital, not invested capital; the committed-capital basis for management fees is an important distinction from hedge funds, whose management fees are based on assets under management (AUM)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "A hedge fund's lockup period is best defined as the required period of time before:",
        "options": [
            "incentive fees are earned.",
            "redemptions are permitted.",
            "committed capital is drawn down."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because investors in modern hedge funds are subject to extended holding periods (known as lockup periods) and subsequent notice periods before an investment redemption is possible. As noted previously, restrictions on redemptions are typically imposed. Investors may be required to keep their money in the hedge fund for a minimum period (referred to as a lockup period) before they are allowed to make withdrawals or redeem shares."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM1 - Alternative Investment Features, Methods, and Structures",
        "text": "A hedge fund feature that allows an incentive fee to be earned only after the fund exceeds a specified return best defines a:",
        "options": [
            "lockup.",
            "hurdle rate.",
            "high-water mark."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the hurdle rate is a minimum rate of return, typically 8%, that the GP must exceed in order to earn the performance fee. GPs typically receive 20% of the total profit of the private equity fund net of any hard hurdle rate, in which case the GP earns fees on annual returns in excess of the hurdle rate, or net of the soft hurdle rate, in which case the fee is calculated on the entire annual gross return as long as the set hurdle is exceeded."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM2 - Alternative Investment Performance and Returns",
        "text": "An analyst gathers the following information about a hedge fund:\n• $200 million in assets under management at the beginning of year\n• a 2% management fee based on year-end assets under management\n• a 20% incentive fee calculated net of the management fee\nIf the fund's gross return is 25% during the year, the total fees earned by the fund manager are:",
        "options": [
            "$11 million.",
            "$14 million.",
            "$15 million."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because it calculates the incentive fee net of the management fee. That is, the total fee is the sum of the management fee of $5 million ($250 million AUM times 0.02) and the incentive fee of $9 million ($250 million less $200 million less the $5 million incentive times 0.20), which is $14 million."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM2 - Alternative Investment Performance and Returns",
        "text": "A hedge fund has the following characteristics:\n| Assets under management, beginning of year | $100 million |\n| Assets under management, end of year | $120 million |\n| Management fee | 1% of year-end assets under management |\n| Performance fee | 15% of the annual return above a 3% hurdle rate |\nIf the performance fee is calculated net of the management fee and there were no capital contributions or withdrawals, the net annual return to the investor is closest to:",
        "options": [
            "16.3%.",
            "16.4%.",
            "16.5%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the hurdle rate is a minimum rate of return, typically 8%, that the GP must exceed in order to earn the performance fee. GPs typically receive 20% of the total profit of the private equity fund net of any hard hurdle rate, in which case the GP earns fees on annual returns in excess of the hurdle rate, or net of the soft hurdle rate, in which case the fee is calculated on the entire annual gross return as long as the set hurdle is exceeded.\nManagement fee = $100 million × 120% × 1% = $1.200 million.\nPerformance fee = [($100 million × 20%) – ($100 million × 3%) - $1.200 million)] × 15% = $2.370 million.\nTotal fee = $1.200 million + $2.370 million = $3.570 million.\nInvestor return = ($20 – $3.570) / $100 = 16.430% ≈ 16.4%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM2 - Alternative Investment Performance and Returns",
        "text": "An analyst collects the following information about a hedge fund:\n| Assets under management | $1.5 billion, beginning of year |\n| Annual return | 20% |\n| Management fee | 2%, based on year-end valuation |\n| Incentive fee | 20%, calculated net of management fees |\nIf the incentive fee is calculated on returns in excess of a 6% hurdle rate, total annual fees earned by the fund manager are closest to:",
        "options": [
            "$34,800,000.00",
            "$70,800,000.00",
            "$78,000,000.00"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the hurdle rate is a minimum rate of return, typically 8%, that the GP must exceed in order to earn the performance fee. GPs typically receive 20% of the total profit of the private equity fund net of any hard hurdle rate, in which case the GP earns fees on annual returns in excess of the hurdle rate, or net of the soft hurdle rate, in which case the fee is calculated on the entire annual gross return as long as the set hurdle is exceeded.\nThe management fee is calculated as $1,500,000,000 × (1 + 20%) × 2% = $36,000,000 and the incentive fee is calculated as [$1,800,000,000 – $1,500,000,000 – ($1,500,000,000 × 6%) – $36,000,000] × 20% = $34,800,000. Therefore, the total fees earned by the manager are $36,000,000 + $34,800,000 = $70,800,000."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM2 - Alternative Investment Performance and Returns",
        "text": "Which of the following has most likely been designed to provide an opportunity for a hedge fund manager to liquidate positions in an orderly fashion without magnifying the losses?",
        "options": [
            "Notice periods",
            "Lockup periods",
            "Redemption fees"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because notice periods provide an opportunity for the hedge fund manager to liquidate a position in an orderly fashion without magnifying the losses."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM2 - Alternative Investment Performance and Returns",
        "text": "The lag in marking private equity investments to market most likely makes private equity appear:",
        "options": [
            "less volatile than it really is.",
            "less resilient than it really is.",
            "more correlated with traditional assets than it really is."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the lagging impact of shorter-term economic events on the interim accounting valuations of these strategies makes them appear more resilient and less correlated than they really are. A more realistic picture may emerge when premature portfolio liquidations are forced on managers. The lack of transparency around such investments and the slowness to mark them to market can be incorrectly construed by investors as an overall lack of volatility."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM2 - Alternative Investment Performance and Returns",
        "text": "A hedge fund has the following characteristics:\n• Initial investment capital of $200 million;\n• 2% management fee, based on assets under management at the end of the year;\n• 20% incentive fee, calculated independent of the management fee and based on returns in excess of a 7% hurdle rate.\nIf the fund's return is 18% at the end of the first year, the fund's investors' net return is closest to:",
        "options": [
            "12.0%.",
            "13.4%.",
            "13.9%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the partnership agreement usually specifies that the performance fee is earned only after the fund achieves a return known as a hurdle rate. The hurdle rate is a minimum rate of return, typically 8%, that the GP must exceed in order to earn the performance fee. GPs typically receive 20% of the total profit of the private equity fund net of any hard hurdle rate, in which case the GP earns fees on annual returns in excess of the hurdle rate, or net of the soft hurdle rate, in which case the fee is calculated on the entire annual gross return as long as the set hurdle is exceeded. Accordingly, (in $ millions):\nAUM at the beginning of the year: 200\nAUM at the end of the year: 200 × (1 + 0.18) = 236\nManagement fee: 236 × 0.02 = 4.72\nIncentive fee: [236 – 200 – (200 × 0.07)] × 0.20 = 4.40\nTotal fees paid to the hedge fund manager: 4.72 + 4.40 = 9.12\nInvestor's return: (236 – 200 – 9.12) ÷ 200 = 13.44% ≈ 13.4%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM2 - Alternative Investment Performance and Returns",
        "text": "A hedge fund has assets under management of $20 million at the beginning of the year and $24 million at the end of the year. The fund charges a 2% management fee based on year-end assets under management and a 20% incentive fee. If the incentive fee is calculated net of the management fee, the total fee charged for the year is closest to:",
        "options": [
            "$0.88 million.",
            "$1.18 million.",
            "$1.28 million."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because:\n$24 million × 2% = $480,000 management fee\n($24 million – $20 million – $480,000) × 20% = $704,000 incentive fee\nTotal fees = $480,000 + $704,000 = $1,184,000."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM2 - Alternative Investment Performance and Returns",
        "text": "An analyst collects the following information about a hedge fund:\n| Assets under management, beginning of year | $200 million |\n| Management fee | 2% |\n| Incentive fee, net of management fee | 20% |\n| Hard hurdle rate | 5% |\nThe management fee and incentive fee are based on the year-end value. If the fund generates a gross return of 10%, the net return is closest to:",
        "options": [
            "6.2%.",
            "6.8%.",
            "7.2%."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the hurdle rate is a minimum rate of return, typically 8%, that the GP must exceed in order to earn the performance fee. GPs typically receive 20% of the total profit of the private equity fund net of any hard hurdle rate, in which case the GP earns fees on annual returns in excess of the hurdle rate, or net of the soft hurdle rate, in which case the fee is calculated on the entire annual gross return as long as the set hurdle is exceeded.\nAUM at year end = $200 million × 110% = $220 million\nManagement fee = $220 million × 2% = $4.4 million\nHard hurdle = $200 million × 5% = $10 million\nIncentive fee = ($220 – $200 – $10 – $4.4) × 20% = $1.12 million\nTotal fees = $5.52 million\nInvestor return = ($20 – $5.52) / $200 = 0.0724 ≈ 7.2%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM2 - Alternative Investment Performance and Returns",
        "text": "When market prices are used to value underlying positions held by a hedge fund, the most conservative approach uses:",
        "options": [
            "bid prices only.",
            "the average of bid and ask prices.",
            "bid prices for longs and ask prices for shorts."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because when market prices or quotes are used for valuation, funds may differ in which price or quote they use (bid price, ask price, average quote, or median quote). A common practice is to use an average of the bid and the ask. A more conservative and theoretically more accurate approach is to use bid prices for long positions and ask prices for short positions because these are more realistic prices at which the positions could be closed."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM2 - Alternative Investment Performance and Returns",
        "text": "A hedge fund has the following fee structure based on year-end assets under management:\n| Assets under management, beginning of year | $10 million |\n| Management fee | 2% |\n| Incentive fee | 20% |\nThe incentive fee is calculated net of the management fee. If the gross annual return is 15%, the net-of-fees return to investors is closest to:",
        "options": [
            "8.8%.",
            "10.2%.",
            "11.7%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because:\nAUM at period end = $10 million × 115% = $11.5 million\nManagement fee = $11.5 million × 2% = $230,000\nIncentive fee = ($11.5 million – $10.0 million – $230,000) × 20% = $254,000\nTotal fee = $230,000 + $254,000 = $484,000\nInvestor return = ($11.5 million – $10.0 million – $484,000) / $10.0 million = 10.16%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM2 - Alternative Investment Performance and Returns",
        "text": "A hedge fund has the following characteristics:\n| Management fee | 2% of year-end assets under management |\n| Incentive fee | 20% of the annual return above a 6% hurdle rate |\n| Assets under management at end of Year 1 | $800 million |\n| Assets under management at end of Year 2 | $960 million |\nIf the management and incentive fees are calculated independently and there were no capital contributions or withdrawals, total fees for Year 2 are closest to:",
        "options": [
            "$37.8 million.",
            "$39.7 million.",
            "$41.6 million."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the hurdle rate is a minimum rate of return, typically 8%, that the GP must exceed in order to earn the performance fee. GPs typically receive 20% of the total profit of the private equity fund net of any hard hurdle rate, in which case the GP earns fees on annual returns in excess of the hurdle rate, or net of the soft hurdle rate, in which case the fee is calculated on the entire annual gross return as long as the set hurdle is exceeded. Total fees are calculated as follows:\nManagement fee = $960 million × 0.02 = $19.2 million\nHard hurdle = $800 million × 0.06 = $48 million\nIncentive fee = ($960 million – $800 million – $48 million) × 0.2 = $22.4 million\nTotal fees = $19.2 million + $22.4 million = $41.6 million."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM2 - Alternative Investment Performance and Returns",
        "text": "A perceived benefit of adding alternative assets to a portfolio of traditional assets is most likely the higher:",
        "options": [
            "risk-adjusted return profile of the resulting portfolio.",
            "regulation and transparency of alternative assets relative to traditional assets.",
            "expected correlation of returns between alternative assets and traditional assets."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because alternative investments offer broader diversification (because of their lower correlation with traditional asset classes), opportunities for enhanced returns (by increasing the portfolio's risk–return profile), and potentially increased income through higher yields (particularly compared with traditional investments in low–interest rate periods). Alternative investments' diversifying potential is part of the motivation for investing in them: Investors perceive an opportunity to improve the risk–return relationship in the portfolio context. Given the historical return, volatility, and correlation profiles of alternative investments, combining a portfolio of alternative investments with a portfolio of traditional investments should improve the overall portfolio's risk–return profile. Doing so can increase the risk-adjusted return of the overall portfolio because of potentially higher returns to the portfolio and a less-than-perfect correlation with traditional investments."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM2 - Alternative Investment Performance and Returns",
        "text": "Hedge fund mark-to-model valuations most likely reflect a:",
        "options": [
            "liquidation value.",
            "theoretical value.",
            "publicly traded price."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the very nature of assets that can be valued only on a mark-to-model basis can and should be a concern for the alternative asset investor. A model may reflect an imperfect theoretical valuation and not a true liquidation value."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM2 - Alternative Investment Performance and Returns",
        "text": "An investor gathers the following information about a hedge fund:\n| Beginning-of-year assets under management (AUM) | $300,000,000 |\n| Current high-water mark | $320,000,000 |\n| Annual return before fees | 10% |\n| Management fee, based on end-of-year AUM before fees | 2% |\n| Incentive fee | 20% |\nIf the incentive fee is based on returns net of management fees and the fee structure includes the use of a high-water mark, the investor's net return for the year is closest to:",
        "options": [
            "6.24%.",
            "6.96%.",
            "7.57%."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because in hedge funds, fee calculations also take into account a high-water mark, which reflects the highest value used to calculate an incentive fee. A high-water mark is the highest value of the fund investment ever achieved at a performance fee crystallization date, net of fees, by the individual LP. A high-water mark clause states that a hedge fund manager must recuperate declines in value from the high-water mark before performance fees can be charged on newly generated profits.\nEnd-of-year AUM = Beginning-of-year AUM × (1 + Annual return before fees) = $300,000,000 × (1 + 10%) = $330,000,000.\nManagement fee = Management fee based on end-of-year AUM × End-of-year AUM = 2% × $330,000,000 = $6,600,000.\nThe incentive fee is payable if the current high water-mark is exceeded and is based on the excess return above this high-water mark.\nReturn in excess of current high-water mark = End-of-year AUM – Current high-water mark – Management fee = $330,000,000 – $320,000,000 – $6,600,000 = $3,400,000.\nIncentive fee = 20% × Return in excess of current high-water mark = 20% × $3,400,000 = $680,000.\nTotal fees = Management fee + Incentive fee (as applicable) = $6,600,000 + $680,000 = $7,280,000.\nNet return = (End-of-year AUM – Beginning-of-year AUM – Total fees) / Beginning-of-year AUM = ($330,000,000 – $300,000,000 – $7,280,000) / $300,000,000 = $22,720,000 / $300,000,000 = 7.57%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM3 - Investments in Private Capital: Equity and Debt",
        "text": "Which of the following statements about private debt is most accurate? Mezzanine debt is:",
        "options": [
            "funding provided to start-up or early-stage companies generating negative cash flow.",
            "subordinated to senior secured debt but senior to equity in the borrower's capital structure.",
            "a hybrid loan structure that combines different tranches of secured and unsecured debt into a single loan."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because mezzanine debt refers to private credit subordinated to senior secured debt but senior to equity in the borrower's capital structure."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM3 - Investments in Private Capital: Equity and Debt",
        "text": "Which of the following is most likely a primary exit strategy for a company held by a private equity fund's portfolio?",
        "options": [
            "IPO",
            "Management buy-in",
            "Management buyout"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because key private equity investment strategies include leveraged buyouts (e.g., MBO and MBIs) and venture capital. Primary exit strategies include trade sale, IPO, and recapitalization."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM3 - Investments in Private Capital: Equity and Debt",
        "text": "From the perspective of a private equity firm, an advantage of exiting a portfolio company through a special purpose acquisition company (SPAC) most likely include:",
        "options": [
            "floating valuation.",
            "flexibility of the transaction structure.",
            "lower deal risk due to restrictions on redemptions."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because advantages of a SPAC exit include:\na. extended time for public disclosure on company prospects to build investor interest,\nb. fixed valuation with lower volatility of share pricing,\nc. flexibility of transaction structure to best suit the company's context, and\nd. association with potentially high-profile and seasoned sponsors and their extensive investor network."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM3 - Investments in Private Capital: Equity and Debt",
        "text": "With respect to private equity, the growth capital strategy is also known as:",
        "options": [
            "venture capital.",
            "recapitalization.",
            "minority equity investing."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because among several other specialties, some private equity firms specialize in growth capital, also known as growth equity or minority equity investing. Growth capital generally refers to minority equity investments, whereby the firm takes a less-than-controlling interest in more mature companies that are looking for capital to expand or restructure operations, enter new markets, or finance major acquisitions."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM3 - Investments in Private Capital: Equity and Debt",
        "text": "In the private debt market, venture debt:",
        "options": [
            "entails buying the debt of mature companies in financial difficulty.",
            "provides capital to early-stage companies that may be generating little cash flow.",
            "entails buying the debt of mature companies in financial difficulty and provides capital to early-stage companies that may be generating little cash flow."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because this is the definition of venture debt. Venture debt is private debt funding that provides venture capital backing to start-up or early-stage companies that may be generating little or negative cash flow."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM3 - Investments in Private Capital: Equity and Debt",
        "text": "Which of the following sources of private debt financing may provide equity participation to lenders or investors?",
        "options": [
            "Venture debt only",
            "Mezzanine debt only",
            "Both venture debt and mezzanine debt"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because mezzanine debt often comes with additional features, such as warrants or conversion rights. These provide equity participation to lenders/investors, conveying the option to convert their debt into equity or purchasing the equity of the underlying borrower under certain circumstances. Similar to mezzanine debt, venture debt may carry additional features that compensate the investor/lender for the increased risk of default or for the start-up and early-stage companies that lack substantial assets for debt collateral. One such feature could grant the lender rights to purchase equity in the borrowing company under certain circumstances."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM3 - Investments in Private Capital: Equity and Debt",
        "text": "Private equity indexes most likely overestimate:",
        "options": [
            "volatility.",
            "performance.",
            "correlation with traditional assets."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because published private equity indexes may be an unreliable measure of performance. Measuring historical private equity performance is challenging; as with hedge funds, which will be discussed later, private equity return indexes typically rely on self-reporting and are subject to survivorship, backfill, and other biases. This typically leads to an overstatement of returns."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM3 - Investments in Private Capital: Equity and Debt",
        "text": "An exit strategy where a private equity manager sells a company to a strategic buyer in the same industry best describes a:",
        "options": [
            "trade sale.",
            "secondary sale.",
            "rcapitalization."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because in a trade sale, a portion or a division of the private company is sold either via direct sale or auction to a strategic buyer interested in increasing the scale and scope of the existing business."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM3 - Investments in Private Capital: Equity and Debt",
        "text": "Which of the following entails buying the debt of mature companies in financial difficulty?",
        "options": [
            "Venture debt",
            "Distressed debt",
            "Unitranche debt"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because involvement in distressed debt entails buying the debt of mature companies in financial difficulty."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM3 - Investments in Private Capital: Equity and Debt",
        "text": "Compared to unsecured debt, unitranche debt most likely features:",
        "options": [
            "lower borrowing costs.",
            "the same borrowing costs.",
            "higher borrowing costs."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because since unitranche debt is a blend of secured and unsecured debt, its interest rate will generally fall in between the interest rates often demanded on secured and unsecured debt. That is, unitranche loans will most likely be less costly than unsecured loans."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM4 - Real Estate and Infrastructure",
        "text": "Which of the following are best categorized as social infrastructure assets?",
        "options": [
            "Airports",
            "Correctional facilities",
            "Telecommunication towers"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because infrastructure investments are frequently categorized on the basis of the underlying assets. The broadest categorization organizes investments into economic and social infrastructure assets. Social infrastructure assets are directed toward human activities and include such assets as educational, health care, social housing, and correctional facilities, with the focus on providing, operating, and maintaining the asset infrastructure."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM4 - Real Estate and Infrastructure",
        "text": "Which of the following infrastructure investments most likely have the highest risk?",
        "options": [
            "Brownfield investments with the majority of their return from current yield.",
            "Brownfield investments with the majority of their return from capital appreciation.",
            "Greenfield investments with the majority of their return from capital appreciation."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because infrastructure funds with a higher-risk profile invest in Greenfield projects without guarantees of demand upon completion and with high weighting to capital appreciation. Investing in infrastructure assets that are to be constructed is generally referred to as greenfield investment. Greenfield investments are early-stage investments with a higher-risk profile."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM4 - Real Estate and Infrastructure",
        "text": "Which of the following is most likely a characteristic of private real estate markets?",
        "options": [
            "Transaction costs are high",
            "Private market indexes are investable",
            "It is easy for small investors to establish a diversified portfolio of wholly owned properties"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because, for private real estate markets, transaction costs are high."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM4 - Real Estate and Infrastructure",
        "text": "Which of the following statements about real estate assets is most accurate?",
        "options": [
            "Real estate assets are heterogeneous",
            "Commercial property represents the majority of real estate assets by value",
            "Private real estate has historically had high correlations with other asset classes"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because real estate property has some unique features, including heterogeneity (no two properties are identical) and fixed location."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM4 - Real Estate and Infrastructure",
        "text": "Investors in greenfield infrastructure projects typically:",
        "options": [
            "rely on the assets' financial and operating history.",
            "invest alongside strategic investors or developers.",
            "have lower development risk than investors in brownfield projects."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because greenfield investors typically invest alongside strategic investors or developers who specialize in developing the underlying assets."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM4 - Real Estate and Infrastructure",
        "text": "A disadvantage of direct real estate investing is:",
        "options": [
            "a lack of control.",
            "unfavorable tax rules.",
            "the time required to manage the property."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because major disadvantages to investing directly in real estate include extensive time required to manage the property. The owner may choose to handle all aspects of investing in and operating the property, including property selection, asset management, property management, leasing, and administration."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM4 - Real Estate and Infrastructure",
        "text": "Which of the following real estate investing strategies is most likely to focus on modest redevelopment or upgrades, the leasing of vacant space, and the repositioning of underlying properties to earn a higher return?",
        "options": [
            "Core-plus",
            "Value-add",
            "Opportunistic"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because value-add investments may require modest redevelopment or upgrades, the leasing of vacant space, or repositioning the underlying properties to earn a higher return than core properties."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM4 - Real Estate and Infrastructure",
        "text": "With respect to infrastructure investments, a take-or-pay arrangement is most likely used to mitigate:",
        "options": [
            "demand risk.",
            "operational risk.",
            "construction risk."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because take-or-pay arrangements, where payments are based upon the availability rather than the use of an asset, are used to mitigate demand/volume risk."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM4 - Real Estate and Infrastructure",
        "text": "Which of the following is best categorized as core real estate?",
        "options": [
            "A high-quality office building in a rural area",
            "A low-quality office building in a major urban center",
            "A high-quality office building in a major urban center"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because open-end funds generally offer exposure to core real estate, characterized by well-leased, high-quality institutional real estate in the best markets. Investors expect core real estate to deliver stable returns, primarily from income."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM4 - Real Estate and Infrastructure",
        "text": "The benefits of adding investments in infrastructure assets to a portfolio most likely include:",
        "options": [
            "inflation protection only.",
            "low correlation with existing portfolio assets only.",
            "both inflation protection and low correlation with existing portfolio assets."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because investing in infrastructure may add an income stream, increase portfolio diversification by adding an asset class with typically low correlation with existing investments, and offer some protection against inflation. Low exposure to short-term GDP growth issues may also be a factor."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM5 - Natural Resources",
        "text": "All else being equal, when a commodity futures market is in contango, the forward curve is most likely:",
        "options": [
            "downward sloping.",
            "flat.",
            "upward sloping."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because when futures prices are higher than the spot price, the commodity forward curve is upward sloping, and the prices are referred to as being in contango."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM5 - Natural Resources",
        "text": "If a commodity's storage cost is equal to its convenience yield, its futures prices will be greater than its spot price if the risk-free rate is:",
        "options": [
            "negative.",
            "zero.",
            "positive."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the futures price can be formalized in the following form: Futures price ≈ Spot price(1 + r) + Storage costs – Convenience yield, where r is the period's short-term risk-free interest rate. Thus, if Storage costs = Convenience yield, then Futures price ≈ Spot price(1 + r), from which Futures price > Spot price if r > 0."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM5 - Natural Resources",
        "text": "Which of the following is best classified as a commodity?",
        "options": [
            "Livestock",
            "Timberland",
            "Agricultural land"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because commodity investments may involve investing in actual physical commodities or in producers of commodities. Commodities are considered either 'hard' (those mined, such as copper, or extracted, such as oil) or 'soft' (those grown over a period of time, such as livestock, grains, and cash crops, such as coffee)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM5 - Natural Resources",
        "text": "Timberland investments offer:",
        "options": [
            "an income stream only.",
            "the potential for capital gain only.",
            "both an income stream and the potential for capital gain."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because timberland investment involves ownership of raw land and the harvesting of its trees for lumber, thus generating an income stream and the potential for capital gain."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM5 - Natural Resources",
        "text": "Crude oil is categorized as:",
        "options": [
            "a soft commodity.",
            "a hard commodity.",
            "neither a soft commodity nor a hard commodity."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because commodities are considered either 'hard' (those mined, such as copper, or extracted, such as oil) or 'soft' (those grown over a period of time, such as livestock, grains, and cash crops, such as coffee)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM6 - Hedge Funds",
        "text": "Which of the following hedge funds most likely have a beta close to zero?",
        "options": [
            "Short-biased funds",
            "Market-neutral funds",
            "Fundamental long/short growth funds"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the hedge fund takes long positions in securities identified as undervalued and short positions in overvalued securities. The hedge fund tries to maintain a net position that is neutral with respect to market risk and other risk factors (size, industry, momentum, value, etc.). Ideally, the portfolio has an overall beta of approximately zero."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM6 - Hedge Funds",
        "text": "Which of the following statements is most accurate? Hedge funds:",
        "options": [
            "may be invested entirely in traditional assets.",
            "typically invest in early-stage companies with high growth potential.",
            "typically pursue leveraged buyouts of established profitable and cash-generating companies."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because hedge funds are private investment vehicles that may invest in public equities or publicly traded fixed-income assets, private capital, and/or real assets, but they are distinguished by their investment approach rather than by the investments themselves. Hedge funds make frequent use of leverage, derivatives, short selling, and other investment strategies. Alternative investments are investments other than ownership of public equity securities, fixed-income instruments, or cash that represent the more traditional asset classes. Even though the investments might be just in traditional assets, like public equities or publicly traded fixed-income assets, the investment approach distinguishes the hedge fund."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM6 - Hedge Funds",
        "text": "An activist hedge fund strategy is most likely:",
        "options": [
            "based on top-down analysis.",
            "classified as a relative value strategy.",
            "implemented in the public equity market."
        ],
        "correctAnswer": 2,
        "explanation": "Incorrect because activist strategies are typically categorized as event-driven, as opposed to relative value strategies, which seek to profit from a pricing discrepancy, an unusual short-term relationship, between related securities. The expectation is that the pricing discrepancy will be resolved over time."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM6 - Hedge Funds",
        "text": "In contrast to a fund of hedge funds, a single hedge fund is most likely to:",
        "options": [
            "charge lower total fees.",
            "offer better redemption terms.",
            "make a diversified portfolio of hedge funds accessible to smaller investors."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because single hedge funds come with a lower fee structure than fund of hedge funds. For the investor, fund of funds comes with a higher fee structure—often an additional 1%-2% because the manager of the fund of funds adds its own fees on top of the hedge fund management fees. Fund-of-funds investors often face a 10% incentive fee in addition to those fees charged by underlying hedge funds."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM6 - Hedge Funds",
        "text": "Convertible bond arbitrage is best classified as a(n):",
        "options": [
            "macro hedge fund strategy.",
            "event-driven hedge fund strategy.",
            "relative value hedge fund strategy."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because relative value funds seek to profit from a pricing discrepancy, an unusual short-term relationship, between related securities. The expectation is that the pricing discrepancy will be resolved over time. Examples of relative value strategies include the following: Convertible bond arbitrage. Tis conceptually market-neutral investment strategy seeks to exploit a perceived mispricing between a convertible bond and its component parts—namely, the underlying bond and the embedded stock option—relative to the pricing of a reference equity into which the bond may someday convert. The strategy typically involves buying convertible debt securities and simultaneously selling a certain amount of the same issuer's common stock. Residual bankruptcy risks can be further hedged using equity put options or credit default swap derivative hedges on the credit of the issuer."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM6 - Hedge Funds",
        "text": "A hedge fund is most likely characterized by:",
        "options": [
            "the ability to use derivatives.",
            "a prohibition against short positions.",
            "an absence of restrictions on redemptions."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because a contemporary hedge fund generally has the following characteristics: It is a creatively managed portfolio of investments involved in one or more asset classes (equities, credit, fixed income, commodities, futures, foreign exchange, and sometimes even hard assets, such as real estate), sometimes trading in different geographic regions, that is often leveraged, generally takes both long and short positions (when possible), and quite often uses derivatives to express a view or establish a hedge."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM7 - Introduction to Digital Assets",
        "text": "Compared to traditional financial assets, digital assets:",
        "options": [
            "can be invested in through indirect investment vehicles such as ETFs.",
            "are generally recorded in private ledgers maintained by central intermediaries.",
            "do not have an inherent value based on underlying assets or on potential cash flows."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because, unlike financial assets, most digital assets do not have an inherent value based on underlying assets or on the potential cash flow."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM7 - Introduction to Digital Assets",
        "text": "Which of the following forms of digital asset investment most likely involves the use of a cryptocurrency wallet?",
        "options": [
            "Direct investment",
            "Indirect investment via ETFs",
            "Indirect investment via coin trusts"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because digital asset investment can take the form of direct investment on the blockchain or indirect investments. Direct ownership of bitcoin and other cryptocurrencies involves the use of a cryptocurrency wallet, which stores the (public and private) digital codes required to access the asset on a computer website or mobile device application."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM7 - Introduction to Digital Assets",
        "text": "Compared to centralized cryptocurrency exchanges, decentralized exchanges are:",
        "options": [
            "less likely to be regulated and less susceptible to attacks from hackers.",
            "less likely to be regulated and more susceptible to attacks from hackers.",
            "more likely to be regulated and less susceptible to attacks from hackers."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because decentralized exchanges lack a centralized control mechanism and operate on a distributed platform without central coordination or control. This comes with the benefit that should one of the computers on the network be attacked, the exchange remains operational since there are numerous other computers that continue to operate on the network. That is why attacking decentralized exchanges is substantially more difficult, rendering such attacks almost certain to fail. However, for a centralized exchange, trading is hosted on private servers, exposing the centralized exchanges and their clients to security vulnerabilities. Should the exchange's servers become compromised, the entire system may become paralyzed, halting trade, and leaking vital user information. Hence, decentralized exchanges are less susceptible to attacks from hackers.\nMoreover, decentralized exchanges are difficult to regulate because no single individual, organization, or group controls the system. This means that those trading on decentralized exchanges are generally free to transact without any regulatory scrutiny. However, some centralized exchanges are regulated, and depending on jurisdiction, these exchanges may be regulated as financial exchanges or other types of financial intermediaries. Hence, decentralized exchanges are less likely to be regulated."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM7 - Introduction to Digital Assets",
        "text": "Cryptocurrency prices are driven by:",
        "options": [
            "regulatory development only.",
            "technological advancement only.",
            "both regulatory development and technological advancement."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because among other drivers, prices (or returns) of cryptocurrencies are driven more by technological advancement and regulatory development."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Alternative Investments",
        "lm": "LM7 - Introduction to Digital Assets",
        "text": "The process of representing ownership rights to physical assets on a distributed ledger best describes:",
        "options": [
            "tokenization.",
            "a blockchain.",
            "an initial coin offering."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because tokenization is the process of representing ownership rights to physical assets on a blockchain or distributed ledger."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "Which of the following financial intermediaries is most likely to provide liquidity service to its clients?",
        "options": [
            "Brokers",
            "Dealers",
            "Exchanges"
        ],
        "correctAnswer": 1,
        "explanation": "Correct. The service that dealers provide is liquidity. Liquidity is the ability to buy or sell with low transaction costs when investors want to trade. By allowing their clients to trade when they want to trade, dealers provide liquidity to them."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "An investor writes a put option on FTSE 100 Index futures. Which of the following best describes the investor's position with respect to the put contract and her exposure to the underlying index future, respectively?",
        "options": [
            "Long, short",
            "Short, long",
            "Short, short"
        ],
        "correctAnswer": 1,
        "explanation": "Correct. The investor has written a put contract, which means she is short the option. She, therefore, must satisfy the obligation to purchase the asset if requested to do so by the put owner. The investor has a long exposure to the risk of the underlying index future because she benefits when its quoted price increases—that is, when the put declines in value (or suffers a loss when its quoted price decreases as the put increases in value)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "If securities are purchased on margin with a maximum leverage ratio of 1.75, the minimum margin requirement is closest to:",
        "options": [
            "43%.",
            "57%.",
            "75%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the maximum leverage ratio associated with a position financed by the minimum margin requirement is one divided by the minimum margin requirement. Or, MLR = 1 / MMR and MMR = 1 / MLR. In this case: the minimum margin requirement (MMR) = 1 / 1.75 = 57%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "When a company raises common equity capital in the public market, the company most likely:",
        "options": [
            "moves money from the present to the future.",
            "agrees to make scheduled distributions in the future.",
            "is required to meet regulatory reporting requirements."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because when a company sells common stock to raise capital, regulatory reporting requirements and accounting standards attempt to ensure the production of meaningful financial disclosures."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "A trader reports the following information about an equity investment which was sold after 1 year:\n| Number of shares purchased | 2,000 |\n| Leverage ratio | 3 |\n| Purchase price per share | $12.00 |\n| Sale price per share | $9.50 |\n| Call money rate per year | 3% |\nThe trader's equity value as a result of the trade is closest to:",
        "options": [
            "$460.00",
            "$2,520.00",
            "$3,000.00"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the remaining equity can be calculated as:\nProceeds on sale – payoff amount borrowed – payoff loan interest\nAmount paid to purchase shares = $12 × 2,000 = $24,000\nEquity investment = $24,000 / 3 = $8,000\nAmount borrowed = $24,000 - $8,000 = $16,000\nInterest on loan = $16,000 × 3% = $480\nTherefore, remaining equity = 2,000 × $9.5 – $16,000 – 3% × $16,000 = $19,000 – $16,000 – $480 = $2,520."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "Order matching rules in order-driven trading systems are used to:",
        "options": [
            "match buy orders to sell orders.",
            "determine the prices at which the orders submitted by dealers are matched.",
            "determine the prices at which the orders submitted by customers are matched."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the order matching rules match buy orders to sell orders."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "A sell order that instructs the broker to obtain the best price immediately available without specifying a minimum price is a:",
        "options": [
            "stop order.",
            "limit order.",
            "market order."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because a market order instructs the broker or exchange to obtain the best price immediately available when filling the order."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "Which of the following is an objective of market regulation?",
        "options": [
            "Controlling agency problems only",
            "Ensuring that long-term liabilities are funded only",
            "Both controlling agency problems and ensuring that long-term liabilities are funded"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the objectives of market regulation include both controlling agency problems and ensuring that long-term liabilities are funded. In total, the objectives of market regulation are:\n1. control fraud.\n2. control agency problems.\n3. promote fairness.\n4. set mutually beneficial standards.\n5. prevent undercapitalized financial firms from exploiting their investors by making excessively risky investments; and\n6. ensure that long-term liabilities are funded."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "If a European investor believes the US equity market will decline in the next three months, the transaction most likely to allow the investor to profit from this view is the purchase of a:",
        "options": [
            "put option.",
            "call option.",
            "currency swap."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because option holders generally will exercise call options if the strike price is below the market price of the underlying instrument, in which case, they will be able to buy at a lower price than the market price. Similarly, they will exercise put options if the strike price is above the underlying instrument price so that they will sell at a higher price than the market price. Therefore, if the investor purchases a put option and the US market declines, they will profit by buying at the lower market price and selling at the higher strike price."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "When issuers sell securities to investors:",
        "options": [
            "they trade in the primary market.",
            "they trade in the secondary market.",
            "funds flow between the primary and the secondary market."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because when issuers sell securities to investors, practitioners say that they trade in the primary market."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "If the price of a stock bought on 30% margin increases by 40%, the return on equity to the buyer is closest to:",
        "options": [
            "52%.",
            "75%.",
            "133%."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the return on equity to a margin position is calculated by multiplying the unleveraged return by the financial leverage ratio. The financial leverage ratio is equal to 1/margin. In this case, financial leverage is 1/0.30 = 3.3333, so the return on equity = 40% × 3.3333 = 133.33%, which is closest to 133%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "In which markets are government bills most likely traded?",
        "options": [
            "Money markets",
            "Capital markets",
            "Alternative investment markets"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because money markets trade debt instruments maturing in one year or less. The most common such instruments are repurchase agreements, negotiable certificates of deposit, and government bills."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "Financial intermediaries that help their clients arrange seasoned securities offerings are best known as:",
        "options": [
            "investment banks.",
            "commercial banks.",
            "multi-lateral trading facilities."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because investment banks provide advice to their mostly corporate clients and help them arrange transactions such as initial and seasoned securities offerings. Additionally, a seasoned security is a security that an issuer has already issued. If the issuer wants to sell additional units of a previously issued security, it makes a seasoned offering (sometimes called a secondary offering)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "In the secondary market, funds flow from:",
        "options": [
            "traders to traders.",
            "issuers to investors.",
            "investors to issuers."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because when investors sell securities to others, they trade in the secondary market. In the secondary market, funds flow between traders."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "Short sellers are most likely exposed to:",
        "options": [
            "unlimited gains and limited losses.",
            "limited gains and unlimited losses.",
            "unlimited gains and unlimited losses."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because short sellers create short positions in securities by borrowing securities from security lenders who are long holders. The short sellers then sell the borrowed securities to other traders. The potential gains on a short position are limited to no more than 100 percent, whereas the potential losses are unbounded."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "An instruction that indicates when an order may be filled is most likely a(n):",
        "options": [
            "validity instruction.",
            "clearing instruction.",
            "execution instruction."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because validity instructions indicate when the order may be filled."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "Broker 1 has a minimum margin requirement of 62.5% and Broker 2 has a maximum leverage ratio of 1.6. The maximum financial leverage possible with Broker 1 is:",
        "options": [
            "less than the maximum financial leverage with Broker 2.",
            "equal to the maximum financial leverage with Broker 2.",
            "greater than the maximum financial leverage with Broker 2."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the maximum financial leverage is the same at both firms given Broker 1's margin requirement and Broker 2's maximum leverage ratio. Leverage Ratio = 100% / margin requirement: Broker 1 leverage ratio = 100% / 62.5% = 1.6 = Broker 2's leverage ratio."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "Which of the following is most likely used to raise funds for a capital project?",
        "options": [
            "Equity issuance only",
            "A stock dividend only",
            "Both equity issuance and a stock dividend"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because companies often raise money for projects by selling (issuing) ownership interests (e.g., corporate common stock or partnership interests). Although these equity instruments legally represent ownership in companies rather than loans to the companies, selling equity to raise capital is simply another mechanism for moving money from the future to the present."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "Clearing instructions for an order most likely indicate:",
        "options": [
            "how to fill the order.",
            "when the order may be filled.",
            "how to arrange the settlement of the trade."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because clearing instructions indicate how to arrange the final settlement of the trade."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "A trader gathers the following limit order information about a stock:\n| Bid Size (Number of Shares) | Share Price ($) | Offer Size (Number of Shares) |\n| 10 | 75.70 | --- |\n| 20 | 75.80 | --- |\n| --- | 75.90 | 5 |\n| --- | 76.00 | 10 |\n| --- | 76.10 | 15 |\nIf the trader submits a fill or kill buy order for 20 shares at a limit price of $76.00, the trader's average price per share for this trade will be closest to:",
        "options": [
            "$75.80.",
            "$75.97.",
            "$76.00."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because a limit order conveys almost the same instruction: Obtain the best price immediately available, but in no event accept a price higher than a specified limit price ($76.00) when buying. Furthermore, immediate or cancel orders (IOC) are good only upon receipt by the broker or exchange. If they cannot be filled in part or in whole, they cancel immediately. In some markets these orders are also known as fill or kill orders. That is, 15 units of the stock would trade or execute immediately at: 5 units at $75.90 and 10 units at $76.00. The average trade price per unit = ((5 × $75.90) + (10 × $76.00)) / 15 ≈ $75.97."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "A trader buys a stock on margin with the following conditions:\n| Purchase price per share | $50 |\n| Equity per share | $25 |\n| Maintenance margin requirement | 25% |\nIf the share price declines, the highest price at which the trader will receive a margin call is closest to:",
        "options": [
            "$12.50.",
            "$33.33.",
            "$37.50."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the original equity of $25 indicates a margin loan of $25 ($50 – $25). At a stock price of $33.33, equity will equal $33.33 less the $25 margin loan, or $8.33, which is 25% of the equity per share. $8.33 / $33.33 ≈ 25%. To reach this answer through calculation, determine where the equity per share equals the 25% margin requirement:\nEquity/Share = (P – L)/P = maintenance margin;\nWhere P = Share price and L = Loan amount;\n0.25 = (P – $25)/P; P ≈ $33.33."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "An investor buys a security on margin posting 50% of the initial price as equity. All else being equal, if the price declines 25%, the investor's new leverage ratio is closest to:",
        "options": [
            "2",
            "3",
            "4"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the leverage ratio is defined as the ratio of the value of the position to the value of the equity investment in it. The leverage ratio indicates how many times larger a position is than the equity that supports it.\nThe starting leverage = value /equity = 1 / 0.5 = 2\nThe change in market value is given as 25% decline, implying a new market value of 75%.\nWith leverage of 2, new equity reduces by 2 × 25% = 50%, 50% × 50% = remaining equity of 25%.\nNew leverage = new value / new equity = 0.75 / 0.25 = 3.\nExpressed alternatively: New leverage = (1 – 0.25) / (0.5 – 0.25) = 3."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "When an investment bank guarantees the sale of an entire issue at a negotiated offering price, this best describes a(n):",
        "options": [
            "rights offering.",
            "best effort offering.",
            "underwritten offering."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because in an underwritten offering—the most common type of offering—the investment bank guarantees the sale of the issue at an offering price that it negotiates with the issuer."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "In a well-functioning financial system, changes in asset prices primarily reflect changes in:",
        "options": [
            "execution costs.",
            "the demand for liquidity.",
            "fundamental asset values."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because well functioning financial systems are characterized by prices that reflect fundamental values so that prices vary primarily in response to changes in fundamental value and not to demands for liquidity made by uninformed traders (informationally efficient markets)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "If the ability of clients to identify competent agents increases, the need for regulation most likely:",
        "options": [
            "decreases.",
            "remains the same.",
            "increases."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because regulation would not be necessary if customers could identify competent agents and effectively measure their performance. Therefore an increase in client ability to identify competent agents would reduce the need for regulation."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "If the cost to fill trades increases, the market's informational efficiency most likely:",
        "options": [
            "decreases.",
            "remains the same.",
            "increases."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because how accurately prices reflect fundamental information depends on the costs of obtaining fundamental information and on the liquidity available to well-informed traders. If filling orders is very costly, informed trading may not be profitable. In that case, information-motivated traders will not commit resources to collect and analyze data and they will not trade. Without their research and their associated trading, prices would be less informative."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "If 1,000 shares of stock purchased at $30 per share on 75% margin are later sold at $26 per share, the return on equity is closest to:\nCorrect answer:",
        "options": [
            "–17.8%.",
            "–13.3%.",
            "–10.0%."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because it has correctly applied margin requirement and calculated the effect of leverage on the return calculation, accordingly:\nCost of purchase = Shares purchased × Purchase price = 1,000 × $30 = $30,000\nInitial investment = Equity invested = Cost of purchase × Margin requirement = $30,000 × 75% = $22,500\nProceeds from sale = Shares sold × Sales price = 1,000 × $26 = $26,000\nLoss on the position = Proceeds from Sale – Cost of purchase = $26,000 – $30,000 = –$4,000\nReturn on investment = Loss on the position / Initial investment = –$4,000 / $22,500 = 0.1777... ≈ 17.78%\nAlternatively, it can also be calculated as Return on investment = Loss on the position / Cost of purchase / Margin requirement = (–$4,000 / $30,000) / 75% = –0.1777... ≈ –17.78%"
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "The market structure that uses trade pricing rules to match buyers and sellers is most likely a(n):",
        "options": [
            "brokered market.",
            "order-driven market.",
            "quote-driven market."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because order-driven trading systems match buyers to sellers using rules that rank the buy orders and the sell orders based on price, and often along with other secondary criteria."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "Which of the following financial intermediaries most likely buy and sell similar instruments at different prices in different markets?",
        "options": [
            "Dealers",
            "Brokers",
            "Arbitrageurs"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because arbitrageurs buy and sell identical or essentially similar instruments at different prices in different markets."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "An investor purchases a nondividend-paying stock using 35% margin. If the stock price rises by 7%, the total return on this leveraged position is closest to:",
        "options": [
            "9.5%.",
            "10.8%.",
            "20.0%."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the leverage ratio is 1 / 35% = 2.86, and the leveraged position return is calculated as the leverage ratio × percentage increase (decrease) in equity = 2.86 × 7% = 20%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "An investor purchases stock on margin by posting 25% as equity. If the purchase price was $40 and the sale price was $30, the total return on the leveraged position is closest to:",
        "options": [
            "–100%.",
            "–33%.",
            "–25%."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the maximum leverage ratio associated with a position financed by the minimum margin requirement is one divided by the minimum margin requirement. With a requirement of 25%, the maximum leverage ratio = 100% position / 25% equity = 4.0. The leverage ratio indicates how much more risky a leveraged position is relative to an unleveraged position. The investor's return on the equity investment will be equal to the maximum leverage ratio × change in the stock price. Change in stock price= ($30 – $40) / $40 = –0.25 = –25%. Return on investment = 4 × –25% = 100% loss. Alternatively, initial equity = $40 × 0.25 = $10 per share. With a price decline of $10 ($40 – $30), there is a 100% loss of equity."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM1 - Market Organization and Structure",
        "text": "The maximum initial leverage ratio associated with a position financed by margin is one divided by:",
        "options": [
            "the minimum margin requirement.",
            "one plus the minimum margin requirement.",
            "one minus the minimum margin requirement."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the maximum leverage ratio associated with a position financed by the minimum margin requirement is one divided by the minimum margin requirement."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM2 - Security Market Indexes",
        "text": "Management of a price-weighted index most likely entails:",
        "options": [
            "rebalancing only.",
            "reconstitution only.",
            "both rebalancing and reconstitution."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because price-weighted indexes are not rebalanced because the weight of each constituent security is determined by its price. Reconstitution is the process of changing the constituent securities in an index."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM2 - Security Market Indexes",
        "text": "Which of the following statements best describes hedge fund indexes?",
        "options": [
            "Index constituents are regulated entities",
            "Potential survivorship bias is reduced by voluntary performance reporting",
            "There may be little overlap in index constituents between different indexes offered by different index providers"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because frequently, a hedge fund reports its performance to only one database. The result is little overlap of funds covered by the different indices. With little overlap between their constituents, different global hedge funds indices may reflect very different performance for the hedge fund industry over the same period of time."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM2 - Security Market Indexes",
        "text": "An analyst gathers the following information about a market-capitalization-weighted index and one of its four constituent stocks:\n| Total Market Capitalization (in $ Billions) |\n| Stock | 20 |\n| Index | 57 |\nIf the stock price is $30 per share and the index value is 100, the stock's weight in the index is closest to:",
        "options": [
            "25%.",
            "30%.",
            "35%."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the stock's weight in a market-capitalization-weighted index = market capitalization of stock / market capitalization of index = $20 billion / $57 billion = 35.08%, which is closest to 35%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM2 - Security Market Indexes",
        "text": "Security market indices most likely serve as proxies for:",
        "options": [
            "nonsystematic risk.",
            "asset classes in asset allocation models.",
            "the fair value of assets in asset-based valuation models."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because indices play a critical role as proxies for asset classes in asset allocation models."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM2 - Security Market Indexes",
        "text": "A multi-market index is most appropriately used as a benchmark:",
        "options": [
            "for a single country ETF.",
            "for a small-capitalization growth stock manager.",
            "to calculate beta for the portfolio of a global stock manager."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because indexes also serve as market proxies when measuring risk-adjusted performance. The beta of an actively managed portfolio allows investors to form a passive alternative with the same level of systematic risk. In this case, multi-market indexes usually comprise indexes from different countries would serve as benchmarks to calculate beta for the portfolios of global stock managers."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM2 - Security Market Indexes",
        "text": "A world equity index is most likely considered a:",
        "options": [
            "style index.",
            "sector index.",
            "multi-market index."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because multi-market indexes usually comprise indexes from different countries and regions and are designed to represent multiple security markets. Multi-market indexes may represent multiple national markets, geographic regions, economic development groups, and, in some cases, the entire world. World indexes are of importance to investors who take a global approach to equity investing without any particular bias toward a particular country or region."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM2 - Security Market Indexes",
        "text": "An analyst gathers the following information about a security index:\n| Period | Return (%) |\n| 1 | 12 |\n| 2 | -8 |\n| 3 | 2 |\nIf the index's value is 100 at the beginning of Period 1, the index's value at the end of Period 3 is closest to:",
        "options": [
            "103",
            "105",
            "106"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because it is the value of the index at the end of Period 3 = Beginning value × (1+Period 1 return) × (1 + Period 2 return) × (1 + Period 3 return) = 100 × (100 + 12%) × (100 – 8%) × (100 + 2%) ≈ 105.10, which is closest to 105."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM2 - Security Market Indexes",
        "text": "The beginning value for an index is 1540 and the ending value is 1575. If the income for the period is 55, the total return of the index is closest to:",
        "options": [
            "1.3%.",
            "2.2%.",
            "5.8%."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the total return of an index is the price appreciation, or change in the value of the price return index, plus income (dividends and/or interest) over the period, expressed as a percentage of the beginning value of the price return index. Total return = (ending index value – beginning index value + income) / beginning index value = (1575 – 1540 + 55) / 1540 = 90 / 1540 = 5.8%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM2 - Security Market Indexes",
        "text": "Fixed-income indexes most likely:",
        "options": [
            "are more easily replicated than equity indexes.",
            "require the provider to estimate the prices of some constituent securities.",
            "are created from a smaller universe of possible constituent securities than the universe of equity securities."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because compared to equity indexes, fixed-income index providers must contact dealers to obtain current prices on constituent securities to update the index or they must estimate the prices of constituent securities using the prices of traded fixed-income securities with similar characteristics."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM2 - Security Market Indexes",
        "text": "As time passes after inception, the value of the price version of an index is:",
        "options": [
            "less than the value of the total return version.",
            "equal to the value of the total return version.",
            "greater than the value of the total return version."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because at inception, the values of the price and total return versions of an index are equal. As time passes, however, the value of the total return index will exceed the value of the price return index."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM2 - Security Market Indexes",
        "text": "A disadvantage of an equal-weighted index is that:",
        "options": [
            "maintaining equal weights requires frequent reconstitution of the index.",
            "securities that represent a relatively large fraction of the target market value are underrepresented.",
            "securities that represent a relatively small fraction of the target market value are underrepresented."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because this is considered a disadvantage of an equal weighted index. Equal weighting has a number of disadvantages. Securities that constitute the largest fraction of the target market value are underrepresented, and securities that constitute a small fraction of the target market value are overrepresented."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM2 - Security Market Indexes",
        "text": "An increase in shares held by controlling shareholders most likely impacts the constituent weightings of a(n):",
        "options": [
            "price-weighted index.",
            "equal-weighted index.",
            "float-adjusted market-capitalization-weighted index."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because float-adjusted market-capitalization-weighted indexes reflect the shares available for public trading (excluding the ones held by controlling shareholders) by multiplying the market price per share by the number of shares available to the investing public (i.e., the float-adjusted market capitalization), which means constituent weights are impacted."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM2 - Security Market Indexes",
        "text": "Equity style indexes most likely represent groups of securities classified by:",
        "options": [
            "geography and sector.",
            "value and/or growth and market capitalization.",
            "asset class and gross domestic product (GDP) weight."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because style indices represent groups of securities classified according to market capitalization, value, growth, or a combination of these characteristics. They are intended to reflect the investing styles of certain investors, such as the growth investor, value investor, and small-cap investor."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM2 - Security Market Indexes",
        "text": "An analyst gathers the following information about an equal-weighted index composed of three stocks:\n| Stock | Beginning-of-Period Price | End-of-Period Price |\n| 1 | $10 | $8 |\n| 2 | $20 | $24 |\n| 3 | $30 | $30 |\nIf there is a 2% return from dividends for each of the three stocks, the total return of the index is:",
        "options": [
            "0%.",
            "2%.",
            "6%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because total return measures price appreciation plus interest, dividends, and other distributions. Thus, the total return of an index is the price appreciation, or change in the value of the price return index, plus income (dividends and/or interest) over the period, expressed as a percentage of the beginning value of the price return index. Price return for Stock 1 = ($8 – $10) / $10 = –0.20 = –20%. Total return = price return + dividends = –20% + 2% = –18%. Price return for Stock 2 = ($24 – $20) / $20 = 0.20 = 20%. Total return = 20% + 2% = 22%. Price return for Stock 3 = ($30 – $30) / $30 = 0.00 = 0%. Total return = 0% + 2% = 2%. The total return of the index = (–18% + 22% + 2%) / 3 = 6% / 3 = 2%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM2 - Security Market Indexes",
        "text": "Over time, which of the following indexes most likely has portfolio weights that shift away from securities that have increased in relative value and toward securities that have fallen in relative value? A:",
        "options": [
            "price-weighted index",
            "fundamentally weighted index",
            "market-capitalization-weighted index"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because fundamentally weighted indexes generally will have a contrarian 'effect' in that the portfolio weights will shift away from securities that have increased in relative value and toward securities that have fallen in relative value whenever the portfolio is rebalanced."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM2 - Security Market Indexes",
        "text": "Which of the following indexes is composed of futures contracts?",
        "options": [
            "Commodity index",
            "Hedge fund index",
            "Broad equity market index"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because commodity indexes consist of futures contracts on one or more commodities."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM2 - Security Market Indexes",
        "text": "An analyst gathers the following information about an index and one security in the index:\n| Metric | Security | Index |\n| Price | €38.00 | --- |\n| Shares outstanding | 540 million | --- |\n| Sum of the prices of all constituent securities | --- | €808.50 |\n| Sum of the market caps of all constituent securities | --- | €420 billion |\n| Number of constituent securities | --- | 18 |\nWhich of the following index-weighting methods most likely gives this security the greatest weight in the index?",
        "options": [
            "Price weighting",
            "Equal weighting",
            "Market capitalization weighting"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because equal weighting results in the largest weight:\nEqual weight = 1 / number of constituent securities = 1 / 18 ≈ 5.6%.\nPrice weight = price of security / sum of all prices of constituent securities = 38 / 808.50 ≈ 4.7%.\nMarket cap weight = price × shares outstanding / sum of all market caps of constituent securities = €38 × 540m / €420b = €20.52b / €420b ≈ 4.9%.\nAlternatively, B is correct because the security's price is less than the average price of the securities in the index and the security's market cap is less than the average market cap of the securities in the index:\nIndex's average price = sum of all prices of constituent securities / number of constituent securities = €808.50 / 18 ≈ €44.92 > security's price of €38.00.\nIndex's average market cap = sum of all market caps of constituent securities / number of constituent securities = €420b / 18 ≈ €23.3b > security's market cap of €20.52b (€38.00 × 540mm). The mathematical fact that both these averages are greater than the price and market cap of the individual security means equal weight must be the correct answer."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM2 - Security Market Indexes",
        "text": "Reconstitution of a security index is best described as the process of changing the:",
        "options": [
            "constituent securities in the index.",
            "weights of the constituent securities in the index.",
            "date on which the index provider reviews the constituent securities."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because reconstitution is the process of changing the constituent securities in an index."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM2 - Security Market Indexes",
        "text": "A total return index reflects:",
        "options": [
            "only the prices of constituent securities.",
            "only the reinvestment of all income received since index inception.",
            "both the prices of constituent securities and the reinvestment of all income received since index inception."
        ],
        "correctAnswer": 2,
        "explanation": "Correct, because a total return index, in contrast, reflects not only the prices of the constituent securities but also the reinvestment of all income received since inception."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM3 - Market Efficiency",
        "text": "With respect to behavioral finance, which of the following is least likely a behavioral bias used to explain pricing anomalies?",
        "options": [
            "Risk aversion",
            "Loss aversion",
            "Overconfidence"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because behavioral finance allows for the possibility that the dislike for risk is not symmetrical, in contrast to the more general models where researchers assume that investors do not like risk (risk aversion), whether the risk is that returns are higher than expected or lower than expected."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM3 - Market Efficiency",
        "text": "In a highly efficient market, a passive investment strategy most likely has:",
        "options": [
            "higher transaction costs than an active strategy.",
            "lower information-seeking costs than an active strategy.",
            "higher risk-adjusted returns before all expenses than an active strategy."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because in a highly efficient market, a passive investment strategy (i.e., buying and holding a broad market portfolio) that does not seek superior risk-adjusted returns is preferred to an active investment strategy because of lower costs (for example, transaction and information-seeking costs)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM3 - Market Efficiency",
        "text": "The observation that a large-capitalization company's stock price is inflated after the company releases unexpected good news at year end is most likely related to the:",
        "options": [
            "value effect.",
            "overreaction effect.",
            "turn-of-the-year effect."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the overreaction effect or anomaly is described as the propensity for investors to overreact to the release of unexpected public information. Therefore, stock prices will be inflated (depressed) for those companies releasing good (bad) information. In other words, inflated (depressed) here means the change of value that is overshooting (undershooting) the fair (intrinsic) value after incorporating the new information, rather than the price action that goes up (down) itself."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM3 - Market Efficiency",
        "text": "A feature of an efficient market is that:",
        "options": [
            "the market reflects all past and present information.",
            "asset prices react to information that is fully anticipated.",
            "an investor can earn consistent, superior, risk-adjusted returns."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because an efficient market is thus a market in which asset prices reflect all past and present information."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM3 - Market Efficiency",
        "text": "A market where security prices fully reflect all publicly known and available information, but not private information, is:",
        "options": [
            "weak-form efficient.",
            "semi-strong-form efficient.",
            "strong-form efficient."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because in a semi-strong-form efficient market, prices reflect all publicly known and available information."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM3 - Market Efficiency",
        "text": "In a weak-form efficient market, which of the following information is reflected in security prices?",
        "options": [
            "Historical prices only",
            "Historical prices and historical trading volumes only",
            "Historical prices, historical trading volumes, and current earnings"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because in the weak-form efficient market hypothesis, security prices fully reflect all past market data, which refers to all historical price and trading volume information."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM3 - Market Efficiency",
        "text": "With respect to behavioral biases, when investors tend to be slow to react to new information and continue to maintain their prior views, this is best described as:",
        "options": [
            "conservatism.",
            "herding behavior.",
            "representativeness."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because conservative investors tend to be slow to react to new information and continue to maintain their prior views or forecasts."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM3 - Market Efficiency",
        "text": "The size effect anomaly results when it is observed that on a risk-adjusted basis small cap companies tend to:",
        "options": [
            "underperform equities of large-cap companies.",
            "perform in line with equities of large-cap companies.",
            "outperform equities of large-cap companies."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the size effect results from the observation that equities of small-cap companies tend to outperform equities of large-cap companies on a risk-adjusted basis."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM3 - Market Efficiency",
        "text": "Behavioral finance:",
        "options": [
            "suggests that behavioral biases only affect novice investors.",
            "provides a possible explanation for a number of pricing anomalies.",
            "relies on the assumption that people consider all available information in decision-making."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the focus of much of the work in this area is on the behavioral biases that affect investment decisions. The behavior of individuals, in particular their behavioral biases, has been offered as a possible explanation for a number of pricing anomalies."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM3 - Market Efficiency",
        "text": "Trading by arbitrageurs most likely:",
        "options": [
            "reduces liquidity.",
            "increases pricing discrepancies.",
            "contributes to market efficiency."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because arbitrageurs are traders who engage in such trades to benefit from pricing discrepancies (inefficiencies) in markets. Such trading activity contributes to market efficiency. The presence of these arbitrageurs helps pricing discrepancies disappear quickly."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM3 - Market Efficiency",
        "text": "Decreased market efficiency is most likely associated with an increase in:",
        "options": [
            "transaction costs.",
            "financial disclosure.",
            "the number of market participants."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because an increase in transaction costs will increase the price discrepancy between market price and efficient price. Higher transaction costs make it more expensive for traders to exploit market inefficiencies, thereby decreasing market efficiency. Inefficiencies may also be unexploitable if the amount of the transaction cost offsets the amount of the price discrepancy. A price discrepancy must be sufficiently large to leave the investor with a profit (adjusted for risk) after taking account of the transaction costs and information-acquisition costs to reach the conclusion that the discrepancy may represent a market inefficiency."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM3 - Market Efficiency",
        "text": "In contrast to the market value of an equity security, intrinsic value is most likely:",
        "options": [
            "not known with certainty.",
            "constant throughout the life of the security.",
            "determined by the intersection of supply and demand."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because market value is the price at which an asset can currently be bought or sold. Intrinsic value (sometimes called fundamental value) is, broadly speaking, the value that would be placed on it by investors if they had a complete understanding of the asset's investment characteristics. Intrinsic value can be estimated but is not known for certain."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM3 - Market Efficiency",
        "text": "The January effect is an example of:",
        "options": [
            "loss aversion.",
            "an earnings surprise.",
            "a market pricing anomaly."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the January effect, has been observed in most equity markets around the world. This anomaly is also known as the \"turn-of-the-year\" effect. The January effect is a time series anomaly and is an observed pricing anomaly."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM3 - Market Efficiency",
        "text": "According to the efficient market hypothesis, if market prices reflect private information, the market is most likely:",
        "options": [
            "strong-form efficient.",
            "weak-form efficient only.",
            "semi-strong-form efficient, but not strong-form efficient."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because in the case of a strong-form efficient market, insiders would not be able to earn abnormal returns from trading on the basis of private information. Market prices reflect private information under strong form market efficiency."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM3 - Market Efficiency",
        "text": "Which of the following market anomalies is best described as a time-series anomaly?",
        "options": [
            "Size effect",
            "Momentum",
            "Initial Public Offerings"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the momentum anomaly is best described as a time-series anomaly. Momentum anomalies relate to short-term share price patterns where past price movements continued through time to move in the same direction."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM3 - Market Efficiency",
        "text": "Fundamental analysis most likely:",
        "options": [
            "uses stock price patterns to trade.",
            "is an input for passive portfolio management.",
            "helps participants understand the value implications of information."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because fundamental analysis is necessary in a well-functioning market because this analysis helps the market participants understand the value implications of information."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM3 - Market Efficiency",
        "text": "Over the long run, if a market is semi-strong-form efficient, which of the following investment strategies should result in the highest return to investors? A(n):",
        "options": [
            "passive investment strategy",
            "active trading strategy seeking to exploit price patterns",
            "active trading strategy seeking to exploit public information"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because if securities markets are weak-form and semi-strong-form efficient, the implication is that active trading, whether attempting to exploit price patterns or public information, is not likely to generate abnormal returns. In other words, portfolio managers cannot beat the market on a consistent basis, so therefore, passive portfolio management should outperform active portfolio management."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM3 - Market Efficiency",
        "text": "In which of the following forms of market efficiency are investors able to consistently outperform the market using fundamental analysis?",
        "options": [
            "Weak-form market efficiency",
            "Semi-strong-form market efficiency",
            "Strong-form market efficiency"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because in the weak form of market efficiency, market prices reflect all past market data; however, it does not incorporate all public information. Therefore, investors may use fundamental analysis to outperform the market."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "The voting method that allows shareholders to cast all their votes for a single candidate is best described as:",
        "options": [
            "proxy voting.",
            "statutory voting.",
            "cumulative voting."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because cumulative voting allows shareholders to direct their total voting rights to specific candidates, as opposed to statutory voting having to allocate their voting rights evenly among all candidates."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "Management is more likely to focus on short-term results instead of long-term earnings growth if a company raises equity through:",
        "options": [
            "venture capital.",
            "a leveraged buyout.",
            "an initial public offering."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because in operating a publicly traded company, management often feels pressured to focus on short-term results (e.g., meeting quarterly sales and earnings targets from analysts biased toward near-term price performance) instead of operating the company to obtain long-term sustainable revenue and earnings growth."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "Common shares that are tradeable on different stock exchanges in different currencies are best described as:",
        "options": [
            "global registered shares.",
            "global depository receipts.",
            "a basket of listed depository receipts."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because a global registered share (GRS) is a common share that is traded on different stock exchanges around the world in different currencies."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "The book value of a company's equity is:",
        "options": [
            "the present value of its future cash flows.",
            "the difference between its total assets and total liabilities.",
            "its share price multiplied by the number of outstanding shares."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the book value of a company's equity is the difference between its total assets and total liabilities."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "All else being equal, which of the following preference shares pays the lowest dividend?",
        "options": [
            "Putable",
            "Callable",
            "Non-callable"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because from an investor's point of view, putable common or preference shares are less risky than their callable or non-callable counterparts because they give the investor the option to sell the shares to the issuer at a pre-determined price. As a result, putable shares generally pay a lower dividend than non-putable shares."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "Which of the following is least likely to directly affect a company's book value?",
        "options": [
            "Changes in the company's net income",
            "Purchases by the company of its own shares",
            "Investor estimates of the company's future cash flows"
        ],
        "correctAnswer": 2,
        "explanation": "Incorrect because changes in a company's net income directly affect the book value of the company."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "A company's ROE most likely decreases if shareholders' equity increases at:",
        "options": [
            "a lower rate than net income.",
            "the same rate as net income.",
            "a higher rate than net income."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because ROE can increase if net income increases at a faster rate than shareholders' equity or if net income decreases at a slower rate than shareholders' equity."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "Global depository receipts are most likely:",
        "options": [
            "issued outside the US.",
            "listed on US exchanges.",
            "denominated in the currency of the issuing company."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because a global depository receipt (GDR) is issued outside of the company's home country and outside of the United States."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "If investors believe a company has a large number of positive net present value investment opportunities, the company's book value will most likely be:",
        "options": [
            "less than the market value.",
            "equal to the market value.",
            "greater than the market value."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the market value of the company's equity reflects investor's collective assessment and expectations about the company's future cash flows generated by its positive net present value investment opportunities. If investors believe that the company has a large number of these future cash flow-generating investment opportunities, the market value of the company's equity will exceed its book value."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "Investors' minimum required rate of return on a company's stock is most directly measured by the:",
        "options": [
            "CAPM.",
            "company's ROE.",
            "company's WACC."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because two models commonly used to estimate a company's cost of equity (or investors' minimum required rate of return) are the dividend discount model (DDM) and the capital asset pricing model (CAPM)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "Which of the following methods of raising capital most likely provides mezzanine financing to early-stage companies?",
        "options": [
            "Venture capital",
            "Initial public offering (IPO)",
            "Private investment in public equity (PIPE)"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because venture capital investments provide 'seed' or start-up capital, early-stage financing, or mezzanine financing to companies that are in the early stages of development and require additional capital for expansion."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "Which of the following types of preference shares entitles shareholders to receive an additional dividend if the company's profits exceed a pre-specified level?",
        "options": [
            "Cumulative",
            "Convertible",
            "Participating"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because participating preference shares entitle the shareholders to receive the standard preferred dividend plus the opportunity to receive an additional dividend if the company's profits exceed a pre- specified level."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "Management actions most directly affect a company's:",
        "options": [
            "book value.",
            "market value.",
            "intrinsic value."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because management actions can directly affect the book value of the company (by increasing net income or by selling or purchasing its own shares)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "The discounted value of a company's future projected cash flows is best described as its:",
        "options": [
            "book value.",
            "market value.",
            "intrinsic value."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the company's intrinsic value is the present value of its future projected cash flows."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "Which of the following shareholder groups benefits the most by using cumulative voting?",
        "options": [
            "Preference shareholders",
            "Shareholders with a large number of shares",
            "Shareholders with a small number of shares"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because cumulative voting allows shareholders to direct their total voting rights to specific candidates, as opposed to having to allocate their voting rights evenly among all candidates. The key benefit to cumulative voting is that it allows shareholders with a small number of shares to apply all of their votes to one candidate, thus providing the opportunity for a higher level of representation on the board than would be allowed under statutory voting."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "In a management buyout transaction, a public company is most likely privatized through the:",
        "options": [
            "issue of new shares to management.",
            "issue of new shares by management.",
            "purchase of publicly listed shares by management."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because a leveraged buyout (LBO) occurs when a group of investors (such as the company's management or a private equity partnership) uses a large amount of debt to purchase all of the outstanding common shares of a publicly traded company. In cases where the group of investors acquiring the company is primarily comprised of the company's existing management, the transaction is referred to as a management buyout (MBO). After the shares are purchased, they cease to trade on an exchange and the investor group takes full control of the company. In other words, the company is taken \"private\" or has been privatized."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "If a company raises equity capital in order to continue as a going concern rather than fund revenue-generating activities, the capital is most likely used to:",
        "options": [
            "acquire other companies.",
            "purchase long-lived assets.",
            "ensure that debt covenants are met."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because a company may be forced to raise capital to ensure that it continues to operate as a going concern. In these cases, capital is raised to fulfill regulatory requirements, improve capital adequacy ratios, or to ensure that debt covenants are met."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "Preference shares that provide the investor with an opportunity to share in the profits of the company are best described as:",
        "options": [
            "cumulative.",
            "convertible.",
            "non-cumulative."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because convertible preference shares allow investors the opportunity to share in the profits of the company."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "Common shares most likely rank above preference shares with respect to:\nCorrect answer:",
        "options": [
            "voting rights.",
            "the payment of dividends.",
            "the distribution of the company's net assets upon liquidation."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because preference shareholders generally do not share in the operating performance of the company and do not have any voting rights."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM4 - Overview of Equity Securities",
        "text": "All else being equal, convertible preference shares most likely:",
        "options": [
            "are more volatile than the underlying common shares.",
            "pay lower dividends than the underlying common shares.",
            "allow investors to share in the underlying company's profits after conversion."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because convertible preference shares allow investors the opportunity to share in the profits of the company."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM5 - Company Analysis: Past and Present",
        "text": "Downside and upside risk factors are most likely included in:",
        "options": [
            "an initial company research report only.",
            "a subsequent company research report only.",
            "both initial and subsequent company research reports."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because downside and upside risk factors are part of the company research report element \"Risks\" which is not only part of the initial company research report elements but also listed amongst the five elements for the subsequent company research report: 1. Front Matter, 2. Recommendation, 3. Analysis of New Information, 4. Valuation and 5. Risks."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM5 - Company Analysis: Past and Present",
        "text": "A natural resources company having access to cheap energy most likely will be able to sell its output:",
        "options": [
            "at market price.",
            "above market price.",
            "at a price unilaterally set by management."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because in the most competitive markets, where firms are selling nearly identical products, firms are price takers—that is, price is dictated by the forces of supply and demand—and all firms generally sell at the same price, i.e. the prevailing market price. Other attributes of highly competitive markets include little to no product differentiation, low barriers to firm entry, available substitutes, a lack of customer loyalty, and low switching costs for customers. Many markets fit this description, including retail, oil and gas and other natural resources."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM5 - Company Analysis: Past and Present",
        "text": "Which of the following is best described as a source of capital?",
        "options": [
            "Debt issuances",
            "Share repurchases",
            "Positive net working capital"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because issuing debt will raise money for a company and so is a source of capital, not a use."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM5 - Company Analysis: Past and Present",
        "text": "Within Porter's five forces framework, the power of buyers within an industry is most likely influenced by the:",
        "options": [
            "industry concentration.",
            "availability of lower priced alternative brands.",
            "number of customers for the industry's products."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the smaller the number of buyers, the more likely buyer power will increase: Bargaining Power of Customers. Affected by: size and concentration of customers, costs of switching to other suppliers, customers' ability to produce the product or service themselves. Are customers able to force price reductions or better payment terms? This can affect the intensity of competition by exerting influence on suppliers regarding prices (and possibly other factors such as product quality). For example, auto parts companies generally sell to a small number of auto manufacturers, which allows those customers, the auto manufacturers, to be tough negotiators when it comes to setting prices."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM5 - Company Analysis: Past and Present",
        "text": "The Global Industry Classification Standard's broadest level of classification is a(n):",
        "options": [
            "sector.",
            "industry.",
            "industry group."
        ],
        "correctAnswer": 0,
        "explanation": "Incorrect because a sector is the broadest level of classification. Each industry belongs to an industry group; and each group belongs to a sector."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM5 - Company Analysis: Past and Present",
        "text": "External factors affecting an industry's growth most likely include:",
        "options": [
            "cost structures.",
            "economies of scale.",
            "technological influences."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because external factors affecting an industry's growth include macroeconomic, technological, demographic, governmental, and social influences."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM5 - Company Analysis: Past and Present",
        "text": "Commercial industry classification systems are most likely updated:",
        "options": [
            "less frequently than government classification systems.",
            "as frequently as government classification systems.",
            "more frequently than government classification systems."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because most government and commercial classification systems are reviewed and, if necessary, updated from time to time. Generally, commercial classification systems are adjusted more frequently than government classification systems, which may be updated only every five years or so."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM5 - Company Analysis: Past and Present",
        "text": "Porter's five determinants of the intensity of competition in an industry do not include the:",
        "options": [
            "power of buyers.",
            "threat of substitutes.",
            "position of a company in its life-cycle stage."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the position of a company in its life-cycle stage is not part of Porter's five forces. The five forces are: threat of entry, power of suppliers, power of buyers, threat of substitutes, and rivalry among existing competitors."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM5 - Company Analysis: Past and Present",
        "text": "Which of the following best describes an industry-level force in a thorough industry analysis?",
        "options": [
            "Threat of new entrants",
            "Demographic influences",
            "Technological influences"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because industry-level forces driving industry competition include: threat of new entrants, substitution threats, customer and supplier bargaining forces, the competitive forces in the industry (rivalry), life-cycle issues, and business-cycle considerations."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM5 - Company Analysis: Past and Present",
        "text": "Which of the following industries or sectors is most likely classified as cyclical?",
        "options": [
            "Utilities",
            "Industrials",
            "Health care"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because examples of cyclical industries and broader sectors are autos, housing, basic materials, industrials, and technology."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM5 - Company Analysis: Past and Present",
        "text": "Industry classification systems are developed and used by:",
        "options": [
            "commercial entities only.",
            "governmental agencies only.",
            "both commercial entities and governmental agencies."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because industry classification systems are developed and used by both commercial entities and various governmental agencies."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM5 - Company Analysis: Past and Present",
        "text": "Which of the following is considered an external influence on industry growth?",
        "options": [
            "Social trends",
            "Barriers to entry",
            "Industry concentration"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because external factors affecting an industry's growth include macroeconomic, technological, demographic, governmental, and social influences."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM5 - Company Analysis: Past and Present",
        "text": "Industries whose revenues and profits are least affected by fluctuations in the overall economy are most likely:",
        "options": [
            "growth industries.",
            "cyclical industries.",
            "defensive industries."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because defensive industries and companies are those whose revenues and profits are least affected by fluctuations in overall economic activity. These industries/companies tend to produce staple consumer goods (e.g., bread), to provide basic services (grocery stores, drug stores, fast food outlets)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM5 - Company Analysis: Past and Present",
        "text": "Which of the following is most likely a demographic influence on industry growth?",
        "options": [
            "Lifestyle",
            "Distribution of age",
            "Spending behavior"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because changes in distribution of age happen due to demographic influence. Changes in population size, in the distributions of age and gender, and in other demographic characteristics may have significant effects on economic growth and on the amounts and types of goods and services consumed."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM5 - Company Analysis: Past and Present",
        "text": "Which of the following statements about forecasting selling, general and administrative (SG&A) expenses is most accurate?",
        "options": [
            "General corporate costs are mostly variable costs",
            "Selling and distribution expenses can be modeled as a percentage of sales",
            "Overall SG&A expenses have a more direct relationship with revenues than cost of goods sold"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because selling and distribution expenses often have a large variable component and can be modeled as a percentage of sales."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM5 - Company Analysis: Past and Present",
        "text": "Which of the following statements about scenario analysis is most accurate?",
        "options": [
            "Scenario analysis provides a point estimate forecast",
            "Forecast scenarios can be compared to forecasts implied by current valuations",
            "Generic risk factors in scenario analysis are assumed to affect all companies in the same way"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because investors compare these scenarios with other analysts' (e.g., sell-side analysts') forecasts for a company, as well as forecasts implied by current valuations, to make investment decisions."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM5 - Company Analysis: Past and Present",
        "text": "Which financial statement forecasting approach is best suited for companies in highly cyclical industries?",
        "options": [
            "Historical results",
            "Management guidance",
            "Analyst's discretionary forecasts"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because analyst's discretionary forecasts include those based on surveys, quantitative models, probability distributions, analogies to historical precedents that differ from comparable companies or industry averages, and other unobservable inputs. This approach is most common for companies in cyclical industries, companies that have no or few comparables, those that do not provide management guidance, and/or those undergoing a fundamental change like a shift in the competitive or regulatory environment."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM5 - Company Analysis: Past and Present",
        "text": "Which of the following forecast objects for a bank's revenue is best classified as a top-down driver?",
        "options": [
            "Net interest income",
            "Growth in market share",
            "Growth in the number of branches"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because forecast objects for revenues are typically either top-down or bottom-up drivers. Common top-down forecast objects include 'growth relative to GDP growth' and 'market growth and market share.' The analyst first forecasts a growth rate for a company's product market, and then considers the company's current market share and how that share is likely to change over time."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM5 - Company Analysis: Past and Present",
        "text": "Depreciation expense is best used in forecasting:",
        "options": [
            "growth capital expenditure only.",
            "maintenance capital expenditure only.",
            "both growth capital expenditure and maintenance capital expenditure."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because depreciation expense can serve as the basis for maintenance capital expenditures, as it is management's estimate of the cost of fixed assets expensed on the income statement in a manner that tracks its use."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "Asset-based valuation most likely uses estimates of the company's:",
        "options": [
            "assets only.",
            "assets and liabilities only.",
            "assets, liabilities, and projected cash flow."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because an asset-based valuation of a company uses estimates of the market or fair value of the company's assets and liabilities."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "A stock dividend:",
        "options": [
            "is relevant for valuation of a company.",
            "involves a reduction in the number of shares outstanding.",
            "does not affect the shareholders' proportional ownership in the company."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because a stock dividend divides the \"pie\" (the market value of shareholders' equity) into smaller pieces without affecting the value of the pie or any shareholder's proportional ownership in the company."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "All else being equal, a reverse stock split results in:",
        "options": [
            "a decrease in the number of shares and an increase in the share price.",
            "an increase in the number of shares and a decrease in the share price.",
            "an increase in the number of shares and an increase in the share price."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because a reverse stock split involves a reduction in the number of shares outstanding with a corresponding increase in share price."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "In dividend payment chronology, the ex-dividend date most likely comes after the:",
        "options": [
            "record date.",
            "payment date.",
            "declaration date."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because first is the declaration date, the day that the company issues a statement declaring a specific dividend. Next comes the ex-dividend date (or ex- date), the first date that a share trades without (i.e., \"ex\") the dividend."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "All else being equal, which of the following are equivalent to stock dividends in terms of the economic effect on the company and shareholders?",
        "options": [
            "Stock splits",
            "Cash dividends",
            "Share repurchases"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because a stock dividend divides the \"pie\" (the market value of shareholders' equity) into smaller pieces without affecting the value of the pie or any shareholder's proportional ownership in the company. Thus, stock dividends are not relevant for valuation. Stock splits and reverse stock splits are similar to stock dividends in that they have no economic effect on the company or shareholders."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "A firm reports negative earnings for the year just ended. The price multiple of the firm's stock that is least likely to be meaningful is:",
        "options": [
            "price to cash flow.",
            "trailing price to earnings.",
            "leading price to earnings."
        ],
        "correctAnswer": 1,
        "explanation": "Correct. Negative earnings in the last year result in a negative ratio of trailing price to earnings and are not meaningful. Practitioners may use the ratio of (1) current price to cash flow or (2) leading price to earnings by replacing last year's loss with forecasted earnings."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "A $25 par value non-callable, non-convertible preferred share pays an annual dividend rate of 5%. If the required rate of return is 4%, the preferred share's intrinsic value is closest to:",
        "options": [
            "$25.25.",
            "$26.00.",
            "$31.25."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the estimated intrinsic value (V0) is: , where D0 = dividend, and r = the required rate of return. The D0 = par value × annual dividend rate = $25 × 0.05 = $1.25. V0 = $1.25 / 0.04 = $31.25."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "An analyst gathers the following information about a company's shares:\n| Dividend payable per share | $0.50 |\n| Ex-date | 20 August |\n| Closing share price on 19 August | $29.00 |\nAll else being equal, at the beginning of trading on 20 August, the company's shares will most likely trade at:",
        "options": [
            "$28.50.",
            "$29.00.",
            "$29.50."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the ex-dividend date (or ex-date) is the first date that a share trades without (i.e., 'ex') the dividend. Because buyers of a company's shares on the ex-dividend date are no longer eligible to receive the upcoming dividend, all else being equal, on that day the company's share price immediately decreases by the amount of the foregone dividend. If the share traded at $29.00 on 19 August (the day before ex-date) and the upcoming dividend is $0.50, then all else being equal, the shares would trade at $28.50 ($29.00 - $0.50) on the ex-date."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "An analyst gathers the following information about a company and its common stock:\n| Forward P/E | 8 |\n| Required rate of return | 12% |\n| Dividend growth rate | 4% |\nUsing the Gordon growth model, the company's dividend payout ratio is closest to:",
        "options": [
            "8%.",
            "33%.",
            "64%."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to the Gordon growth model equations and therefore where E1 forecast for next year's earnings, p = dividend payout ratio, D1 = forward dividend, r = require rate of return, and g = dividend growth rate, the dividend payout ratio p = 8.0 × (0.12 – 0.04) = 0.64 = 64%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "An analyst gathers the following information about a company and the economy:\n| Current share price | €36 |\n| Forward P/E ratio | 22 |\n| Nominal risk-free rate | 2.5% |\n| Risk premium | 6.0% |\n| Expected retention rate | 60% |\nThe best estimate of the company's dividend growth rate is:",
        "options": [
            "5.8%.",
            "6.7%.",
            "7.4%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because justified forward P/E = p / (r – g), where p = payout ratio = (1 – retention rate) and r = required rate of return = nominal risk-free rate + risk premium.\n22 = (1 – 0.60) / ((0.025 + 0.06) – g).\n22 = 0.40 / (0.085 – g) and g = 0.0668 ≈ 6.7%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "All else being equal, an increase in which of the following most likely increases a company's enterprise value?",
        "options": [
            "Book value of debt",
            "Market value of investments",
            "Market value of preferred stock"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because enterprise value is most frequently determined as market capitalization plus market value of preferred stock plus market value of debt minus cash and investments (cash equivalents and short-term investments). Therefore, enterprise value increases with an increase in the market value of preferred stock."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "Enterprise value is most likely associated with:",
        "options": [
            "multiplier models.",
            "present value models.",
            "asset-based valuation models."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because multiplier models are based chiefly on share price multiples or enterprise value multiples. Enterprise value (EV) multiples have the form (Enterprise value)/(Value of a fundamental variable). Two possible choices for the denominator are earnings before interest, taxes, depreciation, and amortization (EBITDA) and total revenue."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "An analyst gathers the following information about an industry and three comparable companies within the industry:\n| Metric | Company 1 | Company 2 | Company 3 | Industry Average |\n| Price/sales | 8.9 | 3.2 | 5.7 | 6.2 |\n| Price/book | 5.7 | 2.6 | 2.3 | 4.7 |\nBased only on this information, the most overvalued company is:",
        "options": [
            "Company 1.",
            "Company 2.",
            "Company 3."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because Company 1's P/S and P/B are both the highest compared to those of its two peers and the industry average. All else being equal, high P/S and P/B multiples point to relatively expensive valuations. Therefore, in the absence of conflict between the indications given by P/S and P/B (as both measures are the highest for the same company), the company most likely to be overvalued is Company 1."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "An analyst gathers the following book value information about a company and its common shares:\n| Inventories | €20 million |\n| Net fixed assets | €80 million |\n| Total assets | €150 million |\n| Total liabilities | €90 million |\n| Shares outstanding | 4 million |\nThe analyst estimates the market value of net fixed assets to be 125% of book value and the market value of inventories to be 90% of book value. If the stock is currently trading at €19.50 per share, the asset-based value per share is most likely:",
        "options": [
            "less than the market price.",
            "equal to the market price.",
            "greater than the market price."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the asset-based per share value is: market value of assets less market value liabilities = (Total assets + increase in net fixed assets – decrease in inventories – total liabilities) / shares outstanding = [(150 + ((80 × 1.25) – 80) + ((20 × 0.90) – 20) – 90)] / 4 = (150 + 20 – 2 – 90) / 4 = 19.50. This is the same as the market price."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "All else being equal, which of the following has the same effect on shareholders' wealth as a cash dividend?",
        "options": [
            "A stock split",
            "A stock dividend",
            "A share repurchase"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because a share repurchase is viewed as equivalent to the payment of cash dividends of equal value in terms of the effect on shareholders' wealth, all other things being equal."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "Asset-based valuation models are most appropriate for companies with a high proportion of:",
        "options": [
            "illiquid assets.",
            "current assets.",
            "intangible assets."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because asset-based valuations work well for companies that do have a high proportion of current assets and current liabilities."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "The dividend discount model assumes that dividends are paid:",
        "options": [
            "quarterly.",
            "half yearly.",
            "at the end of each year."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to the dividend discount model, each year's dividend Dt is the expected dividend in year t, assumed to be paid at the end of the year."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "When using a multiplier model, the fundamental variable is stated on:",
        "options": [
            "a trailing basis only.",
            "a forward basis only.",
            "either a trailing basis or a forward basis."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the fundamental variable may be stated on a forward basis (e.g., forecasted EPS for the next year) or a trailing basis (e.g., EPS for the past year), as long as the usage is consistent across companies being examined."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "A free-cash-flow-to-equity model is a(n):",
        "options": [
            "multiplier model.",
            "present value model.",
            "asset-based valuation model."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because present value models include free-cash-flow-to-equity models."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "An analyst gathers the following information about common shares:\n| Metric | Company | Peer Group |\n| Dividend payout ratio | 40% | 50% |\n| Estimated future dividend growth rate | 5% | 4% |\nIf the investor's required rate of return is 9%, the company's justified forward P/E is:",
        "options": [
            "less than the peer group's justified forward P/E.",
            "the same as the peer group's justified forward P/E.",
            "greater than the peer group's justified forward P/E."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the company's justified forward P/E is the same as the peer group's justified forward P/E. The company's justified forward P/E = p / (r – g) = 0.40 / (0.09 – 0.05) = 10.0. The peer group's justified forward P/E = 0.50 / (0.09 – 0.04) = 10.0."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "An analyst gathers the following information about a company and its historical price multiples:\n| Metric | Current | Historical |\n| EPS | $3.00 | --- |\n| Cash flow per share | $4.00 | --- |\n| Book value per share | $40.00 | --- |\n| P/B | --- | 0.6 |\n| P/E | --- | 12.0 |\n| P/CF | --- | 8.0 |\nBased only on this information, if the share price is $30, the company's shares are most likely overvalued based on:",
        "options": [
            "P/B.",
            "P/E.",
            "P/CF."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the P/B value for the company is $30 / $40 = 0.75, which is above the benchmark ratio of 0.6, indicating the shares are overvalued based on P/B (i.e. the ratio is higher than the benchmark). Both the P/E and P/CF ratios for the company are below their respective benchmarks, and therefore are not overvalued on that basis."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "A non-callable, non-convertible perpetual preferred share pays a level dividend of $1.20 with a current market price of $20. If an investor has a required rate of return of 6%, the preferred shares are most likely:",
        "options": [
            "undervalued.",
            "fairly valued.",
            "overvalued."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the market price is equal to the calculated value based on the stated rate of return. Since the preferred share pays a perpetual level dividend, its value is V0 = D0/r = $1.20/0.06 = $20. If the estimated value equals the market price, the analyst infers the security is fairly valued."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "An analyst gathers the following information about a company:\n| Estimated forward P/E ratio | 8 |\n| Retention rate | 45% |\nIf the investor's required rate of return is 10%, the company's ROE is closest to:",
        "options": [
            "6.9%.",
            "8.0%.",
            "9.7%."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because P0/E1 = p/(r – g), where g = b × ROE\nRestating the equation we arrive at: P0/E1 = p/(r – (b × ROE)) where:\np = dividend payout ratio = (1 – retention rate) = (1 – b)\nr = required rate of return on the stock\ng = dividend growth rate = retention rate × ROE\nTherefore, P0/E1 = p/(r – (b × ROE)) is rearranged as: P0/E1 = (1 – b)/(r – (b × ROE))\nRearranging this equation we arrive at: ROE = (((1 – b)/(P0/E1)) – r)/–b\nROE = (((1 – 45%)/8) – 10%)/–45% ≈ 6.9%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "An analyst gathers the following data for three companies in the same industry (in millions):\n| Company | Enterprise Value (EV) | Earnings Before Interest, Taxes, Depreciation, & Amortization (EBITDA) |\n| 1 | $100 | $8 |\n| 2 | $150 | $10 |\n| 3 | $200 | $15 |\nBased on enterprise value multiples, which of the three companies is likely the most undervalued?",
        "options": [
            "Company 1",
            "Company 2",
            "Company 3"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because EV is often viewed as the cost of a takeover and EBITDA is a proxy for operating cash flow. Companies with relatively low EV/EBITDA multiples are likely to be undervalued.\nCompany 1 has the lowest EV/EBITDA multiple among the three.\nCompany 1: EV/EBITDA = 100,000,000 / 8,000,000 = 12.5;\nCompany 2: EV/EBITDA = 150,000,000 / 10,000,000 = 15.0;\nCompany 3: EV/EBITDA = 200,000,000 / 15,000,000 = 13.3."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "A company's perpetual preferred stock has a $100 par value and a $1.50 quarterly dividend. The required rate of return is 5%. The intrinsic value of the preferred stock is most likely:",
        "options": [
            "less than the par value.",
            "equal to the par value.",
            "greater than the par value."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the dividend yield is 6% ((4 × 1.50) / 100) which is higher than the required return (5%), so the preferred shares will be valued above par. Alternatively, the intrinsic value (V0) = D0 / r, where D0 is the preferred stock's constant annual dividend and r is the required rate of return. V0 = (4 × 1.50) / 0.05 = $120 which is higher than the par value."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "An analyst valuing a stock makes the following assumptions:\n• the required return does not change,\n• the dividend growth rate does not change,\n• the dividend growth rate is less than the required return.\nThe most appropriate model to value this stock is the:",
        "options": [
            "Gordon growth model.",
            "two-stage dividend discount model.",
            "three-stage dividend discount model."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the assumptions of the Gordon model are as follows: Dividends are the correct metric to use for valuation purposes; The dividend growth rate is forever: It is perpetual and never changes; The required rate of return is also constant over time; The dividend growth rate is strictly less than the required rate of return."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "An analyst gathers the following information about a company and its non-callable, non-convertible, perpetual preferred stock:\n| Estimated EPS growth rate | 6.00% |\n| Par value per share | €25.00 |\n| Dividend per share (annual) | €1.55 |\nIf the analyst estimates the intrinsic value to be €26.00 per share, the required rate of return is closest to:",
        "options": [
            "5.96%.",
            "6.20%.",
            "6.32%."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the intrinsic value of a non-callable, non-convertible, perpetual preferred share is: V0 = D0 / r. Solving for r = D0 / V0 = €1.55 / €26.00 ≈ 5.96%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "An analyst gathers the following information about a common stock:\n| Current dividend (D0) | €1.10 |\n| Dividend growth rate: Years 1 and 2 | 15% |\n| Dividend growth rate: Year 3 and beyond | 3% |\n| Required rate of return on equity | 7% |\nThe stock's intrinsic value is closest to:",
        "options": [
            "€33.90.",
            "€34.22.",
            "€35.17."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the stock's value based on the multistage dividend discount model is as follows:\nV0 = D0 × (1 + gS) / (1 + r) + D0 × (1 + gS)^2 / (1 + r)^2 + P2 / (1 + r)^2\nV0 = D0 × (1 + gS) / (1 + r) + D0 × (1 + gS)^2 / (1 + r)^2 + (D0 × (1 + gS)^2 × (1 + gL)) / (r – gL)) / (1 + r)^2\nV0 = (1.10 × 1.15) / 1.07 + (1.10 × 1.15^2) / 1.07^2 + ((1.10 × 1.15^2 × 1.03) / (0.07 – 0.03)) / 1.07^2\nV0 = €35.17.\nWhere: V0 = intrinsic value of stock\nDt = dividend at time t\nr = required rate of return\ngS = dividend growth rate for year 1 and year 2\ngL = dividend growth rate for year 3 and beyond."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "An analyst gathers the following per share estimates for a company's stock:\n| Year 1 dividend (D1) | $4.00 |\n| Year 2 dividend (D2) | $4.40 |\n| Stock price at end of Year 2 | $50.00 |\nUsing the dividend discount model, if the required rate of return is 10% and the stock's current market price is $50.00, the stock is most likely:",
        "options": [
            "undervalued.",
            "fairly valued.",
            "overvalued."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because using the dividend discount model, the stock's intrinsic value (V0) is given by:\nintrinsic value =\nwhere:\nV0 = value of a share of stock today, at t = 0;\nDt = expected dividend in year t, assumed to be paid at the end of the year;\nr = required rate of return on the stock\nn = number of holding periods; in this case n = 2\nTherefore, V0 = $4.00/(1+10%) + $4.40/(1+10%)^2 + $50.00/(1+10%)^2 = $3.64 + $3.64 + $41.32 = $48.60. Therefore the stock's intrinsic value is less than the current market price for the stock ($50.00) and as such the stock is considered overvalued. If the estimated value is less than the market price, the analyst infers the security is overvalued."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "The free-cash-flow-to-equity model:",
        "options": [
            "excludes net borrowings.",
            "can be used to value non-dividend paying stocks.",
            "requires an estimate of future dividend payments."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because analysts may also use FCFE valuation models for a non-dividend-paying stock."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "At which of the following days does a buyer of a company's shares first become no longer eligible to receive a dividend?",
        "options": [
            "Day before the ex-dividend date",
            "Ex-dividend date",
            "Day after the ex-dividend date"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because buyers of a company's shares on the ex-dividend date are no longer eligible to receive the upcoming dividend, all else being equal, on that day the company's share price immediately decreases by the amount of the foregone dividend."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Equity Investments",
        "lm": "LM6 - Equity Valuation: Concepts and Basic Tools",
        "text": "An advantage of using price multiples in valuation is most likely that multiples:",
        "options": [
            "allow easy cross-sectional comparisons.",
            "are not affected by differences in accounting rules.",
            "for cyclical companies are relatively stable over the economic cycle."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the major advantage of using price multiples is that they allow for relative comparisons, both cross-sectional (versus the market or another comparable) and in time series. The approach can be especially beneficial for analysts who are assigned to a particular industry or sector and need to identify the expected best performing stocks within that sector. Price multiples are popular with investors because the multiples can be calculated easily and many multiples are readily available from financial websites and newspapers."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM1 - Ethics and Trust in the Investment Profession",
        "text": "A profession is most likely described as a group of people that:",
        "options": [
            "has a common level of basic knowledge about a particular subject.",
            "monitors its members based on an agreed-on code of ethics.",
            "puts the interests of its members first."
        ],
        "correctAnswer": 1,
        "explanation": "Correct. A profession is practiced by members who share and agree to adhere to a common code of ethics, and a profession is based on a specialized knowledge and skills and service to others."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM1 - Ethics and Trust in the Investment Profession",
        "text": "Most societies would least likely consider ethical principles to include:",
        "options": [
            "justice.",
            "duplicity.",
            "diligence."
        ],
        "correctAnswer": 1,
        "explanation": "Correct. Most societies acknowledge the ethical principles of honesty, fairness or justice, diligence, and respect for the rights of others. Duplicity or deception would be in violation of most ethical principles."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM2 - Code of Ethics and Standards of Professional Conduct",
        "text": "Oversight of the Professional Conduct Program is the responsibility of the:",
        "options": [
            "Professional Conduct staff.",
            "Disciplinary Review Committee.",
            "CFA Institute Board of Governors."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the CFA Institute Board of Governors maintains oversight and responsibility for the Professional Conduct Program (PCP), which, in conjunction with the Disciplinary Review Committee (DRC), is responsible for enforcement of the Code and Standards."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM2 - Code of Ethics and Standards of Professional Conduct",
        "text": "Which of the following is one of the seven CFA Institute Standards of Professional Conduct?",
        "options": [
            "Duties to Employers",
            "Performance Integrity",
            "Disclosure of Transactions"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because Duties to Employers is Standard IV."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM2 - Code of Ethics and Standards of Professional Conduct",
        "text": "The CFA Institute Code of Ethics (the Code) and Standards of Professional Conduct (the Standards) require members to:",
        "options": [
            "encourage others to practice in a professional and ethical manner only.",
            "promote the integrity and viability of the global capital markets for the ultimate benefit of the investment profession only.",
            "both encourage others to practice in a professional and ethical manner and promote the integrity and viability of the global capital markets for the ultimate benefit of the investment profession."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the Code of Ethics and Standards of Professional Conduct states that members of CFA Institute (including CFA charterholders) and candidates for the CFA designation (Members and Candidates) must practice and encourage others to practice in a professional and ethical manner that will reflect credit on themselves and the profession."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Robin Herring, CFA, is a government bond research analyst at an independent credit rating agency. A competitor credit rating agency just downgraded the bonds of a government Herring follows. Herring notes that all of the information in the competitor's report was covered in his analysis published last week. In the past, Herring has been slow to downgrade bonds, so he starts to doubt his own analysis after seeing the competitor's report. Herring decides to reissue his credit rating of this government bond and match the competitor's downgrade. In his revised report, Herring states that new information has been made available to justify the downgrade. Herring posts the revision on the credit rating agency's website and provides it by email to all clients who received the original. Herring's rating change least likely violated which of the following Standards?",
        "options": [
            "Fair dealing",
            "Diligence and reasonable basis",
            "Communication with clients and prospective clients"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the analyst has dealt fairly with all clients by sending them an email and posting his rating change on the credit rating agency's website when making material changes to his prior investment recommendation; therefore, he has not violated the Standard relating to fair dealing. Clients should be treated fairly when material changes in a member's or candidate's prior investment recommendations are disseminated, which has been done."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Thomas Huang, CFA, is an investment advisor for Newline Partners (NP). NP has an agreement with brokerage firm Ridge Capital (RC). Huang refers clients to RC in exchange for compensation. RC pays a cash fee to NP for referrals. Before entering into formal agreements for services, Huang makes the following disclosure to NP's clients: \"Please note that Newline Partners receives an annual cash percentage fee from Ridge Capital for the referral of clients.\" Huang omits disclosure of the estimated dollar value of the referrals. Has Huang violated the Standards?",
        "options": [
            "No",
            "Yes, by accepting a cash fee for referral of clients",
            "Yes, by not disclosing the estimated dollar value of the fee"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard VI(C), Referral Fees, members must disclose both the nature of the consideration and the estimated dollar value. Appropriate disclosure means that members and candidates must advise the client or prospective client, before entry into any formal agreement for services, of any benefit given or received for the recommendation of any services provided by the member or candidate. In addition, the member or candidate must disclose the nature of the consideration or benefit—for example, flat fee or percentage basis, one-time or continuing benefit, based on performance, benefit in the form of provision of research or other noncash benefit—together with the estimated dollar value. Consideration includes all fees, whether paid in cash, in soft dollars, or in kind."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Marianne Lynn is registered for the CFA Level I exam. A few weeks after registration, she realizes that she is unable to prepare for the exam due to work commitments, so she informs CFA Institute that she declines to sit for the exam. Afterwards, shortly before the exam date, she posts on social media that she is a CFA candidate. Separately, Thomas Petrov, CFA, posts his investment views anonymously on social media and tags his post using \"#CFAcharter.\" Who has violated the Standards?",
        "options": [
            "Lynn only",
            "Petrov only",
            "Both Lynn and Petrov"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard VII(B), Reference to CFA Institute, the CFA Designation, and the CFA Program, Petrov violates Standard VII(B) because where individuals may anonymously express their opinions, pseudonyms or online profile names created to hide a member's identity should not be tagged with the CFA designation. Lynn violates Standard VII(B) because if an individual is registered for the CFA Program but declines to sit for an exam or otherwise does not meet the definition of a candidate as described in the CFA Institute Bylaws, then that individual is no longer considered an active candidate."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Jan Loots, CFA, quit his job as a portfolio manager at an investment firm with which he had a non-solicitation agreement he signed several years ago. Loots received permission to take his investment performance history with him and also took a copy of the firm's software-trading platform. Subsequently, Loots sent out messages on social media sites announcing he was looking for clients for his new investment management firm. Access to Loots' social media sites is restricted to friends, family, and former clients. Loots least likely violated the CFA Institute Standards of Professional Conduct concerning his:",
        "options": [
            "trading software.",
            "non-solicitation agreement.",
            "investment performance history."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the portfolio manager received permission to use his investment performance history from his prior employer. The member violated his non-solicitation agreement by indicating his availability to new clients on several social media sites accessible by clients of his former employer. This is a violation of Standard IV(A)–Loyalty because he did not act for the benefit of his former employer. In this case, the member may cause harm to his former employer if his weekend messages result in clients moving to his new business from his former employer. The member also violated this standard by taking his employer's property, trading software."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Lisa Hajak, CFA, specialized in research on real estate companies at Cornerstone Country Bank for the past twenty years. Hajak recently started her own investment research firm, Hajak Investment Advisory. One of her former clients at Cornerstone asks Hajak to update a research report she wrote on a real estate company when she was at Cornerstone. Hajak updates the report, which she had copied to her personal computer without the bank's knowledge, and replaces references to the bank with her new firm, Hajak Investment Advisory. Hajak also incorporates the conclusions of a real estate study conducted by the Realtors Association that appeared in the Wall Street Journal. She references the Journal as her source in her report. She provides the revised report free of charge along with a cover letter for the bank's client to become a client of her firm. Concerning the reissued research report, Hajak least likely violated the CFA Institute Standards of Professional Conduct because she:",
        "options": [
            "solicited the bank's client.",
            "did not obtain consent to use the bank report.",
            "did not cite the actual source of the real estate study."
        ],
        "correctAnswer": 0,
        "explanation": "Correct as soliciting the bank's client did not violate Standard IV(A)–Loyalty because the manager is no longer an employee of the bank and there is no indication she obtained the client information from bank sources. The member, however, has violated Standard V(C)–Record Retention, because when she left the bank she took the property of the bank without express permission to do so. In addition, the analyst violated Standard I(C)–Misrepresentation by creating research materials without attribution, which is demonstrated when the manager adds to the new report a real estate study she saw in the Wall Street Journal, referencing the Journal only. In all instances, a member or candidate must cite the actual source of the information. If she does not obtain the report and review the information, the manager runs the risk of relying on second-hand information that may misstate facts. Best practice would be either to obtain the complete study from its original author and cite only that author or to use the information provided by the intermediary and cite both sources."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Amanda Covington, CFA, works for McJan Investment Management. McJan employees must receive prior clearance of their personal investments in accordance with McJan's compliance procedures. To obtain prior clearance, McJan employees must provide a written request identifying the security, the quantity of the security to be purchased, and the name of the broker through which the transaction will be made. Pre-cleared transactions are approved only for that trading day. As indicated below, Covington received prior clearance.\n| Security | Quantity | Broker | Prior Clearance |\n| A | 100 | Easy Trade | Yes |\n| B | 150 | Easy Trade | Yes |\nTwo days after she received prior clearance, the price of Stock B had decreased, so Covington decided to purchase 250 shares of Stock B only. In her decision to purchase 250 shares of Stock B only, did Covington violate any CFA Institute Standards of Professional Conduct?",
        "options": [
            "No",
            "Yes, relating to diligence and reasonable basis",
            "Yes, relating to her employer's compliance procedures"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because prior clearance processes guard against potential and actual conflicts of interest; members are required to abide by their employer's compliance procedures, Standard VI(B)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Wang Dazong, CFA, is a sole proprietor investment advisor. Dazong believes in putting his money at risk along with his clients and trades the same securities as his clients. In order to ensure fair treatment of all accounts, he rotates trade allocations so that each account has an equal likelihood of receiving a fill on their orders. This allocation procedure also applies to Dazong's own account. According to the CFA Institute Code of Ethics and Standards of Professional Conduct, the allocation procedure used by Dazong:",
        "options": [
            "complies with the Standards",
            "requires revision to ensure client trades take precedence",
            "should be disclosed and written approval received from clients"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Standard VI(B)–requires client transactions to be given precedence over transactions made on behalf of the member's or candidate's firm or personal transactions. Because the advisor trades alongside his clients and allocates trades on a rotating basis, there are times when the advisor's trades will receive priority over his clients in violation of the Code and Standards. A member or candidate having the same investment positions or being co-invested with clients does not always create a conflict. Some clients in certain investment situations require members or candidates to have aligned interests. Personal investment positions or transactions of members or candidates or their firms should never, however, adversely affect client investments."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Which of the following member actions most likely violates the Standard relating to market manipulation?",
        "options": [
            "Selling one security and buying another to minimize tax liability",
            "Writing misleading posts on social media about the development of a new product",
            "Dividing a large block order into a series of smaller orders to achieve better execution"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Standard II(B), Market Manipulation, requires members to uphold market integrity by prohibiting market manipulation. Market manipulation includes practices that distort security prices or trading volume with the intent to deceive people or entities that rely on information in the market. This is an example of information-base manipulation as misleading fake information affects other market participants."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Linda Barr, CFA, a portfolio manager, receives an unsolicited stock order from a client. She discusses the order with her firm's analysts to determine how it will impact that client's portfolio. The analysts determine the stock to be highly undervalued and suitable for many of Barr's clients. Barr calls clients for whom the stock is suitable to recommend the stock. She then executes a single block trade for the original client as well as other clients for whom the stock is suitable. Barr most likely violated the Standards:",
        "options": [
            "only by executing the single block trade.",
            "only by discussing unsolicited client orders with her analysts.",
            "both by executing the single block trade and by discussing unsolicited client orders with her analysts."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because Standard III (E), Preservation of Confidentiality, requires that members and candidates preserve the confidentiality of information communicated to them by their clients, prospective clients, and former clients. Further, if a client or former client expressly authorizes the member or candidate to disclose information, however, the member or candidate may follow the terms of the authorization and provide the information. The unsolicited stock order from the client is confidential. So, Barr must obtain the original client's authorization before recommending the stock to other clients. Therefore, Barr has violated Standard III (E) by executing without the original's client authorization, a single block trade for the original client as well as other clients for whom the stock is suitable."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Which of the following is a recommended procedure for compliance with the Standard relating to knowledge of the law? Members should encourage their firms to:",
        "options": [
            "distribute summaries of applicable security laws to clients at least annually.",
            "provide written protocols for reporting suspected legal or regulatory violations.",
            "seek the advice of a regulatory agency when in doubt about which action to take regarding potential violations."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because recommended procedures for compliance with Standard I (A), Knowledge of the Law, state: Establish procedures for reporting violations: Firms might provide written protocols for reporting suspected violations of laws, regulations, or company policies."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Applying standardized criteria for the selection of external managers is a requirement of the Standard relating to:",
        "options": [
            "suitability.",
            "independence and objectivity.",
            "diligence and reasonable basis."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because Standard V (A), Diligence and Reasonable Basis, states members and candidates who are directly involved with the use of external advisers need to ensure that their firms have standardized criteria for reviewing these selected external advisers and managers. Such criteria would include, but would not be limited to, the following:\n• reviewing the adviser's established code of ethics,\n• understanding the adviser's compliance and internal control procedures,\n• assessing the quality of the published return information, and\n• reviewing the adviser's investment process and adherence to its stated strategy.\nUnderstanding the managers' compliance procedures is a criteria for selecting external managers."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "A member most likely violates the Standard relating to knowledge of the law if she fails to:",
        "options": [
            "dissociate from unethical conduct.",
            "report illegal activity to the appropriate regulatory organization.",
            "have detailed knowledge of all the laws potentially governing her professional activities."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because under Standard I(A), Knowledge of the Law, members and candidates have a responsibility to step away and dissociate from the unethical activity. Inaction combined with continuing association with those involved in illegal or unethical conduct may be construed as participation or assistance in the illegal or unethical conduct."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Which of the following member actions most likely violates the Standard relating to material nonpublic information?\n• Action 1: An analyst buys call options on a stock after learning from the company's CEO that the company will report earnings exceeding analyst expectations\n• Action 2: An analyst buys an oil company stock after speaking to a well-known industry expert who believes oil prices will rise due to geopolitical risk",
        "options": [
            "Action 1 only",
            "Action 2 only",
            "both Action 1 and Action 2"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because Standard II(A), Material Nonpublic Information, states that Members and Candidates who possess material nonpublic information that could affect the value of an investment must not act or cause others to act on the information. Also, Members and candidates must not use material nonpublic information to influence their investment actions related to derivatives. Therefore, a member analyst buying call option on a company stock after learning from its CEO that the company will report earnings exceeding analyst expectation is a violation of Standard II(A). In contrast, a member analyst buying an oil company stock after speaking to a well-known industry expert who believes oil prices will rise due to geopolitical risk is not a violation of Standard II(A). This is because a well-known industry expert's view is unlikely to be nonpublic information. Therefore, only Action 1 violates Standard II(A)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Iris Hadid, CFA, works as an investment banking analyst. She builds a financial model to value Ski Mountain Lodge (SML). Hadid's friend, Peter Jackson, CFA, works for a different advisory firm. Hadid shares with Jackson details about her analysis to receive his feedback on her valuation of SML. Based on this information, Jackson buys call options on SML. Who has violated the Standards?",
        "options": [
            "Hadid only",
            "Jackson only",
            "Both Hadid and Jackson"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because Standard II(A), Material Nonpublic Information, states that Members and Candidates who possess material nonpublic information that could affect the value of an investment must not act or cause others to act on the information. Also, Members and candidates must not use material nonpublic information to influence their investment actions related to derivatives. Hadid caused Jackson to act by telling Jackson about her work on SML. Jackson acts on the information and buys call options on SML. Therefore, both Hadid and Jackson violate Standard II(A)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Amy Joy, CFA, works at Parklane Investments Ltd. (PIL). When presenting to PIL's prospective clients, Joy uses a brief investment performance summary and makes available detailed supporting information only upon request. Has Joy violated the Standards?\nCorrect answer:",
        "options": [
            "No",
            "Yes, the Standard relating to fair dealing",
            "Yes, the Standard relating to performance presentation"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because according to Standard III(D), Performance Presentation, if the presentation is brief, the member or candidate must make available to clients and prospects, on request, the detailed information supporting that communication. By making available detailed supporting information on request, Joy does not violate Standard III(D). In addition, Joy does not violate Standard III(B), Fair Dealing, which states that members and Candidates must deal fairly and objectively with all clients when providing investment analysis, making investment recommendations, taking investment action, or engaging in other professional activities."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Sue Yong, CFA, is an analyst at a large investment firm. After thorough research, she issues a \"buy\" rating on a company and submits her report to her firm's investment committee for review. The committee disagrees with Yong's assumptions in the report. As a result, the report is changed to a \"neutral\" rating. The final report is issued and Yong agrees to leave her name on the report. Has Yong violated the Standards?",
        "options": [
            "No",
            "Yes, the Standard relating to loyalty, prudence, and care",
            "Yes, the Standard relating to diligence and reasonable basis"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because according to Standard V (A), Diligence and Reasonable basis, Members and Candidates must:\n1. Exercise diligence, independence, and thoroughness in analyzing investments, making investment recommendations, and taking investment actions.\n2. Have a reasonable and adequate basis, supported by appropriate research and investigation, for any investment analysis, recommendation, or action.\nAdditionally, the results of research are not always clear, and different people may have different opinions based on the same factual evidence. In this case, the committee may have valid reasons for issuing a report that differs from the analyst's original research. The firm can issue a report that is different from the original report of an analyst as long as there is a reasonable and adequate basis for its conclusions.\nGenerally, analysts must write research reports that reflect their own opinion and can ask the firm not to put their name on reports that ultimately differ from that opinion. When the work is a group effort, however, not all members of the team may agree with all aspects of the report. Ultimately, members and candidates can ask to have their names removed from the report, but if they are satisfied that the process has produced results or conclusions that have a reasonable and adequate basis, members and candidates do not have to dissociate from the report even when they do not agree with its contents.\nYong was thorough in her research and There is no evidence to assume that she did not have a reasonable and adequate basis for her recommendation. Additionally there is no violation of the standard relating to loyalty, prudence and care."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Rita Melmo, CFA, is an analyst at Greensky Investment (GI). On weekends, she works as a paid employee of a local charity where she negotiates purchase agreements. Melmo does not disclose the charity employment to GI. Melmo is asked to purchase a new truck for the charity and she negotiates a purchase agreement with a local truck dealership. In the purchase agreement, the charity is charged $500 more than the truck's normal sale price. In return, Melmo receives retail vouchers worth $500 from the dealership for her private use. Melmo has most likely violated the Standards:",
        "options": [
            "only by failing to disclose the charity employment to GI.",
            "only by negotiating a purchase agreement in which the charity is charged more than the truck's normal sale price.",
            "both by failing to disclose the charity employment to GI and by negotiating a purchase agreement in which the charity is charged more than the truck's normal sale price."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to Standard I (D), Misconduct, Members and Candidates must not engage in any professional conduct involving dishonesty, fraud, or deceit or commit any act that reflects adversely on their professional reputation, integrity, or competence. Overcharging the charity by any amount is fraud and reflects adversely on Melmo as an investment professional and potentially on her employer and and the investment profession."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "A member believes a colleague is participating in unethical activities at work. The member does not disassociate himself from the activities of his colleague. The member has most likely violated:",
        "options": [
            "only the Standard relating to knowledge of the law.",
            "only the Standard relating to avoid or disclose conflicts.",
            "both the Standard relating to knowledge of the law and the Standard relating to avoid or disclose conflicts."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because according to Standard I(A) Knowledge of the Law, if a member or candidate has reasonable grounds to believe that imminent or ongoing client or employer activities are illegal or unethical, the member or candidate must disassociate, or separate, from the activity. Inaction combined with continuing association with those involved in illegal or unethical conduct may be constructed as participation or assistance in the illegal or unethical conduct."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the Standard relating to independence and objectivity, which of the following is accurate?\n• Statement 1: A member should encourage her firm to remove a covered company from a restricted list if the firm is unwilling to permit dissemination of an adverse opinion about the company\n• Statement 2: A member is prohibited from accepting benefits from corporate issuers in the form of allocation of shares in oversubscribed IPOs suitable for firm's clients",
        "options": [
            "Statement 1 only",
            "Statement 2 only",
            "Both Statement 1 and Statement 2"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to Standard I (B), Independence and Objectivity, one type of benefit is the allocation of shares in oversubscribed IPOs to investment managers for their personal accounts. This practice affords managers the opportunity to make quick profits that may not be available to their clients. Such a practice is prohibited under Standard I (B). Therefore, a member is prohibited from accepting benefits from corporate issuers in the form of allocation of shares in oversubscribed IPOs that are suitable for firm's clients. So, Statement 2 is accurate."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Anita Delgado is a candidate in the CFA Program. After taking the Level II examination, Delgado posts on a social networking website that she found the exam to be very difficult and that in her opinion, the CFA Program and CFA Institute were losing credibility with the public. Has Delgado most likely violated the Standards?",
        "options": [
            "No",
            "Yes, by posting information about the exam on a public website",
            "Yes, by compromising the reputation or integrity of CFA Institute"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because Delgado did not violate Standard VII (A), Responsibilities as a CFA Institute Member of CFA Candidate. Candidates are prohibited from disclosing confidential material gained during the exam process but are free to discuss the examination in a general manner, such as the fact that she found the exam difficult. Regarding her opinion about the CFA Institute, a member must not engage in any conduct that compromises the reputation or integrity of CFA Institute. However, Standard VII (A) does not cover expressing opinions regarding the CFA Program or CFA Institute. Therefore, Delgado's voicing her opinion is not a conduct that compromises the reputation or integrity of CFA Institute."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the Standard relating to independence and objectivity:",
        "options": [
            "a gift from a client could be considered supplementary compensation.",
            "compensation arrangements should link analyst remuneration to investment banking assignments.",
            "portfolio managers may report sell-side analysts to covered companies if analysts' changes in recommendation adversely affect client portfolios."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because receiving a gift, benefit, or consideration from a client can be distinguished from gifts given by entities seeking to influence a member or candidate to the detriment of other clients. In a client relationship, the client has already entered some type of compensation arrangement with the member, candidate, or his or her firm. A gift from a client could be considered supplementary compensation."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Which of the following is a recommended procedure for compliance with the Standard relating to independence and objectivity? Members should encourage their firms to:",
        "options": [
            "prohibit any employee participation in equity-related IPOs.",
            "remove a corporate client company from the research universe and put it on a restricted list if the firm is unwilling to disseminate adverse opinions about the company.",
            "provide every client with the procedures and policies for reporting potentially unethical behaviour, violations of regulations, or other activities that may harm the firm's reputation."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to the recommended procedures for compliance with Standard I (B), Independence and Objectivity, Create a restricted list: If the firm is unwilling to permit dissemination of adverse opinions about a corporate client, members and candidates should encourage the firm to remove the controversial company from the research universe and put it on a restricted list so that the firm disseminates only factual information about the company."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "To comply with the Standards, if applicable law requires members to maintain confidentiality of client information, confidentiality must be maintained unless:",
        "options": [
            "the client has died.",
            "the client's information involves illegal activities.",
            "the client permits the disclosure of the information."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because Standard III (E), Preservation of Confidentiality, states that members must keep information about current, former, and prospective clients confidential unless: the client or prospective client permits disclosure of the information."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Which of the following most likely violates the Standard relating to preservation of confidentiality?",
        "options": [
            "Recommending a former client as a potential donor for a local charity",
            "Disclosing details of client activity to the CFA Institute Professional Conduct Program",
            "Providing confidential information about a prospective client when permitted by the prospective client"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because Standard III (E), Preservation of Confidentiality, requires Members and Candidates must keep information about current, former, and prospective clients confidential. Also, this standard protects the confidentiality of client information even if the person or entity is no longer a client of the member or candidate."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Which of the following is a recommended procedure for compliance with the Standard relating to priority of transactions? Investment personnel should:",
        "options": [
            "examine all personal trades for possible conflicts immediately after execution of the trades.",
            "direct their brokers to supply their firms with duplicate confirmations of all their personal securities transactions.",
            "make a one-time disclosure of holdings in which they have a beneficial interest to their firm upon commencement of the employment relationship."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the recommended procedures for compliance with Standard VI (B), Priority of Transactions, recommend that investment personnel should be required to direct their brokers to supply to firms duplicate copies or confirmations of all their personal securities transactions and copies of periodic statements for all securities accounts."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Which of the following individuals can refer to themselves as a candidate in the CFA Program?\n• Individual 1: Has passed Level II and expects to register for Level III in a couple of months\n• Individual 2: Has failed Level I and expects to retake the exam in its next administration\n• Individual 3: Is awaiting results of the Level III exam",
        "options": [
            "Individual 1",
            "Individual 2",
            "Individual 3"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard VII(B), Reference to CFA Institute, the CFA Designation, and the CFA Program, a person is a candidate in the CFA Program if the registered person has sat for a specified examination but exam results have not yet been received."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Which of the following is a recommended procedure for compliance with the Standard relating to priority of transactions?\n• Procedure 1: Members should disclose personal transactions relating to shares in their firm's research universe to clients upon request\n• Procedure 2: Members should establish blackout periods prior to trades for clients\n• Procedure 3: Members should treat fee-paying family accounts in which they have beneficial ownership in the same manner as they would treat their personal accounts",
        "options": [
            "Procedure 1",
            "Procedure 2",
            "Procedure 3"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to Standard VI(B), Priority of Transactions, investment personnel involved in the investment decision-making process should establish blackout periods prior to trades for clients so that managers cannot take advantage of their knowledge of client activity by \"front-running\" client trades (trading for one's personal account before trading for client accounts)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the Standard related to independence and objectivity, a member must:",
        "options": [
            "refuse all business-related gifts.",
            "adhere to strict standards of conduct that govern how issuer-paid research is conducted.",
            "pay for transportation, hotel and meal expenses when attending meetings at an issuer's headquarters."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because this is a requirement of Standard I(B), Independence and Objectivity. Issuer-paid research conducted by independent analysts, however, is fraught with potential conflicts. Members must adhere to strict standards of conduct that govern how the research is to be conducted and what disclosures must be made in the report. Analysts must engage in thorough, independent, and unbiased analysis and must fully disclose potential conflicts of interest, including the nature of their compensation."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Which statement regarding market manipulation is consistent with the Standards? Members must refrain from:",
        "options": [
            "inducing trading by disseminating verifiable information.",
            "engaging in practices which exploit perceived market inefficiencies.",
            "securing a dominant position in a financial instrument to exploit the price of the underlying asset."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because Standard II(B), Market Manipulation, prohibits such activity. Transaction-based manipulation includes, but is not limited to securing a controlling, dominant position in a financial instrument to exploit the price of the underlying asset."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the Standard related to communication with clients and prospective clients, members must:",
        "options": [
            "only distinguish between fact and opinion in the presentation of investment analyses.",
            "only promptly disclose material and nonmaterial changes in the investment processes they use to select securities.",
            "both distinguish between fact and opinion in the presentation of investment analyses and promptly disclose material and nonmaterial changes in the investment processes they use to select securities."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because according to Standard V(B), Communication with Clients and Prospective Clients, members must distinguish between fact and opinion in the presentation of investment analyses and recommendations."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the recommended procedures for compliance with the Standard relating to priority of transactions, members should:",
        "options": [
            "discourage clients from trading during blackout periods.",
            "supply copies of their personal securities transactions to clients upon request.",
            "preclear their participation in IPOs even if there is no conflict of interest between their participation in an IPO and the client's interests."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to the recommended procedures for compliance with Standard VI(B), Priority of Transactions, members and candidates should preclear their participation in IPOs, even in situations without any conflict of interest between a member's or candidate's participation in an IPO and the client's interest."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Sharon Chan, CFA, is an analyst at an investment firm. Chan issues a \"buy\" rating on a company in which her brother holds shares. Chan does not disclose her brother's holdings in her report as she has no beneficial ownership in her brother's account. Has Chan violated the Standards?",
        "options": [
            "No",
            "Yes, the Standard relating to avoid or disclose conflicts",
            "Yes, the Standard relating to communication with clients and prospective clients"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because according to Standard VI(A), Avoid or Disclose Conflicts, Members and Candidates must make full and fair disclosure of all matters that could reasonably be expected to impair their independence and objectivity or interfere with respective duties to their clients, prospective clients, and employer. In addition, sell-side members and candidates should disclose any materially beneficial ownership interest in a security or other investment that the member or candidate is recommending. Chan has no beneficial ownership in her brother's account, so she is not required to disclose it. Therefore, Chan has not violated the Standard VI(A).\nIn addition, Standard V(B), Communication with Clients and Prospective Clients, states that members and candidates should communicate in a recommendation the factors that were instrumental in making the investment recommendation. A critical part of this requirement is to distinguish clearly between opinions and facts. In preparing a research report, the member or candidate must present the basic characteristics of the securities being analyzed, which will allow the reader to evaluate the report and incorporate information the reader deems relevant to his or her investment decision-making process. Standard V(B) is addressing the investment process communication with clients. Chan has not violated the Standard V(B)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Michael Mak, CFA, is a portfolio manager at an investment firm. After comprehensive research, Mak buys Advance One Tech's (AOT) stock for all his clients for whom the investment is suitable. He then buys AOT shares for his brother's fee-paying account, in which Mak has beneficial ownership. AOT's stock price declines significantly after a month, resulting in substantial losses for all his clients. Are Mak's actions consistent with the Standards?",
        "options": [
            "Yes",
            "No, Mak's actions are not consistent with the Standard relating to priority of transactions",
            "No, Mak's actions are not consistent with the Standard relating to diligence and reasonable basis"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to Standard VI(B), Priority of Transactions, family accounts that are client accounts should be treated like any other firm account and should neither be given special treatment nor be disadvantaged because of the family relationship. If a member or candidate has a beneficial ownership in the account, however, the member or candidate may be subject to preclearance or reporting requirements of the employer or applicable law. Mak should treat his brother's fee paying account like any other firm account and should not be disadvantaged. Therefore, Mak's actions are not consistent with the Standard relating to priority of transactions."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Kelvin Lee, CFA, is a portfolio manager at an investment firm. His social media profile reads: \"Kelvin Lee passed all three CFA examinations in three consecutive years. As a CFA charterholder, Lee achieves better investment performance results.\" Has Lee violated the Standards?",
        "options": [
            "No",
            "Yes, by stating that he passed all three CFA Program examinations in three consecutive years",
            "Yes, by stating that he achieves better investment performance results as a CFA charterholder"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard VII(B), Reference to CFA Institute, the CFA Designation, and the CFA Program, those who have earned the right to use the Chartered Financial Analyst designation are encouraged to do so but only in a manner that does not misrepresent or exaggerate the meaning or implications of the designation. In addition, if the candidate then goes on to claim or imply superior ability by obtaining the designation in only three years, however, he or she is in violation of Standard VII(B). Lee states that as a CFA charterholder, he achieves better investment performance results. Therefore, he has violated the Standard VII(B)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "A member manages two fee-paying family accounts at her firm. The member has the power to vote on the shares held in Account 1 and the discretion to sell shares held in Account 2. According to the Standards, is the member considered a beneficial owner of the shares held in her family accounts?",
        "options": [
            "No",
            "Yes, for Account 1 only",
            "Yes, for both Account 1 and Account 2"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because for the purposes of Standard VI(A), Avoid or Disclose Conflicts, members and candidates beneficially own securities or other investments if they have a direct or indirect pecuniary interest in the securities, have the power to vote or direct the voting of the shares of the securities or investments, or have the power to dispose or direct the disposition of the security or investment. Therefore, the member is considered a beneficial owner for shares held in both Account 1 and Account 2."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the Standard relating to diligence and reasonable basis, a member is required to:",
        "options": [
            "exercise diligence, independence, and thoroughness in analyzing investments.",
            "become an expert in the technical aspects of the models used for investment recommendations.",
            "dissociate and remove her name from a company group report if the report does not reflect her opinion."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because according to Standard V(A) Investment Analysis, Recommendations, and Actions - Diligence and Reasonable Basis, Members and Candidates must: Exercise diligence, independence, and thoroughness in analyzing investments, making investment recommendations, and taking investment actions."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the Standard relating to avoid or disclose conflicts, a member should:",
        "options": [
            "reject a board position in a company on which the member's firm is planning to initiate a research report.",
            "ensure that her firm discloses to clients any rebates received from the service fee some classes of mutual funds charge to investors.",
            "place a company on a restricted list and issue factual information about the company if the member's firm holds options on the company's shares."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to Standard VI(A), Avoid or Disclose Conflicts, equally important is the disclosure of arrangements in which the firm benefits directly from investment recommendations. An obvious conflict of interest is the rebate of a portion of the service fee some classes of mutual funds charge to investors. Members and candidates should ensure that their firms disclose such relationships so clients can fully understand the costs of their investments and the benefits received by their investment manager's employer."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the Standards, a member who is asked to produce an issuer-paid research report is required to:",
        "options": [
            "avoid cash compensation.",
            "disclose the nature of their compensation in the report.",
            "decline to write the report if the member's firm provides investment banking services to the issuer."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to Standard I (B), Independence and Objectivity, members are required to disclose their compensation. Members and candidates must adhere to strict standards of conduct that govern how the research is to be conducted and what disclosures must be made in the report. Analysts must engage in thorough, independent, and unbiased analysis and must fully disclose potential conflicts of interest, including the nature of their compensation."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Shirin Regali, CFA, is a well-respected, sell-side analyst covering the biotech sector. While researching the market prospects for a drug being trialed by BioHeal InC., Regali interviews industry experts who are not affiliated with the trials or BioHeal. These experts express confidence that the drug will pass the trials and be a market success. After thorough analysis and based on these experts' insights, Regali issues a \"buy\" recommendation for BioHeal and distributes it to her clients and not to the public. Has Regali most likely violated the Standard relating to material nonpublic information?",
        "options": [
            "No",
            "Yes, by distributing the recommendation to her clients and not to the public",
            "Yes, by issuing a \"buy\" recommendation for BioHeal based on insights from industry experts"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because according to Standard II (A), Material Nonpublic Information, a financial analyst gathers and interprets large quantities of information from many sources. The analyst may use significant conclusions derived from the analysis of public and nonmaterial nonpublic information as the basis for investment recommendations and decisions even if those conclusions would have been material inside information had they been communicated directly to the analyst by a company. Under the \"mosaic theory,\" financial analysts are free to act on this collection, or mosaic, of information without risking violation. Therefore, Naden is permitted to use published financial data and nonmaterial, nonpublic information gathered from industry experts and competitor to arrive at his investment recommendation. Further, Standard II (A) states, when a particularly well-known or respected analyst issues a report or makes changes to his or her recommendation, that information alone may have an effect on the market and thus may be considered material. Theoretically, under Standard II(A), such a report would have to be made public at the time it was distributed to clients. The analyst is not a company insider, however, and does not have access to inside information. In addition, simply because the public in general would find the conclusions material does not require that the analyst make his or her work public. So, Naden is not required to make her recommendation available to her clients and the public at the same time. Therefore, Naden has not violated Standard II (A) either by using the information gathered from industry experts and competitors in her report or by failing to make her recommendation available to her clients and the public at the same time."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Meera Doka, CFA, manages an equity fund for clients. One day, the fund experiences a large loss due to an event unforeseen by all market participants. Prior to the event, Doka failed to disclose the risk of this event occurring to her clients. One month later, Doka decides to outsource 5% of the fund's assets to an external manager. She does not inform her clients of this change because the external manager follows an investment process that is very similar to her fund's process. Are Doka's actions consistent with the Standard relating to communication with clients and prospective clients?",
        "options": [
            "Yes",
            "No, because she failed to disclose the risk that resulted in the large loss",
            "No, because she failed to inform her clients about outsourcing 5% of the fund's assets"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because it is not consistent with Standard V (B), Communications with Clients and Prospective Clients, to fail to inform clients about the use of an outside manager. A firm's investment policy may include the use of outside advisers to manage various portions of clients' assets under management. Members and candidates should inform the clients about the specialization or diversification expertise provided by the external adviser(s). This information allows clients to understand the full mix of products and strategies being applied that may affect their investment objectives."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "A member employed by an investment firm carries out research at the request of a client. The records of that research are the property of the:",
        "options": [
            "client.",
            "member.",
            "investment firm."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because, according to Standard V (C), Record Retention, records created as part of a member's or candidate's professional activity on behalf of his or her employer are the property of the firm."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Which of the following is a recommended procedure for complying with the Standard relating to preservation of confidentiality?\n• Procedure 1: Disclose to authorized fellow employees only information that will improve service to the client\n• Procedure 2: Encourage the adoption of standard confidentiality procedures utilized by leading firms in the industry",
        "options": [
            "Procedure 1 only",
            "Procedure 2 only",
            "Both Procedure 1 and Procedure 2"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because according to the recommended procedures for compliance with Standard II (E), Preservation of Confidentiality, avoid disclosing any information received from a client except to authorized fellow employees who are also working for the client. Is the information background material that, if disclosed, will enable the member or candidate to improve service to the client?"
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Hannah Hostettler, CFA, is a portfolio manager at a wealth management firm. Hostettler has an arrangement with a lawyer, whereby she refers clients who need legal advice to the lawyer, who in turn refers clients to Hostettler. Because no referral fees are involved, Hostettler does not disclose this arrangement to her existing or prospective clients. Has Hostettler most likely violated the Standards?",
        "options": [
            "No",
            "Yes, only by failing to disclose the arrangement to existing clients",
            "Yes, both by failing to disclose the arrangement to existing clients and to prospective clients"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard VI (C), Referral Fees, members must disclose to clients and potential clients any referral arrangements and must disclose all consideration. Consideration includes all fees, whether paid in cash, in soft dollars, or in-kind. Thus, Hostettler would need to disclose the full bi-lateral referral arrangement to both clients and prospective clients."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "To use a quantitative model in her investment research, a member is required by the Standards to:",
        "options": [
            "have developed or co-developed the model.",
            "become an expert in every technical aspect of the model developed by others.",
            "understand the assumptions and limitations inherent in the model developed by others."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard V (A), Diligence and Reasonable Basis, Members and candidates need to have an understanding of the parameters used in models and quantitative research that are incorporated into their investment recommendations. Although they are not required to become experts in every technical aspect of the models, they must understand the assumptions and limitations inherent in any model and how the results were used in the decision-making process. Therefore, to use quantitative models in her investment research, a member is required to understand the assumptions and limitations inherent in the model developed by others."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Emma Berkstein, CFA, uses third-party data to prepare a report on a company. Berkstein does not check the validity of this data herself, but instead relies on her senior colleagues to conduct due diligence. Another analyst at the same firm, Jimmy Brooks, CFA, prepares an industry report with a group of colleagues. After thorough research, the group agrees to issue a report with a positive outlook for the industry. Brooks disagrees with this conclusion, but leaves his name in the report. Has the Standard relating to diligence and reasonable basis most likely been violated?",
        "options": [
            "No",
            "Yes, by Brooks",
            "Yes, by Berkstein"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because according to Standard V (A), Diligence and Reasonable Basis, A member or candidate may rely on others in his or her firm to determine whether secondary or third-party research is sound and use the information in good faith unless the member or candidate has reason to question its validity or the processes and procedures used by those responsible for the research. Berkstein relied on her senior colleague's due diligence, and there is nothing in the case to suggest she has reason to question it, hence no violation. Nor did Brooks violate the Standard by leaving his name on the group report: The conclusions or recommendations of the group report represent the consensus of the group and are not necessarily the views of the member or candidate, even though the name of the member or candidate is included on the report. In some instances, a member or candidate will not agree with the view of the group. If, however, the member or candidate believes that the consensus opinion has a reasonable and adequate basis and is independent and objective, the member or candidate need not decline to be identified with the report. If the member or candidate is confident in the process, the member or candidate does not need to dissociate from the report even if it does not reflect his or her opinion."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the guidance for the Standards, which of the following statements are accurate?\n• Statement 1: Employees must place employer interests ahead of personal interests in all matters\n• Statement 2: Senior management of a member's firm should create financial compensation structures that do not drive unethical behavior",
        "options": [
            "Statement 1 only.",
            "Statement 2 only.",
            "Both Statement 1 and Statement 2."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to Standard IV (A), Loyalty, the employer is responsible for a positive working environment, which includes an ethical workplace. Senior management has the additional responsibility to devise compensation structures and incentive arrangements that do not encourage unethical behavior. Therefore, Statement 2 is accurate."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the Standards, which of the following is most likely considered material nonpublic information?",
        "options": [
            "The recent execution of a large buy order from a hedge fund",
            "Significant legal challenges revealed at an internal meeting of the company's management",
            "Recent increases in a company's board remuneration discussed at the annual general meeting"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to Standard II(A) Material Nonpublic Information, material information may include, but is not limited to, information on the following: significant legal disputes."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Susana Garcia, CFA, is a widely respected analyst covering the transportation sector. She completes a new recommendation for a company. The next morning, she emails the recommendation to her firm's largest client. After lunch, she emails the recommendation to all other firm clients. One hour later, she calls the largest client to discuss the recommendation in detail. Garcia has violated the Standard relating to fair dealing:",
        "options": [
            "only by calling the largest client to discuss the recommendation in detail.",
            "only by emailing the recommendation to the largest client prior to sending it to all other clients.",
            "both by calling the largest client to discuss the recommendation in detail and by emailing the recommendation to the largest client prior to sending it to all other clients."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Garcia has violated Standard III (B), Fair Dealing, by disseminating the sell recommendation to her largest client before the recommendation is sent to all clients. Each member or candidate is obligated to ensure that information is disseminated in such a manner that all clients have a fair opportunity to act on every recommendation. Garcia has not violated Standard III (B) by calling her largest client, since she widely disseminated the recommendation and provided the information to all her clients prior to discussing it with her largest client. Members and candidates should establish procedures for the timing of dissemination of investment recommendations so that all clients are treated fairly—that is, are informed at approximately the same time. Once this distribution has occurred, the member or candidate may follow up separately with individual clients, but members and candidates should not give favored clients advance information when such advance notification may disadvantage other clients."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the Standard relating to loyalty, members must:",
        "options": [
            "place their employer's interest above their personal interests in all matters.",
            "notify their employer before engaging in an independent practice while still employed.",
            "never act against their employer's interests when complying with their duties to clients."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because although Standard IV (A), Loyalty, does not preclude members or candidates from entering into an independent business while still employed, members and candidates who plan to engage in independent practice for compensation must notify their employer and describe the types of services they will render to prospective independent clients, the expected duration of the services, and the compensation for the services. Members and candidates should not render services until they receive consent from their employer to all of the terms of the arrangement."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the Standard relating to loyalty, in the absence of a noncompete agreement and without employer consent, a member is permitted to:",
        "options": [
            "email himself a list of his clients when leaving his employer.",
            "enter into an independent competitive business while still employed.",
            "contact clients from his previous employer using public information to solicit business at his new firm."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard IV(A), Loyalty, the standard does not prohibit former employees from contacting clients of their previous firm as long as the contact information does not come from the records of the former employer or violate an applicable 'noncompete agreement'. Members and candidates are free to use public information after departing to contact former clients without violating Standard IV(A) as long as there is no specific agreement not to do so."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Andrew Milton, CFA, is an advisor working with individual clients. Milton is careful to recommend investments for his clients that are consistent with their overall objectives and risk tolerance. His firm gives its advisors a bonus for recommending the firm's proprietary products. If all other variables are equal in an investment choice, Milton uses the proprietary products. Milton does not inform the clients of this bonus. Has Milton most likely violated the Standards?",
        "options": [
            "No",
            "Yes, the Standard relating to suitability",
            "Yes, the Standard relating to avoid or disclose conflicts"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard VI (A), Avoid or Disclose Conflicts, Members and Candidates must avoid or make full and fair disclosure of all matters that could reasonably be expected to impair their independence and objectivity or interfere with respective duties to their clients, prospective clients, and employer. Members and candidates must maintain their objectivity when rendering investment advice or taking investment action. Requiring members and candidates to disclose all matters that reasonably could be expected to impair the member's or candidate's objectivity when a conflict exists mitigates the conflict and allows clients and prospective clients to judge motives and possible biases for themselves. Therefore, for Milton, the bonus represented a conflict of interest, which he needs to disclose to clients."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the recommended procedure for compliance with the Standard relating to fair dealing, a member who works in a large firm should:",
        "options": [
            "offer different levels of service to clients selectively based on the clients' investment needs.",
            "disclose to clients and prospective clients how she selects accounts to participate in an order.",
            "inform all firm staff of the content of upcoming investment recommendations to assure that all clients' investment needs are met."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to Standard III (B), Fair Dealing, Members and candidates should disclose to clients and prospective clients how they select accounts to participate in an order."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the recommended procedures for compliance with the Standard relating to diligence and reasonable basis, members should encourage their firms to:",
        "options": [
            "evaluate the adequacy of external advisors by customizing the evaluation criteria for each advisor.",
            "establish maximum levels of scenario testing of all computer-based models used in evaluating financial instruments.",
            "appoint a supervisory analyst to determine whether research reports have a reasonable and adequate basis prior to external circulation."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to the recommended procedures for compliance with Standard V (A), Diligence and Reasonable Basis, members and candidates should encourage their firms to establish a policy requiring that research reports, credit ratings, and investment recommendations have a basis that can be substantiated as reasonable and adequate. An individual employee (a supervisory analyst) or a group of employees (a review committee) should be appointed to review and approve such items prior to external circulation to determine whether the criteria established in the policy have been met. Therefore, appointing a supervisory analyst to determine whether research reports have a reasonable and adequate basis, before circulating the reports externally, is a recommended procedure for compliance with Standard V (A)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Dennis Kim, CFA, works at Century Growth Partners (CGP) where he manages an investment account for his client Amelia Frost. Frost tells Kim to invest one percent of her portfolio in biotech stocks. Kim believes such an investment is inconsistent with Frost's investment policy statement. CGP has no policy regarding execution of unsolicited trading requests. Kim discusses his concerns with Frost, but she does not change her instruction. Without amending Frost's investment policy statement, Kim executes the trade afterward. Has Kim violated the Standards?",
        "options": [
            "No",
            "Yes, because Kim executes an unsuitable trade for Frost",
            "Yes, because Kim does not change Frost's investment policy statement before executing the trade"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because (1) Kim discusses his concerns with Frost before executing the trade, (2) Frost acknowledges this discussion and accepts the conditions of unsuitability, (3) Kim's firm does not require approval for unsuitable trades since it has no policy on the subject, and (4) the request does not have a material impact on Frost's portfolio since it represents only one percent of its value, hence no modification of the IPS is required. According to Standard III(C), Suitability, in cases of unsolicited trade requests that a member or candidate knows are unsuitable for a client, the member or candidate should refrain from making the trade until he or she discusses the concerns with the client. Following the discussion, the member or candidate may follow his or her firm's policies regarding the necessary client approval for executing unsuitable trades. At a minimum, the client should acknowledge the discussion and accept the conditions that make the recommendation unsuitable. Should the unsolicited request be expected to have a material impact on the portfolio, the member or candidate should use this opportunity to update the investment policy statement."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Tom Dixon, CFA, provides a brief summary of his investment performance to his clients. He indicates that further information is available upon request. He tells his clients they can expect a return of 5% in the next three years based on his strong track record. Has Dixon most likely violated the Standards?",
        "options": [
            "No",
            "Yes, by indicating that further information is available upon request",
            "Yes, by telling his clients they can expect a return of 5% in the next three years"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard III(D), Performance Presentation, members and candidates should not state or imply that clients will obtain or benefit from a rate of return that was generated in the past. Also, If the presentation is brief, the member or candidate must make available to clients and prospects, on request, the detailed information supporting that communication."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Which of the following are among the recommended procedures for compliance with the Standard relating to independence and objectivity?\n• Procedure 1: Impose limits on investment personnel acquiring securities in private placements\n• Procedure 2: Prohibit employees from receiving reimbursement from corporate issuers for air transportation when attending meetings at the issuers' headquarters\n• Procedure 3: Remove a company from the restricted list if the firm is unwilling to permit dissemination of adverse opinions about the company",
        "options": [
            "Procedure 1 and Procedure 2",
            "Procedure 1 and Procedure 3",
            "Procedure 2 and Procedure 3"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because according to Standard I(B), Independence and Objectivity, members and Candidates must use reasonable care and judgment to achieve and maintain independence and objectivity in their professional activities.\nAs for Procedure 1, restrict investments: Members and candidates should encourage their investment firms to develop formal policies related to employee purchases of equity or equity-related IPOs. Firms should require prior approval for employee participation in IPOs, with prompt disclosure of investment actions taken following the offering. Strict limits should be imposed on investment personnel acquiring securities in private placements.\nAs for Procedure 2, restrict special cost arrangements: When attending meetings at an issuer's headquarters, members and candidates should pay for commercial transportation and hotel charges. No corporate issuer should reimburse members or candidates for air transportation."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Brigid O'Rourke, CFA, serves as a CFA Institute volunteer and grades Level III CFA exams. After grading, O'Rourke shares her experience with work colleagues, none of whom are CFA candidates. She says, \"The Level III exam is very tough.\" She also states, \"I was surprised how few candidates could remember the Black–Scholes equation.\" Has O'Rourke most likely violated the Standards?",
        "options": [
            "No",
            "Yes, only by saying \"I was surprised how few candidates could remember the Black–Scholes equation\"",
            "Yes, both by saying \"I was surprised how few candidates could remember the Black–Scholes equation\" and by stating \"The Level III exam is very tough\""
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Standard VII (A), Conduct as Participants in CFA Institute Programs, prohibits members from disclosing and/or soliciting confidential material gained prior to or during the exam and grading processes with those outside the CFA exam development process. Examples of information that cannot be shared by members involved in developing, administering, or grading the exams include but are not limited to questions appearing on the exam or under consideration. Therefore, Rourke has violated Standard VII (A) by stating \"I was surprised how few candidates could remember the Black–Scholes equation.\""
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Which of the following statements are consistent with the Standard relating to conduct as participants in CFA Institute programs?\n• Statement I: Questions that appear on the CFA examinations cannot be disclosed by candidates even after they are notified of their exam results\n• Statement II: Broad topic areas and formulas not tested on the exam cannot be publicly discussed by the candidates after the exam",
        "options": [
            "Statement I only",
            "Statement II only",
            "Both Statement I and Statement II"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard VII(A), Conduct as Participants in CFA Institute Programs, all aspects of the exam, including questions, broad topical areas, and formulas, tested or not tested, are considered confidential until such time as CFA Institute elects to release them publicly. This confidentiality requirement allows CFA Institute to maintain the integrity and rigor of exams for future candidates. Therefore, both Statements I and II are consistent with Standard VII(A)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Max Cohen, CFA, is offered a gift by one of his premium-fee-paying clients. Prior to accepting the gift, he obtains written consent from his supervisor and the client offering the gift. He does not disclose the gift to his regular-fee-paying clients. Has Cohen violated the Standards?",
        "options": [
            "No",
            "Yes, the Standard relating to independence and objectivity",
            "Yes, the Standard relating to additional compensation arrangements"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because according to Standard I(B), Independence and Objectivity, members and candidates must use reasonable care and judgment to achieve and maintain independence and objectivity in their professional activities. When possible, prior to accepting \"bonuses\" or gifts from clients, members and candidates should disclose to their employers such benefits offered by clients. Also, according to Standard IV(B), Additional Compensation Arrangements, Members and Candidates must not accept gifts, benefits, compensation, or consideration that competes with or might reasonably be expected to create a conflict of interest with their employer's interest unless they obtain written consent from all parties involved. Standard IV(B) does not require Cohen to disclose the gift to all of his other clients. Thus, Cohen has not violated either Standard I(B) or Standard IV(B)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "A member resides in Adovia, a country with securities laws and regulations that are less strict than the Code and Standards. She does business in Batavia, a country with securities laws and regulations that are less strict than those of AdoviA. Which of the following statements is accurate? The member must most likely adhere to:",
        "options": [
            "the Code and Standards.",
            "the laws and regulations of AdoviA.",
            "the laws and regulations of Batavia."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because if applicable law is stricter than the requirements of the Code and Standards, members and candidates must adhere to the applicable law; otherwise, they must adhere to the Code and Standards. Since the laws and regulations of Adovia and Batavia are less strict than the Code and Standards, the member must adhere to the Code and Standards."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Agnes Boucault belongs to an online forum of candidates studying for the Level II exam. Boucault writes on the forum: \"Hello, I am a Level II candidate in the CFA Program. A friend who took the Level II exam last month tells me that it's very difficult. Let's focus more study time on the fixed income and derivatives areas, which I think are the hardest.\" Has Boucault most likely violated the Standards?",
        "options": [
            "No",
            "Yes, by improperly referencing the CFA Program",
            "Yes, by revealing confidential information about the CFA exam"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because Boucault has not revealed any information about questions or specific topic areas tested or not tested on the prior Level II exam. Therefore, she complied with Standard VII (A), Conduct as Participants in CFA Institute Programs, which does not prohibit candidates from discussing nonconfidential information or curriculum material with others or in study groups in preparation for the exam. Boucault has also used an approved format for referencing her candidacy in the CFA Program, by describing herself as \"a Level II candidate in the CFA Program\". Therefore, Boucault did not violate Standard VII (B), Reference to CFA Institute, the CFA Designation, and the CFA Program."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Bertram Kendall, CFA, is an investment advisor at a bank. Kendall plans to teach an economics course at a local university in his spare time, for which he will be paid a fee by the university. In addition, Kendall plans to serve as an investment advisor for the endowment fund of a community center. Kendall will not be paid by the community center but will be given free access to its athletic facilities, which normally charge fees, in return for his services. According to the Standards, Kendall is required to obtain written consent from his employer:",
        "options": [
            "only for teaching the economics course.",
            "only for serving as an advisor for the community center endowment.",
            "both for teaching the economics course and for serving as an advisor for the community center endowment."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Standard IV (B), Additional Compensation Arrangements, requires members and candidates to obtain permission from their employer before accepting compensation or other benefits from third parties for the services rendered to the employer or for any services that might create a conflict with their employer's interest. Compensation and benefits include direct compensation by the client and any indirect compensation or other benefits received from third parties. Kendall performs an investment service as an advisor to the endowment that conflicts with his employer's interest. Further, free access to the athletic facilities amounts to indirect compensation from third parties. Therefore, Kendall must obtain written consent from his employer for serving as a consultant for the endowment of a community center."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Mark Monroe, CFA, is an equity analyst at an investment firm. In his spare time, he performs accounting work for his local sports club in return for the club waiving his membership fees and paying his expenses to attend club social events. Monroe does not disclose either the work or the compensation to his employer. Has Monroe most likely violated the Standards?",
        "options": [
            "No",
            "Yes, the Standard relating to loyalty",
            "Yes, the Standard relating to additional compensation agreements"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because Monroe did not violate the Standards. Standard IV (A), Loyalty, requires members and candidates to protect the interests of their firms by refraining from any conduct that would injure the firm, deprive it of profit, or deprive it of the member's or candidate's skills and ability. The Standard also requires that members and candidates abstain from independent competitive activity that could conflict with the interests of their employer. Working as an accountant for his sports club does not represent competitive activity, and Monroe does this work in his spare time, so it does not deprive his employer of his skills and abilities. Thus, Monroe has not violated this Standard.\nStandard IV (B), Additional Compensation Arrangements, states that members and candidates must not accept gifts, benefits, compensation, or consideration that competes with or might reasonably be expected to create a conflict of interest with their employer's interest unless they obtain written consent from all parties involved. Because Monroe's outside work is for a local sports club, and not a competitor, there is no conflict of interest with his employer. Therefore, Monroe is not required to disclose it or receive consent from his employer for the compensation. Thus, there is no violation of Standard IV (B)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "With respect to the Standard relating to suitability, members who are portfolio managers for a mutual fund are required to:",
        "options": [
            "consider clients' circumstances and objectives before investing.",
            "manage the fund in a manner consistent with the fund's mandate.",
            "gather information related to investors' taxes and other investment constraints."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Standard III (C), Suitability, states that some Members and Candidates do not manage money for individuals but are responsible for managing a fund to an index or an expected mandate. The responsibility of these members and candidates is to invest in a manner consistent with the stated mandate. For example, a member or candidate who serves as the fund manager for a large-cap income fund would not be following the fund mandate by investing heavily in small-cap or start-up companies whose stock is speculative in nature. Therefore, members who are portfolio managers for a mutual fund are required to manage the fund in a manner consistent with the fund's mandate."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Kate Clark, CFA, and Tom Matt, CFA, have a referral arrangement between them. Clark directs equity clients to Matt. In return, Matt refers fixed income clients to Clark. Matt and Clark both disclose the details of the arrangement to their existing clients. However, only Clark discloses the referral arrangement to her prospective clients. Have the Standards most likely been violated?",
        "options": [
            "No",
            "Yes, by Matt",
            "Yes, by Clark"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Standard VI (C), Referral Fees, states that Members and Candidates must disclose to their employer, clients and prospective clients, as appropriate, any compensation, consideration, or benefit received from or paid to others for the recommendation of products or services. Only Matt has violated the Standard because he fails to disclose the referral arrangement to his prospective client."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Anna Schulz, CFA, works for an investment firm. She enters into an arrangement with an independent tax advisor to prepare Schulz's personal tax returns free of charge in exchange for Schulz referring her clients to the tax advisor. According to the Standards, Schulz is required to disclose her arrangement with the tax advisor to:",
        "options": [
            "her clients only.",
            "her employer only.",
            "both her clients and her employer."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard VI (C) Referral Fees, Members and Candidates must disclose to their employer, clients, and prospective clients, as appropriate, any compensation, consideration, or benefit received from or paid to others for the recommendation of products or services. Preparing a tax return free of charge falls within the scope of \"any compensation, consideration, or benefit.\" Therefore, Schultz must disclose the referral fee arrangement to her clients and her employer."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Vikram Shah, CFA, is a wealth manager with AZ Bank (AZ). Shah refers his client, Sean Tan, to the investment banking division of AZ as Tan is considering taking his company public. AZ's policy is to pay its employees a fee for referrals. According to the Standards, Shah is:",
        "options": [
            "required to decline the referral fees because Tan is an existing client of AZ.",
            "not required to disclose the referral fee arrangement to Tan because the referral fee is an interdepartmental incentive payment.",
            "required to disclose the referral fee arrangement to Tan at the time of referral to allow Tan to evaluate the full cost of the investment banking service."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard VI(C), Referral Fees, Members and Candidates must disclose to their employer, clients, and prospective clients, as appropriate, any compensation, consideration, or benefit received from or paid to others for the recommendation of products or services. Such disclosures allow clients to evaluate (1) any partiality shown in any recommendation of services and (2) the full cost of the services. Appropriate disclosure means that members must advise the client or prospective client, before entry into any formal agreement for services, of any benefit received for the recommendation of any services provided by the member."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the Standard relating to suitability, a member is required to do which of the following?",
        "options": [
            "Judge the suitability of an investment in the context of the client's total portfolio",
            "Update a client's investment policy statement as soon as possible after making any changes to recommendations for the client",
            "Both judge the suitability of an investment in the context of the client's total portfolio and make a reasonable inquiry into a client's investment experience only after taking investment action."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because Standard III (C), Suitability, states that when members and candidates are in an advisory relationship with a client, they must judge the suitability of an investment in the context of the client's total portfolio."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Chris Taylor, CFA, is an investment advisor with Zenith Advisors (ZA). ZA maintains a list of recommended equity securities and purchases newly rated securities for all clients in block transactions. Taylor has just gained a new client who has an existing equity portfolio. Before their first meeting, Taylor reallocates the portfolio in accordance with the firm's recommended equity list without gathering additional information from the client. Taylor most likely violated the Standard(s) relating:",
        "options": [
            "only to suitability.",
            "only to fair dealing.",
            "both to suitability and to fair dealing."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because Standard III (C), Suitability, requires members to make a reasonable inquiry into a client's or prospective client's investment experience, risk and return objectives, and financial constraints prior to making any investment recommendation or taking investment action and must reassess and update this information regularly. Also, members must determine that an investment is suitable to the client's financial situation and consistent with the client's written objectives, mandates, and constraints before making an investment recommendation or taking investment action. The fact that the client brought an all-equity portfolio to the relationship is not enough to indicate suitability for the client, thus Taylor violated the Standard."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Martha Ray, CFA, manages a portfolio based on an \"Environment Social Governance\" (ESG) style of investing. Ray is also an environmental activist. She is arrested for civil disobedience while participating in a government-authorized nonviolent protest against a company that is accused of damaging the environment. Has Ray most likely violated the Standards?",
        "options": [
            "No",
            "Yes, the Standard relating to misconduct",
            "Yes, the Standard relating to loyalty, prudence, and care"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because Standard I (D), Misconduct, is not meant to cover legal transgressions resulting from acts of civil disobedience in support of personal beliefs because such conduct does not reflect poorly on the member's or candidate's professional reputation, integrity, or competence. Ray is arrested for civil disobedience in a government-authorized nonviolent protest. Therefore, Ray has not violated Standard I (D). Further, according to Standard III (A), Loyalty, Prudence, and Care, a member's or candidate's responsibility to a client includes a duty of loyalty and a duty to exercise reasonable care. Investment actions must be carried out for the sole benefit of the client and in a manner the member or candidate believes, given the known facts and circumstances, to be in the best interest of the client. There is no reason to believe that Ray has not exercised reasonable care while taking investment actions for her clients. Therefore, Ray has not violated either Standard I (D) or Standard III (A)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the Standards, when presenting performance results, members should encourage their firms to:",
        "options": [
            "disclose whether the results are before or after tax.",
            "exclude terminated accounts as part of performance history.",
            "present the results using the most representative single account."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because according to the recommended procedures for compliance with Standard III (D), Performance Presentation, Members and candidates can also meet their obligations under Standard III (D) by including disclosures that fully explain the performance results being reported (for example, disclosing whether the performance is gross of fees, net of fees, or after tax). Therefore, Standard III (D) recommends that members encourage their firms to disclose whether the performance results are before or after tax."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "A member is in violation of the Standard relating to market manipulation if he:",
        "options": [
            "frequently trades two stocks to exploit market inefficiencies.",
            "secures a controlling position in a company's stock to exploit a potential acquisition of the company.",
            "issues a report exaggerating negative aspects of a company with the intent to drive down its share price."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard II (B), Market Manipulation, Members and Candidates must not engage in practices that distort prices or artificially inflate trading volume with the intent to mislead market participants. The member engages in information-based manipulation by issuing a misleading report—one that exaggerates negative aspects of a company, to artificially distort (drive down) the company's share price. He has thus violated Standard II (B)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Several years ago, a member purchased a large position in a small-cap stock for her own account. The member is unable to sell the entire position due to the stock's limited liquidity. To improve liquidity, the member trades the stock between two client accounts before selling her own position. The member has engaged in:",
        "options": [
            "transaction-based manipulation only.",
            "information-based manipulation only.",
            "both transaction-based manipulation and information-based manipulation."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because according to Standard II (B), Market Manipulation, transaction-based manipulation includes artificially affecting prices or volume to give the impression of activity or price movement, which the member did."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "To comply with the Standards, if a member is offered a paid position in addition to his current position that may conflict with his employer's interests, he is most likely required to:",
        "options": [
            "decline the position.",
            "notify his employer in writing before accepting the position.",
            "obtain written consent from all parties involved before accepting the position."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard IV (B), Additional Compensation Arrangements, Members and Candidates must not accept gifts, benefits, compensation, or consideration that competes with or might reasonably be expected to create a conflict of interest with their employer's interest unless they obtain written consent from all parties involved."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "A member receives an offer of compensation from a third party that might create a conflict of interest with the member's employer. According to the Standard relating to additional compensation arrangements, the member is most likely required to:",
        "options": [
            "refuse the offer.",
            "only disclose the offer to the employer.",
            "obtain written consent from all parties involved prior to accepting the offer."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard IV (B), Additional Compensation Arrangements, Members and Candidates must not accept gifts, benefits, compensation, or consideration that competes with or might reasonably be expected to create a conflict of interest with their employer's interest unless they obtain written consent from all parties involved."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Tom Oak, CFA, is an advisor to high-net-worth individuals. The risk tolerances of Oak's clients range from conservative to aggressive. He recommends an equity mutual fund which the prospectus describes as a \"high-growth and high-risk vehicle.\" Oak observes that the volatility of the fund's price has been very low over the past three quarters. He therefore recommends investing a large proportion of each client's portfolio in the fund, citing the low volatility and excellent return potential. Oak has most likely violated the Standard(s) relating:",
        "options": [
            "only to suitability.",
            "only to misrepresentation.",
            "both to suitability and to misrepresentation."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard III (C), Suitability, When Members and Candidates are in an advisory relationship with a client, they must make a reasonable inquiry into a client's or prospective client's investment experience, risk and return objectives, and they must determine that an investment is suitable to the client's financial situation and consistent with the client's written objectives, mandates, and constraints. By recommending to invest a large portion of the portfolio in this high-risk investment vehicle to clients with varying degrees of risk tolerance, and not only to clients with a high degree of risk tolerance, Oak violated Standard III (C). According to Standard I (C), Misrepresentation, Members and Candidates must not knowingly make any misrepresentations relating to investment analysis, recommendations, actions, or other professional activities. Even though the recent history of the fund shows risk lower than described in the investment policy of the fund, lacking a change in the fund's policy, it is neither accurate, nor appropriate, to represent the fund as having a lower-risk profile than specified by the fund's policy. By representing the fund in this manner and misrepresenting the investment, Oak has violated Standard I (C)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Venture Energy Exchange (VEE) launches a new derivatives product on crude oil. The exchange's CEO, Adam Jaafar, CFA, enters into a confidential agreement with VEE's ten largest members, who commit to trading substantial minimum volumes of the new product in the first six months after its launch. The product's liquidity improves over the next five months. Jaafar is satisfied with the results and decides not to extend the confidential agreement once it expires. Has Jaafar violated the Standards?",
        "options": [
            "No",
            "Yes, the Standard relating to fair dealing",
            "Yes, the Standard relating to market manipulation"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because Jaafar's \"pump-priming\" strategy violates Standard II (B), Market Manipulation, which states that Members and Candidates must not engage in practices that distort prices or artificially inflate trading volume with the intent to mislead market participants. The formal liquidity of a market is determined by the obligations set on market makers, but the actual liquidity of a market is better estimated by the actual trading volume and bid–ask spreads. Attempts to mislead participants about the actual liquidity of the market constitute a violation of Standard II (B). In this example, investors have been intentionally misled to believe they chose the most liquid instrument for some specific purpose, but they could eventually see the actual liquidity of the contract significantly reduced after the term of the agreement expires. If Jaafar were to fully discloses its agreement with members to boost transactions over some initial launch period, he would not violate Standard II (B). Jaafar's intent is not to harm investors but, on the contrary, to give them a better service. For that purpose, he may engage in a liquidity-pumping strategy, but the strategy must be disclosed."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Which of the following is a recommended procedure for compliance with the Standard relating to performance presentation? Members should encourage their firms to:",
        "options": [
            "state, when applicable, that performance results are simulated.",
            "use a representative account to present composite performance.",
            "use identical performance presentation reports for all types of clients."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because recommended procedures for compliance with Standard III (D), Performance Presentation, include disclosures that fully explain the performance results being reported (for example, stating, when appropriate, that results are simulated when model results are used)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Adam Johnson, CFA, works at a large investment firm. After losing his taxi receipt for a business meeting, he uses his colleague's taxi receipt of a slightly higher value to submit his monthly expense claim to his employer. Recently, Johnson declared personal bankruptcy due to large medical bills for a family member. Has Johnson violated the Standard relating to misconduct?",
        "options": [
            "No",
            "Yes, by submitting the expense claim",
            "Yes, by declaring personal bankruptcy"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Standard I (D), Misconduct, states that Members must not engage in any professional conduct involving dishonesty, fraud, or receipt or commit any act that reflects adversely on their professional reputation, integrity, or competence. By using a colleague's taxi receipt of a higher value, Johnson engages in intentional conduct involving fraud and deceit in the work place that adversely reflects on his integrity."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Michael Butcher, CFA, has recently joined Patriot Investments (PI) as an investment manager. With information gathered from public sources, Butcher re-creates supporting records from his former firm for investment recommendations at PI. Butcher also reviews client positions and routinely deletes records of the reviews that do not result in a change. Butcher has most likely violated the Standards:",
        "options": [
            "only by deleting the reviews that do not result in a change.",
            "only by re-creating supporting records for investment recommendations.",
            "both by deleting the reviews that do not result in a change and by re-creating supporting records for investment recommendations."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because Standard V (C), Record Retention, states that the retention requirement applies to decisions to buy and sell a security as well as reviews undertaken that do not lead to a change in position."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Ming Xu, CFA, is an investment advisor at Topnotch Advisors (TNA). Xu plans to leave TNA and start an independent advisory practice that would compete with TNA. Without notifying TNA of his plans, Xu makes preparations during non-working hours to start his independent practice. Has Xu most likely violated the Standards?",
        "options": [
            "No",
            "Yes, the Standard relating to loyalty",
            "Yes, the Standard relating to disclosure of conflicts"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because Xu has not violated the Standards. According to Standard IV (A) Loyalty, a departing employee is generally free to make arrangements or preparations to go into a competitive business before terminating the relationship with his or her employer as long as such preparations do not breach the employee's duty of loyalty. There is no evidence to believe that Xu's action breaches her employer's duty of loyalty. Therefore, Xu she has not violated the Standard IV (A). Further, according to Standard VI (A) Disclosure of Conflicts, Members and Candidates must make full and fair disclosure of all matters that could reasonably be expected to impair their independence and objectivity or interfere with respective duties to their clients, prospective clients, and employer. Reportable situations include conflicts that would interfere with rendering unbiased investment advice and conflicts that would cause a member or candidate to act not in the employer's best interest. Xu only makes preparations during non-working hours to start her independent practice. Therefore, Xu has also not violated Standard VI (A)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the Standards, members who are supervisors are most likely required to:",
        "options": [
            "have in-depth knowledge of the Standards.",
            "personally evaluate the conduct of all of their employees on a continuing basis.",
            "report violations of the Standards by any employee under their supervision to CFA Institute."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because according to Standard IV (C), Responsibilities of Supervisors, Members and candidates acting as supervisors must also have in-depth knowledge of the Code and Standards so that they can apply this knowledge in discharging their supervisory responsibilities."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Anna Yeung, CFA, is a research analyst with TL Securities (TLS). TLS does not have a policy on record retention, and applicable law does not require retaining records. Yeung only retains her work records electronically and deletes records older than three years. Are Yeung's actions consistent with the recommendations for compliance with the Standard relating to record retention?",
        "options": [
            "Yes",
            "No, because she only retains her work records electronically",
            "No, because she deletes her records that are older than three years"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard V (C), Record Retention, in the absence of regulatory guidance or firm policies, CFA Institute recommends maintaining records for at least seven years. Since she deletes records that are older than three years she is not consistent with the Standard relating to record retention."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Patrick Tam, CFA, is a chemicals industry analyst for an investment firm. The president of Naxos Chemicals (Naxos) asks Tam to provide customized reports on global industry trends in return for free travel and accommodations for the Naxos annual shareholder meeting. To comply with the Standards, Tam is most likely required:",
        "options": [
            "only to fully disclose the arrangement with Naxos to all of the firm's clients.",
            "only to obtain written permission from his employer before accepting the offer from Naxos.",
            "both to fully disclose the arrangement with Naxos to all of the firm's clients and to obtain written permission from his employer before accepting the offer from Naxos."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard VI (A), Avoid or Disclose Conflicts, the most obvious conflicts of interest, which should always be disclosed, are relationships between an issuer and the member, candidate, or his or her firm (such as a directorship or consultancy by a member. Although the compensation Tam would receive for the industry reports is relatively meager, there would be a separate relationship with a firm he covers, which must be disclosed. In addition, according to Standard IV (B), Additional Compensation Arrangements, Members and candidates must not accept gifts, benefits, compensation, or consideration that competes with or might reasonably be expected to create a conflict of interest with their employer's interest unless they obtain written consent from all parties involved. Writing special reports for a company the analyst is following would reasonably be construed as creating a conflict of interest with the employer because Tam would be expected to write industry reports for his employer as the chemicals industry analyst."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "To be consistent with the Standard relating to record retention, a member should maintain records of which of the following?\n• Item 1: A change in recommendation posted on social media.\n• Item 2: Reviews of materials that do not lead to a change in recommendation.",
        "options": [
            "Item 1 only",
            "Item 2 only",
            "Both Item 1 and Item 2"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard V (C), Record Retention, the nature or format of the information does not remove a member's or candidate's responsibility to maintain a record of information used in his or her analysis or communicated to clients. Examples of nonprint media formats that should be retained include, but are not limited to blog posts and Twitter posts. The retention requirement applies to decisions to buy or sell a security as well as reviews undertaken that do not lead to a change in position."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the recommended procedures for compliance with the Standard relating to responsibilities of supervisors, members should encourage their firms to:\nCorrect answer:",
        "options": [
            "continually educate personnel regarding all of the firm's compliance procedures.",
            "separate employees' professional conduct evaluations from their performance reviews.",
            "integrate the firm's compliance procedures into its code of ethics to provide a comprehensive document."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because recommended procedures for compliance with Standard IV (C), Responsibilities of Supervisors, state that once a compliance program is in place, a supervisor should continually educate personnel regarding the compliance procedures."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "In the absence of regulations or firm policies, the Standards recommend retaining investment-related records for a minimum of:",
        "options": [
            "five years.",
            "seven years.",
            "ten years."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Standard V (C), Record Retention, states that in the absence of regulatory guidance or firm policies, CFA Institute recommends maintaining records for at least seven years."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "A candidate taking the CFA Level II exam develops an analytical model while working as an unpaid intern at a brokerage firm. Before completing her internship, the candidate copies supporting documents used to create the model with an intention to recreate the model at a new firm she expects to join soon. Has the candidate violated the Standards?",
        "options": [
            "No",
            "Yes, the Standard relating to record retention only",
            "Yes, the Standard relating to record retention and the Standard relating to loyalty"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because Standard V(C), Record Retention, states that as a general matter, records created as part of a member's or candidate's professional activity on behalf of his or her employer are the property of the firm. When a member or candidate leaves a firm to seek other employment, the member or candidate cannot take the property of the firm, including original forms or copies of supporting records of the member's or candidate's work, to the new employer without the express consent of the previous employer. The candidate cannot copy the supporting documents without the consent of the current employer. Therefore, the candidate has violated the Standard V(C).\nIn addition, Standard IV(A), Loyalty, states that, even if a candidate does not receive monetary compensation for her services at a firm, she is considered an employee if she receives compensation and benefits in the form of work experience and knowledge. Therefore by copying the supporting document, the candidate violated Standard IV(A) because she misappropriated the firm's property without permission."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Disclosures about the use of leverage, sector or industry risk, and security-specific risk are most likely included in the Standard relating to:",
        "options": [
            "independence and objectivity.",
            "responsibilities of supervisors.",
            "communication with clients and prospective clients."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because discussions about leverage, sector or industry risk, and security-specific risk are included in the guidance for Standard V (B), Communication with Clients and Prospective Clients. This Standard states that Members must outline to clients and prospective clients significant risks and limitations of the analysis contained in their investment products or recommendations. This includes but is not limited to the use of leverage, sector or industry risk, and security-specific risk. The type and nature of significant risks will depend on the investment process that members are following and on the personal circumstances of the client. In general, the use of leverage constitutes a significant risk and should be disclosed."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Agnes Dupy, CFA, manages discretionary accounts at a large brokerage firm. She finds a suitable set of the firm's proprietary equity mutual funds for one of her clients. Dupy's firm is awarding a special quarterly bonus to managers who use one of the highest-fee funds on the list of suitable funds, so she invests in that fund for her client without contacting the client. Dupy has most likely violated the Standard(s) relating:",
        "options": [
            "only to fair dealing.",
            "only to avoid or disclose conflicts.",
            "both to fair dealing and to avoid or disclose conflicts."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Standard VI (A), Avoid or Disclose Conflicts, states that the Standard protects investors and employers by requiring members and candidates to fully disclose to clients, potential clients, and employers all actual and potential conflicts of interest. Dupy violated the standard by not disclosing the special bonus for the chosen fund."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Which of the following examples is most likely a violation of the Standards? A member who is a supervisor:",
        "options": [
            "delegates supervisory duties to subordinates who oversee other employees.",
            "relies on an employee's statement that previous wrongdoing will not reoccur and takes no additional steps.",
            "fails to detect all violations, although the member has taken reasonable steps to implement an effective compliance program."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to Standard IV (C), Responsibilities of Supervisors, once a supervisor learns that an employee has violated or may have violated the law or the Code and Standards, the supervisor must promptly initiate an assessment to determine the extent of the wrongdoing. Relying on an employee's statements about the extent of the violation or assurances that the wrongdoing will not reoccur is not enough. A supervisor should take steps to ensure that the violation will not be repeated. A supervisor must make sure that such violation will not reoccur."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "A candidate posts questions from the most recent CFA exam in an online forum. This action is a violation of the Standard(s) relating:",
        "options": [
            "to preservation of confidentiality only.",
            "to conduct as participants in CFA Institute programs only.",
            "both to preservation of confidentiality and to conduct as participants in CFA Institute programs."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Standard VII(A), Conduct as Participants in CFA Institute Programs, states CFA Institute program rules, regulations, and policies prohibit candidates from disclosing confidential material gained during the exam process. Examples of information that cannot be disclosed by candidates sitting for an exam include but are not limited to specific details of questions appearing on the exam."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the Standard relating to responsibilities of supervisors, a member who cannot discharge supervisory responsibilities due to his firm's inadequate compliance system should:",
        "options": [
            "decline in writing to accept supervisory responsibility only.",
            "report the inadequate compliance system to the CFA Institute only.",
            "both decline in writing to accept supervisory responsibility and report the inadequate compliance system to the CFA Institute."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because according to Standard IV(C), responsibilities of supervisors, if the member or candidate clearly cannot discharge supervisory responsibilities because of the absence of a compliance system or because of an inadequate compliance system, the member or candidate should decline in writing to accept supervisory responsibility until the firm adopts reasonable procedures to allow adequate exercise of supervisory responsibility."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Which of the following Standards states that members must not commit any act that reflects adversely on their professional reputation, integrity, or competence? The Standard relating to:",
        "options": [
            "fair dealing",
            "misconduct",
            "loyalty, prudence, and care"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to Standard I (D), Misconduct, Members and Candidates must not engage in any professional conduct involving dishonesty, fraud, or deceit or commit any act that reflects adversely on their professional reputation, integrity, or competence."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Anna Schulz, CFA, is a securities analyst. When she joined her firm, Schulz's manager, Zhang Feng, CFA, informed her only that \"the CFA Institute Code and Standards pretty much cover the company's compliance rules.\" In her personal account, Schulz holds a large position in a company that she recommends for purchase to clients. Schulz does not report this holding to her firm or clients. The Standards were most likely violated:",
        "options": [
            "only by Zhang.",
            "only by Schulz.",
            "both by Zhang and by Schulz."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard IV (C), Responsibilities of Supervisors, Members and Candidates must promote actions by all employees under their supervision and authority to comply with applicable laws, rules, regulations, and firm policies and the Code and Standards. At a minimum, Standard IV(C) requires that members and candidates with supervisory responsibility make reasonable efforts to prevent and detect violations by ensuring the establishment of effective compliance systems. To be effective supervisors, members and candidates should implement education and training programs on a recurring or regular basis for employees under their supervision. Such programs will assist the employees with meeting their professional obligations to practice in an ethical manner within the applicable legal system. Therefore, by not thoroughly explaining to Schulz or training Schulz in requirements for compliance with applicable laws, rules, regulations, and firm policies, and by not employing/implementing an effective compliance system, Zhang violated this Standard. In addition, Schulz violated Standard VI (A), Avoid or Disclose Conflicts, which protects investors and employers by requiring members and candidates to fully disclose to clients, potential clients, and employers all actual and potential conflicts of interest. Also, sell-side members and candidates must disclose any materially beneficial ownership interest in a security or other investment that the member or candidate is recommending. By not disclosing that Schulz holds a large position in a company that she recommends for purchase to clients, Schulz is in violation of Standard VI (A)"
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Rayan Tengku, CFA, manages an equity fund. When talking to potential investors, Tengku presents the fund's average historical performance as the minimum performance investors can expect over the next year. After releasing the most recent quarterly fund report, Tengku finds an error in the report. He immediately sends the corrected report to all clients by e-mail and then calls only those clients who pay for premium services to discuss the report. Tengku has most likely violated the Standard(s) relating:",
        "options": [
            "only to fair dealing.",
            "only to performance presentation.",
            "both to fair dealing and to performance presentation."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Standard III (D), Performance Presentation, prohibits misrepresentations of past performance or reasonably expected performance. A member or candidate must give a fair and complete presentation of performance information. Furthermore, members and candidates should not state or imply that clients will obtain or benefit from a rate of return that was generated in the past. Therefore, by stating that the fund's average historic performance is representative of investors' minimum future performance, Tengku has violated Standard III (D)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Emilio Torro, CFA, owns a small investment firm. He sends a brochure to potential clients which states: \"As a CFA charterholder, Emilio Torro will deliver better investment performance compared to the competition. Over the past 6 years, Torro has beaten the market in every single year and will continue to do so in the future.\" Torro has most likely violated the Standard(s) relating to:",
        "options": [
            "performance presentation only.",
            "reference to the CFA Institute, the CFA Designation, and the CFA Program only.",
            "both performance presentation and reference to the CFA Institute, the CFA Designation, and the CFA Program."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard III (D), Performance Presentation, members and candidates should not state or imply that clients will obtain or benefit from a rate of return that was generated in the past. This standard also prohibits misrepresentations of past performance or reasonably expected performance. By stating \"Over the past 6 years, Torro has beaten the market in every single year and will continue to do so in the future\", Torro has violated Standard III (D) because he misrepresents reasonably expected performance.\nAccording to Standard VII (B), Reference to CFA Institute, the CFA Designation, and the CFA Program, statements that overstate the competency of an individual or imply, either directly or indirectly, that superior performance can be expected from someone with the CFA designation are not allowed under the standard. Therefore, by stating, \"As a CFA charterholder, Emilio Torro will deliver better investment performance compared to the competition\", Torro has violated Standard VII (B) because he states that superior performance can be expected from someone with the CFA designation. Therefore, Torro has violated both the Standard relating to performance presentation and the Standard relating to reference to the CFA Institute, the CFA Designation, and the CFA Program."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Herman Standish, CFA, is a top analyst in the semiconductor industry. Standish issues a report on International Chips (IC) to clients of his firm that highlights a change in his recommendation from \"hold\" to \"strong buy.\" He writes in the report: \"Just as it has in the past two years, IC will double its earnings and its dividend.\" After three business days, Standish releases the report to the business press. Which of the following Standards has Standish most likely violated?",
        "options": [
            "Only the Standard relating to material nonpublic information",
            "Only the Standard relating to communication with clients and prospective clients",
            "Both the Standard relating to material nonpublic information and the Standard relating to communication with clients and prospective clients"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Standard V (B), Communication with Clients and Prospective Clients, requires that opinion be separated from fact. Violations often occur when reports fail to separate the past from the future by not indicating that earnings estimates, changes in the outlook for dividends, or future market price information are opinions subject to future circumstances. Standish violated the Standard by writing IC will double its earnings and its dividend in his report."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Member violations of the Standard relating to misconduct must involve a(n):",
        "options": [
            "illegal act.",
            "violation of one of the other Standards.",
            "act that reflects adversely on the member's professional reputation."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because Standard I (D), Misconduct, states that Members and Candidates must not engage in any professional conduct involving dishonesty, fraud, or deceit or commit any act that reflects adversely on their professional reputation, integrity, or competence."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Hemant Sampath, CFA, is a wealth manager. He is contacted by a charity requesting donations. Sampath refuses to share information about existing clients to protect client confidentiality. While communicating with existing clients, Sampath shares contact details of the charity. He also shares contact details of former clients with the charity. Has Sampath violated the Standards?",
        "options": [
            "No",
            "Yes, the Standard relating to preservation of confidentiality",
            "Yes, the Standard relating to communication with clients and prospective clients"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Standard III(E), Preservation of Confidentiality, requires that members and candidates preserve the confidentiality of information communicated to them by their clients, prospective clients, and former clients. Sampath breaches Standard III(E) by sharing contact details of former clients with the charity."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "CFA Institute encourages members to report other members' violations of the Code and Standards in writing to the CFA Institute:",
        "options": [
            "Board of Governors.",
            "Professional Conduct Program.",
            "Disciplinary Review Committee."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because CFA Institute encourages members, nonmembers, clients, and the investing public to report violations of the Code and Standards by CFA Institute members or CFA candidates by submitting a complaint in writing to the CFA Institute Professional Conduct Program."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Which of the following is among the recommended procedures for compliance with the Standard relating to preservation of confidentiality?\n• Procedure 1: Convey to clients that not all firm-sponsored resources may be appropriate for confidential communications.\n• Procedure 2: Ensure that firm-supported communications follow practices designed to prevent the accidental distribution of confidential information.",
        "options": [
            "Only Procedure 1",
            "Only Procedure 2",
            "Both Procedure 1 and Procedure 2"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard III(E), Preservation of Confidentiality, members and candidates should be diligent in discussing with clients the appropriate methods for providing confidential information. It is important to convey to clients that not all firm-sponsored resources may be appropriate for such communications. So, Procedure 1 is correct. The standard also states that members and candidates need to understand and follow their firm's electronic information communication and storage procedures. If the firm does not have procedures in place, members and candidates should encourage the development of procedures that appropriately reflect the firm's size and business operations. So, Procedure 2 is also correct."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "A member has a client who pays higher fees for premium services. The Standards most likely allow the member to provide that client with:",
        "options": [
            "larger allocations of oversubscribed IPOs.",
            "earlier access to investment recommendations and rating changes.",
            "direct access to research analysts to discuss published investment ratings in greater detail."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard III (B), Fair Dealing, members and candidates may provide more personal, specialized, or in-depth service to clients who are willing to pay for premium services through higher management fees or higher levels of brokerage. Members and candidates may differentiate their services to clients, but different levels of service must not disadvantage or negatively affect clients. Therefore, a member is permitted to provide direct access to research analysts to discuss published investment ratings in greater detail for a client who pays higher fees for premium services."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Jong Byun, CFA, is a broker who recommends various investments to his clients, but is not legally charged with a fiduciary responsibility. Byun finds two similar and appropriate mutual funds. One of the funds has a higher fee-sharing arrangement with the broker so he recommends that fund to his clients over the fund with lower fees. Has Byun most likely violated the Standards?",
        "options": [
            "No",
            "Yes, the Standard relating to suitability",
            "Yes, the Standard relating to loyalty, prudence, and care"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard III (A) Loyalty, Prudence and Care, members and Candidates must act for the benefit of their clients and place their clients' interests before their employer's or their own interest. By recommending the fund with the higher fee-sharing when another lower-fee alternative is available, Byun is putting his own interests before those of his clients. Even though he does not have a legal fiduciary requirement, Byun, as a member and has the responsibility to put his clients' needs before his own."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Maria Estefan, CFA, recently founded Inversiones Unidas (IU). Estefan has a 5-year fund management track record as part of a team with her previous firm, Alto Investments (AI). Estefan advertises her past 5-year track record as her performance at IU without reference to AI or her role on the team at AI. Estefan most likely violates the Standards:",
        "options": [
            "only by advertising her performance without reference to AI.",
            "only by advertising her performance without reference to her role on the team at AI.",
            "both by advertising her performance without reference to AI and by advertising her performance without reference to her role on the team at AI."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to Standard III (D), Performance Presentation, when communicating investment performance information, members and candidates must make reasonable efforts to ensure that it is fair, accurate, and complete. Further, as a general matter, this standard does not prohibit showing past performance of funds managed at a prior firm as part of a performance track record as long as showing that record is accompanied by appropriate disclosures about where the performance took place and the person's specific role in achieving that performance. So, Estefan is permitted to advertise her past five-year track record with AI provided she makes adequate disclosures in the advertisement relating to the IU's performance presentation. Therefore, Estefan has violated Standard III (D) because she advertised her performance without reference to AI and also failed to make reference to her role on the team at AI."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Jan Ho, CFA, is an advisor who manages portfolios for endowment funds that share a similar goal of conservative growth. He has thoroughly researched and recommended the purchase of a thinly-traded stock for his clients' portfolios. To execute the trades, Ho follows his policy of prioritizing purchases for his largest clients first. Ho has most likely violated the Standard relating to:",
        "options": [
            "suitability.",
            "fair dealing.",
            "priority of transactions."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Standard III(B), Fair Dealing, requires members and candidates to treat all clients fairly when disseminating investment recommendations or making material changes to prior investment recommendations or when taking investment action with regard to general purchases, new issues, or secondary offerings. Further, the term \"fairly\" implies that the member or candidate must take care not to discriminate against any clients when disseminating investment recommendations or taking investment action. Therefore, Ho cannot discriminate between his largest clients and other clients by prioritizing trades for the former group first. By doing do, Ho has violated Standard III(B)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Alicia Garcia, CFA, is a broker. Her firm's analyst changes a prior \"Buy\" recommendation on Ajax Data (AD) to \"Sell\" and Garcia publishes the recommendation change on the firm's website. Later that day, one of Garcia's clients contacts her with an order directing Garcia to buy shares of AD for the client's non-discretionary account. According to the Standard relating to fair dealing, Garcia should:",
        "options": [
            "refuse to execute the order.",
            "advise the client of the recommendation change before accepting the order.",
            "accept and immediately execute the order because the client's account is non-discretionary."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Standard III (B), Fair Dealing, addresses the manner in which investment recommendations or changes in prior recommendations are disseminated to clients. Clients who do not know that the member or candidate has changed a recommendation and who, therefore, place orders contrary to a current recommendation should be advised of the changed recommendation before the order is accepted. Therefore, Garcia should advise the client of the recommendation change before accepting the order."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Ria Preston, CFA, works for an investment firm. Her brother is a fee-paying client of the firm. Preston allocates shares in an oversubscribed IPO that she considers suitable for all of her firm's clients. To avoid potential conflicts of interest, Preston does not allocate shares from the IPO to herself or to her brother. Has Preston most likely violated the Standards?",
        "options": [
            "No",
            "Yes, the Standard relating to fair dealing",
            "Yes, the Standard relating to diligence and reasonable basis"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to Standard III (B), Fair Dealing, if the issue is oversubscribed, members and candidates should forgo any sales to themselves or their immediate families in order to free up additional shares for clients. If the investment professional's family-member accounts are managed similarly to the accounts of other clients of the firm, however, the family-member accounts should not be excluded from buying such shares. In addition, Standard III (B) requires members and candidates to treat all clients fairly when disseminating investment recommendations or making material changes to prior investment recommendations or when taking investment action with regard to general purchases, new issues, or secondary offerings. As a fee-paying client, Preston's brother's account must be treated like as any other client account and allocated shares accordingly. Therefore, Preston has violated Standard III (B) because she failed to allocate shares to her brother's account."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Judy Naden, CFA, is an analyst covering the aerospace sector. Naden's recommendations often impact stock prices within the sector. Naden finalizes an investment recommendation on a company using published financial data and nonmaterial, nonpublic information gathered from industry experts and competitors. She distributes the report only to her firm's clients by email. Her firm's clients trade on this information before her report is made available to the general public a few days later. Has Naden most likely violated the Standards?\nCorrect answer:",
        "options": [
            "No",
            "Yes, by using the information gathered from industry experts and competitors in her report",
            "Yes, by failing to make her recommendation available to her firm's clients and the public at the same time"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because according to Standard II (A), Material Nonpublic Information, a financial analyst gathers and interprets large quantities of information from many sources. The analyst may use significant conclusions derived from the analysis of public and nonmaterial nonpublic information as the basis for investment recommendations and decisions even if those conclusions would have been material inside information had they been communicated directly to the analyst by a company. Under the \"mosaic theory,\" financial analysts are free to act on this collection, or mosaic, of information without risking violation. Therefore, Naden is permitted to use published financial data and nonmaterial, nonpublic information gathered from industry experts and competitor to arrive at his investment recommendation. Further, Standard II (A) states, when a particularly well-known or respected analyst issues a report or makes changes to his or her recommendation, that information alone may have an effect on the market and thus may be considered material. Theoretically, under Standard II(A), such a report would have to be made public at the time it was distributed to clients. The analyst is not a company insider, however, and does not have access to inside information. In addition, simply because the public in general would find the conclusions material does not require that the analyst make his or her work public. So, Naden is not required to make her recommendation available to her clients and the public at the same time. Therefore, Naden has not violated Standard II (A) either by using the information gathered from industry experts and competitors in her report or by failing to make her recommendation available to her clients and the public at the same time."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the guidance provided by the Code and Standards, which of the following is not a recommended procedure for compliance with the Standard relating to material nonpublic information?",
        "options": [
            "Physical separation of departments",
            "Adopt disclosure procedures for material nonpublic information",
            "Avoid public dissemination of material nonpublic information received"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because this is not a recommended procedure for compliance with Standard II (A), Material Non-Public Information. The recommended procedure is in fact the opposite, the member should make reasonable efforts to achieve public dissemination of the information."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "A member works for an investment firm and implements policies to ensure that the use of soft dollars benefits clients. These policies are most likely put in place to comply with the Standard relating to:",
        "options": [
            "referral fees.",
            "loyalty, prudence, and care.",
            "additional compensation arrangements."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because, according to Standard III (A), Loyalty, Prudence, and Care, conflicts may arise when an investment manager uses client brokerage to purchase research services, a practice commonly called 'soft dollars' or 'soft commissions.' A member or candidate who pays a higher brokerage commission than he or she would normally pay to allow for the purchase of goods or services, without corresponding benefit to the client, violates the duty of loyalty to the client. Therefore, a member who implements policies to ensure that the use of soft dollars benefits clients complies with the Standard relating to loyalty, prudence, and care."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the recommended procedures for compliance with the Standard relating to loyalty, prudence, and care, a member who has control of client assets should:",
        "options": [
            "vote proxies in the best interests of her firm.",
            "submit quarterly itemized account statements to her clients.",
            "combine her clients' assets with other parties' assets to reduce administrative costs."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to recommended procedures for compliance with Standard III (A), Loyalty, Prudence, and Care, a member should submit to each client, at least quarterly, an itemized statement showing the funds and securities in the custody or possession of the member or candidate plus all debits, credits, and transactions that occurred during the period."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Mark Joy, CFA, manages the pension fund for Bank Ltd. (BL). Joy believes that BL stock is overvalued. BL's CEO requests Joy purchase BL stock for BL's pension fund to help prevent a hostile takeover of BL. Joy complies and his purchase of BL stock for the pension fund helps prevent the takeover. Subsequently, BL's stock price increases, which also increases the value of BL's pension fund. Has Joy most likely violated the Standard relating to loyalty, prudence, and care?",
        "options": [
            "No",
            "Yes, because BL stock subsequently increased",
            "Yes, because Joy complies with the CEO's request"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because Standard III (A), Loyalty, Prudence, and Care, states that members have a duty of loyalty to their clients. When the manager is responsible for the portfolios of pension plans, the client is not the person or entity who hires the manager but, rather, the beneficiaries of the plan or trust. The duty of loyalty is owed to the ultimate beneficiaries. Joy should not have complied with the CEO's request to buy the stock when he believes the stock is overvalued, because his duty is not owed to BL nor to the CEO. His duty is owed to the BL pension fund beneficiaries. Therefore, Joy would not be permitted to purchase the stock, and this is the correct answer."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the Standard relating to loyalty, prudence, and care, a member who is hired to manage an equity mutual fund:",
        "options": [
            "is required to vote proxies in all instances.",
            "owes the duty of loyalty, prudence, and care to the firm who hired her to serve as fund manager.",
            "owes the duty of loyalty, prudence, and care to invest in a manner consistent with the stated mandate."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to the guidance for Standard III (A), Loyalty, Prudence and Care: Members and candidates managing a fund to an index or an expected mandate owe the duty of loyalty, prudence, and care to invest in a manner consistent with the stated mandate."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Rebecca Chen, CFA, is a portfolio manager at an investment firm. Chen has been specializing in the technology sector. She recently expanded her coverage to the oil sector. Chen attends training to ensure that she has sufficient knowledge of the oil sector before taking the new role. After comprehensive research, Chen concludes that First Oil Company (FOC) is undervalued and buys FOC shares for her clients for whom the investment is suitable. Two months later, FOC's price declines by 20%. Has Chen violated the Standards?",
        "options": [
            "No",
            "Yes, the Standard relating to competence",
            "Yes, the Standard relating to diligence and reasonable basis"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because Standard I(E), Competence, states that to be competent in your role and meet your duties under this standard means having sufficient knowledge, skills, and abilities suitable for a professional to work in that specific role with success. These attributes govern the expertise, experience, and accomplishments that professionals need to perform at the highest level. While competence allows members and candidates the opportunity to undertake an activity successfully, lack of competence cannot necessarily be determined by an unsuccessful or a negative outcome. Many competent investment professionals have experienced failure or loss in their professional lives. Chen has obtained the knowledge in new area and completed a comprehensive research before buying the shares to her clients for whom the investment is suitable. Therefore, Chen has not violated Standard I(E) even though the stock price declined by 20%.\nIn addition, Standard V(A), Diligence and Reasonable Basis, states that members and candidates must exercise diligence, independence, and thoroughness in analyzing investments, making investment recommendations, and taking investment actions. Chen has completed comprehensive research before buying the shares to her clients for whom the investment is suitable. Therefore, she has also not violated the Standard V(A)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Which of the following is among the recommended procedures for compliance with the Standard relating to misrepresentation?\n• Procedure 1: Each member should prepare for client distribution a list of services that the member is capable of performing.\n• Procedure 2: Members should cite specific quotations as attributable to 'investment experts' when confidentiality of the sources has to be preserved.",
        "options": [
            "Procedure 1 only",
            "Procedure 2 only",
            "Both Procedure 1 and Procedure 2"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the recommended procedures for compliance with Standard I (C), Misrepresentation, state that to ensure accurate presentations to clients, each member and candidate should prepare a summary of his or her own qualifications and experience and a list of the services the member or candidate is capable of performing."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "According to the recommended procedures for compliance with the Standard relating to misrepresentation, a member should:",
        "options": [
            "refrain from using information received from a third party.",
            "update a summary of her professional qualifications at least quarterly.",
            "keep copies of the materials that the member relied on in preparing each research report."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to recommended procedures for compliance with Standard I (C), Misrepresentation, to avoid plagiarism members should keep copies of all research reports, articles containing research ideas, material with new statistical methodologies, and other materials that were relied on in preparing the research report."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "A member most likely violates the Standard relating to misrepresentation if he:",
        "options": [
            "distributes a research report written by another firm to his clients.",
            "attributes a quotation to \"a leading analyst\" without naming the analyst.",
            "uses research done by an analyst who no longer works for the firm without providing attribution to that analyst."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to Standard I (C), Misrepresentation, misrepresentation through plagiarism in investment management can take various forms including citing specific quotations as attributable to 'leading analysts' and 'investment experts' without naming the specific references."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Donovan Jones, CFA, works at Grae Investments (GI). GI invests in commodities, stocks, and bonds. Prices for its illiquid holdings are determined by an independent valuation firm. Jones markets performance using a small-cap equity index as a benchmark. Jones switches to a different valuation firm due to its better customer service and lower cost. The switch results in a marginal increase to the current estimated value of its illiquid assets. Jones has most likely violated the Standard relating to misrepresentation:",
        "options": [
            "only by switching valuation firms.",
            "only by using the small-cap equity index as a benchmark.",
            "both by switching valuation firms and by using the small-cap equity index as a benchmark."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to Standard I (C), Misrepresentation, members and candidates may misrepresent the success of their performance record through presenting benchmarks that are not comparable to their strategies. The small-cap equity index is not comparable to the described strategy which includes ownership of a mix of commodities, stocks, and bonds."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Fred Berkam, CFA, makes the following two statements in his communication to clients regarding his equity-based hedge fund:\n• Statement 1: \"The fund has reported seven consecutive years of gains, so investors are assured of avoiding losses next year.\"\n• Statement 2: \"The fund's complex strategy does not fit well with any standard benchmark; therefore no performance benchmark is provided.\"\nBerkam has most likely violated the Standards with:",
        "options": [
            "Statement 1 only.",
            "Statement 2 only.",
            "both Statement 1 and Statement 2."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because Standard I (C), Misrepresentation, prohibits members and candidates from guaranteeing clients any specific return on volatile investments. Stating that an equity-based fund can guarantee against a potential loss is a violation."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Alesha Alsagoff, CFA, is hired by Acacia Papermill to manage its pension plan. She must report annual performance results to the plan trustees. Alsagoff's duty of loyalty, prudence, and care is primarily owed to:",
        "options": [
            "Acacia Papermill.",
            "the pension plan trustees.",
            "the beneficiaries of the pension plan."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because when the manager is responsible for the portfolios of pension plans or trusts, however, the client is not the person or entity who hires the manager, but, rather, the beneficiaries of the plan or trust. The duty of loyalty is owed to the ultimate beneficiaries."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Elana Paralova, a Level I CFA candidate working at an asset management firm, wants to make a good impression on a prospective client. She tells the prospect: \"Getting the CFA Charter will show I am serious about protecting the interests of my clients and it will boost my reputation. Once I get the Charter, I also hope to make more money by getting promoted!\" Her colleague, Jacob Klemmer, CFA, tells Paralova: \"Study all subjects for each exam, you never know what will be included. The three exams will be the most difficult exams you will ever take. Any promotion and pay raise will reflect your enhanced skills.\" Did either Paralova or Klemmer violate the Standards?\nCorrect answer:",
        "options": [
            "No.",
            "Only Paralova violates the Standards.",
            "Only Klemmer violates the Standards."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because neither Paralova or Klemmer violated CFA Standards through their statements. Paralova did not violate Standard VII(B) Reference to CFA Institute, the CFA Designation, and the CFA Program when she made her comments about what getting the Charter will reflect and the hope for a pay raise. The Standard states, When referring to CFA Institute, CFA Institute membership, the CFA designation, or candidacy in the CFA Program, Members and Candidates must not misrepresent or exaggerate the meaning or implications of membership in CFA Institute, holding the CFA designation, or candidacy in the CFA program. Klemmer did not violate Standard VII (B) Reference to CFA Institute, the CFA Designation, and the CFA Program when he expressed his opinion that Paralova's potential pay raise will reflect her enhanced skills. Klemmer also complied with Standard VII(A) Responsibilities as a CFA Institute Member or CFA Candidate, Conduct as Participants in CFA Institute Programs when stating an opinion about the difficulty of the exam without revealing any specific details or the need to study all subjects. The Standard states that candidates must not engage in any conduct that compromises the integrity, validity, or security of CFA Institute programs."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Jayson Kite, CFA, a senior analyst, is preparing a research report on a shipping company. Kite concludes that the stock of a company is a good investment and decides to put a \"buy\" recommendation on the stock. According to the recommended procedures for compliance, Kite should communicate the recommendation:",
        "options": [
            "within the firm first and then to customers.",
            "to customers first and then within the firm.",
            "simultaneously within the firm and to customers."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to the recommended procedures for compliance with Standard III (B), Fair Dealing, a common practice to assure fair dealing is to communicate recommendations simultaneously within the firm and to customers. Members and candidates should encourage firms to develop guidelines that prohibit personnel who have prior knowledge of an investment recommendation from discussing or taking any action on the pending recommendation. Members and candidates should encourage firms to develop guidelines that prohibit personnel who have prior knowledge of an investment recommendation from discussing or taking any action on the pending recommendation."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM3 - Guidance for Standards I–VII",
        "text": "Tim Howley, CFA, \"pumps up\" the price of a security by spreading misleading information and later \"dumps\" the security after the price reaches an artificially high level. Howley has most likely violated the Standard relating to:",
        "options": [
            "market manipulation.",
            "independence and objectivity.",
            "material nonpublic information."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because according to the Standard II(B), market manipulation includes (1) the dissemination of false or misleading information. Also, information-based manipulation includes, but is not limited to, spreading false rumors to induce trading by others. For example, members and candidates must refrain from \"pumping up\" the price of an investment by issuing misleading positive information or overly optimistic projections of a security's worth only to later \"dump\" the investment (i.e., sell it) once the price, fueled by the misleading information's effect on other market participants, reaches an artificially high level."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "Which of the following statements regarding the GIPS standards is accurate?",
        "options": [
            "All fee-paying client portfolios must be included in at least one composite",
            "All portfolios with the same investment mandate are aggregated into a composite",
            "Aggregation of portfolios into composites is based on the actual performance of the portfolios every year"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to the GIPS standards, A composite is an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "Which of the following comments concerning composites meeting the requirements of the GIPS standards is correct?",
        "options": [
            "A firm's claim of compliance requires all fee-paying accounts managed by the firm be included in at least one composite",
            "The requirement to create, use and maintain composites is designed to prevent firms using the best-performing accounts to represent an investment strategy",
            "A composite must include all actual, fee-paying, discretionary and non-discretionary portfolios managed in accordance with the same investment mandate, objective, or strategy"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because one of the key concepts of the standards is the required use of composites. A composite is an aggregation of one or more portfolios managed according to a similar investment mandate, objective, or strategy. The requirement to create, use and maintain composites is designed to prevent firms from cherry-picking—using the best-performing accounts to represent the performance of an investment strategy."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "Which of the following statements describe the key concepts of the GIPS standards?\n• Statement 1: The GIPS standards are ethical standards to ensure full disclosure of investment performance\n• Statement 2: The GIPS standards require firms to maintain composites for all strategies for which the firm manages discretionary and nondiscretionary accounts\n• Statement 3: The GIPS standards address all aspects of performance measurement",
        "options": [
            "Statement 1",
            "Statement 2",
            "Statement 3"
        ],
        "correctAnswer": 0,
        "explanation": "Correct GIPS standards are ethical standards for investment performance presentation to ensure fair representation and full disclosure of investment performance. So, Statement 1 is a key concept of the GIPS standards."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "A firm claiming compliance with GIPS standards is required to:",
        "options": [
            "perform verification of the firm's claim of compliance.",
            "maintain its compliance even after the firm has been verified by an independent third party.",
            "determine selection criteria regarding which existing portfolios to include in a composite at the end of the reporting period."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because firms that claim compliance with the GIPS standards are responsible for their claim of compliance and for maintaining that compliance. That is, firms self-regulate their claim of compliance. Therefore, including when compliance is verified by an independent third party, the firm is always responsible for maintaining that compliance."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "With respect to the GIPS standards, which of the following statements is most accurate? Verification:",
        "options": [
            "of GIPS compliance is mandatory if the firm claims GIPS compliance.",
            "is performed by the firm when self-regulating and certifying its claim of compliance.",
            "tests whether the firm's processes are designed to present performance results in compliance with the GIPS standards."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to GIPS, Verification is a process by which an independent verification firm (verifier) conducts testing of a firm on a firm-wide basis in accordance with the required verification procedures of the GIPS standards. Verification provides assurance on whether the firm's policies and procedures related to composite and pooled fund maintenance, as well as the calculation, presentation, and distribution of performance, have been designed in compliance with the GIPS standards and have been implemented on a firm-wide basis."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "According to the GIPS standards, verification is:",
        "options": [
            "performed with respect to an entire firm.",
            "performed by a firm's compliance department.",
            "mandatory for firms that claim compliance with the GIPS standards."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because according to the GIPS standards, verification is performed with respect to an entire firm, not on specific composites or pooled funds."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "The objectives of the GIPS standards include:",
        "options": [
            "promoting financial regulators' interests.",
            "promoting industry self-regulation on a global basis.",
            "obtaining acceptance of multiple local standards for accurate performance presentation."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because one of the objectives of the GIPS standards is to promote industry self-regulation on a global basis."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "According to the GIPS standards, verification must be performed:",
        "options": [
            "with respect to an entire firm.",
            "on specific composites of a firm.",
            "by a firm's compliance department."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because verification is performed with respect to an entire firm, not on specific composites or pooled funds."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "Asset managers are most likely required to do which of the following as part of their adherence to the GIPS standards?",
        "options": [
            "Adhere to certain calculation methodologies",
            "Only follow the minimum GIPS requirements at the time of composite creation",
            "Include all non-discretionary funds in at least one composite reflecting the investment mandate"
        ],
        "correctAnswer": 0,
        "explanation": "Correct, because the GIPS standards rely on the integrity of input data, the quality of which is critical to creating accurate performance presentations. The underlying valuations of portfolio holdings drive performance. It is essential for these and other inputs to be accurate. The GIPS standards require firms to adhere to certain calculation methodologies to allow for comparability across firms."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "Which of the following statements is most accurate? Compliance with the GIPS standards:",
        "options": [
            "by firms eliminates the need for in-depth due diligence by investors.",
            "enables firms to participate in competitive bids against other GIPS-compliant firms.",
            "is mandatory for firms conducting business in countries that do not have regulations relating to investment performance presentation."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because compliance enables the GIPS-compliant firm to participate in competitive bids against other compliant firms throughout the world."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "Which of the following is not a key concept of the GIPS standards? The GIPS standards for firms:",
        "options": [
            "require the use of composites.",
            "rely on the integrity of input datA.",
            "address every aspect of performance measurement."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because according to the GIPS standards, the GIPS standards do not address every aspect of performance measurement. Therefore, it is not a key concept of the GIPS standards to address every aspect of performance measurement."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "Verification provides assurance that which of the following have been designed in compliance with the GIPS standards?",
        "options": [
            "Only the calculation and presentation of the firm's performance",
            "Only the firm's policies related to composite and pooled fund maintenance",
            "Both the calculation and presentation of the firm's performance, and the firm's policies related to composite and pooled fund maintenance"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because verification provides assurance on whether the firm's policies and procedures related to composite and pooled fund maintenance, as well as the calculation, presentation, and distribution of performance, have been designed in compliance with the GIPS standards and have been implemented on a firm-wide basis."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "According to the GIPS standards, verification:",
        "options": [
            "is performed on a firm-wide basis.",
            "must be performed by a firm's compliance department.",
            "ensures the accuracy of specific composite presentations."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because verification is performed with respect to an entire firm, not on specific composites."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "A firm claiming compliance with the GIPS standards must:",
        "options": [
            "state that its calculation methodology is in accordance with the GIPS standards.",
            "disclose for which firm assets only partial compliance with the GIPS standards is achieved.",
            "document policies and procedures used in establishing compliance with the GIPS standards."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the Fundamentals of Compliance of the GIPS standards state that the FIRM MUST document its policies and procedures used in establishing and maintaining compliance with the REQUIREMENTS of the GIPS standards, as well as any RECOMMENDATIONS it has chosen to adopt, and apply them consistently."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "According to the GIPS standards, which of the following statements is correct?\n• Statement 1: When local regulations conflict with the GIPS standards, firms are required to comply with the GIPS standards if the conflict relates to composite construction.\n• Statement 2: When local regulations conflict with the GIPS standards for performance presentation, firms are required to comply with local regulation.",
        "options": [
            "Statement 1 only",
            "Statement 2 only",
            "Both Statement 1 and Statement 2"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to the GIPS standards, in cases in which laws and/or regulations conflict with the GIPS standards, firms are required to comply with the laws and regulations and make full disclosure of the conflict in the GIPS Report."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "A firm has been in existence for seven years. In order to comply with the GIPS standards, the minimum number of years of GIPS-compliant performance data the firm is initially required to present is:",
        "options": [
            "three years.",
            "five years.",
            "seven years."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the GIPS standards state that a firm is required to initially present, at a minimum, five years of annual investment performance that is compliant with the GIPS standards. If the composite or pooled fund has been in existence less than five years, the firm must present performance since the composite or pooled fund inception date. Prospectively, the firm must present an additional year of performance each year, building up to a minimum of 10 years of GIPS-compliant performance."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "The GIPS standards most likely:",
        "options": [
            "assure prospective clients of the accuracy of a firm's reported investment performance.",
            "help prospective clients consider all relevant information in order to evaluate a firm's past investment performance.",
            "require investment firms to disclose to prospective clients in a standardized form their own methodologies for calculating performance."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to GIPS standards, institutions and individuals are constantly scrutinizing past investment performance returns in search of the best manager to achieve their investment objectives. Further, the GIPS standards ensure fair representation and full disclosure of investment performance. In other words, the GIPS standards lead investment management firms to avoid misrepresentations of performance and to communicate all relevant information that prospective clients should know in order to evaluate past results. Therefore, the GIPS standards help prospective clients consider all relevant information in order to evaluate a firm's past investment performance."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "Which of the following can claim compliance with the GIPS standards?\nCorrect answer:",
        "options": [
            "Only asset owners",
            "Only software vendors that assist firms in claiming compliance with the GIPS standards",
            "Both asset owners and software vendors that assist firms in claiming compliance with the GIPS standards"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because asset owners may comply with the GIPS standards in the same way as firms if they compete for business. If they don't compete for business but report their performance to an oversight body, asset owners may choose to comply with the GIPS standards for asset owners. Therefore, asset owners can claim compliance with the GIPS standards."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "Which of the following statements is accurate?\n• Statement 1: Compliance with the GIPS standards eliminates the need for an investor to conduct in-depth due diligence of an investment management firm\n• Statement 2: Compliance with the GIPS standards by external managers facilitates understanding of risk and return sources of funds supervised by an asset owner",
        "options": [
            "Statement 1 only",
            "Statement 2 only",
            "Both Statement 1 and Statement 2"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the GIPS standards benefit asset managers and their prospective clients and asset owners and their oversight bodies. Particularly, where asset owners require their external managers to comply with the GIPS standards, reporting to the oversight body using the same principles facilitates the understanding of the sources of risk and excess return in the funds under supervision. Therefore, Statement 2 is accurate."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "After a 3-year-old firm has presented a minimum of three years of GIPS-compliant performance, the GIPS standards require the firm to present an additional year of performance each year until the firm reports a minimum of:",
        "options": [
            "five years.",
            "seven years.",
            "ten years."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the GIPS standards state that a firm is required to initially present, at a minimum, five years of annual investment performance that is compliant with the GIPS standards. If the composite or pooled fund has been in existence less than five years, the firm must present performance since the composite or pooled fund inception date. Prospectively, the firm must present an additional year of performance each year, building up to a minimum of ten years of GIPS-compliant performance."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Ethical & Professional Standards",
        "lm": "LM4 - Introduction to GIPS",
        "text": "An investment firm manages a $200 million composite to a small-cap growth style. The firm sells $50 million of these managed assets to a competing money manager. In order to remain in compliance with the GIPS standards, the firm must:",
        "options": [
            "exclude the $50 million from the firm's historical performance.",
            "continue to include the $50 million in the firm's historical performance until the assets were sold.",
            "show the historical performance of the $50 million separately from the firm's historical performance of the remaining $150 million."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because according to GIPS standards, changes in the FIRM'S organization must not lead to alteration of historical performance. Therefore, the firm must continue to include the $50 million in the firm's historical performance."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM1 - Rates and Returns",
        "text": "An individual can invest $19,000 today and receive $20,000 in one year's time. If her required rate of return is 5%, the rate of return on the investment is:",
        "options": [
            "less than the required rate of return.",
            "equal to the required rate of return.",
            "greater than the required rate of return."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the return on the investment can be calculated as (20,000 – 19,000)/19,000 = 1,000/19,000 = 5.26%. Therefore, it exceeds the required return of 5%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM1 - Rates and Returns",
        "text": "An analyst collects the following set of ten returns from previous years:\n\n| Year | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| Return (%) | 2.2 | 6.2 | 8.9 | 9.3 | 10.5 | 11.7 | 12.3 | 14.1 | 15.3 | 18.4 |\n\nThe geometric mean return is closest to:",
        "options": [
            "9.62%.",
            "10.80%.",
            "10.89%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the geometric mean return is calculated as the Tth root of the product of T terms, where the terms are one plus the returns and T is the number of returns. After taking the Tth root, subtract one:\nwhere\nRG = the geometric mean return\nT = the number of returns\nRt = the return in year t\nRG =\n= 10.80%"
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM1 - Rates and Returns",
        "text": "Over a period of 16 months, an investor has earned a return of 12%. The investor's annualized return is closest to:",
        "options": [
            "8.87%.",
            "9.00%.",
            "9.38%."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the annualized return is calculated using the formula for annualized return, Rannual = (1+Rperiod)c, where:\nRperiod = 12%\nc = 12/16, because one year contains 12/16th of a 16-month period.\nPlugging in the numbers:\nRannual = 1.12(12/16) – 1 = 0.0887 or = 8.87%"
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM1 - Rates and Returns",
        "text": "An investor observed the following hedge fund return data.\n\n| Year | Beginning of Year Account Balance | Net Return of the Fund |\n| :--- | :--- | :--- |\n| 1 | $30 million | 10% |\n| 2 | $40 million | –5% |\n| 3 | $30 million | –5% |\n\nThe money-weighted return is closest to:",
        "options": [
            "–1.523%.",
            "–0.749%.",
            "–0.524%."
        ],
        "correctAnswer": 2,
        "explanation": "Correct. Tabulate the annual returns and the investment amounts to determine the cash flows:\n\n| Year | 1 | 2 | 3 |\n| :--- | :--- | :--- | :--- |\n| Balance from previous year | 0 | 33.00 | 38.00 |\n| New Investment by Maria Delanie | 30.00 | 7.00 | 0 |\n| Withdrawal by Maria Delanie | 0 | 0 | -8.00 |\n| Net balance at the beginning of the year | 30.00 | 40.00 | 30.00 |\n| Investment return for the year | 10% | -5% | -5% |\n| Investment gain (loss) | 3.00 | -2.00 | -1.50 |\n| Balance at the end of the year | 33.00 | 38.00 | 28.50 |\n\nCF0 = –30, CF1 = –7, CF2 = +8, CF3 = +28.5; IRR = –0.524%"
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM1 - Rates and Returns",
        "text": "An investor considers the following certificates of deposit (CDs) available for purchase at face value:\n\n| CD | Interest Rate |\n| :--- | :--- |\n| 1 | 2.2% |\n| 2 | 3.3% |\n| 3 | 4.4% |\n\nIf each CD has the same maturity and default risk, the opportunity cost of investing in CD 1 is closest to:",
        "options": [
            "0.0%.",
            "1.1%.",
            "2.2%."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because all three securities have the same maturity and default risk so the investor is forgoing 2.2% (4.4% – 2.2%) by investing in CD 1 rather than investing in CD 3."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM1 - Rates and Returns",
        "text": "An investor is considering two term deposits with the following characteristics:\n\n| | Term Deposit 1 | Term Deposit 2 |\n| :--- | :--- | :--- |\n| Compounding frequency | Quarterly | Continuous |\n| Stated annual rate | 4% | --- |\n\nThe stated annual rate for Term Deposit 2 that should make the investor indifferent between the two term deposits is closest to:",
        "options": [
            "3.92%.",
            "3.98%.",
            "4.06%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the investor will be indifferent if the EAR for both term deposits is the same. Therefore, we need to find the stated annual rate with continuous compounding that corresponds to the EAR of the quarterly compounded term deposit. Calculations: EAR of Term Deposit 1 = (1 + 0.04/4)4 – 1 = 0.040604. Hence, EAR of Term Deposit 2 = 0.040604 = er – 1, leading to a stated annual rate for Term Deposit 2 of r = ln(1.040604) = 0.039801 ≈ 3.98%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM1 - Rates and Returns",
        "text": "An analyst gathers the following information about a portfolio:\n\n| Year | Equity Return | Fixed Income Return |\n| :--- | :--- | :--- |\n| 1 | 7.20% | 2.10% |\n| 2 | 9.60% | –4.60% |\n| 3 | –14.20% | 4.70% |\n\nIf the equity weighting is 70%, the fixed-income weighting is 30% and the portfolio is rebalanced annually, the portfolio's annual geometric mean return is closest to:",
        "options": [
            "0.60%.",
            "0.83%.",
            "1.82%."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the first step is to calculate the portfolio's annual returns as a weighted mean of the equity and fixed-income returns with 70% equity and 30% fixed-income weighting.\nYear 1: (0.7 × 0.072) + (0.3 × 0.021) = 0.0567 = 5.67%\nYear 2: (0.7 × 0.096) + (0.3 × –0.046) = 0.0534 = 5.34%\nYear 3: (0.7 × –0.142) + (0.3 × 0.047) = –0.0853 = –8.53%\nNext, the portfolio's geometric mean annual return is calculated as:\n[(1 + 0.0567) × (1 + 0.0534) × (1 – 0.0853)]^(1/3) – 1 = [1.01818]^(1/3) – 1 = 0.00602 ≈ 0.60%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM1 - Rates and Returns",
        "text": "An investor purchased a stock for $450 and then sold the stock immediately after receiving a dividend of $2. If the holding period return is a loss of 10.2%, the investor sold the stock at a price closest to:",
        "options": [
            "$402.00",
            "$404.00",
            "$406.00"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because a holding period return is the return earned from holding an asset for a single specified period of time. This return can be generalized and shown as a mathematical expression in which P is the price and I is the income: R = [(P1 – P0) + I1]/P0. The subscript indicates the time of the price or income, (t = 0), is the beginning of the period and (t = 1) is the end of the period. Hence, P1 = R × P0 + P0 – I1 = –10.2% × $450 + $450 – $2 = $402.1 ≈ $402."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM1 - Rates and Returns",
        "text": "An investor purchases a stock for $100. Immediately after receiving a dividend of $7, the investor sells the stock for $107. The holding period return of the investment is closest to:",
        "options": [
            "0%.",
            "7%.",
            "14%."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because a holding period return is the return earned from holding an asset for a single specified period of time. This return can be generalized and shown as a mathematical expression in which P is the price and I is the income: R = (P1 – P0 + D1)/P0 Thus, R = ($107 – $100 + $7)/$100 = $14/$100 = 14%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM1 - Rates and Returns",
        "text": "Which of the following statements is most accurate? The money-weighted return:",
        "options": [
            "ignores cash withdrawals and additional cash investments.",
            "measures what the investor actually earned on the funds invested.",
            "should be used to compare the performance of different investment managers."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the money-weighted return is an accurate measure of what the investor actually earned on the money invested."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM1 - Rates and Returns",
        "text": "Which of the following risk premiums compensates investors for the risk of loss relative to an investment's fair value if the investment needs to be converted to cash quickly?",
        "options": [
            "Liquidity premium",
            "Inflation premium",
            "Maturity premium"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the liquidity premium compensates investors for the risk of loss relative to an investment's fair value if the investment needs to be converted to cash quickly."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM1 - Rates and Returns",
        "text": "With respect to portfolio return measures, which of the following statements is most accurate?",
        "options": [
            "The time-weighted return is sensitive to additions and withdrawals of funds",
            "The calculations of the money-weighted return and internal rate of return are similar",
            "The money-weighted return is the preferred measure when evaluating the performance of a portfolio manager"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the money-weighted return accounts for the money invested and provides the investor with information on the return she earns on her actual investment. The money-weighted return and its calculation are similar to the internal rate of return and the yield to maturity."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM2 - Time Value of Money in Finance",
        "text": "A pension fund needs to pay a lump sum $10,000,000 to its participants in 15 years. If the fund is expected to earn 5% per year compounded semi-annually, the amount needed today to meet its liability in 15 years is closest to:",
        "options": [
            "$4,767,427.00",
            "$4,810,171.00",
            "$4,892,771.00"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because using the equation PV = FVN (1 + rs/m)-Nm\nwhere\nm = number of compounding periods per year\nrs = quoted annual interest rate\nN = number of years\nwe compute PV = $10,000,000 × (1 + 0.05/2)–15×2 = $4,767,426.85 ≈ $4,767,427.\nIn applying the equation, we use the periodic rate (in this case, the semi-annual rate) and the appropriate number of periods with semi-annual compounding.\nAlternative solution using a financial calculator in END mode:\nN = 30; I/Y = 0.025; PMT = 0; FV = 10,000,000; CPT PV = $4,767,426.852 ≈ $4,767,427"
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM2 - Time Value of Money in Finance",
        "text": "A company estimates its revenue will be 50% higher than today in four years' time. The compound annual growth rate is closest to:",
        "options": [
            "10.7%.",
            "11.8%.",
            "12.5%."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because a growth rate (g) is calculated as g = (FVN/PV)1/N – 1, where FV is the future value, PV is the present value and N is the number of periods. Here, g = (1.5/1)1/4 – 1 = 0.10668 ≈ 10.7%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM2 - Time Value of Money in Finance",
        "text": "A bank offers a savings account with a stated annual rate of 3% in the first year and 5% in the second year. If returns are compounded quarterly and €90,000 is deposited in the account at the beginning of the first year, the account's value at the end of the second year is closest to:",
        "options": [
            "€97,200.00",
            "€97,335.00",
            "€97,455.00"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the returns are compounded quarterly; ."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM2 - Time Value of Money in Finance",
        "text": "An investor has three options for receiving payments from an investment:\n• Option 1: a single payment of $136,000 today;\n• Option 2: 30 annual payments of $12,000, beginning one year from today;\n• Option 3: 20 annual payments of $13,000, beginning today.\nIf the annual discount rate is 8%, the option with the highest present value is:",
        "options": [
            "Option 1.",
            "Option 2.",
            "Option 3."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because Option 3 (annuity due with 20 payments of $13,000 each) has the highest present value of the annuities and the $136,000 lump sum.\nCalculator solution for Option 2: End mode; N = 30; I/Y = 8; PMT = –12,000; compute PV = 135,093.\nCalculator solution for Option 3: Begin mode; N = 20; I/Y = 8; PMT = –13,000; compute PV = 137,847."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM2 - Time Value of Money in Finance",
        "text": "An investor needs to make the following payments to cover college tuition fees, starting 10 years from today:\n\n| Annual fee (payable at the beginning of each year) | $50,000 |\n| Number of years of fee payments | 4 |\n\nIf the investor's annual discount rate is 3%, the minimum investment amount required today to fund all four years of college tuition is closest to:",
        "options": [
            "$138,294.00",
            "$142,442.00",
            "$146,716.00"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the present value (PV) of the annuity due 10 years from today equals PV10 = $50,000 + $50,000 × [1 – 1/(1.03)^3]/0.03 = $50,000 + $50,000 × 2.828611 = $191,431. The PV of the annuity today equals PV0 = $191,431/(1.03)^10 = $142,442.\nCalculator solution: BEGIN mode; N = 4; I/Y = 3%; PMT = 50,000; solve for PV = 191,431. Discounted back 10 years: N = 10; I/Y = 3%; FV = 191,431; solve for PV = 142,442.\nAlternatively, the annuity can be treated as an ordinary annuity, with a PV 9 years from today of PV9 = $50,000 × [1 – 1/(1.03)^4]/0.03 = $50,000 × 3.717098 = $185,855. The PV of the annuity today equals PV0 = $185,855/(1.03)^9 = $142,442.\nCalculator solution: END mode; N = 4; I/Y = 3%; PMT = 50,000; solve for PV = 185,855. Discounted back 9 years: N = 9; I/Y = 3%; FV = 185,855; solve for PV = 142,442."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM2 - Time Value of Money in Finance",
        "text": "An investment requires 10 equal annual payments, starting today, and will pay out a lump sum of $500,000 15 years from today. If the interest rate is 4% per year compounded annually, the required annual payment is closest to:",
        "options": [
            "$32,913.00",
            "$34,230.00",
            "$40,044.00"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the present value of the future lump sum payment is PV = FVN(1 + r)–N = $500,000(1 + 0.04)–15 = $277,632.25. The 10 annual payments form an annuity due (since the payments start today) whose present value equals the present value of an ordinary annuity with 9 annual payments plus the first payment, i.e. PV = A + A[1 – 1/(1 + r)^N]/r = A(1 + [1 – 1/(1 + 0.04)^9]/0.04) = 8.4353(A). Setting the PV of the cash inflows (the return in 15 years), we can solve for the annual payment amount; A = $277,632.25/8.4353 ≈ $32,913. Calculator solution: BGN; N = 10; I/Y = 4; PV = 277,632.25; solve for PMT = 32,913."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM2 - Time Value of Money in Finance",
        "text": "An investment pays $1,000 annually for five years, with the first payment occurring three years from today. If the discount rate is 6% compounded annually, the present value of the investment today is closest to:",
        "options": [
            "$3,537.00",
            "$3,749.00",
            "$4,212.00"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because by drawing a timeline, the investment is recognized as a delayed annuity with the first payment starting at t = 3.\nThe first step is to compute the present value of an ordinary annuity at t = 2 because the first annuity payment is then one period away, as PV2 = A[1 – 1/(1 + r)^N] / r = $1,000 × [1 – 1/(1 + 0.06)^5]/0.06 = $4,212.36.\nUsing the present value formula for a lump sum to bring the single cash flow from t = 2 to t = 0, PV0 = FVN(1 + r)–N = $4,212.36 (1 + 0.06)–2 = $3,748.99 ≈ $3,749.\nCalculator solution:\n(1) END mode; N = 5; I = 6%; PMT = –1,000; FV = 0; solve for PV = 4,212.36.\n(2) END mode; N = 2; I = 6%; PMT = 0; FV = 4,212.36; solve for PV = 3,748.99 ≈ 3,749.\nA second method to compute the present value of the investment is to recognize it as an annuity due with first payment at t = 3, and then discount back three periods using the present value formula for a lump sum. PV3 := {A[1 – 1/(1 + r)^N] / r}(1 + r) = $1,000 × {[1 – 1/(1 + 0.06)^5]/0.06} × (1 + 0.06) = $4,465.11.\nUsing the present value formula for a lump sum to bring the single cash flow from t = 3 to t = 0, PV0 = FVN(1 + r)–N = $4,465.11 (1 + 0.06)–3 = $3,748.99 ≈ $3,749.\nCalculator solution:\n(1) BGN mode; N = 5; I = 6%; PMT = –1,000; FV = 0; solve for PV = 4,465.11.\n(2) END mode; N = 3; I = 6%; PMT = 0; FV = 4,465.11; solve for PV = 3,748.99 ≈ 3,749.\nAnother method to compute the correct answer is to calculate the present value of a series of equal cash flows, with the first cash flow in the third year. Using a calculator with CF0=0, CF1=0, CF2=0, CF3=1000, CF4=1000, CF5=1000, CF6=1000, CF7=1000; I=6%; solve for NPV= 3,748.99 ~ 3,749."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM3 - Statistical Measures of Asset Returns",
        "text": "A graphical depiction of a continuous distribution shows the left tail to be longer than the right tail. The distribution is best described as having:",
        "options": [
            "leptokurtosis.",
            "positive skewness.",
            "negative skewness."
        ],
        "correctAnswer": 2,
        "explanation": "Correct. A negatively skewed distribution appears as if the left tail has been pulled away from the mean. The average magnitude of negative deviations from the mean is larger than the average magnitude of positive deviations."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM3 - Statistical Measures of Asset Returns",
        "text": "An analyst gathers the following sample returns for a security:\n\n| Return |\n| :--- |\n| –2% |\n| –1% |\n| 1% |\n| 2% |\n\nThe mean absolute deviation of the sample returns is:",
        "options": [
            "less than the sample standard deviation.",
            "equal to the sample standard deviation.",
            "greater than the sample standard deviation."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the mean absolute deviation of 1.5% is less than the sample standard deviation of 1.83%. The mean absolute deviation, MAD, is calculated as: , where the sample mean, . As the sample mean is: , the calculation of MAD is: = 1.5000%, while the sample standard deviation of n observations, Xi, is , here: = 1.8257%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM3 - Statistical Measures of Asset Returns",
        "text": "An analyst gathers the following returns for seven funds:\n\n| 12% | 7% | 5% | 4% | 8% | 3% | 3% |\n\nThe second quartile return is:",
        "options": [
            "4%.",
            "5%.",
            "6%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the formula for the position of a percentile in an array with n entries sorted in ascending order is Ly = (n + 1) × y/100, where y is the percentage point at which we are dividing the distribution and Ly is the location ( L) of the percentile ( Py) in the array sorted in ascending order. With seven entries, the location of the second quartile, or 50th percentile, is: Ly = (7 + 1) × 50/100 = 4. When placing the funds' returns in ascending order (3%; 3%; 4%; 5%; 7%; 8%; 12%), the return of the 4th fund is 5%.\nAlternatively, candidates might realize that the second quartile or 50th percentile is the median. The median is the value of the middle item of a set of items that has been sorted into ascending or descending order. In an odd-numbered sample of n items, the median occupies the ( n + 1)/2 position. Hence, the median return is 5%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM3 - Statistical Measures of Asset Returns",
        "text": "An analyst observes the following EPS for four companies: –£0.50, £0.50, £2.50, and £5.50. The 50th percentile of the EPS values is closest to:",
        "options": [
            "£1.50.",
            "£2.00.",
            "£2.50."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the 50th percentile is the median, which is the average of the two middle items; (£0.50 + £2.50)/2 = £1.50. In an even-numbered sample of n items, the median occupies the (n + 1)/2 position. In an even-numbered sample, we define the median as the mean of the values of items occupying the n/2 and (n + 2)/2 positions (the two middle items). Calculating the median may also be more complex; to do so, we need to order the observations from smallest to largest, determine whether the sample size is even or odd and, on that basis, apply one of two calculations. Alternatively, the 50th percentile when Ly is not a whole number or integer, Ly lies between the two closest integer numbers (one above and one below), and we use linear interpolation between those two places to determine Py. That is, Ly = (n + 1)(y/100) = (4 + 1)(50/100) = 2.5. Hence, 2 is the closest integer below the calculated location and 3 is the closest integer above the calculated location. Using linear interpolation, P50 = £0.50 + (£2.50 – £0.50) × (2.5 – 2) = £1.50."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM3 - Statistical Measures of Asset Returns",
        "text": "An analyst calculates the following statistics for a sample with 100 observations:\n\n| | Value |\n| :--- | :--- |\n| First quartile | 11 |\n| Second quartile | 62 |\n| Third quartile | 93 |\n| Fourth quartile | 359 |\n\nThe interquartile range of the sample is equal to:",
        "options": [
            "31",
            "82",
            "348"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the interquartile range (IQR) is the difference between the third quartile and the first quartile, or IQR = Q3 – Q1 = 93 – 11 = 82. Quartiles divide the distribution into quarters."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM3 - Statistical Measures of Asset Returns",
        "text": "Which of the following measures best quantifies the amount of risk per unit of mean return?",
        "options": [
            "Sharpe ratio",
            "Standard deviation",
            "Coefficient of variation"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the coefficient of variation, CV, is the ratio of the standard deviation of a set of observations to their mean value. When the observations are returns, for example, the coefficient of variation measures the amount of risk (standard deviation) per unit of mean return."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM3 - Statistical Measures of Asset Returns",
        "text": "An analyst discards the lowest 2.5% and the highest 2.5% of values in a sample, and computes the mean of the remaining 95% of values. The resulting mean is best described as a:",
        "options": [
            "trimmed mean.",
            "harmonic mean.",
            "winsorized mean."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the trimmed mean is computed by excluding a stated small percentage of the lowest and highest values and then computing an arithmetic mean of the remaining values. For example, a 5% trimmed mean discards the lowest 2.5% and the highest 2.5% of values and computes the mean of the remaining 95% of values."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM3 - Statistical Measures of Asset Returns",
        "text": "Ranked in ascending order, the 19th observation in a sample of 75 is in the second:",
        "options": [
            "decile.",
            "quintile.",
            "quartile."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the 19th observation is located at the 25th percentile; which is in the second quintile. The second quintile includes observations that are above the 20th percentile and at or below the 40th percentile."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM3 - Statistical Measures of Asset Returns",
        "text": "If a unimodal return distribution is negatively skewed, which of the following most likely has the highest value?",
        "options": [
            "Mean",
            "Mode",
            "Median"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because for the continuous negatively skewed unimodal distribution, the mean is less than the median, which is less than the mode. Therefore, the mode has the highest value."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM3 - Statistical Measures of Asset Returns",
        "text": "For a continuous positively skewed unimodal distribution:",
        "options": [
            "both the mode and the median are less than the mean.",
            "both the mode and the median are greater than the mean.",
            "the mode is less than the mean and the median is greater than the mean."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because for a continuous positively skewed unimodal distribution, the mode is less than the median, which is less than the mean."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM3 - Statistical Measures of Asset Returns",
        "text": "A portfolio has a mean return of 1.0% and a standard deviation of returns of 2.7%. If the specified minimum target return is 1.0%, the sample target semideviation is:",
        "options": [
            "less than 2.7%.",
            "equal to 2.7%.",
            "greater than 2.7%."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the target downside deviation = [Σ(Xi – B)2/(n – 1)]0.5, where Xi are the periodic returns below the target return, B is the target return, and n is the total number of periods. Since the sample has a standard deviation of 2.7%, it will have values below and above its mean of 1.0%. Since the target downside deviation ignores the deviations above the mean, it will be less than the standard deviation."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM3 - Statistical Measures of Asset Returns",
        "text": "The correlation between two variables measures:",
        "options": [
            "only their linear relationship.",
            "only their non-linear relationship.",
            "both their linear and non-linear relationships."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the correlation coefficient is a measure of the linear association between two variables; it would not be appropriate to use the correlation coefficient to measure the non-linear relationship between variables."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM3 - Statistical Measures of Asset Returns",
        "text": "A portfolio has the following annual returns over five years:\n\n| Year | Annual Return |\n| :--- | :--- |\n| 1 | –23% |\n| 2 | 20% |\n| 3 | 3% |\n| 4 | 13% |\n| 5 | –1% |\n\nIf the portfolio manager has a target annual return of 6%, the portfolio's target downside deviation is closest to:",
        "options": [
            "12%.",
            "13%.",
            "15%."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the target downside deviation, also referred to as the target semideviation, is a measure of dispersion of the observations (here, returns) below the target. To calculate a sample target semideviation, we first specify the target. After identifying observations below the target, we find the sum of the squared negative deviations from the target, divide that sum by the total number of observations in the sample minus 1, and, finally, take the square root. Observations for years 1, 3, and 5 are below the target. Thus, target downside deviation = {[(-23% - 6%)^2 + (3% - 6%)^2 + (-1% - 6%)^2]/4}^(1/2) = {[(-29%)^2 + (-3%)^2 + (-7%)^2]/4}^(1/2) = [(841%^2 + 9%^2 + 49%^2)/4]^(1/2) = (899%^2/4)^(1/2) = (224.75%^2)^(1/2) = 14.99% ≈ 15%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM3 - Statistical Measures of Asset Returns",
        "text": "The coefficient of variation of a portfolio's monthly returns is best defined as the ratio of the:",
        "options": [
            "standard deviation of the portfolio's returns to the mean return.",
            "mean excess portfolio return to the standard deviation of returns.",
            "standard deviation of the portfolio's returns to the mean excess return."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the coefficient of variation is the ratio of the standard deviation of a set of observations to their mean value."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM4 - Probability Trees and Conditional Expectations",
        "text": "A discrete random variable X has the following probability distribution:\n\n| Probability | Outcome |\n| :--- | :--- |\n| 0.20 | 35 |\n| 0.30 | 50 |\n| 0.50 | 80 |\n\nThe standard deviation of X is closest to:",
        "options": [
            "18.73.",
            "20.00.",
            "22.91."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the expected value E(X) = Σi=1nP(Xi)Xi = (0.20 × 35) + (0.30 × 50) + (0.50 × 80) = 62. The variance σ^2(X) = E{[X – E(X)]^2} = Σi=1nP(Xi)[X – E(X)]^2 = 0.20 × (35 – 62)^2 + 0.30 × (50 – 62)^2 + 0.50 × (80 – 62)^2 = 351. Standard deviation is the positive square root of variance: σ = 351^(1/2) ≈ 18.73."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM4 - Probability Trees and Conditional Expectations",
        "text": "An analyst assumes that a company's future EPS will be either $2.00, $2.20, or $2.40. If each scenario is equally likely, the variance [in $2] of the company's future EPS is closest to:",
        "options": [
            "0.03.",
            "0.16.",
            "0.20."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the variance of a random variable is the expected value (the probability-weighted average) of squared deviations from the random variable's expected value: σ2(X) = E[X – E(X)]2. Since each scenario is equally likely (probability = 1/3), E(X) = (2.0 + 2.2 + 2.4)/3 = 2.2, so σ2(X) = [(2.0 – 2.2)2 + (2.2 – 2.2)2 + (2.4 – 2.2)2]/3 = [0.04 + 0.04]/3 = 0.08/3 = 0.0267 ≈ 0.03 [in $2]."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM4 - Probability Trees and Conditional Expectations",
        "text": "A tree diagram contains the following information about the dividend per share payable by a company under two scenarios:\n\n| Scenario | Probability of Scenario | Dividend per Share | Probability of Dividend |\n| :--- | :--- | :--- | :--- |\n| Favorable | 0.60 | $2.00 | 0.80 |\n| | | $1.50 | 0.20 |\n| Unfavorable | 0.40 | $0.75 | 0.30 |\n| | | $0.50 | 0.70 |\n\nThe expected dividend per share under the favorable scenario is closest to:",
        "options": [
            "$1.14.",
            "$1.37.",
            "$1.90."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the expected value of a random variable X given an event or scenario S is denoted E(X | S). Suppose the random variable X can take on any one of n distinct outcomes X1, X2, ..., Xn (these outcomes form a set of mutually exclusive and exhaustive events). The expected value of X conditional on S is the first outcome, X1, times the probability of the first outcome given S, P(X1 | S), plus the second outcome, X2, times the probability of the second outcome given S, P(X2 | S), and so forth. In our case, S = Favorable scenario, X1 = Dividend of $2.50, X2 = Dividend of $1.50, P(X1 | S) = 0.80, and P(X2 | S) = 0.20. Thus, the expected dividend given the favorable scenario = (0.80 × $2.00) + (0.20 × $1.50) = $1.90."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM4 - Probability Trees and Conditional Expectations",
        "text": "An analyst examines the distribution of portfolio returns in bullish and bearish market scenarios. To calculate the expected return on the portfolio in a bearish market scenario, the most appropriate approach is to use:",
        "options": [
            "the multiplication rule.",
            "conditional expected values.",
            "the total probability rule for expected value."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because in investments, we make use of any relevant information available in making our forecasts. When we refine our expectations or forecasts, we are typically making adjustments based on new information or events; in these cases, we are using conditional expected values."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM5 - Portfolio Mathematics",
        "text": "A portfolio manager considers the following joint probability function:\n\n| | Return on Foreign Portfolio RP = –10% | Return on Foreign Portfolio RP = 25% |\n| :--- | :--- | :--- |\n| Return on Foreign Currency RC = –15% | 0.6 | 0 |\n| Return on Foreign Currency RC = 30% | 0 | 0.4 |\n\nThe covariance (in % squared) between the returns on the foreign portfolio and the foreign currency is closest to:",
        "options": [
            "294",
            "378",
            "819"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the covariance is 378 and calculated as follows:\nExpected return on the foreign portfolio = 0.6(–10%) + 0.4(25%) = 4%.\nExpected return on the foreign currency = 0.6(–15%) + 0.4(30%) = 3%.\nCovariance = 0.6(–10% – 4%)(–15% – 3%) + 0.4(25% – 4%)(30% – 3%) = 378 (% squared)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM5 - Portfolio Mathematics",
        "text": "If a portfolio's safety-first ratio and coefficient of variation both equal 1.2, the portfolio's return threshold is:",
        "options": [
            "negative.",
            "zero.",
            "positive."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the safety-first ratio is: [E(RP) – RL]/σP, where RP is the portfolio return, RL is the return threshold (shortfall level), and σP is the portfolio standard deviation. The coefficient of variation (CV) is: σP/E(RP). When this ratio is greater than 1.0, risk is greater than return. With a CV greater than 1.0 (i.e., σP > RP), the only way for the SFRatio to be greater than 1.0 is if the shortfall level is negative."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM5 - Portfolio Mathematics",
        "text": "An analyst estimates the following correlation matrix of two securities' returns:\n\n| | Security 1 | Security 2 |\n| :--- | :--- | :--- |\n| Security 1 | 1.0 | 0.5 |\n| Security 2 | 0.5 | 1.0 |\n\nIf the standard deviation of returns of each security is 9%, the covariance (in units of % squared) between the two securities is closest to:",
        "options": [
            "20.3.",
            "40.5.",
            "61.7."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the covariance is Cov (R1, R2) = ρ(R1, R2) σ(R1)σ(R2) = (0.5)(9)(9) = 40.5."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM5 - Portfolio Mathematics",
        "text": "If the returns of two assets exhibit perfect positive correlation, the two-asset portfolio's standard deviation of returns is:",
        "options": [
            "less than the weighted average standard deviation.",
            "equal to the weighted average standard deviation.",
            "greater than the weighted average standard deviation."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because correlation is a number between –1 and +1 for two random variables. Increasingly positive correlation indicates an increasingly strong positive linear relationship (up to 1, which indicates a perfect linear relationship). Thus, a perfectly positive linear relationship indicates correlation of 1.0. As long as security returns are not perfectly positively correlated, diversification benefits are possible. Since correlation equals 1.0, diversification benefits cannot be obtained and the portfolio standard deviation formula simplifies to a weighted average."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM6 - Simulation Methods",
        "text": "Bootstrap resampling:",
        "options": [
            "repeatedly draws samples without replacement.",
            "can be used to estimate the standard error of a population median.",
            "relies on an analytical formula to estimate the distribution of estimators."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because bootstrap, one of the most popular resampling methods, can be used to find the standard error or construct confidence intervals for the statistic of other population parameters, such as the median."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM6 - Simulation Methods",
        "text": "A random variable Y = exp(X) is lognormally distributed, where X is normally distributed. The distribution of Y:",
        "options": [
            "is skewed to the left.",
            "is often used to model stock prices.",
            "has a mean equal to exp(μ), where μ is the mean of X."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the lognormal distribution has been found to be a usefully accurate description of the distribution of prices for many financial assets, which includes stocks."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM6 - Simulation Methods",
        "text": "The lognormal distribution is:",
        "options": [
            "negatively skewed.",
            "bounded below by zero.",
            "widely used for modeling the probability distribution of asset returns."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the two most noteworthy observations about the lognormal distribution are that it is bounded below by 0 and it is skewed to the right (it has a long right tail)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM6 - Simulation Methods",
        "text": "Both the normal distribution and the lognormal distribution:",
        "options": [
            "are symmetrical.",
            "are completely described by two parameters.",
            "have a range of possible outcomes that includes all real numbers between –∞ and +∞."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because like the normal distribution, the lognormal distribution is completely described by two parameters."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM7 - Estimation and Inference",
        "text": "A researcher wants to measure the level of consumer confidence in a country by interviewing a simple random sample of ten consumers from three randomly selected cities. This method is an example of:",
        "options": [
            "cluster sampling.",
            "systematic sampling.",
            "stratified random sampling."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because cluster sampling requires the division or classification of the population into subpopulation groups, called clusters. In this method, the population is divided into clusters, each of which is essentially a mini-representation of the entire populations. Then certain clusters are chosen as a whole using simple random sampling. If a subsample is randomly selected from each selected cluster, then the plan is referred as two-stage cluster sampling. In this case, each city represents a cluster, from which a sample of ten consumers is randomly selected, i.e. the researcher uses a two-stage cluster sampling."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM7 - Estimation and Inference",
        "text": "The central limit theorem is best described as stating that the sampling distribution of the sample mean will be approximately normal for large-size samples:",
        "options": [
            "if the population distribution is normal.",
            "if the population distribution is symmetrical.",
            "for populations described by any probability distribution."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the central limit theorem holds without regard for the distribution of the underlying population."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM7 - Estimation and Inference",
        "text": "An analyst gathered the following information about a stock index:\n\n| Mean net income for all companies in the index | $2.4 million |\n| Standard deviation of net income for all companies in the index | $3.2 million |\n\nIf the analyst takes a sample of 36 companies from the index, the standard error of the sample mean is closest to:",
        "options": [
            "$88,889.00",
            "$400,000.00",
            "$533,333.00"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the standard error of the sample mean is equal to the population standard deviation (σ) divided by the square root of the number of observations in the sample (n):"
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM7 - Estimation and Inference",
        "text": "An analyst studying the Sharpe ratios of mutual funds globally uses only the data from the standard internal database, which covers 12 mutual funds. This sampling method is best described as:",
        "options": [
            "cluster sampling.",
            "judgmental sampling.",
            "convenience sampling."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because in this method (convenience sampling), an element is selected from the population based on whether or not it is accessible to a researcher or on how easy it is for a researcher to access the element. Because the samples are selected conveniently, they are not necessarily representative of the entire population, and hence the level of the sampling accuracy could be limited. By choosing to use all the data from an internal database, the analyst is using convenience sampling."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM7 - Estimation and Inference",
        "text": "The sampling distribution of a statistic must be constructed from samples that are:",
        "options": [
            "large.",
            "of the same size.",
            "from the same stratum."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the sampling distribution of a statistic is the distribution of all the distinct possible values that the statistic can assume when computed from samples of the same size randomly drawn from the same population."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM7 - Estimation and Inference",
        "text": "A population has a lognormal distribution with a standard deviation of 50. Samples with a size of 100 are drawn from the population. The sampling distribution of the sample mean is most likely:",
        "options": [
            "skewed to the right with a standard deviation of 50.",
            "approximately symmetric with a standard deviation of 5.",
            "approximately symmetric with a standard deviation of 0.5."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because, according to the central limit theorem, given a population described by any probability distribution having mean μ and finite variance σ2, the sampling distribution of the sample mean X computed from samples of size n from this population will be approximately normal with mean μ (the population mean) and variance σ2/n (the population variance divided by n) when the sample size n is large. Since the sample size is large (n = 100), the sampling distribution of the sample mean is approximately normal, or symmetric, with a mean of 100 and standard deviation of 50/(100)^1/2 = 5."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM8 - Hypothesis Testing",
        "text": "When testing a hypothesis, the power of a test is best described as the:",
        "options": [
            "same as the level of significance of the test.",
            "probability of rejecting a true null hypothesis.",
            "probability of correctly rejecting the null hypothesis."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the power of a test is the probability of correctly rejecting the null hypothesis—that is, the probability of rejecting the null when it is false."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM8 - Hypothesis Testing",
        "text": "A nonparametric test is most appropriate when:",
        "options": [
            "comparing differences between means.",
            "data are given in ranks.",
            "data meet distributional assumptions."
        ],
        "correctAnswer": 1,
        "explanation": "Correct. A nonparametric test is used under three circumstances:\n1. when the data do not meet distributional assumptions,\n2. when the data are given in ranks, and\n3. when the hypothesis does not concern a parameter."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM8 - Hypothesis Testing",
        "text": "An analyst wants to test the mean difference between two normally distributed populations using dependent samples. If the population variances are unknown, the most appropriate hypothesis test is a:",
        "options": [
            "chi-square test.",
            "paired comparisons t-test.",
            "t-test with a pooled estimator of the common variance."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because when we want to conduct tests on two means based on samples that we believe are dependent, these methods apply. The t-test is based on data arranged in paired observations, and the test itself is sometimes called a paired comparisons test."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM8 - Hypothesis Testing",
        "text": "Which of the following test statistics is used when testing the variance of a single normally distributed population?",
        "options": [
            "z-statistic",
            "F-statistic",
            "Chi-square statistic"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because in tests concerning the variance of a single normally distributed population, we make use of a chi-square test statistic."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM8 - Hypothesis Testing",
        "text": "All else being equal, if an analyst specifies a smaller significance level for a hypothesis test, the probability of a Type II error:",
        "options": [
            "decreases.",
            "remains the same.",
            "increases."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because all else equal, if we decrease the probability of a Type I error by specifying a smaller significance level (say, 1% rather than 5%), we increase the probability of making a Type II error because we will reject the null less frequently, including when it is false. A Type II error occurs when we fail to reject a false null hypothesis."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM8 - Hypothesis Testing",
        "text": "An analyst gathers the following information about a random sample of salaries:\n\n| Sample size | 64 |\n| Sample mean | $32,000 |\n| Sample standard deviation | $12,000 |\n\nTo test the hypothesis that the mean salary of the underlying population is greater than $11,000, the appropriate test statistic is closest to:",
        "options": [
            "1.8.",
            "14.0.",
            "21.3."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the population variance is not given and so must be assumed to be unknown. Also, the sample size of 64 can be considered large. In general, a sample size of 30 or more usually can be treated as a large sample and a sample size of 29 or less is treated as a small sample. In this case, the test statistic for hypothesis tests concerning a single population mean, μ, is tn – 1 = (X – μ0)/(s/√n), where tn – 1 = t-statistic with n – 1 degrees of freedom (n is the sample size), X = the sample mean, μ0 = the hypothesized value of the population mean, s = the sample standard deviation. Thus, the appropriate test statistic to test if the mean salary is greater than $11,000 is t63 = ($32,000 – $11,000)/($12,000/√64) = $21,000/$1,500 = 14.0."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM9 - Parametric and Non-Parametric Tests of Independence",
        "text": "Which of the following is best referred to as a nonparametric hypothesis test concerning correlation? A test using the:",
        "options": [
            "Pearson correlation coefficient",
            "bivariate correlation coefficient",
            "Spearman rank correlation coefficient"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because when we believe that the population under consideration meaningfully departs from normality, we can use a test based on the Spearman rank correlation coefficient. The Spearman rank correlation coefficient is essentially equivalent to the usual correlation coefficient but is calculated on the ranks of the two variables within their respective samples, and thus it is a nonparametric test."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM9 - Parametric and Non-Parametric Tests of Independence",
        "text": "An analyst tabulates the ranks of four paired observations of random variables X and Y as follows:\n\n| Observation | Rank of X | Rank of Y |\n| :--- | :--- | :--- |\n| 1 | 1 | 2 |\n| 2 | 2 | 3 |\n| 3 | 3 | 4 |\n| 4 | 4 | 1 |\n\nThe Spearman rank correlation coefficient between X and Y is closest to:",
        "options": [
            "–0.2.",
            "0.8.",
            "1.0."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because with n as the sample size, the Spearman rank correlation is given by:\nrs = 1 – (6 Σdi2)/(n(n2 – 1)) = 1 – 6(12)/(4(42 – 1)) = 1 – 6/5 = –1/5 = –0.2, where the sum of squared differences in ranks Σdi2 = (2 – 1)2 + (3 – 2)2 + (4 – 3)2 + (1 – 4)2 = 1 + 1 + 1 + 9 = 12."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM9 - Parametric and Non-Parametric Tests of Independence",
        "text": "An analyst builds a contingency table of stocks with two classifications: market capitalization (small, medium, large) and beta (high, medium, low). To test the relationship between size and beta using a test of independence, the number of degrees of freedom for the chi-square test statistic is:",
        "options": [
            "4",
            "6",
            "9"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because for a contingency table the independence test statistic has (r – 1)(c – 1) degrees of freedom, where r is the number of rows and c is the number of columns. For the contingency table in the stem, there are 3 rows and 3 columns as each classification has 3 groups. Hence, the number of degrees of freedom is equal to (r – 1)(c – 1) = (3 – 1)(3 – 1) = 4."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM9 - Parametric and Non-Parametric Tests of Independence",
        "text": "For a hypothesis test concerning the correlation between two normally distributed variables with sample size n each, the number of degrees of freedom is:\nCorrect answer:",
        "options": [
            "n – 2.",
            "n – 1.",
            "2n – 2."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because if the two variables are normally distributed, we can test to determine whether the null hypothesis (H0: ρ = 0) should be rejected. This test statistic is t-distributed with n – 2 degrees of freedom, where ρ represents the population correlation coefficient."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM9 - Parametric and Non-Parametric Tests of Independence",
        "text": "In a parametric test of the correlation between two variables with a sample size of 51 and sample correlation of 0.6, the t-statistic is closest to:",
        "options": [
            "0.07.",
            "5.25.",
            "6.64."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because for a Parametric Test of a Correlation if the two variables are normally distributed, we can test to determine whether the null hypothesis (H0: p = 0) should be rejected using the sample correlation, r. The formula for the t-test is\nr√(n – 2) / √(1 – r2) = (0.6)√(51 – 2) / √(1 – 0.36) = (0.6)(7)/0.8 = 5.25."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM10 - Simple Linear Regression",
        "text": "Which of the following is an underlying assumption of the simple linear regression model? The regression residuals:",
        "options": [
            "are normally distributed.",
            "have high correlations across observations.",
            "have different variances across observations."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because one of the four key assumptions we need to make to be able to draw valid conclusions from a simple linear regression mode is that regression residuals are normally distributed."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM10 - Simple Linear Regression",
        "text": "An analyst runs a simple linear regression to test whether the variation in the demand for corn explains the variation in the supply of wheat. In this model, the supply of wheat is a(n):",
        "options": [
            "indicator variable.",
            "explained variable.",
            "independent variable."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because variation in the demand for corn is being used to explain the variation in the supply of wheat. Therefore the variation in the supply of wheat is the dependent variable, or explained variable. We refer to the variable whose variation is being explained as the dependent variable, or the explained variable; it is typically denoted by Y."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM10 - Simple Linear Regression",
        "text": "All else being equal, which of the following would most likely lead to a wider prediction interval for the dependent variable when re-estimating a linear regression model? An increase in the:",
        "options": [
            "sample size",
            "level of significance",
            "standard error of the estimate"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the prediction interval is equal to the predicted value of the dependent variable plus/minus the critical t-value times the standard error of the forecast. The better the fit of the regression model, the smaller the standard error of the estimate (se) and, therefore, the smaller standard error of the forecast. When the standard error of the estimate increases, the standard error of the forecast will increase, which will lead to a wider prediction interval if holding other things constant."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM10 - Simple Linear Regression",
        "text": "An analyst performs a simple linear regression of a stock's monthly return on the monthly return of a market index (both in %) and gathers the following information:\n\n| Estimated slope | 1.0 |\n| Estimated intercept | 1.2% |\n| Standard error of the forecast | 1.4% |\n| Critical t-values at a 5% significance level | ±2.032 |\n\nThe 95% prediction interval for the stock's monthly return, given that the forecasted monthly return on the index is 3.5%, is closest to:",
        "options": [
            "0.7% to 6.3%.",
            "1.9% to 7.5%.",
            "3.3% to 6.1%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because a forecasted value of the dependent variable, Yf, is determined using the estimated intercept and slope, as well as the expected or forecasted independent variable, Xf: Yf = b0 + b1Xf, where b0 and b1 are the estimated intercept and slope coefficients, respectively. Hence, Yf = 1.2% + 1.0 × 3.5% = 4.7%.\nNext, the prediction interval is Yf ± tcritical for α/2sf, where sf denotes the standard error of the forecast. Hence, the prediction interval is given by: 4.7% ± 1.4% × 2.032 ≈ (1.9%, 7.5%)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM10 - Simple Linear Regression",
        "text": "In simple linear regression analysis, the total sum of squares best describes:",
        "options": [
            "a scatter plot.",
            "the variation of the dependent variable.",
            "a paired observation between variables."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the variation of Y (the dependent variable) is often referred to as the sum of squares total (SST), or the total sum of squares."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM10 - Simple Linear Regression",
        "text": "The simple linear regression model in which only the independent variable is in logarithmic form is best described as the:",
        "options": [
            "log-lin model.",
            "lin-log model.",
            "log-log model."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the lin-log model is similar to the log-lin model, but only the independent variable is in logarithmic form."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM10 - Simple Linear Regression",
        "text": "The null hypothesis for the F-distributed test statistic in a simple linear regression model tests whether the:",
        "options": [
            "slope is equal to zero.",
            "intercept is equal to zero.",
            "slope is not equal to zero."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because in regression analysis, we can use an F-distributed test statistic to test whether the slopes in a regression are equal to zero, with the slopes designated as bi, against the alternative hypothesis that at least one slope is not equal to zero for simple linear regression, these hypotheses simplify to H0: b1 = 0. Ha: b1 ≠0."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM10 - Simple Linear Regression",
        "text": "Which of the following best describes when a transformation of the data may be needed to enable the use of a simple linear regression model? When the:",
        "options": [
            "dependent variable is non-normally distributed.",
            "pairs of the dependent and independent variables are uncorrelated with one another.",
            "relationship between the independent variable and the dependent variable is non-linear."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because if the relationship between the independent variable and the dependent variable is not linear, we can often transform one or both of these variables to convert this relation to a linear form, which then allows the use of simple linear regression."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM10 - Simple Linear Regression",
        "text": "With respect to simple linear regression, a residual is best described as the difference between the observed value of a dependent variable and:",
        "options": [
            "its mean.",
            "its estimated value using a fitted regression line based on the sample.",
            "its expected value based on the true underlying population relationship."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the residual for the ith observation, ei, is how much the observed value of Yi differs from the estimated [value] using the regression line. Further, the residual refers to the fitted linear relation based on the sample."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM10 - Simple Linear Regression",
        "text": "An analyst estimates the following information from a simple linear regression:\n\n| Sum of squares error | 280 |\n| Sum of squares regression | 25 |\n| Number of paired observations | 30 |\n\nThe standard error of the estimate is closest to:",
        "options": [
            "2.5.",
            "3.2.",
            "10.0."
        ],
        "correctAnswer": 1,
        "explanation": ""
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM10 - Simple Linear Regression",
        "text": "The standard error of the estimate in a simple linear regression is best described as:",
        "options": [
            "a relative measure of fit for the regression.",
            "the percentage of the variation of the dependent variable that is explained by the independent variable.",
            "a measure of the distance between the observed values of the dependent variable and those predicted from the estimated regression."
        ],
        "correctAnswer": 2,
        "explanation": ""
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM11 - Introduction to Big Data Techniques",
        "text": "Which of the following is most likely used to detect sentiment shifts in an analyst's commentary?",
        "options": [
            "Tokenization",
            "Data curation",
            "Natural language processing"
        ],
        "correctAnswer": 2,
        "explanation": ""
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM11 - Introduction to Big Data Techniques",
        "text": "The failure of machine learning models to accurately predict outcomes can be the result of:",
        "options": [
            "overfitting, but not underfitting.",
            "underfitting, but not overfitting.",
            "either overfitting or underfitting."
        ],
        "correctAnswer": 2,
        "explanation": ""
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM11 - Introduction to Big Data Techniques",
        "text": "In its broadest sense, fintech is best described as:",
        "options": [
            "the vast amount of data being generated by the financial services industry.",
            "the execution of investment strategies through computer-generated algorithms.",
            "technological innovation in the design and delivery of financial services and products."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because in its broadest sense, the term 'fintech' generally refers to technology-driven innovation occurring in the financial services industry. For the purposes of this reading, fintech refers to technological innovation in the design and delivery of financial services and products. Note, however, that in common usage, fintech can also refer to companies (often new, startup companies) involved in developing the new technologies and their applications, as well as the business sector that comprises such companies."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM11 - Introduction to Big Data Techniques",
        "text": "With respect to Big Data, which of the following is most likely classified as alternative data?",
        "options": [
            "Email communication data",
            "Corporate regulatory filings",
            "Data from derivative markets"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because Big Data includes data generated from traditional sources—such as stock exchanges, companies, and governments—as well as non-traditional data types, also known as alternative data, arising from the use of electronic device. As the internet and the presence of such networked devices have grown, the use of non-traditional data sources, or alternative data sources—including social media (posts, tweets, and blogs), email and text communications and other electronic information sources—has risen."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Quantitative Methods",
        "lm": "LM11 - Introduction to Big Data Techniques",
        "text": "Which of the following is the most recent advancement in fintech? Applications that can:",
        "options": [
            "process data",
            "automate tasks",
            "make decisions"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because early forms of fintech included data processing and the automation of routine tasks. Fintech has since advanced into decision-making applications based on complex machine-learning logic, where computer programs are able to 'learn' how to complete tasks over time. Thus, advanced forms of fintech include applications that are capable of decision-making."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM1 - Portfolio Risk and Return: Part I",
        "text": "An equally weighted portfolio is composed of two risky assets. If the correlation of asset returns is equal to zero, the portfolio standard deviation is:",
        "options": [
            "equal to zero.",
            "equal to the weighted average of the assets' standard deviations.",
            "less than the weighted average of the assets' standard deviations."
        ],
        "correctAnswer": 2,
        "explanation": ""
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM1 - Portfolio Risk and Return: Part I",
        "text": "When creating a long-only portfolio, which of the following correlation coefficients between assets would be most effective at reducing portfolio risk?",
        "options": [
            "–0.5.",
            "0",
            "0.5."
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM1 - Portfolio Risk and Return: Part I",
        "text": "For a risk-seeking investor, an investment in a risk-free asset generates utility that is:",
        "options": [
            "less than the utility generated for a risk-averse investor.",
            "equal to the utility generated for a risk-averse investor.",
            "greater than the utility generated for a risk-averse investor."
        ],
        "correctAnswer": 1,
        "explanation": ""
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM1 - Portfolio Risk and Return: Part I",
        "text": "The Markowitz efficient frontier is best described as a curve that:",
        "options": [
            "lies above and to the left of the minimum-variance frontier.",
            "connects the minimum-variance portfolios for all possible returns.",
            "contains all portfolios of risky assets that rational, risk-averse investors will choose."
        ],
        "correctAnswer": 2,
        "explanation": ""
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM1 - Portfolio Risk and Return: Part I",
        "text": "Long-term historical data on the risk–return trade-off of securities show that investors are most likely",
        "options": [
            "risk averse.",
            "risk neutral.",
            "risk seeking."
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM1 - Portfolio Risk and Return: Part I",
        "text": "When evaluating the return distribution of an asset class, the probability of extreme returns is best assessed by the distribution's:",
        "options": [
            "kurtosis.",
            "variance.",
            "skewness."
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM1 - Portfolio Risk and Return: Part I",
        "text": "With respect to capital market theory, which of the following statements is most accurate?",
        "options": [
            "The optimal risky portfolio is dependent on the risk-free rate.",
            "The optimal risky portfolio is dependent on the investor's risk profile.",
            "The investor's optimal portfolio must lie on the Markowitz efficient frontier."
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM1 - Portfolio Risk and Return: Part I",
        "text": "Two investors have indifference curves that are tangent to the same capital allocation line (CAL). If Investor 1 is more risk averse than Investor 2, Investor 1's optimal portfolio is:",
        "options": [
            "to the left of Investor 2's optimal portfolio on the CAL.",
            "at the same point on the CAL as Investor 2's optimal portfolio.",
            "to the right of Investor 2's optimal portfolio on the CAL."
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM1 - Portfolio Risk and Return: Part I",
        "text": "As the number of assets in an equally weighted portfolio becomes large, the portfolio's variance of returns most likely approaches:",
        "options": [
            "zero.",
            "the average variance of the individual assets' returns.",
            "the average covariance between the individual assets' returns."
        ],
        "correctAnswer": 2,
        "explanation": ""
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM1 - Portfolio Risk and Return: Part I",
        "text": "The global minimum-variance portfolio is a portfolio that lies:",
        "options": [
            "anywhere along the minimum-variance frontier.",
            "at the left-most point of the minimum-variance frontier.",
            "at the upper right-most point of the minimum-variance frontier."
        ],
        "correctAnswer": 1,
        "explanation": ""
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM1 - Portfolio Risk and Return: Part I",
        "text": "The correlation of returns between two securities with equal standard deviation of returns is 0.75. If the covariance of returns is 5.5%2, the standard deviation of returns for each security is closest to:",
        "options": [
            "2.7%.",
            "3.7%.",
            "7.3%."
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM1 - Portfolio Risk and Return: Part I",
        "text": "A portfolio consisting of two securities has the following characteristics:\n\n| Security | Portfolio Weight | Standard Deviation |\n| :--- | :--- | :--- |\n| 1 | 40% | 15% |\n| 2 | 60% | 18% |\n\nIf the correlation of returns between the two securities is 0.20, the portfolio's standard deviation of returns is closest to:",
        "options": [
            "1.8%.",
            "9.1%.",
            "13.4%."
        ],
        "correctAnswer": 2,
        "explanation": ""
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM1 - Portfolio Risk and Return: Part I",
        "text": "A risk-neutral investor most likely seeks to maximize:",
        "options": [
            "both risk and return.",
            "return irrespective of risk.",
            "return for a given level of risk."
        ],
        "correctAnswer": 1,
        "explanation": ""
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM1 - Portfolio Risk and Return: Part I",
        "text": "Two assets have the following characteristics:\n\n| Variance of returns for Asset 1 | 0.05 |\n| Variance of returns for Asset 2 | 0.06 |\n| Correlation of returns between Asset 1 and Asset 2 | 0.75 |\n\nThe variance of returns for an equally weighted portfolio of the two assets is closest to:",
        "options": [
            "0.038.",
            "0.048.",
            ""
        ],
        "correctAnswer": 1,
        "explanation": "Incorrect because it is the weighted average of the asset variances: (0.5)(0.05) + (0.5)(0.06) = 0.025 + 0.03 = 0.055. However, a weighted average calculation is only appropriate for the portfolio standard deviation (not variance) when the correlation among assets is 1."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "An analyst gathers the following information:\n\n| | Standard Deviation of Returns | Beta |\n| :--- | :--- | :--- |\n| Asset | 70% | 1.8 |\n| Market portfolio | 35% | 1.0 |\n\nThe covariance between the returns of the asset and the market is closest to:",
        "options": [
            "0.22.",
            "0.40.",
            "0.90."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because, given the beta of an asset (βi), the covariance between the asset returns (Ri) and the market portfolio returns (Rm) is given by: Cov(Ri,Rm) = βi × σm2 = 1.8 × 0.352 = 0.22."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "The capital market line most likely consists of portfolios that:",
        "options": [
            "are fully diversified.",
            "have zero systematic risk.",
            "have nonsystematic risk equal to beta."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the capital market line (CML) does not apply to all securities or assets but only to portfolios on the efficient frontier. The efficient frontier gives optimal combinations of expected return and total risk. Total risk and systematic risk are equal only for efficient portfolios because those portfolios have no diversifiable risk remaining. Thus, the CML holds only for well-diversified portfolios."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "An investor gathers the following information about a security and the market:\n\n| Security's beta | 0.35 |\n| Standard deviation of the security's returns | 12% |\n| Standard deviation of market returns | 18% |\n\nThe correlation between the security's returns and the market's returns is closest to:",
        "options": [
            "0.2.",
            "0.5.",
            "0.8."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because βi = ρi,m × σi/σm, where ρi,m denotes the correlation between the asset returns and the market returns, and σi and σm denote the standard deviation of the asset returns and the market returns, respectively. Thus, correlation ρi,m = βi × σm/σi = 0.35 × 0.18/0.12 = 0.525 ≈ 0.5."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "An investor gathers the following information about a portfolio and the market:\n\n| | Return | Standard Deviation of Returns | Beta |\n| :--- | :--- | :--- | :--- |\n| Portfolio | 11% | 4% | 1.2 |\n| Market | 10% | 3% | 1.0 |\n\nIf the risk-free rate is 3%, Jensen's alpha for the portfolio is:",
        "options": [
            "–4.0%.",
            "–0.4%.",
            "0.4%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Jensen's alpha is calculated as:\nαp = Rp – [Rf + βp (Rm – Rf)]\nαp = 11% – [3% + 1.2 × (10% – 3%)]\nαp = 11% – 11.4% = –0.4%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "An analyst estimates the standard deviation of returns for the market portfolio to be 15% and the standard deviation of returns for a stock to be 25%. If the correlation of returns between the stock and the market portfolio is 0.6, the stock has:",
        "options": [
            "less systematic risk than the market portfolio.",
            "the same systematic risk as the market portfolio.",
            "more systematic risk than the market portfolio."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the amount of systematic risk for a company is measured by the stock's beta. β = ρi,m × σi / σm = 0.60 × 0.25 / 0.15 = 0.15 / 0.15 = 1. Since the company's beta equals the market portfolio's beta (the market portfolio's beta with itself equals 1), the company has the same level of systematic risk as the market portfolio."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "The intercept on the y-axis of the security characteristic line is:",
        "options": [
            "beta.",
            "Jensen's alpha.",
            "the risk-free rate of return."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the SCL is a plot of the excess return of the security on the excess return of the market. Jensen's alpha is the intercept and the beta is the slope."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "An analyst gathers the following information:\n\n| Risk-free rate | 4% |\n| Expected return on a security | 7% |\n| Expected return on the market | 14% |\n\nAccording to the CAPM, the security's beta is closest to:",
        "options": [
            "0.21.",
            "0.30.",
            "0.50."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because, according to the CAPM, the expected return [E(Ri)] for an asset is given by: E(Ri) = Rf + βi[E(Rm) – Rf].\nThe beta [βi] is then calculated using: βi = [E(Ri) – Rf]/[E(Rm) – Rf] = [7% – 4%]/[14% – 4%] = 0.30."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "A security with a beta of 1.5 has an expected return of 11% according to the CAPM. If the risk-free rate is 2%, the market risk premium is closest to:",
        "options": [
            "4.0%.",
            "6.0%.",
            "7.3%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because, according to the CAPM, the expected return of a security is E(Ri) = Rf + βi[E(Rm) – Rf], such that [E(Rm) – Rf ]= [E(Ri) – Rf]/βi = (0.11 – 0.02)/1.5 = 0.06 = 6%. The market risk premium is E(Rm) – Rf = 6%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "An analyst gathers the following information:\n\n| Risk-free rate | 2% |\n| Expected return of the market portfolio | 10% |\n| Standard deviation of the market portfolio | 20% |\n| Standard deviation of the security | 35% |\n| Correlation between the security and the market | 0.8 |\n\nAccording to the CAPM, the expected return of the security is closest to:",
        "options": [
            "5.7%.",
            "13.2%.",
            "16.0%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the expected return of the security can be calculated using the CAPM equation: E(Ri) = Rf + β[E(Rm) – Rf]. The beta of the security can be calculated using the equation β = (ρi,m × σi)/σm. Therefore, β = (0.8 × 35%)/20% = 1.4. Beta is the product of the asset's correlation with the market with a ratio of standard deviations of return (i.e., the ratio of the asset's standard deviation to the market's). Therefore, using the CAPM equation: E(Ri) = 2% + 1.4 × (10% – 2%) = 13.2%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "The correlation between the risk-free asset and the optimal risky portfolio is expected to be:",
        "options": [
            "negative.",
            "zero.",
            "positive."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because a combination of the risk-free asset and a risky asset can result in a better risk–return trade-off than an investment in only one type of asset because the risk-free asset has zero correlation with the risky asset. The optimal risky portfolio is a risky asset, and thus has zero correlation with the risk-free asset."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "Which of the following performance measures is equal to the slope of the capital allocation line?",
        "options": [
            "M2",
            "Sharpe ratio",
            "Treynor ratio"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the Sharpe ratio, also called the reward-to-variability ratio, is simply the slope of the capital allocation line."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "An analyst gathers the following information about a portfolio and the market:\n\n| Portfolio's Sharpe ratio | 0.8 |\n| Volatility of portfolio returns | 19% |\n| Volatility of market returns | 10% |\n| Correlation between portfolio returns and market returns | 0.7 |\n\nThe portfolio's Treynor ratio is closest to:",
        "options": [
            "0.060.",
            "0.114.",
            "0.413."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because\nTR = (Rp – Rf)/βp = [(Rp – Rf)/σp] × (σp/βp) = SR × (σp/βp) = 0.8 × (0.19/1.33) = 0.114,\nwhere\nσm = standard deviation of market returns = 0.10 (given);\nσp = standard deviation of portfolio returns = 0.19 (given);\nρp,m = correlation between market and portfolio = 0.7 (given);\nβp = portfolio beta = ρp,m(σp/σm) = 0.7 × (0.19/0.1) = 1.33 (per βi = ρi,m(σi/σm));\nRp = portfolio's return;\nRf = risk-free rate of interest;\nTR = Treynor ratio;\nSR = Sharpe ratio, where SR = (Rp – Rf)/σp."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "Which of the following lines is plotted on a graph with the excess return of a security on the y-axis and the excess return of the market on the x-axis?",
        "options": [
            "Capital market line",
            "Security market line",
            "Security characteristic line"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because similar to the SML (security market line), we can draw a security characteristic line (SCL) for a security. The SCL is a plot of the excess return of the security on the excess return of the market. The security characteristic line can also be estimated by regressing the excess security return, Ri – Rf, on the excess market return, Rm – Rf."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "An analyst gathers the following information about the security market line (SML) and a stock:\n\n| Intercept of the SML | 2% |\n| Slope of the SML | 5% |\n| Stock's beta | 1.3 |\n\nAccording to capital market theory, if the analyst believes the stock will have a return of 7%, the stock is:",
        "options": [
            "undervalued.",
            "properly valued.",
            "overvalued."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the security market line (SML) is a graphical representation of the capital asset pricing model with beta, reflecting systematic risk, on the x-axis and expected return on the y-axis. Using the same concept as the capital market line, the SML intersects the y-axis at the risk-free rate of return, and the slope of this line is the market risk premium, Rm – Rf . Potential investors can plot a security's expected return and beta against the SML and use this relationship to decide whether the security is overvalued or undervalued in the market. All securities that reflect the consensus market view are points directly on the SML (i.e., properly valued). If a point representing the estimated return of an asset is above the SML, the asset has a low level of risk relative to the amount of expected return and would be a good choice for investment. In contrast, if the point representing a particular asset is below the SML, the stock is considered overvalued. The asset will be on the SML if the forecasted return equals the expected return of 0.02 + 1.3 × 0.05 = 0.085 = 8.5%. Since the analyst forecasts the return of the asset to be 7%, which is lower than the expected return according to the CAPM, the security plots below the SML and should be considered overvalued."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "The security market line applies:",
        "options": [
            "to all securities.",
            "only to efficient securities.",
            "only to securities that have idiosyncratic risk."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the security market line applies to any security, efficient or not. The security market line (SML) is a graphical representation of the capital asset pricing model with beta, reflecting systematic risk, on the x-axis and expected return on the y-axis."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "The market has a return of 8% and a standard deviation of returns of 12%. The risk-free rate is 2%. If a portfolio has a Sharpe ratio of 0.8, the portfolio's M2 alpha is closest to:",
        "options": [
            "3.6%.",
            "5.6%.",
            "11.6%."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because M2 provides a measure of portfolio return that is adjusted for the total risk of the portfolio and is computed as M2 = [E(Rp) – Rf](σm/σp) + Rf = SR × σm + Rf , where SR = Sharpe ratio, σm = market standard deviation of returns, and Rf = risk-free rate. Thus, M2 = 0.8 × 0.12 + 0.02 = 0.116. The difference between the risk-adjusted performance of the portfolio and the performance of the market is frequently referred to as M2 alpha. Thus, M2 alpha = 0.116 – 0.08 = 0.036 = 3.6%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "Which of the following measures is most appropriate to evaluate the performance of a portfolio that is not fully diversified?",
        "options": [
            "Sharpe ratio",
            "Treynor ratio",
            "Jensen's alpha"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because total risk is relevant for an investor when he or she holds a portfolio that is not fully diversified, which is not a desirable portfolio. In such cases, the Sharpe ratio and M2 are appropriate performance measures. The Sharpe ratio uses total risk as a measure of risk."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "Which of the following measures uses only systematic risk to evaluate portfolio performance?",
        "options": [
            "M2",
            "Sharpe ratio",
            "Jensen's alpha"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because Jensen's alpha is based on systematic risk. The difference between the actual portfolio return and the calculated risk-adjusted return is a measure of the portfolio's performance relative to the market portfolio and is called Jensen's alpha."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "An analyst gathers the following information about a portfolio and the market:\n\n| Portfolio return | 7.0% |\n| Market return | 5.0% |\n| Risk-free return | 1.0% |\n| Portfolio beta | 1.2 |\n\nJensen's alpha for the portfolio is:",
        "options": [
            "0.0%.",
            "1.2%.>",
            "2.2%."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because Jensen's alpha is defined as the portfolio return less (the risk-free rate plus the portfolio beta times (the market return minus the risk-free rate)). Therefore, Jensen's alpha = Rp – [Rf + βp(Rm – Rf)] = 7% – (1% + 1.2 × (5% – 1%)) = 7.0% – 5.8% = 1.2%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "If all investors have homogeneous expectations, the total risk and expected return of portfolios consisting of the risk-free asset and the optimal risky portfolio are plotted on the:",
        "options": [
            "capital market line.",
            "security market line.",
            "security characteristic line."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the risk-free asset could be combined with a risky portfolio to create a capital allocation line (CAL). A specific CAL that uses the market portfolio as the optimal risky portfolio is known as the capital market line. When assuming homogeneous expectations, only one optimal portfolio exists. The capital market line is shown in Exhibit 3, where the standard deviation (σp), or total risk, is on the x-axis and expected portfolio return, E(Rp), is on the y-axis."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "An investor who can lend and borrow at the risk-free rate builds a portfolio using the risk-free asset and the market portfolio. The risk-free rate is 3% and the expected market return is 15%. If the expected portfolio return is 18%, the investor's portfolio is:",
        "options": [
            "a lending portfolio.",
            "a leveraged portfolio.",
            "the optimal risky portfolio."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because a leveraged portfolio is a portfolio that has a negative investment in the risk-free asset.\nA portfolio's expected return, E(Rp), is calculated as: E(Rp) = w1Rf + (1 – w1)E(Rm), where w1 is the proportion invested in the risk-free asset, returning Rf, and E(Rm) is the expected return on the market portfolio.\nThus, 0.18 = w1 × 0.03 + (1 – w1) × 0.15\n0.18 – 0.15 = w1 × (0.03 – 0.15)\n0.03 = w1 × (–0.12)\nw1 = 0.03/(–0.12)\nw1 = –0.25\nA negative proportion invested in the risk-free rate implies a leveraged portfolio."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "An analyst gathers the following information about three securities:\n\n| | Total Variance of Returns | Nonsystematic Variance of Returns |\n| :--- | :--- | :--- |\n| Security 1 | 0.20 | 0.05 |\n| Security 2 | 0.30 | 0.25 |\n| Security 3 | 0.35 | 0.22 |\n\nAccording to capital market theory, which security has the highest expected return?",
        "options": [
            "Security 1",
            "Security 2",
            "Security 3"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because according to the capital market theory investors should not be compensated for taking on nonsystematic risk. In contrast, investors must be compensated for accepting systematic risk because that risk cannot be diversified away. In summary, systematic or non-diversifiable risk is priced and investors are compensated for holding assets or portfolios based only on that investment's systematic risk. Also, Total variance = Systematic variance + Nonsystematic variance. Thus,\nSecurity 1 has systematic variance = 0.20 – 0.05 = 0.15;\nSecurity 2 has systematic variance = 0.30 – 0.25 = 0.05;\nSecurity 3 has systematic variance = 0.35 – 0.22 = 0.13.\nSince only systematic variance (risk) is compensated with a higher expected return, Security 1 has the highest expected return."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "The risk–return trade-off of a portfolio of only risky assets most likely improves when a risk-free asset is added to the portfolio because:",
        "options": [
            "the risk-free asset is uncorrelated with the other assets in the portfolio.",
            "the lower return on the risk-free asset provides a diversification effect.",
            "the correlations among the risky assets decrease, providing a diversification effect."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because an investor's portfolio improves if a risk-free asset is added to the mix. In other words, a combination of the risk-free asset and a risky asset can result in a better risk–return trade-off than an investment in only one type of asset because the risk-free asset has zero correlation with the risky asset."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "An analyst gathers the following information about an asset and the market:\n\n| Risk-free rate | 1% |\n| Market risk premium | 5% |\n| Asset's expected return | 5% |\n\nBased on the CAPM, the asset's beta is closest to:",
        "options": [
            "0.80.",
            "1.00.",
            "1.25."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the expected return of an asset is E(Ri) = Rf + βi[E(Rm) – Rf], where Ri, Rm, and Rf denote the return on the asset, the market, and the risk-free asset, respectively, βi is the asset's beta, and [E(Rm) – Rf ] is the market risk premium. Thus, βi = [E(Ri) – Rf] / [E(Rm) – Rf] = [5% – 1%] / 5% = 4%/5% = 0.8."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "The slope of the security market line is most likely the:",
        "options": [
            "security's beta.",
            "market risk premium.",
            "market risk premium divided by the market standard deviation."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the security market line (SML) is a graphical representation of the capital asset pricing model with beta, reflecting systematic risk, on the x-axis and expected return on the y-axis. The slope of this line is the market risk premium, Rm – Rf."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "The market model is most likely used to estimate:",
        "options": [
            "market returns.",
            "risk-free returns.",
            "abnormal returns."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the market model is normally used for estimating beta risk and computing abnormal returns. These parameter estimates are then used to predict company-specific returns that a security may earn in a future period."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "Unsystematic risk is best described as:",
        "options": [
            "total risk.",
            "diversifiable risk.",
            "the variability in all risky assets caused by macroeconomic variables."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because unsystematic (nonsystematic) risk can be diversified away."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "An analyst estimates the market model for an asset and obtains the following parameters:\n\n| Intercept (α) | 1% |\n| Slope coefficient (β) | 0.5 |\n\nIf the market's expected return is 2%, the asset's expected return is:",
        "options": [
            "1.0%.",
            "1.5%.",
            "2.0%."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the expected return of an asset according to the market model is calculated as: E(Ri) = α + β × E(Rm), where E(Rm) denotes the expected market return; 1% + 0.5 × 2% = 2%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "With respect to multi-factor return-generating models, a company's earnings are best classified as a:",
        "options": [
            "statistical factor.",
            "fundamental factor.",
            "macroeconomic factor."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because a multi-factor model allows more than one variable to be considered in estimating returns and can be built using different kinds of factors, such as macroeconomic, fundamental, and statistical factors. Fundamental factor models analyze and use relationships between security returns and the company's underlying fundamentals, such as, for example, earnings."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM2 - Portfolio Risk and Return: Part II",
        "text": "The market portfolio's level of systematic risk is most likely:",
        "options": [
            "less than its level of nonsystematic risk.",
            "equal to its level of nonsystematic risk.",
            "greater than its level of nonsystematic risk."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because systematic or non-diversifiable risk is priced and investors are compensated for holding assets or portfolios based only on that investment's systematic risk. Investors do not receive any return for accepting nonsystematic or diversifiable risk. Also, investors are capable of avoiding nonsystematic risk through diversification by forming a portfolio of assets that are not highly correlated with one another. Thus, for a market portfolio, there is only systematic risk because nonsystematic risk is diversified away."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM3 - Portfolio Management: An Overview",
        "text": "In an equally weighted portfolio, the diversification ratio is best described as a measure of the:",
        "options": [
            "relative level of risk between any two individual assets.",
            "amount of risk an asset contributes to the portfolio's risk.",
            "risk reduction benefit of investing in the portfolio versus a security from the portfolio."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the level of risk reduction from the portfolio approach to investing, relative to the risk of investing in a single security, can be measured by the diversification ratio. A simple measure of the value of diversification is calculated as the ratio of the standard deviation of the equally weighted portfolio to the standard deviation of the randomly selected security. This ratio may be referred to as the diversification ratio. The diversification ratio of the portfolio's standard deviation to the individual asset's standard deviation measures the risk reduction benefits of a simple portfolio construction method, equal weighting."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM3 - Portfolio Management: An Overview",
        "text": "Which of the following is most likely part of the feedback step in the portfolio management process?",
        "options": [
            "Portfolio construction",
            "Performance measurement",
            "Developing the investment policy statement"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because performance measurement, along with portfolio monitoring and rebalancing, is part of the feedback step."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM3 - Portfolio Management: An Overview",
        "text": "The diversification ratio of a portfolio is best described as the ratio of the:",
        "options": [
            "standard deviation of the equally weighted portfolio's returns to the average standard deviation of the individual securities' returns.",
            "standard deviation of the market-capitalization-weighted portfolio's returns to the standard deviation of the equally weighted portfolio's returns.",
            "average standard deviation of the individual securities' returns to the standard deviation of the market-capitalization-weighted portfolio's returns."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because a simple measure of the value of diversification is calculated as the ratio of the standard deviation of the equally weighted portfolio to the standard deviation of the randomly selected security. This ratio may be referred to as the diversification ratio. In the example of the 5-stock portfolio given, the equally weighted portfolio's standard deviation is approximately 71 percent of the average standard deviation of the 5 stocks (24.9%); i.e., the denominator is the average standard deviation of all individual securities in the portfolio and the numerator is the standard deviation of the equally weighted portfolio."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM3 - Portfolio Management: An Overview",
        "text": "The portfolio approach to investing most likely:",
        "options": [
            "prevents portfolio losses during market downturns.",
            "reduces the systematic risk of individual assets in a portfolio.",
            "helps avoid disastrous investment outcomes during normal market conditions."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because portfolio diversification helps investors avoid disastrous investment outcomes. A main tenet of the portfolio approach to investing is diversification. A disastrous outcome can result from 'putting all your eggs into one basket' or investing everything into one stock whose value could then go to zero. A diversified portfolio holding many securities is likely to avoid this outcome. Although diversification may not prevent losses during market downturns, it does help avoid disastrous investment outcomes during normal market conditions."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM3 - Portfolio Management: An Overview",
        "text": "Which of the following statements about pension plans is most accurate?",
        "options": [
            "Defined benefit plans typically have a low risk tolerance.",
            "Defined contribution plans typically have a low risk tolerance.",
            "The sponsor of a defined benefit plan specifies the obligation owed to participants."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because defined benefit pension plans (DB plans) are company-sponsored plans that offer employees a predefined benefit on retirement. The future benefit is defined because the DB plan requires the plan sponsor to specify the obligation stated in terms of the retirement income benefits owed to participants."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM3 - Portfolio Management: An Overview",
        "text": "Open-end mutual funds typically:",
        "options": [
            "are priced intraday.",
            "have a fixed number of shares outstanding.",
            "have a larger required minimum investment than ETFs."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the minimum required investment in ETFs is usually smaller than that of mutual funds."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM3 - Portfolio Management: An Overview",
        "text": "Robo-advisers most likely:\n\nA. face high barriers to entry.\nB. cater to the demand from investors with lower levels of investable assets.\nC. prefer actively managed funds to index funds when constructing client portfolios.",
        "options": [
            "face high barriers to entry.",
            "cater to the demand from investors with lower levels of investable assets.",
            "prefer actively managed funds to index funds when constructing client portfolios."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because rapid growth in robo-advisory assets is based on several industry trends including growing demand from 'mass affluent' and younger investors. Traditional investment advice has often underserved younger and 'mass affluent' investors with lower relative levels of investable assets."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM3 - Portfolio Management: An Overview",
        "text": "In regard to the asset allocation process, a top-down analysis most likely begins with an examination of:",
        "options": [
            "macroeconomic growth.",
            "a company's board of directors.",
            "the expected growth of a company's competitors."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because a top-down analysis begins with consideration of macroeconomic conditions. Based on the current and forecasted economic environment, analysts evaluate markets and industries with the purpose of investing in those that are expected to perform well. Finally, specific companies within these industries are considered for investment."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM3 - Portfolio Management: An Overview",
        "text": "Which of the following best describes a characteristic of defined contribution pension plans?",
        "options": [
            "The employee accepts the investment and inflation risk.",
            "The employer is responsible for adequately funding the plan.",
            "Defined contribution plans typically have a higher cost to the company than defined benefit plans."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the key to a defined contribution (DC) plan is that the employee accepts the investment and inflation risk and is responsible for ensuring that there are enough assets in the plan to meet their needs upon retirement."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM3 - Portfolio Management: An Overview",
        "text": "Which of the following statements about different types of investors is most accurate?",
        "options": [
            "For banks, the liquidity of their investments is a paramount concern.",
            "For endowments, investment horizons are short due to their short-term spending needs.",
            "For insurance companies, the risk tolerance of their general and surplus accounts is typically the same."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because liquidity is a paramount concern for banks that stand ready to meet depositor requests for withdrawals."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM3 - Portfolio Management: An Overview",
        "text": "Relative to passive market-cap-weighted strategies, smart beta strategies typically have:",
        "options": [
            "lower management fees and higher portfolio turnover.",
            "higher management fees and lower portfolio turnover.",
            "higher management fees and higher portfolio turnover."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because typically, smart beta strategies feature somewhat higher management fees and higher portfolio turnover relative to passive market-cap weighted strategies."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM3 - Portfolio Management: An Overview",
        "text": "Exchange-traded funds (ETFs):",
        "options": [
            "are priced once a trading day.",
            "usually pay out dividends to shareholders.",
            "are generally structured as closed-end funds."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because dividends on ETFs are paid out to the shareholders whereas mutual funds usually reinvest the dividends."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM3 - Portfolio Management: An Overview",
        "text": "Sovereign wealth funds are best described as investment funds:",
        "options": [
            "owned by governments.",
            "traded as closed-end country funds.",
            "restricted from investing in foreign securities."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because sovereign wealth funds (SWFs) are government-owned investment funds."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM3 - Portfolio Management: An Overview",
        "text": "Which of the following funds is most likely to trade at a price furthest from its net asset value?",
        "options": [
            "Exchange-traded fund",
            "Open-end mutual fund",
            "Closed-end mutual fund"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because in a closed-end mutual fund the number of outstanding shares does not change. One consequence of this fixed share base is that, unlike open-end funds in which new shares are created and sold at the current net asset value per share, closed-end funds can sell for a premium or discount to net asset value depending on the demand for the shares."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "Which of the following sections of an investment policy statement (IPS) most likely explains how and when the IPS should be reviewed?",
        "options": [
            "Procedures",
            "Investment Guidelines",
            "Statement of Duties and Responsibilities"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the IPS should be reviewed on a regular basis to ensure that it remains consistent with the client's circumstances and requirements. The IPS should also be reviewed if the manager becomes aware of a material change in the client's circumstances, or on the initiative of the client when his or her objectives, time horizon, or liquidity needs change. The major components of an IPS include the following section: Procedures. This section explains the steps to take to keep the IPS current and the procedures to follow to respond to various contingencies."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "Which of the following is most likely a legal and regulatory constraint in an investment policy statement?",
        "options": [
            "A pension fund's decision to limit investments in real estate",
            "A taxable investor's requirement to avoid investments in securities generating interest income",
            "A public company director's restriction on trading the company's stock shortly before the publication of financial results"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because when an individual has access to material nonpublic information about a particular security, this situation may also form a [legal and regulatory] constraint. For example, the directors of a public company may need to refrain from trading the company's stock at certain points of the year before financial results are published. The IPS should note this constraint so that the portfolio manager does not inadvertently trade the stock on the client's behalf."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "Which of the following sections of an investment policy statement most likely provides guidance on obtaining feedback on investment results?",
        "options": [
            "Investment Guidelines",
            "Evaluation and Review",
            "Statement of Duties and Responsibilities"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the Evaluation and Review section provides guidance on obtaining feedback on investment results."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "With respect to an investment policy statement, which of the following is most closely linked to the client's distinctive needs?",
        "options": [
            "The evaluation and review section",
            "The objectives and constraints sections",
            "The statement of duties and responsibilities"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the sections that are most closely linked to the client's distinctive needs, and probably the most important from a planning perspective, are those dealing with investment objectives and constraints. An IPS [investment policy statement] focusing on these two elements has been called an IPS in an 'objectives and constraints' format."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "Which of the following most likely affects a client's ability to take risk? The client's:",
        "options": [
            "utility function",
            "degree of risk aversion",
            "level of wealth relative to liabilities"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the ability to bear risk is measured mainly in terms of objective factors, such as time horizon, expected income, and the level of wealth relative to liabilities."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "The risk–return profile of a portfolio's strategic asset allocation is most likely determined by the expected returns and risks of the individual asset classes and the:",
        "options": [
            "correlations between those asset classes.",
            "use of security selection for each of those asset classes.",
            "allowable deviation of portfolio weights from policy weights for those asset classes."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the risk–return profile of the strategic asset allocation depends on the expected returns and risks of the individual asset classes, as well as the correlation between those asset classes."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "When defining asset classes for a strategic asset allocation, which of the following pairwise correlations between asset class returns is most preferable?",
        "options": [
            "0",
            "0.5",
            "1"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because when defining asset classes, a number of criteria apply. Intuitively, an asset class should contain relatively homogeneous assets while providing diversification relative to other asset classes. In statistical terms, risk and return expectations should be similar and paired correlations of assets should be relatively high within an asset class but should be lower versus assets in other asset classes. A between asset class correlation of zero would indicate better defined asset classes than higher correlations."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "Which of the following sections of an investment policy statement for a pension plan most likely specifies the discretion that portfolio managers have with respect to executing the investment strategy?",
        "options": [
            "Procedures",
            "Investment Constraints",
            "Statement of Duties and Responsibilities"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the Statement of Duties and Responsibilities section details the duties and responsibilities of the client, the custodian of the client's assets, and the investment managers. In the case of an institution, such as a pension plan or university endowment, the IPS may set out the governance arrangements that apply to the investment funds. For example, this information could cover the investment committee's approach to appointing and reviewing investment managers for the portfolio, and the discretion that those managers have."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "Information regarding the permissible use of derivatives in a portfolio is most likely found in which of the following sections of an investment policy statement?",
        "options": [
            "Procedures",
            "Investment Guidelines",
            "Statement of Duties and Responsibilities"
        ],
        "correctAnswer": 1,
        "explanation": ""
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "A client's time horizon is most appropriately used by an investment adviser to determine the client's:",
        "options": [
            "risk attitude.",
            "ability to take risk.",
            "willingness to take risk."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the ability to bear risk is measured mainly in terms of objective factors, such as time horizon, expected income, and the level of wealth relative to liabilities."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "Which of the following is most accurate regarding an investment policy statement (IPS)?",
        "options": [
            "Policies on sustainable investing require a separate IPS.",
            "Investment constraints can be determined by the client or by the law.",
            "Clients can specify different spending goals, but each goal must have the same risk tolerance and return objective."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the constraints may be internal (i.e., set by the client), or external (i.e., set by law or regulation)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "When defining asset classes, the paired correlations of assets within an asset class should be:",
        "options": [
            "negative.",
            "zero.",
            "positive."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because when defining asset classes an asset class should contain relatively homogeneous assets and paired correlations of assets should be relatively high within an asset class."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "Which of the following statements about asset allocation is most accurate?",
        "options": [
            "Investors should diversify their wealth between asset classes in order to eliminate systematic risk.",
            "Investors with a below-average risk tolerance should have an above-average weight in alternative investments.",
            "Adding asset classes with a low correlation to existing asset classes improves an investor's risk–return trade-off."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because in general, adding assets classes with low correlation improves the risk–return trade-off (more return for similar risk)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "An adviser gathers the following information about a client's retirement income needs:\n• The current balance of the client's retirement fund is $150,000.\n• The client plans to retire in 15 years' time.\n• $500,000 in today's money is needed to fund retirement.\n• No further retirement fund contributions will be made.\nInflation is expected to average 2% per year over the next 15 years. Based only on the above information and ignoring taxes, the minimum annual rate of return required to meet the client's retirement income objective is closest to:",
        "options": [
            "6.2%.",
            "8.4%.",
            "10.5%."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because, at 2% annual inflation, $500,000 in today's money equates to $500,00(1.02)15 = $672,934 in 15 years' time. Since no further contributions to the retirement fund will be made, the current savings of $150,000 must grow to at least $672,934 in 15 years' time to meet the individual's retirement income objective. Hence, the minimum required rate of return, r, satisfies $150,000(1 + r)15 = $672,934, giving r = [$672,934/$150,000]1/15 – 1 = 0.105 = 10.5%.\nCalculator solution: (1) N = 15; I/Y = 2%; PV = –500,000; compute FV = 672,934. (2) N = 15; PV = –150,000; FV = 672,934; compute I/Y = 10.5%.\nAlternatively, a candidate could compute the nominal required rate of return via $150,000(1 + r)15 = $500,000, giving r = [$500,000/$150,000]1/15 – 1 = 0.084 = 8.4%, and then adjust for inflation as follows: (1 + 0.084) × (1 + 0.02) – 1 = 0.105 = 10.5%. If a candidate adjusted for inflation by adding the expected inflation rate, they would also arrive at (approximately) the correct answer; 8.4% + 2.0% = 10.4%."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "An investor has a 15-year time horizon but needs to withdraw funds from her portfolio in one year's time to pay for tuition fees. Which of the following investments is most suitable to cover the investor's liquidity requirement due to the tuition fees?",
        "options": [
            "Commercial paper",
            "Private equity securities",
            "Large-capitalization stocks"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because, although the investor has a time horizon of 15 years, she has liquidity needs in one year. When the client does have such a requirement, the manager should allocate part of the portfolio to cover the liability. This part of the portfolio will be invested in assets that are liquid—that is, easily converted to cash—and low risk at the point in time the liquidity need is actually present (e.g., a bond maturing at the time when private education expenses will be incurred), so that their value is known with reasonable certainty. Commercial paper is a short-term, negotiable, unsecured promissory note that represents a debt obligation of the issuer. Thus, commercial paper being a short-term investment, it is more suitable compared to private equity and large-capitalization stocks to be included in the portion of the investor's portfolio that has the short-term liquidity need."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "Which of the following characteristics is most likely used to determine an investor's ability to take risk? The investor's:",
        "options": [
            "risk attitude.",
            "self-confidence.",
            "years until retirement."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the ability to bear risk is measured mainly in terms of objective factors, such as time horizon. For example, an investor with a 20-year time horizon can be considered to have a greater ability to bear risk, other things being equal, than an investor with a 2-year horizon."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "With regard to an investment policy statement, which of the following statements about return objectives is most accurate?",
        "options": [
            "A return objective cannot be a required rate of return.",
            "Return objectives must be set independent of risk objectives.",
            "When setting a relative return objective, a good benchmark should be investable."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because a benchmark is used as a relative return objective and a good benchmark should be investable."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "Which of the following actions best describes tactical asset allocation?",
        "options": [
            "Providing exposure to different asset classes to meet long-term objectives",
            "Underweighting an asset class relative to the policy weight for that asset class",
            "Overweighting specific securities with higher expected returns than the benchmark"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because tactical asset allocation is the decision to deliberately deviate from the policy exposure to systematic risk factors (i.e., the policy weights of asset classes) with the intent to add value based on forecasts of the near-term returns of those asset classes. Investing less in one asset class, for example, compared to the policy weight for that asset class is, therefore, a tactical asset allocation decision."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "With respect to portfolio construction, the decision to deliberately deviate from the policy exposures to systematic risk factors with the intent to add value based on forecasts of near-term returns of asset classes best describes:",
        "options": [
            "risk budgeting.",
            "security selection.",
            "tactical asset allocation."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because tactical asset allocation is the decision to deliberately deviate from the policy exposures to systematic risk factors (i.e., the policy weights of asset classes) with the intent to add value based on forecasts of the near-term returns of those asset classes."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "A change in an investor's risk aversion most likely results in a change in the investor's:",
        "options": [
            "efficient frontier only.",
            "indifference curves only.",
            "efficient frontier and indifference curves."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because both the efficient frontier and a range of indifference curves can be plotted in the risk–return space. The point where the efficient frontier intersects with the indifference curve with the highest utility attainable (i.e., the point of tangency) represents the optimal asset allocation for the client/investor. Should investment objectives or constraints change, the indifference curves will change their shape and location. This change will move the point of tangency, and hence change the asset allocation. An investor's level of risk aversion determines the slope of the indifference curves. The most risk-averse investor has an indifference curve with the greatest slope. The least risk-averse investor has an indifference curve with the least slope."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "If the weights of the asset classes in a portfolio deviate from the policy weights over time due to changes in market value, this is best described as:",
        "options": [
            "drift.",
            "value at risk.",
            "tracking error."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because as the portfolio is constructed and its value changes with the return of the asset classes and securities in which it is invested, the weights of the asset classes will gradually deviate from the policy weights in the strategic asset allocation. This process is referred to as drift."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "An IPS most likely specifies:",
        "options": [
            "only the tactical asset allocation target.",
            "only the strategic asset allocation target.",
            "both the tactical and the strategic asset allocation targets."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because once the IPS has been compiled, the investment manager can construct a suitable portfolio. Strategic asset allocation is a traditional focus of the first steps in portfolio construction. The strategic asset allocation (SAA) is the set of exposures to IPS-permissible asset classes that is expected to achieve the client's long-term objectives given the client's investment constraints. Said differently, the investment policy statement (IPS) permits investments in targeted proportions of the portfolio in various asset classes (set of exposures to IPS-permissible asset classes). Investment in these asset classes in the set proportions are expected to achieve the long-term risk and return objectives of the portfolio."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "A portfolio manager's decision to temporarily invest more in equities than the policy weights prescribe is best described as:",
        "options": [
            "security selection.",
            "tactical asset allocation.",
            "strategic asset allocation."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because tactical asset allocation is the decision to deliberately deviate from the policy exposures to systematic risk factors (i.e., the policy weights of asset classes) with the intent to add value based on forecasts of the near-term returns of those asset classes. For instance, an investor may decide to temporarily invest more of the portfolio in equities than the SAA (strategic asset allocation) prescribes if the investor anticipates that equities will deliver a higher return over the short term than other asset classes."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM4 - Basics of Portfolio Planning and Construction",
        "text": "An asset manager evaluates the risk tolerance of three investors:\n\n| Investor | Ability to Take Risk | Willingness to Take Risk |\n| :--- | :--- | :--- |\n| 1 | Average | Average |\n| 2 | Above average | Below average |\n| 3 | Below average | Above average |\n\nWhich investor most likely has the highest overall risk tolerance?",
        "options": [
            "Investor 1",
            "Investor 2",
            "Investor 3"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because the prudent approach is to reach a conclusion about risk tolerance consistent with the lower of the two factors (ability and willingness). Therefore, Investor 1 has average risk tolerance, while the other two investors have below-average risk tolerance."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM5 - The Behavioral Biases of Individuals",
        "text": "Which of the following is most likely a consequence of the illusion of control bias?",
        "options": [
            "An investor's portfolio turnover is too low.",
            "The investor's portfolio contains concentrated positions in companies.",
            "An investor uses a simple forecasting model for portfolio construction."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because as a result of illusion of control bias, FMPs [financial market participants] may inadequately diversify portfolios. Research has found that some investors prefer to invest in companies that they feel they have control over, such as the companies they work for, leading them to hold concentrated positions."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM5 - The Behavioral Biases of Individuals",
        "text": "Which of the following best describes a potential consequence of the regret-aversion bias for financial market participants?",
        "options": [
            "Engaging in herding behavior",
            "Borrowing excessively to finance present consumption",
            "Misidentifying risk tolerances because of how questions about risk tolerance were framed"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because as a result of regret-aversion bias, FMPs [financial market participants] may engage in herding behavior. FMPs may feel safer in popular investments in order to limit potential future regret. Regret-aversion bias is an emotional bias in which people tend to avoid making decisions out of fear that the decision will turn out poorly."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM5 - The Behavioral Biases of Individuals",
        "text": "Which of the following is most likely a consequence of overconfidence bias? Investors:",
        "options": [
            "holding poorly diversified portfolios.",
            "continuing to hold classes of assets with which they are familiar.",
            "holding investments in a loss position longer than justified, in the hope that they will return to breakeven."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because overconfidence bias is a bias in which people demonstrate unwarranted faith in their own abilities. As a result of overconfidence bias, FMPs [financial market participants] may hold poorly diversified portfolios, which may result in significant downside risk."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM5 - The Behavioral Biases of Individuals",
        "text": "Which of the following can best be explained by overconfidence when predicting companies' earnings growth rates?",
        "options": [
            "Base-rate neglect",
            "The value anomaly",
            "The disposition effect"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because a number of other studies have offered behavioral explanations for value anomalies, presenting the anomalies as mispricing rather than compensation for increased risk. These studies recognize the emotional factors involved in appraising stocks. Overconfidence can also be involved in predicting growth rates, potentially leading growth stocks to be overvalued, leading to the value anomaly."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM5 - The Behavioral Biases of Individuals",
        "text": "Holding on to losers for too long and selling winners too quickly best characterizes which of the following?",
        "options": [
            "Hindsight bias",
            "Disposition effect",
            "Anchoring and adjustment bias"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the disposition effect pertains to loss-aversion bias. Loss-aversion bias refers to the tendency to strongly prefer avoiding losses to achieving gains. Rational FMPs (financial market participants) should accept more risk to increase gains, not to mitigate losses. Loss aversion leads FMPs to hold their losers to avoid recognizing losses and sell their winners to lock in profits. An important concept is what has been termed the disposition effect: the holding of investments that have experienced losses too long, and the selling of investments that have experienced gains too quickly (i.e., holding on to losers and selling winners)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM5 - The Behavioral Biases of Individuals",
        "text": "Which of the following tendencies of financial market participants is most likely a consequence of endowment bias?",
        "options": [
            "Engaging in herding behavior",
            "Saving insufficiently for the future",
            "Continuing to hold classes of assets with which they are familiar"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because endowment bias may lead FMPs (financial market participants) to do the following: Continue to hold classes of assets with which they are familiar. FMPs may believe they understand the characteristics of the investments they already own and may be reluctant to purchase assets with which they have less experience. Familiarity adds to owners' perceived value of a security."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM5 - The Behavioral Biases of Individuals",
        "text": "Which of the following biases most likely contributes to the momentum effect in financial markets?",
        "options": [
            "Availability",
            "Status quo",
            "Prediction overconfidence"
        ],
        "correctAnswer": 0,
        "explanation": "Correct because momentum can be partly explained by availability, hindsight, and loss aversion biases. Studies have identified faulty learning models within traders, in which reasoning is based on their recent experience. Behaviorally, this is availability bias. In this context, availability bias is also called the recency effect, which is the tendency to recall recent events more vividly and give them undue weight. In such models, if the price of an asset rises for a period of time, investors may simply extrapolate this rise to the future."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM5 - The Behavioral Biases of Individuals",
        "text": "Which of the following statements about emotional biases is most accurate?",
        "options": [
            "They arise through conscious effort",
            "They are caused by faulty cognitive reasoning",
            "They are more difficult to correct than cognitive biases"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because cognitive errors can often be corrected or eliminated through better information, education, and advice. Emotional biases, on the other hand, are harder to correct because they stem from impulses and intuitions."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM6 - Introduction to Risk Management",
        "text": "Which of the following is best classified as a non-financial risk?",
        "options": [
            "Credit risk",
            "Liquidity risk",
            "Accounting risk"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because although most risks have monetary consequences, there are a number of risks that are typically classified as non-financial in nature. These risks arise from a variety of sources, such as the relationship between the entity and counterparties, regulators, governments, the environment, suppliers, customers, and employees. The following three non-financial risks are related: regulatory risk, accounting risk, and tax risk. They could even be collectively referred to as compliance risk because they all deal with the matter of conforming to policies, laws, rules, and regulations as set forth by governments and authoritative bodies, such as accounting governing boards."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM6 - Introduction to Risk Management",
        "text": "In risk management, which of the following should be taken into account when determining an enterprise's risk tolerance?",
        "options": [
            "Management compensation",
            "The enterprise's value at risk (VaR)",
            "The government and regulatory landscape"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because, in the context of risk management, factors such as a company's goals, its expertise in certain areas, and its strategies will help a board determine which risks the company may pursue and with how much intensity. The government and regulatory landscape is important too, both in their ex ante demands on how companies approach risk and in the likely ex post reaction in the event of disasters."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM6 - Introduction to Risk Management",
        "text": "The risk management measure that captures the sensitivity of a derivative's delta to a change in the value of the underlying best describes:",
        "options": [
            "rho.",
            "vega.",
            "gamma."
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the sensitivity of the derivative price to a small change in the value of the underlying asset is called the delta. Large changes are captured by the concept of gamma. Whereas delta is a first-order risk, gamma is considered a second-order risk because it reflects the risk of changes in delta. Gamma is a numerical measure of how sensitive an option's delta is to a change in the value of the underlying."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM6 - Introduction to Risk Management",
        "text": "A good risk management process should:",
        "options": [
            "predict when a crisis will occur.",
            "consider the balance between expected returns and losses.",
            "only consider losses occurring from events that have a high likelihood."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because a good risk management process would include a deep discussion at the governance level about the balance between the likely returns and the unlikely—but sizable—losses and whether such losses are tolerable."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM6 - Introduction to Risk Management",
        "text": "A bank determines that its value at risk (VaR) is £5 million at 5% for one day. The bank is expecting a minimum loss of £5 million once every:",
        "options": [
            "5 business days.",
            "13 business days.",
            "20 business days."
        ],
        "correctAnswer": 2,
        "explanation": "Incorrect because with a probability of 5% and a measurement period of one day, we can interpret the bank's VaR as expecting a minimum loss of £5 million once every 20 business days. Based on a year with 250 to 260 business days, this should occur 12.5 to 13 times per year (roughly once per month)."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM6 - Introduction to Risk Management",
        "text": "Which of the following metrics is most appropriate to estimate a bond's average extreme loss?",
        "options": [
            "VaR of loss",
            "Standard deviation of loss",
            "Expected loss given default"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because the statistics used to estimate VaR can be used to gauge average extreme losses. Conditional VaR or CVaR is a common tail loss measure, defined as the weighted average of all loss outcomes in the statistical distribution that exceed the VaR loss. Another tail risk metric in the credit risk space that is analogous to CVaR is expected loss given default, which answers the question for a debt security, If the underlying company or asset defaults, how much do we lose on average?"
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM6 - Introduction to Risk Management",
        "text": "The process of risk management is best described as the set of decisions that maximizes a company's value while:",
        "options": [
            "minimizing the risk taken.",
            "bearing a tolerable level of risk.",
            "predicting the potential risk correctly."
        ],
        "correctAnswer": 1,
        "explanation": "Correct because risk management is the process by which an organization or individual defines the level of risk to be taken, measures the level of risk being taken, and adjusts the latter toward the former, with the goal of maximizing the company's or portfolio's value. Said differently, risk management comprises all the decisions and actions needed to best achieve organizational or personal objectives while bearing a tolerable level of risk."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM6 - Introduction to Risk Management",
        "text": "Which of the following is best classified as a financial risk?",
        "options": [
            "Tax risk",
            "Credit risk",
            "Accounting risk"
        ],
        "correctAnswer": 1,
        "explanation": "Correct because the risk management industry has come to classify three types of risks as primarily financial in nature and the second primary financial risk is credit risk."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM6 - Introduction to Risk Management",
        "text": "Which of the following is least consistent with effective risk governance?",
        "options": [
            "Taking an enterprise-wide view",
            "Defining the enterprise's risk tolerance",
            "Following a bottom-up process to direct risk management activities"
        ],
        "correctAnswer": 2,
        "explanation": "Correct because risk governance is the top-down (not bottom-up) process and guidance that directs risk management activities to align with and support the overall enterprise."
    },
    {
        "source": "Premium Pack 2026",
        "subject": "Portfolio Management",
        "lm": "LM6 - Introduction to Risk Management",
        "text": "A benefit of risk budgeting is that it:",
        "options": [
            "forces risk trade-offs.",
            "provides risk oversight.",
            "defines an organization's risk tolerance."
        ],
        "correctAnswer": 0,
        "explanation": "Correct because one major benefit of even the most basic risk budgeting is that it forces risk trade-offs and supports a culture in which risk is considered as a part of all key decisions."
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Fixed Income",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Portfolio Management",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Ethical & Professional Standards",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Alternative Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Corporate Issuers",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Quantitative Methods",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Equity Investments",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    },
    {
        "source": "Vikas Vohra",
        "subject": "Derivatives",
        "lm": "",
        "text": "",
        "options": [
            "",
            "",
            ""
        ],
        "correctAnswer": 0,
        "explanation": ""
    }
];
