let listings = []

let firstListing = new Listing("images/photosnap.svg", "PhotoSnap", true, true, "Senior Frontend Developer", 1, "Full Time", "USA only", ["Frontend", "Senior", "HTML", "CSS", "JavaScript"])
listings.push(firstListing);

let listingAttempt = new Listing("images/manage.svg", "Manage", true, true, "Senior Frontend Developer", 1, "Part Time", "Remote", ["Fullstack", "Midweight", "Python", "React"])
listings.push(listingAttempt);

let listing = new Listing("images/account.svg", "Account", true, false, "Junior Fontend Developer", 2, "Part Time", "USA only", ["Frontend","Junior","React","Sass","JavaScript"])
listings.push(listing);

let listing4 = new Listing("images/myhome.svg", "MyHome", false, false, "Junior Frontend Developer", 5, "Contract", "USA only", ["Frontend", "Junior", "CSS", "JavaScript"]);
listings.push(listing4);

let listing5 = new Listing("images/loop-studios.svg", "Loop Studios", false, false, "Software Engineer", 7, "Full Time", "Worldwide", ["Fullstack", "Midweight", "JavaScript", "Sass", "Ruby"])
listings.push(listing5);

let listing6 = new Listing("images/faceit.svg","FaceIt", false, false, "Junior Backend Developer", 14, "Full Time", "UK only", ["Backend", "Junior", "Ruby", "RoR"]);
listings.push(listing6);

let listing7 = new Listing("images/shortly.svg", "Shortly", false, false, "Junior Developer", 7, "Full Time", "Worldwide", ["Frontend", "Junior", "HTML", "Sass", "JavaScript"]);
listings.push(listing7);

let listing8 = new Listing("images/insure.svg", "Insure", false, false, "Junior Frontend Developer", 7, "Full Time", "USA only", ["Frontend", "Junior", "Vue", "JavaScript", "Sass"]);
listings.push(listing8);

let listing9 = new Listing("images/eyecam-co.svg", "Eyecam Co.", false, false, "Full Stack Engineer", 21, "Full Time", "Worldwide", ["Fullstack", "Midweight", "JavaScript", "Django", "Python"]);
listings.push(listing9)

let listing10 = new Listing("images/the-air-filter-company.svg", "The Air Filter Company", false, false, "Fullstack Engineer", 32, "Part Time", "Worldwide", ["Frontend", "Junior", "React", "Sass", "JavaScript"])
listings.push(listing10)


for(let i = 0 ; i < listings.length; i++){

    createListingDisplay(listings[i])

}


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

function filterListings(){

    let inputFilter = document.getElementById("myInput").value.toLowerCase()

    let listingDivs = document.getElementsByClassName("listing");

    for(let i = 0; i < listingDivs.length; i++){

        let unorderedList = listingDivs[i].lastElementChild.firstChild;
        let listItems = unorderedList.children;

        for(let j = 0 ; j < listItems.length; j++){

            let item = listItems[j];

            let divToHide = item.parentNode.parentNode.parentNode;
            
            console.log(item.innerText.toLowerCase())
            
            if (item.innerText.toLowerCase().includes(inputFilter)){

                divToHide.style.display = "flex"
                break

            }else{

                divToHide.style.display = "none"

            }

        }

    }

}

function createListingDisplay(listing){

    // Create Listing Div
    
    let listingContainer = document.createElement("div");

    listingContainer.classList.add("listing");

    if(listing.isFeatured){

        listingContainer.classList.add("featured-div")

    }

    // Create lodo DIV and add it to listing Container

    let logoDiv = createLogoDiv(listing);

    listingContainer.appendChild(logoDiv);

    // NEXT WE WILL CREATE THE JOB DETAILS DIV AND THEN ADD IT TO THE LISTING CONTAINER WE ORIGINALLY CREATED.

    let jobDetails = createJobDetails(listing);

    listingContainer.appendChild(jobDetails);

    let skills = createSkills(listing);

    listingContainer.appendChild(skills);

    document.querySelector(".container").appendChild(listingContainer);

}

function createLogoDiv(listing){

    let logoDiv = document.createElement("div");

    logoDiv.classList.add("logo");

    let logo = document.createElement("img");

    logo.src = listing.logoURL;
    logo.alt = "logo";

    logoDiv.appendChild(logo);

    return logoDiv

}

function createJobDetails(listing){

    let jobDetails = document.createElement("div");

    jobDetails.classList.add("job-details");

    let jobDetail = createJobDetail(listing)

    jobDetails.appendChild(jobDetail);

    let jobTitle = createJobTitle(listing)

    jobDetails.appendChild(jobTitle);

    let listingInfo = createListingInfo(listing);

    jobDetails.appendChild(listingInfo);

    return jobDetails;

}

function createJobDetail(listing){

    let jobDetail = document.createElement("div");

    jobDetail.classList.add("job-detail");

    let employer = createEmployer(listing);

    let newOption = createNewOption(listing);

    let featuredOption = createFeaturedOption(listing);

    jobDetail.appendChild(employer);

    if(listing.isNew){

        jobDetail.appendChild(newOption);

    }
    if(listing.isFeatured){

        jobDetail.appendChild(featuredOption);

    }

    return jobDetail
}

function createEmployer(listing){

    let employer = document.createElement("span");

    employer.classList.add("employer");

    employer.innerHTML = listing.employer;

    return employer
}

function createNewOption(listing){

    let newOption = document.createElement("span");

    newOption.classList.add("new");

    newOption.innerHTML = "NEW";

    return newOption
}

function createFeaturedOption(listing){

    let featuredOption = document.createElement("span");

    featuredOption.classList.add("featured");

    featuredOption.innerHTML = "FEATURED";

    return featuredOption;
}

function createJobTitle(listing){

    let jobTitle = document.createElement("div");

    jobTitle.classList.add("job-title");

    jobTitle.innerHTML = "<h2>" + listing.jobTitle + "</h2>";

    return jobTitle;
}

function createListingInfo(listing){

    let listingInfo = document.createElement("div");

    listingInfo.classList.add("listing-info");

    let infoList = document.createElement("ul");

    let whenPosted = document.createElement("li");

    if(listing.dateListed === 1){

        whenPosted.innerHTML = listing.dateListed + "d ago"

    }else{

        whenPosted.innerHTML = listing.dateListed + "ds ago"

    }

    let commitment = document.createElement("li");

    commitment.innerHTML = listing.commitment

    let jobLocation = document.createElement("li");

    jobLocation.innerHTML = listing.location;

    infoList.appendChild(whenPosted);
    infoList.appendChild(commitment);
    infoList.appendChild(jobLocation);

    listingInfo.appendChild(infoList)

    return listingInfo
}

function createSkills(listing){

    let skills = document.createElement("div");

    skills.classList.add("skills");

    let skillsList = document.createElement("ul");

    listing.skills.forEach(function(content){

        let skill = document.createElement("li");
        skill.innerHTML = content;
        skillsList.appendChild(skill);

    })

    skills.appendChild(skillsList);

    return skills;
}