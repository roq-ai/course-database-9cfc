import axios from 'axios';
import queryString from 'query-string';
import { CourseFileInterface, CourseFileGetQueryInterface } from 'interfaces/course-file';
import { GetQueryInterface } from '../../interfaces';

export const getCourseFiles = async (query?: CourseFileGetQueryInterface) => {
  const response = await axios.get(`/api/course-files${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createCourseFile = async (courseFile: CourseFileInterface) => {
  const response = await axios.post('/api/course-files', courseFile);
  return response.data;
};

export const updateCourseFileById = async (id: string, courseFile: CourseFileInterface) => {
  const response = await axios.put(`/api/course-files/${id}`, courseFile);
  return response.data;
};

export const getCourseFileById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/course-files/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCourseFileById = async (id: string) => {
  const response = await axios.delete(`/api/course-files/${id}`);
  return response.data;
};
