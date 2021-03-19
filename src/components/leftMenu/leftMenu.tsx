import { FC } from 'React';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/components';
import { Colors } from '../../styledHelpers/colors';


const InnerWrapper = styled.div`
    width: 350px;
    height: 350px;
    background: ${Colors.white};
`;

const Name = styled.div`
    color: ${Colors.blue};
    font-weight: bold
`;

const RightIcons = styled.div`
    text-align: right;
`;

const LeftIcons = styled.div`
    text-align: left;
`;

const InputWrapper = styled.div`
    
`;

export const LeftMenu: FC = () => {
    return(
        <Wrapper>
            <InnerWrapper>
            <Name>Humberta Swift</Name><br/>Job title - Company
                <RightIcons>
                    <img src="./media/icons/user-plus.png"/>
                    <img src="./media/icons/plus.png"/>
                </RightIcons>
                <LeftIcons>
                <img src="./media/icons/people.png"/>Your network<br/>
                <img src="./media/icons/comments.png"/>Your Publications<br/>
                <img src="./media/icons/comments.png"/>Publications<br/>
                <img src="./media/icons/ecosystem.png"/>Ecosystem<br/>
                <img src="./media/icons/entities.png"/>Entities<br/>
                </LeftIcons>
            </InnerWrapper>
        </Wrapper>
    )
}