import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
export default function AuthorInf() {
    let {authorName} = useParams();
    const { data, isLoading, error } = useFetch("https://localhost:7241/api/Home/AuthorInf?authorName=",authorName );
    console.log(data)
  return (
    <>
    <div className="w-full max-w-sm overflow-hidden">
    <div className="flex flex-col items-center ">
    <img className="w-24 h-24 m-2 rounded-full shadow-lg" src={data.authorIMG}/>
   <h5 className="mb-1 text-xs font-medium text-gray-900">{data.authorName}</h5>
    <span className="text-sm text-gray-500 dark:text-gray-400">{data.authorLabel}</span>
    <p className='text-sm text-center '>{data.authorDesc}.</p>
</div>
</div>
</>
  )
}
