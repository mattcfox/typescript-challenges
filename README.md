# Matt's TypeScript Challenges

This project attempt to fill something of a hole in the materials for learning TypeScript. Namely
challenges that test your ability to write good generics, instead of merely functionality.

## How use a challenge?

1.  `yarn` in the root of the repo to install depencencies
1.  Change to the directory of your challenge
1.  Open `challenge.ts` and read the prompt
1.  Make an attempt at a solution
1.  Run `yarn check-solution`
1.  If unsuccessful, go to step 4
1.  Give yourself a pat on the back
1.  Choose the next challenge

## Layout and Difficulty Levels

If you've ever been to a North American ski resort, these might look a little familiar.

### 🟢 Green (Easy) 🟢

The easiest challenges are here. These focus primarily on comprehending existing generics. If they
do require that you write a generic, it will be a very simple one.

### 🟦 Blue (Medium) 🟦

These challenges will require you to write more difficult generics for a preexisting
implementation, inlculding mapped and conditional types.

### ![◆](data:image/webp;base64,UklGRq4AAABXRUJQVlA4TKIAAAAvE8AEEGegoG0jJ7dJHr0j+ZOGgraNnNwmefSO5E8FbRs5uU3y6B3JnwratmF6N8LT8AeA/7/WWg/wvbcAVRXA/P8JqLuvqjAzBKNIsp0sDnKSgQ0kcMMOEtDAKZrgmXpv93mI6L/atm2YNCJjcgYAbAMAdvkdhYf4n1PSzFHNnCRRiahQJdTarxzLnJeuvDXWAo4KOGKcGahEFagSphf1AAA=) Black (Hard) ![◆](data:image/webp;base64,UklGRq4AAABXRUJQVlA4TKIAAAAvE8AEEGegoG0jJ7dJHr0j+ZOGgraNnNwmefSO5E8FbRs5uU3y6B3JnwratmF6N8LT8AeA/7/WWg/wvbcAVRXA/P8JqLuvqjAzBKNIsp0sDnKSgQ0kcMMOEtDAKZrgmXpv93mI6L/atm2YNCJjcgYAbAMAdvkdhYf4n1PSzFHNnCRRiahQJdTarxzLnJeuvDXWAo4KOGKcGahEFagSphf1AAA=)

These challenges will be quite hard. The difficulty here is a little nebulous, but you should
expect to write complex types that are still within the bounds of what the type system is designed
to handle.

### ![◆◆](data:image/webp;base64,UklGRpYBAABXRUJQVlA4TIkBAAAvE8AEEG/CKJIkRTWzvHu2z+QJYHgy2WAUSZKimlnePdtn8gQwPJkYRZKkqGaWd8/2mTwBDE8mBm0jOc4l264B+A+A//8FBAQ2kEAAASQQQAICAgUEEEADCxDYwAYG+IENCOzv+56qel3XUdW47/uqqtd1jTGmzvNczjm3bTvGmNj3/Tjn3LbtOOfqPM89juOnqqttW/d9r6qqnKYpq6pymqasqop1Xd22zaqqDCHQNI05Z0opzPNszpm6ro0xIiIYYxARjDGoKsYYVJWUEqqKtRZjDM45jDGklLDWAoexbZvOfe/HTn5s29aJjf4Leh+3hIj+K2zbtkm6p2B/QUTkTwkiBSCSYTISyHLfZSRw9GrSSBCa/3LC0Gf+y5ixr94x8igC5wC3hqYIIgvgUxBEIvsFtrogkvUrgImPyD0EcGlpRNENALxKUuTfimAfF1rzDIUwC3rHBoBTR9PXMCA8KsWnkWCXaB9hRFhNTQCHLi94E94R3kMsrXiasrRnecTz0mRwIG3jOQEA) Double Black (Very Hard) ![◆◆](data:image/webp;base64,UklGRpYBAABXRUJQVlA4TIkBAAAvE8AEEG/CKJIkRTWzvHu2z+QJYHgy2WAUSZKimlnePdtn8gQwPJkYRZKkqGaWd8/2mTwBDE8mBm0jOc4l264B+A+A//8FBAQ2kEAAASQQQAICAgUEEEADCxDYwAYG+IENCOzv+56qel3XUdW47/uqqtd1jTGmzvNczjm3bTvGmNj3/Tjn3LbtOOfqPM89juOnqqttW/d9r6qqnKYpq6pymqasqop1Xd22zaqqDCHQNI05Z0opzPNszpm6ro0xIiIYYxARjDGoKsYYVJWUEqqKtRZjDM45jDGklLDWAoexbZvOfe/HTn5s29aJjf4Leh+3hIj+K2zbtkm6p2B/QUTkTwkiBSCSYTISyHLfZSRw9GrSSBCa/3LC0Gf+y5ixr94x8igC5wC3hqYIIgvgUxBEIvsFtrogkvUrgImPyD0EcGlpRNENALxKUuTfimAfF1rzDIUwC3rHBoBTR9PXMCA8KsWnkWCXaB9hRFhNTQCHLi94E94R3kMsrXiasrRnecTz0mRwIG3jOQEA)

Here be dragons. These will be types that require significant effort to work around the limitations
of the type system. Expect some slight sanity damage. You have been warned.
