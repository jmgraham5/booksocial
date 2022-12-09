const app = Vue.createApp({
    delimiters: ['[[', ']]'],
    data(){
        return {
            csrfToken: '',
            counter: 0
        },
        axios({
            method: 'GET',
            url: 'https://www.googleapis.com/books/v1',
            headers: {
                key : "AIzaSyD6Kae-WT53nONZryAncj-oJEUf5ZWy5ms"
            }
        }).then((response) => {
            console.log(response.data)
        })
    },
    methods: {
        
    },  
    mounted(){
       this.csrfToken = document.querySelector("input[name=csrfmiddlewaretoken]").value
    }
})
