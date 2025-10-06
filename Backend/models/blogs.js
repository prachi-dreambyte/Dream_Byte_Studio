const moongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const Schema = moongoose.Schema;

const BlogsSchema = new Schema({ 
    title: {
        required : true,
        type: String,
        trim: true
    },
    slug: {
        required : true,
        type: String,
        trim: true,
        unique: true
    },
    featured_image: {
        required : true,
        type:JSON,
    },
    description: {
        required : true,
        type: String,
        trim: true 
    },
    content:{
        required:true,
        type:JSON
    },
    views: {
        type: Number
    },
    comments:[{
        type: Schema.Types.ObjectId, 
        ref : "comments"
    }],
    status:{
        type : String,
        required : true,
        default:'publish',
    }
}, {timestamps : true});

// add plugin that converts mongoose to json
BlogsSchema.plugin(toJSON);
BlogsSchema.plugin(paginate);

const model = moongoose.model("blogs", BlogsSchema)
module.exports = model;

