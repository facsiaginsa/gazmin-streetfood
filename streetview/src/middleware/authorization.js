const userAuth = async (req, res) => {
    try {
        let decoded = await req.jwtVerify()
        req.token = decoded
    } catch (error) {
        res.status(401).send({
            code: 1,
            message: "token is not valid"
        })
    }
}

module.exports = userAuth