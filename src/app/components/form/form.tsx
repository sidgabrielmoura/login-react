import Link from "next/link";

export function Form() {
    return (
        <div className='h-screen w-[40vw] bg-black flex flex-col items-start justify-center p-20'>
            <h1 className='font-sans text-[30px] pb-8'>Sign in</h1>

            <label className='text-[10px] pb-2'>User Name:</label>

            <input type="text" className='rounded-sm bg-transparent border-2 border-indigo-600 w-full mb-4
        text-xs p-2.5' />

            <label className='text-[10px] pb-2'>Password:</label>

            <input type="text" className='rounded-sm bg-transparent border-2 border-indigo-600 w-full mb-4
        text-xs p-2.5' />

            <Link href={''} className="text-[9px] underline text-gray-100 pb-2">FORGOT PASSWORD?</Link>

            <button className='p-3.5 bg-blue-600 text-[10px] w-full rounded-lg hover:bg-blue-700'>SIGN IN</button>
        </div>
    )
}