import httpClient from './httpClient';
import { getApiError } from './errorHandler';
import { appConfig } from 'config';

const MessageService = {
  getAllMessages: async (queryParams) => {
    try {
      const response = await httpClient({ queryParams, method: 'GET' });
      return response;
    } catch (error) {
      throw getApiError(error);
    }
  },

  createMessage: async (data) => {
    try {
      const response = await httpClient({
        data,
        method: 'POST',
        headers: { token: appConfig.apiToken },
      });
      return response.data;
    } catch (error) {
      throw getApiError(error);
    }
  },
};

export default MessageService;
