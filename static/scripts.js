const app = Vue.createApp({
    delimiters: ['[[', ']]'],
    data(){
        return{
        message: 'hello world'
        }
    },
    methods: {
        loadBooks(){
            console.log('i work')
    }
},
    mounted(){
       this.csrfToken = document.querySelector("input[name=csrfmiddlewaretoken]").value
    }
})
