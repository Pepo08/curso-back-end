const {connect} = require("mongoose")

exports.conectDb= async () =>{
    await connect("mongodb")
}