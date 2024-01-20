import { Grid } from "@mui/material"
import PropTypes from 'prop-types';

function DNavbar({ setOpenComp }) {
    return (
        <div className="h-[10vh] bg-transparent w-screen text-white flex items-center justify-center">
            <Grid container className="w-full p-10">
                <Grid item xs={5}>
                    <a onClick={() => setOpenComp(true)} className="hover:cursor-pointer">Add</a>
                </Grid>
                <Grid item xs={2} className="text-center">
                    CV Maker
                </Grid>
                <Grid container columnGap={2} className="flex justify-end">
                    <Grid item>
                        Layers
                    </Grid>
                    <Grid item>
                        Settings
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

DNavbar.propTypes = {
    setOpenComp: PropTypes.func.isRequired,
    // Define other props with their respective types here
};

export default DNavbar
