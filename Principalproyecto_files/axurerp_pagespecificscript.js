for(var i = 0; i < 149; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('TamanoVentPq', '480');

SetGlobalVariableValue('NumVentAbiertas', '0');

}

});
gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u81'] = 'center';document.getElementById('u83_img').tabIndex = 0;

u83.style.cursor = 'pointer';
$axure.eventManager.click('u83', function(e) {

if (true) {

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if ((GetGlobalVariableValue('NumVentAbiertas')) < Number('1')) {

	SetPanelVisibility('u92','hidden','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u75')) == ('pd1u75')))) {

	SetPanelState('u92', 'pd1u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u82')) == ('pd1u82')))) {

	SetPanelState('u92', 'pd2u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u87')) == ('pd1u87')))) {

	SetPanelState('u92', 'pd3u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u75')) == ('pd1u75')) && ((GetPanelState('u82')) == ('pd1u82'))))) {

	SetPanelState('u92', 'pd4u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u75')) == ('pd1u75')) && ((GetPanelState('u87')) == ('pd1u87'))))) {

	SetPanelState('u92', 'pd5u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u82')) == ('pd1u82')) && ((GetPanelState('u87')) == ('pd1u87'))))) {

	SetPanelState('u92', 'pd6u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u75')) == ('pd1u75')) && (((GetPanelState('u82')) == ('pd1u82')) && ((GetPanelState('u87')) == ('pd1u87')))))) {

	SetPanelState('u92', 'pd0u92','none','',500,'none','',500);

}
});
gv_vAlignTable['u84'] = 'center';document.getElementById('u85_img').tabIndex = 0;

u85.style.cursor = 'pointer';
$axure.eventManager.click('u85', function(e) {

if (true) {

	SetPanelState('u82', 'pd1u82','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u92','','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u75')) == ('pd1u75')))) {

	SetPanelState('u92', 'pd1u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u82')) == ('pd1u82')))) {

	SetPanelState('u92', 'pd2u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u87')) == ('pd1u87')))) {

	SetPanelState('u92', 'pd3u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u75')) == ('pd1u75')) && ((GetPanelState('u82')) == ('pd1u82'))))) {

	SetPanelState('u92', 'pd4u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u75')) == ('pd1u75')) && ((GetPanelState('u87')) == ('pd1u87'))))) {

	SetPanelState('u92', 'pd5u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u82')) == ('pd1u82')) && ((GetPanelState('u87')) == ('pd1u87'))))) {

	SetPanelState('u92', 'pd6u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u75')) == ('pd1u75')) && (((GetPanelState('u82')) == ('pd1u82')) && ((GetPanelState('u87')) == ('pd1u87')))))) {

	SetPanelState('u92', 'pd0u92','none','',500,'none','',500);

}
});
gv_vAlignTable['u86'] = 'center';document.getElementById('u88_img').tabIndex = 0;

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

	SetPanelState('u87', 'pd0u87','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if ((GetGlobalVariableValue('NumVentAbiertas')) < Number('1')) {

	SetPanelVisibility('u92','hidden','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u75')) == ('pd1u75')))) {

	SetPanelState('u92', 'pd1u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u82')) == ('pd1u82')))) {

	SetPanelState('u92', 'pd2u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u87')) == ('pd1u87')))) {

	SetPanelState('u92', 'pd3u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u75')) == ('pd1u75')) && ((GetPanelState('u82')) == ('pd1u82'))))) {

	SetPanelState('u92', 'pd4u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u75')) == ('pd1u75')) && ((GetPanelState('u87')) == ('pd1u87'))))) {

	SetPanelState('u92', 'pd5u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u82')) == ('pd1u82')) && ((GetPanelState('u87')) == ('pd1u87'))))) {

	SetPanelState('u92', 'pd6u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u75')) == ('pd1u75')) && (((GetPanelState('u82')) == ('pd1u82')) && ((GetPanelState('u87')) == ('pd1u87')))))) {

	SetPanelState('u92', 'pd0u92','none','',500,'none','',500);

}
});
gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u1'] = 'center';document.getElementById('u90_img').tabIndex = 0;

u90.style.cursor = 'pointer';
$axure.eventManager.click('u90', function(e) {

if (true) {

	SetPanelState('u87', 'pd1u87','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u92','','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u75')) == ('pd1u75')))) {

	SetPanelState('u92', 'pd1u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u82')) == ('pd1u82')))) {

	SetPanelState('u92', 'pd2u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u87')) == ('pd1u87')))) {

	SetPanelState('u92', 'pd3u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u75')) == ('pd1u75')) && ((GetPanelState('u82')) == ('pd1u82'))))) {

	SetPanelState('u92', 'pd4u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u75')) == ('pd1u75')) && ((GetPanelState('u87')) == ('pd1u87'))))) {

	SetPanelState('u92', 'pd5u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u82')) == ('pd1u82')) && ((GetPanelState('u87')) == ('pd1u87'))))) {

	SetPanelState('u92', 'pd6u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u75')) == ('pd1u75')) && (((GetPanelState('u82')) == ('pd1u82')) && ((GetPanelState('u87')) == ('pd1u87')))))) {

	SetPanelState('u92', 'pd0u92','none','',500,'none','',500);

}
});
gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u99'] = 'center';document.getElementById('u18_img').tabIndex = 0;

u18.style.cursor = 'pointer';
$axure.eventManager.click('u18', function(e) {

if (true) {

	SetPanelState('u17', 'pd0u17','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if ((GetGlobalVariableValue('NumVentAbiertas')) < Number('1')) {

	SetPanelVisibility('u22','hidden','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u7')) == ('pd1u7')))) {

	SetPanelState('u22', 'pd1u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u12')) == ('pd1u12')))) {

	SetPanelState('u22', 'pd2u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u17')) == ('pd1u17')))) {

	SetPanelState('u22', 'pd3u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u7')) == ('pd1u7')) && ((GetPanelState('u12')) == ('pd1u12'))))) {

	SetPanelState('u22', 'pd4u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u7')) == ('pd1u7')) && ((GetPanelState('u17')) == ('pd1u17'))))) {

	SetPanelState('u22', 'pd5u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u12')) == ('pd1u12')) && ((GetPanelState('u17')) == ('pd1u17'))))) {

	SetPanelState('u22', 'pd6u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u7')) == ('pd1u7')) && (((GetPanelState('u12')) == ('pd1u12')) && ((GetPanelState('u17')) == ('pd1u17')))))) {

	SetPanelState('u22', 'pd0u22','none','',500,'none','',500);

}
});
gv_vAlignTable['u19'] = 'center';document.getElementById('u20_img').tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	SetPanelState('u17', 'pd1u17','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u22','','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u7')) == ('pd1u7')))) {

	SetPanelState('u22', 'pd1u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u12')) == ('pd1u12')))) {

	SetPanelState('u22', 'pd2u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u17')) == ('pd1u17')))) {

	SetPanelState('u22', 'pd3u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u7')) == ('pd1u7')) && ((GetPanelState('u12')) == ('pd1u12'))))) {

	SetPanelState('u22', 'pd4u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u7')) == ('pd1u7')) && ((GetPanelState('u17')) == ('pd1u17'))))) {

	SetPanelState('u22', 'pd5u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u12')) == ('pd1u12')) && ((GetPanelState('u17')) == ('pd1u17'))))) {

	SetPanelState('u22', 'pd6u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u7')) == ('pd1u7')) && (((GetPanelState('u12')) == ('pd1u12')) && ((GetPanelState('u17')) == ('pd1u17')))))) {

	SetPanelState('u22', 'pd0u22','none','',500,'none','',500);

}
});
gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u102'] = 'center';gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u30'] = 'top';document.getElementById('u10_img').tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	SetPanelState('u7', 'pd1u7','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u22','','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u7')) == ('pd1u7')))) {

	SetPanelState('u22', 'pd1u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u12')) == ('pd1u12')))) {

	SetPanelState('u22', 'pd2u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u17')) == ('pd1u17')))) {

	SetPanelState('u22', 'pd3u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u7')) == ('pd1u7')) && ((GetPanelState('u12')) == ('pd1u12'))))) {

	SetPanelState('u22', 'pd4u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u7')) == ('pd1u7')) && ((GetPanelState('u17')) == ('pd1u17'))))) {

	SetPanelState('u22', 'pd5u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u12')) == ('pd1u12')) && ((GetPanelState('u17')) == ('pd1u17'))))) {

	SetPanelState('u22', 'pd6u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u7')) == ('pd1u7')) && (((GetPanelState('u12')) == ('pd1u12')) && ((GetPanelState('u17')) == ('pd1u17')))))) {

	SetPanelState('u22', 'pd0u22','none','',500,'none','',500);

}
});
gv_vAlignTable['u11'] = 'center';document.getElementById('u13_img').tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	SetPanelState('u12', 'pd0u12','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if ((GetGlobalVariableValue('NumVentAbiertas')) < Number('1')) {

	SetPanelVisibility('u22','hidden','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u7')) == ('pd1u7')))) {

	SetPanelState('u22', 'pd1u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u12')) == ('pd1u12')))) {

	SetPanelState('u22', 'pd2u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u17')) == ('pd1u17')))) {

	SetPanelState('u22', 'pd3u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u7')) == ('pd1u7')) && ((GetPanelState('u12')) == ('pd1u12'))))) {

	SetPanelState('u22', 'pd4u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u7')) == ('pd1u7')) && ((GetPanelState('u17')) == ('pd1u17'))))) {

	SetPanelState('u22', 'pd5u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u12')) == ('pd1u12')) && ((GetPanelState('u17')) == ('pd1u17'))))) {

	SetPanelState('u22', 'pd6u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u7')) == ('pd1u7')) && (((GetPanelState('u12')) == ('pd1u12')) && ((GetPanelState('u17')) == ('pd1u17')))))) {

	SetPanelState('u22', 'pd0u22','none','',500,'none','',500);

}
});
gv_vAlignTable['u14'] = 'center';document.getElementById('u15_img').tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	SetPanelState('u12', 'pd1u12','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u22','','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u7')) == ('pd1u7')))) {

	SetPanelState('u22', 'pd1u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u12')) == ('pd1u12')))) {

	SetPanelState('u22', 'pd2u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u17')) == ('pd1u17')))) {

	SetPanelState('u22', 'pd3u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u7')) == ('pd1u7')) && ((GetPanelState('u12')) == ('pd1u12'))))) {

	SetPanelState('u22', 'pd4u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u7')) == ('pd1u7')) && ((GetPanelState('u17')) == ('pd1u17'))))) {

	SetPanelState('u22', 'pd5u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u12')) == ('pd1u12')) && ((GetPanelState('u17')) == ('pd1u17'))))) {

	SetPanelState('u22', 'pd6u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u7')) == ('pd1u7')) && (((GetPanelState('u12')) == ('pd1u12')) && ((GetPanelState('u17')) == ('pd1u17')))))) {

	SetPanelState('u22', 'pd0u22','none','',500,'none','',500);

}
});
gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u112'] = 'top';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u120'] = 'top';gv_vAlignTable['u122'] = 'center';gv_vAlignTable['u124'] = 'center';gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u128'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';document.getElementById('u8_img').tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	SetPanelState('u7', 'pd0u7','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if ((GetGlobalVariableValue('NumVentAbiertas')) < Number('1')) {

	SetPanelVisibility('u22','hidden','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u7')) == ('pd1u7')))) {

	SetPanelState('u22', 'pd1u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u12')) == ('pd1u12')))) {

	SetPanelState('u22', 'pd2u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u17')) == ('pd1u17')))) {

	SetPanelState('u22', 'pd3u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u7')) == ('pd1u7')) && ((GetPanelState('u12')) == ('pd1u12'))))) {

	SetPanelState('u22', 'pd4u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u7')) == ('pd1u7')) && ((GetPanelState('u17')) == ('pd1u17'))))) {

	SetPanelState('u22', 'pd5u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u12')) == ('pd1u12')) && ((GetPanelState('u17')) == ('pd1u17'))))) {

	SetPanelState('u22', 'pd6u22','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u7')) == ('pd1u7')) && (((GetPanelState('u12')) == ('pd1u12')) && ((GetPanelState('u17')) == ('pd1u17')))))) {

	SetPanelState('u22', 'pd0u22','none','',500,'none','',500);

}
});
gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u132'] = 'top';gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u145'] = 'center';u146.tabIndex = 0;

u146.style.cursor = 'pointer';
$axure.eventManager.click('u146', function(e) {

if (true) {

	SetPanelState('u6', 'pd1u6','none','',500,'none','',500);

}
});
gv_vAlignTable['u146'] = 'top';gv_vAlignTable['u148'] = 'center';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u73'] = 'center';u74.tabIndex = 0;

u74.style.cursor = 'pointer';
$axure.eventManager.click('u74', function(e) {

if (true) {

	SetPanelState('u6', 'pd0u6','none','',500,'none','',500);

}
});
gv_vAlignTable['u74'] = 'top';document.getElementById('u76_img').tabIndex = 0;

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

	SetPanelState('u75', 'pd0u75','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetGlobalVariableValue('NumVentAbiertas') - 1) + '');

}

if ((GetGlobalVariableValue('NumVentAbiertas')) < Number('1')) {

	SetPanelVisibility('u92','hidden','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u75')) == ('pd1u75')))) {

	SetPanelState('u92', 'pd1u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u82')) == ('pd1u82')))) {

	SetPanelState('u92', 'pd2u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u87')) == ('pd1u87')))) {

	SetPanelState('u92', 'pd3u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u75')) == ('pd1u75')) && ((GetPanelState('u82')) == ('pd1u82'))))) {

	SetPanelState('u92', 'pd4u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u75')) == ('pd1u75')) && ((GetPanelState('u87')) == ('pd1u87'))))) {

	SetPanelState('u92', 'pd5u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u82')) == ('pd1u82')) && ((GetPanelState('u87')) == ('pd1u87'))))) {

	SetPanelState('u92', 'pd6u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u75')) == ('pd1u75')) && (((GetPanelState('u82')) == ('pd1u82')) && ((GetPanelState('u87')) == ('pd1u87')))))) {

	SetPanelState('u92', 'pd0u92','none','',500,'none','',500);

}
});
gv_vAlignTable['u77'] = 'center';document.getElementById('u78_img').tabIndex = 0;

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if (true) {

	SetPanelState('u75', 'pd1u75','none','',500,'none','',500);

SetGlobalVariableValue('NumVentAbiertas', '' + (GetNum(GetGlobalVariableValue('NumVentAbiertas')) + 1) + ' ');

	SetPanelVisibility('u92','','none',500);

}

if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u75')) == ('pd1u75')))) {

	SetPanelState('u92', 'pd1u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u82')) == ('pd1u82')))) {

	SetPanelState('u92', 'pd2u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('1')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('1')) && ((GetPanelState('u87')) == ('pd1u87')))) {

	SetPanelState('u92', 'pd3u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u75')) == ('pd1u75')) && ((GetPanelState('u82')) == ('pd1u82'))))) {

	SetPanelState('u92', 'pd4u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u75')) == ('pd1u75')) && ((GetPanelState('u87')) == ('pd1u87'))))) {

	SetPanelState('u92', 'pd5u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('2')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('2')) && (((GetPanelState('u82')) == ('pd1u82')) && ((GetPanelState('u87')) == ('pd1u87'))))) {

	SetPanelState('u92', 'pd6u92','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('NumVentAbiertas')) <= Number('3')) && (((GetGlobalVariableValue('NumVentAbiertas')) >= Number('3')) && (((GetPanelState('u75')) == ('pd1u75')) && (((GetPanelState('u82')) == ('pd1u82')) && ((GetPanelState('u87')) == ('pd1u87')))))) {

	SetPanelState('u92', 'pd0u92','none','',500,'none','',500);

}
});
gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u34'] = 'center';