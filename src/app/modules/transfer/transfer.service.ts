import { Injectable } from '@angular/core';
import { TransferModel } from '../../interfaces/transfer.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataRangeModel } from 'src/app/interfaces/datarange.interface';
import { TransferHistoryModel } from 'src/app/interfaces/transferhistory.interface';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private url: string = 'http://localhost:3000/transfer'

  constructor(private http: HttpClient) { }

  createTransfer(transfer: TransferModel) {
    return this.http
      .post<TransferModel>(`${this.url}/create`, transfer)
  }

  getTransferHistory(
    accountId: string,
    offset?: number,
    limit?: number,
    dataRange?: DataRangeModel): Observable<TransferHistoryModel[]> {
    return this.http.get<TransferHistoryModel[]>(`${this.url}/history/${accountId}?offset=${offset}&limit=${limit}`)
  }
}

