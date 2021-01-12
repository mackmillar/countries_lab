import Vue from 'vue';

document.addEventListener('DOMContentLoaded', function(){
    new Vue({
        el: '#app',
        data: {
            totalPop: 0,
            countriesData: []
        },
        mounted(){
            this.fetchTotalPop();
        
          },
        computed: {

            totalPopulation: function(){
                return this.countriesData.reduce((total, country) => {
                    return total + country.population;
            
                }, 0);

        },},
        
        
        
        methods: {
            fetchTotalPop: function() {
                fetch("https://restcountries.eu/rest/v2/all")
                    .then(response => response.json())
                    .then(data => this.countriesData = data);
                    
            }
        }

        });
});