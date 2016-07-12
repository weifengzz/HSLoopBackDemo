/**
 * Created by Administrator on 2016/7/12 0012.
 */

var result = {};
var resultMsg = [];

result.SUCCESS = '200';
resultMsg[result.SUCCESS] = '成功';

result.getMsg = function (code, msg) {
  return msg || resultMsg[code] || null;
};

result.success = function (cb, data) {
  return cb(null, {
    code: result.SUCCESS,
    msg: resultMsg[result.SUCCESS],
    data: data || { ok: true }
  });
};

result.failed = function (cb, code, msg) {
  return cb (
    null,
    {
      code: code,
      msg: msg || resultMsg[code],
      data: ''
    }
  );
};

module.exports = result;


