const handleUserRouter = (req,res) => {
    const method = req.method


    // login
    if(method === 'POST' && req.path === '/api/user/login') {
        return {
            msg:'login interface1'
        }
    }

}

module.exports = handleUserRouter