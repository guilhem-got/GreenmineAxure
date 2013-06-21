for(var i = 0; i < 118; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('TamanoVentPq', '480');

SetGlobalVariableValue('NumVentAbiertas', '0');

}

});
gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u22'] = 'center';document.getElementById('u24_img').tabIndex = 0;

u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

	SetPanelState('u23', 'pd0u23','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if ((GetGlobalVariableValue('NumVentAbiertas')) < Number('1')) {

	SetPanelVisibility('u38','hidden','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u23')) == ('pd1u23')))) {

	SetPanelState('u38', 'pd1u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u28')) == ('pd1u28')))) {

	SetPanelState('u38', 'pd2u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u33')) == ('pd1u33')))) {

	SetPanelState('u38', 'pd3u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u23')) == ('pd1u23')) && ((GetPanelState('u28')) == ('pd1u28'))))) {

	SetPanelState('u38', 'pd4u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u23')) == ('pd1u23')) && ((GetPanelState('u33')) == ('pd1u33'))))) {

	SetPanelState('u38', 'pd5u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u28')) == ('pd1u28')) && ((GetPanelState('u33')) == ('pd1u33'))))) {

	SetPanelState('u38', 'pd6u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u23')) == ('pd1u23')) && (((GetPanelState('u28')) == ('pd1u28')) && ((GetPanelState('u33')) == ('pd1u33')))))) {

	SetPanelState('u38', 'pd0u38','none','',500,'none','',500);

}
});
gv_vAlignTable['u25'] = 'center';document.getElementById('u26_img').tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	SetPanelState('u23', 'pd1u23','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u38','','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u23')) == ('pd1u23')))) {

	SetPanelState('u38', 'pd1u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u28')) == ('pd1u28')))) {

	SetPanelState('u38', 'pd2u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u33')) == ('pd1u33')))) {

	SetPanelState('u38', 'pd3u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u23')) == ('pd1u23')) && ((GetPanelState('u28')) == ('pd1u28'))))) {

	SetPanelState('u38', 'pd4u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u23')) == ('pd1u23')) && ((GetPanelState('u33')) == ('pd1u33'))))) {

	SetPanelState('u38', 'pd5u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u28')) == ('pd1u28')) && ((GetPanelState('u33')) == ('pd1u33'))))) {

	SetPanelState('u38', 'pd6u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u23')) == ('pd1u23')) && (((GetPanelState('u28')) == ('pd1u28')) && ((GetPanelState('u33')) == ('pd1u33')))))) {

	SetPanelState('u38', 'pd0u38','none','',500,'none','',500);

}
});
gv_vAlignTable['u27'] = 'center';document.getElementById('u29_img').tabIndex = 0;

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

	SetPanelState('u28', 'pd0u28','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if ((GetGlobalVariableValue('NumVentAbiertas')) < Number('1')) {

	SetPanelVisibility('u38','hidden','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u23')) == ('pd1u23')))) {

	SetPanelState('u38', 'pd1u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u28')) == ('pd1u28')))) {

	SetPanelState('u38', 'pd2u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u33')) == ('pd1u33')))) {

	SetPanelState('u38', 'pd3u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u23')) == ('pd1u23')) && ((GetPanelState('u28')) == ('pd1u28'))))) {

	SetPanelState('u38', 'pd4u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u23')) == ('pd1u23')) && ((GetPanelState('u33')) == ('pd1u33'))))) {

	SetPanelState('u38', 'pd5u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u28')) == ('pd1u28')) && ((GetPanelState('u33')) == ('pd1u33'))))) {

	SetPanelState('u38', 'pd6u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u23')) == ('pd1u23')) && (((GetPanelState('u28')) == ('pd1u28')) && ((GetPanelState('u33')) == ('pd1u33')))))) {

	SetPanelState('u38', 'pd0u38','none','',500,'none','',500);

}
});
gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u102'] = 'center';gv_vAlignTable['u103'] = 'top';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u108'] = 'top';gv_vAlignTable['u30'] = 'center';document.getElementById('u31_img').tabIndex = 0;

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

	SetPanelState('u28', 'pd1u28','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u38','','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u23')) == ('pd1u23')))) {

	SetPanelState('u38', 'pd1u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u28')) == ('pd1u28')))) {

	SetPanelState('u38', 'pd2u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u33')) == ('pd1u33')))) {

	SetPanelState('u38', 'pd3u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u23')) == ('pd1u23')) && ((GetPanelState('u28')) == ('pd1u28'))))) {

	SetPanelState('u38', 'pd4u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u23')) == ('pd1u23')) && ((GetPanelState('u33')) == ('pd1u33'))))) {

	SetPanelState('u38', 'pd5u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u28')) == ('pd1u28')) && ((GetPanelState('u33')) == ('pd1u33'))))) {

	SetPanelState('u38', 'pd6u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u23')) == ('pd1u23')) && (((GetPanelState('u28')) == ('pd1u28')) && ((GetPanelState('u33')) == ('pd1u33')))))) {

	SetPanelState('u38', 'pd0u38','none','',500,'none','',500);

}
});
gv_vAlignTable['u32'] = 'center';document.getElementById('u34_img').tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelState('u33', 'pd0u33','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if ((GetGlobalVariableValue('NumVentAbiertas')) < Number('1')) {

	SetPanelVisibility('u38','hidden','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u23')) == ('pd1u23')))) {

	SetPanelState('u38', 'pd1u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u28')) == ('pd1u28')))) {

	SetPanelState('u38', 'pd2u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u33')) == ('pd1u33')))) {

	SetPanelState('u38', 'pd3u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u23')) == ('pd1u23')) && ((GetPanelState('u28')) == ('pd1u28'))))) {

	SetPanelState('u38', 'pd4u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u23')) == ('pd1u23')) && ((GetPanelState('u33')) == ('pd1u33'))))) {

	SetPanelState('u38', 'pd5u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u28')) == ('pd1u28')) && ((GetPanelState('u33')) == ('pd1u33'))))) {

	SetPanelState('u38', 'pd6u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u23')) == ('pd1u23')) && (((GetPanelState('u28')) == ('pd1u28')) && ((GetPanelState('u33')) == ('pd1u33')))))) {

	SetPanelState('u38', 'pd0u38','none','',500,'none','',500);

}
});
gv_vAlignTable['u35'] = 'center';document.getElementById('u36_img').tabIndex = 0;

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	SetPanelState('u33', 'pd1u33','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u38','','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u23')) == ('pd1u23')))) {

	SetPanelState('u38', 'pd1u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u28')) == ('pd1u28')))) {

	SetPanelState('u38', 'pd2u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u33')) == ('pd1u33')))) {

	SetPanelState('u38', 'pd3u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u23')) == ('pd1u23')) && ((GetPanelState('u28')) == ('pd1u28'))))) {

	SetPanelState('u38', 'pd4u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u23')) == ('pd1u23')) && ((GetPanelState('u33')) == ('pd1u33'))))) {

	SetPanelState('u38', 'pd5u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u28')) == ('pd1u28')) && ((GetPanelState('u33')) == ('pd1u33'))))) {

	SetPanelState('u38', 'pd6u38','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u23')) == ('pd1u23')) && (((GetPanelState('u28')) == ('pd1u28')) && ((GetPanelState('u33')) == ('pd1u33')))))) {

	SetPanelState('u38', 'pd0u38','none','',500,'none','',500);

}
});
gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u115'] = 'center';gv_vAlignTable['u117'] = 'center';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u79'] = 'top';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u58'] = 'center';