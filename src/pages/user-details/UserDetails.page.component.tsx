import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
export default function UserDetailsPageComponent() {
  const {id} = useParams();
  useEffect(()=>{
    
  },[]);
  return (
    <div>
        <h2>UserDetails.page.component</h2>    
    </div>
  )
}