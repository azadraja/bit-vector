export default class BitVector {
  vector: Uint32Array;

  constructor(bitNumber: number) {
    this.vector = new Uint32Array(Math.ceil(bitNumber / 32));
  }

  set(i: number): void {
    const arrayIndex = i / 32;
    const bitIndex = i % 32;
    this.vector[arrayIndex] |= 1 << bitIndex;
  }

  get(i: number): boolean {
    const arrayIndex = i / 32;
    const bitIndex = i % 32;
    return !!(this.vector[arrayIndex] & (1 << bitIndex));
  }

  clear(i: number): void {
    const arrayIndex = i / 32;
    const bitIndex = i % 32;
    if (arrayIndex < this.vector.length) {
      this.vector[arrayIndex] &= ~(1 << bitIndex);
    }
  }
}
