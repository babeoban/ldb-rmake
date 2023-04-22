import json

# Read existing data from file
with open('rsg.json', 'r') as file:
    data = json.load(file)

# Get input data from user
name = input("Enter name: ")
time = input("Enter time in mm:ss.xxx format: ")
f3 = input("Enter f3: ")
status_text = input("Enter status: ")
status_link = input("Enter status link: ")
date = input("Enter date: ")
link = input("Enter link: ")

# Convert time to milliseconds
minutes = int(time[0:2])
sec = int(time[3:5])
mili = int(time[6:])

time_ms = (minutes * 60 + sec) * 1000 + mili

# Add new data for the given name
data.append({
    "name": name,
    "time": time_ms,
    "status": {
        "text": status_text,
        "link": status_link
    },
    "f3": f3,
    "date": date,
    "link": link
})

# Write data back to file
with open('rsg.json', 'w') as file:
    json.dump(data, file, indent=4)
