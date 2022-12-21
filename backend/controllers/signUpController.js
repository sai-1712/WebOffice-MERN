const User = require("../models/userSchema");

exports.signup = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(422).json({ error: "enter fields" });
    }
    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "email exists" });
        }

        const user = new User({ name, email, password });
        await user.save();
        
        token = await user.generateAuthToken();
        res.cookie("jwttoken", token, {
            expires: new Date(Date.now() + 100000000),
            httpOnly: true,
        });

        res.status(201).json({data:{user},message:"signed up successfully"});

    } catch (err) {
        console.error(err);
        res.status(404).json({ message: "failed to signup", error: err });
    }
};
