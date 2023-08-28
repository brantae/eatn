import React, { useState } from 'react'
import { Menu, Segment, Image } from 'semantic-ui-react'
import logo from './images/eatn-logo.png'


export default function NavBar() {

    const [activeItem, setActiveItem] = useState("home")

    const handleItemClick = (e, { name }) => setActiveItem(name)

    const navContainerStyle = {
        position: 'sticky',
        top: '0',
        zIndex: '100',
    }

    const navBarStyle = {
        backgroundColor: '#f1e8f1',
        }

        return (
            <div style={navContainerStyle}>
            <div style={navBarStyle}>
            <Image src={logo} alt="Logo" size="small" centered />
                <Menu pointing secondary>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='Posts'
                    active={activeItem === 'messages'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='Profile'
                    active={activeItem === 'friends'}
                    onClick={handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={handleItemClick}
                    />
                </Menu.Menu>
                </Menu>
            </div>
        {/* Your page content goes here */}
        </div>
    );
    }