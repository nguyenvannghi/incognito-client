import React, { memo } from 'react';

import { Avatar, Button, Col, Row, Typography } from 'antd';
import { META_TITLE_PAGE } from 'app/consts';
import history from 'app/routes/history';
import Logo from 'assets/logo.png';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const OnboardingStyled = styled.div`
    .ant-avatar {
        margin-bottom: 2.5rem;
    }
`;

const Onboarding = () => {
    const dispatch = useDispatch();
    const { Title } = Typography;

    const onAccessWallet = async () => {
        history.push('/migrate?callback=https://lightshadowbox.app');
    };

    return (
        <OnboardingStyled>
            <Helmet>
                <title>{META_TITLE_PAGE.WELCOME}</title>
            </Helmet>
            <div className="wrap">
                <Row gutter={[30, 30]}>
                    <Col className="text-center" span={24}>
                        <Avatar size={150} icon={<img src={Logo} alt="WELCOME TO INCOGNITO WEB WALLET" />} />
                        <Title level={3}>We are moving to new home - lightshadowbox.app</Title>
                        <Button type="primary" className="btn" size="large" onClick={onAccessWallet}>
                            Migrate to Light Shadow Box
                        </Button>
                    </Col>
                </Row>
            </div>
        </OnboardingStyled>
    );
};

export default memo(Onboarding);
