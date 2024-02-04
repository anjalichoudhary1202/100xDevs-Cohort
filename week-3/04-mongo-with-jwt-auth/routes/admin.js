const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const { Admin, User, Course } = require("../db");

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username: username,
        password: password
    })
    .then(()=>{
        res.json({
            msg: "Admin created successfully"
        })
    })
    .catch(()=>{
        res.json({
            msg: "Admin not created successfully"
        })
    })
});

router.post('/signin',async  (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username, 
        password
    })
    if(user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token
        })
    } else{
        res.status(411).json({
            msg: "Incorrect username and password"
        })
    }

});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    //zod for input validation
    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    })

    res.json({
        msg: "course created successfully", courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});

    res.json({
        courses: allCourses
    })
});

module.exports = router;