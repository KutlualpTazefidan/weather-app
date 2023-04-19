import "./ActivityCard.css";
import { HiXCircle } from "react-icons/hi";
function ActivityCard({ activity, onDeleteActivity }) {
  return (
    <li className="activity-card">
      <p>{activity.inputField}</p>
      <button
        className="delete-activity-button"
        type="button"
        onClick={() => onDeleteActivity(activity.id)}
      >
        <HiXCircle />
      </button>
    </li>
  );
}

export default ActivityCard;
