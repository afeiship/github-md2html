/*!
 * name: @feizheng/next-fetch-with-request-id
 * description: Fetch with request id.
 * homepage: https://github.com/afeiship/next-fetch-with-request-id
 * version: 1.0.0
 * date: 2020-07-05T14:17:07.685Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var nxDeepAssign = nx.deepAssign || require('@feizheng/next-deep-assign');

  nx.fetchWithRequestId = function (inFetch) {
    return function (inUrl, inOptions) {
      var headers = { 'request-id': nx.guid() }
      var options = nxDeepAssign({ headers: headers }, inOptions);
      return inFetch(inUrl, options);
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fetchWithRequestId;
  }
})();

//# sourceMappingURL=next-fetch-with-request-id.js.map
