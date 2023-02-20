const {LinkedinPostModel} = require("../model/linkedinpost.model")

const getPosts = async(req,res)=>{
    try {
        const Allpost = await LinkedinPostModel.find()
        console.log("All Posts")
        res.send(Allpost)
    } catch (error) {
        console.log(error)
        res.send({"msg":"Something went wrong"})
    }
}

const getSinglePost = async(req,res)=>{

    const {_id} = req.params;
    try {
        const SinglePost = await LinkedinPostModel.find({_id})
        console.log("Single Posts")
        res.send(SinglePost)
    } catch (error) {
        console.log(error)
        res.send({"msg":"Something went wrong"})
    }
}

const AddPost = async(req,res)=>{
    const payload = req.body
    try {
        const data = LinkedinPostModel(payload)
        await data.save()
        console.log("User Successfully added post")
        res.send({"msg":"User Successfully added post"})
    } catch (error) {
        console.log(error)
        res.send({error:"Post not added"})
    }
}

const UpdatePost = async(req,res)=>{
    const payload = req.body
    const  {_id} = req.params
    try {
        await LinkedinPostModel.findByIdAndUpdate({_id}, payload)
        console.log("Successfully update post")
        res.send({"msg":"Successfully update post"})
    } catch (error) {
        console.log(error);
        res.send({error:"Post not updated"})
    }
}

const DeletePost = async(req,res)=>{
    const payload = req.body
    const  {_id} = req.params
    try {
        await LinkedinPostModel.findByIdAndDelete({_id})
        console.log("Successfully deleted post")
    } catch (error) {
        console.log(error);
        res.send({error:"Post not deleted"})
    }
}

module.exports = {
    getPosts,
    getSinglePost,
    AddPost,
    UpdatePost,
    DeletePost
}
