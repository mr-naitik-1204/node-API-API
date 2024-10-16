let Usermodal = require('../modal/UserM')

exports.createdata = async (req, res) => {
    const data = req.body
    try {
        const createdata = await Usermodal.create(data)
        res.status(200).json({
            status: "success",
            Message: 'data enter succes',
            Data: createdata
        })
    } catch (error) {
        res.status(404).json({
            status:"fail",
            Message:"not enter"
        })

    }
}

exports.showdata=async(req,res)=>{
    const showdata=await Usermodal.find()

    try {
        res.status(200).json({
            status: "success",
            Message: 'all data show',
            Data: showdata
        })
    } catch (error) {
        res.status(404).json({
            status:"fail",
            Message:error.Message,
            data:[]
        })
    }
}