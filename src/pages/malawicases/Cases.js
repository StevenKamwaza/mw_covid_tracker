
import * as React from 'react';
import {useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, ComposedChart,Line, Area,Tooltip, XAxis, YAxis,CartesianGrid,Legend, Label, ResponsiveContainer } from 'recharts';
import { Grid, Paper, Typography } from '@mui/material';
import Title from '../Figures/Title';

export default function Cases (){
    const theme = useTheme();

    const [worldCases ,setworldCases] = useState([]);
    const [dcases, setDcases] = useState([]);
    const [globalSumary, setglobal]= useState([]);

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
            
            <Grid item xs ={12} md = {8} lg ={3} >
                <Paper sx ={{
                    p:2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}>
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
                                dataKey="Confirmed"
                                strokeWidth={2}
                                stroke={theme.palette.primary.main}
                                dot={false}
                            />
                            <Area type="monotone" dataKey="Confirmed" fill="#8884d8" stroke="#8884d8" />
                            <Tooltip/>
                            <Legend/>
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
                            <Legend/>
                        </ComposedChart>
                    </ResponsiveContainer>

                </Paper>
            </Grid>

        </>
    )
}