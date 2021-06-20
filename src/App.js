import { memo } from 'react';
import { Box, makeStyles } from '@material-ui/core';

import ChatBackgroundImage from 'assets/chat_background.png';

const App = () => {
  const classes = useStyles();

  return <Box position="relative" width="100vw" height="100vh" className={classes.container}></Box>;
};

const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${ChatBackgroundImage})`,
  },
});

export default memo(App);
