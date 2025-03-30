function viewMonthEntries() {
   let searchMonth = document.getElementById('searchMonth').value;
   let tableBody = document.getElementById('entriesTable');
   tableBody.innerHTML = "";
   let weightData = [], labels = [];

   for (let i = 1; i <= 31; i++) {
       let date = `${searchMonth}-${String(i).padStart(2, '0')}`;
       let entryData = localStorage.getItem(date);
       if (entryData) {
           let entry = JSON.parse(entryData);
           weightData.push(entry.weight);
           labels.push(i);
           let row = `<tr>
                       <td>${date}</td>
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

   new Chart(document.getElementById('weightChart'), {
       type: 'line',
       data: {
           labels: labels,
           datasets: [{
               label: 'Weight Change (kg)',
               data: weightData,
               borderColor: '#ff4081',
               fill: false,
           }]
       },
       options: { responsive: true }
   });
}