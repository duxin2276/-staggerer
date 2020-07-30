$(function () {
    //点击链接切换注册\登录
    $('#re_link').click(function () {
        $('.reg-box').show().siblings('.login-box').hide();
    })
    $('#login_link').click(function () {
        $('.reg-box').hide().siblings('.login-box').show();
    })

    // 自定义校验规则
    layui.form.verify({
        //数组第一项是匹配的正则，第二项是不满足正则的时候报错信息
        pwd: [/^\S{6,12}$/, '密码不能有空格，并且是6到12位'],
        //密码和确认密码必须一致
        //value用户输入的值
        reqwd: function (value) {
            //密码的值获取
            if ($('.reg-box [name="password"]').val() != value) {
                return '密码不一致'
            }
        }
    })
    // var layer = layui.layer;
    var { layer } = layui;// 解构赋值 和上面23行是一个意思

    //注册的功能 给注册表单监听一个提交事件，阻止默认提交行为，用ajax来实现提交
    $('#reg_form').on('submit', function (e) {
        e.preventDefault();//阻止事件默认提交行为
        var username = $('#reg_form [name="username"]').val();//用户名
        var password = $('#reg_form [name="password"]').val();//密码
        $.post('/api/reguser', { username: username, password: password }, function (res) {
            if (res.status != 0) return layer.msg(res.message)
            layer.msg(res.message);
            // 跳转到登录表单 模拟点击
            $('#login_link').click();
        })
    })

    // 登录功能
    $('#login_form').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            method: 'post',
            url: '/api/login',
            data: $('#login_form').serialize(),
            success: function (res) {
                console.log(res);
                if (res.status != 0) return layer.msg(res.message);
                layer.msg(res.message);
                localStorage.setItem('token', res.token);
                // 跳转到后台首页
                location.href = '../../index.html';
                // token:令牌
            }
        })
    })
})