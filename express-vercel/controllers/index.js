module.exports = {
    index: async (req, res, next) => {
        try {
            return res.status(200).json({
                status: true,
                message: "Get Data Successfully"
            });
        } catch (error) {
            next(error)
        }
    },
    
    delete: async (req, res, next) => {
        try {
            return res.status(200).json({
                status: true,
                message: "Deleted User Data Successfully"
            });
        } catch (error) {
            next(error)
        }
    },
};
