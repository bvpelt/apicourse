# Intro
See https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/

## Best practice

### Naming conventions

#### Avoid using verbs in endpoint names
Each URL should point towards a resource (remember the box example from above). Nothing more and nothing less.

Using a verb inside a URL shows a certain behavior which a resource itself can not have.

```text
// Best practice implementations (without verbs)
GET "/api/v1/workouts" 
GET "/api/v1/workouts/:workoutId" 
POST "/api/v1/workouts" 
PATCH "/api/v1/workouts/:workoutId" 
DELETE "/api/v1/workouts/:workoutId"  

// Implementation using verbs 
GET "/api/v1/getAllWorkouts" 
GET "/api/v1/getWorkoutById/:workoutId" 
CREATE "/api/v1/createWorkout" 
PATCH "/api/v1/updateWorkout/:workoutId" 
DELETE "/api/v1/deleteWorkout/:workoutId"
```

#### Group associated resources together
For resources that are associated with others, it's a good practice to group them together into one endpoint and nest them properly.
A rule of thumb is to next maximal three levels deep.