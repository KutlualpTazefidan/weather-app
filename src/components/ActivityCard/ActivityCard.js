import "./ActivityCard.css";

function ActivityCard({activity}) {
  return (
    <li className="activity-card" >{activity.inputField} </li>
  )
}

export default ActivityCard