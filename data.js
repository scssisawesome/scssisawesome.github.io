var data = [
    {
        title: "Variables",
        scss: [
            "<span class='var'>$neongreen</span>: <span class='value'>#99ff6b</span>;",
            "<span class='iden'>div</span>{",
            "&nbsp;&nbsp;&nbsp;<span class='char'>background-color</span>: <span class='var'>$neongreen</span>;",
            "}",
            "<span class='iden'>a</span>{",
            "&nbsp;&nbsp;&nbsp;<span class='char'>text-decoration</span>: <span class='val'>none</span>;",
            "&nbsp;&nbsp;&nbsp;<span class='char'>color</span>: <span class='var'>$neongreen</span>;",
            "}"
        ],
        css: [
            "<span class='iden'>div</span>{",
            "&nbsp;&nbsp;&nbsp;<span class='char'>background-color</span>: <span class='value'>#99ff6b</span>;",
            "}",
            "<span class='iden'>a</span>{",
            "&nbsp;&nbsp;&nbsp;<span class='char'>text-decoration</span>: <span class='val'>none</span>;",
            "&nbsp;&nbsp;&nbsp;<span class='char'>color</span>: <span class='value'>#99ff6b</span>;",
            "}"
        ]
    },
    {
        title: "Nesting",
        scss: [
            "<span class='iden'>div</span>{",
            "&nbsp;&nbsp;&nbsp;<span class='iden'>span</span>{",
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='char'>color</span>: <span class='val'>red</span>;",
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='char'>font-size</span>: <span class='value'>16px</span>;",
            "&nbsp;&nbsp;&nbsp;}",
            "&nbsp;&nbsp;&nbsp;<span class='iden'>p</span>{",
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='char'>font-size</span>: <span class='value'>16px</span>;",
            "&nbsp;&nbsp;&nbsp;}",
            "}"
        ],
        css: [
            "<span class='iden'>div span</span>{",
            "&nbsp;&nbsp;&nbsp;<span class='char'>color</span>: <span class='val'>red</span>;",
            "&nbsp;&nbsp;&nbsp;<span class='char'>font-size</span>: <span class='value'>16px</span>;",
            "}",
            "<span class='iden'>div p</span>{",
            "&nbsp;&nbsp;&nbsp;<span class='char'>font-size</span>: <span class='value'>16px</span>;",
            "}"       
        ]
    },
    {
        title: "Mixins",
        scss: [
            "<span class='var'>$length</span>: <span class='value'>15px</span>;",
            "<span class='sc'>@mixin</span> <span class='iden'>block</span>(<span class='var'>$color</span>){",
            "&nbsp;&nbsp;&nbsp;<span class='char'>background-color</span>: <span class='val'>white</span>;",
            "&nbsp;&nbsp;&nbsp;<span class='char'>color</span>: <span class='var'>$color</span>;",
            "&nbsp;&nbsp;&nbsp;<span class='char'>height</span>: <span class='var'>$length</span>;",
            "&nbsp;&nbsp;&nbsp;<span class='char'>width</span>: <span class='var'>$length</span>;",
            "}",
            "<span class='iden'>.orangediv</span>{",
            "&nbsp;&nbsp;&nbsp;<span class='sc'>@include</span> <span class='iden'>block</span>(<span class='val'>orange</span>);",
            "}"
        ],
        css: [
            "<span class='iden'>.orangediv</span>{",
            "&nbsp;&nbsp;&nbsp;<span class='char'>background-color</span>: <span class='val'>white</span>;",
            "&nbsp;&nbsp;&nbsp;<span class='char'>color</span>: <span class='val'>orange</span>;",
            "&nbsp;&nbsp;&nbsp;<span class='char'>height</span>: <span class='value'>15px</span>;",
            "&nbsp;&nbsp;&nbsp;<span class='char'>width</span>: <span class='value'>15px</span>;",
            "}"
        ]
    },
    {
        title: "Extend",
        scss: [
            "<span class='iden'>%important</span>{",
            "&nbsp;&nbsp;&nbsp;<span class='char'>font-weight</span>: <span class='val'>bold</span>;",
            "&nbsp;&nbsp;&nbsp;<span class='char'>color</span>: <span class='value'>black</span>;",
            "&nbsp;&nbsp;&nbsp;<span class='char'>font-size</span>: <span class='value'>36px</span>;",
            "}",
            "<span class='iden'>#alert</span>{",
            "&nbsp;&nbsp;&nbsp;<span class='sc'>@extend</span> <span class='iden'>%important</span>;",
            "}",
            "<span class='iden'>h3</span>{",
            "&nbsp;&nbsp;&nbsp;<span class='sc'>@extend</span> <span class='iden'>%important</span>;",
            "&nbsp;&nbsp;&nbsp;<span class='char'>background-color</span>: <span class='val'>red</span>;",
            "}"
        ],
        css: [
            "<span class='iden'>#alert</span>{",
            "&nbsp;&nbsp;&nbsp;<span class='char'>font-weight</span>: <span class='val'>bold</span>;",
            "&nbsp;&nbsp;&nbsp;<span class='char'>color</span>: <span class='val'>black</span>;",
            "&nbsp;&nbsp;&nbsp;<span class='char'>font-size</span>: <span class='value'>36px</span>;",
            "}",
            "<span class='iden'>h3</span>{",
            "&nbsp;&nbsp;&nbsp;<span class='char'>font-weight</span>: <span class='val'>bold</span>;",
            "&nbsp;&nbsp;&nbsp;<span class='char'>color</span>: <span class='val'>black</span>;",
            "&nbsp;&nbsp;&nbsp;<span class='char'>font-size</span>: <span class='value'>36px</span>;",
            "&nbsp;&nbsp;&nbsp;<span class='char'>background-color</span>: <span class='val'>red</span>;",
            "}"
        ]
    },
    {
        title: "Operators",
        scss: [
            "<span class='var'>$font</span>: <span class='value'>16px</span>;",
            "<span class='iden'>p</span>{",
            "&nbsp;&nbsp;&nbsp;<span class='char'>font-size</span>: <span class='var'>$font</span>;",
            "}",
            "<span class='iden'>h1</span>{",
            "&nbsp;&nbsp;&nbsp;<span class='char'>text-align</span>: <span class='val'>center</span>;",
            "&nbsp;&nbsp;&nbsp;<span class='char'>font-size</span>: <span class='var'>$font</span> * <span class='value'>2</span>;",
            "}"
        ],
        css: [
            "<span class='iden'>p</span>{",
            "&nbsp;&nbsp;&nbsp;<span class='char'>font-size</span>: <span class='value'>16px</span>;",
            "}",
            "<span class='iden'>h1</span>{",
            "&nbsp;&nbsp;&nbsp;<span class='char'>text-align</span>: <span class='val'>center</span>;",
            "&nbsp;&nbsp;&nbsp;<span class='char'>font-size</span>: <span class='value'>32px</span>;",
            "}"
        ]
    }
];
