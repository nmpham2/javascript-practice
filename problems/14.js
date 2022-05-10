/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    for (let x = 0; x < numbers.length; x++)
    {
        const current = numbers[x];
        let count = 0;
        for (let y = x + 1; y < numbers.length; y++)
        {
            if (current === numbers[y])
            {
                count++;
                if (count >= Math.floor(numbers.length / 2))
                {
                    return numbers[y];
                }
            }
        }
    }
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};