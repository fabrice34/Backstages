var _0xc27c = ["intersectionRatio", "target", "classList", "remove", "reveal", "unobserve", "documentElement", "add", "reveal-loaded", "DOMContentLoaded", ".reveal", "0px", "forEach"];
(function (_0x2fbeca, _0x302170) {
    var _0x1ae02f = function (_0x1066ee) {
        while (--_0x1066ee) {
            _0x2fbeca["push"](_0x2fbeca["shift"]());
        }
    };
    _0x1ae02f(++_0x302170);
})(_0xc27c, 0x191);
var _0xc345 = function (_0x2b864f, _0x3be0d3) {
    _0x2b864f = _0x2b864f - 0x0;
    var _0x5a61da = _0xc27c[_0x2b864f];
    return _0x5a61da;
};
const ratio = 0.1;
const options = { root: null, rootMargin: _0xc345("0x0"), threshold: ratio };
const handleIntersect = function (_0x281fe4, _0x410682) {
    _0x281fe4[_0xc345("0x1")](function (_0x1e78a6) {
        if (_0x1e78a6[_0xc345("0x2")] > ratio) {
            _0x1e78a6[_0xc345("0x3")][_0xc345("0x4")][_0xc345("0x5")](_0xc345("0x6"));
            _0x410682[_0xc345("0x7")](_0x1e78a6[_0xc345("0x3")]);
        }
    });
};
document[_0xc345("0x8")]["classList"][_0xc345("0x9")](_0xc345("0xa"));
window["addEventListener"](_0xc345("0xb"), function () {
    const _0x56a41c = new IntersectionObserver(handleIntersect, options);
    document["querySelectorAll"](_0xc345("0xc"))[_0xc345("0x1")](function (_0x5721c4) {
        _0x56a41c["observe"](_0x5721c4);
    });
});
