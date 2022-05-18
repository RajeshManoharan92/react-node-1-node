const { ObjectId } = require("mongodb")
const mongo = require("../shared")

module.exports.getproductdetails = async (req, res) => {
    try {
        const response = await mongo.selecteddb.collection("details").find().toArray()
        res.send(response)
    }
    catch (err) {
        console.log(err)
    }
}

module.exports.postproductdata = async (req, res) => {
    try {
        const response = await mongo.selecteddb.collection('details').insertOne(req.body)
        res.send(response)
    }
    catch (err) {
        console.log(err)
    }
}

module.exports.Updateproductdata = async (req, res) => {
    try {
        const response = await mongo.selecteddb.collection('details').findOneAndUpdate({ _id: ObjectId(req.params.id) },
            { $set: { ...req.body } },
            { runValidators: true, new: true })
        res.send(response)
    }
    catch (err) {
        console.log(err)
    }
}


module.exports.deleteproductdata = async (req, res) => {
    try {
        const response = await mongo.selecteddb.collection('details').remove({ _id: ObjectId(req.params.id) })
        res.send(response)
    }
    catch (err) {
        console.log(err)
    }
}