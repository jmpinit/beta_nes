COMPRESSOR := ~/bin/yuicompressor-2.4.8.jar

beta_nes-min.js: beta_nes.js
	java -jar $(COMPRESSOR) $< -o $@
