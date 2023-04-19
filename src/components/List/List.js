import ActivityCard from "../ActivityCard/ActivityCard";
import "./List.css";

function List({ activities, isGoodWeather, onDeleteActivity }) {
  function createWeatherDependentActivityCards(activities, isGoodWeather) {
    const activitiesCards = activities
      .filter((activity) =>
        isGoodWeather ? activity.checkboxField : !activity.checkboxField
      )
      .map((activity) => {
        return (
          <ActivityCard
            key={activity.id}
            activity={activity}
            onDeleteActivity={onDeleteActivity}
          />
        );
      });
    return activitiesCards;
  }

  return (
    <ul className="activity-list">
      {createWeatherDependentActivityCards(activities, isGoodWeather)}
    </ul>
  );
}

export default List;
