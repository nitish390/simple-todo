const dbToDo = require('../models/todo');

module.exports = (req, res) => {
    if (!req.body.taskName || !req.body.taskDesc || req.body.taskDesc == '' || req.body.taskName =='') {
        res.status(400).json({
            success: false,
            msg: "Please enter all details"
        })
    } else {
        console.log("Here")
        new dbToDo({
            taskName: req.body.taskName,
            taskDesc: req.body.taskDesc,
            createdAt: new Date()
            
        }).save((err, data) => {
            if (err) {
                console.log(err)
                res.json({
                    success: false,
                    msg: "Something went wrong. Please try again after some time."
                })
            } else {
                res.json({
                    success: true,
                    msg: "New data created.",
                    data: data
                })
            }
        })
    }

}