
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event){
  var source = event.source.frameElement; //this is the iframe that sent the message
  var message = event.data; //this is the message
  console.log("recvd msg" + message);
  //do something with message
}



cs = new CSInterface();
script = ""

function toggleDiv(id) {
    var div = document.getElementById(id);
    div.style.display = div.style.display == "none" ? "block" : "none";
}


function myFunction() {
  var js = "activeDocument.artLayers.add()";

  cs.evalScript(js);
}

function history(cmd){
  var script = "";
  if (cmd == "redo") {
    console.log("redo");
    script = "activeDocument.activeHistoryState = activeDocument.historyStates[];";
  }else if (cmd == "undo") {
    console.log("undo");
    script = "executeAction( charIDToTypeID('undo'), undefined, DialogModes.NO );";
  }
  console.log(script);
  cs.evalScript(script);

}

function copy(){
  script = "if (app.activeDocument.activeLayer.opacity > 5) {  \
            app.activeDocument.activeLayer.opacity = Math.round(app.activeDocument.activeLayer.opacity) -5;  \
            }"
  cs.evalScript(script);
}


function opacity(cmd){
  console.log("opacity");
  if (cmd == "increase") {
    console.log("increase");
    script = "if (app.activeDocument.activeLayer.opacity < 95) {  \
              app.activeDocument.activeLayer.opacity = Math.round(app.activeDocument.activeLayer.opacity) +5;  \
            }else{\
              app.activeDocument.activeLayer.opacity = 100 \
            }"
  }else if (cmd == "decrease") {
    console.log("decrease");
    script = "if (app.activeDocument.activeLayer.opacity > 5) {  \
              app.activeDocument.activeLayer.opacity = Math.round(app.activeDocument.activeLayer.opacity) -5;  \
              }else{\
                app.activeDocument.activeLayer.opacity = 0 \
              }"
  }
  cs.evalScript(script);
}





function hue(cmd){
  console.log("hue");
  if (cmd == "increase") {
    console.log("increase");
    script = "foregroundColor.hsb.hue += 5"
  }else if (cmd == "decrease") {
    console.log("decrease");
    script = "foregroundColor.hsb.hue -= 5"
  }
  cs.evalScript(script);
}

function brightness(cmd){
  console.log("brightness");
  if (cmd == "increase") {
    console.log("increase");
    script = "if (foregroundColor.hsb.brightness < 95){\
                  foregroundColor.hsb.brightness += 5\
                }else{\
                  foregroundColor.hsb.brightness = 100\
                }\
              "
  }else if (cmd == "decrease") {
    console.log("decrease");
    script = "if (foregroundColor.hsb.brightness > 5){\
                  foregroundColor.hsb.brightness -= 5\
                }else{\
                  foregroundColor.hsb.brightness = 0\
                }\
              "
  }
  cs.evalScript(script);
}

function saturation(cmd){
  console.log("saturation");
  if (cmd == "increase") {
    console.log("increase");
    script = "if (foregroundColor.hsb.saturation < 95){\
                  foregroundColor.hsb.saturation += 5\
                }else{\
                  foregroundColor.hsb.saturation = 100\
                }\
              "
  }else if (cmd == "decrease") {
    console.log("decrease");
    script = "if (foregroundColor.hsb.saturation > 5){\
                  foregroundColor.hsb.saturation -= 5\
                }else{\
                  foregroundColor.hsb.saturation = 0\
                }\
              "
  }
  cs.evalScript(script);
}
