// build time:Fri Jul 03 2020 14:39:21 GMT+0800 (GMT+08:00)
PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\r \xA0]+/,null,"\t\n\r  "],["com",/^%[^\r\n]*/,null,"%"]],[["lit",/^\\(?:cr|l?dots|R|tab)\b/],["kwd",/^\\[a-zA-Z@]+/],["kwd",/^#(?:ifn?def|endif)/],["pln",/^\\[{}]/],["pun",/^[{}()\[\]]+/]]),["Rd","rd"]);
//rebuild by neat 