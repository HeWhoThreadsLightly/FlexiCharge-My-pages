import { Button, TextField, Grid, Box } from "@material-ui/core";
import { Redirect, Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ValidationForm } from "../components/validation";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grid: {
			justifyContent: "center",
			maxWidth: "40%",
			minWidth: "40vh",
			minHeight: "100vh",
			margin: "auto",
			fontWeight: "bolder",
		},
		container: {
			padding: "1rem",
			backgroundColor: theme.flexiCharge.primary.white,
			borderRadius: "0.5rem",
		},
		gridItem: {
			margin: "auto",
		},
		textFields: {
			maxWidth: "80%",
		},
		button: {
			backgroundColor: theme.flexiCharge.accent.primary,
			"&:hover": {
				background: theme.flexiCharge.accent.primary,
				boxShadow: theme.flexiCharge.boxShadow.button,
				transform: "translateY(-5px)",
			},
			maxWidth: "50%",
			maxHeight: "10vh",
			marginTop: theme.spacing(2),
			fontWeight: "bold",
			fontSize: ".7rem",
			color: theme.flexiCharge.primary.white,
		},
	})
);

const inputFieldValue = {
	name: "username",
	label: "username",
	id: "username",
	icon: <AccountCircle />,
};

const ForgotPassword = () => {
	const classes = useStyles();
	const {
		ForgotPasswordHandleFormSubmit,
		handleInputValue,
		errors,
		msg,
		redirect,
	} = ValidationForm();

	if (redirect) {
		return <Redirect to="/confirm-forgot-password" />;
	}

	return (
		<Grid container direction="column" className={classes.grid}>
			<h1>Forgot Password</h1>
			<Grid container direction="column" className={classes.container}>
				<form autoComplete="off" onSubmit={ForgotPasswordHandleFormSubmit}>
					<p>
						Enter your username and we will send you a password reset link to
						your registered email.
					</p>
					<Grid item xs={12} className={classes.gridItem}>
						<TextField
							onChange={handleInputValue}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AccountCircle />
									</InputAdornment>
								),
							}}
							fullWidth
							className={classes.textFields}
							name={inputFieldValue.name}
							label={inputFieldValue.label}
							autoComplete="none"
							{...(errors[inputFieldValue.name] && {
								error: true,
								helperText: errors[inputFieldValue.name],
							})}
						/>
					</Grid>
					<Button variant="contained" type="submit" className={classes.button}>
						Send password reset
					</Button>
					<Box color="red">{msg}</Box>
				</form>
			</Grid>
		</Grid>
	);
};

export default ForgotPassword;