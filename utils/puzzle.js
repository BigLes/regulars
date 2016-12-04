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
        let rule = null;
        try {
            rule = new RegExp(puzzle.rules.x[x]);
        } catch(e) {}

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
    },

    checkYLine(puzzle, y) {
        const size = puzzle.size;
        const middleRow = Math.floor(size / 2);
        const xStart = middleRow + (y < middleRow ? y : middleRow);
        const xEnd = y < middleRow ? 0 : y - middleRow;
        const zStart = y < middleRow ? 0 : y - middleRow;
        const zEnd = y < middleRow ? (middleRow + y) : (size - 1);
        const length = size - Math.abs(middleRow - y);
        let line = '';
        let rule = null;
        try {
            rule = new RegExp(puzzle.rules.y[y]);
        } catch(e) {}

        if (!rule) {
            return null;
        }

        for (let x = xStart, z = zStart; x >= xEnd && z <= zEnd; x--, z++) {
            if (!puzzle.cells[x][y][z] || puzzle.cells[x][y][z].length > 1) {
                continue;
            }
            line += puzzle.cells[x][y][z];
        }

        if (line.length !== length) {
            return null;
        }

        return rule.test(line) && line.match(rule).includes(line);
    },

    checkZLine(puzzle, z) {
        const size = puzzle.size;
        const middleRow = Math.floor(size / 2);
        const xStart = z > middleRow ? 0 : middleRow - z;
        const xEnd = middleRow + (z < middleRow ? middleRow: (size - z - 1));
        const yStart = z < middleRow ? 0 : z - middleRow;
        const yEnd = middleRow + (z > middleRow ? middleRow : z);
        const length = size - Math.abs(middleRow - z);
        let line = '';
        let rule = null;
        try {
            rule = new RegExp(puzzle.rules.z[z]);
        } catch(e) {}

        if (!rule) {
            return null;
        }

        for (let x = xStart, y = yStart; x <= xEnd && y <= yEnd; x++, y++) {
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
