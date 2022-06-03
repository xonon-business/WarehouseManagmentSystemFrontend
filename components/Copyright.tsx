import { Link, Typography } from '@mui/material'

export default function Copyright(props: any) {
	return (
		<footer>
			<Typography variant="body2" color="text.secondary" align="center" {...props}>
				{'Copyright © '}
				<Link color="inherit" href="http://localhost:3000">
					Xonon WMS
				</Link>{' '}
				{new Date().getFullYear()}
				{'.'}
			</Typography>
		</footer>
    );
}
