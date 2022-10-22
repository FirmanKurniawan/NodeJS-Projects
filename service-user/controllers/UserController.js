const { User, RefreshToken } = require("../models");
const bcrypt = require("bcrypt");
const validator = require("fastest-validator");
const v = new validator();

module.exports = {
    index: async (req, res) => {
        const userIds = req.query.user_ids || [];

        const sqlOptions = {
            attributes: ["id", "name", "email", "profession", "role", "avatar"],
        };

        if (userIds.length) {
            sqlOptions.where = {
                id: userIds,
            };
        }

        const users = await User.findAll(sqlOptions);

        return res.json({
            status: "success",
            message: "get list user",
            data: users,
        });
    },
    show: async (req, res) => {
        const { id } = req.params;
        const user = await User.findByPk(id, {
            attributes: ["id", "name", "email", "role", "profession", "avatar"],
        });
        if (!user) {
            return res.status(404).json({
                status: "error",
                message: "user not found",
            });
        }
        return res.json({
            status: "success",
            message: "get user info",
            data: user,
        });
    },
    register: async (req, res) => {
        const rules = {
            name: "string|empty:false",
            email: "email|empty:false",
            password: "string|min:6",
            profession: "string|optional",
        };

        const validate = v.validate(req.body, rules);
        if (validate.length) {
            return res.status(422).json({
                status: "error",
                message: validate,
            });
        }

        const user = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (user) {
            return res.status(409).json({
                status: "error",
                message: "email already exist",
            });
        }

        const password = await bcrypt.hash(req.body.password, 10);

        const data = {
            password,
            email: req.body.email,
            name: req.body.name,
            profession: req.body.profession,
            role: "student",
        };

        const createUser = await User.create(data);

        return res.status(201).json({
            status: "success",
            message: "successfully register new user",
            data: {
                id: createUser.id,
            },
        });
    },
    login: async (req, res) => {
        const rules = {
            email: "email|empty:false",
            password: "string|min:6",
        };

        const validate = v.validate(req.body, rules);
        if (validate.length) {
            return res.status(422).json({
                status: "error",
                message: validate,
            });
        }

        const user = await User.findOne({ where: { email: req.body.email } });

        if (!user) {
            return res.status(404).json({
                status: "error",
                message: "user not found",
            });
        }

        const isValidPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isValidPassword) {
            return res.status(404).json({
                status: "error",
                message: "wrong password",
            });
        }

        return res.json({
            status: "success",
            message: "login success",
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                avatar: user.avatar,
                profession: user.profession,
            },
        });
    },
    update: async (req, res) => {
        const rules = {
            name: "string|empty:false",
            email: "email|empty:false",
            password: "string|min:6",
            profession: "string|optional",
            avatar: "string|optional",
        };

        const validate = v.validate(req.body, rules);
        if (validate.length) {
            return res.status(422).json({
                status: "error",
                message: validate,
            });
        }

        const { id } = req.params;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                status: "error",
                message: "user not found",
            });
        }

        const { email } = req.body;

        if (email) {
            const checkEmail = await User.findOne({ where: { email } });
            if (checkEmail && email !== user.email) {
                return res.status(409).json({
                    status: "error",
                    message: "email already exist",
                });
            }
        }

        const password = await bcrypt.hash(req.body.password, 10);
        const { name, profession, avatar } = req.body;

        const updatedUser = await user.update({
            email,
            password,
            name,
            profession,
            avatar,
        });

        return res.json({
            status: "success",
            message: "successfully update user profile",
            data: {
                id: updatedUser.id,
                name: updatedUser.name,
                email: updatedUser.email,
                profession: updatedUser.profession,
                avatar: updatedUser.avatar,
            },
        });
    },
    logout: async (req, res) => {
        const { user_id } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(404).json({
                status: "error",
                message: "user not found",
            });
        }

        await RefreshToken.destroy({
            where: { user_id },
        });

        return res.json({
            status: "success",
            message: "refresh token deleted successfully",
        });
    },
};
