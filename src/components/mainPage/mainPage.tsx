import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../topBar/topBar';
// import { LeftMenu } from '../leftMenu/leftMenu';

const Wrapper = styled.div``;

const Content = styled.div`
    max-width: 1200px;
    align-items: center;
    display: flex;
`;

const MainPage: FC = () => {
    return(
        <Wrapper>
            <TopBar />
                <Content>
                    {/* <LeftMenu/> */}
                    <div>content</div>
                </Content>
        </Wrapper>
    )
}

export default MainPage;
