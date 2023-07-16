const carFleet = (target, position, speed) => {
    // Create an array of "cars" with position and time to reach target
    const cars = position.map((p, i) => ({ p, t: (target - p) / speed[i] }));
    // Sort the cars by starting position
    cars.sort((a, b) => a.p - b.p);
    let res = 0, time = 0;

    // Loop through the cars in reverse order
    for (let i = cars.length - 1; i >= 0; i--) {
        // If the time to reach the target is greater than the current time
        // Set the current time to the time to reach the target and increment the result
        if (cars[i].t > time) {
            time = cars[i].t;
            res++;
        }
    }
    return res;
};