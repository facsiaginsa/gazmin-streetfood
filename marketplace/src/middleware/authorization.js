const userAuth = async (req, res) => {
    try {
        await req.jwtVerify()
    } catch (error) {
        res.status(401).send({
            code: 1,
            message: "token is not valid"
        })
    }
}