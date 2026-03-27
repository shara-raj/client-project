export const getDashboardRouteByRole = (role: string | null) => {
  switch (role) {
    case "admin":
      return "/admin/dashboard";
    case "editor":
      return "/editor/dashboard";
    default:
      return "/editor/dashboard";
  }
};
