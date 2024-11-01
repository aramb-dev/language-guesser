const franc = require('franc')
const langs = require('langs')
const colors = require('colors')

const argv = process.argv[2];
let detected_lang = franc(argv, {minLength: 3})
if (detected_lang === 'und') {
    console.log("Sorry, we couldn't detect the language. Please try again with more text.".red)
} else {
    let lang_text = langs.where("3", detected_lang)
    if (lang_text === undefined) {
        console.log("Sorry, we couldn't process your request. Please try again.".red)
    } else {
    console.log(`The language we detected is ${lang_text.name}.`.green)
    }}
