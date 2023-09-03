import { useContext, useState } from 'react'
import { Menu, Image, Button } from 'semantic-ui-react'
import logo from './images/eatn-logo.png'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { UserContext } from './context/UserContext'
import PostModal from './PostModal'

export default function NavBar() {
    const { currentUser, logout, isLoggedIn } = useContext(UserContext)
    const navigate = useNavigate()
    const location = useLocation()
    const pathname = location.pathname

    const [isPostModalOpen, setPostModalOpen] = useState(false)


    const togglePostModal = () => {
        console.log("toggle open")
        setPostModalOpen(!isPostModalOpen)
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

    return (
        <>
        <div style={navContainerStyle}>
        <div className="image" style={logoStyle}>
            <Image src={logo} alt="Logo" size="small" centered />
        </div>
            <Menu pointing secondary>
                <Menu.Item
                name="home"
                active={pathname === '/'}
                onClick={() => navigate('/')}
                />
                <Menu.Item
                name="posts"
                active={pathname === '/posts_page'}
                onClick={() => navigate('/posts_page')}
                />
                <Menu.Item
                name="profile"
                active={pathname === '/profile'}
                onClick={() => navigate('/profile')}
                />
                {isLoggedIn ? (
                <Menu.Item position="right">
                    <Button basic color='grey' onClick={togglePostModal}>
                    post an eat
                    </Button>
                </Menu.Item>
                ) : (
                <Menu.Item position="right">
                    <Link to="/login">login</Link>
                </Menu.Item>
                )}
                {isLoggedIn && (
                <Menu.Item position="right">
                    hello, {currentUser.name}
                </Menu.Item>
                )}
                {isLoggedIn && (
                <Menu.Item name="logout" onClick={logoutUser} />
                )}
            </Menu>
        </div>
        <PostModal 
            isOpen={isPostModalOpen} 
            togglePostModal={togglePostModal} 
            
        />
        </>
    )
    }
