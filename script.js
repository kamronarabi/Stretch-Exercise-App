document.getElementById("stretch-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the muscle input from the form
    const muscle = document.getElementById("muscle").value;

    // Fetch the exercises based on the muscle (mock data in this example)
    const exercises = findExercises(muscle);

    // Display the results
    displayExercises(exercises);
});

function findExercises(muscle) {
    // Mock data to simulate the functionality
    const data = {
        "Neck": [
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
        "Shoulder": [
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
