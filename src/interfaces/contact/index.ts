import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ContactInterface {
  id?: string;
  phone_number: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ContactGetQueryInterface extends GetQueryInterface {
  id?: string;
  phone_number?: string;
  user_id?: string;
}
