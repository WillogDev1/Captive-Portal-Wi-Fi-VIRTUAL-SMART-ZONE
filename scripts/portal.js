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
