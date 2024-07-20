const currentYear = new Date().getFullYear();
const futureYear = currentYear + 10;

const startYears = Array.from({ length: 101 }, (_, i) => currentYear - i);
const endYears = Array.from(
  { length: futureYear - currentYear + 101 },
  (_, i) => futureYear - i
);

export { startYears, endYears };
