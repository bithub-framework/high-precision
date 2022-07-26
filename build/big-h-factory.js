"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigHFactory = void 0;
const big_h_1 = require("./big-h");
class BigHFactory {
    from(source) {
        return new big_h_1.BigH(source);
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