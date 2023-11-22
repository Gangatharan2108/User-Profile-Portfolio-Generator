// user-details.js

function submitDetails() {
    // Collect user details
    var userName = document.getElementById("userName").value;
    var userPhoto = document.getElementById("userPhoto").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var userAbout = document.getElementById("userAbout").value;
    var aboutPhoto = document.getElementById("aboutPhoto").value;
    var userSkills = document.getElementById("userSkills").value;
    var userEducation = document.getElementById("userEducation").value;
    var userProject = document.getElementById("userProject").value;
    var userResume = document.getElementById("userResume").value;
    var contactDetails1 = document.getElementById("contactDetails1").value;
    var contactDetails = document.getElementById("contactDetails").value;
    var contactDetails2 = document.getElementById("contactDetails2").value;

    // Create a data object to store user details
    var userDetails = {
        userName: userName,
        userPhoto: userPhoto,
        jobTitle: jobTitle,
        userAbout: userAbout,
        aboutPhoto: aboutPhoto,
        userSkills: userSkills,
        userEducation: userEducation,
        userProject: userProject,
        userResume: userResume,
        contactDetails1: contactDetails1,
        contactDetails: contactDetails,
        contactDetails2: contactDetails2
    };

    // Convert the user details object to a JSON string
    var userDetailsJSON = JSON.stringify(userDetails);

    // Store the user details in sessionStorage
    sessionStorage.setItem("userDetails", userDetailsJSON);

    // Redirect to the portfolio page
    window.location.href = "portfolio.html";
}
