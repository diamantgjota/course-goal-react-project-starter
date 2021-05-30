import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

const CourseGoalList = () => {
  return (
    <ul className="goal-list">
      <CourseGoalItem>Goal Text</CourseGoalItem>
    </ul>
  );
};

export default CourseGoalList;
