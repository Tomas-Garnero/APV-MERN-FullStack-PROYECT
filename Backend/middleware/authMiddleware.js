const checkAuth = (req, res, next) => {

    console.log("Desde mi Middleware");
    next();
}

export default checkAuth;