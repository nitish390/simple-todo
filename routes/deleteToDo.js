const dbToDo = require('../models/todo');

module.exports = (req, res) => {
    if (!req.body._id) {
        res.status(400).json({
            success: false,
            msg: "Please enter all details"
        })
    } else  {
        dbToDo.deleteOne({_id :req.body._id }, (err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Please try again after some time"
                })
            } else {
                res.json({
                    success: true,
                    msg: "All data",
                    data: data
                })
            }
        })
    }

}