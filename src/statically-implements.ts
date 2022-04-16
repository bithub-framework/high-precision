export function staticallyImplements<TStatic>() {
	return function (constructor: TStatic) { }
}
