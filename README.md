# vue-currency-converter
Currency Converter made with Vue.js

To run this app, first you need to generate free api key on https://free.currencyconverterapi.com/, and then edit the app.js to put your api key on

    data: {
        currencies: {},
        api_key: "your_api_key",
        amount: 0,
        from: 'EUR',
        to: 'USD',
        result: 0,
        loading: false
    },

And then you can open the index.html file on browser, or you also can use live-server.

This is the display of the app
<img src="pict/pict1.png">

