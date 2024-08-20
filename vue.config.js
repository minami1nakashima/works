module.exports = {
    devServer: {
        proxy: {
            "api/": {
                target: "https://airtable.com/v0/appOwOOW3ChtQqFk1/shrwqjcFVCV7w6vKK",
            }
        }
    }
};