import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='bg-white text-black h-10 flex justify-between'>
            <div>
                Navbar
            </div>
            <div>
                <ul>
                    <li>signIn</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar