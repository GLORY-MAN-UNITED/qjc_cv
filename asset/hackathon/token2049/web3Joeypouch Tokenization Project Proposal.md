# web3Joeypouch Tokenization Project Proposal

QU Jiachen

G2502008J

## 1. Problem Identification & Opportunity Analysis

### 1.1 Clearly Define the Problem

Current social media platforms suffer from three critical pain points that existing non-blockchain solutions fail to address effectively:

**Information Overload with Low Utility**: Mainstream social media is flooded with redundant, valueless content (e.g., trivial daily updates, clickbait), making it extremely time-consuming for users to filter out useful information. According to a 2024 social media usage report, users spend an average of 2.5 hours per day on social platforms but only find 15% of the content relevant to their needs.

**Inefficient Monetization for High-Value Content Creators**: Creators of valuable content (e.g., professional insights, in-depth tutorials, industry analyses) still rely on the traditional "create quality content → build a fan base → convert to ad revenue" model. This model is highly inefficient: ad revenue is mostly retained by platforms (creators typically receive only 10-20% of total ad earnings), and monetization is heavily dependent on fan size rather than content quality.

**Lack of Incentives for Valuable Information Sharing**: There is no direct reward mechanism for users who share or curate high-value information. Users often share useful content out of goodwill, but without tangible benefits, their motivation to continue contributing declines over time—leading to a shortage of sustainable high-quality content supply on platforms.

### 1.2 Opportunity: The Unique Value of Tokenization

Compared to non-blockchain solutions, tokenization (based on ERC20 Joey Token) fundamentally addresses the above pain points, and the token serves as an essential infrastructure for ecosystem operation, aligning with the "Product First, Tokens Later" principle:

**Solving Information Overload**: The Joey Token creates a "value-driven content filtering mechanism"—users who post high-value content receive token rewards, while those who share or interact with valuable content (e.g., upvoting, commenting with constructive feedback) also earn tokens. This incentivizes the production and dissemination of useful information, naturally reducing low-value content.

**Optimizing Creator Monetization**: Instead of relying on ad intermediaries, creators can directly earn Joey Tokens based on content value (e.g., token rewards tied to metrics like user engagement duration, save rates, and quality ratings). Tokens can be traded or used within the ecosystem, enabling creators to monetize their work immediately without waiting for fan base accumulation.

**Motivating Information Sharing**: The token provides a tangible incentive for users to participate in valuable information curation. Even non-creators can earn tokens by identifying and promoting high-quality content, fostering a collaborative ecosystem where everyone benefits from value creation.

### 1.3 Market Size/Impact

**Market Size**: Global social media users are projected to reach 4.8 billion by 2025, with over 60% of users expressing dissatisfaction with information overload and creator monetization issues. The market for "value-focused social platforms" is estimated to be worth $80 billion, as users are willing to switch to platforms that save time and reward meaningful participation.

**Impact**: In the short term, web3Joeypouch will reduce user time wasted on low-value content (estimated by 30%) and increase creator revenue (projected to be 3-5 times higher than traditional ad models). In the long term, it will reshape social media’s core logic—shifting from "attention-driven" to "value-driven"—and promote the sustainable circulation of high-quality information online.

## 

## 2. Proposed Solution & Use Case Development

### 2.1 Project Overview

<img title="" src="file:///C:/Users/Zlata/AppData/Roaming/marktext/images/2025-10-14-16-23-46-image.png" alt="" data-align="center">

- Github repo：[GLORY-MAN-UNITED/web3joeypouch](https://github.com/GLORY-MAN-UNITED/web3joeypouch)
  
  Project demo：[web3joeypouch/web3joeypouch.pdf at main · GLORY-MAN-UNITED/web3joeypouch](https://github.com/GLORY-MAN-UNITED/web3joeypouch/blob/main/web3joeypouch.pdf)

- **Project Name Meaning**: The naming of web3Joeypouch (referred to as "Joeypouch") is centered on the biological trait of a "kangaroo joey pouch"—a kangaroo mother’s pouch serves as a core space to carry and protect her joey. This metaphor symbolizes that the project will function like a kangaroo joey pouch: it "screens and carries high-value information, while isolating redundant and meaningless content," creating a "secure information container" for users that focuses on useful information. The term "Joey" (a baby kangaroo) not only echoes the name of the project’s native token, "Joey Token," but also implies that high-value information, like a growing joey, needs to be protected, nurtured, and delivered to target users through the platform’s "pouch" function. This strengthens the project’s core positioning of "screening and delivering valuable information".

- **Core Functions**:
  
  1. **High-Value Content Posting & Rewards**: Users post professional insights, tutorials, or industry analyses; the platform evaluates content value and awards Joey Tokens accordingly.
  
  2. **Content Curation & Incentives**: Users curate (upvote, share) valuable content and earn tokens based on the curation’s impact (e.g., how many new users the shared content attracts).
  
  3. **Direct Token Monetization**: Creators can withdraw Joey Tokens to exchanges for fiat currency or use them to access premium platform features (e.g., ad-free browsing, priority content promotion).
  
  4. **Content Quality Governance**: A hybrid "AI + community" system flags low-value content (e.g., spam, clickbait) and imposes token penalties on violators to maintain ecosystem quality.

### 2.2 Detailed Use Case

**Use Case 1: A Creator Earns Tokens by Posting High-Value Content**

**Content Submission Phase**: A tech blogger (Creator A) posts an in-depth analysis titled "2025 Web3 Industry Trend Forecast" on Joeypouch, including data charts and actionable insights. The platform’s AI immediately scans the content to ensure it meets basic quality standards (e.g., no plagiarism, minimum length of 800 words).

**Value Evaluation Phase**: Over 7 days, the content receives 1,200 views, 350 saves, 180 constructive comments, and an average user engagement duration of 4.5 minutes. The platform’s algorithm calculates the token reward using the formula: `(Views × 0.1) + (Saves × 0.5) + (Comments × 0.3) + (Engagement Duration × 0.2)` → totaling 1,200×0.1 + 350×0.5 + 180×0.3 + 4.5×0.2 = 120 + 175 + 54 + 0.9 = 349.9 Joey Tokens.

**Reward Distribution Phase**: On the 8th day, the smart contract automatically transfers 349.9 Joey Tokens to Creator A’s wallet. The platform also generates a "Reward Breakdown" page, showing how each metric contributed to the total reward—ensuring transparency.

#### Use Case 2: A User Earns Tokens by Curation

**Curation Action Phase**: User B discovers Creator A’s "2025 Web3 Trend" post, finds it highly valuable, and shares it to their external social media (Twitter/X). They also leave a comment: "Great analysis—especially the section on DeFi 3.0. Here’s my take on potential risks..."

**Impact Tracking Phase**: User B’s share drives 250 new users to the post, and their comment receives 40 upvotes. The platform tracks these metrics and calculates the curation reward: `(New Users Driven × 0.4) + (Comment Upvotes × 0.2)` → 250×0.4 + 40×0.2 = 100 + 8 = 108 Joey Tokens.

**Reward Crediting Phase**: The 108 Joey Tokens are credited to User B’s wallet within 24 hours. User B can choose to hold the tokens, use them for premium features, or withdraw them to an exchange.

#### Use Case 3: Penalty for Low-Value Content

**Content Flagging Phase**: User C posts a short, irrelevant message: "Today’s weather is nice—anyone want to chat?" The AI flags it as low-value content (fails to meet the "informational value" threshold), and 15 users report it as spam within 24 hours.

**Penalty Execution Phase**: Since the content is confirmed as low-value/spam, the platform imposes a penalty of 5 Joey Tokens (deducted from User C’s wallet). If User C accumulates 3 such penalties within a month, their account is temporarily restricted from posting (for 7 days) to deter repeated violations.

### 2.3 Value Proposition

**For Content Creators**: Eliminate reliance on ad revenue and fan base size—earn tokens directly based on content quality. Monetization is faster (rewards within 7-8 days) and more equitable (higher-quality content earns more, regardless of follower count).

**For Content Consumers/Curators**: Save time by accessing filtered high-value content; earn tokens simply by sharing or engaging with useful information—turning "passive browsing" into "active value creation with rewards."

**For the Ecosystem**: Create a self-sustaining cycle of "high-value content → token rewards → more high-value contributions." The token ensures that value is distributed to all participants (creators, curators, users) rather than being concentrated in platform hands.

## 3. Tokenomics & Utility Design

### 3.1 Token Utility

#### Token Type: ERC20 Utility Token (Joey Token)

**Justification**: The Joey Token’s core role is to facilitate value exchange and incentives within the ecosystem—no promises of dividends, equity, or passive investment returns are made, avoiding the characteristics of a security token. Its utility is strictly tied to platform functionality (rewards, payments, governance), aligning with global regulatory definitions of a "utility token" and reducing compliance risks.

<img title="" src="file:///C:/Users/Zlata/AppData/Roaming/marktext/images/2025-10-14-16-30-14-image.png" alt="" width="603">

The "reward earnings" function directly addresses the "inefficient creator monetization" and "lack of curation incentives" problems—tokens reward value creation, motivating more high-quality content and curation.

The "penalties & constraints" function solves "information overload" by discouraging low-value content posting, maintaining the platform’s focus on useful information.

### 3.2 Token Audience/Target Users

<img title="" src="file:///C:/Users/Zlata/AppData/Roaming/marktext/images/2025-10-14-16-30-58-image.png" alt="" width="740">

#### Incentive Logic: "Value Contribution = Token Rewards"

All audience segments earn tokens based on their contribution to the ecosystem’s core goal (promoting high-value information). Creators contribute "original value," curators contribute "dissemination value," and casual users contribute "validation value" (upvoting quality content)—ensuring every participant is motivated to support the ecosystem.

### 3.3 Initial Token Distribution & Supply

#### Total Supply & Deflation Mechanism

**Total Supply**: A fixed 1 billion Joey Tokens (no增发, preventing inflation from diluting user rewards).

**Deflation Mechanism**: 10% of all token penalties (e.g., deductions for low-value content) and 5% of premium feature revenue are burned (sent to a dead address). This creates a slow deflationary effect (estimated 1.5% annual burn rate), increasing token scarcity over time and protecting long-term holder value.

#### <img title="" src="file:///C:/Users/Zlata/AppData/Roaming/marktext/images/2025-10-14-16-31-35-image.png" alt="" width="699">

## 4. Technical Considerations

### 4.1 Blockchain Selection: Base Chain

#### <img title="" src="file:///C:/Users/Zlata/AppData/Roaming/marktext/images/2025-10-14-16-32-01-image.png" alt="" width="751">

### 4.2 Token Standard: ERC20

#### Rationale

**Functional Fit**: ERC20 supports core functions required by the project—token transfers, balance checks, and authorized payments. These are essential for reward distribution, penalty deductions, and premium feature payments.

**Compatibility**: All major wallets (MetaMask, Trust Wallet) and exchanges (Binance, Coinbase) support ERC20 tokens. This ensures users can easily store, trade, and withdraw Joey Tokens—enhancing liquidity and user trust.

**Development Efficiency**: Mature ERC20 templates (e.g., OpenZeppelin ERC20) reduce development time and risk. The team can focus on custom logic (e.g., reward calculations) rather than building basic token functionality from scratch.

**Scalability**: ERC20 can be extended with additional features (e.g., token locking for governance) in the future. If the project adds community voting later, it can integrate ERC20Votes (an ERC20 extension) without reissuing the token.

### 

## 5. Ethical Implications, Risk Management & Legal Considerations

### 5.1 Ethical Implications

<img src="file:///C:/Users/Zlata/AppData/Roaming/marktext/images/2025-10-14-16-32-24-image.png" title="" alt="" width="752">

### 5.2 Risk Management

<img src="file:///C:/Users/Zlata/AppData/Roaming/marktext/images/2025-10-14-16-32-41-image.png" title="" alt="" width="752">

### 5.3 Legal & Regulatory Awareness

#### 1. Token Classification (Based on the Howey Test)

The Howey Test defines a security as an "investment of money in a common enterprise with a reasonable expectation of profits derived from the efforts of others." Joey Token does not meet this definition:

No "investment of money": Users earn tokens via content creation/curation (not by investing fiat or crypto).

No "profit expectation from others": Rewards depend on the user’s own contributions (e.g., content quality, curation impact)—not the platform team’s operational efforts.

Utility-focused: The token’s primary purpose is to facilitate platform functions (rewards, payments)—not to generate passive returns. 
Thus, Joey Token qualifies as a utility token, not a security, under most global regulatory frameworks.

<img src="file:///C:/Users/Zlata/AppData/Roaming/marktext/images/2025-10-14-16-33-09-image.png" title="" alt="" width="766">

## Conclusion

web3Joeypouch addresses the critical flaws of modern social media—information overload and inefficient value distribution—by leveraging tokenization. The project’s ERC20 Joey Token creates a direct link between value creation (high-quality content, curation) and rewards, while the Base Chain ensures low-cost, scalable operations. Ethical and regulatory risks are mitigated through fair reward mechanisms, accessible onboarding, and compliance with global rules. By shifting social media from an "attention economy" to a "value economy," web3Joeypouch offers a viable, innovative solution that benefits creators, curators, and users alike—aligning perfectly with the requirements of the Tokenization Project Proposal assignment.
