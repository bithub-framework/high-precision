import { BigH } from './big-h';
import { HStatic, H } from 'secretary-like';


export class BigHStatic extends HStatic<BigH> {
	public from(source: H.Source<BigH>): BigH {
		return new BigH(source);
	}

	public restore(snapshot: string): BigH {
		return this.from(snapshot);
	}
}
