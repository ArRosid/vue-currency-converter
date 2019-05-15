new Vue({
    el: '#app',
    
    data: {
        currencies: {},
        api_key: "your_api_key",
        amount: 0,
        from: 'EUR',
        to: 'USD',
        result: 0,
        loading: false
    },
    
    mounted() {
        this.getCurrencies()
    },

    computed: {
        
        formattedCurrencies() {
            return Object.values(this.currencies)
        },

        calculateResult() {
            return (Number(this.amount) * this.result).toFixed(3);
        },

        disabled() {
            return this.amount === 0 || !this.amount || this.loading;
        }

    },

    methods: {
        
        getCurrencies() {
            const currencies = localStorage.getItem('currencies');

            if (currencies) {
                this.currencies = JSON.parse(currencies);

                return;
            }

            axios.get(`https://free.currconv.com/api/v7/currencies?apiKey=${api_key}`)
            .then(response =>{
                this.currencies = response.data.results;
                localStorage.setItem('currencies', JSON.stringify(response.data.results));
            })
        },

        convertCurrency() {
            const key = `${this.from}_${this.to}`
            this.loading = true;
            axios.get(`https://free.currconv.com/api/v7/convert?q=${key}&apiKey=${api_key}`)
             .then((response) => {
                 this.loading = false;
                 console.log(response);
                 this.result = response.data.results[key].val;
             })
        }
    },

    watch: {
        from() { //ketika from yang ada di data diganti,
            this.result = 0;
        },

        to() {
            this.result = 0;
        }
    }


})