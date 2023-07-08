const exist = (board, word) => {
    // Starting by defining length variables
    let rows = board.length;
    let cols = board[0].length;
    let len = word.length;

    // Auxilliary backtrack function (DFS)
    const backtrack = (m, n, i) => {
        // We iterate from 0, so if we reach length we already have our word
        if(i===len) return true;

        // Going out of bounds, visiting same cell twice or letter not matching
        // returns false
        if(
            m < 0 ||
            m >= rows ||
            n < 0 ||
            n >= cols ||
            board[m][n] != word[i] ||
            visited.has([m, n])
            ) {
            return false;
        }

        // Adding field to path, running auxilliary function on each neighbor and returning result
        visited.add([m, n]);
        output = 
            backtrack(m, n+1, i+1) ||
            backtrack(m, n-1, i+1) ||
            backtrack(m+1, n, i+1) ||
            backtrack(m-1, n, i+1);
        visited.delete([m, n]);
        return output;
    }

    // Trying out each possible starting point
    for(let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++) {
            // Returing true if found
            if(backtrack(i,j,0) === true) {
                return true;
            }
        }
    }
    // Returning false after trying out each possible option
    return false;
};