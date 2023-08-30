import React, { useState, useContext } from 'react'
import { Menu, Segment, Image } from 'semantic-ui-react'
import logo from './images/eatn-logo.png'
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "./context/UserContext"


export default function NavBar() {

    const [activeItem, setActiveItem] = useState("home")
    const {currentUser, logout, isLoggedIn} = useContext(UserContext)
    const navigate = useNavigate()

    function logoutUser() {
        fetch('/logout', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }

    const navContainerStyle = {
        position: 'sticky',
        top: '0',
        zIndex: '100',
        backgroundColor: '#f1e8f1',
    }

    const logoStyle = {
        margin: '-4',
        }

        return (
            <div style={navContainerStyle}>
                <div class='image' style={logoStyle}> 
                    <Image src={logo} alt="Logo" size="small" centered />
                </div>
                <Menu pointing secondary>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={() => {
                        setActiveItem('home')
                        navigate('/')
                    }}
                />
                <Menu.Item
                    name='posts'
                    active={activeItem === 'posts'}
                    onClick={() => {
                        setActiveItem('posts')
                        navigate('/posts')
                    }}
                />
                <Menu.Item
                    name='profile'
                    active={activeItem === 'profile'}
                    onClick={() => {
                        setActiveItem('profile')
                        navigate('/profile')
                    }}
                />
                {isLoggedIn ? (
                    <>
                    <Menu.Item position="right">
                        Hello, {currentUser.name}
                    </Menu.Item>
                    <Menu.Item
                    name="logout"
                    active={activeItem === 'logout'}
                    onClick={logoutUser}
                    />
                    </>
                ) : (
                    <Menu.Item position="right">
                        <Link to="/login">Login</Link>
                    </Menu.Item>
                    )}
                </Menu>

            {/* content goes here */}
            </div>
                )
            }