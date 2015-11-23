var bio =
{
 	"name" : "Lakshmi S Nair",
 	"role" : "Software Engineer",
 	"contacts" :
 	{
 		"mobile": "9632222325",
 		"email" : "laxmi256@gmail.com",
 		"twitter" : "laxmi256",
 		"github" : "laxmi256", 		
 		"location" : "Bangalore" 		
 	},
 	"welcomeMsg" : "Welcome to my Online Resume", 	
 	"skills" : ["Hard working", "Positive thinking", "Fast learner", "Team player"],
 	"bioPic" : "images/Lakshmi.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);

$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").append(formattedRole);

var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").append(formattedbioPic);

var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

$("#topContacts").prepend(formattedmobile );

var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);

$("#topContacts").append(formattedemail);

var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

$("#topContacts").append(formattedtwitter);

var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);

$("#topContacts").append(formattedgithub);

var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

$("#header").append(formattedwelcomeMsg);

$("#header").append(HTMLskillsStart);

if(bio.skills.length > 0 )
{
	var formattedskills = HTMLskills.replace("%data%", bio.skills[0]);

	$("#header").append(formattedskills);

	formattedskills = HTMLskills.replace("%data%", bio.skills[1]);

	$("#header").append(formattedskills);

	formattedskills = HTMLskills.replace("%data%", bio.skills[2]);

	$("#header").append(formattedskills);

	formattedskills = HTMLskills.replace("%data%", bio.skills[3]);

	$("#header").append(formattedskills);
}

var education =
{
	"schools" :
	[
		{
			"name"  : "Matha",
			"location"  : "Alleppey",
			"degree": "cbse",
			"Major" : "English",
			"Minor" : "Hindi",
			"year"  :  1997
		},
		{
			"name"  : "CEK",
			"location"  : "Pathanamthitta",
			"degree": "btech",
			"Major" : "Electronics",
			"Minor" : "Communication",
			"year"  : 2004
		}
	],

	"onlineCourses" : 
	[
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"year"  : 2015,
			"url"   :"http://www.udacity.com"
		}
	]
};

var work = 
{
	"jobs": 
	[
		{
			"employer" : "NeST",
			"title"    : "Software Engineer",
			"dates"    : "March 2005 - January 2007",
			"description" : "NeST IT, part of the US $ 200 m NeST Group, is a premier company specialized in providing software services and solutions to customers from diverse verticals like Aerospace, Banking & Financial Services, Insurance, Utilities, Healthcare , Manufacturing, etc. The company works with multifarious technology platforms, including Microsoft, Oracle, Open Source and legacy (mainframe), and combines domain expertise with proven skills in GIS, enterprise mobility and web technologies to create both custom applications and implement COTS solutions to meet the business requirements of its customers, which include start-ups, SMBs and Fortune 500 companies in equal measure.",
			"location" : "Trivandrum"
		},
		{
			"employer" : "Neurosynaptic",
			"title"    : "Design Engineer",
			"dates"    : "January 2012 - April 2015",
			"description" : "With the commitment to make quality healthcare affordable to masses, Neurosynaptic Communications a ISO13485 and ISO9001 Company offers high quality ReMeDi Remote Healthcare Delivery Solutions. The indigenous technology, developed jointly with the Indian Institute of Technology, Madras, facilitates remote diagnosis of the patient by capturing various basic physiological parameters, thereby providing an extremely affordable method for remote healthcare delivery. The technology has been clinically validated at reputed medical institutions for accuracy and quality of medical data.",
			"location" : "Bangalore"
		}
	]
};


var projects = 
{
	"projects" : 
	[
		{
			"title" : "Database Explorer",
			"dates" : 2005,
			"description" : "Database Explorer is a generic interface module used to access patient examination information from database. It is developed to support Ultrasound, Magnetic Resonance and X-Ray modalities. Different modules of Patient Information Management System requests Database Explorer to collect the information from database. It gets the required information and returns back to the requested modules.",
			"image" : "images/DEBL.jpg"
		},
		{
			"title" : "ReMeDi",
			"dates" : 2012,
			"description" : "ReMeDi is a data acquisition system that measures patient’s physiological parameters namely Body Temperature, Blood Pressure, ECG, Stethoscope acoustic sounds, and SPO2. It works in two modes-standalone and Remote mode. In case of remote mode real data is captured from patient end and are transmitted to doctor end via internet along with video conferencing facility. Provided it displays Patient Record Management System (PRMS) which records patient’s medical record during each consultation which includes previous visit’s history, medical data, diagnosis and prescription).",
			"image" : "images/ReMeDi-Kit.jpg"
		},
		{
			"title" : "mDOC",
			"dates" : 2014,
			"description" : "mDOC is an android based application. The mDOC hardware measures patient's physiological parameters namely Body Temperature, Blood Pressure, ECG, Stethoscope, and SPO2. The patient’s parameter data collected using a mDOC hardware are received by the mDOC library, which processes the data and generates an xml data which is send back  to the android application to display the parameter output values.",
			"image" : "images/mDOC-kit.jpg"
		}
	]
};

function displayWork()
{
	for(job in work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

		var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle );
		$(".work-entry:last").append(formattedDates );
		$(".work-entry:last").append(formattedDesc);
	}
}

displayWork();

$(document).click(function(loc)
{
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
})

function locationizer(work_obj)
{    
    var locations = [];
    for(var job in work_obj.jobs)
    {
        locations.push(work_obj.jobs[job].location);
    }
    return locations;
}

function inName(myname)
{
	myname = myname.trim();
	var namearr = myname.split(" ");
	namearr[0] = namearr[0].slice(0,1).toUpperCase() + namearr[0].slice(1).toLowerCase();
	namearr[1] = namearr[1].toUpperCase();
	var newname = namearr.join(" "); 
	return newname;
}

$("#main").append(internationalizeButton);

projects.display = function()
{
	for(project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);

		var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedprojectTitle );

		var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedprojectDates );

		var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedprojectDescription);

		if(projects.projects[project].image.length > 0)
		{
			var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
			$(".project-entry:last").append(formattedprojectImage);
		}		
	}
}

projects.display();

$("#mapDiv").append(googleMap);

$("#footerContacts").prepend(formattedmobile );

$("#footerContacts").append(formattedemail);

$("#footerContacts").append(formattedtwitter);

$("#footerContacts").append(formattedgithub);