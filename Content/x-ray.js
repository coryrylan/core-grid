﻿/*! X-rayHTML - v0.1.0 - 2013-01-23
* https://github.com/filamentgroup/X-rayHTML
* Copyright (c) 2013 Mat Marquis; Licensed MIT */

/*! Modified For angular views & to work with prism js
  See: i.setAttribute( "class", "language-markup" ); 
*/
(function (e) { var t = "xrayhtml", n = { text: { open: "View Source", close: "View Demo" }, classes: { button: "btn btn-small", open: "view-source", sourcepanel: "source-panel" }, initSelector: "[data-" + t + "]", defaultReveal: "inline" }, r = { _create: function () { return e(this).each(function () { var n = e(this).data("init." + t); if (n) { return false } e(this).data("init." + t, true)[t]("_init").trigger("create." + t) }) }, _init: function () { var r = e(this).data(t) || n.defaultReveal; if (r === "flip") { e(this)[t]("_createButton") } e(this).addClass(t + " " + "method-" + r)[t]("_createSource") }, _createButton: function () { var t = document.createElement("a"), r = document.createTextNode(n.text.open), i = e(this); t.setAttribute("class", n.classes.button); t.href = "#"; t.appendChild(r); e(t).bind("click", function (e) { var r = i.attr("class").indexOf(n.classes.open) > -1; i[r ? "removeClass" : "addClass"](n.classes.open); t.innerHTML = r ? n.text.open : n.text.close; e.preventDefault() }).insertBefore(i) }, _createSource: function () { var t = this, r = document.createElement("pre"), i = document.createElement("code"), s = document.createElement("div"), o = document.createElement("div"), u = t.innerHTML, a = document.createTextNode(u); i.setAttribute("class", "language-markup");s.setAttribute("class", "snippet"); e(t).wrapInner(s); i.appendChild(a); r.appendChild(i); o.setAttribute("class", n.classes.sourcepanel); o.appendChild(r); this.appendChild(o) } }; e.fn[t] = function (n, r, i, s) { return this.each(function () { if (n && typeof n === "string") { return e.fn[t].prototype[n].call(this, r, i, s) } if (e(this).data(t + "data")) { return e(this) } e(this).data(t + "active", true); e.fn[t].prototype._create.call(this) }) }; e.extend(e.fn[t].prototype, r); e(function () { e(n.initSelector)[t]() }) })(jQuery)
