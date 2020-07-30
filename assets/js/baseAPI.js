$.ajaxPrefilter(function (options) {
    options.url = 'http://ajax.frontend.itheima.net' + options.url
});
// 可以实现发ajax请求之前，它会把我们参数进行二次加工 拦截
$.ajaxPrefilter(function (options) {
    //放前面的目的：后面第10行在前面加了东西，就不再是以xxx开头
    if (options.url.startsWith('/my/')) {
        options.headers = {
            Authorization:localStorage.getItem('token') ||
        }
    }
})