
import { Users } from '../models/FakeUser.js'


export const showFakeUsers = async (req, res) => {
    try {
        const AllFakeUsers = await Users.find()
        if (!AllFakeUsers) {
            return res.status(404).jsohn({
                success: false,
                message: "no User Found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Users Found",
            data: AllFakeUsers
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong"
        })
    }
}
export const AddFakeUser = async (req, res) => {
    try {

        const { fullName, userName, email, phone } = req.body
        console.log("data", fullName, userName, email, phone)
        const isFakeUserExist = await Users.findOne({ userName })
        if (isFakeUserExist) {
            return res.status(409).json({
                success: false,
                message: "username already exists"
            })
        }
        const currentFakeUser = await (Users.create({ fullName, userName, email, phone }))

        return res.status(200).json({
            success: true,
            message: "new user added",
            data: currentFakeUser
        })



    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong here..."
        })
    }
}
export const deleteFakeuser = async (req, res) => {
    try {
        const { username } = req.params;

        if (!username) {
            return res.status(400).json({
                success: false,
                message: "username param is required"
            });
        }

        const deletedUser = await Users.findOneAndDelete({ userName: username });

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "user deleted successfully",
            data: deletedUser
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error"
        });
    }
};

export const updateFakeUser = async (req, res) => {

    const { _id, userName, fullName, email, phone } = req.body

    try {
        // Find by ID and update
        const updatedUser = await Users.findByIdAndUpdate(
            _id,
            { fullName,userName, email, phone },
            { new: true }  
        );

        if (!updatedUser) return res.status(404).send({ error: "User not found" });

        res.json(updatedUser); 
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}