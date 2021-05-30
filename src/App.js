import React from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";

const App = () => {
  return (
    <div>
      <section id="goal-form">
        <CourseInput />
      </section>
      <section id="goals">
        <CourseGoalList />
        <p>No goals found. Maybe add one?</p>
      </section>
    </div>
  );
};

export default App;
