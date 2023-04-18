
function List({activities}) {
  return (
    <ul> {activities.map((activity)=>{
      return <div>
        {activity.inputField}
      </div>
    })}
      <li>{activities.length} </li>
    </ul>
  )
}

export default List