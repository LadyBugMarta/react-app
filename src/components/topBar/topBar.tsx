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
    cursor: pointer;
    `;

const RightIcons = styled.div`

`;

const InputWrapper = styled.div`
    margin-left: 110px;
    margin-right: 180px;
`;

const CustomImg = styled.img`

`;


export const TopBar: FC = props => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    // wrapperRef - można otworzyć
    // dropdownOpen - boolen, czy dropdown jest otwarty czy zamknięty
    // toggleDropdown - metoda do otwierania i zamykania naprzemiennie danego dropdownu

    const menuHandler = () => {
        toggleDropdown();
    }

    return(
        <Wrapper>
            <InnerWrapper>

            <div ref={wrapperRef}> 
                    <div onClick={menuHandler}>
                            
                    </div>
                        {dropdownOpen  
                            // && <ExpandedMenu/>
                        }
                </div>

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

export const ExpandMenu: FC = () => {
        return(
            <CustomImg src="./media/icons/menu.png" alt="menu" />
        )
}


