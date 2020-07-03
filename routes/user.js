const router = require("express").Router()
let User = require("../models/user.model") // Using the User model in the models folder

router.get("/", (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error: " + err))

    // User.find({}, (err, users) => {
    //     if (!err) {
    //         res.json(users)
    //     } else {
    //         res.status(400).json('Error: ' + err)
    //     }
    // })
})

router.post("/add", (req, res) => {
    // Get post data
    const username = req.body.username;
    
    // Create a new user based on User model
    const newUser = new User({
        username
    });

    // Save user in database
    newUser.save()
        .then(() => res.json("User added"))
        .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router;