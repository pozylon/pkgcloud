/*
 * client.js: Storage client for AWS S3
 *
 * (C) 2011 Nodejitsu Inc.
 *
 */

var util = require('util'),
    AWS = require('aws-sdk'),
    s3Stream = require('s3-upload-stream'),
    pkgcloud = require('../../../../pkgcloud'),
    amazon = require('../../client'),
    _ = require('underscore');

var Client = exports.Client = function (options) {
  amazon.Client.call(this, options);

  _.extend(this, require('./containers'));
  _.extend(this, require('./files'));

  this.s3 = new AWS.S3();
  
  this.s3Url = options.s3Url
    || this.s3Url
    || 'ds21s3.swisscom.com';
  
  this.s3 = new AWS.S3({
  	endpoint : this.s3Url, 
  	//accessKeyId: this.config.keyId,  // inherited
  	//secretAccessKey: this.config.key, // inherited
  	apiVersion: '2006-03-01',
  	sslEnabled: true, // needs to be true!
  	paramValidation: false,
  	//computeChecksums: true, NO EFFECT
  	convertResponseTypes: false,
  	s3ForcePathStyle: true,
  });

  // configure the s3Stream
  s3Stream.client(this.s3);
  this.s3Stream = s3Stream;
};

util.inherits(Client, amazon.Client);
