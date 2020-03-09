import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {format} from 'date-fns';

import {
    MuiPickersUtilsProvider,
    //KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import TripsService from "../../Services/trips"

const useStyle = makeStyles(theme => ({
    title: {
        color: 'red',
        fontSize: 40,
        fontWeight: 300,
        textAlign: 'center'
    },
    container: {
        width: 1080,
        display: 'flex',
        flexWrap: 'wrap',
        margin: 'auto'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    button: {
        maxHeight: 56,
        marginTop: 15
    }
}));

const HomeComponent = () => {
    const classes = useStyle();

    const [state, setState] = useState({
        departurePlace: "",
        arrivalPlace: "",
        departureTime: "",
        seats: ""
    })

    const handleChange = (e) =>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleDateChange = (date) =>{
        setState({
            ...state,
            departureTime: format(date, 'yyyy-MM-dd')
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        TripsService.getTrips(state);
    }

    return (
        <div>
            <Typography className={classes.title}>Welcome to xedike.</Typography>
            <form className={classes.container} onSubmit={handleSubmit}>
                <TextField
                    id="departurePlace"
                    name="departurePlace"
                    label="Departure Place"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange ={handleChange}
                />
                <TextField
                    id="arrivalPlace"
                    name="arrivalPlace"
                    label="Arrival Place"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange ={handleChange}
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="departureTime"
                        name="departureTime"
                        label="Date picker inline"
                        // value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        inputVariant="outlined"
                    />

                </MuiPickersUtilsProvider>
                
                <TextField
                    id="seats"
                    name="seats"
                    label="Seats"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange ={handleChange}
                />
                <Button variant="contained" color="primary" className={classes.button} type="submit">
                    Search
                </Button>
            </form>
        </div>
    );
}

export default HomeComponent;
