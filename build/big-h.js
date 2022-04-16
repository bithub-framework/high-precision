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
const interfaces_1 = require("interfaces");
const big_js_1 = require("big.js");
const statically_implements_1 = require("./statically-implements");
let BigH = BigH_1 = class BigH {
    constructor(big) {
        this.value = big;
    }
    plus(x) {
        if (typeof x === 'number')
            return new BigH_1(this.value.plus(x));
        if (typeof x === 'string')
            return new BigH_1(this.value.plus(x));
        return new BigH_1(this.value.plus(x.value));
    }
    minus(x) {
        if (typeof x === 'number')
            return new BigH_1(this.value.minus(x));
        if (typeof x === 'string')
            return new BigH_1(this.value.minus(x));
        return new BigH_1(this.value.minus(x.value));
    }
    times(x) {
        if (typeof x === 'number')
            return new BigH_1(this.value.times(x));
        if (typeof x === 'string')
            return new BigH_1(this.value.times(x));
        return new BigH_1(this.value.times(x.value));
    }
    div(x) {
        if (typeof x === 'number')
            return new BigH_1(this.value.div(x));
        if (typeof x === 'string')
            return new BigH_1(this.value.div(x));
        return new BigH_1(this.value.div(x.value));
    }
    mod(x) {
        if (typeof x === 'number')
            return new BigH_1(this.value.mod(x));
        if (typeof x === 'string')
            return new BigH_1(this.value.mod(x));
        return new BigH_1(this.value.mod(x.value));
    }
    lt(x) {
        if (typeof x === 'number')
            return this.value.lt(x);
        if (typeof x === 'string')
            return this.value.lt(x);
        return this.value.lt(x.value);
    }
    lte(x) {
        if (typeof x === 'number')
            return this.value.lte(x);
        if (typeof x === 'string')
            return this.value.lte(x);
        return this.value.lte(x.value);
    }
    gt(x) {
        if (typeof x === 'number')
            return this.value.gt(x);
        if (typeof x === 'string')
            return this.value.gt(x);
        return this.value.gt(x.value);
    }
    gte(x) {
        if (typeof x === 'number')
            return this.value.gte(x);
        if (typeof x === 'string')
            return this.value.gte(x);
        return this.value.gte(x.value);
    }
    eq(x) {
        if (typeof x === 'number')
            return this.value.eq(x);
        if (typeof x === 'string')
            return this.value.eq(x);
        return this.value.eq(x.value);
    }
    neq(x) {
        if (typeof x === 'number')
            return !this.value.eq(x);
        if (typeof x === 'string')
            return !this.value.eq(x);
        return !this.value.eq(x.value);
    }
    round(decimalPoint = 0, roundingMode = interfaces_1.H.RoundingMode.HALF_AWAY_FROM_ZERO) {
        return new BigH_1(new big_js_1.Big(this.value).round(decimalPoint, roundingMode === interfaces_1.H.RoundingMode.AWAY_FROM_ZERO
            ? big_js_1.Big.roundUp
            : roundingMode === interfaces_1.H.RoundingMode.TOWARDS_ZERO
                ? big_js_1.Big.roundDown
                : big_js_1.Big.roundHalfUp));
    }
    toJSON() {
        throw new Error('Use .capture() instead.');
    }
    toString() {
        return this.value.toString();
    }
    toFixed(decimalPoint = 0) {
        return this.value.toFixed(decimalPoint, big_js_1.Big.roundDown);
    }
    capture() {
        return this.value.toString();
    }
    static from(source) {
        return new BigH_1(new big_js_1.Big(source));
    }
    static capture(x) {
        return x.capture();
    }
    static restore(s) {
        return new BigH_1(new big_js_1.Big(s));
    }
    static min(x, ...rest) {
        return [x, ...rest].reduce((x, y) => x.lt(y) ? x : y);
    }
    static max(x, ...rest) {
        return [x, ...rest].reduce((x, y) => x.gt(y) ? x : y);
    }
};
BigH = BigH_1 = __decorate([
    (0, statically_implements_1.staticallyImplements)()
], BigH);
exports.BigH = BigH;
//# sourceMappingURL=big-h.js.map