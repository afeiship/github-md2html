/*!
 * name: @jswork/next-fetch-with-request-id
 * description: Fetch with request id.
 * homepage: https://github.com/afeiship/next-fetch-with-request-id
 * version: 1.0.0
 * date: 2020-11-20 20:58:39
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxDeepAssign = nx.deepAssign || require('@jswork/next-deep-assign');
  var nxGuid = nx.deepAssign || require('@jswork/next-guid');

  nx.fetchWithRequestId = function (inFetch) {
    return function (inUrl, inOptions) {
      var headers = { 'request-id': nxGuid() };
      var options = nxDeepAssign({ headers: headers }, inOptions);
      return inFetch(inUrl, options);
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fetchWithRequestId;
  }
})();
