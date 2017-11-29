/**
 * Export `uid`
 */

module.exports = uid;

/**
 * Create a `uid`
 *
 * @param {String} len
 * @return {String} uid
 */

function uid(len, options) {
  var _uid = Math.random().toString(35).substr(2, len || 7);
  if(options && options.uppercase) {
    _uid.toUpperCase();
  }
  return _uid;
}
