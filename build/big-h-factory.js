"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigHFactory = void 0;
const big_h_1 = require("./big-h");
const big_js_1 = require("big.js");
class BigHFactory {
    from(source) {
        if (source instanceof big_h_1.BigH)
            return source;
        return new big_h_1.BigH(new big_js_1.Big(source));
    }
    capture(x) {
        return x.toJSON();
    }
    restore(snapshot) {
        return this.from(snapshot);
    }
}
exports.BigHFactory = BigHFactory;
//# sourceMappingURL=big-h-factory.js.map