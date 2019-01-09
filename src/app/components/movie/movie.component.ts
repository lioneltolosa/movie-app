import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})
export class MovieComponent {

    pelicula: any;

    constructor( public moviesService: MoviesService,
                 public route: ActivatedRoute) {

        this.route.params.subscribe ( params => {
            console.log(params.id);
            this.getMovie( params['id']);
        });
    }

    getMovie(id: string) {
        this.moviesService.getMovie( id )
            .subscribe ( movie => {
                console.log(movie);
        });
    }
}
