import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
})
export class ThreeComponent implements OnInit {
item:any;
utm_source;
utm_medium;
utm_campaign;
utm_content;
utm_term;
private subscription: Subscription;
  constructor(private router:ActivatedRoute, private data : DataService) { }

  ngOnInit(): void {
    this.subscription = this.router.queryParams.subscribe((queryParams) => this.utm_source = queryParams['utm_source']);
    this.subscription = this.router.queryParams.subscribe((queryParams) => this.utm_medium = queryParams['utm_medium']);
    this.subscription = this.router.queryParams.subscribe((queryParams) => this.utm_campaign = queryParams['utm_campaign']);
    this.subscription = this.router.queryParams.subscribe((queryParams) => this.utm_term = queryParams['utm_term']);
    this.subscription = this.router.queryParams.subscribe((queryParams) => this.utm_content = queryParams['utm_content ']);

    this.data.put(this.utm_source,
      this.utm_medium,
      this.utm_campaign,
      this.utm_term,
      this.utm_content).subscribe((data) => {
        console.log(data);
        this.item = data;
      });
  }
  ngOnDestroy(): void {
    if (this.subscription)
    this.subscription.unsubscribe();
  }
}
