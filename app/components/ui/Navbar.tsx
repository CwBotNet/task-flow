import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../../public/logo.png"

type Props = {}

const Navbar = (props: Props) => {
    return (
        <>
            <div className='flex p-4  fixed top-0 w-full justify-between bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-b-[0.1rem]  border-gray-600'>
                <div className=' text-2xl font-bold flex items-center '>
                    <Image src={logo} alt='logo' className='w-[2.5rem]' />/ {" "}
                    <span className='text-pink-300 tracking-wide ml-2'>
                        TaskFlow
                    </span>
                </div>
                <div className='flex gap-12 align-middle'>
                    <ul className='flex gap-4 items-center'>
                        <Link href={"#"}>About</Link>
                        <Link href={"#"}>Doc</Link>

                        <Link href={"#"}>
                            <button className=' rounded w-[3rem] p-2 underline underline-offset-auto'>
                                <p className='text-sm '>SignUp</p>
                            </button>
                        </Link>
                        <span className='font-bold'>
                            /
                        </span>
                        <Link href={"#"}>
                            <button className='text-pink-500 hover:text-pink-400 mr-2 rounded p-2 w-[3rem]'>
                                <p className='text-sm '>SignIn</p>
                            </button>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar