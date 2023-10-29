$(document).ready(function () {
    //用户注册
    $('#registerForm').submit(function () {
        $(this).ajaxSubmit({
            data: { action: "userRegister" },
            dataType: 'json',
            beforeSubmit: function () {
                var UName = $('#reg_username'), Question = $('#reg_question'), Answer = $('#reg_answer'),
                parUPwd = $('#reg_pass'), Company = $('#reg_company'), LinkMan = $('#reg_linkman'),
                parUPwd2 = $('#reg_pass2'), Phone = $('#reg_phone'), Fax = $('#reg_fax');

                if (!UName.val().length || UName.val() == "用户名") return fnErrorAction('请输入用户名', UName);
                else if (UName.val().length < 2) return fnErrorAction('用户名长度不能小与2个字符', UName);
                else if (UName.val().length > 20) return fnErrorAction('用户名最大长度20个字符', UName);

                if (!parUPwd.val().length) return fnErrorAction('请输入密码', parUPwd);
                else if (parUPwd.val().length < 5) return fnErrorAction('密码长度不能小与5个字符', parUPwd);
                else if (parUPwd.val().length > 12) return fnErrorAction('密码最大长度12个字符', parUPwd);
                else if (parUPwd.val() !== parUPwd2.val()) return fnErrorAction('两次输入密码不一致', parUPwd);

                if (!parUPwd2.val().length) return fnErrorAction('请输入确认密码', parUPwd2);
                else if (parUPwd2.val().length < 5) return fnErrorAction('确认密码长度不能小与5个字符', parUPwd2);
                else if (parUPwd2.val().length > 12) return fnErrorAction('确认密码最大长度12个字符', parUPwd2);
                else if (parUPwd2.val() !== parUPwd.val()) return fnErrorAction('两次输入密码不一致', parUPwd2);

                if (!Question.val().length || Question.val() == "密码提示问题") return fnErrorAction('请输入密码提示问题', Question);
                else if (Question.val().length < 2) return fnErrorAction('密码提示问题长度不能小与2个字符', Question);
                else if (Question.val().length > 20) return fnErrorAction('密码提示问题最大长度20个字符', Question);

                if (!Answer.val().length || Answer.val() == "密保问题答案") return fnErrorAction('请输入密保问题答案', Answer);

                if (!Company.val().length || Company.val() == "企业名称全称") return fnErrorAction('请输入企业名称全称', Company);
                else if (Company.val().length < 2) return fnErrorAction('企业名称全称长度不能小与2个字符', Company);
                else if (Company.val().length > 20) return fnErrorAction('企业名称全称最大长度20个字符', Company);

                if (!LinkMan.val().length || LinkMan.val() == "企业联系人") return fnErrorAction('请输入企业联系人', Company);
                else if (LinkMan.val().length < 2) return fnErrorAction('联系人长度不能小与2个字符', Company);
                else if (LinkMan.val().length > 20) return fnErrorAction('联系人最大长度10个字符', Company);

                if (!Phone.val().length || Phone.val() == "企业联系电话") return fnErrorAction('请输入企业联系电话', Phone);
                else if (!/(^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0?1[35]\d{9}$)/.test(Phone.val())) return fnErrorAction('联系电话不正确,正确格式：021-12345678或13512345678', Phone);
            },
            success: function (data) {
                if (!data) LG.showError('未知错误');
                else if (data.status === 0) LG.showSuccess(data.msg);
                else if (data.status === 1) {
                    LG.showSuccess(data.msg, function () { 
                            location.reload();
                        }
                    );
                    return false;
                }
            }
        });
        return false;
    });

    //用户登录
    $("#loginForm").submit(function () {
        $(this).ajaxSubmit({
            data: { action: "userLogin" },
            dataType: 'json',
            beforeSubmit: function () {
                var UName = $('#login_username'), UPass = $('#login_pass');

                if (!UName.val().length || UName.val() == "用户名") return fnErrorAction('请输入用户名', UName);
                if (!UPass.val().length) return fnErrorAction('请输入密码', UPass);

            },
            success: function (data) {
                if (!data) LG.showError('未知错误');
                else if (data.status === 0) LG.showError(data.msg);
                else if (data.status === 1) {
                    //LG.showSuccess(data.msg, function () { location.reload(); });
                    location.reload();
                    return false;
                }
            }
        });
        return false;
    });

    //修改密码
    $("#changepassForm").submit(function () {
        $(this).ajaxSubmit({
            data: { action: "changePass" },
            dataType: 'json',
            beforeSubmit: function () {
                var oldpass = $('#change_oldpass'), newpass = $('#change_newpass'), newpass2 = $('#change_newpass2'), IsFindPass = $("#_findpass");

                if (IsFindPass.val() != "1") {
                    if (!oldpass.val().length) {
                        return fnErrorAction('请输入原密码', oldpass);
                    }
                }

                if (!newpass.val().length) return fnErrorAction('请输入新密码', newpass);
                else if (newpass.val().length < 5) return fnErrorAction('新密码长度不能小与5个字符', newpass);
                else if (newpass.val().length > 12) return fnErrorAction('新密码最大长度12个字符', newpass);
                else if (newpass.val() !== newpass2.val()) return fnErrorAction('两次输入密码不一致', newpass);

                if (!newpass2.val().length) return fnErrorAction('请输入确认密码', newpass2);
                else if (newpass2.val().length < 5) return fnErrorAction('确认密码长度不能小与5个字符', newpass2);
                else if (newpass2.val().length > 12) return fnErrorAction('确认密码最大长度12个字符', newpass2);
                else if (newpass2.val() !== newpass.val()) return fnErrorAction('两次输入密码不一致', newpass2);

            },
            success: function (data) {
                if (!data) LG.showError('未知错误');
                else if (data.status === 0) LG.showError(data.msg);
                else if (data.status === -1) {
                    LG.showError(data.msg, function () { location.reload(); });
                }
                else if (data.status === 1) {
                    if ($("#_findpass").val() == "1") {
                        LG.showSuccess(data.msg, function () {
                            document.getElementById("changepassForm").reset();
                            $(".member_box").find('.change_pass').hide();
                            $(".member_box").find('.login').fadeIn();
                        });
                    } else {
                        LG.showSuccess(data.msg, function () {
                            document.getElementById("changepassForm").reset();
                            $(".member_box").fadeOut();
                        });
                    }
                    return false;
                }
            }
        });
        return false;
    });

    //找回密码
    $("#findpassForm").submit(function () {
        $(this).ajaxSubmit({
            data: { action: "findPass" },
            dataType: 'json',
            beforeSubmit: function () {
                var UName = $('#find_username'), Quesion = $('#find_question'), Answer = $('#find_answer');

                if (!UName.val().length || UName.val() == "会员账号") return fnErrorAction('请输入会员账号', UName, false);

                if (!Answer.val().length || Answer.val() == "密保问题答案") return fnErrorAction('请输入密码提示答案', Answer);

            },
            success: function (data) {
                if (!data) LG.showError('未知错误');
                else if (data.status === 0) LG.showError(data.msg);
                else if (data.status === 1) {
                    $("#_User").val($('#find_username').val())
                    document.getElementById("findpassForm").reset();
                    $('.member_box').find('ul li').hide();
                    $(".member_box").find('.change_pass').fadeIn();
                    $(".member_box").find(".change_pass .password").eq(0).hide();
                    $("#_findpass").val(1);
                }
                return false;
            }
        });
        return false;
    });

    $('#find_username').blur(function () {
        var user = $(this).val();
        if (!user.length || user == "会员账号") return fnErrorAction('请输入会员账号', user);

        $.post("/ashx/Member.ashx", { action: "GetUserQuestion", _User: user }, function (data) {
            if (data.status == 1) $("#find_question").val(data.msg);
            else
                LG.showError(data.msg);
        }, "json");
    })

    function fnErrorAction(msg, obj, isFocus) {
        LG.showError(msg);
        if (isFocus)
            obj.trigger('focus');
        return false;
    }

})