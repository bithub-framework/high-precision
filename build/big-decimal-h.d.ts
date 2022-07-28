import { HLike, H, HFactory } from 'secretary-like';
import { BigDecimal } from 'bigdecimal.js';
export declare class BigDecimalH implements HLike<BigDecimalH> {
    private bigDecimal;
    constructor(bigDecimal: BigDecimal);
    plus(source: H.Source<BigDecimalH>): BigDecimalH;
    minus(source: H.Source<BigDecimalH>): BigDecimalH;
    neg(): BigDecimalH;
    times(source: H.Source<BigDecimalH>): BigDecimalH;
    div(source: H.Source<BigDecimalH>, scale?: number, roundingMode?: H.RoundingMode): BigDecimalH;
    mod(source: H.Source<BigDecimalH>): BigDecimalH;
    lt(source: H.Source<BigDecimalH>): boolean;
    lte(source: H.Source<BigDecimalH>): boolean;
    gt(source: H.Source<BigDecimalH>): boolean;
    gte(source: H.Source<BigDecimalH>): boolean;
    eq(source: H.Source<BigDecimalH>): boolean;
    neq(source: H.Source<BigDecimalH>): boolean;
    round(scale?: number, roundingMode?: H.RoundingMode): BigDecimalH;
    toJSON(): string;
    toFixed(scale?: number): string;
    static max(x: H.Source<BigDecimalH>, ...rest: H.Source<BigDecimalH>[]): BigDecimalH;
    static min(x: H.Source<BigDecimalH>, ...rest: H.Source<BigDecimalH>[]): BigDecimalH;
}
export declare const bigDecimalHFactory: HFactory<BigDecimalH>;
