package com.BankingApplication.service;

import java.util.List;

import com.BankingApplicationdto.AccountDto;

public interface AccountService {
	AccountDto createAccount(AccountDto account);
	
	AccountDto getAccountById(Long Id);
	
	AccountDto deposit(Long id, double amount);
	
	AccountDto withdraw(Long id,double amount);
	
	List<AccountDto> getAllAccounts();
	
	void deleteAccount(Long id);
}
