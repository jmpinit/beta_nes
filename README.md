beta_nes
========

Bookmarklet for turning the online Beta simulator for MIT's 6.004 class into an NES-like system.

why?
----

* games
* demos
* fun

building
--------

Requires yui-compressor to be installed. Need to change the COMPRESSOR line in the makefile to the location of yuicompressor-x.y.z.jar on your system. Then do `git clone https://github.com/jmptable/beta_nes; cd beta_nes; make mini`.

using
-----


Copy the contents of the bootloader.js file into a bookmark as the address. Visit [the Beta 2.0.0 simulator](https://6004.mit.edu/coursewarex/bsim.html) (must be an MIT person / have MIT certs) and click the bookmark you created. A screen should appear in the "Split" and "Simulator" views.

Now your code can access the screen using priviledged operations, like the tty console already present. Helpful routines and macros have been defined in the tv.uasm file.
