import React, {useState, useEffect} from 'react';
import Heading from '@tds/core-heading';
import FlexGrid from '@tds/core-flex-grid';
import Box from '@tds/core-box';
import Devices from '../../Devices';
import Spinner from '@tds/core-spinner';
import Image from '../../../../../public/images/watch.jpg';
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";

const Watches = () => {
    const [watches, setWatches] = useState([]);
    const [isFetching,setIsFetching] = useState(false);
    
    useEffect(() => {
        const getWatches = async () => {
          try {
            setIsFetching(true);
            const listWatches = await axios.get(`http://localhost:8081/watches`);
            setWatches(listWatches.data.data);
            setIsFetching(false);
          } catch (error) {
            console.log(error);
          }
        };
        getWatches();
      }, []);
        if (isFetching) {
            return (
                <FlexGrid>
                    <FlexGrid.Col>
                        <FlexGrid.Row verticalAlign="middle" horizontalAlign="center">
                            <Box vertical={2}>
                                <div style={{ height: 100 }} />
                                <Spinner
                                    spinning
                                    label={
                                        <>
                                        Loading 
                                        </>
                                    } 
                                />
                            </Box>
                        </FlexGrid.Row>
                    </FlexGrid.Col>
                </FlexGrid>
                )
            }
            return(
            <FlexGrid>
                <FlexGrid.Col>
                    <FlexGrid.Row>
                        <Heading level="h1">Watches</Heading>
                    </FlexGrid.Row>
                </FlexGrid.Col>
                <FlexGrid.Row>
                <Devices devices={watches} image={Image} type="watch"  />
                </FlexGrid.Row>
            </FlexGrid>
            )
    };

    export default Watches;
