import { Grid } from "@mui/material"

function Navbar() {
    return (
        <div className="h-[10vh] bg-transparent w-screen text-white flex items-center justify-center">
            <Grid container className="w-full p-10">
                <Grid item xs={3}>
                    CV Maker
                </Grid>
                <Grid container columnGap={2} xs={9} className="flex justify-end">
                    <Grid item>
                        Home
                    </Grid>
                    <Grid item>
                        Create
                    </Grid>
                    <Grid item>
                        Login/Register
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Navbar
