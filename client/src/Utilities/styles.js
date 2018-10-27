import green from '@material-ui/core/colors/green';

export const styles = theme => ({
  TabColor: {
    color: '#f44336',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  InputError: {
    color: '#f44336',
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    left: '20%',
    zIndex: 1,
  },
  root: {
    flexGrow: 1,
    maxWidth: 500,
    color: '#f44336',
  },
  mainColor: {
    backgroundColor: '#f44336',
  },
  textColor: {
    color: '#f44336',
  },
  cssLabel: {
    '&$cssFocused': {
      color: '#f44336',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: '#f44336',
    },
  },
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  icon: {
    width: 30,
    height: 30,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: '#f44336',
    width: 50,
    height: 50,
  },
  margin: {
    marginTop: theme.spacing.unit * 6,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 6,
    '&:hover': { backgroundColor: '#f44336' },
  },
});
