import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent  {

  movies: any[] = [];
  films: any[] = [];

  constructor( public moviesService: MoviesService,
               public activatedRoute: ActivatedRoute,
               public router: Router ) {

    this.moviesService.getpopular()
      .subscribe ((movies: any) => {
        console.log(movies);
        this.movies = movies;
    });

    // this.activatedRoute.params.subscribe ( params => {
    //   console.log(params['id']);

    //   // this.getMovie( params['id']);
    // });
  }

  getMovie( movie: any) {
    console.log(movie.id);
    this.router.navigate(['/movie', movie.id ]);
  }
}
