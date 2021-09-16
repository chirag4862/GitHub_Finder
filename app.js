// Init Github
const github = new Github();

// Init UI
const ui = new UI();

// Search Input
const searchUser = document.getElementById("searchUser");

// Seacrch input event listener
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    //   Make HTTP call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //   Show Alter
        ui.showAlert("User Not Found", "alert alert-light");
      } else {
        //   Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //   Clear Profile
    ui.clearProfile();
  }
});
