$(document).ready(function(){

  $("#infoForm").validate({
      rules: {
          name: "required",
          email: {
              required: true,
              email: true
          },
          qq: {
              required: true,
              minlength: 5,
              digits:true
          },
          professional: "required",
          institutions: "required",
          identity: {
              required: true,
              minlength: 14,
              maxlength: 18
          },
          phone: {
              required: true,
              digits:true
          },
          grade: "required",
          graduation_date : "required",
          anmelden : "required",
          emergency : "required",
          emergency_phone : {
              required: true,
              digits:true
          },
          assessment : "required",
          reason : "required",
          expect : "required",
          experience : "required",
          time : "required",
          task : "required",
          result : "required",
          'checkbox[]' : "required"
      },
      messages: {
          name: "请输入姓名",
          email: {
              required: "请输入Email地址",
              email: "请输入正确的email地址"
          },
          qq: {
              required: "请输入QQ号码",
              minlength: "请输入正确的QQ号码",
              digits: "请输入正确的QQ号码"
          },
          professional: "请输入专业名称",
          institutions: "请输入院校名称",
          identity: {
              required: "请输入身份证号码",
              minlength: "请输入正确的身份证号码",
              maxlength: "请输入正确的身份证号码"
          },
          phone: {
              required: "请输入您的联系电话",
              digits: "请输入正确的电话号码"
          },
          grade: "请输入年级",
          graduation_date : "请输入毕业时间",
          anmelden : "请输入户口所在地",
          emergency : "请输入紧急联系人",
          emergency_phone : {
              required: "请输入紧急联系人电话",
              digits: "请输入正确的电话号码"
          },
          assessment : "",
          reason : "",
          expect : "",
          experience : "",
          time : "",
          task : "",
          result : "",
          'checkbox[]' : "请至少选择一个"
      }
  });

});