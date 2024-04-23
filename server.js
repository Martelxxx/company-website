const { name } = require('ejs');
const express = require('express');
const app = express();

app.use(express.static('public'));

// <<==== Home Page ====>>

app.get('/', (req, res) => {
    res.render('home.ejs', {})
});

// <<==== Contact Us Page ====>>

app.get('/contact', (req, res) => {
    res.render('contact.ejs', {})
});

// <<==== About Us Page ====>>

app.get('/about', (req, res) => {
    res.render('about.ejs', {})
});

// <<==== Partners Page ====>>

const partners = [
    {
        url: 'https://www.theonion.com',
        name: "Intel: The Onion",
    },
    {
        url: 'https://www.dod.gov',
        name: "The Department of Defense",
    },
    {
        url: 'https://www.dia.mil',
        name: "The Defense Intelligence Agency",
    },
    {
        url: 'https://www.cia.gov',
        name: "The Central Intelligence Agency",
        
    },
    {
        url: "https://vault.fbi.gov/UFO",
        name: "The Federal Bureau of Investigation",
    },
    {
        url: 'https://www.nsa.gov',
        name: "The National Security Agency", 
    },
    {
        url: 'https://www.nro.gov',
        name: "The National Reconnaissance Office",
    },
    {
        url: 'https://www.whitehouse.gov',
        name: "The White House",
    },
{
    url: 'https://www.conspiracytheory.co',
    name: "Conspiracy Theory Inc.",
}

];

app.get('/links', (req, res) => {
    res.render('links.ejs', {partners: partners}) 
});

// <<==== Past Work Page ====>>

const covertOperations = {
    company: "Black Ops Inc.",
    operationCode: "ZULU-29",
    missionName: "Silent Whisper",
    location: {
      country: "Country X",
      city: "Capital City",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437
      }
    },
    operationType: "Reconnaissance and Intelligence Gathering",
    timeFrame: {
      startDate: "2022-02-15",
      endDate: "2022-02-28"
    },
    agentsInvolved: [
      {
        codeName: "Shadow",
        role: "Field Agent",
        status: "Active"
      },
      {
        codeName: "Viper",
        role: "Intel Analyst",
        status: "Active"
      },
      {
        codeName: "Ghost",
        role: "Field Agent",
        status: "Retired"
      }
    ],
    levelOfSecrecy: "Top Secret",
    missionPurpose: "To gather intelligence on hostile activities and prepare a detailed report.",
    operationOutcome: {
      success: true,
      report: "Detailed report submitted to HQ. No casualties on our side.",
      additionalNotes: "Agent Viper was captured but rescued within the same operation and provided critical information."
    }
  };
  

app.get('/past', (req, res) => {
    res.render('past.ejs', 
    {covertOperations: covertOperations})
});

// <<==== Staff Page ====>>

const agents = [
    {
        codeName: "Shadow",
        role: "Field Agent",
        status: "Active",
        picture: '/public/warrior.png'
    },
    {
        codeName: "Viper",
        role: "Intel Analyst",
        status: "Active",
        picture: '/public/warrionJ.png'
    },
    {
        codeName: "Ghost",
        role: "Field Agent",
        status: "Active",
        picture: '/public/warrionR.png'
    }
];

app.get('/staff', (req, res) => {
    res.render('staff.ejs', { picture: 'public/warrior.png',  agents: agents})
    res.render('staff.ejs', { picture: 'public/warrionJ.png',  agents: agents})
    res.render('staff.ejs', { picture: 'public/warrionR.png',  agents: agents})
});

app.listen(3012, () => {
    console.log('Server is running on port 3012');
});