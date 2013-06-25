for(var i = 0; i < 5; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u0'] = 'top';gv_vAlignTable['u1'] = 'top';gv_vAlignTable['u2'] = 'top';document.getElementById('u3_img').tabIndex = 0;

u3.style.cursor = 'pointer';
$axure.eventManager.click('u3', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('PantallaInicio.html');

}
});
gv_vAlignTable['u4'] = 'center';