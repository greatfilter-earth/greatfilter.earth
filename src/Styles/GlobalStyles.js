// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var TypedGlamor = require("bs-typed-glamor/src/TypedGlamor.bs.js");
var Theme$ReactTemplate = require("./Theme.js");

require('glamor-reset')
;

TypedGlamor.$$global("*", /* :: */[
      TypedGlamor.unsafe("boxSizing", "border-box"),
      /* :: */[
        TypedGlamor.margin(TypedGlamor.zero),
        /* :: */[
          TypedGlamor.padding(TypedGlamor.zero),
          /* [] */0
        ]
      ]
    ]);

TypedGlamor.$$global("*:focus", /* :: */[
      TypedGlamor.outlineStyle(TypedGlamor.none),
      /* [] */0
    ]);

TypedGlamor.$$global("body", /* :: */[
      TypedGlamor.lineHeight(TypedGlamor.inherit_),
      /* :: */[
        TypedGlamor.color(Theme$ReactTemplate.Color[/* text */4]),
        /* [] */0
      ]
    ]);

TypedGlamor.$$global("h1, h2, h3", /* :: */[
      TypedGlamor.lineHeight(TypedGlamor.em(1.1)),
      /* :: */[
        TypedGlamor.fontWeight(TypedGlamor.normal),
        /* [] */0
      ]
    ]);

TypedGlamor.$$global("a", /* :: */[
      TypedGlamor.color(TypedGlamor.inherit_),
      /* [] */0
    ]);

TypedGlamor.$$global("button, input, select", /* :: */[
      TypedGlamor.background(TypedGlamor.none),
      /* :: */[
        TypedGlamor.border(TypedGlamor.none),
        /* :: */[
          TypedGlamor.font(TypedGlamor.inherit_),
          /* [] */0
        ]
      ]
    ]);

TypedGlamor.$$global("button::-moz-focus-inner", /* :: */[
      TypedGlamor.outline(TypedGlamor.none),
      /* [] */0
    ]);

var _reset = TypedGlamor.$$global("ol, ul", /* :: */[
      TypedGlamor.unsafe("listStyle", "none"),
      /* :: */[
        TypedGlamor.margin(TypedGlamor.zero),
        /* :: */[
          TypedGlamor.padding(TypedGlamor.zero),
          /* [] */0
        ]
      ]
    ]);

TypedGlamor.$$global("html", /* :: */[
      TypedGlamor.fontSize(TypedGlamor.px(15)),
      /* :: */[
        TypedGlamor.lineHeight(TypedGlamor.em(1.25)),
        /* :: */[
          TypedGlamor.fontFamilies(/* :: */[
                "-apple-system",
                /* :: */[
                  "BlinkMacSystemFont",
                  /* :: */[
                    "Segoe UI",
                    /* :: */[
                      "Roboto",
                      /* :: */[
                        "Oxygen",
                        /* :: */[
                          "Ubuntu",
                          /* :: */[
                            "Cantarell",
                            /* :: */[
                              "Fira Sans",
                              /* :: */[
                                "Droid Sans",
                                /* :: */[
                                  "Helvetica Neue",
                                  /* :: */[
                                    "sans-serif",
                                    /* [] */0
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]),
          /* :: */[
            TypedGlamor.unsafe("boxSizing", "border-box"),
            /* :: */[
              TypedGlamor.unsafe("overflowY", "scroll"),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var _global = TypedGlamor.$$global("html, body, #___gatsby", /* :: */[
      TypedGlamor.backgroundColor(Theme$ReactTemplate.Color[/* background */2]),
      /* :: */[
        TypedGlamor.minHeight(TypedGlamor.pct(100)),
        /* [] */0
      ]
    ]);

exports._reset = _reset;
exports._global = _global;
/*  Not a pure module */