// require('simple-git')()
//     .addConfig('user.name', 'Some One')
//     .addConfig('user.email', 'some@one.com')
//     .commit('committed as "Some One"', 'file-one')
//     .commit('committed as "Another Person"', 'file-two', { '--author': '"Another Person <another@person.com>"' });
//

// @REPO https://github.com/philschatz/octokat.js


// @EXAMPLES https://github.com/philschatz/octokat.js/tree/master/examples


var base64 = require('base-64');
// import base64 from 'base-64';


const config_array = require('../config.json');
// console.log(config_array);
// console.log(config_array["service"]);
var config = Object.assign({}, config_array);
// console.log(config.service);

const USER = config.service.github.user;
const PASS = config.service.github.pass;
// const REPO = 'swagger-api-php';
const ORG = 'mininote-pl';
const REPO = 'docs';
const FILE = 'README.md';

const HOST = config.service.github.host;
const URL_REPO = `${HOST}/${USER}/${REPO}`;

const git = require('simple-git/promise');
const remote = `https://${USER}:${PASS}@${URL_REPO}`;


var Octokat = require('octokat')
var octo = new Octokat({
    username: USER,
    password: PASS
})
// var octo = new Octokat({token: 'API_TOKEN'})


// You can omit `cb` and use Promises instead
var cb = function (err, val) {
    console.log(val)
}

// octo.zen.read(cb)

var SHA = "";
var repo = octo.repos(ORG, REPO)

repo.contents(FILE).fetch() // Use `.read` to get the raw file.
    .then((info) => {        // `.fetch` is used for getting JSON
        // info.commit.sha
        console.log(info.sha);
        SHA = info.sha;
        removeFile();
    });

// read file
// repo.contents(FILE).read() // Use `.read` to get the raw file.
//     .then((contents) => {        // `.fetch` is used for getting JSON
//         console.log(contents)
//     });


// To update a file you need the blob SHA of the previous commit:

// console.log(base64.encode('New file contents'));

function removeFile() {
    var config1 = {
        message: 'Remove file',
        sha: SHA
    };

// # docs
// Dokumentacja projektu Notesu, informacje dla użytkowników, programistów, wspierających i propagatorów oprogramowania

    repo.contents(FILE).remove(config1)
}

/*
var config2 = {
    message: 'Updating file',
    content: base64.encode('New file contents'),
    sha: SHA, // the blob SHA
    // branch: 'gh-pages'
};

// # docs
// Dokumentacja projektu Notesu, informacje dla użytkowników, programistów, wspierających i propagatorów oprogramowania


repo.contents(FILE).add(config2)
    .then((info) => {
        console.log('File Updated. new sha is ', info.commit.sha)
    })


 */


// octo.repos('philschatz', 'octokat.js').fetch(cb)    // Fetch repo info
// octo.me.starred('philschatz', 'octokat.js').add(cb) // Star a repo
// octo.me.starred('philschatz', 'octokat.js').remove(cb) // Un-Star a repo
