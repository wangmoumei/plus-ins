function isMobile(txt){//检测是否为手机号码
 if(txt == null || txt == ""){return false;}
 else{
  var regex = /1[0-9]{10}/;
  return regex.test(txt);
 }
}
function isEmail(txt){ //是否为电子邮件地址:xxx@xxx.xxx
 if(txt == null || txt == ""){return false;}
 else{
  var regex = /(.){1,}@(.){1,}\.(.){1,}/;
  return regex.test(txt);
 }
}