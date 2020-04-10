import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {

  constructor(
    private router: Router,
    // private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  jumpToHome() {
    // navigate method don't know where you are - what rout you are now
    // you can config this navigation
    // examp: this.router.navigate(['second'], {relativeTo: this.route});
    this.router.navigate(['/']);
  }

}
