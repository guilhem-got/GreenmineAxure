﻿for(var i = 0; i < 161; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('TamanoVentPq', '480');

SetGlobalVariableValue('NumVentAbiertas', '0');

}

});
gv_vAlignTable['u154'] = 'center';gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u89'] = 'top';gv_vAlignTable['u160'] = 'center';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u17'] = 'center';document.getElementById('u18_img').tabIndex = 0;

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
gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u131'] = 'center';document.getElementById('u21_img').tabIndex = 0;

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
gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u109'] = 'top';gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u10'] = 'center';document.getElementById('u11_img').tabIndex = 0;

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
gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u112'] = 'top';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u117'] = 'top';gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u7'] = 'center';document.getElementById('u9_img').tabIndex = 0;

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
gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u150'] = 'center';gv_vAlignTable['u152'] = 'center';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u142'] = 'top';gv_vAlignTable['u144'] = 'center';gv_vAlignTable['u146'] = 'center';gv_vAlignTable['u148'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u35'] = 'center';