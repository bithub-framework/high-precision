"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigH = void 0;
const secretary_like_1 = require("secretary-like");
const big_js_1 = require("big.js");
class BigH {
    constructor(source) {
        if (source instanceof BigH)
            this.big = source.big;
        else
            this.big = new big_js_1.Big(source);
    }
    plus(x) {
        if (typeof x === 'number')
            return new BigH(this.big.plus(x));
        if (typeof x === 'string')
            return new BigH(this.big.plus(x));
        return new BigH(this.big.plus(x.big));
    }
    minus(x) {
        if (typeof x === 'number')
            return new BigH(this.big.minus(x));
        if (typeof x === 'string')
            return new BigH(this.big.minus(x));
        return new BigH(this.big.minus(x.big));
    }
    times(x) {
        if (typeof x === 'number')
            return new BigH(this.big.times(x));
        if (typeof x === 'string')
            return new BigH(this.big.times(x));
        return new BigH(this.big.times(x.big));
    }
    div(x) {
        if (typeof x === 'number')
            return new BigH(this.big.div(x));
        if (typeof x === 'string')
            return new BigH(this.big.div(x));
        return new BigH(this.big.div(x.big));
    }
    mod(x) {
        if (typeof x === 'number')
            return new BigH(this.big.mod(x));
        if (typeof x === 'string')
            return new BigH(this.big.mod(x));
        return new BigH(this.big.mod(x.big));
    }
    lt(x) {
        if (typeof x === 'number')
            return this.big.lt(x);
        if (typeof x === 'string')
            return this.big.lt(x);
        return this.big.lt(x.big);
    }
    lte(x) {
        if (typeof x === 'number')
            return this.big.lte(x);
        if (typeof x === 'string')
            return this.big.lte(x);
        return this.big.lte(x.big);
    }
    gt(x) {
        if (typeof x === 'number')
            return this.big.gt(x);
        if (typeof x === 'string')
            return this.big.gt(x);
        return this.big.gt(x.big);
    }
    gte(x) {
        if (typeof x === 'number')
            return this.big.gte(x);
        if (typeof x === 'string')
            return this.big.gte(x);
        return this.big.gte(x.big);
    }
    eq(x) {
        if (typeof x === 'number')
            return this.big.eq(x);
        if (typeof x === 'string')
            return this.big.eq(x);
        return this.big.eq(x.big);
    }
    neq(x) {
        if (typeof x === 'number')
            return !this.big.eq(x);
        if (typeof x === 'string')
            return !this.big.eq(x);
        return !this.big.eq(x.big);
    }
    round(decimalPoint = 0, roundingMode = secretary_like_1.H.RoundingMode.HALF_AWAY_FROM_ZERO) {
        return new BigH(new big_js_1.Big(this.big).round(decimalPoint, roundingMode === secretary_like_1.H.RoundingMode.AWAY_FROM_ZERO
            ? big_js_1.Big.roundUp
            : roundingMode === secretary_like_1.H.RoundingMode.TOWARDS_ZERO
                ? big_js_1.Big.roundDown
                : big_js_1.Big.roundHalfUp));
    }
    toJSON() {
        return this.big.toJSON();
    }
    toFixed(decimalPoint = 0) {
        return this.big.toFixed(decimalPoint, big_js_1.Big.roundDown);
    }
    capture() {
        return this.big.toJSON();
    }
    static capture(x) {
        return x.capture();
    }
    static restore(s) {
        return new BigH(new big_js_1.Big(s));
    }
}
exports.BigH = BigH;
//# sourceMappingURL=big-h.js.map