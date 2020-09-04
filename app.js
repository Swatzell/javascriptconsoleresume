let resume = {
    Name: "david swatzell",
    Career: "Musician/Bartender",
    description: "I Collect Vinyl and produce records",
    interests: ["* Music", "* Records", "* Technology", "* Theme parks", "* Traveling"],
    pastPositions: ["bartender", "musician"],
    skills: "music production"

};

console.log("Name:", resume.Name.toUpperCase());
console.log("Career:", resume.Career);
console.log("Description:", resume.Description);
console.log("My Interests:");
// console.log(resume.Interests[0]);
// console.log(resume.Interests[1]);
// console.log(resume.Interests[2]);
// console.log(resume.Interests[3]);
// console.log(resume.Interests[4]);

for (let i = 0; i < resume.interests.length; i++) {
    console.log(resume.interests[i])
}


function displayPosition(companyName, jobTitle, description) {
    console.log("* " + jobTitle + " at " + companyName + " - " + description);
};
displayPosition("WRAY", "Guitar", "Shredding")

function displaySkill(skillName, isCool) {
    if (isCool === true) {
        console.log("* BAM: " + skillName)

    } else { console.log("* " + skillName) }
};
displaySkill("guitar", true)
displaySkill("english", false)