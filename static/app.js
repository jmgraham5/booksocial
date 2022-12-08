const app = Vue.createApp({
    delimiters: ['[[', ']]'],
    data(){
        return {
            csrfToken: '',
            counter: 0
        }
    },
    methods: {
        getList() {
            this.axios.get(api).then((response) => {
                console.log(response.data)
            })
        }
    },  
    mounted(){
       this.csrfToken = document.querySelector("input[name=csrfmiddlewaretoken]").value,
       console.log('hello')
    }
})
