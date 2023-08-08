//1. 가장 익숙한 방법으로 문제를 해결해 주세요.
const solution = (n) => {
  let decimal = 0;
  let exponent = 0;
  if (n === "0" || n === "1") {
    return parseInt(n, 10);
  }
  const length = n.length;
  while (exponent <= length - 1) {
    decimal += parseInt(n.charAt(n.length - 1), 10) * 2 ** exponent;

    exponent++;
    n = n.slice(0, -1);
  }
  return decimal;
};

test("10진수 숫자를 반환한다", () => {
  expect(solution("0")).toBe(0);
  expect(solution("1")).toBe(1);
  expect(solution("10")).toBe(2);
  expect(solution("11")).toBe(3);
  expect(solution("100")).toBe(4);
  expect(solution("101")).toBe(5);
  expect(solution("110")).toBe(6);
  expect(solution("111")).toBe(7);
  expect(solution("1000")).toBe(8);
});

test("큰 입력이 주어져도 RangeError를 던지지 않는다", () => {
  const input = Number.MAX_VALUE.toString(2);

  expect(() => solution(input)).not.toThrowError(
    new RangeError("Maximum call stack size exceeded")
  );
});
