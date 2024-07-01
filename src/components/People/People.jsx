import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
function People() {
  return (
    <div className=''>
        <h3><FontAwesomeIcon icon={faPeopleGroup}/> People</h3>
        <p>Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.</p>
    </div>
  )
}

export default People