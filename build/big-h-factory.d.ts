import { BigH } from './big-h';
import { HFactory, H } from 'secretary-like';
export declare class BigHFactory implements HFactory<BigH> {
    from(source: H.Source<BigH>): BigH;
    capture(x: BigH): H.Snapshot;
    restore(snapshot: H.Snapshot): BigH;
}
