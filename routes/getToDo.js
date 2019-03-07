const dbToDo = require('../models/todo');

var getTodo = (req, res) => {
    dbToDo.find({}, (err, data) => {
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
module.exports = getTodo