class Singleton{
        constructor(name){
            this.name = name;
        }
        getName(){
            console.log(this.name)
        }
        static getInstance(name){
        
            if(!this.instance){
                this.instance = new Singleton(name)
            }
            return this.instance;
            
        }
        static getInstance(name) {
            if (!this.instance) {
                this.instance = new Singleton(name);
            }
            return this.instance;
        }
    }
    Singleton.instance = null;
    var a =Singleton.getInstance('a')
    var b = Singleton.getInstance('b')
    b.getName();
    