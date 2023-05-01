import { Link } from 'react-router-dom'
import logo from '../image/music1.png'
import styled from '@emotion/styled'

const HeaderElement=styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    place-items: center;
    min-height: 5em;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    background-color: aliceblue;
    z-index: 5;
    box-shadow: 0 1px 15px 1px rgba(0, 0, 0, .3);
    padding: .3em 1em;
`;


const Logo =styled.div`
    margin-right: auto;
    display: flex;
    justify-content: center;
    place-items: center;
`;

const LogoImage=styled.img`
    width: 5em;
    height: 5em;
    object-fit: cover;
    border-radius: 50%;
`;


const Navigation=styled.div`
    min-width: 20em;
    display: flex;
    justify-content: center;
    place-items: center;
`;

const HeaderList=styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    place-items: center;
    list-style-type: none;
    gap: .5em;
`;

const HeaderListElement=styled.li`
    min-width: 24%;
    display: flex;
    justify-content: center;
    place-items: center;
`;



function Header(){
    
    return (
        <HeaderElement>
            <Logo>
                <LogoImage src={logo} alt="" />
            </Logo>
            <Navigation>
                <HeaderList>
                    <HeaderListElement>
                        <Link to='/' className="headerLinks">Home</Link>
                    </HeaderListElement>
                    <HeaderListElement>
                        <Link to='/myMusics' className="headerLinks">My Musics</Link>
                    </HeaderListElement>
                    <HeaderListElement>
                        <Link to='/create' className="headerLinks">Create</Link>
                    </HeaderListElement>
                </HeaderList>
            </Navigation>
        </HeaderElement>
    )
}

export default Header