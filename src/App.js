import { memo, useRef, useEffect, useCallback, useMemo } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { useInfiniteQuery, useMutation, useQueryClient } from 'react-query';

import ChatBackgroundImage from 'assets/chat_background.png';
import ComposeBox from 'components/ComposeBox';
import MaxWidthContainer from 'components/MaxWidthContainer';
import MessageList from 'components/MessageList';
import MessageService from 'services/MessageService';
import { resources } from 'services/resources';
import { appConfig } from 'config';
import {
  formatMessagesResponse,
  mergeMessagePages,
  performOptimisticUpdate,
} from 'util/messageUtil';

const App = () => {
  const classes = useStyles();
  const containerRef = useRef();
  const queryClient = useQueryClient();

  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery(
    resources.MESSAGES,
    ({ pageParam = 0 }) =>
      MessageService.getAllMessages({ token: appConfig.apiToken, since: pageParam, limit: 10 }),
    {
      getNextPageParam: (lastPage) => lastPage?.[lastPage.length - 1]?.timestamp ?? false,
      select: (data) => mergeMessagePages(data?.pages),
    },
  );

  const { mutate: createMessage } = useMutation(MessageService.createMessage, {
    onMutate: (payload) => performOptimisticUpdate(queryClient, payload),
  });

  const messages = useMemo(() => {
    if (data) {
      return formatMessagesResponse(data);
    }
    return [];
  }, [data]);

  const fetchPreviousPageOnScroll = useCallback(() => {
    if (containerRef.current.scrollTop === 0 && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetching, fetchNextPage]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', fetchPreviousPageOnScroll);
    }

    const cleanUpContainerRef = containerRef.current;
    return () => {
      cleanUpContainerRef.removeEventListener('scroll', fetchPreviousPageOnScroll);
    };
  }, [fetchPreviousPageOnScroll]);

  const scrollToTop = () => {
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    }, 100);
  };

  const handleSendMessage = (message) => {
    if (message.trim().length !== 0) {
      createMessage({
        author: appConfig.senderName,
        message,
      });
      scrollToTop();
    }
  };

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
            <MessageList messages={messages} />
          </Box>
        </MaxWidthContainer>
      </Box>
      <ComposeBox onSend={handleSendMessage} />
    </Box>
  );
};

const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${ChatBackgroundImage})`,
  },
});

export default memo(App);
