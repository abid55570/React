import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch ('https://api.github.com/users/hiteshchoudhary').then(response => response.json()).then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])   // except using this we are using loader function
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'> Github Followers: {data.followers}
       <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoloader = async () => {
    const response = await fetch('https://api.github.com/users/abid55570')
    return response.json()
}