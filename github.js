class GitHub{
    constructor(){
        this.client_id = '87717797651b003c509b';
        this.client_secret = 'c4f9ef302e0e6889d01f0f85577434d7ffae02a4';
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // repos
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return{
            profile,
            repos
        }
    }
}