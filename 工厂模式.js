var userFactory = function(role){
    function Admin(){
        this.name = "admin"
        
    }
    function user(){
        this.name = 'user'
    }
    switch(role){
        case 'admin':
            return new Admin()
            break
        case 'user':
            return new user()
            break
        default:
            throw new Error('error') 
    }
}