# 50. State can be updated in many ways!

> State can be updated in many ways!
Thus far, we update our state upon user events (e.g. upon a click).
That's very common but not required for state updates! You can update states for whatever reason you may have.
Later in the course, we'll see Http requests that complete (where we then want to update the state based on the Http response we got back) but you could also be updating state because a timer (set with `setTimeout()`) expired for example.
