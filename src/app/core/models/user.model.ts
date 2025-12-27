export interface User {
  id?: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  rfidEnabled: boolean;
  rfidValue: string;
  role: null;
  department: null;
  profileImage: File;
}
