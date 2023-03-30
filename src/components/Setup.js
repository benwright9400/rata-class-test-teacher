import { School, Send } from "@mui/icons-material";
import { Button, Card, CardContent, TextField, Slider, InputAdornment, IconButton, OutlinedInput } from "@mui/material";
import React, { useState } from "react";

function Setup() {
    const [stage, setStage] = useState(0);

    return loadContent(stage, stage, setStage);
}

function loadContent(stageNumber, stage, setStage) {
    if(stageNumber === 0) {
        return (<div>
            <School style={{scale: '4', marginTop: '20%', marginBottom: '2rem'}} />
            <h1 className="font-sans text-3xl font-semibold mb-2">Welcome to Rita</h1>
            <button variant="outlined" color="success" className="text-gray-100 m-4 px-4 py-2 bg-red-800 rounded hover:bg-red-700" onClick={() => {setStage(stage + 1)}}>Continue</button>

        </div>);
    }
    if(stageNumber === 1) {
        return (<div style={{width: 'fit-content', margin: 'auto', marginTop: '20%'}}>

                <h3 className="font-sans text-xl font-semibold mb-4">Enter your name</h3>
                <TextField size="small" placeholder="Name" />
                <br></br>
                <button variant="outlined" color="success" className="text-gray-100 m-4 px-4 py-2 bg-red-800 rounded hover:bg-red-700" onClick={() => {setStage(stage + 1)}}>Continue</button>

    </div>);
    }
    if(stageNumber === 2) {
        return (<div>
            <Card>
                <div className="flex items-center justify-center flex-auto">
                    <School style={{scale: '1', margin: '0.5rem'}} />
                    <h2 className="font-semibold font-xl" style={{padding: '1rem', paddingLeft: '0.5rem'}}>Rita</h2>
                </div>
            </Card>
            <div className="p-4 absolute top-1/4 bottom-0 left-0 right-0">
                <div className="grow-0">
                    <Card>
                        <h3 className="font-semibold font-xl p-2 ">Confidence Slider</h3>
                        <div className="p-2 px-4">
                            <Slider
                                style={{margin: '1rem;'}}
                                defaultValue={30}
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={0}
                                max={100}
                                />
                        </div>
                    </Card>
                </div>
                <div className="grow">
                    <Card className="mt-4">
                        <div className="p-2">
                            <div className="h-64 text-left overflow-y-scroll my-2 px-2">
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
    return <div>End</div>;
}

export default Setup;