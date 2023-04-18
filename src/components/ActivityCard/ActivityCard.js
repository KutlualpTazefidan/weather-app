import "./ActivityCard.css";

function ActivityCard({activity}) {
  return (
    <div className="activity-card">{activity.inputField}</div>
  )
}

export default ActivityCard