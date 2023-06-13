import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // inject the router
  constructor(private router: Router) {

  }

  ngOnInit() {}

  doSearch(value: string) {
    console.log(`value=${value}`);

    // navigateByUrl: route the data to our "search" route, handled by the ProductlistComponent
    this.router.navigateByUrl(`/search/${value}`);
  }

}
