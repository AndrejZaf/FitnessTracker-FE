export function mapToDatabaseExerciseTarget(target) {
  switch (target) {
    case "neck":
      // "Levator Scapulae"
      return "Neck";
    case "front-deltoids":
    case "back-deltoids":
      return "Delts";
    case "biceps":
      return "Biceps";
    case "triceps":
      return "Triceps";
    case "forearm":
      return "Forearms";
    case "chest":
      return "Pectorals";
    case "abs":
      return "Abs";
    case "obliques":
      return "Serratus Anterior";
    case "abductors":
      return "Abductors";
    case "adductor":
      return "Adductors";
    case "quadriceps":
      return "Quads";
    case "calves":
      return "Calves";
    case "trapezius":
      return "Traps";
    case "upper-back":
    case "lower-back":
      return "Upper Back";
    case "gluteal":
      return "Glutes";
    case "hamstring":
      return "Hamstrings";
    default:
      return "";
  }
}
