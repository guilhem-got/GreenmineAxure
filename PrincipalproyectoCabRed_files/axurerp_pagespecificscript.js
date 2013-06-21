for(var i = 0; i < 118; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('TamanoVentPq', '480');

SetGlobalVariableValue('NumVentAbiertas', '0');

}

});
gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u86'] = 'top';gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u91'] = 'top';gv_vAlignTable['u10'] = 'center';document.getElementById('u12_img').tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	SetPanelState('u11', 'pd0u11','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if ((GetGlobalVariableValue('NumVentAbiertas')) < Number('1')) {

	SetPanelVisibility('u21','hidden','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u6')) == ('pd1u6')))) {

	SetPanelState('u21', 'pd1u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u11')) == ('pd1u11')))) {

	SetPanelState('u21', 'pd2u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u16')) == ('pd1u16')))) {

	SetPanelState('u21', 'pd3u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u6')) == ('pd1u6')) && ((GetPanelState('u11')) == ('pd1u11'))))) {

	SetPanelState('u21', 'pd4u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u6')) == ('pd1u6')) && ((GetPanelState('u16')) == ('pd1u16'))))) {

	SetPanelState('u21', 'pd5u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u11')) == ('pd1u11')) && ((GetPanelState('u16')) == ('pd1u16'))))) {

	SetPanelState('u21', 'pd6u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u6')) == ('pd1u6')) && (((GetPanelState('u11')) == ('pd1u11')) && ((GetPanelState('u16')) == ('pd1u16')))))) {

	SetPanelState('u21', 'pd0u21','none','',500,'none','',500);

}
});
gv_vAlignTable['u13'] = 'center';document.getElementById('u14_img').tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

	SetPanelState('u11', 'pd1u11','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u21','','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u6')) == ('pd1u6')))) {

	SetPanelState('u21', 'pd1u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u11')) == ('pd1u11')))) {

	SetPanelState('u21', 'pd2u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u16')) == ('pd1u16')))) {

	SetPanelState('u21', 'pd3u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u6')) == ('pd1u6')) && ((GetPanelState('u11')) == ('pd1u11'))))) {

	SetPanelState('u21', 'pd4u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u6')) == ('pd1u6')) && ((GetPanelState('u16')) == ('pd1u16'))))) {

	SetPanelState('u21', 'pd5u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u11')) == ('pd1u11')) && ((GetPanelState('u16')) == ('pd1u16'))))) {

	SetPanelState('u21', 'pd6u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u6')) == ('pd1u6')) && (((GetPanelState('u11')) == ('pd1u11')) && ((GetPanelState('u16')) == ('pd1u16')))))) {

	SetPanelState('u21', 'pd0u21','none','',500,'none','',500);

}
});
gv_vAlignTable['u15'] = 'center';document.getElementById('u17_img').tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	SetPanelState('u16', 'pd0u16','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if ((GetGlobalVariableValue('NumVentAbiertas')) < Number('1')) {

	SetPanelVisibility('u21','hidden','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u6')) == ('pd1u6')))) {

	SetPanelState('u21', 'pd1u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u11')) == ('pd1u11')))) {

	SetPanelState('u21', 'pd2u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u16')) == ('pd1u16')))) {

	SetPanelState('u21', 'pd3u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u6')) == ('pd1u6')) && ((GetPanelState('u11')) == ('pd1u11'))))) {

	SetPanelState('u21', 'pd4u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u6')) == ('pd1u6')) && ((GetPanelState('u16')) == ('pd1u16'))))) {

	SetPanelState('u21', 'pd5u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u11')) == ('pd1u11')) && ((GetPanelState('u16')) == ('pd1u16'))))) {

	SetPanelState('u21', 'pd6u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u6')) == ('pd1u6')) && (((GetPanelState('u11')) == ('pd1u11')) && ((GetPanelState('u16')) == ('pd1u16')))))) {

	SetPanelState('u21', 'pd0u21','none','',500,'none','',500);

}
});
gv_vAlignTable['u18'] = 'center';document.getElementById('u19_img').tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	SetPanelState('u16', 'pd1u16','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u21','','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u6')) == ('pd1u6')))) {

	SetPanelState('u21', 'pd1u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u11')) == ('pd1u11')))) {

	SetPanelState('u21', 'pd2u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u16')) == ('pd1u16')))) {

	SetPanelState('u21', 'pd3u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u6')) == ('pd1u6')) && ((GetPanelState('u11')) == ('pd1u11'))))) {

	SetPanelState('u21', 'pd4u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u6')) == ('pd1u6')) && ((GetPanelState('u16')) == ('pd1u16'))))) {

	SetPanelState('u21', 'pd5u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u11')) == ('pd1u11')) && ((GetPanelState('u16')) == ('pd1u16'))))) {

	SetPanelState('u21', 'pd6u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u6')) == ('pd1u6')) && (((GetPanelState('u11')) == ('pd1u11')) && ((GetPanelState('u16')) == ('pd1u16')))))) {

	SetPanelState('u21', 'pd0u21','none','',500,'none','',500);

}
});
gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u115'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u102'] = 'center';gv_vAlignTable['u103'] = 'top';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u117'] = 'center';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';document.getElementById('u7_img').tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	SetPanelState('u6', 'pd0u6','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if ((GetGlobalVariableValue('NumVentAbiertas')) < Number('1')) {

	SetPanelVisibility('u21','hidden','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u6')) == ('pd1u6')))) {

	SetPanelState('u21', 'pd1u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u11')) == ('pd1u11')))) {

	SetPanelState('u21', 'pd2u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u16')) == ('pd1u16')))) {

	SetPanelState('u21', 'pd3u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u6')) == ('pd1u6')) && ((GetPanelState('u11')) == ('pd1u11'))))) {

	SetPanelState('u21', 'pd4u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u6')) == ('pd1u6')) && ((GetPanelState('u16')) == ('pd1u16'))))) {

	SetPanelState('u21', 'pd5u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u11')) == ('pd1u11')) && ((GetPanelState('u16')) == ('pd1u16'))))) {

	SetPanelState('u21', 'pd6u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u6')) == ('pd1u6')) && (((GetPanelState('u11')) == ('pd1u11')) && ((GetPanelState('u16')) == ('pd1u16')))))) {

	SetPanelState('u21', 'pd0u21','none','',500,'none','',500);

}
});
gv_vAlignTable['u8'] = 'center';document.getElementById('u9_img').tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	SetPanelState('u6', 'pd1u6','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u21','','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u6')) == ('pd1u6')))) {

	SetPanelState('u21', 'pd1u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u11')) == ('pd1u11')))) {

	SetPanelState('u21', 'pd2u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u16')) == ('pd1u16')))) {

	SetPanelState('u21', 'pd3u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u6')) == ('pd1u6')) && ((GetPanelState('u11')) == ('pd1u11'))))) {

	SetPanelState('u21', 'pd4u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u6')) == ('pd1u6')) && ((GetPanelState('u16')) == ('pd1u16'))))) {

	SetPanelState('u21', 'pd5u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u11')) == ('pd1u11')) && ((GetPanelState('u16')) == ('pd1u16'))))) {

	SetPanelState('u21', 'pd6u21','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u6')) == ('pd1u6')) && (((GetPanelState('u11')) == ('pd1u11')) && ((GetPanelState('u16')) == ('pd1u16')))))) {

	SetPanelState('u21', 'pd0u21','none','',500,'none','',500);

}
});
gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u79'] = 'center';