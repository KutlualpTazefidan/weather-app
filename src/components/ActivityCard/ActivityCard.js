import "./ActivityCard.css";

function ActivityCard({ activity, onDeleteActivity }) {
  return (
    <li className="activity-card">
      <p>{activity.inputField}</p>
      <button type="button" onClick={() => onDeleteActivity(activity.id)}>
        X
      </button>
    </li>
  );
}

export default ActivityCard;
