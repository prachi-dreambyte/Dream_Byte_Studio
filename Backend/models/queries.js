const moongoose = require('mongoose');
const Schema = moongoose.Schema;
const { toJSON, paginate } = require('./plugins');

const queriesSchema = new Schema({ 
    firstName: {
        required : true,
        type: String,
        trim: true
    },
    lastName: {
        required : true,
        type: String,
        trim: true
    },
    email: {
        required : true,
        type:JSON,
    },
    number: {
        required : true,
        type: String,
        trim: true 
    },
    sigFirstName:{
        type : String,
        trim: true 
    },
    sigLastName:{
        type : String,
        trim: true 
    },
    celebrationDetails: {
        required : true,
        type: String,
        trim: true 
    },
    eventLocation:{
        type : String,
        trim: true 
    },
    eventDate:{
        type : String,
        trim: true 
    },
    status:{
        type : String,
        required : true,
        default:'publish',
    }
}, {timestamps : true});

queriesSchema.plugin(toJSON);
queriesSchema.plugin(paginate);

const model = moongoose.model("queries", queriesSchema)
module.exports = model;

