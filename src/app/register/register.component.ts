import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  eventsId: number;
  
  constructor(private route: ActivatedRoute)
  {
  }

  ngOnInit() 
  {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.eventsId = id;

    });
  }
  // gotoDepartments() 
  // {
  //   let selectedId = this.eventsId ? this.eventsId : null;
  //   this.route.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  // }
}
