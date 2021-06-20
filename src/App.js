import { memo, useRef, useEffect, useCallback } from 'react';
import { Box, makeStyles } from '@material-ui/core';

import ChatBackgroundImage from 'assets/chat_background.png';
import ComposeBox from 'components/ComposeBox';
import MaxWidthContainer from 'components/MaxWidthContainer';
import MessageList from 'components/MessageList';
import { MESSAGES } from 'mockData';

const App = () => {
  const classes = useStyles();
  const containerRef = useRef();

  const handleScrollNotification = useCallback(() => {
    if (containerRef.current.scrollTop === 0) {
      //@todo: fetch more
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScrollNotification);
    }

    return () => {
      console.log('gad', containerRef);
      containerRef && containerRef.removeEventListener('scroll', handleScrollNotification);
    };
  }, [handleScrollNotification]);

  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      width="100vw"
      height="100vh"
      className={classes.container}>
      <Box width="100%" height="100%" ref={containerRef} overflow="scroll">
        <MaxWidthContainer>
          <Box px={12} height="100%" width="100%">
            <MessageList messages={MESSAGES} />
          </Box>
        </MaxWidthContainer>
      </Box>
      <ComposeBox />
    </Box>
  );
};

const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${ChatBackgroundImage})`,
  },
});

export default memo(App);
