import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepositModel } from 'src/app/interfaces/deposit.interface';
import { Observable } from 'rxjs';
import { DataRangeModel } from '../../interfaces/datarange.interface';
import { DepositHistoryModel } from 'src/app/interfaces/deposithistorymodel.interface';

@Injectable({
  providedIn: 'root'
})
export class DepositService {
  private url: string = 'http://localhost:3000/deposit'

  constructor(private http: HttpClient) { }

  createDeposit(deposit: DepositModel): Observable<DepositModel> {
    return this.http
      .post<DepositModel>(`${this.url}/create`, deposit)
  }

  getDepositHistory(
    depositId: string,
    offset?: number,
    limit?: number,
    dataRange?: DataRangeModel): Observable<DepositHistoryModel[]> {
    return this.http.get<DepositHistoryModel[]>(`${this.url}/history/${depositId}?offset=${offset}&limit=${limit}`)
  }
}
