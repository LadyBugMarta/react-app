import { FC } from 'React';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import { Wrapper } from '../../styledHelpers/components';
import { Colors } from '../../styledHelpers/colors';

// import { ExpendedMenu } from './ExpendedMenu';

const InnerWrapper = styled.div`
    width: 1200px;
    background: ${Colors.white};
    display: flex;
    align-items: center;
    `;

const RightIcons = styled.div`

`;

const InputWrapper = styled.div`
    margin-left: 110px;
    margin-right: 180px;
`;

const CustomImg = styled.img`

`;

export const TopBar: FC = () => {
    return(
        <Wrapper>
            <InnerWrapper>
                <img src="./media/icons/house2.png" alt="house2" style={{margin:10}}/> Home 
                <img src="./media/icons/arrow-down.png" alt="arrow-down" style={{marginLeft:150}}/>
                <div>
                    {/* <ExpendedMenu/> */}
                </div>
                <InputWrapper>
                <input type="text" placeholder="Search LegalCluster" style={{width:500, textAlign:'center', lineHeight: 2}}/>
                <img src="./media/icons/search.png" alt="search" />
                </InputWrapper>
                <RightIcons>
                    <img src="./media/icons/house.png" alt="house" style={{margin:5}}/>
                    <img src="./media/icons/comments.png" alt="comments" style={{margin:5, border:'1px solid gray', borderRadius: 50, padding: 5}}/>
                    <img src="./media/icons/bell.png" alt="bell" style={{margin:5, border:'1px solid gray', borderRadius: 50, padding: 5}}/>
                </RightIcons>
            </InnerWrapper>
        </Wrapper>
    )
}

export const ExpandMenu: FC = props => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    }
        return(
            <Wrapper>
                <InnerWrapper>
                    <CustomImg src="./media/icons/logo.png" alt="logo" />

                    <div ref={wrapperRef}>
                        <div onClick={menuHandler}>
                            domek, home, strzałeczka
                        </div>
                        {dropdownOpen  
                            // && <expandedMenu/>
                        }
                    </div>
                </InnerWrapper>
            </Wrapper>
        )
    }


