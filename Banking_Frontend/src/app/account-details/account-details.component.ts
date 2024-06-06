import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
})
export class AccountDetailsComponent implements OnInit {
  id: number = 0;
  account: Account = new Account();
  accountProperties: string[] = [];

  constructor(
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.accountService.view(this.id).subscribe((data) => {
      this.account = data;
    });
  }
}
