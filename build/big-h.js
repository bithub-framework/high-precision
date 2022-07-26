"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BigH_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigH = void 0;
const secretary_like_1 = require("secretary-like");
const big_js_1 = require("big.js");
const statically_implements_1 = require("./statically-implements");
let BigH = BigH_1 = class BigH {
    constructor(source) {
        if (source instanceof BigH_1)
            this.big = source.big;
        else
            this.big = new big_js_1.Big(source);
    }
    plus(x) {
        if (typeof x === 'number')
            return new BigH_1(this.big.plus(x));
        if (typeof x === 'string')
            return new BigH_1(this.big.plus(x));
        return new BigH_1(this.big.plus(x.big));
    }
    minus(x) {
        if (typeof x === 'number')
            return new BigH_1(this.big.minus(x));
        if (typeof x === 'string')
            return new BigH_1(this.big.minus(x));
        return new BigH_1(this.big.minus(x.big));
    }
    neg() {
        return new BigH_1(new big_js_1.Big(0).minus(this.big));
    }
    times(x) {
        if (typeof x === 'number')
            return new BigH_1(this.big.times(x));
        if (typeof x === 'string')
            return new BigH_1(this.big.times(x));
        return new BigH_1(this.big.times(x.big));
    }
    div(x) {
        if (typeof x === 'number')
            return new BigH_1(this.big.div(x));
        if (typeof x === 'string')
            return new BigH_1(this.big.div(x));
        return new BigH_1(this.big.div(x.big));
    }
    mod(x) {
        if (typeof x === 'number')
            return new BigH_1(this.big.mod(x));
        if (typeof x === 'string')
            return new BigH_1(this.big.mod(x));
        return new BigH_1(this.big.mod(x.big));
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
        return new BigH_1(new big_js_1.Big(this.big).round(decimalPoint, roundingMode === secretary_like_1.H.RoundingMode.AWAY_FROM_ZERO
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
    static max(x, ...rest) {
        return [x, ...rest].reduce((x, y) => x.gt(y) ? x : y);
    }
    static min(x, ...rest) {
        return [x, ...rest].reduce((x, y) => x.lt(y) ? x : y);
    }
};
BigH = BigH_1 = __decorate([
    (0, statically_implements_1.staticallyImplements)()
], BigH);
exports.BigH = BigH;
//# sourceMappingURL=big-h.js.map