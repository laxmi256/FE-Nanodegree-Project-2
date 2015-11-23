var bio =
{
 	"name" : "Lakshmi S Nair",
 	"role" : "Software Engineer",
 	"contacts" :
 	{
 		"mobile": "9632222325",
 		"email" : "laxmi256@gmail.com",
 		"github" : "laxmi256", 
 		"twitter" : "laxmi256", 				
 		"location" : "Jalahalli, Bangalore" 		
 	},
 	"welcomeMessage" : "Welcome to my Online Resume", 	
 	"skills" : ["Hard working", "Positive thinking", "Fast learner", "Team player"],
 	"biopic" : "images/Lakshmi.jpg",
 	display : function()
	{
		var formattedName = HTMLheaderName.replace("%data%", bio.name);

		$("#header").append(formattedName);

		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

		$("#header").append(formattedRole);

		var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);

		$("#header").append(formattedbioPic);

		var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

		$("#topContacts").prepend(formattedmobile );

		var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);

		$("#topContacts").append(formattedemail);

		var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

		$("#topContacts").append(formattedtwitter);

		var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);

		$("#topContacts").append(formattedgithub);

		var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").append(formattedwelcomeMsg);

		$("#header").append(HTMLskillsStart);

		var formattedskills = "";

		if(bio.skills.length > 0 )
		{
			for (var skill = 0, length = bio.skills.length; skill < length; skill++) 
			{    
				formattedskills = HTMLskills.replace("%data%", bio.skills[skill]);

				$("#header").append(formattedskills);
			}			
		}

		$("#footerContacts").prepend(formattedmobile );

		$("#footerContacts").append(formattedemail);

		$("#footerContacts").append(formattedtwitter);

		$("#footerContacts").append(formattedgithub);
	}
};

var education =
{
	"schools" :
	[		
		{
			"name"  : "College of Enfineering, Kallooppara",
			"location"  : "Pathanamthitta, Kerala",
			"degree": "B-Tech in Electronics & Communication",
			"majors" : "Electronics",
			"dates"  : 2004,
			"url"    : "http://www.cek.ac.in"
		},
		{
			"name"  : "Matha Senior Secondary School",
			"location"  : "Alleppey, Kerala",
			"degree": "CBSE",
			"majors" : "English",
			"dates"  :  1997,
			"url"	  : "http://www.mathathumpoly.com"
		}
	],

	"onlineCourses" : 
	[
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"date"  : 2015,
			"url"   :"http://www.udacity.com"
		}
	],
	display : function()
	{
		$("#education").append(HTMLschoolStart);

		for (var school = 0, length = education.schools.length; school < length; school++) 
		{
			var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);

			var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

			var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

			var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

			var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

			var formattedschoolurl = HTMLschoolURL.replace("%data%", education.schools[school].url);
			
			var formattedSchoolDegree = formattedschoolName + formattedschoolDegree;

			$(".education-entry:last").append(formattedSchoolDegree );
			$(".education-entry:last").append(formattedschoolDates );
			$(".education-entry:last").append(formattedschoolLocation);
			$(".education-entry:last").append(formattedschoolMajor);
			$(".education-entry:last").append(formattedschoolurl);
		}	

		$(".education-entry:last").append(HTMLonlineClasses);

		for (var onlineCourse = 0, length = education.onlineCourses.length; onlineCourse < length; onlineCourse++) 		
		{
			var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);

			var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);

			var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);

			var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

			var formattedTitleSchool = formattedonlineTitle + formattedonlineSchool;			
			
			$(".education-entry:last").append(formattedTitleSchool );
			$(".education-entry:last").append(formattedonlineDates );
			$(".education-entry:last").append(formattedonlineURL);
		}	
		
	}
};

var work = 
{
	"jobs": 
	[
		{
			"employer" : "NeST",
			"title"    : "Software Engineer",
			"location" : "Trivandrum, Kerala",
			"dates"    : "March 2005 - January 2007",
			"description" : "NeST IT, part of the US $ 200 m NeST Group, is a premier company specialized in providing software services and solutions to customers from diverse verticals like Aerospace, Banking & Financial Services, Insurance, Utilities, Healthcare , Manufacturing, etc. The company works with multifarious technology platforms, including Microsoft, Oracle, Open Source and legacy (mainframe), and combines domain expertise with proven skills in GIS, enterprise mobility and web technologies to create both custom applications and implement COTS solutions to meet the business requirements of its customers, which include start-ups, SMBs and Fortune 500 companies in equal measure."
			
		},
		{
			"employer" : "Neurosynaptic",
			"title"    : "Design Engineer",
			"location" : "BTM, Bangalore",
			"dates"    : "January 2012 - April 2015",
			"description" : "With the commitment to make quality healthcare affordable to masses, Neurosynaptic Communications a ISO13485 and ISO9001 Company offers high quality ReMeDi Remote Healthcare Delivery Solutions. The indigenous technology, developed jointly with the Indian Institute of Technology, Madras, facilitates remote diagnosis of the patient by capturing various basic physiological parameters, thereby providing an extremely affordable method for remote healthcare delivery. The technology has been clinically validated at reputed medical institutions for accuracy and quality of medical data."			
		}
	],
	display : function()
	{
		$("#workExperience").append(HTMLworkStart);

		for (var job = 0, length = work.jobs.length; job < length; job++)
		{
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

			var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			$(".work-entry:last").append(formattedEmployerTitle );
			$(".work-entry:last").append(formattedLocation );
			$(".work-entry:last").append(formattedDates );
			$(".work-entry:last").append(formattedDesc);
		}	
	}
};

var projects = 
{
	"projects" : 
	[
		{
			"title" : "Database Explorer",
			"dates" : 2005,
			"description" : "Database Explorer is a generic interface module used to access patient examination information from database. It is developed to support Ultrasound, Magnetic Resonance and X-Ray modalities. Different modules of Patient Information Management System requests Database Explorer to collect the information from database. It gets the required information and returns back to the requested modules.",
			"images" : "images/DEBL.jpg"
		},
		{
			"title" : "ReMeDi",
			"dates" : 2012,
			"description" : "ReMeDi is a data acquisition system that measures patient’s physiological parameters namely Body Temperature, Blood Pressure, ECG, Stethoscope acoustic sounds, and SPO2. It works in two modes-standalone and Remote mode. In case of remote mode real data is captured from patient end and are transmitted to doctor end via internet along with video conferencing facility. Provided it displays Patient Record Management System (PRMS) which records patient’s medical record during each consultation which includes previous visit’s history, medical data, diagnosis and prescription).",
			"images" : "images/ReMeDi-Kit.jpg"
		},
		{
			"title" : "mDOC",
			"dates" : 2014,
			"description" : "mDOC is an android based application. The mDOC hardware measures patient's physiological parameters namely Body Temperature, Blood Pressure, ECG, Stethoscope, and SPO2. The patient’s parameter data collected using a mDOC hardware are received by the mDOC library, which processes the data and generates an xml data which is send back  to the android application to display the parameter output values.",
			"images" : "images/mDOC-kit.jpg"
		}
	],
	display : function()
	{
		$("#projects").append(HTMLprojectStart);

		for (var project = 0, length = projects.projects.length; project < length; project++)
		{
			var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedprojectTitle );

			var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedprojectDates );

			var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedprojectDescription);

			if(projects.projects[project].images.length > 0)
			{
				var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$(".project-entry:last").append(formattedprojectImage);
			}		
		}

	}

};

work.display();

projects.display();

bio.display();

education.display();

$("#mapDiv").append(googleMap);