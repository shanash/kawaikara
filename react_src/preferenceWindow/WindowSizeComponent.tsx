import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid'
import { MenuPaper, Paper } from '@mui/material';
type props = {
    id: string;
    values : [string]
  };

function WindowSizeComponent({id, values} : props){
return (  
    <Grid container direction="column">
        <Grid item>
            <FormControl >
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"age"}
                label="Age"
                style={{minWidth : "200px"}}
                onChange={()=>{}}
                
                >
                <MenuItem value={7}>2560x1440</MenuItem>
                <MenuItem value={6}>2460x1080</MenuItem>
                <MenuItem value={5}>1920x1080</MenuItem>
                <MenuItem value={4}>1280x720</MenuItem>
                <MenuItem value={3}>960x540</MenuItem>
                <MenuItem value={2}>640x360</MenuItem>
                <MenuItem value={1}>custom</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item >
            <TextField
            disabled
            id="filled-disabled"
            label="width"
            defaultValue="1920"
            variant="filled" 
            InputProps={{
                style: { margin : 1, maxWidth: "100px" }
              }}
            />
            <TextField
            disabled
            id="filled-disabled"
            label="height"
            defaultValue="1080"
            variant="filled"
            InputProps={{
                style: {margin:1, maxWidth: "100px" }
              }}
            />
        </Grid>            
    </Grid>
    )
}


export default WindowSizeComponent;