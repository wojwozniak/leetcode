/**
 * Sort array a
 * Reorder array b so respective indexes stay the same
 */
fn sort_with_correspondence<T: Ord, U>(a: &mut [T], b: &mut [U]) {
    let mut zipped: Vec<_> = a.iter().cloned().zip(b.iter().cloned()).collect();

    zipped.sort_by(|x, y| x.0.cmp(&y.0));

    for (i, (a_val, b_val)) in zipped.into_iter().enumerate() {
        a[i] = a_val;
        b[i] = b_val;
    }
}
