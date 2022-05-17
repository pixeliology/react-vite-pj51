import React, { useState } from 'react'
import { ProfileBarContainer, ProflieIcon, ProfileBar, Formbox } from '../styles/styledElements'
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { Form ,Button} from 'react-bootstrap';

function Profilebar() {
    const [ShowProfileBar, setShowProfileBar] = useState(false);
    console.log(ShowProfileBar)

    const [forgotpsw, setforgotpsw] = useState(false);
    console.log(forgotpsw)

    return (
        <ProfileBarContainer>
            <ProflieIcon onClick={() => setShowProfileBar(!ShowProfileBar)} ShowProfileBar={ShowProfileBar}>
                <p>เข้าสู่ระบบ/สมัครสมาชิก</p>
                <div className="IconProfile">
                    <FaUserCircle />
                </div>
            </ProflieIcon>
            <ProfileBar ShowProfileBar={ShowProfileBar}>
                <Formbox>
                    <div className="IconForm">
                        <IoMdArrowDroprightCircle onClick={() => setShowProfileBar(!ShowProfileBar)} ShowProfileBar={ShowProfileBar} />
                    </div>
                    <div className="IconProfile">
                        <FaUserCircle />
                    </div>
                    <h1 className='HeaderForm'>เข้าสู่ระบบ</h1>
                    <Form className='formbox' forgotpsw={forgotpsw}>
                        <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1" onClick={() => setforgotpsw(!forgotpsw)} forgotpsw={forgotpsw}>
                            <Form.Control className='inputform' type="text" placeholder="ชื่อบัญชีผู้ใช้" />
                            <Form.Control className='inputform' type="password" placeholder="รหัสผ่าน" />
                            <div className='float-end forgotpsw'>ลืมรหัสผ่านใช่ไหม</div>
                            <Button className='col-12 login' as="input" type="submit" value="เข้าสู่ระบบ"/>
                        </Form.Group>
                        <hr />
                        <div className='center signup'>ยังไม่มีบัญชีผู้ใช้?สมัครสมาชิก</div>
                    </Form>
                    
                </Formbox>
            </ProfileBar>
        </ProfileBarContainer>
    )
}

export default Profilebar