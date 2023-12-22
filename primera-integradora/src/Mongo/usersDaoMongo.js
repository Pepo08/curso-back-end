class UserDaoMongo{
    constructor(){ this.model = userModel}
    async getUsers(){
        try{
            return await this.model.find({}) 
        }catch(error){
            console.log(error)
        }
    }
    async getUser(uid){
        try{
            return await this.model.find({_id:uid}) 
        }catch(error){
            console.log(error)
        }
    }
    async createUsers(newUser){
        try{
            return await this.model.create(newUser) 
        }catch(error){
            console.log(error)
        }
    }
    async updateUsers(uid){
        try{
            return await this.model.find({_id:uid})
        }catch(error){
            console.log(error)
        }
    }
    async daleteUsers(uid){}
}

module.exports = UserDaoMongo