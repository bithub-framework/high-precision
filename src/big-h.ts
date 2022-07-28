import { HLike, H, HStatic } from 'secretary-like';
import { Big } from 'big.js';
import { staticallyImplements } from './statically-implements';


@staticallyImplements<HStatic<BigH>>()
export class BigH implements HLike<BigH> {
	public constructor(
		private big: Big,
	) { }

	public plus(x: H.Source<BigH>): BigH {
		if (typeof x === 'number') return new BigH(this.big.plus(x));
		if (typeof x === 'string') return new BigH(this.big.plus(x));
		return new BigH(this.big.plus(x.big));
	}

	public minus(x: H.Source<BigH>): BigH {
		if (typeof x === 'number') return new BigH(this.big.minus(x));
		if (typeof x === 'string') return new BigH(this.big.minus(x));
		return new BigH(this.big.minus(x.big));
	}

	public neg(): BigH {
		return new BigH(new Big(0).minus(this.big));
	}

	public times(x: H.Source<BigH>): BigH {
		if (typeof x === 'number') return new BigH(this.big.times(x));
		if (typeof x === 'string') return new BigH(this.big.times(x));
		return new BigH(this.big.times(x.big));
	}

	public div(x: H.Source<BigH>): BigH {
		if (typeof x === 'number') return new BigH(this.big.div(x));
		if (typeof x === 'string') return new BigH(this.big.div(x));
		return new BigH(this.big.div(x.big));
	}

	public mod(x: H.Source<BigH>): BigH {
		if (typeof x === 'number') return new BigH(this.big.mod(x));
		if (typeof x === 'string') return new BigH(this.big.mod(x));
		return new BigH(this.big.mod(x.big));
	}

	public lt(x: H.Source<BigH>): boolean {
		if (typeof x === 'number') return this.big.lt(x);
		if (typeof x === 'string') return this.big.lt(x);
		return this.big.lt(x.big);
	}

	public lte(x: H.Source<BigH>): boolean {
		if (typeof x === 'number') return this.big.lte(x);
		if (typeof x === 'string') return this.big.lte(x);
		return this.big.lte(x.big);
	}

	public gt(x: H.Source<BigH>): boolean {
		if (typeof x === 'number') return this.big.gt(x);
		if (typeof x === 'string') return this.big.gt(x);
		return this.big.gt(x.big);
	}

	public gte(x: H.Source<BigH>): boolean {
		if (typeof x === 'number') return this.big.gte(x);
		if (typeof x === 'string') return this.big.gte(x);
		return this.big.gte(x.big);
	}

	public eq(x: H.Source<BigH>): boolean {
		if (typeof x === 'number') return this.big.eq(x);
		if (typeof x === 'string') return this.big.eq(x);
		return this.big.eq(x.big);
	}

	public neq(x: H.Source<BigH>): boolean {
		if (typeof x === 'number') return !this.big.eq(x);
		if (typeof x === 'string') return !this.big.eq(x);
		return !this.big.eq(x.big);
	}

	public round(
		decimalPoint = 0,
		roundingMode = H.RoundingMode.HALF_AWAY_FROM_ZERO
	): BigH {
		return new BigH(new Big(this.big).round(
			decimalPoint,
			roundingMode === H.RoundingMode.AWAY_FROM_ZERO
				? Big.roundUp
				: roundingMode === H.RoundingMode.TOWARDS_ZERO
					? Big.roundDown
					: Big.roundHalfUp,
		));
	}

	public toJSON(): string {
		return this.big.toJSON();
	}

	public toFixed(decimalPoint = 0): string {
		return this.big.toFixed(
			decimalPoint,
			Big.roundDown,
		);
	}

	public static max(x: BigH, ...rest: BigH[]): BigH {
		return [x, ...rest].reduce(
			(x, y) => x.gt(y) ? x : y,
		);
	}

	public static min(x: BigH, ...rest: BigH[]): BigH {
		return [x, ...rest].reduce(
			(x, y) => x.lt(y) ? x : y,
		);
	}

	// private capture(): H.Snapshot {
	// 	return this.big.toJSON();
	// }

	// public static capture(x: BigH): H.Snapshot {
	// 	return x.capture();
	// }

	// public static restore(s: H.Snapshot): BigH {
	// 	return new BigH(new Big(s));
	// }
}
