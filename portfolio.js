// portfolio.js

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve user details from sessionStorage
    var userDetailsJSON = sessionStorage.getItem("userDetails");

    if (userDetailsJSON) {
        // Parse the JSON string to get the user details object
        var userDetails = JSON.parse(userDetailsJSON);

        // Fill in the portfolio page with user details
        document.getElementById("userName").innerText = userDetails.userName;
        document.getElementById("userPhoto").src = userDetails.userPhoto;
        document.getElementById("jobTitle").innerText = userDetails.jobTitle;
        document.getElementById("userAboutContent").innerText = userDetails.userAbout;
        document.getElementById("aboutPhoto").src = userDetails.aboutPhoto;
        document.getElementById("userSkills").innerText = userDetails.userSkills;
        document.getElementById("userEducationContent").innerText = userDetails.userEducation;
        document.getElementById("userProjectContent").innerText = userDetails.userProject;
        document.getElementById("userResumeLink").href = userDetails.userResume;
        document.getElementById("contactDetailsContent1").innerText = userDetails.contactDetails1;
        document.getElementById("contactDetailsContent").innerText = userDetails.contactDetails;
        document.getElementById("contactDetailsContent2").innerText = userDetails.contactDetails2;
    }
});
