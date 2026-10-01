const SAMPLE_QUESTIONS = [
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM1 – Derivative Instrument and Derivative Market Features",
        "text":  "Compared to over-the-counter (OTC) derivatives that are not cleared, the credit risk of exchange-traded derivatives is most likely:",
        "options":  [
                        "lower.",
                        "the same.",
                        "higher."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because derivative exchanges require collateral on deposit upon inception and during the life of a trade in order to minimize counterparty credit risk. This deposit is paid by each counterparty via a financial intermediary to the exchange, which then provides a guarantee against counterparty default, whereas OTC (over-the-counter) instruments have less transparency, usually involve more counterparty risk. Therefore, compared to OTC derivatives that are not cleared, the credit risk of exchange-traded derivatives is lower."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM1 – Derivative Instrument and Derivative Market Features",
        "text":  "Which of the following statements is most accurate?",
        "options":  [
                        "Longevity is an example of an underlying of a derivative",
                        "A convertible bond is an example of a stand-alone derivative",
                        "Derivatives directly pass through the returns of the underlying"
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because other derivative underlyings include weather, cryptocurrencies, and longevity, all of which can influence the financial performance of various market participants. Therefore, longevity is an example of an underlying of a derivative."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM1 – Derivative Instrument and Derivative Market Features",
        "text":  "Derivatives derive their performance from:",
        "options":  [
                        "the performance of the underlying asset.",
                        "eliminating the risk of counterparty default.",
                        "the straight pass-through performance of the underlying."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the most common definition of a derivative is a financial instrument that derives its performance from the performance of the underlying asset."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM1 – Derivative Instrument and Derivative Market Features",
        "text":  "Compared to over-the-counter (OTC) derivative markets, exchange-traded derivative markets most likely have greater:",
        "options":  [
                        "flexibility.",
                        "transparency.",
                        "customization."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because many transactions in OTC markets will retain a degree of privacy with lower transparency. In contrast, exchange markets are said to have transparency, which means that full information on all transactions is disclosed to exchanges and regulatory bodies. Therefore, exchange-traded derivatives markets have greater transparency than OTC derivatives markets."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM1 – Derivative Instrument and Derivative Market Features",
        "text":  "Which of the following derivative underlyings is an example of a soft commodity?",
        "options":  [
                        "Gold",
                        "Crude oil",
                        "Soybeans"
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because soft commodities are agricultural products, such as cattle and corn, and hard commodities are natural resources, such as crude oil and metals. Also, crude oil, soybeans, copper, and gold are all commodities. Commodities are considered either \u0027hard\u0027 (those mined, such as copper, or extracted, such as oil) or \u0027soft\u0027 (those grown over a period of time, such as livestock, grains, and cash crops, such as coffee)."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text":  "An investor buys a call for $5.75 that has a strike price of $130. If the value at expiration for this call is $17.80, the price of the underlying at expiration is closest to:",
        "options":  [
                        "$112.20.",
                        "$142.05",
                        "$147.80."
                    ],
        "correctAnswer":  2,
        "explanation":  "[ADDED BY CLAUDE, not in book] Call value at expiration = Max(0, ST - X), so 17.80 = ST - 130 and ST = $147.80. The $5.75 premium is a distractor: it affects profit, not value at expiration. Choice B ($142.05) is the trap from subtracting the premium: 130 + 17.80 - 5.75."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text":  "A call option had the following characteristics on the date it was created: Exercise price $20; Option premium $3. If the price of the underlying is $17 at expiration, the profit to the option holder is closest to:",
        "options":  [
                        "-$3.",
                        "$0.",
                        "$3."
                    ],
        "correctAnswer":  0,
        "explanation":  "[ADDED BY CLAUDE, not in book] ST = $17 is below X = $20, so the call expires worthless (payoff $0). Profit = payoff - premium paid = 0 - 3 = -$3."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text":  "If ST denotes the price of the underlying at the expiration date and X is the exercise price of the option, the payoff at expiration to a call seller is best described as:",
        "options":  [
                        "-Max(0, ST - X).",
                        "-Max(0, X - ST).",
                        "Max(0, ST - X)."
                    ],
        "correctAnswer":  0,
        "explanation":  "[ADDED BY CLAUDE, not in book] Options are zero-sum. The call buyer\u0027s payoff is Max(0, ST - X), so the seller\u0027s payoff is the negative of that. Choice B is the put seller\u0027s payoff; choice C is the call buyer\u0027s payoff."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text":  "A call option that is sold for $4 has an exercise price of $40. If the price of the underlying is $43 at expiration, the value of the option to the seller is closest to:",
        "options":  [
                        "-$3, and the loss to the seller is $1.",
                        "-$3, and the profit to the seller is $1.",
                        "$3, and the loss to the seller is $1."
                    ],
        "correctAnswer":  1,
        "explanation":  "[ADDED BY CLAUDE, not in book] Value to the seller at expiration = -Max(0, 43 - 40) = -$3. Profit = value + premium received = -3 + 4 = +$1."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text":  "An investor pays $5 for a European put option with an exercise price of $102. At expiration, if the price of the underlying is $100, the value of the put option is:",
        "options":  [
                        "-$3.",
                        "$0.",
                        "$2."
                    ],
        "correctAnswer":  2,
        "explanation":  "[ADDED BY CLAUDE, not in book] Put value at expiration = Max(0, X - ST) = 102 - 100 = $2. The premium is not part of \u0027value\u0027. Choice A (-$3) is the profit (2 - 5), which the question did not ask for."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text":  "A put option and the underlying stock: Stock price at expiration $85; European put strike price $78. The value of the put option to the option seller at expiration is:",
        "options":  [
                        "-$7.",
                        "$0.",
                        "$7."
                    ],
        "correctAnswer":  1,
        "explanation":  "[ADDED BY CLAUDE, not in book] The seller\u0027s payoff is -Max(0, X - ST) = -Max(0, 78 - 85) = $0. The put is out of the money, so it expires worthless and the seller owes nothing."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text":  "All else being equal, if the price of the underlying at expiration exceeds the exercise price, the option value at expiration for the seller of a put most likely is:",
        "options":  [
                        "less than the option value at expiration for the seller of a call.",
                        "equal to the option value at expiration for the seller of a call.",
                        "greater than the option value at expiration for the seller of a call."
                    ],
        "correctAnswer":  2,
        "explanation":  "[ADDED BY CLAUDE, not in book] If ST \u003e X, the put expires worthless, so the put seller\u0027s value is $0. The call is in the money, so the call seller\u0027s value is -(ST - X), which is negative. $0 is greater than a negative number."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text":  "An investor gathers the following information about a European put option and its underlying: Exercise price $29; Option purchase price $2; Spot price at the time of the option purchase $28. If the price of the underlying at expiration is $27, the profit for a buyer of the put is:",
        "options":  [
                        "-$1.",
                        "$0.",
                        "$2."
                    ],
        "correctAnswer":  1,
        "explanation":  "Book text (this is the feedback shown for the wrong choice C): Incorrect because it represents value or payoff at expiration to the put buyer, not profit for the put buyer. The value of payoff is pT = Max(0, X - ST), where pT is the value of the put option at expiration, X is the exercise price of the option, and ST is the price of the underlying at expiration. Therefore, pT = Max(0, $29 - $27) = $2. This is not the profit, which is $0, as described in the response rationale for the correct answer."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text":  "A call option has the following characteristics: Value of underlying at expiration $2,020; Exercise price $2,100; Call premium $80. The profit to the call seller is closest to:",
        "options":  [
                        "-$80.",
                        "$0.",
                        "$80."
                    ],
        "correctAnswer":  2,
        "explanation":  "[ADDED BY CLAUDE, not in book] ST = 2,020 is below X = 2,100, so the call expires worthless and the seller pays nothing at expiration. The seller keeps the $80 premium, so profit = +$80."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text":  "Which of the following is most likely an example of a contingent claim? A(n):",
        "options":  [
                        "swap contract",
                        "option contract",
                        "futures contract"
                    ],
        "correctAnswer":  1,
        "explanation":  "[ADDED BY CLAUDE, not in book] A contingent claim has a payoff that depends on the outcome of a future event (the underlying moving past the strike). Options are the contingent claims; swaps, futures and forwards are forward commitments, where both parties are obligated to transact."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text":  "Forward contracts have:",
        "options":  [
                        "less counter-party risk than futures.",
                        "the same level of counter-party risk as futures.",
                        "more counter-party risk than futures."
                    ],
        "correctAnswer":  2,
        "explanation":  "[ADDED BY CLAUDE, not in book] Forwards are private OTC contracts with no clearinghouse guarantee, no margining, and no daily settlement, so credit risk builds up until expiration. Futures are cleared, with margin and daily mark-to-market, which lowers counterparty risk."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text":  "The payoff to the seller of a forward contract at expiration is defined as the:",
        "options":  [
                        "forward price plus the value of the underlying at expiration.",
                        "forward price minus the value of the underlying at expiration.",
                        "value of the underlying at expiration minus the forward price."
                    ],
        "correctAnswer":  1,
        "explanation":  "[ADDED BY CLAUDE, not in book] The seller agrees to deliver at the forward price F0(T). If the underlying is worth ST at expiration, the seller\u0027s payoff is F0(T) - ST. Choice C (ST - F0(T)) is the buyer\u0027s payoff."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text":  "Which of the following characteristics is most likely common to both forwards and swaps?",
        "options":  [
                        "Customization of contract terms",
                        "Marked to the settlement price on a daily basis",
                        "Multiple payments over the life of the contract"
                    ],
        "correctAnswer":  0,
        "explanation":  "[ADDED BY CLAUDE, not in book] Both forwards and swaps are OTC, privately negotiated contracts, so terms are customized. Daily marking to the settlement price is a futures feature. Multiple payments over the life is a swap feature; a forward has a single settlement at expiration."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text":  "A forward commitment:",
        "options":  [
                        "has a linear payoff in relation to the underlying.",
                        "involves an exchange of cash at contract initiation.",
                        "provides one party the right to transact at a later date."
                    ],
        "correctAnswer":  0,
        "explanation":  "[ADDED BY CLAUDE, not in book] Forward commitments (forwards, futures, swaps) have linear, symmetric payoffs: gains and losses move one-for-one with the underlying. Typically no cash changes hands at initiation, and both parties are obligated (not given a right) to transact. Choice C describes an option."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM2 – Forward Commitment and Contingent Claim Features and Instruments",
        "text":  "Which of the following types of derivatives has a non-linear payoff?",
        "options":  [
                        "Swaps",
                        "Options",
                        "Forwards"
                    ],
        "correctAnswer":  1,
        "explanation":  "[ADDED BY CLAUDE, not in book] An option\u0027s payoff is kinked at the strike (Max(0, ST - X) for a call), so it is non-linear. Swaps and forwards are forward commitments with linear payoffs."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM3 – Derivative Benefits, Risks, and Issuer and Investor Uses",
        "text":  "The potential divergence between the cash flow timing of a derivative instrument versus its underlying best describes:",
        "options":  [
                        "basis risk.",
                        "liquidity risk.",
                        "systemic risk."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because liquidity risk is described as potential divergence between the cash flow timing of a derivative instrument versus an underlying or hedged transaction."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM3 – Derivative Benefits, Risks, and Issuer and Investor Uses",
        "text":  "The potential divergence between the expected value of a derivative instrument versus an underlying or hedged transaction best describes:",
        "options":  [
                        "basis risk.",
                        "liquidity risk.",
                        "systemic risk."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because basis risk is the potential divergence between the expected value of a derivative instrument versus an underlying or hedged transaction."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM3 – Derivative Benefits, Risks, and Issuer and Investor Uses",
        "text":  "A commodities producer selling its inventory forward in anticipation of lower prices in the future is an example of a:",
        "options":  [
                        "fair value hedge.",
                        "cash flow hedge.",
                        "net investment hedge."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because a fair value hedge designation applies when a derivative is deemed to offset the fluctuation in fair value of an asset or liability. A commodities producer might sell its inventory forward in anticipation of lower future prices."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM3 – Derivative Benefits, Risks, and Issuer and Investor Uses",
        "text":  "Basis risk is best described as a(n):",
        "options":  [
                        "investor\u0027s inability to meet a margin call due to a lack of funds.",
                        "potential divergence between the expected value of a derivative and its underlying.",
                        "divergence in the cash flow timing of a derivative versus that of an underlying transaction."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because basis risk is the potential divergence between the expected value of a derivative instrument versus an underlying or hedged transaction."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM3 – Derivative Benefits, Risks, and Issuer and Investor Uses",
        "text":  "With respect to hedge accounting designation types, a:",
        "options":  [
                        "foreign exchange forward to hedge forecasted sales is an example of a fair value hedge.",
                        "commodity futures contract used to hedge inventory is an example of a cash flow hedge.",
                        "currency forward to offset the foreign exchange risk of equity of a foreign operation is an example of a net investment hedge."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because currency forward designated as offsetting the FX risk of the equity of a foreign operation is an example of a net investment hedge."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM3 – Derivative Benefits, Risks, and Issuer and Investor Uses",
        "text":  "A principal argument against using derivatives is that they:",
        "options":  [
                        "destabilize the financial system.",
                        "are ineffective in transferring risk between parties.",
                        "prevent price discovery of underlying assets in spot markets."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the two principal arguments against derivatives are that they are such speculative devices that they effectively permit legalized gambling and that they destabilize the financial system."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM4 – Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives",
        "text":  "If the net cost of carry is zero, the forward price of a commodity is most likely:",
        "options":  [
                        "less than the commodity\u0027s spot price compounded at the risk-free rate over the life of the contract.",
                        "equal to the commodity\u0027s spot price compounded at the risk-free rate over the life of the contract.",
                        "greater than the commodity\u0027s spot price compounded at the risk-free rate over the life of the contract."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because the forward price of an asset with benefits and/or costs is the spot price compounded at the risk-free rate over the life of the contract minus the future value of those benefits and costs. That is, F0(T) = S0(1+r)^T - (γ - θ)(1+r)^T, where the net cost of carry consists of the benefits, denoted as γ (dividends or interest plus convenience yield), minus the costs, denoted as θ. When net cost of carry is zero, the term (γ - θ) is zero, resulting in (γ - θ)(1+r)^T being zero. Then, F0(T) = S0(1+r)^T. Hence, the forward price of a commodity is equal to the commodity\u0027s spot price compounded at the risk-free rate over the life of the contract when the net cost of carry is zero."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM4 – Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives",
        "text":  "All else being equal, the cost of carry on a dividend-paying stock is:",
        "options":  [
                        "lower than the cost of carry on a stock with no dividends.",
                        "the same as the cost of carry on a stock with no dividends.",
                        "higher than the cost of carry on a stock with no dividends."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the benefit of the dividend reduces the costs associated with carrying the stock. The cost of carry is the net of the costs and benefits related to owning an underlying asset for a specific period. The cost of carry is the opportunity cost plus other costs of ownership less benefits of ownership, and stock dividends or bond coupons are examples of cash flow benefits."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM4 – Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives",
        "text":  "Which of the following asset classes is most likely to have a convenience yield?",
        "options":  [
                        "Commodities",
                        "Interest rates",
                        "Foreign exchange"
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because convenience yield is a non-cash benefit associated with physical assets. In contrast to securities or cash stored electronically, commodities usually involve known costs associated with the storage, insurance, transportation, and potential spoilage (in the case of soft commodities) of these physical assets. A non-cash benefit of holding a physical commodity versus a derivative is known as a convenience yield."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM4 – Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives",
        "text":  "The risk-free rate is 3% and the risk premium for an asset is 2%. If an investor creates a perfect hedge by combining the asset with a derivative, the combined position should earn:",
        "options":  [
                        "0%.",
                        "3%.",
                        "5%."
                    ],
        "correctAnswer":  1,
        "explanation":  "Book text (written as feedback on the wrong choice, 5%): Incorrect because when a long position in the underlying is combined with a short position in the derivative to produce a perfect hedge, all of the risk is eliminated and the position should earn the risk-free rate not 5 percent. This incorrect answer choice is equal to the risk-free rate of 3% plus the risk premium of 2%."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM4 – Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives",
        "text":  "The rate typically used in derivative pricing models to discount expected payoffs is the:",
        "options":  [
                        "risk-free rate.",
                        "risk-free rate plus a risk premium.",
                        "risk-free rate multiplied by the risk-neutral probability."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because virtually all derivative pricing models ultimately take this form: discounting the expected payoff of the derivative at the risk-free rate."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM5 – Pricing and Valuation of Forward Contracts",
        "text":  "A stock with a dividend yield of 3% is trading in the spot market at $50. If the annual risk-free rate is 5%, the 6-month forward price of the stock is closest to:",
        "options":  [
                        "$49.50.",
                        "$50.50.",
                        "$51.27."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because the forward price is: F0(T) = S0 e^((r - i)T) where r is the risk-free rate, i is the dividend yield, and T is the time period. F0(T) = $50 e^((0.05 - 0.03) x 0.5) = $50.50251 = approx. $50.50."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM5 – Pricing and Valuation of Forward Contracts",
        "text":  "Two-year and three-year government benchmark zero-coupon bonds are priced at 96 and 93 (per 100 face value), respectively. The implied one-year forward rate in two years\u0027 time is closest to:",
        "options":  [
                        "3.00%.",
                        "3.23%.",
                        "3.36%."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because a discount factor may also be interpreted as the price of a zero-coupon cash flow or bond. The price equivalent of a zero rate is the present value of a currency unit on a future date, known as a discount factor. The discount factor for period i (DFi) is: DFi = 1/(1+zi)^i. Accordingly, the equivalent zero rate is: DF2 = 0.96 = 1/(1+z2)^2; and z2 = 2.0621%. DF3 = 0.93 = 1/(1+z3)^3; and z3 = 2.4485%. The implied forward rate between period A and period B is denoted as IFR(A,B-A). It is a forward rate on a bond that starts in period A and ends in period B. A general formula for the relationship between the two spot rates (zA, zB) and the implied forward rate: (1+zA)^A x (1+IFR(A,B-A))^(B-A) = (1+zB)^B. (1.020621)^2 x (1+IFR(2,1))^(3-2) = (1.024485)^3. (1+IFR(2,1)) = (1.024485)^3 / (1.020621)^2 = 1.075269 / 1.041667 = 1.032258. IFR(2,1) = 1.032258 - 1 = 3.2258% = approx. 3.23%."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM5 – Pricing and Valuation of Forward Contracts",
        "text":  "A forward agreement has the following terms: Spot price at inception $275; Forward price $285; Number of shares 2,000. At expiration, if the spot price is $282, the value to the seller is:",
        "options":  [
                        "-$6,000.",
                        "$6,000.",
                        "$14,000."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because the value at expiration for the seller: = F0(T) - ST = $285 - $282 = $3. Hence the total value is $3 x 2,000 shares = $6,000."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM5 – Pricing and Valuation of Forward Contracts",
        "text":  "An investor observes that the price of an underlying asset is $20. The investor immediately enters into forward contract to purchase the underlying asset in one year at a price of $10. At contract initiation, the value of the forward contract is closest to:",
        "options":  [
                        "$0.",
                        "$10.",
                        "$30."
                    ],
        "correctAnswer":  0,
        "explanation":  "[ADDED BY CLAUDE, not in book] Book key is A. Reasoning behind it: a forward contract is set up so that its value at initiation is zero (the forward price is chosen so that no cash changes hands). The value of a long forward at time t is St - F0(T)/(1+r)^(T-t), which is zero at initiation only when F0(T) = S0(1+r)^T."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM5 – Pricing and Valuation of Forward Contracts",
        "text":  "The spot price of an asset is $70.00. If the annual risk-free rate is 2.50%, the 9-month forward price is closest to:",
        "options":  [
                        "$68.72.",
                        "$71.31.",
                        "$71.75."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because the forward price is the spot price compounded at the risk-free rate over the life of the contract or F0(T) = S0 (1+r)^T where S0 is the current spot price, r is the risk-free rate and T is time. Therefore, the 9-month forward price is equal to $70.00 (1+.025)^0.75 = $71.31."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM5 – Pricing and Valuation of Forward Contracts",
        "text":  "Which of the following derivatives realize a gain as the market reference rate rises above the initial fixed rate?",
        "options":  [
                        "Long forward rate agreements only",
                        "Short interest rate futures contracts only",
                        "Both long forward rate agreements and short interest rate futures contracts"
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because realizing a gain on the FRA contract as rates rise. Note that this would be equivalent to taking a short position on a CNY MRR futures contract if one were available. A long FRA (i.e., FRA floating-rate receiver (fixed-rate payer) position realizes a gain as MRR rises. A short futures contract price is based on (100 - yield), which gains as yield-to-maturity (MRR) rises."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM6 – Pricing and Valuation of Futures Contracts",
        "text":  "An analyst gathers: the current spot price of crude oil is $120 per barrel; the risk-free rate is 3% with annual compounding; a futures contract has 182 days until settlement; the storage cost is $5 per barrel, payable at the end of the futures contract. Based on 365 days per year, the futures price per barrel of crude oil is closest to:",
        "options":  [
                        "$126.78.",
                        "$126.86.",
                        "$126.93."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the futures price for a commodity with known storage cost amounts may be determined as: f0(T) = [S0 + PV0(C)] x (1+r)^T. PV0(C) = $5 x (1+3%)^(-182/365). f0(T) = [$120 + $5 x (1+3%)^(-182/365)] x (1+3%)^(182/365) = $126.781768 = approx. $126.78."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM6 – Pricing and Valuation of Futures Contracts",
        "text":  "Which of the following interest rate derivatives most likely has the largest convexity bias?",
        "options":  [
                        "Forward rate agreement on a 1-month market reference rate",
                        "Forward rate agreement on a 3-month market reference rate",
                        "Interest rate futures contract on a 3-month market reference rate"
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because the discounting feature of the FRA, which is not present in the futures contract, leads to a convexity bias that is greater for longer discounting periods. Since the length of the discounting period depends on the maturity of the underlying market reference rate, 3-month market reference rate results in a longer discounting period than the 1-month rate."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM6 – Pricing and Valuation of Futures Contracts",
        "text":  "A futures contract\u0027s:",
        "options":  [
                        "mark-to-market is not settled until maturity.",
                        "price remains fixed until the contract matures.",
                        "variation margin reduces counterparty credit risk."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because the daily settlement mechanism resets the futures MTM to zero, and variation margin is exchanged to settle the difference, reducing counterparty credit risk."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM6 – Pricing and Valuation of Futures Contracts",
        "text":  "The differential between forward and futures prices is determined by which of the following?",
        "options":  [
                        "Interest rate volatility only",
                        "The correlation between futures prices and interest rates only",
                        "Both interest rate volatility and the correlation between futures prices and interest rates"
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because the different patterns of cash flows for forwards and futures can lead to a difference in the pricing of forwards versus futures. Forward and futures prices are identical under certain conditions, namely: if interest rates are constant, or if futures prices and interest rates are uncorrelated. On the other hand, violations of these assumptions can give rise to differences in pricing between these two contracts. For example, if futures prices are positively correlated with interest rates, long futures contracts are more attractive than long forward positions for the same underlying and maturity. The reason is because rising prices lead to futures profits that are reinvested in periods of rising interest rates, and falling prices lead to losses that occur in periods of falling interest rates. The price differential will also vary with the volatility of interest rates. Therefore, the differential between forward and futures prices is determined by both interest rate volatility and the correlation between futures prices and interest rates."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM6 – Pricing and Valuation of Futures Contracts",
        "text":  "All else being equal, the price of a forward contract is most likely higher than the price of a futures contract if interest rates are:",
        "options":  [
                        "negatively correlated with futures prices.",
                        "uncorrelated with futures prices.",
                        "positively correlated with futures prices."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because a negative correlation between futures prices and interest rates leads to forwards being more desirable than futures to the long position. The reason is that rising prices lead to futures profits that are reinvested in periods of falling interest rates, and falling prices lead to losses that occur in periods of rising interest rates. It is far better to receive all cash flows at expiration under such conditions than to receive them in the interim periods. This condition makes forwards more attractive than futures. The more desirable contract will tend to have the higher price. Therefore, the price of the forward contract is higher than the price of the futures contract on the same underlying when interest rates are negatively correlated with futures prices."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM7 – Pricing and Valuation of Interest Rates and Other Swaps",
        "text":  "A $10 million interest rate swap with annual payments has a fixed swap rate of 1.95%. The implied forward rates are: Year 1 = 0.50%; Year 2 = 1.15%; Year 3 = 1.35%. The periodic settlement value in Year 3 for the fixed-rate payer is expected to be closest to:",
        "options":  [
                        "-$95,000.",
                        "-$60,000.",
                        "$60,000."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because the periodic settlement value = (MRR - sN) x Notional amount x Period. The market reference rate (MMR) for Year 3 is 1.35%, thus: = (0.0135 - 0.0195) x $10,000,000 x 1 = -$60,000."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM7 – Pricing and Valuation of Interest Rates and Other Swaps",
        "text":  "A series of forward rate agreements and an interest rate swap contract covering the same periods and using the same market reference rate will most likely have the same:",
        "options":  [
                        "fixed rates.",
                        "cash flows upfront.",
                        "settlement cash flows."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because similarities between interest rate forwards and swaps include the symmetric payoff profile and the fact that no cash flow is exchanged upfront."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM7 – Pricing and Valuation of Interest Rates and Other Swaps",
        "text":  "From the fixed-rate receiver\u0027s perspective, if the market reference rate increases, the value of a swap contract:",
        "options":  [
                        "decreases.",
                        "stays the same.",
                        "increases."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the fixed-rate receiver pays the market reference rate and receives the par swap par rate. If the market reference rate increases, they are paying more and the value of the contract decreases to them. Another interpretation of an interest rate swap is that the fixed-rate payer (floating-rate receiver) is long a floating-rate note (FRN) priced at the MRR and short a fixed-rate bond with a coupon equal to the fixed swap rate. Similarly, the fixed-rate receiver (floating-rate payer) is long a fixed-rate bond with a coupon equal to the swap rate and short a floating-rate note priced at the MRR. A rise in the expected forward rates after inception will increase the present value of floating payments, while the fixed-swap rate will remain the same."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM7 – Pricing and Valuation of Interest Rates and Other Swaps",
        "text":  "A swap is most likely similar to a series of forward contracts when:",
        "options":  [
                        "all forward contracts are created with the combined value equal to zero.",
                        "all forward contracts are entered into at the price created in the forward market.",
                        "the value of the long forward contracts are matched with the value of the short forward contracts at each swap payment date."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because, in a swap, each forward contract will be created at the fixed price that corresponds to the fixed price of a swap of the same maturity with payments made at the same dates as the series of forward contracts. That means that some of the forward contracts would have positive values and some would have negative values, but their combined values would equal zero."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM8 – Pricing and Valuation of Options",
        "text":  "An American put has a strike price of ¥5,000 and expires in one year. The current price of the underlying is ¥4,200 and the risk-free rate is 2%. The maximum value of this put is:",
        "options":  [
                        "¥800.",
                        "¥4,900.",
                        "¥5,000."
                    ],
        "correctAnswer":  2,
        "explanation":  "[ADDED BY CLAUDE, not in book] The most a put can ever pay is if the underlying falls to zero, so its upper bound is the exercise price X. For an American put, which can be exercised at any time, that bound is X itself (¥5,000). For a European put the bound would be PV of X. The current price and the interest rate are distractors."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM8 – Pricing and Valuation of Options",
        "text":  "All, else held equal, the value of a European call option is best characterized as having a:",
        "options":  [
                        "negative relationship with the price of the underlying.",
                        "negative relationship with the volatility of the underlying.",
                        "positive relationship with the time to expiration."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct. The value of a European call option is directly related to the time to expiration. That is, all else held equal, the value of a European call option is higher the longer the time to expiration."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM8 – Pricing and Valuation of Options",
        "text":  "The upper bound of a call value is the:",
        "options":  [
                        "underlying\u0027s price.",
                        "underlying\u0027s price plus the present value of its exercise price or zero, whichever is greater.",
                        "underlying\u0027s price minus the present value of its exercise price or zero, whichever is greater."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the upper no-arbitrage bound of a call value is the underlying\u0027s spot price."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM8 – Pricing and Valuation of Options",
        "text":  "If the price of the underlying is $57, which of the following long option positions is out of the money? A:",
        "options":  [
                        "put with a strike price of $60",
                        "put with a strike price of $50",
                        "call with a strike price of $50"
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because when the underlying has not reached the exercise price (currently lower for a call, higher for a put), the option is said to be out-of-the-money. In this case, as the underlying price of $57 is higher than the strike price of $50, the put is out of the money."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM8 – Pricing and Valuation of Options",
        "text":  "A put option with the greatest moneyness has a strike price:",
        "options":  [
                        "less than the price of the underlying.",
                        "equal to the price of the underlying.",
                        "greater than the price of the underlying."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because when the underlying is beyond the exercise price in the appropriate direction (higher for a call, lower for a put), the option is said to be in-the-money. In addition, for puts to expire in-the-money, the value of the underlying must fall below the exercise price. The higher the exercise price, the better chance the underlying has of getting below it. Likewise, if the value of the underlying does fall below the exercise price, the higher the exercise price, the greater the payoff. So, if X is higher, ST will be below it more often, and if ST is less than X, the payoff of X - ST is greater, the higher is X for whatever value of ST occurs. Therefore, a put option with the greatest moneyness has a strike price greater than the price of the underlying."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM8 – Pricing and Valuation of Options",
        "text":  "Which of the following European options has the greatest value at expiration? A:",
        "options":  [
                        "call with an exercise price of 72 and an underlying priced at 83",
                        "call with an exercise price of 83 and an underlying priced at 70",
                        "put with an exercise price of 70 and an underlying priced at 83"
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the value of the call option at expiration is the greater of either zero or the underlying price at expiration minus the exercise price, which is typically written as: cT = Max(0, ST - X), where cT = call option price at expiration and ST = underlying price at expiration. Therefore, a call option with an exercise price of 72 and an underlying priced at 83 will have a value: cT = Max(0, 83 - 72) = 11."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM8 – Pricing and Valuation of Options",
        "text":  "All else being equal, if the exercise values of a European call option and a European put option on the same underlying are equal, both options must be:",
        "options":  [
                        "in-the-money options.",
                        "at-the-money options.",
                        "out-of-the-money options."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because the value of a European call at expiration is the exercise value, which is the greater of zero or the value of the underlying minus the exercise price. And the value of a European put at expiration is the exercise value, which is the greater of zero or the exercise price minus the value of the underlying. This means if the call option is in-the-money (out-of-the-money), the put option of the same strike will be out-of-the-money (in-the-money). That is, if the exercise value of a call (put) option is positive, the exercise value of a put (call) option will be zero. But when the underlying is precisely at the exercise price (the option is said to be at-the-money), the exercise value of a European call and a European put will the same, which is zero. Therefore, all else being equal, if the exercise values of a European call option and a European put option are the same, then the European call and the European put must be both at-the-money options."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM8 – Pricing and Valuation of Options",
        "text":  "The value of a long position in a European put option is directly related to the:",
        "options":  [
                        "exercise price.",
                        "risk-free interest rate.",
                        "value of the underlying."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the value of a European put option is directly related to the exercise price."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM8 – Pricing and Valuation of Options",
        "text":  "The current price of the underlying is $7.40 and the annual risk-free rate is 6%. The minimum price for a 6-month call option with a strike price of $7.50 is closest to:",
        "options":  [
                        "$0.00.",
                        "$0.12.",
                        "$0.31."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because the price for a European call option is known to satisfy the formula c0 \u003e= Max[0, S0 - X/(1+r)^T] where c0 is the current price of the European call option, S0 is the current stock price, X is the strike price, r is the risk-free interest rate and T is time. Therefore the minimum price is equal to Max[0, $7.40 - $7.50/(1.06)^(6/12)] = Max[0, $7.40 - $7.28] = Max[0, $0.12] = $0.12."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM8 – Pricing and Valuation of Options",
        "text":  "The upper bound of a put value is the:",
        "options":  [
                        "exercise price.",
                        "price of the underlying.",
                        "present value of the exercise price minus the spot price."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the exercise price, X, therefore represents the upper bound on the put value."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM8 – Pricing and Valuation of Options",
        "text":  "The value of a European call option is inversely related to the:",
        "options":  [
                        "exercise price.",
                        "time to expiration.",
                        "risk-free interest rate."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the value of a European call option is inversely related to the exercise price."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM8 – Pricing and Valuation of Options",
        "text":  "All else being equal, if the risk-free rate increases, the value of a European put option:",
        "options":  [
                        "decreases.",
                        "remains the same.",
                        "increases."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the value of a European put is inversely related to the risk-free interest rate. Therefore, an increase in the risk-free rate decreases the value of a European put option."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM8 – Pricing and Valuation of Options",
        "text":  "For a European call option with one month until expiration, if the spot price is below the exercise price, the call option most likely has:",
        "options":  [
                        "positive time value only.",
                        "positive intrinsic value only.",
                        "both positive time value and positive intrinsic value."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because a European call option with two months until expiration will typically have positive time value, where time value reflects the value of the uncertainty that arises from the volatility in the underlying. In addition, cT = Max (0, ST - X) or intrinsic value equals the greater of zero or the value of the underlying minus exercise price. The call option is out-of-the-money and therefore, has zero intrinsic value."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM9 – Option Replication Using Put–Call Parity",
        "text":  "An analyst gathers: Call price $10; Stock price $40; Exercise price $60; Interest rate 3%; Time to expiry 1 year. According to put-call parity, the price of the put is closest to:",
        "options":  [
                        "$28.25.",
                        "$30.00.",
                        "$108.25."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because S0 + p0 = c0 + X/(1+r)^T. This relationship is known as put-call parity. Here S0 is the spot price, p0 is the put premium, X is the strike price and r is the interest rate. S0 + p0 = c0 + X/(1+r)^T; 40 + p0 = 10 + 60/1.03; p0 = 10 + 60/1.03 - 40 = 28.25242718 = 28.25"
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM9 – Option Replication Using Put–Call Parity",
        "text":  "All else being equal, the cost of a fiduciary call must be:",
        "options":  [
                        "less than the cost of a synthetic protective put.",
                        "equal to the cost of a synthetic protective put.",
                        "greater than the cost of a synthetic protective put."
                    ],
        "correctAnswer":  1,
        "explanation":  "Book text (labelled \u0027Incorrect\u0027 in the book although B is the key): Incorrect because the cost of the fiduciary call must equal the cost of the synthetic protective put, giving us what is referred to as put-call-forward parity."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM9 – Option Replication Using Put–Call Parity",
        "text":  "Based on put-call parity, the payoff on a short underlying position is equivalent to the payoff on a portfolio consisting of a:",
        "options":  [
                        "short call, a long put, and a long bond.",
                        "short call, a long put, and a short bond.",
                        "long call, a short put, and a short bond."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because the put-call parity relationship implies that a long underlying can be mimicked as follows: S0 = c0 - p0 + X/(1+r)^T. This implies that a short underlying position is equivalent to: -S0 = -c0 + p0 - X/(1+r)^T, that is, a short call, a long put, and a short bond."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM9 – Option Replication Using Put–Call Parity",
        "text":  "According to put-call-forward parity, a trader can create a synthetic short position in a risk-free bond by setting up a long position in a call option along with a:",
        "options":  [
                        "short position in a forward contract and a long position in a put.",
                        "long position in a forward contract and a short position in a put.",
                        "short position in a forward contract and a short position in a put."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because combining the synthetic asset with the put-call parity relationship - so, substituting the present value of F0(T) for S0 - we have what is referred to as put-call forward parity: F0(T)(1+r)^-T + p0 = c0 + X(1+r)^-T, where F0(T)(1+r)^-T is the present value of F0(T) discounted at the risk-free rate, p0 is the price of the put option on the underlying at t=0, c0 is the price of the call option on the underlying at t=0, X(1+r)^-T is a risk free bond that pays the amount of the exercise price X at t=T. In other words, under put-call parity, at t = 0 the price of the long underlying asset plus the long put must equal the price of the long call plus the risk-free asset. Rearranging the formula yields: -X(1+r)^-T = c0 - p0 - F0(T)(1+r)^-T. In other words, one can create a synthetic short position in a risk-free bond by going long a call, short a put, and short a forward contract."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM9 – Option Replication Using Put–Call Parity",
        "text":  "According to put-call-forward parity, the payoff on a synthetic protective put is equivalent to the payoff on a portfolio consisting of:",
        "options":  [
                        "a long call and a long risk-free bond.",
                        "a long call, a short forward contract and a long risk-free bond.",
                        "a long put, a short forward contract and a short risk-free bond."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because recall our put-call parity discussion and assume that Investor A creates his protective put in a slightly different manner. Instead of buying the asset, he buys a forward contract and a risk-free bond in which the face value is the forward price. This strategy is a synthetic protective put. Because we showed that the fiduciary call is equivalent to the protective put, a fiduciary call has to be equivalent to a protective put with a forward contract. Therefore, the payoff on a synthetic protective put = the payoff on a fiduciary call; synthetic protective put = long risk-free bond + long forward contract + long put = long call + long risk-free bond."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM9 – Option Replication Using Put–Call Parity",
        "text":  "According to put-call parity, the payoff of a long risk-free bond can be replicated synthetically by going:",
        "options":  [
                        "long an asset, long a put and long a call.",
                        "long an asset, long a put and short a call.",
                        "long an asset, short a put and short a call."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because according to put-call parity, X/(1+r)^T = S0 + p0 - c0, long bond = long asset, long put, short call. Therefore, the payoff of a long risk-free bond can be synthetically created by going long an asset, long a put and short a call."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM9 – Option Replication Using Put–Call Parity",
        "text":  "A fiduciary call is a strategy in which a trader purchases a call option:",
        "options":  [
                        "and takes a short position in the underlying asset.",
                        "with funds received from selling short a zero coupon bond of the same maturity as the call option.",
                        "along with a zero coupon bond of the same maturity as the call option and with a face value equal to the exercise price of the option."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because this combination of instruments is the precise definition of a fiduciary call. At time 0, this investor buys a call option on this asset with an exercise price of X that expires at T and a risk-free zero-coupon bond with a face value of X that matures at T. This strategy is sometimes known as a fiduciary call."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM9 – Option Replication Using Put–Call Parity",
        "text":  "Which of the following is most accurate? Put-call-forward parity:",
        "options":  [
                        "assumes that the strike of the options is equal to the forward price of the underlying.",
                        "is derived by equating the price of an at the money put to the price of an at the money call.",
                        "assumes that the maturity of the put option, the call option, the forward and the bond are the same."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because the put-call-forward parity equation is formed by comparing the maturity payoffs of synthetic protective put and a fiduciary call. It follows that maturity of all the components have to be the same. Because we showed that the fiduciary call is equivalent to the protective put, a fiduciary call has to be equivalent to a protective put with a forward contract. It follows that the cost of the fiduciary call must equal the cost of the synthetic protective put, giving us what is referred to as put-call-forward parity."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM9 – Option Replication Using Put–Call Parity",
        "text":  "All else being equal, based on put-call-forward parity, the price of a put is higher than the price of a call when:",
        "options":  [
                        "the forward price of the underlying is lower than the exercise price.",
                        "the forward price of the underlying is equal to the exercise price.",
                        "the forward price of the underlying is higher than the exercise price."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because it follows that the cost of the fiduciary call must equal the cost of the synthetic protective put, giving us what is referred to as put-call-forward parity, F0(T)/(1+r)^T + p0 = c0 + X/(1+r)^T. Rearranging this equation results in: p0 - c0 = [X - F0(T)]/(1+r)^T. Based on this parity equation, p0 \u003e c0 when X \u003e F0(T)."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM9 – Option Replication Using Put–Call Parity",
        "text":  "An analyst gathers: Put price $120; Forward price $110; Exercise price $100; Interest rate 2%; Time to expiry 1 year. According to put-call-forward parity, the price of the call is closest to:",
        "options":  [
                        "$127.84.",
                        "$129.80.",
                        ""
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because the cost of the fiduciary call must equal the cost of the synthetic protective put, giving us what is referred to as put-call-forward parity, F0(T)/(1+r)^T + p0 = c0 + X/(1+r)^T. Here F0(T) is the forward price at expiration, X is the strike price and r is the interest rate, p0 is the put premium and c0 is the call premium. 110/1.02 + 120 = c0 + 100/1.02; 110/1.02 + 120 - 100/1.02 = c0; c0 = 129.803922 = 129.80"
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM9 – Option Replication Using Put–Call Parity",
        "text":  "According to put-call parity, a long put option is equivalent to being:",
        "options":  [
                        "long a call, short the underlying asset, and long a risk-free bond.",
                        "long a call, long the underlying asset, and short a risk-free bond.",
                        "short a call, long the underlying asset, and long a risk-free bond."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the formula for put-call parity is S0 + p0 = c0 + X/(1+r)^T, where S0 is the stock price at time zero, p0 is the price of a put option at time zero, c0 is the price of a call option at time zero, X is the strike price, r is the risk-free rate, and T is time. By using the symbols and the signs in these versions of put-call parity, we can see several important interpretations. In the equations below, plus signs mean long and minus signs mean short: p0 = c0 - S0 + X/(1+r)^T =\u003e long put = long call, short asset, long bond."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM10 – Valuing a Derivative Using a One-Period Binomial Model",
        "text":  "Which of the following factors affects the option price when using a binomial model? The:",
        "options":  [
                        "risk-free rate.",
                        "level of investors\u0027 risk aversion.",
                        "expected return of the underlying."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the value of the call option today, c0, is computed as the expected value of the option at expiration, c1u and c1d, discounted at the risk-free rate, r. Also, this no-arbitrage derivative value established separately from investor views on risk is referred to as risk-neutral pricing."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM10 – Valuing a Derivative Using a One-Period Binomial Model",
        "text":  "An analyst gathers: Current price of underlying asset $16.0; End of period upward price $22.0; End of period downward price $12.0; Risk-free rate 4.0%. Using a one-period binomial model, the risk-neutral probability of a price increase is closest to:",
        "options":  [
                        "0.38.",
                        "0.46.",
                        "0.54."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because the risk-neutral probability (pi) is the computed probability used in binomial option pricing by which the discounted weighted sum of expected values of the underlying, S1u = Ru S0 and S1d = Rd S0, equal the current option price. Specifically, this probability is computed using the risk-free rate and assumed up gross return and down gross return of the underlying as in Equation 7. pi = (1 + r - Rd) / (Ru - Rd). More specifically, pi is the risk-neutral probability of an increase in the underlying price to S1u = Ru S0, and (1 - pi) is that of a decrease, S1d = Rd S0. Thus, an increase from $16 to $22 or a decrease from $16 to $12 corresponds to: Ru = $22/$16 = 1.375 and Rd = $12/$16 = 0.75. Using the risk-neutral probability (pi) of a price increase: pi = (1 + 0.04 - 0.75) / (1.375 - 0.75) = 0.29/0.625 = 0.464 = approx. 0.46."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM10 – Valuing a Derivative Using a One-Period Binomial Model",
        "text":  "All else being equal, if the up gross return increases in a one-period binomial model, the risk-neutral probability of an upward price movement of the asset will:",
        "options":  [
                        "decrease.",
                        "remain the same.",
                        "increase."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the risk-neutral probability (pi) is the computed probability used in binomial option pricing by which the discounted weighted sum of expected values of the underlying, S1u = Ru S0 and S1d = Rd S0, equal the current option price. Specifically, this probability is computed using the risk-free rate and assumed up gross return and down gross return of the underlying as in pi = (1 + r - Rd)/(Ru - Rd). So, if the up gross return increases in a one-period binomial model, the denominator will increase. Therefore, the risk-neutral probability of an upward price movement of the asset, (pi), decreases."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM10 – Valuing a Derivative Using a One-Period Binomial Model",
        "text":  "An analyst collects: Current stock price €26; Gross return from an up move 1.10; Gross return from a down move 0.75; Call and put exercise price €22. Based on a one-period binomial pricing model, which of the following has the largest payoff?",
        "options":  [
                        "Put option following an up move.",
                        "Put option following a down move.",
                        "Call option following a down move."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because the payoff of a put option following a down move is p1d = Max (0, X - S1d) where X is the exercise price and S1d is the price after a down move. In this case, S1d = €26(0.75) = €19.50. So, p1d = Max (0, €22 - €19.50) = €2.50, which is greater than the payoffs of other two responses."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Derivatives",
        "lm":  "LM10 – Valuing a Derivative Using a One-Period Binomial Model",
        "text":  "Risk-neutral pricing establishes no-arbitrage option values independent of the:",
        "options":  [
                        "spot price of the underlying.",
                        "investor\u0027s views on the volatility of the underlying.",
                        "future price of the underlying following an up or down move."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because this no-arbitrage derivative value established separately from investor views on risk is referred to as risk-neutral pricing. Volatility generally means risk because the expected price risk of the underlying, is known as implied volatility. Therefore, risk-neutral pricing establishes no-arbitrage option values independent of the investor views on the underlying\u0027s volatility."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM1 – The Firm and Market Structures",
        "text":  "Firms operating under a monopolistic competition market structure most likely:",
        "options":  [
                        "have few competitors.",
                        "benefit from high barriers to entry.",
                        "sell products that are close substitutes for those offered by other firms."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because under monopolistic competition, the products offered by each seller are close substitutes for the products offered by other firms, and each firm tries to make its product look different."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM1 – The Firm and Market Structures",
        "text":  "A market structure characterized by homogeneous/standardized product differentiation is best described as:",
        "options":  [
                        "monopoly.",
                        "monopolistic competition.",
                        "perfect competition and oligopoly."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct. Perfect competition and oligopoly are characterized by homogeneous/standardized product differentiation. Book table (market structure: degree of product differentiation): Perfect competition: Homogeneous/standardized; Monopolistic competition: Differentiated; Oligopoly: Homogeneous/standardized; Monopoly: Unique product."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM1 – The Firm and Market Structures",
        "text":  "Which of the following statements about a downward-sloping long-run average cost (LRAC) curve is most accurate? A downward-sloping LRAC curve is representative of a firm experiencing:",
        "options":  [
                        "economies of scale.",
                        "diseconomies of scale.",
                        "decreasing levels of investment."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct. When the LRAC curve is downward sloping, it means the firm is producing units at lower average costs per unit as production levels rise. This situation represents economies of scale in production."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM1 – The Firm and Market Structures",
        "text":  "In a perfectly competitive market, a firm\u0027s breakeven point is the minimum point of the:",
        "options":  [
                        "average total cost curve.",
                        "average fixed cost curve.",
                        "average variable cost curve."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because economists refer to the minimum AVC point as the shutdown point and the minimum ATC point as the breakeven point."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM1 – The Firm and Market Structures",
        "text":  "In the long run, a monopolistically competitive firm:",
        "options":  [
                        "earns positive economic profits.",
                        "faces a perfectly elastic demand curve.",
                        "produces at a higher level of average cost than the minimum average cost."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because in the hybrid market of monopolistic competition, zero economic profit in long-run equilibrium resembles perfect competition. However, the long-run level of output, Q1, is less than Q2, which corresponds to the minimum average cost of production and would be the long-run level of output in a perfectly competitive market."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM1 – The Firm and Market Structures",
        "text":  "In an oligopoly market, which of the following best describes the situation when firms have no incentive to deviate from their current pricing strategy based on the anticipated choices of competitors?",
        "options":  [
                        "The Nash equilibrium",
                        "The Stackelberg model",
                        "Pricing interdependence"
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the Nash equilibrium is present when two or more participants in a non-cooperative game have no incentive to deviate from their respective equilibrium strategies after they have considered and anticipated their opponent\u0027s rational choices or strategies."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM1 – The Firm and Market Structures",
        "text":  "In which of the following market structures does marginal revenue equal price?",
        "options":  [
                        "Oligopoly",
                        "Monopoly",
                        "Perfect competition"
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because only in perfect competition does the marginal revenue equal price. In the remaining structures, price generally exceeds marginal revenue because a firm can sell more units only by reducing the per unit price."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM1 – The Firm and Market Structures",
        "text":  "The perfectly competitive firm\u0027s supply curve is its long-run:",
        "options":  [
                        "marginal cost schedule.",
                        "average revenue schedule.",
                        "average total cost schedule."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the long-run marginal cost schedule is the perfectly competitive firm\u0027s supply curve."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM1 – The Firm and Market Structures",
        "text":  "To calculate the Herfindahl-Hirschman index:",
        "options":  [
                        "add the market shares of the largest firms.",
                        "add the market shares of the largest firms and then square the sum.",
                        "square the market shares of the largest firms and then add the results."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because to avoid the known issues with concentration ratios, economists O.C. Herfindahl and A.O. Hirschman suggested an index where the market shares of the top N companies are first squared and then added."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM1 – The Firm and Market Structures",
        "text":  "An analyst gathers the following information about three markets (number of sellers / non-price competition): Market 1: Many / None; Market 2: Few / Strong; Market 3: Many / Strong. Which market is most likely an oligopoly?",
        "options":  [
                        "Market 1",
                        "Market 2",
                        "Market 3"
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because in an oligopoly market there are a small number of potential sellers and products are often highly differentiated through marketing, features, and other non-price strategies."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM1 – The Firm and Market Structures",
        "text":  "Monopolistic competition is best characterized by:",
        "options":  [
                        "high barriers to entry and exit.",
                        "a small number of buyers and sellers.",
                        "product differentiation through non-price strategies."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because for a monopolistically competitive firm: suppliers differentiate their products through advertising and other non-price strategies."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM1 – The Firm and Market Structures",
        "text":  "If a perfectly competitive industry becomes monopolistically competitive, each firm\u0027s long-run average total cost per unit sold will most likely:",
        "options":  [
                        "decrease.",
                        "remain the same.",
                        "increase."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because unlike long-run equilibrium in perfect competition, in the market of monopolistic competition, the equilibrium position is at a higher level of average cost than the level of output that minimizes average cost. Average cost does not reach its minimum until output level Q2 is achieved. Under perfect competition a product is produced at the efficient quantity (marginal revenue equals marginal cost) and average total cost is minimized. The demand faced by each firm is perfectly elastic (horizontal demand curve). However, under monopolistic competition the demand curve is downward sloping and the quantity produced (marginal revenue equals marginal cost) is not where average total cost is minimized. Thus, average total cost is lower under perfect competition."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM1 – The Firm and Market Structures",
        "text":  "If a monopolistically competitive industry becomes perfectly competitive, each firm\u0027s long-run average total cost per unit sold will most likely:",
        "options":  [
                        "decrease.",
                        "remain the same.",
                        "increase."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because under perfect competition a product is produced at the efficient quantity (marginal revenue equals marginal cost) and the average total cost is minimized. The demand curve faced by each firm is perfectly elastic (horizontal demand curve). However, under monopolistic competition the demand curve is downward sloping and the quantity produced (marginal revenue equals marginal cost) is not where average total cost is minimized. Thus, average total cost is lower under perfect competition."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM1 – The Firm and Market Structures",
        "text":  "In the short run, the shutdown point of a company with a total variable cost of $3 million and a total fixed cost of $5 million is when total revenue declines to:",
        "options":  [
                        "$3 million.",
                        "$5 million.",
                        "$8 million."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because as long as the firm\u0027s revenues cover at least its variable cost, the firm is better off continuing to operate. If price is greater than average variable cost (AVC), the firm is covering not only all of its variable cost but also a portion of fixed cost. Also, average revenue (AR) is revenue per unit."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM2 – Understanding Business Cycles",
        "text":  "Which of the following is most likely a lagging economic indicator?",
        "options":  [
                        "Inventory-sales ratio",
                        "S\u0026P 500 Stock Index",
                        "Manufacturers\u0027 new orders for consumer goods and materials"
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because inventories accumulate as sales initially decline and then, once a business adjusts its ordering, become depleted as sales pick up, so this ratio tends to lag the cycle."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM2 – Understanding Business Cycles",
        "text":  "During the recovery phase of the business cycle, inflation most likely:",
        "options":  [
                        "decelerates but with a lag.",
                        "remains moderate.",
                        "further accelerates."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because, in the \u0027recovery\u0027 phase, inflation remains moderate."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM2 – Understanding Business Cycles",
        "text":  "Which of the following indexes is most likely considered a leading economic indicator?",
        "options":  [
                        "Consumer price index",
                        "Broad stock market index",
                        "Industrial production index"
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because as a leading economic indicator, a positive change in the S\u0026P 500 Index is supposed to lead (come before) an increase in aggregate economic activity. An increase in the S\u0026P 500 would be positive for future economic growth, all else equal. Additionally, the Euro Stoxx Equity Index is considered a leading indicator in the Eurozone."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM2 – Understanding Business Cycles",
        "text":  "The interest rate spread between 10-year treasury yields and overnight borrowing rates most likely:",
        "options":  [
                        "is a lagging economic indicator.",
                        "decreases when the market expects an economic downturn.",
                        "increases as the market expects future short-term interest rates to decrease."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because long-term yields express market expectations about the direction of short-term interest rates, and rates ultimately follow the economic cycle up and down, a wider spread, by anticipating short rate increases, also anticipates an economic upswing. Conversely, a narrower spread, by anticipating short rate decreases, also anticipates an economic downturn."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM2 – Understanding Business Cycles",
        "text":  "Which of the following is most likely a coincident indicator of economic activity?",
        "options":  [
                        "Average duration of unemployment",
                        "Average weekly hours, manufacturing",
                        "Employees on non-agricultural payrolls"
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because once recession or recovery is clear, businesses adjust their full-time payrolls. Non-agricultural payrolls and manufacturing and trade sales are coincident indicators."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM2 – Understanding Business Cycles",
        "text":  "The business cycle phase that is characterized by slowing growth in economic activity is the:",
        "options":  [
                        "slowdown.",
                        "expansion.",
                        "contraction."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because in the slowdown phase, activity measures are above average but decelerating. Moving to below-average rates of growth."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM3 – Fiscal Policy",
        "text":  "Which of the following changes most likely reflects a discretionary fiscal policy action?",
        "options":  [
                        "A decrease in corporate tax revenues due to lower corporate profitability",
                        "An increase in government expenditures due to new infrastructure projects",
                        "An increase in payments of unemployment benefits due to increasing unemployment"
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because in addition to these automatic adjustments, governments also use discretionary fiscal adjustments to influence aggregate demand. These will involve tax changes and/or spending cuts or increase usually with the aim of stabilizing the economy. An increase in government expenditures due to new infrastructure projects is a discretionary fiscal policy action because new public spending on social goods and infrastructure, such as hospitals and schools, boosting personal incomes with the objective of raising aggregate demand."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM3 – Fiscal Policy",
        "text":  "With respect to fiscal policy, transfer payments are best described as:",
        "options":  [
                        "welfare payments.",
                        "infrastructure spending.",
                        "spending on recurring goods and services."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because transfer payments are welfare payments made through the social security system, and, depending on the country, comprise payments for state pensions, housing benefits, tax credits and income support for poorer families, child benefits, unemployment benefits and job search allowances."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM3 – Fiscal Policy",
        "text":  "A decline in tax revenues due to a recession is best described as an example of a(n):",
        "options":  [
                        "automatic stabilizer.",
                        "expansionary fiscal policy.",
                        "contractionary fiscal policy."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because falling tax revenues due to a recession is an example of automatic stabilizer, not a discretionary fiscal policy. Automatic stabilizers will lead to changes in the budget deficit unrelated to fiscal policy changes; a recession will cause tax revenues to fall and the budget deficit to rise."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM3 – Fiscal Policy",
        "text":  "Which of the following is an expansionary fiscal policy?",
        "options":  [
                        "An increase in sales taxes",
                        "A decrease in interest rates",
                        "An increase in public spending on infrastructure"
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because there are a number of ways that fiscal policy can influence aggregate demand. Expansionary policy could take the form of new public spending on social goods and infrastructure."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM3 – Fiscal Policy",
        "text":  "Which of the following fiscal policy actions is most likely contractionary?",
        "options":  [
                        "Increasing taxes and decreasing spending",
                        "Decreasing taxes and increasing spending",
                        "Decreasing taxes and decreasing spending"
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because increasing taxes and decreasing spending are indicative of a contractionary fiscal policy. When an economy has full employment and wages and prices are rising too fast - then government spending may be reduced and taxes raised (contractionary fiscal policy)."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM3 – Fiscal Policy",
        "text":  "A fiscal policy tool that can immediately influence spending is most likely:",
        "options":  [
                        "indirect taxes.",
                        "exchange rate targeting.",
                        "capital expenditure plans."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because indirect taxes can be adjusted almost immediately after they are announced and can influence spending behavior instantly and generate revenue for the government at little or no cost to the government."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM3 – Fiscal Policy",
        "text":  "An objective of fiscal policy is to:",
        "options":  [
                        "maintain price stability.",
                        "redistribute the wealth within an economy.",
                        "influence the quantity of credit in an economy."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because fiscal policy can be used to redistribute income and wealth."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM3 – Fiscal Policy",
        "text":  "Which of the following government actions is most likely an expansionary fiscal policy?",
        "options":  [
                        "Increasing sales tax rate",
                        "Decreasing savings tax rate",
                        "Decreasing infrastructure spending"
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because a decrease in taxes, including tax on savings, would be expansionary fiscal policy. For example, an expansionary policy could take the form of cuts in tax rates on personal savings to raise disposable income for those with savings, with the objective of raising consumer demand."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM3 – Fiscal Policy",
        "text":  "An argument against being concerned about high national debt levels is that:",
        "options":  [
                        "the debt is owed internally to fellow citizens.",
                        "government borrowing leads to higher private sector investment.",
                        "the central bank can print money to finance a government deficit."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because this internally owed debt may overstate the problem. The arguments against being concerned about national debt (relative to GDP) include the following: The scale of the problem may be overstated because the debt is owed internally to fellow citizens."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM4 – Monetary Policy",
        "text":  "Monetary policy is used to:",
        "options":  [
                        "promote stable growth.",
                        "redistribute income and wealth.",
                        "determine taxation and spending."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the overarching goal of both monetary and fiscal policy is normally the creation of an economic environment where growth is stable and positive and inflation is stable and low."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM4 – Monetary Policy",
        "text":  "If an economy has a long-term growth potential of 2% per year and the central bank\u0027s inflation target is 3% per year, the neutral rate of interest is most likely:",
        "options":  [
                        "1%.",
                        "3%.",
                        "5%."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because the Neutral rate = Trend growth + Inflation target = 2% + 3% = 5%."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM4 – Monetary Policy",
        "text":  "The inflation target of an effective central bank is most likely:",
        "options":  [
                        "equal to zero to avoid the risk of deflation.",
                        "sufficiently below zero to maintain high credibility.",
                        "low enough to ensure a significant degree of price stability."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because an inflation-targeting framework normally has a clear, symmetric and forward-looking medium-term inflation target, sufficiently above 0 percent to avoid the risk of deflation but low enough to ensure a significant degree of price stability."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM4 – Monetary Policy",
        "text":  "Which of the following is most likely to limit the effectiveness of monetary policy?",
        "options":  [
                        "A liquidity trap",
                        "The crowding out effect",
                        "A time lag to implement government spending"
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because there may be occasions where the demand for money becomes infinitely elastic so that further injections of money into the economy will not serve to further lower interest rates or affect real activity. This is known as a liquidity trap. In this extreme circumstance, monetary policy can become completely ineffective."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM4 – Monetary Policy",
        "text":  "When a central bank sells government bonds to commercial banks, broad money growth:",
        "options":  [
                        "decreases.",
                        "remains the same.",
                        "increases."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because when a central bank sells government bonds to a commercial bank the reserves of commercial banks decline, reducing their capacity to make loans (i.e., create credit) to households and corporations and thus causing broad money growth to decline through the money multiplier mechanism."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM4 – Monetary Policy",
        "text":  "With respect to conventional monetary policy, combating inflation is most likely:",
        "options":  [
                        "less difficult than combating deflation.",
                        "equally difficult as combating deflation.",
                        "more difficult than combating deflation."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because deflation is more difficult for conventional monetary policy to deal with than inflation. This is because once the monetary authority has cut nominal interest rates to zero to stimulate the economy, it cannot cut them any further."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM4 – Monetary Policy",
        "text":  "Fiat money:",
        "options":  [
                        "is not currently used in any major economy.",
                        "can be exchanged for a precious metal at the country\u0027s central bank.",
                        "derives its value via government decree and because people accept it for payment."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because fiat money derives its value via government decree and because people accept it for payment of goods and services and for debt repayment."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM4 – Monetary Policy",
        "text":  "Which of the following is a limitation of monetary policy?",
        "options":  [
                        "The presence of automatic stabilizers in the economy",
                        "The ineffectiveness of interest rate adjustments in deflationary environments",
                        "The uneven distribution of income and wealth among different segments of the population"
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because this is a limitation of monetary policy. The limitations of monetary policy include problems in the transmission mechanism and the relative ineffectiveness of interest rate adjustment as a policy tool in deflationary environments."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM4 – Monetary Policy",
        "text":  "To be effective in targeting inflation a central bank is least likely to need:",
        "options":  [
                        "government oversight.",
                        "transparency of decisions.",
                        "credibility with market participants."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because an inflation-targeting framework normally has an independent and credible central bank. Such an independent central back does not need government oversight."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM4 – Monetary Policy",
        "text":  "An analyst gathers the following data about an economy: Real trend growth rate 0.5%; Central bank\u0027s policy rate 1.5%. If monetary policy is contractionary, the central bank\u0027s inflation target is:",
        "options":  [
                        "less than 1.0%.",
                        "equal to 1.0%.",
                        "greater than 1.0%."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because when policy rates are above the neutral rate, monetary policy is contractionary; when they are below the neutral rate, monetary policy is expansionary. The calculation of the neutral rate is as follows: Neutral rate = Trend growth + Inflation target. Therefore, if monetary policy is contractionary then the policy rate (1.5%) must be greater than the neutral rate. Hence the long-term inflation rate must be less than 1.0% in order for the policy rate to be greater than the neutral rate."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM4 – Monetary Policy",
        "text":  "To reduce inflation, a central bank most likely implements an interest rate policy that is:",
        "options":  [
                        "contractionary.",
                        "neutral.",
                        "expansionary."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because when central banks believe that economic activity is likely to lead to an increase in inflation, they might increase interest rates, thereby reducing liquidity. In these cases, market analysts describe such actions as contractionary."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM4 – Monetary Policy",
        "text":  "Under which of the following conditions is monetary policy most effective? When the:",
        "options":  [
                        "demand for money is infinitely elastic.",
                        "central bank targets an exchange rate.",
                        "risk of inflation is greater than deflation."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because deflation is more problematic for the central bank than inflation. Deflation is a pervasive and persistent fall in a general price index and is more difficult for conventional monetary policy to deal with than inflation. This is because cutting nominal interest rates much below zero to stimulate the economy is difficult. It is at this point that the economic conditions for a liquidity trap arise."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM4 – Monetary Policy",
        "text":  "Which of the following monetary policy actions is most likely considered expansionary? The central bank:",
        "options":  [
                        "acts as the lender in a repurchase agreement.",
                        "sells government bonds to commercial banks.",
                        "raises reserve requirements of commercial banks."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because if the central bank wishes to increase the supply of money, it might buy bonds (usually government bonds) from the banks, with an agreement to sell them back at some time in the future. This transaction is known as a repurchase agreement. The lender in a repurchase agreement is the party that initially buys the bonds and agrees to sell them back at a later point in time. By purchasing bonds from banks, the central bank is increasing the money supply, or increasing liquidity, which is expansionary."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM4 – Monetary Policy",
        "text":  "The overarching objective of most central banks is to maintain:",
        "options":  [
                        "price stability.",
                        "full employment.",
                        "the government\u0027s ability to service its debt."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because there is one overarching objective that most central banks seem to acknowledge explicitly, and that is the objective of maintaining price stability."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM4 – Monetary Policy",
        "text":  "All else being equal, and assuming that wages and prices of goods are rigid, a decrease in government spending and decreasing interest rates most likely reflect:",
        "options":  [
                        "easy fiscal policy and easy monetary policy.",
                        "tight fiscal policy and easy monetary policy.",
                        "easy fiscal policy and tight monetary policy."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because it\u0027s a tight fiscal policy/easy monetary policy: if a fiscal contraction is accompanied by expansionary monetary policy and low interest rates, then the private sector will be stimulated and will rise as a share of GDP, while the public sector will shrink. Falling government spending leads to a drop in aggregate demand or contraction."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM4 – Monetary Policy",
        "text":  "A role of most central banks is to:",
        "options":  [
                        "set income tax rates.",
                        "decide on government expenditures.",
                        "regulate their country\u0027s payments system."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because central banks play several key roles in modern economies. Generally, a central bank is the regulator and supervisor of the payments system."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM4 – Monetary Policy",
        "text":  "If contractionary fiscal policy and expansionary monetary policy have offsetting effects on GDP, the public sector\u0027s share of GDP will most likely:",
        "options":  [
                        "decrease.",
                        "remain the same.",
                        "increase."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because if a fiscal contraction is accompanied by expansionary monetary policy and low interest rates, then the private sector will be stimulated and will rise as a share of GDP, while the public sector will shrink."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM5 – Introduction to Geopolitics",
        "text":  "With respect to motivations for globalization, which of the following is best characterized as an intrinsic gain?",
        "options":  [
                        "Increased supply chain efficiency",
                        "Accelerated productivity from learning new methods",
                        "Access to resources that are not readily available in the home country"
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because intrinsic gain is a side effect or consequence of an activity that generates a benefit beyond profit itself. It is difficult to measure but contributes to globalization\u0027s momentum. It can also be a stabilizing force, increasing empathy between actors and reducing the likelihood that a geopolitical threat is levied. One example of intrinsic gain is the accelerated productivity from learning new methods."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM5 – Introduction to Geopolitics",
        "text":  "Which of the following behavioral archetypes best describes a country that is high on the globalization spectrum but low on the cooperation spectrum?",
        "options":  [
                        "Autarky",
                        "Hegemony",
                        "Bilateralism"
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because using the two axes we have discussed - political cooperation versus non-cooperation and globalization versus nationalism - investment analysts can assess geopolitical actors and the likelihood of threat to investment outcomes. Specifically, there are four archetypes of country behavior: autarky, hegemony, multilateralism, and bilateralism, where hegemony is situated low on the cooperation spectrum and high on the globalization spectrum. Hegemonic countries tend to be regional or even global leaders, and they use their political or economic influence of others to control resources. State-owned enterprises tend to control key export markets. Examples of hegemonic countries include the United States and Russia."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM5 – Introduction to Geopolitics",
        "text":  "With respect to geopolitics, setting standards for the size and shape of containers used for shipping is most likely an example of:",
        "options":  [
                        "regulatory cooperation.",
                        "process standardization.",
                        "operational synchronization."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because an example of operational synchronization is standards set for containers of uniform size and shape using multi-modal forms of transport (land, sea, air, rail) and port cranes."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM5 – Introduction to Geopolitics",
        "text":  "Which of the following would most likely lead to an increase in globalization? A decrease in:",
        "options":  [
                        "soft power.",
                        "nationalism.",
                        "standardization."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because globalization is marked by economic and financial cooperation, including the active trade of goods and services, capital flows, currency exchange, and cultural and information exchange. Actors participating in globalization are likely to reach beyond their national borders for access to new markets, talent, or learning. By contrast, anti-globalization or nationalism is the promotion of a country\u0027s own economic interests to the exclusion or detriment of the interests of other nations."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM5 – Introduction to Geopolitics",
        "text":  "Which of the following changes are investors most likely to make in response to a black swan risk?",
        "options":  [
                        "Tactical",
                        "Sector specific",
                        "Asset allocation"
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the velocity of geopolitical risk is the pace at which it impacts an investor portfolio. For the sake of simplicity, we explore short-term or \u0027high velocity\u0027 impacts, medium-term, and long-term or \u0027low velocity\u0027 impacts. In the short term, we may see volatility in the markets affecting entire industries or even the entire market. Exogenous or \u0027black swan\u0027 events tend to fit into this category, causing market volatility and investor flight to quality. A black swan risk is an event that is rare and difficult to predict but has an important impact. Investors with the appropriate time horizon and risk tolerance may make tactical changes to their investment choices as a result of these events. Long-term changes are unlikely to be necessary."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM5 – Introduction to Geopolitics",
        "text":  "Cyber threats most likely fall into the category of:",
        "options":  [
                        "event risk.",
                        "thematic risk.",
                        "exogenous risk."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because cyber threats are another example of thematic risk."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM5 – Introduction to Geopolitics",
        "text":  "Natural disasters are an example of:",
        "options":  [
                        "event risk.",
                        "thematic risk.",
                        "exogenous risk."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because exogenous risk is a sudden or unanticipated risk that impacts either a country\u0027s cooperative stance, the ability of non-state actors to globalize, or both. Examples include sudden uprisings, invasions, or the aftermath of natural disasters."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM5 – Introduction to Geopolitics",
        "text":  "Which of the following is most likely a benefit of globalization?",
        "options":  [
                        "Increased profits",
                        "More equal income distribution",
                        "Stronger environmental, social, and governance standards"
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the opportunity to generate higher profits may motivate companies to globalize. The first way to generate profit is to increase sales. Companies may choose to engage in globalization in order to access new customers for their goods and services. Another way to increase profits is to reduce costs. Globalization allows companies to access lower tax-operating environments, reduce labor costs, or seek other supply chain efficiency gains."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM6 – International Trade",
        "text":  "Which of the following organizations was founded with the goal of assisting in the reconstruction of the international payment system?",
        "options":  [
                        "The World Trade Organization",
                        "The International Monetary Fund",
                        "The International Bank for Reconstruction and Development"
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because IMF was founded with the goal to stabilize exchange rates and assist the reconstruction of the world\u0027s international payment system."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM6 – International Trade",
        "text":  "The main objective of the World Bank Group is to:",
        "options":  [
                        "support exchange rate stability and an open system of international payments.",
                        "provide the legal and institutional foundation of the multilateral trading system.",
                        "help developing countries fight poverty and enhance environmentally sound economic growth."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because the World Bank\u0027s main objective is to help developing countries fight poverty and enhance environmentally sound economic growth."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM6 – International Trade",
        "text":  "With respect to trading blocs, a common market most likely incorporates all aspects of a(n):",
        "options":  [
                        "customs union.",
                        "monetary union.",
                        "economic union."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the common market is the next level of economic integration that incorporates all aspects of the customs union and extends it by allowing free movement of factors of production among members."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM6 – International Trade",
        "text":  "The implementation of an export subsidy for a normal good produced in a small country will most likely increase the:",
        "options":  [
                        "domestic consumption of the good.",
                        "price of the good in the domestic market.",
                        "national welfare of the country providing the subsidy."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because in the case of an export subsidy, the exporter has the incentive to shift sales from the domestic to the export market because it receives the international price plus the per-unit subsidy for each unit of the good exported. This scenario raises the price in the domestic market by the amount of the subsidy in the small country case (price before subsidy plus subsidy)."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM6 – International Trade",
        "text":  "An argument against free trade is that:",
        "options":  [
                        "it has the potential to lead to greater income inequality.",
                        "it increases average production costs in goods and services.",
                        "it discourages foreign research and development in an economy."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because opponents of free trade point to the potential for greater income inequality and the loss of jobs in developed countries as a result of import competition."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM6 – International Trade",
        "text":  "When a country that is a price taker imposes a tariff on an imported good:",
        "options":  [
                        "national welfare increases.",
                        "consumers gain consumer surplus.",
                        "local producers gain producer surplus."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because the economic impact of a tariff on imports in a small country is one that is a price taker in the world market for a product and cannot influence the world market price. The welfare effect can be summarized as follows: Consumers suffer a loss of consumer surplus, local producers gain producer surplus and the net welfare effect results in a deadweight loss to the country\u0027s welfare."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM6 – International Trade",
        "text":  "When a country has a fiscal surplus and an excess of private saving over investment, its exports are:",
        "options":  [
                        "less than its imports.",
                        "equal to its imports.",
                        "greater than its imports."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because using a fundamental identity from macroeconomics, the relationship between the trade balance and expenditure/saving decisions can be expressed as: X - M = (S - I) + (T - G) where X represents exports, M is imports, S is private savings, I is investment in plant and equipment, T is taxes net of transfers, and G is government expenditure. From this relationship, we can see that a trade surplus (X \u003e M) must be reflected in a fiscal surplus (T \u003e [G]), an excess of private saving over investment (S \u003e I), or both. We can also see that when a country has a fiscal surplus (T \u003e G) and an excess of private saving over investment (S \u003e I), its exports are greater than its imports (X \u003e M)."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM7 – Capital Flows and the FX Market",
        "text":  "An analyst gathers: Foreign inflation rate 2%; Domestic inflation rate 3%; Change in nominal exchange rate 6%. Note: the exchange rate is expressed as the number of units of domestic currency per unit of foreign currency. The change in the real exchange rate is closest to:",
        "options":  [
                        "4%.",
                        "5%.",
                        "7%."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because the change in the real exchange rate is (1 + dS(d/f)/S(d/f)) x (1 + dP(f)/P(f)) / (1 + dP(d)/P(d)) - 1 = (1 + 6%) x (1 + 2%) / (1 + 3%) - 1 = 1.06 x 1.02/1.03 - 1 = 0.0497 = approx. 0.05 = 5%, where dS(d/f)/S(d/f) is the change of the nominal exchange rate, dP(f)/P(f) is the foreign inflation rate, and dP(d)/P(d) is the domestic inflation rate. Using the appropriate approximate formula, 6.0% + 2.0% - 3.0% = 5% leads to the same answer choice."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM7 – Capital Flows and the FX Market",
        "text":  "The conversion of nominal exchange rates into real exchange rates requires the:",
        "options":  [
                        "GDP of both countries.",
                        "price levels in both countries.",
                        "interest rates in both countries."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because real exchange rates, which are indexes often constructed by economists and other market analysts to assess changes in the relative purchasing power of one currency compared with another. Creating these indexes requires adjusting the nominal exchange rate by using the price levels in each country of the currency pair."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM7 – Capital Flows and the FX Market",
        "text":  "Price levels increase by 2% in the US and by 6% in the Eurozone. If the nominal spot exchange rate of the USD/EUR (amount of US dollars per 1 euro) decreases by 4%, the absolute change in the real exchange rate is closest to:",
        "options":  [
                        "0%.",
                        "4%.",
                        "8%."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the change in the real exchange rate is: [formula missing in the scan] Thus, the change in the real exchange rate is approximately zero percent. The rough calculation is: -4% + 6% - 2% = 0%."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM7 – Capital Flows and the FX Market",
        "text":  "An ideal international currency regime would most likely have:",
        "options":  [
                        "currencies that are fully convertible.",
                        "floating exchange rates between currencies.",
                        "a common monetary policy across different countries."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because the ideal currency regime would have three properties. One of those properties is, all currencies would be fully convertible (i.e., currencies could be freely exchanged for any purpose and in any amount). This condition ensures unrestricted flow of capital."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM7 – Capital Flows and the FX Market",
        "text":  "In contrast to real exchange rates, nominal foreign exchange rates:",
        "options":  [
                        "tend to deviate from purchasing power parity.",
                        "represent the relative price levels in the domestic and foreign countries.",
                        "are indexes useful for understanding international trade and capital flows."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because nominal exchange rates exhibit persistent deviations from PPP."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM7 – Capital Flows and the FX Market",
        "text":  "Which of the following economic conditions for a country best supports a well-functioning currency board exchange rate system?",
        "options":  [
                        "Flexible domestic prices and wages",
                        "Rapid growth in supply of the global reserve asset",
                        "Large non-traded sectors of the domestic economy"
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because a currency board system works best if domestic prices and wages are very flexible."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM7 – Capital Flows and the FX Market",
        "text":  "Dollarization is best described as an exchange rate regime whereby a country:",
        "options":  [
                        "uses the currency of another nation as its medium of exchange.",
                        "participates in a monetary union whose members share the same legal tender.",
                        "makes a commitment to exchange domestic currency for a specified foreign currency at a fixed exchange rate."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because in case of dollarization the country uses the currency of another nation as its medium of exchange and unit of account."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM7 – Capital Flows and the FX Market",
        "text":  "All else being equal, in an efficient market a forward exchange rate will decrease as a result of an increase in the:",
        "options":  [
                        "spot exchange rate.",
                        "foreign risk-free interest rate.",
                        "domestic risk-free interest rate."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because the arbitrage equation can be re-arranged, as needs require, to get the formula for the forward rate, as follows: F(f/d) = S(f/d) x [(1 + if)/(1 + id)], where F(f/d) is the forward exchange rate, S(f/d) is the spot exchange rate, if is the foreign risk-free interest rate, and id is the domestic risk-free interest rate. Therefore, the forward exchange rate will decrease as a result of an increase in the domestic risk-free interest rate."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM7 – Capital Flows and the FX Market",
        "text":  "An analyst gathers: USD/AUD spot rate 0.8027; AUD 1-year interest rate 3.30%; USD 1-year interest rate 2.42%. USD/AUD is the amount of USD per 1 AUD. The USD/AUD 1-year forward rate is closest to:",
        "options":  [
                        "0.7959.",
                        "0.8096.",
                        "0.8292."
                    ],
        "correctAnswer":  0,
        "explanation":  "Correct because F(f/d) = S(f/d) x ((1+if)/(1+id)). Substituting the values, F(f/d) = 0.8027 x ((1+0.0242)/(1+0.033)) = approx. 0.7959."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM7 – Capital Flows and the FX Market",
        "text":  "With respect to the foreign exchange market, an arbitrage relationship involving countries\u0027 relative interest rates serves as the basis for:",
        "options":  [
                        "real exchange rates.",
                        "forward exchange rates.",
                        "nominal exchange rates."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because forward exchange rates are based on an arbitrage relationship that equates the investment return on two alternative but equivalent investments, which involves the relationship between the risk-free interest rates of the two countries concerned. The arbitrage relationship is F(f/d) = S(f/d)(1 + if)/(1 + id), where F(f/d) is the forward rate, S(f/d) is the spot rate, and if (id) is the foreign (domestic) risk-free interest rate."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM7 – Capital Flows and the FX Market",
        "text":  "An analyst gathers the following foreign exchange rate information (CAD/USD is the amount of CAD per 1 USD; JPY/USD is the amount of JPY per 1 USD): CAD/USD beginning of period 1.3216, end of period 1.2944; JPY/USD beginning of period 105.42, end of period 104.74. The percentage change in the JPY/CAD cross-rate for the period is closest to:",
        "options":  [
                        "-2.7%.",
                        "1.4%.",
                        "2.8%."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because sometimes it is necessary to invert one of the quotes in order to get the intermediary currency to cancel out in the equation to get the cross-rate. For example, to get a Canada-yen (JPY/CAD) quote, one is typically using the dollar-Canada (CAD/USD) rate and dollar-yen (JPY/USD) rate, which are the market conventions. Hence, to get a Canada-yen (JPY/CAD) quote, we must first invert the dollar-Canada (CAD/USD) quote before multiplying by the dollar-yen (JPY/USD) quote. The beginning of period JPY/CAD exchange rate is therefore = 1/1.3216 x 105.42 = 0.75666 x 105.42 = 79.77. The end of period JPY/CAD exchange rate is therefore = 1/1.2944 x 104.74 = 0.77256 x 104.74 = 80.92. The percentage change in the JPY/CAD exchange rate over the period is therefore = 80.92/79.77 - 1 = 1.44% = approx. 1.4%."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM7 – Capital Flows and the FX Market",
        "text":  "If the spot USD/EUR exchange rate (the amount of USD per 1 EUR) is 1.1605 and the 1-year forward rate is 1.17240, the forward points are:",
        "options":  [
                        "+101.5.",
                        "+102.5.",
                        "+119.0."
                    ],
        "correctAnswer":  2,
        "explanation":  "Correct because the forward rate is calculated as (1.17240 - 1.1605) x 10,000 = 119.0."
    },
    {
        "source":  "CFA L1 Premium Practice Pack 2026 - Book 2",
        "subject":  "Economics",
        "lm":  "LM7 – Capital Flows and the FX Market",
        "text":  "An analyst gathers the following information about spot rates: USD/GBP 1.2604 (amount of USD per 1 GBP); USD/EUR 1.1786 (amount of USD per 1 EUR). The spot EUR/GBP cross rate is closest to:",
        "options":  [
                        "0.9351.",
                        "1.0694.",
                        "1.4855."
                    ],
        "correctAnswer":  1,
        "explanation":  "Correct because sometimes it is necessary to invert one of the quotes in order to get the intermediary currency to cancel out in the equation to get the cross-rate. For example, to get a Canada-yen (JPY/CAD) quote, one is typically using the dollar-Canada (CAD/USD) rate and dollar-yen (JPY/USD) rate, which are the market conventions. This Canada-yen calculation requires that the dollar-Canada rate (CAD/USD) be inverted to a USD/CAD quote for the calculations to work. The formula for the EUR/GBP cross rate is USD/GBP x (USD/EUR)^-1 = USD/GBP x EUR/USD = 1.2604 / 1.1786 = approx. 1.0694."
    }
];