document.getElementById("stretch-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the muscle input from the form
    const muscle = document.getElementById("muscle").value.toLowerCase();

    // Fetch the exercises based on the muscle (mock data in this example)
    const exercises = findExercises(muscle);

    // Display the results
    displayExercises(exercises);
});

function findExercises(muscle) {
    // Mock data to simulate the functionality
    const data = {
        "neck": [
            {
                name: "Retraction",
                preparation: "Stand or sit.",
                execution: "Pull head back as far as possible while looking straight ahead."
            },
            {
                name: "Neck Extensor",
                preparation: "Bow head forward with jaw shut. Depress chin into the throat.",
                execution: "Slightly turn head to one side. Hold stretch."
            }
        ],
        "shoulder": [
            {
                name: "Doorway Stretch",
                preparation: "Stand in a doorway, arms extended.",
                execution: "Lean forward until you feel the stretch."
            },
            {
                name: "Side Deltoid Stretch",
                preparation: "Cross one arm over your chest.",
                execution: "Use the opposite arm to pull it closer to your body."
            }
        ],
        "chest": [
            {
                name: "Behind Head",
                preparation: "Place hands behind head.",
                execution: "Pull elbows back further behind ears. Hold stretch."
            },
            {
                name: "Doorway",
                preparation: "Stand at the end of the wall or in a doorway. Place the inside of the bent arm on the wall surface.",
                execution: "Turn your body away from the positioned arm. Hold stretch."
            },
            {
                name: "Straight Arm",
                preparation: "With arm extended, position hand on a fixed structure shoulder height.",
                execution: "Turn body away from the positioned arm. Hold stretch."
            }
        ],
        "forearm": [
            {
                name: "Standing",
                preparation: "Cross wrists, point thumbs downward, and clasp hands.",
                execution: "Cross wrists, point thumbs downward, and clasp hands."
            },
            {
                name: "Seated",
                preparation: "Sit on floor. Place palms on floor to sides, behind hips with fingers pointing back.",
                execution: "Lean back with arms straight. Hold stretch."
            },
            {
                name: "Kneeling",
                preparation: "Kneel on the floor. Place palms of hands on floor with fingers pointing toward knees.",
                execution: "Shift body back with elbows straight. Hold stretch."
            }
        ],
        "hip flexor": [
            {
                name: "Kneeling Stretch",
                preparation: "Kneel on one knee with the other foot in front.",
                execution: "Push hips forward and lean slightly back. Hold stretch."
            },
            {
                name: "Standing Stretch",
                preparation: "Stand and step forward with one foot while keeping the other foot planted.",
                execution: "Push hips forward until you feel the stretch in the hip flexor. Hold stretch."
            }
        ],
        "quadriceps": [
            {
                name: "Standing Quadriceps Stretch",
                preparation: "Stand and grasp the foot of the leg you are stretching behind your body.",
                execution: "Pull the foot toward your buttocks. Hold stretch."
            },
            {
                name: "Kneeling Quadriceps Stretch",
                preparation: "Kneel on both knees and lean backward to stretch the quadriceps.",
                execution: "Hold the stretch as you feel the tension in your thigh muscles."
            }
        ],
        "hamstrings": [
            {
                name: "Seated Hamstring Stretch",
                preparation: "Sit on the floor with one leg extended and the other bent.",
                execution: "Reach forward toward the toes of the extended leg. Hold stretch."
            },
            {
                name: "Standing Hamstring Stretch",
                preparation: "Stand and place one foot on a slightly elevated surface.",
                execution: "Lean forward over the extended leg. Hold stretch."
            }
        ],
        "calves": [
            {
                name: "Standing Calf Stretch",
                preparation: "Stand facing a wall, place one foot back with the heel flat on the ground.",
                execution: "Lean toward the wall, keeping the back leg straight. Hold stretch."
            },
            {
                name: "Seated Calf Stretch",
                preparation: "Sit on the floor with one leg extended.",
                execution: "Use a towel or band around the ball of the foot and gently pull toward you. Hold stretch."
            }
        ],
        "lower back": [
            {
                name: "Child's Pose",
                preparation: "Kneel on the floor with arms extended in front of you.",
                execution: "Sit back onto your heels while keeping arms extended. Hold stretch."
            },
            {
                name: "Knees to Chest Stretch",
                preparation: "Lie on your back and bring both knees to your chest.",
                execution: "Hug your knees and hold the position to stretch the lower back."
            }
        ]
    };
    

    return data[muscle] || [];
}

function displayExercises(exercises) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results

    if (exercises.length === 0) {
        resultsContainer.innerHTML = `<p>No exercises found for the specified muscle.</p>`;
        return;
    }

    exercises.forEach(exercise => {
        const exerciseElement = document.createElement("div");
        exerciseElement.classList.add("result-item");

        exerciseElement.innerHTML = `
            <h3>${exercise.name}</h3>
            <p><strong>Preparation:</strong> ${exercise.preparation}</p>
            <p class="execution"><strong>Execution:</strong> ${exercise.execution}</p>
        `;

        resultsContainer.appendChild(exerciseElement);
    });
}
