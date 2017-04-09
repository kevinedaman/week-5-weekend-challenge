var myApp = angular.module('myApp', []);

myApp.controller('OneController', ['$scope', 'MovieService', function($scope, MovieService){
  $scope.getOMDB = MovieService.getOMDB;
  $scope.newMovie = MovieService.newMovie;
  $scope.addToFavorites = MovieService.addToFavorites;
}]);

myApp.controller('TwoController', ['$scope', 'MovieService', function($scope, MovieService){
  $scope.favorites = MovieService.favorites;
}]);

myApp.factory('MovieService', ['$http', function($http){
  var movieFavorites = [];
  var favorites = [];
  var newMovie = [];

function receivedMovie (movie) {
    var movieObject = {
    Title : movie.Title,
    Director : movie.Director,
    Genre : movie.Genre,
    Plot : movie.Plot,
    Rated : movie.Rated,
    Released : movie.Released,
    Actors : movie.Actors,
    Ratings : movie.Ratings,
    Poster : movie.Poster
  };

    newMovie.push(movieObject);
}

  function getNewMovie (object) {
    //get movie from DB here

  }

  function addToFavorites (object){
    favorites.push(object);
  }

  return {
  addToFavorites :addToFavorites,
  favorites : favorites,

  getOMDB : function (movie) {
    console.log(movie);
    $http.get('http://www.omdbapi.com/?t=' + movie + '&y=&plot=full&r=json').then(function(response){
      console.log(response);
      receivedMovie(response.data);
    });
  },
  newMovie : newMovie,

};

}]);
