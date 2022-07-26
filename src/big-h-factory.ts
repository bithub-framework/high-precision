import { BigH } from './big-h';
import { HFactory, H } from 'secretary-like';


export class BigHFactory implements HFactory<BigH> {
	public from(source: H.Source<BigH>): BigH {
		return new BigH(source);
	}

	public capture(x: BigH): string {
		return x.toJSON();
	}

	public restore(snapshot: string): BigH {
		return this.from(snapshot);
	}
}
