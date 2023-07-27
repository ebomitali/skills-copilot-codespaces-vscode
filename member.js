function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberBtn = document.getElementById("memberBtn");
    var skillsBtn = document.getElementById("skillsBtn");

    member.style.display = "block";
    skills.style.display = "none";
    memberBtn.style.backgroundColor = "#e74c3c";
    skillsBtn.style.backgroundColor = "#f1f1f1";
}