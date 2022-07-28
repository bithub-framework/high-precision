import { HLike, H, HFactory } from 'secretary-like';
import { Big } from 'big.js';
export declare class BigH implements HLike<BigH> {
    private big;
    constructor(big: Big);
    plus(source: H.Source<BigH>): BigH;
    minus(source: H.Source<BigH>): BigH;
    neg(): BigH;
    times(source: H.Source<BigH>): BigH;
    div(source: H.Source<BigH>): BigH;
    mod(source: H.Source<BigH>): BigH;
    lt(source: H.Source<BigH>): boolean;
    lte(source: H.Source<BigH>): boolean;
    gt(source: H.Source<BigH>): boolean;
    gte(source: H.Source<BigH>): boolean;
    eq(source: H.Source<BigH>): boolean;
    neq(source: H.Source<BigH>): boolean;
    round(decimalPoint?: number, roundingMode?: H.RoundingMode): BigH;
    toJSON(): string;
    toFixed(decimalPoint?: number): string;
    static max(x: H.Source<BigH>, ...rest: H.Source<BigH>[]): BigH;
    static min(x: H.Source<BigH>, ...rest: H.Source<BigH>[]): BigH;
}
export declare const bigHFactory: HFactory<BigH>;
