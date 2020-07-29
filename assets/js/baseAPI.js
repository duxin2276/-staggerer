$.ajaxPrefilter(function (options) {
    options.url = 'http://192.168.50.200:3007' + options.url
})