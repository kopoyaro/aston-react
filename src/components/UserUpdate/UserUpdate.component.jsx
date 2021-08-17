import React from 'react'

export default function UserUpdate({title,field,changeUser}) {
    
    return (
        <div style={{width:"250px"}}>
            <p style={{display: "inline"}}>{title}: </p>
            <input defaultValue={field} onChange={(event) => changeUser(event.target.value)} style={{textAlign:"right"}}></input>
          {/* <button onClick={this.props.changeUser}>change utilisateur</button>  */}
        </div>
    )
}

