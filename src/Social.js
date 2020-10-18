import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faCodepen, faFacebook, faInstagram, faDev, faMailchimp, faGoogle, faGooglePlusG, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { BottomNavigation, Box, Icon, IconButton } from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	bottoms: {
		position: "relative",
		textAlign: "center",
		bottom:0
	},
	spaces: {
		space: theme.spacing(2)
	}
}))

const Social = () => {
	const classes = useStyles();
	return(
		<>
			<Box className="social-icons">
				<IconButton href="#">
					<FontAwesomeIcon className="icon" icon={faLinkedin} color="white" size="lg"/>
				</IconButton>
				<IconButton>
					<FontAwesomeIcon className="icon" icon={faGooglePlusG} color="white" size="lg"/>
				</IconButton>
				<IconButton>
					<FontAwesomeIcon className="icon" icon={faFacebook} color="white" size="lg"/>
				</IconButton>
				<IconButton>
					<FontAwesomeIcon className="icon" icon={faInstagram} color="white" size="lg"/>
				</IconButton>
			</Box>
			<Box className={classes.bottoms}>
			<p style={{fontFamily:'Elephant',
				color: 'white'}}>Made with ❤️ in Bangalore, India</p>
			</Box>
		</>
	)
}

export default Social