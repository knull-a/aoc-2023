/*
--- Part Two ---
Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

Equipped with this new information, you now need to find the real first and last digit on each line. For example:

two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

What is the sum of all of the calibration values?
*/

/*
--- Part Two ---
Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

Equipped with this new information, you now need to find the real first and last digit on each line. For example:

two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

What is the sum of all of the calibration values?
*/

const getCalibrationTotal = (values) => {
  return values.reduce(
    (sum, current) => sum + current.at(0) * 10 + current.at(-1),
    0
  );
};

const part2 = (data: string[]) => {
  const letterNumbers = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const numbers = data.map((line) =>
    [...line.matchAll(/(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g)]
      .map((match) => match[1])
      .map((n) => (/\d/.test(n) ? Number(n) : letterNumbers.indexOf(n) + 1))
  );
  console.log(getCalibrationTotal(numbers));
};

part2(
  `dssmtmrkonedbbhdhjbf9hq
2njsevenszzsfltconesixhsflpbpd
6shgbprkpbksnfourfivemvncvg2eight
ncqpkzh5twooneoneqfxlqbjjhqsrlkhvdnvtbzpcbj
449three45three`
    .replace(/\n/g, " ")
    .split(" ")
);
