const moongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const slugify = require('slugify');
const Schema = moongoose.Schema;

const ServiceSchema = new Schema({ 
    title: {
        required : true,
        type: String,
        trim: true
    },
    slug: {
        type: String,
        trim: true,
        unique: true,
        sparse: true,
    },
    featured_image: {
        required : true,
        type:JSON,
    },
    icon: {
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
    status:{
        type : String,
        required : true,
        default:'publish',
    }
}, {timestamps : true});

// add plugin that converts mongoose to json
ServiceSchema.plugin(toJSON);
ServiceSchema.plugin(paginate);

  
ServiceSchema.pre('save', async function (next) {
    const service = this;
        if(service.title){
            service.slug = slugify(service.title, { lower: true });
        }
    next();
  });

const model = moongoose.model("services", ServiceSchema)
module.exports = model;

