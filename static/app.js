const app = Vue.createApp({
    delimiters: ['[[', ']]'],
    data(){
        return {
            csrfToken: '',
            counter: 0,
            search: '',
            list: []
        }
        
    },
    methods: {

    },
    beforeMount(){
        axios({
            method: 'GET',
            url: "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=A39vwwnDvytjcGqAVUsfwQZ9x9nbLKDZ",
            headers: "Accept: application/json"
        }).then((response) => {
            let current = response.data.results
            this.list = current['books']
            console.log(this.list)
        })
    },
    mounted(){
       this.csrfToken = document.querySelector("input[name=csrfmiddlewaretoken]").value
    }
})
