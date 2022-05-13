
import * as React from 'react';
import {useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line,Tooltip, XAxis, YAxis,CartesianGrid,Legend, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

export default function AppLiveGraph (){
    const theme = useTheme();

    const [mylive ,setMyLive] = useState([]);

    const getApiData = async () => {
        const response = await fetch('https://api.covid19api.com/live/country/malawi')
        .then((response) => response.json());
        // update the state
         setMyLive(response);
      };

    useEffect(() => {
        getApiData();
      }, [])

    return(
        <>
            
            <Title>Malawi Cases Graph</Title>
            <ResponsiveContainer>
                <LineChart
                data={mylive}
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
                    <YAxis>
                        <Label
                        angle={268}
                        position="left"
                        style={{
                            textAnchor: 'middle',
                            fill: theme.palette.text.primary,
                            ...theme.typography.body1,
                        }}
                        >
                        Cases 
                        </Label>
                    </YAxis>
                    <CartesianGrid strokeDasharray="1 3" />
                    <Line
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="Active"
                        strokeWidth={2}
                        stroke={theme.palette.secondary.main}
                        dot={false}
                    />
                    <Line
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="Confirmed"
                        strokeWidth={2}
                        stroke={theme.palette.primary.main}
                        dot={false}
                    />
                    <Line
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="Recovered"
                        strokeWidth={2}
                        stroke={theme.palette.success.main}
                        dot={false}
                    />
                  
                    <Line
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="Deaths"
                        strokeWidth={2}
                        stroke={theme.palette.warning.main}
                        dot={false}
                    />
                    <Tooltip/>
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}