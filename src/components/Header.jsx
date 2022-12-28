import React from 'react'
import { Badge, Input } from 'antd';
import {BarChartOutlined, CopyOutlined, HomeOutlined, LogoutOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined} from '@ant-design/icons'
const Header = () => {
    return (
        <div className='border-b mb-6'>
            <header className='py-4 px-6 flex items-center justify-between gap-10'>
                <div className="logo">
                    <a href="#">
                        <h2 className='text-2xl md:text-4xl font-bold'>LOGO</h2>
                    </a>
                </div>
                <Input size="large" placeholder="Search..." prefix={<SearchOutlined />} 
                className='rounded-full max-w-[800px]'
                 />

                <div className="menu-links flex items-center justify-between gap-7 md:static fixed bottom-0 
                md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
                    <a href={'/'} className='flex flex-col hover:text-[#40a9ff] transition-all'>
                    <HomeOutlined className='md:text-2xl text-xl' />
                    <span className='md:text-xs text-[10px]'>Home</span>
                    </a>
                    <Badge count={5} offset={[0,6]} className='md:flex hidden'>
                    <a href={'/'} className='flex flex-col hover:text-[#40a9ff] transition-all'>
                    <ShoppingCartOutlined  className='md:text-2xl text-xl' />
                    <span className='md:text-xs text-[10px]'>Sepet</span>
                    </a>
                    </Badge>
                    <a href={'/'} className='flex flex-col hover:text-[#40a9ff] transition-all'>
                    <CopyOutlined  className='md:text-2xl text-xl' />
                    <span className='md:text-xs text-[10px]'>Fatura</span>
                    </a>
                    <a href={'/'} className='flex flex-col hover:text-[#40a9ff] transition-all'>
                    <UserOutlined  className='md:text-2xl text-xl' />
                    <span className='md:text-xs text-[10px]'>Müşteriler</span>
                    </a>
                    <a href={'/'} className='flex flex-col hover:text-[#40a9ff] transition-all'>
                    <BarChartOutlined className='md:text-2xl text-xl' />
                    <span className='md:text-xs text-[10px]'>İstatistikler</span>
                    </a>
                    <a href={'/'} className='flex flex-col hover:text-[#40a9ff] transition-all'>
                    <LogoutOutlined  className='md:text-2xl text-xl' />
                    <span className='md:text-xs text-[10px]'>Çıkış</span>
                    </a>
                </div>

                <Badge count={5} offset={[0,6]} className='md:hidden flex'>
                    <a href={'/'} className='flex flex-col hover:text-[#40a9ff] transition-all'>
                    <ShoppingCartOutlined  className='md:text-2xl text-xl' />
                    <span className='md:text-xs text-[10px]'>Sepet</span>
                    </a>
                    </Badge>
            </header>



        </div>
    )
}

export default Header