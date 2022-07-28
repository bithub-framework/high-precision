import { HLike, H } from 'secretary-like';
import { Big } from 'big.js';
export declare class BigH implements HLike<BigH> {
    private big;
    constructor(big: Big);
    plus(x: H.Source<BigH>): BigH;
    minus(x: H.Source<BigH>): BigH;
    neg(): BigH;
    times(x: H.Source<BigH>): BigH;
    div(x: H.Source<BigH>): BigH;
    mod(x: H.Source<BigH>): BigH;
    lt(x: H.Source<BigH>): boolean;
    lte(x: H.Source<BigH>): boolean;
    gt(x: H.Source<BigH>): boolean;
    gte(x: H.Source<BigH>): boolean;
    eq(x: H.Source<BigH>): boolean;
    neq(x: H.Source<BigH>): boolean;
    round(decimalPoint?: number, roundingMode?: H.RoundingMode): BigH;
    toJSON(): string;
    toFixed(decimalPoint?: number): string;
    static max(x: BigH, ...rest: BigH[]): BigH;
    static min(x: BigH, ...rest: BigH[]): BigH;
}
