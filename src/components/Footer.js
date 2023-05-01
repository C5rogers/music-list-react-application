import logo from '../image/music1.png'
import styled from '@emotion/styled'

const FooterElement=styled.footer`
    width: 100%;
    background-color: black;
    min-height: 5em;
    color: aliceblue;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
`;

const FooterUpperDiv=styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    place-items: center;
    gap: 1em;
    border-bottom: 2px solid grey;
    padding: 1em;
`;

const FooterUpperDivLogoImage=styled.img`
    width: 5em;
    height: 5em;
    object-fit: cover;
    border-radius: 50%;
`;


const DiscriptionContainer=styled.div`
    font-size: .8em;
    text-align: center;
    color: aliceblue;
`;


const LowerContainer=styled.div`
    padding: 1em 1em 0 1em;
`;

const DateFild=styled.div`
    color: gold;
`;


function Footer(){

    const date=new Date()

    const today=String(date.getDate()).padStart(2, '0')
    const thisMonth=String(date.getMonth()+1).padStart(2,"0");
    const thisYear=date.getFullYear();

    let currentDate = `${today}-${thisMonth}-${thisYear}`;

    return (
        <FooterElement>
            <FooterUpperDiv>
                <div className="logo">
                    <FooterUpperDivLogoImage src={logo} alt="" />
                </div>
                <DiscriptionContainer>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quidem numquam iure, commodi accusantium, dolore harum adipisci nihil, provident labore possimus exercitationem. Maiores quas aspernatur earum repudiandae ipsa impedit sequi?
                </DiscriptionContainer>
            </FooterUpperDiv>
            <LowerContainer>
                <DateFild>
                    &copy; {currentDate}
                </DateFild>
            </LowerContainer>
        </FooterElement>
    )
}


export default Footer