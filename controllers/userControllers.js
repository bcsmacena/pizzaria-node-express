const userController = {
    index: (req, res, next) => {
        let {nome} = req.params;
        return res.render("usuario", {nome});
    }
};

module.exports = userController;