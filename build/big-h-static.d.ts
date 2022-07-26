import { BigH } from './big-h';
import { HStatic, H } from 'secretary-like';
export declare class BigHStatic extends HStatic<BigH> {
    from(source: H.Source<BigH>): BigH;
    restore(snapshot: string): BigH;
}
