const { exec, escape } = require('../db/mysql')

const login = (username,password) => {
    username = escape(username)
    password = escape(password)

    // if(username === 'zhangsan' && password === '123') {
    //     return true
    // }
    // return false
    const sql = ` select username, realname from users where username=${username} and password = ${password}`
    console.log('sql----',sql)
    return exec(sql).then(rows => {
        return rows[0] || {}
    })
}

module.exports = login