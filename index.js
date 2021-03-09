// let listingAttempt = {
//     logoURL: "images/manage.svg",
//     employer: "Manage",
//     isNew: true,
//     isFeatured: true,
//     jobTitle: "Senior Frontend Developer",
//     dateListed: 1,
//     commitment: "Full Time",
//     location: "Remote",
//     skills: ["Fullstack", "Midweight", "Python", "React"]
// }

let listingAttempt = new Listing("images/manage.svg", "Manage", true, true, "Senior Frontend Developer", 1, "Full Time", "Remote", ["Fullstack", "Midweight", "Python", "React"])

function Listing(logoURL, employer, isNew, isFeatured, jobTitle, dateListed, commitment, location, skills){

    this.logoURL = logoURL;
    this.employer = employer;
    this.isNew = isNew;
    this.isFeatured = isFeatured;
    this.jobTitle = jobTitle;
    this.dateListed = dateListed;
    this.commitment = commitment;
    this.location = location;
    this.skills = skills;

}

// THIS IS WHAT WE WILL EVENTUALLY RENDER
let listingContainer = document.createElement("div");

listingContainer.classList.add("listing");

let logoDiv = document.createElement("div");

logoDiv.classList.add("logo");

let logo = document.createElement("img");

logo.src = listingAttempt.logoURL;
logo.alt = "logo";

logoDiv.appendChild(logo);

listingContainer.appendChild(logoDiv);

// NEXT WE WILL CREATE THE JOB DETAILS DIV AND THEN ADD IT TO THE LISTING CONTAINER WE ORIGINALLY CREATED.

let jobDetails = document.createElement("div");

jobDetails.classList.add("job-details");

let jobDetail = document.createElement("div");

jobDetail.classList.add("job-detail");

let employer = document.createElement("span");

employer.classList.add("employer");

employer.innerHTML = listingAttempt.employer;

let newOption = document.createElement("span");

newOption.classList.add("new");

newOption.innerHTML = "NEW";

let featuredOption = document.createElement("span");

featuredOption.classList.add("featured");

featuredOption.innerHTML = "FEATURED";

jobDetail.appendChild(employer);
jobDetail.appendChild(newOption);
jobDetail.appendChild(featuredOption);

jobDetails.appendChild(jobDetail);


let jobTitle = document.createElement("div");

jobTitle.classList.add("job-title");

jobTitle.innerHTML = "<h2>" + listingAttempt.jobTitle + "</h2>";

jobDetails.appendChild(jobTitle);

let listingInfo = document.createElement("div");

listingInfo.classList.add("listing-info");

let infoList = document.createElement("ul");

let whenPosted = document.createElement("li");

if(listingAttempt.dateListed === 1){

    whenPosted.innerHTML = listingAttempt.dateListed + "d ago"

}else{

    whenPosted.innerHTML = listingAttempt.dateListed + "ds ago"

}

let commitment = document.createElement("li");

commitment.innerHTML = listingAttempt.commitment

let jobLocation = document.createElement("li");

jobLocation.innerHTML = listingAttempt.location;

infoList.appendChild(whenPosted);
infoList.appendChild(commitment);
infoList.appendChild(jobLocation);

listingInfo.appendChild(infoList)

jobDetails.appendChild(listingInfo);

listingContainer.appendChild(jobDetails)

let skills = document.createElement("div");

skills.classList.add("skills");

let skillsList = document.createElement("ul");

listingAttempt.skills.forEach(function(content){

    let skill = document.createElement("li");
    skill.innerHTML = content;
    skillsList.appendChild(skill);
})

skills.appendChild(skillsList);

listingContainer.appendChild(skills);

document.querySelector(".container").appendChild(listingContainer);



