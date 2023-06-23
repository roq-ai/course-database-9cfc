import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CourseFileInterface {
  id?: string;
  file_name: string;
  file_type: string;
  category: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface CourseFileGetQueryInterface extends GetQueryInterface {
  id?: string;
  file_name?: string;
  file_type?: string;
  category?: string;
  organization_id?: string;
}
