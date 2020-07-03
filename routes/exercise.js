const router = require("express").Router();
let Exercise = require("../models/exercise.model") // Importing the Exercise model from the models folder

// /exercises/
router.get("/", (req, res) => {
    Exercise.find() // Find ALL exercises in the database
        .then(exercises => res.json(exercises)) // Then respond or send with exercises in json
        .catch(err => res.status(400).json("Error: " + err)); // If error, send status code and error message
})

router.post("/add", (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    })

    newExercise.save() // Save into database
        .then(() => res.json("Exercise added.")) // If successful, send json response
        .catch(err => res.status(400).json("Error: " + err)) // If error, send status code and error message
})

// CRUD indidual exercises by ID

router.get("/:id", (req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json("Error: " + err))
})

router.delete("/:id", (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json("Deleted succesfuly."))
        .catch(err => res.status(400).json("Error: " + err))
})

router.put("/:id", (req, res) => {
    Exercise.findByIdAndUpdate(req.params.id) 
        .then(exercise => {
            exercise.username = req.body.username,
            exercise.description = req.body.description,
            exercise.duration = Number(req.body.duration),
            exercise.date = Date.parse(req.body.date)

            exercise.save()
                .then(() => res.json("Exercise is updated."))
                .catch(err => res.status(400).json("Error: " + err))
        })
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;