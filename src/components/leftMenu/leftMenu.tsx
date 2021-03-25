import { FC } from 'React';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/components';
import { Colors } from '../../styledHelpers/colors';
import { fontSize } from '../../styledHelpers/fontSizes'


const InnerWrapper = styled.div`
    width: 350px;
    height: 350px;
    background: ${Colors.white};
    font-family: 'Montserrat', sans-serif;
    margin: 0 0 0 355px;
`;

const Name = styled.div`
    color: ${Colors.blue};
    font-weight: bold;
    font-size: ${fontSize[20]};
    margin: 20px 0 0 50px;
`;

const Company = styled.div`
    font-size: ${fontSize[20]};
    margin: 0 0 0 50px;
`;

const LeftIcons = styled.div`
    text-align: left;
    margin: 20px;
    border: '1px solid rgba(0, 0, 0, 0.05)';
`;

const Shadow = styled.div`
    box-shadow: 0 0 1em gray;
    padding: 5px;
    margin: 15px;
`;

export const LeftMenu: FC = () => {
    return(
        <Wrapper>
            <InnerWrapper>
            <Shadow>
            <Name>Humberta Swift</Name><br/>
            <Company>Job title - Company</Company>
                <LeftIcons>
                <img src="./media/icons/people.png" alt="people" style={{margin:5}} />Your network
                <img src="./media/icons/user-plus.png" alt="people" style={{marginLeft:102, border:'1px solid black', padding: 5}}/><br/>
                <img src="./media/icons/publications.png" alt="people" style={{margin:5}}/>Your Publications
                <img src="./media/icons/plus.png" alt="people" style={{marginLeft:75, border:'1px solid black', padding: 5}}/><br/>
                </LeftIcons> </Shadow><LeftIcons>
                <img src="./media/icons/publications.png" alt="people" style={{margin:5}}/>Publications<br/>
                <img src="./media/icons/ecosystem.png" alt="people" style={{margin:5}}/>Ecosystem<br/>
                <img src="./media/icons/entities.png" alt="people"style={{margin:5}}/>Entities<br/>
                </LeftIcons>
            </InnerWrapper>
        </Wrapper>
    )
}