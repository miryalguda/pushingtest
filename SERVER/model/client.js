const  mongoose = require ("mongoose")

const ClientSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true,
      },

    password: {
        type: String,
        required: true,
      },

})

const ClientModel = mongoose.model ("clients", ClientSchema)
module.exports = ClientModel