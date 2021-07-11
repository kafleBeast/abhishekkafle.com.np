import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';

import profile_url from '../media/stock.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    button: {
        margin: theme.spacing(1),
        borderRadius: '20px',
    },

}));

const LandingPage = ({ showSidebar }) => {
    const classes = useStyles();
    const [email, setEmail] = useState()

    const writeEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const submitEmail = (e) => {
        e.preventDefault();
        (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
            ? (console.log(email))
            : console.log("Email is not valid!");

    }
    return (
        <div className='container' onClick={showSidebar}>
            <div className="Video">
                <h1 className='texthead'  >Invest, Grow, Build</h1>
                {/* <video src="./Videos/stockVid.mp4" loop={true} autoPlay={true} muted></video> */}
                <img src={profile_url} alt="profile" width='100%' height='100%' />
            </div>

            <div className="linegraph">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                <Button variant="outlined" color="primary">
                                    DJIA
                                </Button>
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                The Dow Jones Industrial Average, Dow Jones, or simply the Dow,
                                is a price-weighted measurement stock market index of the 30 prominent companies listed on stock exchanges in the United States.

                            </Typography>
                        </CardContent>
                    </CardActionArea>

                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                <Button variant="outlined" color="primary">
                                    NASDAQ
                                </Button>
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">

                                The Nasdaq Stock Market is an American stock exchange based in New York City.
                                It is ranked second on the list of stock exchanges by market capitalization of shares traded, behind the New York Stock
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                <Button variant="outlined" color="primary">
                                    S&#38;P 500
                                </Button>
                            </Typography>

                            <Typography variant="header" color="header" component="p">
                                The Standard and Poor's 500, or simply the S&#38;P 500, is a stock market index tracking the stock performance of 500 of the
                                largest companies listed on stock exchanges in the United States. It is one of the most commonly followed equity indices.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div className="footer">
                <div className='footerContainer'>
                    <div>
                        <h2 className='footElement'>Let's connect!</h2>

                    </div>

                    <div className='footElement fE2'>
                        <input
                            type='text'
                            placeholder='Type your email here...'
                            onChange={writeEmail}
                            className="inputFooter"
                        ></input>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={submitEmail}
                        >
                            Contact Us
                    </Button>
                    </div>

                    <div className='footElement'>
                        <IconButton color="inherit" aria-label="Menu" className='name'>
                            <FacebookIcon fontSize='large' />
                        </IconButton>
                        <IconButton color="inherit" aria-label="Menu" className='name'>
                            <InstagramIcon fontSize='large' />
                        </IconButton>
                        <IconButton color="inherit" aria-label="Menu" className='name'>
                            <TwitterIcon fontSize='large' />
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LandingPage
