const mapping: Record<string, string> = {
  calculations: 'calculation',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
