import express  from "express";

let router = express.Router() ;

let initwebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.send("Hello NguyenVanHung")
    });
    return app.use("/", router);
}

module.exports = initwebRoutes;
