import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    window.addEventListener("message", (event : any) => {
      if (event.data =="open_search_filter")
      {
          this.showMenu();
      }else
        return;
    }, false);

  }

   showMenu() {
     document.getElementById("modalBtn").click();
  }

}
