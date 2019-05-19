// require('simple-git')()
//     .addConfig('user.name', 'Some One')
//     .addConfig('user.email', 'some@one.com')
//     .commit('committed as "Some One"', 'file-one')
//     .commit('committed as "Another Person"', 'file-two', { '--author': '"Another Person <another@person.com>"' });
//

const USER = 'something';
const PASS = 'somewhere';
const REPO = 'github.com/username/private-repo';

const git = require('simple-git/promise');
const remote = `https://${USER}:${PASS}@${REPO}`;

git().silent(true)
    .clone(remote)
    .then(() => console.log('finished'))
    .catch((err) => console.error('failed: ', err));

require('simple-git')()

    .listRemote(['--get-url'], (err, data) => {
        if (!err) {
            console.log('Remote url for repository at ' + __dirname + ':');
            console.log(data);
        }
    });
