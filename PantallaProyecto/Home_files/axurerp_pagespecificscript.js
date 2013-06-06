for(var i = 0; i < 45; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('TamanoVentPq', '480');

SetGlobalVariableValue('NumVentAbiertas', '0');

}

});
gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u31'] = 'center';document.getElementById('u33_img').tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	SetPanelState('u32', 'pd0u32','none','',500,'none','',500);

	SetPanelVisibility('u37','toggle','none',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if (((GetGlobalVariableValue('NumVentAbiertas')) == ('1')) && ((GetWidgetVisibility('u20')) == (true))) {

	SetPanelState('u20', 'pd0u20','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) == ('1')) && ((GetWidgetVisibility('u25')) == (true))) {

	SetPanelState('u25', 'pd0u25','none','',500,'none','',500);

}
});
gv_vAlignTable['u34'] = 'center';document.getElementById('u35_img').tabIndex = 0;

u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if (true) {

	SetPanelState('u32', 'pd1u32','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u37','','none',500);

}

if ((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) {

	SetPanelState('u37', 'pd0u37','none','',500,'none','',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && ((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2'))) {

	SetPanelState('u37', 'pd1u37','none','',500,'none','',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && ((GetWidgetVisibility('u20')) == (true)))) {

	SetPanelState('u20', 'pd1u20','none','',500,'none','',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && ((GetWidgetVisibility('u25')) == (true)))) {

	SetPanelState('u25', 'pd1u25','none','',500,'none','',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && ((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3'))) {

	SetPanelState('u37', 'pd2u37','none','',500,'none','',500);

}
});
gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';document.getElementById('u7_img').tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	SetPanelState('u6', 'pd0u6','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

	SetPanelVisibility('u20','hidden','none',500);

}

if ((GetGlobalVariableValue('NumVentAbiertas')) > Number('0')) {

	SetPanelState('u25', 'pd0u25','none','',500,'none','',500);

}
});
gv_vAlignTable['u8'] = 'center';document.getElementById('u9_img').tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	SetPanelState('u6', 'pd1u6','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u20','','none',500);

}

if ((GetGlobalVariableValue('NumVentAbiertas')) > Number('1')) {

	SetPanelState('u20', 'pd1u20','none','',500,'none','',500);

	SetPanelState('u25', 'pd2u25','none','',500,'none','',500);

}
});
gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u14'] = 'center';document.getElementById('u16_img').tabIndex = 0;

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if (true) {

	SetPanelState('u25', 'pd0u25','none','',500,'none','',500);

	SetPanelState('u15', 'pd0u15','none','',500,'none','',500);

	SetPanelVisibility('u25','toggle','none',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if ((GetGlobalVariableValue('NumVentAbiertas')) > Number('0')) {

	SetPanelState('u20', 'pd0u20','none','',500,'none','',500);

}
});
gv_vAlignTable['u17'] = 'center';document.getElementById('u18_img').tabIndex = 0;

u18.style.cursor = 'pointer';
$axure.eventManager.click('u18', function(e) {

if (true) {

	SetPanelState('u15', 'pd1u15','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u25','','none',500);

}

if ((GetGlobalVariableValue('NumVentAbiertas')) > Number('1')) {

	SetPanelState('u25', 'pd2u25','none','',500,'none','',500);

	SetPanelState('u20', 'pd1u20','none','',500,'none','',500);

}
});
gv_vAlignTable['u19'] = 'center';