import green from '@material-ui/core/colors/green';

export const styles = theme => ({
  //  DASHOBOARD STYLING
  dashboardRoot: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    textTransform: 'capitalize',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  textButtons: {
    color: '#f44336',
    '&:hover': {
      backgroundColor: '#f44336',
      color: '#fff',
    },
  },

  // LOGIN AND REGISTRATION STYLING
  halfLabel: {
    marginRight: 10,
  },
  TabColor: {
    color: '#f44336',
  },
  EmojiSize: {
    fontSize: '24px',
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
    color: '#f44336',
    position: 'absolute',
    zIndex: 1,
  },
  fabProgress1: {
    left: '20%',
  },
  fabProgress2: {
    left: '30%',
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
