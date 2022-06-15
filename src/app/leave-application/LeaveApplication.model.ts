export interface LeaveApplicationModel {
  employeeId: string;
  employeeName: string;
  department: string;
  noOfLeave?: number;
  fromDate: Date ;
  toDate: Date ;
  createdAt?: Date;
  updatedAt?: Date;
}
