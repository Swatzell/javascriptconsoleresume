let resume = {
    Name: "david swatzell",
    Career: "Musician/Bartender",
    Description: "I Collect Vinyl and produce records",
    Interests: ["* Music", "* Records", "* Technology", "* Theme parks", "* Traveling"],
    pastPositions: ["bartender", "musician"],
    skills: "music production"

};
console.log(("Name:"), resume.Name.toUpperCase());
console.log(("Career:"), resume.Career);
console.log(("Description:"), resume.Description);
console.log("My Interests:");
console.log(resume.Interests[0]);
console.log(resume.Interests[1]);
console.log(resume.Interests[2]);
console.log(resume.Interests[3]);
console.log(resume.Interests[4]);

function displayPosition(companyName, jobTitle, description) {
    console.log(companyName);
    console.log(jobTitle);
    console.log(description);
};

function displaySkill() {

};