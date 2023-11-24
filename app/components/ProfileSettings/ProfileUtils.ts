export function getYearsRange(): number[] {
  const currentYear = new Date().getFullYear();
  const minAllowedYear = currentYear - 110;
  const maxAllowedYear = currentYear - 18;

  const years = [];
  // This for loop is a bit funky. We want the years's order to be from most recent to most early
  for (let year = maxAllowedYear; year >= minAllowedYear; year--) {
    years.push(year);
  }
  return years;
};