import React from 'react';
import Heading from '@tds/core-heading';
import FlexGrid from '@tds/core-flex-grid';
import {useState, useEffect} from 'react';
import Box from '@tds/core-box';
import Devices from '../../Devices';
import Spinner from '@tds/core-spinner';
import Image from '../../../../../public/images/iphone.jpg'

const Iphones = () => {
    const [isFetching,setIsFetching] = useState(false);
    const [iphones, setIphones] = useState([]);

    useEffect(() => {
        const getIphones =  () => {
            const url = "http://localhost:8081/iphones/";
            let headers = {}
            setIsFetching(true);
            fetch(url,{
                method : "GET",
                mode: "cors",
                headers: headers
            })
            .then((res) => {
                if(!res.ok) {
                    throw new Error(response.error)
                }
                return res.json();
            })
            .then(data => {
                setIphones(data.data);
                setIsFetching(false);
            })
            .catch((error)=> {
                console.log(error)
            })
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