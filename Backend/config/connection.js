const mongoose = require('mongoose');
const createAdminUser = require('../seeder/adminSeed');

await mongoose.connect(process.env.MONGODB_SRV)
    .then(async(e)=> { await createAdminUser(); console.log(`Connected to mongoDB:${e.connection.host}`) })
    .catch((e)=>console.log(e));