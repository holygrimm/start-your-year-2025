function plus(
  x: number | string | undefined,
  y: number | string | undefined,
): number | string | undefined {
  if (x === undefined || y === undefined) return undefined;
  if (typeof x === "number" && typeof y === "number") return x + y;
  if (typeof x === "string" && typeof y === "string") return x + y;
  return undefined;
}

console.log(plus(2025, 1)); // 2026
console.log(plus(undefined, 1)); // undefined
console.log(plus("Stack", "UpLearn")); // "StackUpLearn"
