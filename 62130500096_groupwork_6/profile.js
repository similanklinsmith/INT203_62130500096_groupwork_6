const constraints ={
    username:{
        presence: true
    },
    email:{
        presence: true,
        email: true
    },
    password:{
        presence: true,
        length:{
            minimum: 4,
            message: "must be at least 4 characters"
        }
    },
    confirmPassword:{
        presence: true,
        equality: {
            attribute: "password",
            message: "Passwords do not match"
          }
    }
}
const app = {
        data() {
            return {
                name: 'Similan Klinsmith',
                dateMember: 'Oct 29',
                follow: 2543,
                post: 255,
                comment: 147,
                favorite: 72,
                image: './images/deep.jpg',
                alreadyFollow: true,
                username: null,
                email: null,
                password: null,
                confirmPassword: null,
                errors: null
            }
        },
        methods:{
            checkForm(){
                this.errors = validate( {username: this.username,
                                        email: this.email,
                                        password: this.password,
                                        confirmPassword: this.confirmPassword},
                                        constraints)
                                        if (this.errors) {
                                            
                                        }else{
                                            alert("Registered success")
                                        }
                                    
            }
        }
}
var mountedApp = Vue.createApp(app).mount('#app')