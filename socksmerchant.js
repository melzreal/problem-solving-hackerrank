function sockMerchant(n, ar) {
    /* Start by getting each key counted
    then grab just the values, and divide every element by two and round down what's left over
    because we can divide until whats left is 0.5 - which means no more pairs possible
    that way, by rounding 0.5 to 0 we get only the whole numbers - the amount of 2s in each count */
    const counter = ar.reduce((a, b) => {
        a[b] = (a[b] || 0) + 1
        return a;
    }, {});

    //another way of doing exactly the same as above
    // const anotherCounter = ar.reduce((a, b)=> {
    //     a[b] = a[b] +1 || 1
    //     return a;
    // }, {});

    console.log("first counter", counter)
    console.log("second counter", anotherCounter)

    const countEvens = Object.values(counter);
    const counts = [];

    countEvens.map((x) => counts.push(Math.floor(x / 2)))
    const totalSum = counts.reduce((a, b) => a + b)

    return totalSum;

}
