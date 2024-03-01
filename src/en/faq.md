# FAQ

FAQ in English is currently being revised and is currently only available in a reduced form. The German FAQ is complete. 

## Where can I get support if I have questions?
DFX offers support in different ways. You can find information about our products and our service on our homepage or here in the FAQ. We generally recommend to use the support of our moderators, because this way we can guarantee the fastest processing. Please join our Telegram group (https://t.me/DFXswiss_en). Our moderators will help you with technical issues and also with questions regarding the transaction status. Otherwise, you can also contact our support: support@dfx.swiss

## What exactly does the DFX service include?
DFX is the bridge between the bank and the crypto space, allowing private and corporate customers to buy and sell cryptocurrencies. We are working to expand our offering to as many blockchains as possible. Information about our current offer can be found on our homepage.

## Is DFX regulated? What does that mean for me?
Yes. The regulation can be found here. As a company regulated in Switzerland, DFX is required to comply with applicable laws regarding anti-money laundering. This includes, among other things, that verification is required for transactions above a certain volume. You can view your approved trading volume on your payment page, which you can access via your portfolio under "My DFX". You can start the KYC process directly there or request a higher limit if you have already completed the KYC. We are also obliged to use all the information we have about the user to detect irregularities or anomalies in the user's behavior. For example, if someone buys and sells at the same time.

## How does DFX have access to my money?
DFX has access to the customer's money only during the buying/selling process. Once the money is paid out to the wallet, only the customer has access as it is a non-custodial wallet. DFX does not manage the customer's funds in any way.

## Which countries are served by DFX?
Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France (incl. Overseas Territories, DOM, no TOM), Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Lithuania, Luxembourg, Netherlands (incl. Overseas Territories), Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden, Liechtenstein, Norway, Feroe Islands, Greenland, Switzerland, Guernsey Island, Jersey Island, Monaco, San Marino, United Kingdom, Israel.

## What happens if I exceed my individual trading limit?
Once you exceed the above limit, a KYC process is required. After the first successful transaction, there is an option in the app to complete the personal verification (KYC). If the KYC is not completed after exceeding the limit, DFX will automatically return the transaction after 7 days.

## How can I integrate DFX's IFRAME widget into my own website?

This is super easy, you just need the following code:

```
<script defer="defer" src="https://services.dfx.swiss/widget/v1.0"></script>
<div style="width:100%; max-width:450px; height:700px;">
   <dfx-services mode="iframe" lang="en" refcode="000-000" wallet="IFRAME">Loading ...</dfx-services>
</div>
```

The parameters can also be customized.    
lang: "de" stands for German, "en" can be used for English.   
mode="home" stands for the start page.   
With mode="buy" you get directly to the buy page.   
With mode="buy-erc20" you go directly to the ERC 20 selection page.   
With refcode="000-000" you can enter your own personal Ref Code.   
wallet="IFRAME" is needed to give your own wallet id.   
This is useful if you want to use your own personal IFRAME solution with a specially selected selection of coins to be offered.   
   
Note: Technically it is not an IFRAME but a web widget. This works much better than an IFRAME.    
If you have any questions, our moderators in the Telegram group https://t.me/DFXswiss_en or our support at support@dfx.swiss will be happy to help you.    

## How can I "sell" Bitcoin in the DFX Wallet?

The sell function is unfortunately not yet built directly into the app itself, but we are working at full speed to build this in as well. Until then, selling is only possible via the MyDFX function. This works as follows:

1. click on "DFX Services" in the DFX Bitcoin Wallet.
2. now opens a website for buying bitcoin. Click on the menu icon at the top right and then on "My DFX". 3.
3. here you can now create a "Sell" route, for the sale of Bitcoin.
4. once this sell route is created, you will receive a Blockcahin deposit address. Every time you send bitcoin to this address, you will receive fiat paid out to your IBAN.
Copy the deposit address, go back to the DFX wallet and send the desired amount to this deposit address. Done.
6. you will be informed about the status of the sale by email. 

## How to use your own LND-Hub
You can connect the DFX BTC Taro wallet to your own LND hub. The condition is that your server meets all the requirements according to the DFX protocol. 

Hint:
There is currently no plug and play solution! If you run a LND hub as a hobby you will most likely not get it working. A plug and play solution is planned, but not yet available. 

If you are interested in a professional solution and invest several days in setting up your own LND Hub and also have the necessary technical knowledge, then please contact our support. We are happy to help. 

## Command Line Login

You can also log in to DFX by manually entering a blockchain address and a suitable signature. To do this, go to https://services.dfx.swiss/login and click on "Command Line". First you will be asked for your blockchain address. After entering a valid blockchain address, you will receive a message to sign. Sign this message with your wallet and enter the signature in the field below. Click on "Login" to verify the signature and you will be logged in. 

## Why does DFX require a full KYC, even if I have sent less than CHF 1'000?

If DFX requires a complete KYC, this will be explained in the e-mail sent to the customer. So the best way to find out more details is to read this email. In general, the reasons can be as follows:

- The amount of 1'000 per 24h was exceeded because several transactions were made. The time at which the money actually arrives at DFX is decisive for the time stamp. 
- The sender has a name that appears on sanction or PEP lists. You can check whether this applies to you with this free tool: https://dilisense.com/en
- The amount of CHF 50'000 per calendar year was exceeded.
- Money was sent to our bank in Luxembourg. IBAN starting with LU. This bank offers SEPA Instant and only accepts funds from fully verified customers. 
- The money was sent by a bank that is very often associated with fraud. (Very rare)

The customer has 2 days to execute the KYC. As a rule, the KYC process only takes 5 minutes. If the customer decides against the KYC, or if the customer does not respond to the email from DFX, then the money will be returned to the customer in full after 2 days. 

## What is the status of my transaction? I have not received my crypto assets.
If you have made a transaction and have questions about this transaction because you have not yet received the crypto assets, you have the following options:
- If it was a bank transaction, we strongly recommend waiting 2 working days. Bank transactions are usually processed within a few hours, but in extreme cases can take up to 3 days. We therefore recommend waiting 2 days before starting a follow-up enquiry.
- You can ask in the DFX Telegram chat https://t.me/DFXswiss. The moderators there respond very quickly to enquiries and can usually help quickly. Please note that a DFX employee will never write to you via private message! If a supposed DFX employee writes to you via private message, then it is a scammer and not a real DFX employee. DFX employees will only write to you in a public Telegram group or in a private chat that was started and opened by you, but never in a private chat that was not started by you!
- You can write an e-mail to support (at) dfx.swiss. It is important to include all relevant information about the transaction.

## Which data must be included in a support request?

For bank transactions:
1. the purpose of use. The most important thing in your personal purpose of use. Also called payment notification or reference. This is the most important information when contacting support. It is used to assign each transaction to a corresponding customer account and the desired purchase asset. Your enquiry cannot be processed without this reference. The reference has the following format: xxxx-xxxx-xxxx and you will find it in the corresponding purchase screen directly below the IBAN and BIC.
<img width="675" alt="Bildschirmfoto 2024-03-01 um 17 30 46" src="https://github.com/DFXswiss/docs/assets/142087526/272d5611-be70-44bf-9ade-24d128e873ce">

3. your IBAN
4. your correct name, which is also the name of your bank account. 
     
