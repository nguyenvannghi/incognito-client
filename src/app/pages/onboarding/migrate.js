import React, { memo } from 'react';

import { Col, Row, Typography } from 'antd';
import { LOCAL_STORAGE_KEY, META_TITLE_PAGE } from 'app/consts';
import LocalStorageServices from 'app/utils/localStorage';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const OnboardingStyled = styled.div`
    .ant-avatar {
        margin-bottom: 2.5rem;
    }
`;

const Migration = () => {
    const genLink = (lsb, backupStr) => {
        const b64 = window.btoa(backupStr);
        return `${lsb}/migrate-from-incwallet?token=${b64}`;
    };

    const lightshadowbox = window.location.search.substr(10);
    const backupWalletStr = LocalStorageServices.getItem(LOCAL_STORAGE_KEY.WALLET);
    if (backupWalletStr) {
        window.location.replace(genLink(lightshadowbox, backupWalletStr));
    } else {
        window.location.replace(`${lightshadowbox}/initialize`);
    }

    return (
        <OnboardingStyled>
            <Helmet>
                <title>{META_TITLE_PAGE.WELCOME}</title>
            </Helmet>
            <div className="wrap">
                <Row gutter={[30, 30]}>
                    <Col className="text-center" span={24}>
                        <Typography.Title level={3}>Redirecting...</Typography.Title>
                    </Col>
                </Row>
            </div>
        </OnboardingStyled>
    );
};

export default memo(Migration);
