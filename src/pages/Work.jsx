import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'

export default function Work() {
    return (
        <div>
            <h2>Work Page</h2>
            <br />
            < Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper> item!</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper> item 2!</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper> third item !</Paper>
                </Grid>
            </Grid>
        </div>
    );
}