import { School, Send } from "@mui/icons-material";
import { Button, Card, CardContent, TextField, Slider, InputAdornment, IconButton, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import { Bar, BarChart, Pie, PieChart, ResponsiveContainer, XAxis } from "recharts";

function Setup() {
    const [stage, setStage] = useState(0);

    return loadContent(stage, stage, setStage);
}

function loadContent(stageNumber, stage, setStage) {
    let data = [{name: "10", value: 12}, {name: "20", value: 120}, {name: "30", value: 120}, {name: "40", value: 120}, {name: "40", value: 120}, {name: "50", value: 120},{name: "60", value: 120},{name: "70", value: 120},{name: "80", value: 120},{name: "90", value: 120},{name: "10", value: 120},];
        return (<div>
            <Card>
                <div className="flex items-center justify-center flex-auto">
                    <School style={{scale: '1', margin: '0.5rem'}} />
                    <h2 className="font-semibold font-xl" style={{padding: '1rem', paddingLeft: '0.5rem'}}>Rita</h2>
                </div>
            </Card>
            <div className="p-4 flex">
                <div className="w-1/2 mr-2">
                    <Card>
                        <h3 className="font-semibold font-xl p-2 ">Confidence Breakdown</h3>
                        <div className="p-2">
                            <ResponsiveContainer width="100%" height={400}>
                                <BarChart data={data}>
                                    <Bar dataKey="value" nameKey="name" fill="#8884d8"/>
                                    <XAxis dataKey="name" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </div>
                <div className="w-1/2 h-11/12">
                    <Card className="h-11/12" style={{height: '80vh'}}>
                        <div className="p-2 h-11/12">
                            <div className="text-left overflow-y-scroll my-2 px-2" style={{height: '70vh'}}>
                                <p>James: When is this due?</p>
                            </div>
                            <OutlinedInput size="small" style={{width: '100%'}}
                                autoComplete="off"
                                endAdornment={<InputAdornment position="end">
                                    <IconButton><Send></Send></IconButton>
                                </InputAdornment>}>
                            </OutlinedInput>
                        </div>
                    </Card>
                </div>
            </div>
            
        </div>);
}

export default Setup;