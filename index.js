document.getElementById('date').valueAsDate = new Date();

function addExercise() {
    let container = document.getElementById('exercise-container');
    let input = document.createElement('input');
    input.type = 'text';
    input.className = 'exercise';
    input.placeholder = 'Exercise';
    container.appendChild(input);
}

function addEntry() {
    let date = document.getElementById('date').value;
    let weight = document.getElementById('weight').value;
    let caloriesIn = document.getElementById('caloriesIn').value;
    let caloriesOut = document.getElementById('caloriesOut').value;
    let water = document.getElementById('water').value;
    let steps = document.getElementById('steps').value;
    let exercises = Array.from(document.getElementsByClassName('exercise')).map(e => e.value.trim()).filter(e => e);

    if (!weight || !caloriesIn || !caloriesOut || !water || !steps || exercises.length === 0) {
        alert("Please fill in all fields");
        return;
    }

    let entry = { weight, caloriesIn, caloriesOut, exercises, steps, water };
    localStorage.setItem(date, JSON.stringify(entry));
    alert("Entry saved!");

    document.getElementById('weight').value = "";
    document.getElementById('caloriesIn').value = "";
    document.getElementById('caloriesOut').value = "";
    document.getElementById('water').value = "";
    document.getElementById('steps').value = "";
    document.getElementById('exercise-container').innerHTML = '<input type="text" class="exercise" placeholder="Exercise">';
}

function viewEntry() {
    let searchDate = document.getElementById('searchDate').value;
    if (!searchDate) {
        alert("Please enter a date to search");
        return;
    }
    let entryData = localStorage.getItem(searchDate);
    let tableBody = document.getElementById('entriesTable');
    tableBody.innerHTML = "";
    if (entryData) {
        let entry = JSON.parse(entryData);
        let row = `<tr>
                    <td>${searchDate}</td>
                    <td>${entry.weight} kg</td>
                    <td>${entry.caloriesIn}</td>
                    <td>${entry.caloriesOut}</td>
                    <td>${entry.exercises.join(", ")}</td>
                    <td>${entry.steps}</td>
                    <td>${entry.water} ml</td>
                  </tr>`;
        tableBody.innerHTML = row;
    } else {
        alert("No entry found for this date");
    }
}

function viewMonthEntries() {
    let searchMonth = document.getElementById('searchMonth').value;
    if (!searchMonth) {
        alert("Please enter a month to search");
        return;
    }
    let tableBody = document.getElementById('entriesTable');
    tableBody.innerHTML = "";

    for (let i = 1; i <= 31; i++) {
        let day = i < 10 ? `0${i}` : i;
        let fullDate = `${searchMonth}-${day}`;
        let entryData = localStorage.getItem(fullDate);

        if (entryData) {
            let entry = JSON.parse(entryData);
            let row = `<tr>
                        <td>${fullDate}</td>
                        <td>${entry.weight} kg</td>
                        <td>${entry.caloriesIn}</td>
                        <td>${entry.caloriesOut}</td>
                        <td>${entry.exercises.join(", ")}</td>
                        <td>${entry.steps}</td>
                        <td>${entry.water} ml</td>
                      </tr>`;
            tableBody.innerHTML += row;
        }
    }
}

function updateQuote() {
    const quotes = [
        "Push yourself because no one else is going to do it for you.",
        "The only bad workout is the one that didn’t happen.",
        "Don’t stop when you’re tired. Stop when you’re done.",
        "We are what we repeatedly do. Excellence then is not an act but a habit.",
        "Your body can stand almost anything. It’s your mind that you have to convince.",
        "Exercise not only changes your body, it changes your mind, your attitude, and your mood.",
        "Motivation is what gets you started. Habit is what keeps you going.",
        "A little progress each day adds up to big results.",
        "The body achieves what the mind believes.",
        "Wake up. Work out. Look hot. Kick ass.",
        "Fitness is like a relationship. You can’t cheat and expect it to work.",
        "It’s never too late to become what you might have been.",
        "The hard days are the best because that’s when champions are made, so if you push through, you can push through anything.",
        "The real workout starts when you want to stop.",
        "“All progress takes place outside the comfort zone.”",
        "“The harder you work and the more prepared you are for something, you’re going to be able to persevere through anything.”",
        "“Enduring means accepting. Accepting things as they are and not as you would wish them to be, and then looking ahead, not behind.” ",
        "“If you want something you’ve never had, you must be willing to do something you’ve never done.” – Thomas Jefferson",
        "“Continuous improvement is better than delayed perfection.” – Mark Twain",
        "“A champion is someone who gets up when they can’t.”",
        "“You did not wake up today to be mediocre.” ",
        "“The only bad workout is the one that didn’t happen.”",
        "“The only place where success comes before work is in the dictionary.”",
        "“Keep listening to your body. It will tell you when something is not okay.”",
        "“Set your goals high, and don’t stop until you get there.”",
        "“The difference between try and triumph is a little umph.”",
        "“The only disability in life is a bad attitude.”",
        "“Be Humble. Be Hungry. And always be the hardest worker in the room.”",
        "“The only way to finish is to start.”",
        "“The only way to define your limits is by going beyond them.”",
        "“It’s supposed to be hard. If it wasn’t hard, everyone would do it.  The hard is what makes it great.”",
        "“Put all excuses aside and remember this: You are capable.”",
        "“Making excuses burns zero calories per hour.”",
        "“No matter how many mistakes you make or how slow you progress, you are still way ahead of everyone who isn’t trying.”",
        "“You are stronger than you think.”",
        


    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('dailyQuote').innerText = quotes[randomIndex];
}

updateQuote();
