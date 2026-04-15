

import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';

const UserForm = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    // console.log(fullname);

    const handleClickBtn= () => {
        // console.log(fullname);
        // console.log(email);
        // console.log(password);
        // console.log(phone);
    }
    return(
        <div className='user-form' style={{margin: "20px 0px", padding: "20px"}}>
            <div style={{display: "flex", gap: "20px", flexDirection: "column"}}>
                    <div>   
                        <span>Full name</span>
                        <Input placeholder="Full name" 
                        value={fullname} 
                        onChange={(event) => {
                            {
                                setFullname(event.target.value);
                            }
                        }}/>
                    </div>
                    
                    <div>   
                        <span>Email</span>
                        <Input placeholder="Email"
                        value={email} 
                        onChange={(event) => {
                            {
                                setEmail(event.target.value);
                            }
                        }}
                         />
                    </div>
                    <div>   
                        <span>Password</span>
                        <Input.Password
                            placeholder="input password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </div>
                    <div>   
                        <span>Phone number</span>
                        <Input placeholder="Phone number"
                        value={phone} 
                        onChange={(event) => {
                            {
                                setPhone(event.target.value);
                            }
                        }} />
                    </div> 

                    <div>   
                        
                        <Button onClick={() => handleClickBtn()} type="primary">Create User</Button>
                    </div>    
            </div>
            
        </div>
        

    )
}

export default UserForm;
