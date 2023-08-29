"use client"
import Link from 'next/link';

const handleButtonClick = async () => {
  try {
    const response = await fetch("/api/set-cookie"); // Make sure the API route path is correct
    const res = await response.json();
    console.log(res);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default function Home() {
  return (
    <div className="ml-22 flex justify-evenly">
      <button
        className='bg-slate-800 py-3 px-5 rounded-lg ml-5 mt-10 text-white'
        onClick={handleButtonClick}
      >
        Add cookie theme and lang
      </button>
      <Link href={'/display-cookie'} className="bg-slate-800 py-3 px-5 rounded-lg ml-5 mt-10 text-white">Display Cookie</Link>
    </div>
  );
}

