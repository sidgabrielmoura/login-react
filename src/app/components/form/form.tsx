import Link from "next/link";

export function Form() {
    return (
        <div className='h-screen w-[40vw] bg-black flex flex-col items-start justify-center p-20'>
            <h1 className='font-sans text-[30px] pb-8'>SIGN IN</h1>

            <label className='text-[10px] pb-2'>User Name:</label>

            <input type="text" className='rounded-sm bg-transparent border-2 border-fuchsia-800 w-full mb-4
        text-xs p-2.5' />

            <label className='text-[10px] pb-2'>Password:</label>

            <input type="text" className='rounded-sm bg-transparent border-2 border-fuchsia-800 w-full mb-4
        text-xs p-2.5' />

            <Link href={''} className="text-[9px] underline text-gray-100 pb-2">FORGOT PASSWORD?</Link>

            <button className='p-3.5 bg-fuchsia-700 text-[10px] w-full rounded-lg hover:bg-fuchsia-800'>SIGN IN</button>

            <p className="text-[10px] pt-8">don't have an accout? <a href="" className="underline">Sign Up</a></p>
        </div>
    )
}