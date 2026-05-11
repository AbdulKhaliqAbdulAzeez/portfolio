export function withBasePath(path: string): string {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (!basePath || path.startsWith(`${basePath}/`)) {
    return path;
  }

  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
