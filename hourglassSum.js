function hourglassSum(arr) {

    //we need 7 values from each hourglass
    //because of the constraint of -9, the lowest possible value is -9*-9 = -63
    //we need to make sure we stop looping at -2  to prevent an undefined
    //because the last hourglass is at 2 indexes less
    // i for rows and b for columns. 
    const lengthOf = arr.length;
    let max = -64;
    let total;

    for (let i = 0; i <= 3; i++) {
        for (let b = 0; b <= 3; b++) {

            let sum = arr[i][b] + arr[i][b + 1] + arr[i][b + 2];
            sum += arr[i + 1][b + 1];
            sum += arr[i + 2][b] + arr[i + 2][b + 1] + arr[i + 2][b + 2];

            if (total < sum || total === undefined) {
                total = sum;
            }

        }
    }

    return total;

}