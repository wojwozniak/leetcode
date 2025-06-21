# 853. Car Fleet 

There are n cars at given miles away from the starting mile 0, traveling to reach the mile target.

You are given two integer array position and speed, both of length n, where position[i] is the starting mile of the ith car and speed[i] is the speed of the ith car in miles per hour.

A car cannot pass another car, but it can catch up and then travel next to it at the speed of the slower car.

A car fleet is a car or cars driving next to each other. The speed of the car fleet is the minimum speed of any car in the fleet.

If a car catches up to a car fleet at the mile target, it will still be considered as part of the car fleet.

Return the number of car fleets that will arrive at the destination.

## Idea

We want to have array of (starting position; time that car will arrive to the destination) sorted descending by starting position.

Then we will just compare times a car arrives to the target -> If next car comes faster, it will catch up and join the fleet.

If not, we have new fleet (and we compare with new time).

## Solution

```rust
impl Solution {
    pub fn car_fleet(target: i32, position: Vec<i32>, speed: Vec<i32>) -> i32 {
        let mut cars: Vec<(i32, f64)> = position.into_iter()
            .zip(speed.into_iter())
            .map(|(pos, spd)| (pos, (target - pos) as f64 / spd as f64))
            .collect();

        // Sort cars by starting position in descending order
        cars.sort_by(|a, b| b.0.cmp(&a.0));

        let mut fleets = 0;
        let mut prev_time = 0.0;

        for (_, time) in cars {
            if time > prev_time {
                fleets += 1;
                prev_time = time;
            }
        }

        fleets
    }
}
```