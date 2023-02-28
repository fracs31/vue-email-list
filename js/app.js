const { createApp } = Vue; //Vue
//Vue app
createApp({
    //Dati
    data() {
        return {
            emails: [], //lista di email
        }
    },
    //Metodi
    methods: {
        //Metodo per ottenere le email dall'API
        fetchEmail() {
            //Richiedo la email all'API
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
                let email = response.data.response; //salvo l'email generata dall'API
                this.emails.push(email); //inserisco l'email generata dall'API dentro l'array di email
            });
        }
    },
    //Mounted
    mounted() {
        //Ciclo
        for (let i = 0; i < 10; i++) {
            this.fetchEmail(); //prendo le email
        }
    }
}).mount('#app');