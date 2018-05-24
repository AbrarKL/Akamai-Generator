//Commented
var start_ts = Date["now"] ? Date["now"]() : +new Date;
var mme_cnt = 0;
var mme_cnt_lmt = 25;
var me_cnt = 0;
var me_vel = 0;
var mact = "";
var ta = 0;
var mduce_cnt = 0;
var mduce_cnt_lmt = 75;

function hmm(i) {
    cma(i, 1);
}

function hc(httpCode) {
    cma(httpCode, 2);
}

function hmd(mmCoreSplitViewBlock) {
    cma(mmCoreSplitViewBlock, 3);
}

function hmu(mmCoreSplitViewBlock) {
    cma(mmCoreSplitViewBlock, 4);
}
document["addEventListener"]("mousemove", hmm, true);
document["addEventListener"]("click", hc, true);
document["addEventListener"]("mousedown", hmd, true);
document["addEventListener"]("mouseup", hmu, true);

function cma(_props, _state) {
	// Events in order. _state 1 should happen more than once
	// _state 1 = mouse movement
	// _state 3 = mouse pressed on element
	// _state 4 = mouse released(after mouse)
	// _state 2 = mouse click
	
	// If mouse moved && mouse movement count is less than the mouse movement count limit (25 movements)
	// OR if state isn't 1 and mduce_cnt is less than hte mduce_cnt limit which is 75
    if (1 == _state && mme_cnt < mme_cnt_lmt || 1 != _state && mduce_cnt < mduce_cnt_lmt) {
        var props = _props || window["event"];
        var hide = -1;
        var i = -1;
		// if props variable exists (not needed in our simulated one) and propsx exist and propsy exist (they should always)
        if (props && props["pageX"] && props["pageY"]) {
			// props["pageX"] will be replaced with a random x coordinate
			// props["pageY"] will be replaecd with a random y coordinate
            hide = Math["floor"](props["pageX"]);
            i = Math["floor"](props["pageY"]);
        } else {
            if (props && props["clientX"] && props["clientY"]) {
                hide = Math["floor"](props["clientX"]);
                i = Math["floor"](props["clientY"]);
            }
        }
        var value = props["toElement"];
        if (null == value) {
            value = props["target"];
        }
        var str = gf(value);
		// str returns undefined for some reason, so I assume we dont need above lines from var value = x etc
        var index = get_cf_date() - start_ts;
        var d = me_cnt + "," + _state + "," + index + "," + hide + "," + i;
        if (1 != _state) {
            d = d + "," + str;	
			//h = 0 if mouse moved
			//h = 1 if mouse clicked
            var h = void 0 !== props["which"] ? props["which"] : props["button"];
            if (null != h && 1 != h) {
                d = d + "," + h;
            }
        }
        d = d + ";";
        me_vel = me_vel + me_cnt + _state + index + hide + i;
        mact = mact + d;
        ta += index;
    }
    if (1 == _state) {
        mme_cnt++;
    } else {
        mduce_cnt++;
    }
    me_cnt++;
}

function gf(a) {
    var rv;
    if (rv = null == a ? document["activeElement"] : a, null == document["activeElement"]) {
        return -1;
    }
}

function get_cf_date() {
    return Date["now"] ? Date["now"]() : +new Date;
}