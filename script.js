// Load JSON data
fetch('rsg.json')
  .then(response => response.json())
  .then(data => {
    // Sort data by time
    data.sort((a, b) => a.time - b.time);

    // Add rows to table
    const tbody = document.querySelector('#my-table tbody');
    data.forEach((record, index) => {
      // Create new row
      const row = document.createElement('tr');

      // Add columns to row
      const rank = document.createElement('td');
      rank.textContent = index + 1;
      row.appendChild(rank);

      const name = document.createElement('td');
      name.textContent = record.name;
      row.appendChild(name);

      const time = document.createElement('td');
      time.textContent = formatTime(record.time);
      row.appendChild(time);

      const status = document.createElement('td');
      const statusText = document.createTextNode(record.status.text);
      status.appendChild(statusText);
      row.appendChild(status);

      const f3 = document.createElement('td');
      f3.textContent = record.f3;
      row.appendChild(f3);

      const date = document.createElement('td');
      const dateValue = record.date;
      const datemm = convertDateFormat(dateValue)
      const dateNumericValue = Date.parse(datemm);
      const elapsedTime = Date.now() - dateNumericValue;
      
      if (elapsedTime >= (1000 * 60 * 60 * 24 * 365)) {
        const years = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 365)) + " years";
        date.textContent = years;
      } else if (elapsedTime >= (1000 * 60 * 60 * 24 * 30)) {
        const months = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 30)) + " months";
        date.textContent = months;
      } else if (elapsedTime >= (1000 * 60 * 60 * 24 * 7)) {
        const weeks = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 7)) + " weeks";
        date.textContent = weeks;
      } else {
        const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24)) + " days";
        date.textContent = days;
      }
      
      date.setAttribute('data', dateNumericValue);
      row.appendChild(date);
      
      // Add event listener to show full date on hover
      row.addEventListener('mouseover', () => {
        date.textContent = dateValue;
      });
      
      // Add event listener to show elapsed time on mouseout
      row.addEventListener('mouseout', () => {
        if (elapsedTime >= (1000 * 60 * 60 * 24 * 365)) {
          const years = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 365)) + " years";
          date.textContent = years;
        } else if (elapsedTime >= (1000 * 60 * 60 * 24 * 30)) {
          const months = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 30)) + " months";
          date.textContent = months;
        } else if (elapsedTime >= (1000 * 60 * 60 * 24 * 7)) {
          const weeks = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 7)) + " weeks";
          date.textContent = weeks;
        } else {
          const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24)) + " days";
          date.textContent = days;
        }
      });
      
      
      

      // Add event listener to row to go to the link on click
      row.addEventListener('click', () => {
        window.open(record.link, '_blank');
      });

      // Add event listener to status to go to the status link on click
      status.addEventListener('click', (event) => {
        event.stopPropagation();
        window.open(record.status.link, '_blank');
      });

      // Add row to tbody
      tbody.appendChild(row);
    });
  });

// Format time in mm:ss.xxx format
function formatTime(milliseconds) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds - minutes * 60000) / 1000);
  const millisecondsRemainder = milliseconds - minutes * 60000 - seconds * 1000;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${millisecondsRemainder.toString().padStart(3, '0')}`;
}

function convertDateFormat(dateString) {
  // Split the date string into day, month, and year parts
  var parts = dateString.split('/');
  var day = parts[0];
  var month = parts[1];
  var year = parts[2];

  // Create a new date string in mm/dd/yyyy format
  var newDateString = month + '/' + day + '/' + year;

  return newDateString;
}

function loadData(file) {
  fetch(file)
    .then(response => response.json())
    .then(data => {
      // Process the data, e.g. display it in a table or list
      const tbody = document.querySelector('#my-table tbody');
      tbody.innerHTML = '';

      data.sort((a, b) => a.time - b.time);

      // Add rows to table
      data.forEach((record, index) => {
        // Create new row
        const row = document.createElement('tr');
  
        // Add columns to row
        const rank = document.createElement('td');
        rank.textContent = index + 1;
        row.appendChild(rank);
  
        const name = document.createElement('td');
        name.textContent = record.name;
        row.appendChild(name);
  
        const time = document.createElement('td');
        time.textContent = formatTime(record.time);
        row.appendChild(time);
  
        const status = document.createElement('td');
        const statusText = document.createTextNode(record.status.text);
        status.appendChild(statusText);
        row.appendChild(status);
  
        const f3 = document.createElement('td');
        f3.textContent = record.f3;
        row.appendChild(f3);
  
        const date = document.createElement('td');
        const dateValue = record.date;
        const datemm = convertDateFormat(dateValue)
        const dateNumericValue = Date.parse(datemm);
        const elapsedTime = Date.now() - dateNumericValue;
        
        if (elapsedTime >= (1000 * 60 * 60 * 24 * 365)) {
          const years = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 365)) + " years";
          date.textContent = years;
        } else if (elapsedTime >= (1000 * 60 * 60 * 24 * 30)) {
          const months = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 30)) + " months";
          date.textContent = months;
        } else if (elapsedTime >= (1000 * 60 * 60 * 24 * 7)) {
          const weeks = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 7)) + " weeks";
          date.textContent = weeks;
        } else {
          const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24)) + " days";
          date.textContent = days;
        }
        
        date.setAttribute('data', dateNumericValue);
        row.appendChild(date);
        
        // Add event listener to show full date on hover
        row.addEventListener('mouseover', () => {
          date.textContent = dateValue;
        });
        
        // Add event listener to show elapsed time on mouseout
        row.addEventListener('mouseout', () => {
          if (elapsedTime >= (1000 * 60 * 60 * 24 * 365)) {
            const years = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 365)) + " years";
            date.textContent = years;
          } else if (elapsedTime >= (1000 * 60 * 60 * 24 * 30)) {
            const months = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 30)) + " months";
            date.textContent = months;
          } else if (elapsedTime >= (1000 * 60 * 60 * 24 * 7)) {
            const weeks = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 7)) + " weeks";
            date.textContent = weeks;
          } else {
            const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24)) + " days";
            date.textContent = days;
          }
        });
        
        
        
  
        // Add event listener to row to go to the link on click
        row.addEventListener('click', () => {
          window.open(record.link, '_blank');
        });
  
        // Add event listener to status to go to the status link on click
        status.addEventListener('click', (event) => {
          event.stopPropagation();
          window.open(record.status.link, '_blank');
        });
  
        // Add row to tbody
        tbody.appendChild(row);
      });

    })
    .catch(error => console.error(error));
}

const rsgButton = document.getElementById('rsg-button');
rsgButton.addEventListener('click', () => {
  loadData('rsg.json');
});

const ssgButton = document.getElementById('ssg-button');
ssgButton.addEventListener('click', () => {
  loadData('ssg.json');
});

rsgButton.addEventListener("click", () => {
  rsgButton.classList.add("green-button");
  rsgButton.classList.remove("black-button");
  ssgButton.classList.add("black-button");
  ssgButton.classList.remove("green-button");
});

ssgButton.addEventListener("click", () => {
  ssgButton.classList.add("green-button");
  ssgButton.classList.remove("black-button");
  rsgButton.classList.add("black-button");
  rsgButton.classList.remove("green-button");
});

// Get the popup element
var popup = document.getElementById("popup");

// Open the popup
function openPopup() {
  popup.style.display = "block";
}

// Close the popup
function closePopup() {
  popup.style.display = "none";
}
