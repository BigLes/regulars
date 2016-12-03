/**
 * Created by Oleksandr Lisovyk on 03.12.2016.
 */
'use strict';

const Puzzle = {
    checkXLine(puzzle, x) {
        const size = puzzle.size;
        const middleRow = Math.floor(size / 2);
        const yStart = x < middleRow ? 0 : x - middleRow;
        const yEnd = middleRow + (x < middleRow ? x : middleRow);
        const zStart = x < middleRow ? middleRow - x : 0;
        const zEnd = middleRow + (x < middleRow ? middleRow : (size - x - 1));
        const length = size - Math.abs(middleRow - x);
        let line = '';
        let rule = puzzle.rules.x[x] ? new RegExp(puzzle.rules.x[x]) : null;

        if (!rule) {
            return null;
        }

        for (let y = yStart, z = zStart; y <= yEnd && z <= zEnd; y++, z++) {
            if (!puzzle.cells[x][y][z] || puzzle.cells[x][y][z].length > 1) {
                continue;
            }
            line += puzzle.cells[x][y][z];
        }

        if (line.length !== length) {
            return null;
        }

        return rule.test(line) && line.match(rule).includes(line);
    }
};

module.exports = Puzzle;

export default Puzzle;
