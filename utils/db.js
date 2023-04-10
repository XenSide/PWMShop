//require fs
const fs = require("fs");
//require path
const path = require("path");
let products = readfiles("products.json");
let users = readfiles("users.json");
let reviews = readfiles("reviews.json");

function readfiles(filename) {
    rawdata = fs.readFileSync(path.join(__dirname, filename));
    if (rawdata.length > 1) {
        return (finaldata = JSON.parse(rawdata));
    }
}

function savedb(data, file) {
    fs.writeFileSync(path.join(__dirname, file), JSON.stringify(data));
}

module.exports = { users, products, reviews, savedb };
