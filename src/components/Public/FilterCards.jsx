import React, { useEffect ,useState} from 'react'

const Filter = ({choosenfilter}) => {
  
  const [filter,setFilter]=useState("all");
  
  return (
    <div>
      <select className="hashtag-select" onChange={(e)=>{choosenfilter(e.target.value)}}>

            <option value="All">All</option>
        
            <option value="Happy">#Happy</option>
        
            <option  value="Love">#Love </option>
        
            <option  value="Sad">#Sad</option>
        
            <option  value="Tired">#Tired</option>
        
          </select>
    
    </div>
  )
}

export default Filter