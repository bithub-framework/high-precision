import { HLike, H, HStatic, HFactory } from 'secretary-like';
import { Big } from 'big.js';
import { staticallyImplements } from './statically-implements';


@staticallyImplements<HStatic<BigH>>()
export class BigH implements HLike<BigH> {
	public constructor(
		private big: Big,
	) { }

	public plus(source: H.Source<BigH>): BigH {
		const x = bigHFactory.from(source);
		return new BigH(this.big.plus(x.big));
	}

	public minus(source: H.Source<BigH>): BigH {
		const x = bigHFactory.from(source);
		return new BigH(this.big.minus(x.big));
	}

	public neg(): BigH {
		return new BigH(new Big(0).minus(this.big));
	}

	public times(source: H.Source<BigH>): BigH {
		const x = bigHFactory.from(source);
		return new BigH(this.big.times(x.big));
	}

	public div(source: H.Source<BigH>): BigH {
		const x = bigHFactory.from(source);
		return new BigH(this.big.div(x.big));
	}

	public mod(source: H.Source<BigH>): BigH {
		const x = bigHFactory.from(source);
		return new BigH(this.big.mod(x.big));
	}

	public lt(source: H.Source<BigH>): boolean {
		const x = bigHFactory.from(source);
		return this.big.lt(x.big);
	}

	public lte(source: H.Source<BigH>): boolean {
		const x = bigHFactory.from(source);
		return this.big.lte(x.big);
	}

	public gt(source: H.Source<BigH>): boolean {
		const x = bigHFactory.from(source);
		return this.big.gt(x.big);
	}

	public gte(source: H.Source<BigH>): boolean {
		const x = bigHFactory.from(source);
		return this.big.gte(x.big);
	}

	public eq(source: H.Source<BigH>): boolean {
		const x = bigHFactory.from(source);
		return this.big.eq(x.big);
	}

	public neq(source: H.Source<BigH>): boolean {
		const x = bigHFactory.from(source);
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

	public static max(x: H.Source<BigH>, ...rest: H.Source<BigH>[]): BigH {
		return [x, ...rest]
			.map(source => bigHFactory.from(source))
			.reduce(
				(x, y) => x.gt(y) ? x : y,
			);
	}

	public static min(x: H.Source<BigH>, ...rest: H.Source<BigH>[]): BigH {
		return [x, ...rest]
			.map(source => bigHFactory.from(source))
			.reduce(
				(x, y) => x.lt(y) ? x : y,
			);
	}
}

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
