import React from 'react'



function Lock({scp, setLocked}) {

  function handlePassword(e) {
    if (e.target.value === scp.fields?.password) {
    setLocked(false)
  }
}

  return (
    <div className="lock">
          <label>
            password
            <input onChange={handlePassword} />
            </label>
        </div>
  )
}
export default Lock;