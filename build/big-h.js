"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BigDecimalH_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.bigHFactory = exports.BigDecimalH = void 0;
const secretary_like_1 = require("secretary-like");
const bigdecimal_js_1 = require("bigdecimal.js");
const statically_implements_1 = require("./statically-implements");
let BigDecimalH = BigDecimalH_1 = class BigDecimalH {
    constructor(bigDecimal) {
        this.bigDecimal = bigDecimal;
    }
    plus(source) {
        const x = exports.bigHFactory.from(source);
        return new BigDecimalH_1(this.bigDecimal.add(x.bigDecimal));
    }
    minus(source) {
        const x = exports.bigHFactory.from(source);
        return new BigDecimalH_1(this.bigDecimal.subtract(x.bigDecimal));
    }
    neg() {
        return new BigDecimalH_1(this.bigDecimal.negate());
    }
    times(source) {
        const x = exports.bigHFactory.from(source);
        return new BigDecimalH_1(this.bigDecimal.multiply(x.bigDecimal));
    }
    div(source, scale = 0, roundingMode = secretary_like_1.H.RoundingMode.HALF_AWAY_FROM_ZERO) {
        const x = exports.bigHFactory.from(source);
        return new BigDecimalH_1(this.bigDecimal.divide(x.bigDecimal, scale, roundingMode === secretary_like_1.H.RoundingMode.AWAY_FROM_ZERO
            ? bigdecimal_js_1.RoundingMode.UP
            : roundingMode === secretary_like_1.H.RoundingMode.TOWARDS_ZERO
                ? bigdecimal_js_1.RoundingMode.DOWN
                : bigdecimal_js_1.RoundingMode.HALF_UP));
    }
    mod(source) {
        const x = exports.bigHFactory.from(source);
        return new BigDecimalH_1(this.bigDecimal.remainder(x.bigDecimal));
    }
    lt(source) {
        const x = exports.bigHFactory.from(source);
        return this.bigDecimal.compareTo(x.bigDecimal) < 0;
    }
    lte(source) {
        const x = exports.bigHFactory.from(source);
        return this.bigDecimal.compareTo(x.bigDecimal) <= 0;
    }
    gt(source) {
        const x = exports.bigHFactory.from(source);
        return this.bigDecimal.compareTo(x.bigDecimal) > 0;
    }
    gte(source) {
        const x = exports.bigHFactory.from(source);
        return this.bigDecimal.compareTo(x.bigDecimal) >= 0;
    }
    eq(source) {
        const x = exports.bigHFactory.from(source);
        return this.bigDecimal.compareTo(x.bigDecimal) === 0;
    }
    neq(source) {
        const x = exports.bigHFactory.from(source);
        return this.bigDecimal.compareTo(x.bigDecimal) !== 0;
    }
    round(scale = 0, roundingMode = secretary_like_1.H.RoundingMode.HALF_AWAY_FROM_ZERO) {
        const mathContext = new bigdecimal_js_1.MC(scale, roundingMode === secretary_like_1.H.RoundingMode.AWAY_FROM_ZERO
            ? bigdecimal_js_1.RoundingMode.UP
            : roundingMode === secretary_like_1.H.RoundingMode.TOWARDS_ZERO
                ? bigdecimal_js_1.RoundingMode.DOWN
                : bigdecimal_js_1.RoundingMode.HALF_UP);
        return new BigDecimalH_1(this.bigDecimal.round(mathContext));
    }
    toJSON() {
        return this.bigDecimal.toString();
    }
    toFixed(scale = 0) {
        return this.bigDecimal.setScale(scale, bigdecimal_js_1.RoundingMode.DOWN).toString();
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
BigDecimalH = BigDecimalH_1 = __decorate([
    (0, statically_implements_1.staticallyImplements)()
], BigDecimalH);
exports.BigDecimalH = BigDecimalH;
class BigHFactory {
    from(source) {
        if (source instanceof BigDecimalH)
            return source;
        return new BigDecimalH((0, bigdecimal_js_1.Big)(source));
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