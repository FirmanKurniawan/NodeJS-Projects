"use strict";
const bcrypt = require("bcrypt");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "users",
            [
                {
                    name: "BrondoL",
                    profession: "Admin web",
                    role: "admin",
                    email: "nabilunited2@gmail.com",
                    password: await bcrypt.hash("rahasia", 10),
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    name: "Wawik",
                    profession: "Front End Developer",
                    role: "student",
                    email: "wawik@gmail.com",
                    password: await bcrypt.hash("rahasia", 10),
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("users", null, {});
    },
};
