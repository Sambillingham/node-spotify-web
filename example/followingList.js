
/**
 * Gets a list of user's a user is following (array of user IDs).
 */

var Spotify = require('../');
var login = require('../login');

//determine which user to look up
var user = process.argv[2] || login.username;

// initiate the Spotify session
Spotify.login(login.username, login.password, function (err, spotify) {
  if (err) throw err;

  // get the list of users the selected user is following
  spotify.followingList( user, function (err, followingList) {
    if (err) throw err;

    console.log(followingList);

    spotify.disconnect();
  });
});
