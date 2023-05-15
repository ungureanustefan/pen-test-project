export const defineSeverityColor = (severity: string) => {
  switch (severity) {
    case "CRITICAL":
      return "red";
    case "HIGH":
      return "orange";
    case "MEDIUM":
      return "yellow";
    case "LOW":
      return "#61A30B";
    case "INFO":
      return "#62B1F6";
    default:
      return "white";
  }
};
