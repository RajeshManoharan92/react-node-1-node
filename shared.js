const { MongoClient } = require('mongodb')



module.exports = {
    selecteddb: {},

    async connect() {
        try {
            const response = await MongoClient.connect("mongodb+srv://mentor:BVJTLsZbBW668yRK@cluster0.n7jmf.mongodb.net/?retryWrites=true&w=majority")
            this.selecteddb = response.db("product")
           
        }
        catch (err) {
            console.log(err)
        }
    }
}