//TODO: Make this a vows test

var Client = new require('../../../../lib/pkgcloud/core/base/client').Client;
var helpers = require('../../../helpers');
var pkgcloud = require('../../../../lib/pkgcloud');

//pkgcloud.storage.createClient()
var client = helpers.createClient('azure', 'compute');

var options = {};


client.destroyServer('create-test-ids2', function(err, result) {
  if(err) {
    console.log(err);
  } else {
    console.log('ok');
  }
});




