import ActivityCard from "../ActivityCard/ActivityCard";
import "./List.css";

function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <ul className="activity-list">
      {isGoodWeather
        ? activities
            .filter((activity) => activity.checkboxField)
            .map((activity) => {
              return (
                <ActivityCard
                  key={activity.id}
                  activity={activity}
                  onDeleteActivity={onDeleteActivity}
                />
              );
            })
        : activities
            .filter((activity) => !activity.checkboxField)
            .map((activity) => {
              return (
                <ActivityCard
                  key={activity.id}
                  activity={activity}
                  onDeleteActivity={onDeleteActivity}
                />
              );
            })}
    </ul>
  );
}

export default List;
