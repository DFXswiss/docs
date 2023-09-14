# FAQ

FAQ in English is currently being revised and is currently only available in a reduced form. The German FAQ is complete. 


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
There is currently no plug and play solution! If you run a LND hub as a hobby you will most likely not get it working. 

If you are interested in a professional solution and invest several days in setting up your own LND Hub and also have the necessary technical knowledge, then please contact our support. We are happy to help. 
