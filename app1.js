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

var GitHub = require('github-api');

// basic auth
var gh = new GitHub({
    username: USER,
    password: PASS
    /* also acceptable:
       token: 'MY_OAUTH_TOKEN'
     */
});

// var me = gh.getUser(); // no user specified defaults to the user for whom credentials were provided
// me.listNotifications(function (err, notifications) {
//     // console.log(notifications);
// });

const clayreimann = gh.getUser(USER);

// clayreimann.listStarredRepos(function (err, repos) {
//     // look at all the starred repos!
//     console.log(repos);
// });

// listProjects

// clayreimann.listStarredRepos()
//     .then(function({data: reposJson}) {
//         console.log(USER + ` has ${reposJson.length} repos!`);
//     });

//
// var yahoo = gh.getOrganization('mininote-pl');
// yahoo.getRepos(function (err, repos) {
//     // console.log(repos);
//     repos.forEach(function (a) {
//             console.log(a.name);
//             console.log(a.description);
//             console.log("--");
//         }
//     );
// });

//
// gh.listProjects()
//     .then(function({data: reposJson}) {
//         console.log(USER + ` has ${reposJson.length} repos!`);
//     });

// clayreimann.listProjects(function (err, repos) {
//     // look at all the starred repos!
//     console.log(repos);
// });



//
// var gist = gh.getGist(); // not a gist yet
// var data = {
//     public: true,
//     description: 'My first gist',
//     files: {
//         "file1.txt": {
//             contents: "Aren't gists great!"
//         }
//     }
// };
// gist.create(data)
//     .then(function (httpResponse) {
//         var gistJson = httpResponse.data;
//         console.log(gistJson);
//         // Callbacks too
//         gist.read(function(err, gist, xhr) {
//              // if no error occurred then err == null
//              // gistJson == httpResponse.data
//              // xhr == httpResponse
//         });
//     });
