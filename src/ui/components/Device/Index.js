import React from 'react';
import FlexGrid from '@tds/core-flex-grid';
import Heading from '@tds/core-heading';
import HairlineDivider from '@tds/core-hairline-divider'
import Card from '@tds/core-card';
import Box from '@tds/core-box';
import Text from '@tds/core-text'
import ResponsiveImage from '@tds/core-responsive-image'
import PriceLockup from '@tds/core-price-lockup'
import Notification from '@tds/core-notification'
import { FootnoteLink } from '@tds/core-terms-and-conditions'


const Device = ({ 
    index, 
    src,
    alt, 
    brand,
    type, 
    name,
    price }) => {
    return (
      <>
        {type === "watch" && ( 
          <FlexGrid.Col>
          <Card spacing="compact">
            <Box between={3}>
              <FlexGrid.Col xs={12} md={4}>
                <ResponsiveImage
                  smSrc={src}
                  xsSrc={src}
                  alt={alt}
                  fallbackSrc={src}  
                />
              </FlexGrid.Col>
              <Box between={0}>
                <Heading level="h3">{brand}</Heading>
                <Heading level="h2" tag="h3">{name}</Heading>
                <Box inline between={3}>
                  <Box between={0}>
                    <PriceLockup
                      size="small"
                      price={price}
                      signDirection="left"
                    />
                  </Box>
                  <HairlineDivider vertical />
                  <Box between={0}>
                    <PriceLockup
                      size="small"
                      price="0.00"
                      signDirection="left"
                    />
                  </Box>
                </Box>
                <FootnoteLink number={[4]} onClick={(number, ref) => {}} copy="en" />             
                <Box inline between={6}>
                  <Box between={0}>
                    <Text size="medium">/mo.</Text>
                  </Box>
                  <Box between={0}>
                    <Text size="medium">Upfront</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
          <Notification variant="branded">
            <Box between={0}>
              <Text bold>Get 3 months of Apple Fitness+ free when you buy Apple Watch</Text>
            </Box>
          </Notification>
          <Card spacing="compact">
            <Box between={0}>
              <Text size="medium">Retail price: $698</Text>
            </Box>
          </Card>
          </FlexGrid.Col>
        )}
        {type === "iphone" && (  
          <FlexGrid.Col key={index} >
            <Card>
              <Box between={2}>
                <FlexGrid.Row horizontalAlign="center">
                  <FlexGrid.Col xs={12} md={4}>
                    <ResponsiveImage
                      smSrc={src}
                      xsSrc={src}
                      alt={alt}
                      fallbackSrc={src}  
                    />
                  </FlexGrid.Col>
                </FlexGrid.Row>
                <Box between={0}>
                  <Heading level="h3">{name.toUpperCase()}</Heading>
                  <Heading level="h2" tag="h3">{brand}</Heading>
                  <PriceLockup
                      size="medium"
                      price={price}
                      signDirection="left"
                    />
                </Box>
                <Box vertical={3}>
                  <HairlineDivider />
                </Box>
                <Box>
                  <Text size="medium">
                  TELUS easy payment applied watch.
                    <sup>3</sup>.
                  </Text>
                  <Text size="medium">Taxes due upfront.</Text>
                </Box>
                <Text size="medium">Retail price: $499</Text>
              </Box>
            </Card>
          </FlexGrid.Col> 
        )}
      </>
    )
}

export default Device;