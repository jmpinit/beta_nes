$(".tty").prepend( '<div style="float: right;"><canvas id="television" width="192" height="128" style="background-color: lightblue;">xbetahack ERROR: html5 canvas is missing.</canvas></div>');

bhack = {
	tv: {
		canvas: null,
		width: 96,
		height: 64,
		pos: 0,
		
		fill: function(col) {
			var c = bhack.tv.canvas;
			var ctx = c.getContext("2d");
			ctx.fillStyle = col;
			ctx.fillRect(0, 0, c.width, c.height);
		},
		clear: function() {
			bhack.tv.fill("#FFF");
			bhack.tv.pos = 0;
		},
		set_pos: function(newpos) { bhack.tv.pos = newpos % (bhack.tv.width * bhack.tv.height); },
		out: function(color) {
			
			var tv = bhack.tv;
			var c = tv.canvas;
			var ctx = c.getContext("2d");

			var style = tv.palette[color];
			if(style) {
				ctx.fillStyle = style;
					
				var x = tv.pos % tv.width;
				var xs = c.width/tv.width;
				var y = Math.floor(tv.pos / tv.width);
				var ys = c.height/tv.height;
				ctx.fillRect(x * xs, y * ys, xs, ys);
			}
			
			tv.pos += 1;
			tv.pos = tv.pos % (tv.width * tv.height);
		},
		
		palette: [
			"rgb(124,124,124)",
			"rgb(0,0,252)",
			"rgb(0,0,188)",
			"rgb(68,40,188)",
			"rgb(148,0,132)",
			"rgb(168,0,32)",
			"rgb(168,16,0)",
			"rgb(136,20,0)",
			"rgb(80,48,0)",
			"rgb(0,120,0)",
			"rgb(0,104,0)",
			"rgb(0,88,0)",
			"rgb(0,64,88)",
			"rgb(0,0,0)",
			"rgb(0,0,0)",
			"rgb(0,0,0)",
			
			"rgb(188,188,188)",
			"rgb(0,120,248)",
			"rgb(0,88,248)",
			"rgb(104,68,252)",
			"rgb(216,0,204)",
			"rgb(228,0,88)",
			"rgb(248,56,0)",
			"rgb(228,92,16)",
			"rgb(172,124,0)",
			"rgb(0,184,0)",
			"rgb(0,168,0)",
			"rgb(0,168,68)",
			"rgb(0,136,136)",
			"rgb(0,0,0)",
			"rgb(0,0,0)",
			"rgb(0,0,0)",
			
			"rgb(248,248,248)",
			"rgb(60,188,252)",
			"rgb(104,136,252)",
			"rgb(152,120,248)",
			"rgb(248,120,248)",
			"rgb(248,88,152)",
			"rgb(248,120,88)",
			"rgb(252,160,68)",
			"rgb(248,184,0)",
			"rgb(184,248,24)",
			"rgb(88,216,84)",
			"rgb(88,248,152)",
			"rgb(0,232,216)",
			"rgb(120,120,120)",
			"rgb(0,0,0)",
			"rgb(0,0,0)",
			
			"rgb(252,252,252)",
			"rgb(164,228,252)",
			"rgb(184,184,248)",
			"rgb(216,184,248)",
			"rgb(248,184,248)",
			"rgb(248,164,192)",
			"rgb(240,208,176)",
			"rgb(252,224,168)",
			"rgb(248,216,120)",
			"rgb(216,248,120)",
			"rgb(184,248,184)",
			"rgb(184,248,216)",
			"rgb(0,252,252)",
			"rgb(216,216,216)",
			"rgb(0,0,0)",
			"rgb(0,0,0)"
		]
	}	
}

bhack.tv.canvas = $("#television")[0];
bhack.tv.fill("#FFF");

var x = BSim.Beta.Opcodes[0x00].exec;
BSim.Beta.Opcodes[0x00].exec = function PRIV_OP_MOD(a, literal, c) {
	switch(literal) {
		case 99:	// clear
			bhack.tv.clear();
			break;
		case 100:	// set pos
			bhack.tv.set_pos(this.readRegister(a));
			break;
		case 101:	// put byte
			bhack.tv.out(this.readRegister(a));
			break;
			
		default:
			x(a, literal, c);
	}
}