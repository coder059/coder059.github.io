// build time:Fri Jul 03 2020 14:39:21 GMT+0800 (GMT+08:00)
PR.registerLangHandler(PR.createSimpleLexer([["opn",/^\(+/,null,"("],["clo",/^\)+/,null,")"],["com",/^;[^\r\n]*/,null,";"],["pln",/^[\t\n\r \xA0]+/,null,"\t\n\r  "],["str",/^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/,null,'"']],[["kwd",/^(?:block|c[ad]+r|catch|con[ds]|def(?:ine|un)|do|eq|eql|equal|equalp|eval-when|flet|format|go|if|labels|lambda|let|load-time-value|locally|macrolet|multiple-value-call|nil|progn|progv|quote|require|return-from|setq|symbol-macrolet|t|tagbody|the|throw|unwind)\b/,null],["lit",/^[+\-]?(?:[0#]x[0-9a-f]+|\d+\/\d+|(?:\.\d+|\d+(?:\.\d*)?)(?:[ed][+\-]?\d+)?)/i],["lit",/^\'(?:-*(?:\w|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?)?/],["pln",/^-*(?:[a-z_]|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?/i],["pun",/^[^\w\t\n\r \xA0()\"\\\';]+/]]),"cl el lisp lsp scm ss rkt".split(" "));
//rebuild by neat 