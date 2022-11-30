const app = Vue.createApp({
    delimiters: ['[[', ']]'],
    data(){
        return {
            csrfToken: '',
            counter: 0
        }
    },
    methods: {

    },  
    mounted(){
       this.csrfToken = document.querySelector("input[name=csrfmiddlewaretoken]").value,
       console.log('hello')
    }
})
