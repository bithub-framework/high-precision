import { BigH } from './big-h';
import { Big } from 'big.js';
import { HFactory, H } from 'secretary-like';


class BigHFactory implements HFactory<BigH> {
	public from(source: H.Source<BigH>): BigH {
		if (source instanceof BigH) return source;
		return new BigH(new Big(source));
	}

	public capture(x: BigH): H.Snapshot {
		return x.toJSON();
	}

	public restore(snapshot: H.Snapshot): BigH {
		return this.from(snapshot);
	}
}

export const bigHFactory: HFactory<BigH> = new BigHFactory();
