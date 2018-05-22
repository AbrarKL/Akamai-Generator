var start_ts = Date["now"] ? Date["now"]() : +new Date;
var sensor_data;
var ver = 1.26;
var loc = "";
var z1 = 0;
var y1 = 2016;
var xagg = -1;
var pen = -1;
var wen = -1;
var den = -1;
var psub = "-";
var lang = "-";
var prod = "-";
var plen = -1;
var d2 = 0;
var d3 = 0;

var start = 0;
// This is the function that generates sensor data
try {
	start = get_cf_date();
	var step1_setup = updatet();
	var artistTrack = "3";
	var n = gd();
	var a = "do_en";
	var b = "dm_en";
	var size1 = "t_en";
	var i = a + "," + b + "," + size1;
	var r = forminfo();
	var d = "https://www.nike.com/gb/en_gb/";
	var s = "0,0"; // Should recreate the details proably
} catch (t) {
	console.log(t)
}


function get_cf_date() {
	return Date["now"] ? Date["now"]() : +new Date;
}

function updatet() {
	return get_cf_date() - start_ts;
}

function uar() {
	return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36";
}

function bmisc() {
	pen = 0;
	wen = 0;
	den = 0;
}

function gd() {
	var artistTrack = uar();
	var e = "" + ab(artistTrack);
	var c = start_ts / 2;
	var n = 1920;
	var a = 1040;
	var o = 1920;
	var f = 1080;
	var i = 1920;
	var r = 658;
	var d = 1920;
	zl = pi(start_ts / (y1 * y1));
	var lastNewline = Math["random"]();
	var I = pi(1E3 * lastNewline / 2)
	var l = lastNewline + "";
	return l = l["slice"](0, 11) + I, get_browser(), bc(), bmisc(), artistTrack + ",uaend," + xagg + "," + psub + "," + lang + "," + prod + "," + plen + "," + pen + "," + wen + "," + den + "," + z1 + "," + d3 + "," + n + "," + a + "," + o + "," + f + "," + i + "," + r + "," + d + "," + bd() + "," + e + "," + l +
		"," + c + ",loc:" + loc; // Look at d3
}

function pi(name) {
	return parseInt(name);
}

function get_browser() {
	psub = "20030107";
	lang = "en-GB";
	prod = "Gecko";
	plen = 2; // Plugin length
}

function bd() {
	var EnvJasmine = [];
	var DOMContentLoaded = 0;
	EnvJasmine["push"](",cpen:" + DOMContentLoaded);
	var code = 0;
	EnvJasmine["push"]("i1:" + code);
	var _V5 = 0;
	EnvJasmine["push"]("dm:" + _V5);
	var PL$23 = 1;
	EnvJasmine["push"]("cwen:" + PL$23);
	var PL$20 = 1;
	EnvJasmine["push"]("non:" + PL$20);
	var PL$15 = 0;
	EnvJasmine["push"]("opc:" + PL$15);
	var status = 0;
	EnvJasmine["push"]("fc:" + status);
	var passed = 0;
	EnvJasmine["push"]("sc:" + passed);
	var failed = 1;
	EnvJasmine["push"]("wrc:" + failed);
	var s = 0;
	EnvJasmine["push"]("isc:" + s);
	d2 = pi(z1 / 23); // come back
	var u = 1;
	EnvJasmine["push"]("vib:" + u);
	var l = 1;
	EnvJasmine["push"]("bat:" + l);
	var _ = 0;
	EnvJasmine["push"]("x11:" + _);
	var v = 1;
	return EnvJasmine["push"]("x12:" + v), EnvJasmine["join"](",");
}

function bc() {
	var a = 1;
	var b = 1;
	var c = 0;
	var n = 0;
	var t = 1;
	var o = 1;
	var f = 1;
	var i = 0;
	var r = 1;
	var d = 1;
	var s = 1;
	var u = 1;
	var l = 0;
	var _ = 1;
	xagg = a + (b << 1) + (c << 2) + (n << 3) + (t << 4) + (o << 5) + (f << 6) + (i << 7) + (r << 8) + (d << 9) + (s << 10) + (u << 11) + (l << 12) + (_ << 13);;
}

function ab(b) {
	if (b == null) {
		return -1;
	}
	try {
		var b = 0;
		var a = 0;
		for (var a = 0; a < b["length"]; a++) {
			var d = b["charCodeAt"](a);
			if (d < 128) {
				b = b + d;
			}
		}
		return b;
	} catch (t) {
		return -2;
	}
}

function forminfo() {
	return "0,0,0,0,630,630,0;0,0,0,0,2392,1230,0;1,0,0,0,2573,883,0;0,-1,0,0,2588,520,0;0,-1,0,0,2559,309,0;";
	// Should look at forminfo() on deobfuscated script, just have some confusions 
	// Preset form info for nike (not sure if this actually matters later on)
}