import React from 'react';
import Heading from '@tds/core-heading';
import FlexGrid from '@tds/core-flex-grid';
import ButtonLink from '@tds/core-button-link';
import Box from '@tds/core-box';

const Home = () => {
    return (
        <FlexGrid>
            <FlexGrid.Col>
                <FlexGrid.Row>
                    <Heading level="h1">Device Catalogue</Heading>
                </FlexGrid.Row>
                <FlexGrid.Row>
                    <Box
                        between={2}
                        inline={{ xs: false, lg: true }}
                        >
                        <ButtonLink href="/iphones">Iphones</ButtonLink>
                        <ButtonLink href="/watches">Watches</ButtonLink>
                    </Box>
                </FlexGrid.Row>
            </FlexGrid.Col>
        </FlexGrid>
    )
}

export default Home;
