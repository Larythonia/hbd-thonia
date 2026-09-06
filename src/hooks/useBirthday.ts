export function useBirthday() {
  const now = new Date();

  const birthdayMonth = 8; // September (0 = January)
  const birthdayDay = 6;

  let birthdayDate = new Date(
    now.getFullYear(),
    birthdayMonth,
    birthdayDay,
    0,
    0,
    0
  );

  // If this year's birthday has already passed,
  // use next year's birthday.
  if (birthdayDate.getTime() < now.getTime()) {
    birthdayDate = new Date(
      now.getFullYear() + 1,
      birthdayMonth,
      birthdayDay,
      0,
      0,
      0
    );
  }

  return {
    birthdayDate,
    name: "Beautiful Soul",
  };
}