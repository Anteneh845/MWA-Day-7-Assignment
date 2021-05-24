angular.module("musicApp")
    .controller("MusicController", musicController);

function musicController($http) {
    let vm = this;
    $http.get("https://api.discogs.com/artists/1/releases?page=2&per_page=25")
        .then(response => {
            vm.musics = response.data.releases;
            console.log(vm.musics)
        })
        .catch(err=>console.log(err))
}