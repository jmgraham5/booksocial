const app = Vue.createApp({
    delimiters: ['[[', ']]'],
    data(){
        return {
            csrfToken: '',
            counter: 0
        }
    },
    methods: {
        like(){
            
            this.counter ++;
        },
        dislike(){
            
            this.counter --;
        }
    },  
    mounted(){
       this.csrfToken = document.querySelector("input[name=csrfmiddlewaretoken]").value,
       console.log('hello')
    }
})
