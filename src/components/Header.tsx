import HamburgerMenu from '@components/HamburgerMenu'
import Profile from "@components/Profile"
import './Header.css'

// type Props = {}

const Header = () => {
  return (
    <div className={"headerContainer"}>
      <a className="brandMark" href="/" aria-label="Wordle Creator home">
        <span className="brandDot" aria-hidden="true" />
        <h1>Wordle Creator</h1>
      </a>
      <div className={"headerDesktopMenu"}>
        <span className="headerNote">Make a puzzle. Make a moment.</span>
        <Profile />
      </div>
      <div className={"headerMobileMenu"}>
        <HamburgerMenu/>
      </div>
    </div>
  )
}

export default Header