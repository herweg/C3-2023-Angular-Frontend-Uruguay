import { AccountModel } from "./account.interface"

export interface DepositHistoryModel{
    id:string
    account: AccountModel
    amount: number
    dateTime: number | Date
    deletedAt?: number | Date
}