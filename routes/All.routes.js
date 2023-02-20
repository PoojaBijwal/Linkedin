const express = require("express")

const {Register,Login} = require("../controller/authentication")

const { getPosts,getSinglePost,AddPost,UpdatePost,DeletePost} = require("../controller/linkedinpost")

const {requiredLogin}= require("../middlewares/login")

const userRouter = express.Router()

userRouter.post("/register",Register)


userRouter.post("/login",Login)

userRouter.use(requiredLogin)
userRouter.get("/", getPosts)
userRouter.post("/:id", getSinglePost)
userRouter.post("/posts", AddPost)
userRouter.patch("/update/:id", UpdatePost)
userRouter.post("/delete/:id", DeletePost)




module.exports = {
    userRouter
}