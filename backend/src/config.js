const connetion = {
    user: '',
    password: '',
    database: ''
};

const config = `mongodb+srv://${connetion.user}:${connetion.password}@cluster0-jgqw7.mongodb.net/${connetion.database}?retryWrites=true&w=majority`

module.exports = config;