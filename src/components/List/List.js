import ActivityCard from "../ActivityCard/ActivityCard";
import "./List.css";

function List({ activities, isGoodWeather }) {
  return (
    <ul className="activity-list">
      {isGoodWeather
        ? activities
            .filter((activity) => activity.checkboxField)
            .map((activity) => {
              return <ActivityCard key={activity.id} activity={activity} />;
            })
        : activities
            .filter((activity) => !activity.checkboxField)
            .map((activity) => {
              return <ActivityCard key={activity.id} activity={activity} />;
            })}
    </ul>
  );
}

export default List;
