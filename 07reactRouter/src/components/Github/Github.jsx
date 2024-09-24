import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //         fetch('https://api.github.com/users/shiv-co')
    //         .then(response => response.json())
    //         .then(data =>{
    //             console.log(data);
    //             setData(data)

    //         })
    // }, [])
    
  return (
    <div className='text-center m-4 
    bg-gray-600 text-white p-4 text-3xl'>
        Github Followers: {data.followers}
        <h1>Repositries: {data.public_repos}</h1>
        <img src={data.avatar_url} alt="Git Profile" / >
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
   const response = await fetch('https://api.github.com/users/shiv-co')
   return response.json()

}  