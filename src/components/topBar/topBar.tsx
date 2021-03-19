import { FC } from 'React';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/components';
import { Colors } from '../../styledHelpers/colors';

// import { ExpendedMenu } from './ExpendedMenu';


const InnerWrapper = styled.div`
    width: 1200px;
    background: ${Colors.white};
    `;

const RightIcons = styled.div`
    text-align: right;
`;

const InputWrapper = styled.div`
    
`;

export const TopBar: FC = () => {
    return(
        <Wrapper>
            <InnerWrapper>
                <img src="./media/icons/house2.png"/>Home
                <img src="./media/icons/arrow-down.png"/>
                <div>
                    {/* <ExpendedMenu/> */}
                </div>
                <InputWrapper>
                <input type="text" placeholder="Search LegalCluster"/>
                <img src="./media/icons/search.png"/>
                </InputWrapper>
                <RightIcons>
                    <img src="./media/icons/house.png"/>
                    <img src="./media/icons/comments.png"/>
                    <img src="./media/icons/bell.png"/>
                </RightIcons>
            </InnerWrapper>
        </Wrapper>
    )
}
