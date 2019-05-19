// require('simple-git')()
//     .addConfig('user.name', 'Some One')
//     .addConfig('user.email', 'some@one.com')
//     .commit('committed as "Some One"', 'file-one')
//     .commit('committed as "Another Person"', 'file-two', { '--author': '"Another Person <another@person.com>"' });
//

// https://www.npmjs.com/package/simple-git


const config_array = require('../config.json');
// console.log(config_array);
// console.log(config_array["service"]);
var config = Object.assign({}, config_array);
// console.log(config.service);

const USER = config.service.github.user;
const PASS = config.service.github.pass;
// const REPO = 'swagger-api-php';
const REPO = 'Blog';
const HOST = config.service.github.host;
const URL_REPO = `${HOST}/${USER}/${REPO}`;

const git = require('simple-git/promise');
const remote = `https://${USER}:${PASS}@${URL_REPO}`;
//

// git().silent(true)
//     .clone(remote)
//     .then(() => console.log('finished'))
//     .catch((err) => console.error('failed: ', err));

git()
    .listRemote(['--heads', '--tags'], console.log.bind(console))
    .then(() => console.log.bind(console))
    .catch((err) => console.error('failed: ', err));

// require('simple-git')()
//
//     .listRemote(['--get-url'], (err, data) => {
//         if (!err) {
//             console.log('Remote url for repository at ' + __dirname + ':');
//             console.log(data);
//         }
//     });
