import React from 'react'

type Props = {}

const DashboardSidebar = (props: Props) => {
    return (
        <div className='w-[4rem] md:w-[10rem] border-r-[0.1rem] h-screen bg-black'>

            <div className='md:hidden flex flex-col items-center gap-4 p-2'>
                <div>icon</div>
                <div>icon</div>
                <div>icon</div>
            </div>
            <div className='md:block hidden'>
                <div className='flex flex-col gap-4 p-4 items-center'>
                    <div>icon name</div>
                    <div>icon name</div>
                    <div>icon name</div>
                </div>
            </div>
        </div>
    )
}

export default DashboardSidebar