import React, { useLayoutEffect, useState } from "react";
import generateRandomImage from "../../services/ImageService";
import { truncate } from "../../util/StringUtil";

import "./Exercise.css";

export default function ExerciseCard({ name, target, equipment }) {
  const [randomImage, setRandomImage] = useState(generateRandomImage(target));
  const nameShort = truncate(name);
  return (
    <div className={`custom-card`}>
      <div className="row justify-content-between p-1">
        <div className="col-md-4">
          <img src={randomImage} />
        </div>
        <div className="col-md-8 align-self-center">
          <div className="title">{nameShort}</div>
          <p className="exercise-details">Target: {target}</p>
          <p className="exercise-details">Equipment: {truncate(equipment)}</p>
        </div>
      </div>
    </div>
  );
}
