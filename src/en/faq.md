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
