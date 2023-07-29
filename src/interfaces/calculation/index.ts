import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CalculationInterface {
  id?: string;
  calculation_data: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CalculationGetQueryInterface extends GetQueryInterface {
  id?: string;
  calculation_data?: string;
  user_id?: string;
}
