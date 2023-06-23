const mapping: Record<string, string> = {
  contacts: 'contact',
  'course-files': 'course_file',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
