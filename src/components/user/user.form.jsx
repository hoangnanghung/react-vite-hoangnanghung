
import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';

const UserForm = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    return(
        <div className='user-form' style={{margin: "20px 0px", padding: "20px"}}>
            <div style={{display: "flex", gap: "20px", flexDirection: "column"}}>
                    <div>   
                        <span>Full name</span>
                        <Input placeholder="Full name" />
                    </div>
                    
                    <div>   
                        <span>Email</span>
                        <Input placeholder="Email" />
                    </div>
                    <div>   
                        <span>Password</span>
                        <Input.Password
                            placeholder="input password"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                                
                    </div>
                    <div>   
                        <span>Phone number</span>
                        <Input placeholder="Phone number" />
                    </div> 

                    <div>   
                        
                        <Button type="primary">Create User</Button>
                    </div>    
            </div>
            
        </div>
        

    )
}

export default UserForm;
