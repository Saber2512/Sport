// import mongoose mosule
const mongoose=require("mongoose");
// create Match Schema 
const teamSchema=mongoose.Schema({
    name: String,
    stadium: String,
    owner: String,
    fondation: String,

});
// affect team Schema to Mode Name Match
const team=mongoose.model("Team", teamSchema);
// Make match exportable
module.exports=team;