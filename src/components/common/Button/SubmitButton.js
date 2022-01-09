import React from "react";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    ContactButton: props => ({
        backgroundColor: "#667EEA",
        color: props.textColor,
        width: 500,
        height: 60,
        fontFamily: 'Fredoka One',
        fontSize: "18px",
        textTransform: "none",
        [theme.breakpoints.up("sm")]: {
            width: 260,
            height: 50,
        },

        [theme.breakpoints.down("xs")]: {
            width: 200,
            height: 50,
        },
        "&:hover": {
            backgroundColor: "#4d68e8",
        },
    })
}));

const Submit = (props) => {
    const classes = useStyles(props);
    const {onButtonClick}=props;
    return (
        <Button component={Link} to="/" className={classes.ContactButton} onClick={onButtonClick}>Login</Button>
    );
};

export default Submit;