function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var memberLink = document.getElementById("memberLink");
    var skillsLink = document.getElementById("skillsLink");
    var projectsLink = document.getElementById("projectsLink");
    var contactLink = document.getElementById("contactLink");
    var aboutLink = document.getElementById("aboutLink");

    member.style.display = "block";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    about.style.display = "none";

    memberLink.style.color = "#1abc9c";
    skillsLink.style.color = "#fff";
    projectsLink.style.color = "#fff";
    contactLink.style.color = "#fff";
    aboutLink.style.color = "#fff";
}