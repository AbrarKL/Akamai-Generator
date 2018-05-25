var start_ts = Date["now"] ? Date["now"]() : +new Date;
var mme_cnt = 0;
var mme_cnt_lmt = 25;
var me_cnt = 0;
var me_vel = 0;
var mact = "";
var ta = 0;
var mduce_cnt = 0;
var mduce_cnt_lmt = 75;

fakeMouseMovements();
function fakeMouseMovements()
{
	var mouseMovementAmount = Math.floor(Math.random() * (mme_cnt_lmt - 2) ) + 2; // Amount of times to fake move the mouse between 2 and the max mouse movement var
	var randomXStart = Math.floor(Math.random() * (1900 - 200) ) + 200; // random X axis to start from between 200 and 1900
	var randomYStart = Math.floor(Math.random() * (1000 - 200) ) + 200; // random Y axis to start from between 200 and 1900
	console.log("Moving mouse: " + mouseMovementAmount + " times");
	console.log("Starting X coordinate: " + randomXStart);
	console.log("Starting Y coordinate: " + randomYStart);
	var moveXorY = Math.round(Math.random());
	for(var i = 0; i < mouseMovementAmount; i++)
	{
		if(moveXorY == 1)
		{
			randomXStart++;
			simulateCMA(randomXStart, randomYStart, 1)
		}
		else
		{
			randomYStart++;
			simulateCMA(randomXStart, randomYStart, 1)
		}
	}
	console.log("Ending X coordinate: " + randomXStart);
	console.log("Ending Y coordinate: " + randomYStart);	
	simulateCMA(randomXStart, randomYStart, 3) // Mouse pressed / mousedown
	simulateCMA(randomXStart, randomYStart, 4) // Mouse released / mouseup
	simulateCMA(randomXStart, randomYStart, 2) // Mouse click / click
}
/*
//simulate Mouse movement
simulateCMA(200, 200, 1) // state 1 = its movement
simulateCMA(200, 201, 1) // Moved y axis forward
simulateCMA(200, 202, 1) // Moved y axis forward again
simulateCMA(200, 203, 1) // Moved y axis forward again (so it seems legitimate)
console.log("Mouse Movement Count: " + mme_cnt);
simulateCMA(200, 202, 3) // Mouse pressed / mousedown
simulateCMA(200, 202, 4) // Mouse released / mouseup
simulateCMA(200, 202, 2) // Mouse click / click
console.log("Mouse Click Count: " + mduce_cnt);*/

console.log(mact);

function simulateCMA(xCoord, yCoord, _state) {
	// Events in order. _state 1 should happen more than once
	// _state 1 = mouse movement
	// _state 3 = mouse pressed on element
	// _state 4 = mouse released(after mouse)
	// _state 2 = mouse click
	
	// If mouse moved && mouse movement count is less than the mouse movement count limit (25 movements)
	// OR if state isn't 1 and mduce_cnt is less than hte mduce_cnt limit which is 75
    if (1 == _state && mme_cnt < mme_cnt_lmt || 1 != _state && mduce_cnt < mduce_cnt_lmt) {
        var hide = -1;
        var i = -1;
		// if props variable exists (not needed in our simulated one) and propsx exist and propsy exist (they should always)
		// props["pageX"] will be replaced with a random x coordinate
		// props["pageY"] will be replaecd with a random y coordinate
        hide = Math["floor"](xCoord);
        i = Math["floor"](yCoord);
        var value = -1; // Was var value = props["toElement"];
        var str = value; // Was var str = gf(value);
		// str returns undefined for some reason, so I assume we dont need above lines from var value = x etc
        var index = get_cf_date() - start_ts;
        var d = me_cnt + "," + _state + "," + index + "," + hide + "," + i;
        if (1 != _state) {
            d = d + "," + str;	
			//h = 0 if mouse moved
			//h = 1 if mouse clicked
			var h = 0;
			if(_state == 1)
			{
				h = 0;
			}
			else
			{
				h = 1;
			}
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

/*function gf(a) {
    var rv;
    if (rv = null == a ? document["activeElement"] : a, null == document["activeElement"]) {
        return -1;
    }
}*/

function get_cf_date() {
    return Date["now"] ? Date["now"]() : +new Date;
}
/*
This is Mouse Movement detection non simulated (test in web browser if needed)
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
}*/
