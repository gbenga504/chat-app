import { appConfig } from 'config';
import { resources } from 'services/resources';

// data comes back from the server as an array of
export const mergeMessagePages = (pages) => {
  return pages
    ?.reduce((acc, page) => {
      page?.forEach((message) => acc.push(message));
      return acc;
    }, [])
    .sort((a, b) => a.timestamp - b.timestamp);
};

// formatMessagesResponse returns the exact message format needed by the React component
export const formatMessagesResponse = (messages) => {
  return messages?.map((message) => ({
    id: message._id,
    author: message.author,
    date: `${new Date(Number(message.timestamp))}`,
    body: message.message,
    isSender: message.author === appConfig.senderName,
  }));
};

export const performOptimisticUpdate = (queryClient, payload) => {
  const previousMessages = queryClient.getQueryData(resources.MESSAGES);
  let newMessage = {
    _id: `${Date.now()}`,
    author: payload.author,
    timestamp: Date.now(),
    message: payload.message,
  };

  updateCache(queryClient, newMessage);
  return previousMessages;
};

export const updateCache = (queryClient, data) => {
  return queryClient.setQueryData(resources.MESSAGES, (cachedData) => {
    return {
      ...cachedData.pageParams,
      pages: cachedData?.pages?.map((page, index) => {
        if (index === cachedData?.pages?.length - 1) {
          return [...page, data];
        }

        return page;
      }),
    };
  });
};
