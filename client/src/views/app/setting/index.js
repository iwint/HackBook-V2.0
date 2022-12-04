import { Button, Card, CardHeader, CardMedia, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../../../components/common/Header'

import Layout from '../../../layouts'
function Setting() {
    const [isSet, setisSet] = useState(true)
    const [settings, setsettings] = useState({
        whois: '',
        shodon: ""
    })

    useEffect(() => {
        const getApiInfo = async () => {
            const info = await localStorage.getItem("settings");
            if (info != undefined) {
                setsettings(await JSON.parse(info))
            } else {
                alert("Api Required")
            }
        }
        getApiInfo()
    }, [])

    const [shodon, setshoson] = useState("")
    const [whois, setwhois] = useState("")

    const onHandleSearch = () => {
        localStorage.setItem("settings", JSON.stringify({ shodon: shodon, whois: whois }))
    }
    return (
        <Layout>
            <Card>

                <Header HeaderName={"Settings"} />

                <CardMedia>
                    <Grid container p={3} pb={5} direction={"column"} justifyContent="space-between">
                        <TextField
                            disabled={isSet}
                            onChange={(e) => setwhois(e.target.value)}
                            placeholder="Whoisxml API KEY"
                            sx={{ width: "100%", marginBottom: "10px" }}
                            variant="outlined"  
                        ></TextField>
                        <TextField
                            disabled={isSet}
                            onChange={(e) => setshoson(e.target.value)}
                            placeholder="Shodan API KEY"
                            sx={{ width: "100%", marginBottom: "20px" }}
                            variant="outlined"
                        ></TextField>

                        <Button onClick={onHandleSearch} variant="contained">
                            Save
                        </Button>
                    </Grid>
                </CardMedia>
            </Card>
        </Layout>
    )
}

export default Setting