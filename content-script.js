chrome.runtime.onMessage.addListener(function (msg, sender) {
  if (msg == "toggle") {
    toggle();
  }
});

var iframe = document.createElement("iframe");
iframe.style.background = "green";
iframe.style.height = "100%";
iframe.style.width = "0px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
iframe.frameBorder = "none";
iframe.style.transition = "0.5s";
iframe.style.overflowX = "hidden";
iframe.style.boxShadow = "-5px 0 30px black";
iframe.src = chrome.extension.getURL("teesco.html");

document.body.appendChild(iframe);

function toggle() {
  if (iframe.style.width == "0px") {
    iframe.style.width = "416.3px";
  } else {
    iframe.style.width = "0px";
  }
}
