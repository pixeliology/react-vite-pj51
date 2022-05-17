import React, { useState} from 'react'
import { Sidebar, NavLogo, NavLinks, Nav_link } from '../styles/styledElements'
import Logopic from '../Asset/contact-pic/logo.png'
import { FiHome } from 'react-icons/fi';
import { BsShop } from "react-icons/bs";
import { RiFileEditLine, RiContactsBook2Line } from "react-icons/ri";



function Nav() {
    const [show, setShow] = useState(false);
    console.log(show)
    return (
        <Sidebar show={show}>
            <NavLogo onClick={() => setShow(!show)} show={show}>
                <img src={Logopic} />
                <div className='LinkName'>MARKETRENTAL</div>
            </NavLogo>
            <NavLinks show={show}>
                <Nav_link to='/' show={show}>
                    <div className='IconNav'>
                        <FiHome />
                    </div>
                    <div className='LinkName'>หน้าหลัก</div>
                    <div className='LinkText'> <div className='link'>หน้าหลัก</div> </div>
                </Nav_link>
                <Nav_link to='1' show={show}>
                    <div className='IconNav'>
                        <BsShop />
                    </div>
                    <div className='LinkName'>ตลาดทั้งหมด</div>
                    <div className='LinkText'> <div className='link'>ตลาดทั้งหมด</div> </div>
                </Nav_link>
                <Nav_link to='2' show={show}>
                    <div className='IconNav'>
                        <RiFileEditLine />
                    </div>
                    <div className='LinkName'>สมัครเป็นพาร์เนอร์</div>
                    <div className='LinkText'> <div className='link'>สมัครเป็นพาร์เนอร์</div> </div>
                </Nav_link>
                <Nav_link to='3' show={show}>
                    <div className='IconNav'>
                        <RiContactsBook2Line />
                    </div>
                    <div className='LinkName'>ติดต่อเรา</div>
                    <div className='LinkText'> <div className='link'>ติดต่อเรา</div> </div>
                </Nav_link>
            </NavLinks>
        </Sidebar>
    )
}

export default Nav