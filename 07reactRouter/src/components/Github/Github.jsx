import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {

    const data = useLoaderData();

    // const [data, setData] = React.useState({});
    // useEffect(() => {
    //     const data = fetch('https://api.github.com/users/Sahil-195')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    //     .catch(error => {
    //         setData({name: 'Sahil Panjwani', followers: 0})
    //     });
    // },[])
    return (
        <div className="flex items-center justify-center h-96">

            <div className="flex flex-col justify-start w-4/5 h-full bg-gray-500">
                <h1 className="text-center text-3xl">Followers : {data.followers}</h1>
                <div className="flex justify-center items-center m-4 p-4">
                    <img className="w-60" src={data.avatar_url} alt="GitHub Profile pic" />
                </div>
                <h1 className="text-center text-3xl">Username : {data.login}</h1>

            </div>
        </div>
    );
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Sahil-195');
    const data = await response.json();
    return data;
}
