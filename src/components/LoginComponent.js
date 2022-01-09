import React, { useState } from 'react';

import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AccountCircle from '@mui/icons-material/AccountCircle';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';

import logo from '../assets/logo.svg';

import Input from './common/Input/AvatarInput';
import SubmitButton from './common/Button/SubmitButton';

import axios from 'axios';

const useStyles = makeStyles(theme => ({
    background: {
        backgroundColor: '#92d3d4',
        padding: 0,
        width: "100%",
        height: "100vh"
    },
    card: {
        marginTop: "15%"
    },
    Login:{
        color: "#667EEA",
        fontWeight: "700",
        fontSize: "1rem",
    },
    SimpleText:{
        fontSize: "0.85rem",
        color: "#4A5568",
    }
}));




const Login = (props) => {
    const classes = useStyles();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    const Validate = async (name,password) => {


    
        // var response = await axios.post("https://localhost:44346/api/Auth/login",body)
        // console.log(response);
        // if (response.status === 200) {
            console.log(props);
            props.validate(name,password)
        // }
        // else{
        //     console.log('failed', (await response).status);
        // }
    }

    return (
        <Grid container direction="column" className={classes.background}>
            <Grid item container alignItems="center" justifyContent="center" direction="column" className={classes.card}>
                <Card className={classes.registrationCard} >
                    <CardContent>
                        <Grid spacing={1} item container alignItems="center" direction="column">

                            <Grid item>
                                <a href='https://ciansanalytics.com/' target='_blank' rel="noreferrer">
                                    <Grid item>
                                        <img src={logo} alt="hero" width="180" height="30" />
                                    </Grid>
                                </a>
                            </Grid>


                            <Grid item>
                                <Typography gutterBottom variant="body1" className={classes.Login}>Login</Typography>
                            </Grid>

                            <Grid item>
                                <Typography gutterBottom variant="body1" className={classes.SimpleText}>Sign in to your account</Typography>
                            </Grid>

                            <Grid item>
                                <Input Placeholder="UserName" InputIcon={AccountCircle} Type='text'  onChangeFunc={setName} />
                            </Grid>

                            <Grid item>
                                <Input Placeholder="Password" InputIcon={EnhancedEncryptionIcon} Type='password' onChangeFunc={setPassword} />
                            </Grid>

                            <Grid item>
                                <SubmitButton onButtonClick={()=>Validate(name,password)} textColor="#fff" />
                            </Grid>
                        </Grid>
                    </CardContent>

                </Card>
            </Grid>

        </Grid>
    );
}

export default Login;



