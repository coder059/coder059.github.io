// build time:Fri Jul 03 2020 14:39:21 GMT+0800 (GMT+08:00)
PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\r \xA0]+/,null,"\t\n\r  "],["com",/^#.*/,null,"#"],["lit",/^'(?:[^'\\]|\\(?:.|\n|\r))*'?/,null,"'"],["atn",/^@\w+/,null,"@"],["pun",/^[!%&()*+,\-;<=>?\[\\\]^{|}]+/,null,"!%&()*+,-;<=>?[\\]^{|}"],["lit",/^(?:0o[0-7](?:[0-7]|_[0-7])*|0x[\da-fA-F](?:[\da-fA-F]|_[\da-fA-F])*|\d(?:\d|_\d)*(?:\.\d(?:\d|_\d)*)?(?:[eE][+\-]?\d(?:\d|_\d)*)?)/,null,"0123456789"]],[["atn",/^iex(?:\(\d+\))?> /],["pun",/^::/],["lit",/^:(?:\w+[\!\?\@]?|"(?:[^"\\]|\\.)*"?)/],["atn",/^(?:__(?:CALLER|ENV|MODULE|DIR)__)/],["kwd",/^(?:alias|case|catch|def(?:delegate|exception|impl|macrop?|module|overridable|p?|protocol|struct)|do|else|end|fn|for|if|in|import|quote|raise|require|rescue|super|throw|try|unless|unquote(?:_splicing)?|use|when|with|yield)\b/],["lit",/^(?:true|false|nil)\b/],["lit",/^(?:\w+[\!\?\@]?|"(?:[^"\\]|\\.)*"):(?!:)/],["str",/^"""\s*(\r|\n)+(?:""?(?!")|[^\\"]|\\(?:.|\n|\r))*"{0,3}/],["str",/^"(?:[^"\\]|\\(?:.|\n|\r))*"?(?!")/],["typ",/^[A-Z]\w*/],["com",/^_\w*/],["pln",/^[$a-z]\w*[\!\?]?/],["atv",/^~[A-Z](?:\/(?:[^\/\r\n\\]|\\.)+\/|\|(?:[^\|\r\n\\]|\\.)+\||"(?:[^"\r\n\\]|\\.)+"|'(?:[^'\r\n\\]|\\.)+')[A-Z]*/i],["atv",/^~[A-Z](?:\((?:[^\)\r\n\\]|\\.)+\)|\[(?:[^\]\r\n\\]|\\.)+\]|\{(?:[^\}\r\n\\]|\\.)+\}|\<(?:[^\>\r\n\\]|\\.)+\>)[A-Z]*/i],["pun",/^(?:\.+|\/|[:~])/]]),["ex","exs"]);
//rebuild by neat 