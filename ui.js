class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" class="img-fluid mb-3">
                    <a href="${user.html_url}" class="btn btn-primary btn-block mb-4" target="_blank">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary mb-4">Public Repo: ${user.public_repos}</span>
                    <span class="badge badge-secondary mb-4">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-info mb-4">Followers: ${user.followers}</span>
                    <span class="badge badge-primary mb-4">Following: ${user.following}</span>

                    <ul class="list-group">
                        <li class="list-group-item">Name: ${user.name}</li>
                        <li class="list-group-item">Bio: ${user.bio}</li>
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>

        <h3 class="page-heading mb-3">Lastest Repo</h3>
        <div id="repos"></div>
        `;
    }


    // show alert
    showAlert(message, className){
        // clear alert
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        // add class
        div.className = className;
        //add text
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.searchContainer');
        // gte search box
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(div, search);

        // set time out
        setTimeout(()=>{
            this.clearAlert();
        },3000);
    }



    // show user repos
    showRepos(repos){
        let output = '';

        repos.forEach(function(repo){
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary mb-4">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary mb-4">watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-info mb-4">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            
            `;
        });

        // show repos
        document.getElementById('repos').innerHTML = output;
    }



    // clear alert
    clearAlert(){
        const current = document.querySelector('.alert');
        if(current){
            current.remove();
        }
    }

    // clear profile
    clearProfile(){
        this.profile.innerHTML = '';
    }
}