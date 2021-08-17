import React from 'react'

export default function UserList({nom,prenom,age}) {
    return (
        <div>
            <ul style={{listStyle: 'none'}}>
              <li style={{padding: '10px', width:'150px'}}> {nom} </li>
              <li style={{padding: '10px', width:'150px'}}> {prenom} </li>
              <li style={{padding: '10px', width:'150px'}}> {age} </li>
            </ul> 
        </div>
    )
}
