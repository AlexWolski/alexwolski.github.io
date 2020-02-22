//Use the AdobeDCView API to create a pdf viewer element in the given div with the given file
function viewPDF(div, file, fileName) {
  document.addEventListener("adobe_dc_view_sdk.ready", function() {
    var adobeDCView = new AdobeDC.View({clientId: "41cb26db63cd42288135f1c23a0dd726", divId: div});
    
    adobeDCView.previewFile({
      content:{location: {url: file}},
      metaData:{fileName: fileName}},
      {embedMode: "SIZED_CONTAINER"});
  });
}