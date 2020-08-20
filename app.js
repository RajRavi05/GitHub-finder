// instantiate github
const github = new GitHub;
// init UI
const ui = new UI;

// search input
const searchUser = document.getElementById('searchUser');

// search input event listener
searchUser.addEventListener('keyup', (e)=>{
    const userText = e.target.value;

    // check if it is empty
    if(userText !== ''){
        // make a http call
        github.getUser(userText)
        .then(data =>{
            if(data.profile.message === 'Not Found'){
                // show alert
                ui.showAlert('User not found','alert alert-danger');
            }else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    }else{
        // clear profile
        ui.clearProfile();
    }
});