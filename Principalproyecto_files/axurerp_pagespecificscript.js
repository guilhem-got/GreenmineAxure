for(var i = 0; i < 101; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('TamanoVentPq', '480');

SetGlobalVariableValue('NumVentAbiertas', '0');

}

});
gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u92'] = 'center';gv_vAlignTable['u10'] = 'center';document.getElementById('u11_img').tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	SetPanelState('u8', 'pd1u8','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u25','','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u8')) == ('pd1u8')))) {

	SetPanelState('u25', 'pd1u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u15')) == ('pd1u15')))) {

	SetPanelState('u25', 'pd2u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u20')) == ('pd1u20')))) {

	SetPanelState('u25', 'pd3u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u8')) == ('pd1u8')) && ((GetPanelState('u15')) == ('pd1u15'))))) {

	SetPanelState('u25', 'pd4u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u8')) == ('pd1u8')) && ((GetPanelState('u20')) == ('pd1u20'))))) {

	SetPanelState('u25', 'pd5u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u15')) == ('pd1u15')) && ((GetPanelState('u20')) == ('pd1u20'))))) {

	SetPanelState('u25', 'pd6u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u8')) == ('pd1u8')) && (((GetPanelState('u15')) == ('pd1u15')) && ((GetPanelState('u20')) == ('pd1u20')))))) {

	SetPanelState('u25', 'pd0u25','none','',500,'none','',500);

}
});
gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u14'] = 'center';document.getElementById('u16_img').tabIndex = 0;

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if (true) {

	SetPanelState('u15', 'pd0u15','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if ((GetGlobalVariableValue('NumVentAbiertas')) < Number('1')) {

	SetPanelVisibility('u25','hidden','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u8')) == ('pd1u8')))) {

	SetPanelState('u25', 'pd1u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u15')) == ('pd1u15')))) {

	SetPanelState('u25', 'pd2u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u20')) == ('pd1u20')))) {

	SetPanelState('u25', 'pd3u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u8')) == ('pd1u8')) && ((GetPanelState('u15')) == ('pd1u15'))))) {

	SetPanelState('u25', 'pd4u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u8')) == ('pd1u8')) && ((GetPanelState('u20')) == ('pd1u20'))))) {

	SetPanelState('u25', 'pd5u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u15')) == ('pd1u15')) && ((GetPanelState('u20')) == ('pd1u20'))))) {

	SetPanelState('u25', 'pd6u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u8')) == ('pd1u8')) && (((GetPanelState('u15')) == ('pd1u15')) && ((GetPanelState('u20')) == ('pd1u20')))))) {

	SetPanelState('u25', 'pd0u25','none','',500,'none','',500);

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

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u8')) == ('pd1u8')))) {

	SetPanelState('u25', 'pd1u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u15')) == ('pd1u15')))) {

	SetPanelState('u25', 'pd2u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u20')) == ('pd1u20')))) {

	SetPanelState('u25', 'pd3u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u8')) == ('pd1u8')) && ((GetPanelState('u15')) == ('pd1u15'))))) {

	SetPanelState('u25', 'pd4u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u8')) == ('pd1u8')) && ((GetPanelState('u20')) == ('pd1u20'))))) {

	SetPanelState('u25', 'pd5u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u15')) == ('pd1u15')) && ((GetPanelState('u20')) == ('pd1u20'))))) {

	SetPanelState('u25', 'pd6u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u8')) == ('pd1u8')) && (((GetPanelState('u15')) == ('pd1u15')) && ((GetPanelState('u20')) == ('pd1u20')))))) {

	SetPanelState('u25', 'pd0u25','none','',500,'none','',500);

}
});
gv_vAlignTable['u19'] = 'center';document.getElementById('u21_img').tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	SetPanelState('u20', 'pd0u20','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if ((GetGlobalVariableValue('NumVentAbiertas')) < Number('1')) {

	SetPanelVisibility('u25','hidden','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u8')) == ('pd1u8')))) {

	SetPanelState('u25', 'pd1u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u15')) == ('pd1u15')))) {

	SetPanelState('u25', 'pd2u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u20')) == ('pd1u20')))) {

	SetPanelState('u25', 'pd3u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u8')) == ('pd1u8')) && ((GetPanelState('u15')) == ('pd1u15'))))) {

	SetPanelState('u25', 'pd4u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u8')) == ('pd1u8')) && ((GetPanelState('u20')) == ('pd1u20'))))) {

	SetPanelState('u25', 'pd5u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u15')) == ('pd1u15')) && ((GetPanelState('u20')) == ('pd1u20'))))) {

	SetPanelState('u25', 'pd6u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u8')) == ('pd1u8')) && (((GetPanelState('u15')) == ('pd1u15')) && ((GetPanelState('u20')) == ('pd1u20')))))) {

	SetPanelState('u25', 'pd0u25','none','',500,'none','',500);

}
});
gv_vAlignTable['u22'] = 'center';document.getElementById('u23_img').tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	SetPanelState('u20', 'pd1u20','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u25','','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u8')) == ('pd1u8')))) {

	SetPanelState('u25', 'pd1u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u15')) == ('pd1u15')))) {

	SetPanelState('u25', 'pd2u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u20')) == ('pd1u20')))) {

	SetPanelState('u25', 'pd3u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u8')) == ('pd1u8')) && ((GetPanelState('u15')) == ('pd1u15'))))) {

	SetPanelState('u25', 'pd4u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u8')) == ('pd1u8')) && ((GetPanelState('u20')) == ('pd1u20'))))) {

	SetPanelState('u25', 'pd5u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u15')) == ('pd1u15')) && ((GetPanelState('u20')) == ('pd1u20'))))) {

	SetPanelState('u25', 'pd6u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u8')) == ('pd1u8')) && (((GetPanelState('u15')) == ('pd1u15')) && ((GetPanelState('u20')) == ('pd1u20')))))) {

	SetPanelState('u25', 'pd0u25','none','',500,'none','',500);

}
});
gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u29'] = 'center';u100.tabIndex = 0;

u100.style.cursor = 'pointer';
$axure.eventManager.click('u100', function(e) {

if (true) {

}
});
gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u96'] = 'center';u97.tabIndex = 0;

u97.style.cursor = 'pointer';
$axure.eventManager.click('u97', function(e) {

if (true) {

}
});
gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u7'] = 'center';document.getElementById('u9_img').tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	SetPanelState('u8', 'pd0u8','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if ((GetGlobalVariableValue('NumVentAbiertas')) < Number('1')) {

	SetPanelVisibility('u25','hidden','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u8')) == ('pd1u8')))) {

	SetPanelState('u25', 'pd1u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u15')) == ('pd1u15')))) {

	SetPanelState('u25', 'pd2u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u20')) == ('pd1u20')))) {

	SetPanelState('u25', 'pd3u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u8')) == ('pd1u8')) && ((GetPanelState('u15')) == ('pd1u15'))))) {

	SetPanelState('u25', 'pd4u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u8')) == ('pd1u8')) && ((GetPanelState('u20')) == ('pd1u20'))))) {

	SetPanelState('u25', 'pd5u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u15')) == ('pd1u15')) && ((GetPanelState('u20')) == ('pd1u20'))))) {

	SetPanelState('u25', 'pd6u25','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u8')) == ('pd1u8')) && (((GetPanelState('u15')) == ('pd1u15')) && ((GetPanelState('u20')) == ('pd1u20')))))) {

	SetPanelState('u25', 'pd0u25','none','',500,'none','',500);

}
});
gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u79'] = 'center';