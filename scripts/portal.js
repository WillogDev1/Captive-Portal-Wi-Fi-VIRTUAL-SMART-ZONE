function get_param(name) {
  if (location.href.indexOf("?") >= 0) {
    var query = location.href.split("?")[1];
    var params = query.split("&");
    for (var i = 0; i < params.length; i++) {
      value_pair = params[i].split("=");
      if (value_pair[0] == name) return unescape(value_pair[1]);
    }
  }
  return "";
}

function btnEnviaSolicitacaoParaRuckus() {
  document.write(
    '<form method=GET action="https://' +
      get_param("nbiIP") +
      ':9998/SubscriberPortal/hotspotlogin">'
  );
}

/* Máscaras ER */
function mascara(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execmascara()",1)
}
function execmascara(){
  v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
  v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
  v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id( el ){
return document.getElementById( el );
}
window.onload = function(){
id('telefone').onkeyup = function(){
  mascara( this, mtel );
}
}