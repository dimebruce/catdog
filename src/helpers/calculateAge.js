export function calculateAge(birthDate) {
    const [day, month, year] = birthDate.split("-");
    const birthDateObj = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();
    const differenceInMs = currentDate - birthDateObj;
    const ageInYears = differenceInMs / (365.25 * 24 * 60 * 60 * 1000);
    return Math.floor(ageInYears);
  }