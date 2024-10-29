import './Nav.css'
import PropTypes from 'prop-types'

const Nav = ({ setSection }) => {
    return (
        <nav>
            <button onClick = {() => setSection('home')}><i className = "fa-solid fa-home"></i></button>
            <button onClick = {() => setSection('downloadcontent')}><i className = "fa-solid fa-file"></i></button>
            <button onClick = {() => setSection('settings')}><i className = "fa-solid fa-gear"></i></button>
        </nav>
    )
}
Nav.propTypes = {
    setSection: PropTypes.func.isRequired,
}

export default Nav