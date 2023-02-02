import styled from "styled-components";
import logo from "../../assets/logoFooter.png"

const FooterContainer = styled.footer`
    background-color: black;
`
const ContainerInfo = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 30px 30px;

`
const FooterLogo = styled.img`
    width: 150px;
`

const TextFooter = styled.p`
    color: white;
    margin-top: 30px;
`

function Footer() {
    return (
        <FooterContainer>
            <ContainerInfo>
                <FooterLogo  src={logo}/>
                <TextFooter>© { (new Date().getFullYear()) } Kasa. All rights reserved</TextFooter>
            </ContainerInfo>
        </FooterContainer>  
    )
}

export default Footer