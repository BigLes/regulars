/**
 * Created by Oleksandr Lisovyk on 03.12.2016.
 */
'use strict';

const Puzzle = {
    checkXLine(puzzle, index) {
        const size = puzzle.size;
        const middleRow = Math.floor(size / 2);
        const yStart = index < middleRow ? 0 : index - middleRow;
        const yEnd = yStart;
        const zStart = Math.abs(index - middleRow);
        const zEnd = size - yStart + 1;
        let line = '';
        // for (let y = yStart, z = zStart; y <= yEnd && z <= zEnd; y++, z++) {
        //     if ()
        // }
        console.log(yStart, yEnd);
    }
};

module.exports = Puzzle;

export default Puzzle;
