function resizeHeader() {
    $("#nav-push").height($("#navbar").height());
}
$(document).ready(resizeHeader);
$(window).resize(resizeHeader);
