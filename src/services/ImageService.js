import abs from "../static/icons/icons8-prelum-96.png";
import biceps from "../static/icons/icons8-biceps-96.png";
import triceps from "../static/icons/icons8-triceps-96.png";
import calves from "../static/icons/icons8-calves-96.png";
import chest from "../static/icons/icons8-chest-96.png";
import back from "../static/icons/icons8-back-96.png";
import glutes from "../static/icons/icons8-glutes-96.png";
import hamstrings from "../static/icons/icons8-hamstrings-96.png";
import neck from "../static/icons/icons8-neck-96.png";
import quads from "../static/icons/icons8-quadriceps-96.png";
import shoulders from "../static/icons/icons8-shoulders-96.png";
import traps from "../static/icons/icons8-trapezius-96.png";

export default function generateRandomImage(target) {
  switch (target) {
    case "Abs":
      return abs;
    case "Biceps":
    case "Forearms":
      return biceps;
    case "Triceps":
      return triceps;
    case "Calves":
      return calves;
    case "Glutes":
      return glutes;
    case "Cardiovascular System":
    case "Hamstrings":
      return hamstrings;
    case "Adductors":
    case "Abductors":
    case "Quads":
      return quads;
    case "Upper Back":
    case "Spine":
    case "Lats":
      return back;
    case "Traps":
      return traps;
    case "Pectorals":
    case "Serratus Anterior":
      return chest;
    case "Levator Scapulae":
      return neck;
    case "Delts":
      return shoulders;
    default:
      return null;
  }
}
