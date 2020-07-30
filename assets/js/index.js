$(function () {
    //获取用户信息
    getUserInfo();


    //实现退出功能
    $('logout').click(function () {
        layer.confirm('is not?', { icon: 3, title: '提示' }, function (index) {
            //do something
            // 销毁凭证

            localStorage.removeItem('token');
            // 跳转登录

            location.href = '/login.html';

            layer.close(index);
        })
    })
    function getUserInfo() {
        // 添加请求头信息
        $.ajax({
            method: 'get',
            url: '/my/userinfo',
            //小票
            headers: {
                Authorization: localStorage.getItem('token') || ''
            },
            success: function (res) {
                console.log(res);
            }
        })
    }
    
    success:{
    
        //如果有昵称nickename就用昵称，否则就用用户名username
        if (res.data.nickname == '') {
            // 用户名
    
        }
    }

})

//请求报文 客户端和服务器说的话
//请求头 额外加一个凭证
//请求体 请求参数

