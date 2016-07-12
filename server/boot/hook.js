/**
 * Created by zhakang on 16/6/27.
 */


module.exports = function (app) {
  var remotes = app.remotes();
  // modify all returned values

  remotes.before('**', function (ctx, next) {
    //console.log("所有方法进入前:");
    console.log(ctx.req.originalUrl);
    next();
  });

  remotes.afterError('**', function (ctx, next) {
    var Error = ctx.error;
    if (Error) {
      var resResult = {
        code: Error.statusCode || 'error',
        msg: Error.message || '失败',
        data: ''
      };
      return ctx.res.send(resResult);
    }
    next();
  });

  remotes.after('**', function (ctx, next) {
    var result = ctx.result || {};
    var result_data = result.data || {};
    ctx.result = {
      code: result_data.code || '200',
      msg: result_data.msg || '成功',
      data: result_data.data || ''
    };
    next();
  });
}
