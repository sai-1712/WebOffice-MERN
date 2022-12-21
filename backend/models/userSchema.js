const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const EmployeeSchema = require("./employeeSchema");
// const AttendanceSchema = require("./attendanceSchema");
// const ClientSchema = require("./clientSchema");
// const ProjectSchema = require("./projectSchema");
// const LeaveSchema = require("./leaveSchema");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    tokens: [
        {
            token: {
                type: String,
            },
        },
    ],
    employees: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "employeeSchema",
        },
    ],
    clients: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "clientSchema",
        },
    ],
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project"
            // projectName:{
            //     type:String,
            //     required:true
            // },
            // clientName:{
            //     type:String,
            //     required:true
            // },
            // startDate:{
            //     type:Date,
            //     required:true
            // },
            // endDate:{
            //     type:Date,
            //     required:true
            // },
            // budget:{
            //     type:String,
            //     required:true
            // },
            // priority:{
            //     type:String,
            //     required:true
            // },
            // projectLeader:{
            //     type:String,
            //     required:true
            // },
            // team : { 
            //     type : Array , default : [],
            //     required:true
            // },
            // pdescription:{
            //     type:String,
            //     required:true
            // },
            // progress:{
            //     type: String,
            //     default: 'Pending'            
            // }
        }   
    ],
    leaves: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "leaveSchema",
        },
    ],
    attendance: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "attendanceSchema",
        },
    ],
});

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) this.password = await bcrypt.hash(this.password, 12);
    next();
});

userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign(
            { _id: this._id },
            "iamvaibhavdasaristudyinginindianinstituteofinformationtechnologysricity"
        );
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
};

module.exports = mongoose.model("User", userSchema);







// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// class User {
//     constructor() {
//         this.name = {
//             type: String,
//         };
//         this.email = {
//             type: String,
//         };
//         this.password = {
//             type: String,
//         };
//         this.tokens = [
//             {
//                 token: {
//                     type: String,
//                 },
//             },
//         ];
//     }
// }
// const userSchema = new mongoose.Schema(new User());

// userSchema.pre("save", async function (next) {
//     if (this.isModified("password")) {
//         this.password = await bcrypt.hash(this.password, 12);
//     }
//     next();
// });


// userSchema.methods.generateAuthToken = async function () {
//     try {
//         let token = jwt.sign(
//             { _id: this._id },
//             "iamvaibhavdasaristudyinginindianinstituteofinformationtechnologysricity"
//         );
//         this.tokens = this.tokens.concat({ token: token });
//         await this.save();
//         return token;
//     } catch (error) {
//         console.log(error);
//     }
// };





// module.exports = mongoose.model("User", userSchema);
