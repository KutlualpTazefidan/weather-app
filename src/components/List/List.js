import ActivityCard from "../ActivityCard/ActivityCard"
import "./List.css";



function List({activities}) {
  return (
    <ul className="activity-list"> 
      {activities.map((activity)=>{
      return <ActivityCard activity={activity}/>
      })}
      {/* <li>{activities.length} </li> */}
    </ul>
  )
}

export default List