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

export function mapToModelTarget(target) {
  switch (target) {
    case "Neck":
      // "Levator Scapulae"
      return "neck";
    case "Delts":
      return ["front-deltoids", "back-deltoids"];
    case "Biceps":
      return "biceps";
    case "Triceps":
      return "triceps";
    case "Forearms":
      return "forearm";
    case "Pectorals":
      return "chest";
    case "Abs":
      return "abs";
    case "Serratus Anterior":
      return "obliques";
    case "Abductors":
      return "abductors";
    case "Adductors":
      return "adductor";
    case "Quads":
      return "quadriceps";
    case "Calves":
      return "calves";
    case "Traps":
      return "trapezius";
    case "Upper Back":
      return ["upper-back", "lower-back"];
    case "Glutes":
      return "gluteal";
    case "Hamstrings":
      return "hamstring";
    default:
      return "";
  }
}
