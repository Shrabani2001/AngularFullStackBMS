import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css',
})
export class WithdrawComponent {
  id: number = 0;
  account: Account = new Account();
  constructor(
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.accountService.getAccountById(this.id).subscribe((data) => {
      this.account = data;
    });
  }
  successMessage = '';
  errorMessage = '';

  onSubmit() {
    if (this.isValidAmount(this.account.balance)) {
      this.accountService
        .withdraw(this.id, this.account.balance)
        .subscribe((data) => {
          this.account = data;
          this.successMessage = 'Withdraw Successfully ...!';
          setTimeout(() => {
            this.router.navigate(['/accounts']);
          }, 1000);
        });
    } else {
      this.errorMessage = 'Invalid Amount ... please enter valid amount!';
      setTimeout(() => {
        this.router.navigate(['/accounts']);
      }, 1000);
    }
  }

  isValidAmount(amount: number): boolean {
    return amount > 0 && amount < 10000000;
  }
}
