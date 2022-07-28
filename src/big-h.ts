import { HLike, H, HStatic, HFactory } from 'secretary-like';
import {
	BigDecimal,
	Big as createBigDecimal,
	MC,
	RoundingMode,
} from 'bigdecimal.js';
import { staticallyImplements } from './statically-implements';


@staticallyImplements<HStatic<BigDecimalH>>()
export class BigDecimalH implements HLike<BigDecimalH> {
	public constructor(
		private bigDecimal: BigDecimal,
	) { }

	public plus(source: H.Source<BigDecimalH>): BigDecimalH {
		const x = bigDecimalHFactory.from(source);
		return new BigDecimalH(this.bigDecimal.add(x.bigDecimal));
	}

	public minus(source: H.Source<BigDecimalH>): BigDecimalH {
		const x = bigDecimalHFactory.from(source);
		return new BigDecimalH(this.bigDecimal.subtract(x.bigDecimal));
	}

	public neg(): BigDecimalH {
		return new BigDecimalH(this.bigDecimal.negate());
	}

	public times(source: H.Source<BigDecimalH>): BigDecimalH {
		const x = bigDecimalHFactory.from(source);
		return new BigDecimalH(this.bigDecimal.multiply(x.bigDecimal));
	}

	public div(
		source: H.Source<BigDecimalH>,
		scale = 0,
		roundingMode: H.RoundingMode = H.RoundingMode.HALF_AWAY_FROM_ZERO,
	): BigDecimalH {
		const x = bigDecimalHFactory.from(source);
		return new BigDecimalH(this.bigDecimal.divide(
			x.bigDecimal,
			scale,
			roundingMode === H.RoundingMode.AWAY_FROM_ZERO
				? RoundingMode.UP
				: roundingMode === H.RoundingMode.TOWARDS_ZERO
					? RoundingMode.DOWN
					: RoundingMode.HALF_UP,
		));
	}

	public mod(source: H.Source<BigDecimalH>): BigDecimalH {
		const x = bigDecimalHFactory.from(source);
		return new BigDecimalH(this.bigDecimal.remainder(x.bigDecimal));
	}

	public lt(source: H.Source<BigDecimalH>): boolean {
		const x = bigDecimalHFactory.from(source);
		return this.bigDecimal.compareTo(x.bigDecimal) < 0;
	}

	public lte(source: H.Source<BigDecimalH>): boolean {
		const x = bigDecimalHFactory.from(source);
		return this.bigDecimal.compareTo(x.bigDecimal) <= 0;
	}

	public gt(source: H.Source<BigDecimalH>): boolean {
		const x = bigDecimalHFactory.from(source);
		return this.bigDecimal.compareTo(x.bigDecimal) > 0;
	}

	public gte(source: H.Source<BigDecimalH>): boolean {
		const x = bigDecimalHFactory.from(source);
		return this.bigDecimal.compareTo(x.bigDecimal) >= 0;
	}

	public eq(source: H.Source<BigDecimalH>): boolean {
		const x = bigDecimalHFactory.from(source);
		return this.bigDecimal.compareTo(x.bigDecimal) === 0;
	}

	public neq(source: H.Source<BigDecimalH>): boolean {
		const x = bigDecimalHFactory.from(source);
		return this.bigDecimal.compareTo(x.bigDecimal) !== 0;
	}

	public round(
		scale = 0,
		roundingMode = H.RoundingMode.HALF_AWAY_FROM_ZERO
	): BigDecimalH {
		const mathContext = new MC(
			scale,
			roundingMode === H.RoundingMode.AWAY_FROM_ZERO
				? RoundingMode.UP
				: roundingMode === H.RoundingMode.TOWARDS_ZERO
					? RoundingMode.DOWN
					: RoundingMode.HALF_UP,
		);
		return new BigDecimalH(
			this.bigDecimal.round(mathContext),
		);
	}

	public toJSON(): string {
		return this.bigDecimal.toString();
	}

	public toFixed(scale = 0): string {
		return this.bigDecimal.setScale(
			scale,
			RoundingMode.DOWN,
		).toString();
	}

	public static max(x: H.Source<BigDecimalH>, ...rest: H.Source<BigDecimalH>[]): BigDecimalH {
		return [x, ...rest]
			.map(source => bigDecimalHFactory.from(source))
			.reduce(
				(x, y) => x.gt(y) ? x : y,
			);
	}

	public static min(x: H.Source<BigDecimalH>, ...rest: H.Source<BigDecimalH>[]): BigDecimalH {
		return [x, ...rest]
			.map(source => bigDecimalHFactory.from(source))
			.reduce(
				(x, y) => x.lt(y) ? x : y,
			);
	}
}

class BigDecimalHFactory implements HFactory<BigDecimalH> {
	public from(source: H.Source<BigDecimalH>): BigDecimalH {
		if (source instanceof BigDecimalH) return source;
		return new BigDecimalH(createBigDecimal(source));
	}

	public capture(x: BigDecimalH): H.Snapshot {
		return x.toJSON();
	}

	public restore(snapshot: H.Snapshot): BigDecimalH {
		return this.from(snapshot);
	}
}

export const bigDecimalHFactory: HFactory<BigDecimalH> = new BigDecimalHFactory();
