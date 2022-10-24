const { RefreshToken, User } = require("../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = {
    store: async (req, res) => {
        const { user_id, refresh_token } = req.body;

        const rules = {
            refresh_token: "string|empty:false",
            user_id: "number|empty:false",
        };

        const validate = v.validate(req.body, rules);
        if (validate.length) {
            return res.status(422).json({
                status: "error",
                message: validate,
            });
        }

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(404).json({
                status: "error",
                message: "user not found",
            });
        }

        const createdRefreshToken = await RefreshToken.create({
            token: refresh_token,
            user_id,
        });

        return res.json({
            status: "success",
            message: "successfully create token",
            data: {
                id: createdRefreshToken.id,
            },
        });
    },
    getToken: async (req, res) => {
        const { refresh_token } = req.query;
        const token = await RefreshToken.findOne({
            where: {
                token: refresh_token,
            },
        });

        if (!token) {
            return res.status(404).json({
                status: "error",
                message: "invalid token",
            });
        }

        return res.json({
            status: "success",
            token,
        });
    },
};
