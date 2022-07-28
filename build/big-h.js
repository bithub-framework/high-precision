"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BigH_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.bigHFactory = exports.BigH = void 0;
const secretary_like_1 = require("secretary-like");
const big_js_1 = require("big.js");
const statically_implements_1 = require("./statically-implements");
let BigH = BigH_1 = class BigH {
    constructor(big) {
        this.big = big;
    }
    plus(source) {
        const x = exports.bigHFactory.from(source);
        return new BigH_1(this.big.plus(x.big));
    }
    minus(source) {
        const x = exports.bigHFactory.from(source);
        return new BigH_1(this.big.minus(x.big));
    }
    neg() {
        return new BigH_1(new big_js_1.Big(0).minus(this.big));
    }
    times(source) {
        const x = exports.bigHFactory.from(source);
        return new BigH_1(this.big.times(x.big));
    }
    div(source) {
        const x = exports.bigHFactory.from(source);
        return new BigH_1(this.big.div(x.big));
    }
    mod(source) {
        const x = exports.bigHFactory.from(source);
        return new BigH_1(this.big.mod(x.big));
    }
    lt(source) {
        const x = exports.bigHFactory.from(source);
        return this.big.lt(x.big);
    }
    lte(source) {
        const x = exports.bigHFactory.from(source);
        return this.big.lte(x.big);
    }
    gt(source) {
        const x = exports.bigHFactory.from(source);
        return this.big.gt(x.big);
    }
    gte(source) {
        const x = exports.bigHFactory.from(source);
        return this.big.gte(x.big);
    }
    eq(source) {
        const x = exports.bigHFactory.from(source);
        return this.big.eq(x.big);
    }
    neq(source) {
        const x = exports.bigHFactory.from(source);
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
        return [x, ...rest]
            .map(source => exports.bigHFactory.from(source))
            .reduce((x, y) => x.gt(y) ? x : y);
    }
    static min(x, ...rest) {
        return [x, ...rest]
            .map(source => exports.bigHFactory.from(source))
            .reduce((x, y) => x.lt(y) ? x : y);
    }
};
BigH = BigH_1 = __decorate([
    (0, statically_implements_1.staticallyImplements)()
], BigH);
exports.BigH = BigH;
class BigHFactory {
    from(source) {
        if (source instanceof BigH)
            return source;
        return new BigH(new big_js_1.Big(source));
    }
    capture(x) {
        return x.toJSON();
    }
    restore(snapshot) {
        return this.from(snapshot);
    }
}
exports.bigHFactory = new BigHFactory();
//# sourceMappingURL=big-h.js.map