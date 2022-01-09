import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@material-ui/core/TextField';

const AvatarInput = (props) => {

    const {Placeholder, InputIcon, Type, onChangeFunc} = props;

    return (
        <TextField
            id="input-with-icon-textfield"
            type={Type}
            variant="outlined"
            onChange={e=>onChangeFunc(e.target.value)}
            placeholder={Placeholder}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <InputIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
}

export default AvatarInput;