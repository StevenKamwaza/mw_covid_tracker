
import * as React from 'react';
import {useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line,Tooltip, XAxis, YAxis,CartesianGrid,Legend, ResponsiveContainer } from 'recharts';
import { Grid, Paper, Typography } from '@mui/material';
import Title from '../Figures/Title';

export default function AppGraph (){
    const theme = useTheme();

    const [worldCases ,setworldCases] = useState([]);
    const [globalSumary, setGlobalSum] = useState([]);

    const getApiData = async () => {
        const response = await fetch('https://api.covid19api.com/summary')
        .then((response) => response.json());
        // update the state
        setGlobalSum(response.Global)
        setworldCases(response.Countries);
      };

    useEffect(() => {
        getApiData();
      }, [])

    

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
                                  
                  <Title>World Case Summary</Title>
                  
                  
                  <Typography color="text.primary" component="p" variant="h6">
                    New Confirmed: {globalSumary.NewConfirmed}
                  </Typography>
                  <Typography  color="text.primary" component="p" variant="h5">
                     New Deaths: {globalSumary.NewDeaths}
                  </Typography>

                  <center><img src="./international.png" alt="logo" height="40" width={40}/> </center>
                  <div>

                    <Typography  color="text.primary" component="p" variant="body1">

                        Total Confirmed : {globalSumary.TotalConfirmed}
                    </Typography>
                    <Typography  sx={{ flex: 1 }} color="text.primary" component="p" variant="h6">

                        Total  Deaths   : {globalSumary.TotalDeaths}
                    </Typography>
                    
                  </div>
                </Paper>
            </Grid>

            <Grid item xs ={12} md = {8} lg ={9} >
                <Paper sx ={{
                    p:2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}>
                    <ResponsiveContainer>
                        <LineChart
                        data={worldCases}
                        margin={{
                            top: 16,
                            right: 16,
                            bottom: 0,
                            left: 24,
                        }}
                        >
                            <XAxis
                                dataKey="Country"
                                stroke={theme.palette.text.secondary}
                                style={theme.typography.body2}
                            />
                            <YAxis/>
                            <CartesianGrid strokeDasharray="1 3" />
                            <Line
                                isAnimationActive={false}
                                type="monotone"
                                dataKey="NewConfirmed"
                                strokeWidth={2}
                                stroke={theme.palette.secondary.main}
                                dot={false}
                            />
                            <Line
                                isAnimationActive={false}
                                type="monotone"
                                dataKey="TotalConfirmed"
                                strokeWidth={2}
                                stroke={theme.palette.primary.main}
                                dot={false}
                            />
                            <Line
                                isAnimationActive={false}
                                type="monotone"
                                dataKey="TotalRecovered"
                                strokeWidth={2}
                                stroke={theme.palette.success.main}
                                dot={false}
                            />
                        
                            <Line
                                isAnimationActive={false}
                                type="monotone"
                                dataKey="TotalDeaths"
                                strokeWidth={2}
                                stroke={theme.palette.warning.main}
                                dot={false}
                            />
                            <Tooltip/>
                            <Legend/>
                        </LineChart>
                    </ResponsiveContainer>

                </Paper>
            </Grid>

        </>
    )
}