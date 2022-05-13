
import * as React from 'react';
import {useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import {  ComposedChart,Line, Area,Tooltip, XAxis, YAxis,CartesianGrid, ResponsiveContainer } from 'recharts';
import { Grid, Paper, Typography } from '@mui/material';
import Title from '../Figures/Title';

export default function Cases (){
    const theme = useTheme();

    const [worldCases ,setworldCases] = useState([]);
    const [dcases, setDcases] = useState([]);
    const [malawisumary, setglobal]= useState([]);


    const getApiMalawi = async () => {
        const response = await fetch('https://api.covid19api.com/summary')
        .then((response) => response.json());
        // update the state
        setglobal(response.Countries);
      };

    const getApiData = async () => {
        const response = await fetch('https://api.covid19api.com/dayone/country/malawi/status/confirmed/live')
        .then((response) => response.json());
        // update the state
        
        setworldCases(response);
      };

    const getDcases = async () => {
        const response = await fetch('https://api.covid19api.com/total/dayone/country/malawi')
        .then((response) => response.json());
        // update the state
        
        setDcases(response);
      };
    useEffect(() => {
        getApiData();
        getDcases();
        getApiMalawi();
      }, [])
     

      //finding malawi
      let data_object = {}
      
      malawisumary.map((item, key)=>{
        if(item.CountryCode ==="MW"){
            
            data_object.totalConfirmed = item.TotalConfirmed;
            data_object.newconfirmed = item.NewConfirmed;
            data_object.totalDeaths = item.TotalDeaths;
            data_object.newDeaths = item.NewDeaths;
        }
      })

    return(
        <>
            <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                                  
                  <Title><img src="./malawi.png" alt="logo" height="40" width={40}/>Malawi Covid Cases</Title>
                  
                  <Typography color="text.primary" component="p" variant="h5">
                    New Confirmed: {data_object.newconfirmed}
                  </Typography>
                  <Typography  color="text.primary" component="p" variant="h5">
                     New Deaths: {data_object.newDeaths}
                  </Typography>

                  
                  <div>

                    <Typography  color="text.primary" component="p" variant="h6">

                        Total Confirmed : {data_object.totalConfirmed}
                    </Typography>
                    <Typography  sx={{ flex: 1 }} color="text.primary" component="p" variant="h6">

                        Total  Deaths   : {data_object.totalDeaths}
                    </Typography>
                    
                  </div>
                </Paper>
            </Grid>
            
            <Grid item xs ={12} md = {8} lg ={3} >
                <Paper sx ={{
                    p:2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}>
                    <Title>Recovered Cases </Title>
                    <ResponsiveContainer>
                        <ComposedChart
                        data={dcases}
                        margin={{
                            top: 16,
                            right: 16,
                            bottom: 0,
                            left: 24,
                        }}
                        >
                            <XAxis
                                dataKey="Date"
                                stroke={theme.palette.text.secondary}
                                style={theme.typography.body2}
                            />
                            <YAxis/>
                            <CartesianGrid strokeDasharray="1 3" />
                            <Line
                                isAnimationActive={false}
                                type="monotone"
                                dataKey="Recovered"
                                strokeWidth={2}
                                stroke={theme.palette.primary.main}
                                dot={false}
                            />
                            <Area type="monotone" dataKey="Recovered" fill="#8884d8" stroke="#8884d8" />
                            <Tooltip/>
                            
                        </ComposedChart>
                    </ResponsiveContainer>

                </Paper>
            </Grid>

            <Grid item xs ={12} md = {8} lg ={3} >
                <Paper sx ={{
                    p:2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}>
                    <Title>Recorded Cases</Title>
                    <ResponsiveContainer>
                        <ComposedChart
                        data={worldCases}
                        margin={{
                            top: 16,
                            right: 16,
                            bottom: 0,
                            left: 24,
                        }}
                        >
                            <XAxis
                                dataKey="Date"
                                stroke={theme.palette.text.secondary}
                                style={theme.typography.body2}
                            />
                            <YAxis/>
                            <CartesianGrid strokeDasharray="1 3" />
                            <Line
                                isAnimationActive={false}
                                type="monotone"
                                dataKey="Cases"
                                strokeWidth={2}
                                stroke={theme.palette.primary.main}
                                dot={false}
                            />
                            <Area type="monotone" dataKey="Cases" fill="#8884d8" stroke="#8884d8" />
                            <Tooltip/>
                            
                        </ComposedChart>
                    </ResponsiveContainer>

                </Paper>
            </Grid>
            <Grid item xs ={12} md = {8} lg ={3} >
                <Paper sx ={{
                    p:2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}>
                    <Title>Deaths Cases</Title>
                    <ResponsiveContainer>
                        <ComposedChart
                        data={dcases}
                        margin={{
                            top: 16,
                            right: 16,
                            bottom: 0,
                            left: 24,
                        }}
                        >
                            <XAxis
                                dataKey="Date"
                                stroke={theme.palette.text.secondary}
                                style={theme.typography.body2}
                            />
                            <YAxis/>
                            <CartesianGrid strokeDasharray="1 3" />
                            <Line
                                isAnimationActive={false}
                                type="monotone"
                                dataKey="Deaths"
                                strokeWidth={2}
                                stroke={theme.palette.primary.main}
                                dot={false}
                            />
                            <Area type="monotone" dataKey="Deaths" fill="#8884d8" stroke="#8884d8" />
                            <Tooltip/>
                            
                        </ComposedChart>
                    </ResponsiveContainer>

                </Paper>
            </Grid>

        </>
    )
}