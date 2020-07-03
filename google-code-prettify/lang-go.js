// build time:Fri Jul 03 2020 14:39:21 GMT+0800 (GMT+08:00)
PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\r \xA0]+/,null,"\t\n\r  "],["pln",/^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])+(?:\'|$)|`[^`]*(?:`|$))/,null,"\"'"]],[["com",/^(?:\/\/[^\r\n]*|\/\*[\s\S]*?\*\/)/],["pln",/^(?:[^\/\"\'`]|\/(?![\/\*]))+/i]]),["go"]);
//rebuild by neat 