"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigHStatic = void 0;
const big_h_1 = require("./big-h");
const secretary_like_1 = require("secretary-like");
class BigHStatic extends secretary_like_1.HStatic {
    from(source) {
        return new big_h_1.BigH(source);
    }
    restore(snapshot) {
        return this.from(snapshot);
    }
}
exports.BigHStatic = BigHStatic;
//# sourceMappingURL=big-h-static.js.map