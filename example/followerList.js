
/**
 * Gets a list of user's that follow a user (array of user IDs).
 */

var Spotify = require('../');
var login = require('../login');

//determine which user to look up
var user = process.argv[2] || login.username;

// initiate the Spotify session
Spotify.login(login.username, login.password, function (err, spotify) {
  if (err) throw err;

  // get the list of users the selected user is following
  spotify.followerList( user, function (err, followerList) {
    if (err) throw err;

    console.log(followerList);

    spotify.disconnect();
  });
});
