const app = require('express')();
var randomWords = require('random-words');
const PORT = 8080;
app.listen(
    PORT,
    () => console.log("online")
)

app.get('/wordle/:length', (req, res) => {
    const { length } = req.params;
    if (length < 1 || length > 14) {
        res.status(420).send({
            message: 'Specified length must be between 1 and 14'
        })
    } else {
        var currWord = randomWords({ exactly: 1, maxLength: length })[0];
        while (currWord.length != length) {
            console.log(currWord)
            currWord = randomWords({ exactly: 1, maxLength: length })[0];
        }
        res.status(200).send({
            word: currWord
        })
    }
});