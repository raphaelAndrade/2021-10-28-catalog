import React from 'react';
import Heading from '@tds/core-heading';
import FlexGrid from '@tds/core-flex-grid';
import {useState, useEffect} from 'react';
import Box from '@tds/core-box';
import Devices from '../../Devices';
import Spinner from '@tds/core-spinner';
import Image from '../../../../../public/images/iphone.jpg';
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";    

const Iphones = () => {
    const [isFetching,setIsFetching] = useState(false);
    const [iphones, setIphones] = useState([]);

    useEffect(() => {
        const getIphones = async () => {
            try {
                setIsFetching(true);
                const listIphones = await axios.get(`http://localhost:8081/iphones`);
                setIphones(listIphones.data.data);
                setIsFetching(false);
            } catch (error) {
                console.log(error);
            }
        };
        getIphones();
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
        <>
            <FlexGrid>
                <FlexGrid.Col>
                    <FlexGrid.Row>
                        <Heading level="h1">Iphones</Heading>
                    </FlexGrid.Row>
                </FlexGrid.Col>
                <FlexGrid.Row>
                    <Devices devices={iphones} image={Image} type="iphone" />
                </FlexGrid.Row>
            </FlexGrid>
        </>
    )
    };

export default Iphones;