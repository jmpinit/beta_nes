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


Copy the contents of the beta_nes-min-book.js file into a bookmark as the address OR just drag this link to your bookmark bar <a href="javascript:(function(){var beta_nes = document.createElement('SCRIPT');beta_nes.type = 'text/javascript';beta_nes.src = '//rawgithub.com/jmptable/beta_nes/master/beta_nes-min.js';document.getElementsByTagName('head')[0].appendChild(beta_nes);})();">{beta nes}</a>. Visit [the Beta 2.0.0 simulator](https://6004.mit.edu/coursewarex/bsim.html) (must be an MIT person / have MIT certs) and click the bookmark you created. A screen should appear in the "Split" and "Simulator" views.

Now your code can access the screen using priviledged operations, like the tty console already present. Helpful routines and macros have been defined in the tv.uasm file.
