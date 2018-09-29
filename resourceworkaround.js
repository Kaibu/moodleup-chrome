var instances = document.getElementsByClassName("activityinstance");

for (var i = 0; i < instances.length; i++) {
  var fileURL = instances[i].childNodes[0].href + "&redirect=1"
  instances[i].childNodes[0].href = instances[i].childNodes[0].href + "&redirect=1";

  var a = document.createElement('a')
  a.href = "javascript:sendDownRequest('" + fileURL + "')"

  var img = document.createElement('img')
  img.className = "iconlarge activityicon"
  img.src = "https://moodle2.uni-potsdam.de/theme/image.php/adaptable/core/1537942080/t/download"

  a.appendChild(img)
  instances[i].insertBefore(a, instances[i].childNodes[0])
}

//insert download function into DOM
var code = 'function sendDownRequest(fileURL) {'
  + '    chrome.runtime.sendMessage("kinidnbadjpdcjljcogaclcijgpnloff", {url: fileURL});'
  + '}';

var script = document.createElement('script');
script.textContent = code;
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);