import { useQuery } from '@tanstack/react-query';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const useUsers = () => {
  return useQuery('users', async () => {
    const response = await fetch(`${API_URL}/users`);
    return response.json();
  });
};

export const useUser = (userId) => {
  return useQuery(['user', userId], async () => {
    const response = await fetch(`${API_URL}/users/${userId}`);
    return response.json();
  });
};

export const usePosts = () => {
  return useQuery('posts', async () => {
    const response = await fetch(`${API_URL}/posts`);
    return response.json();
  });
};

export const usePost = (postId) => {
  return useQuery(['post', postId], async () => {
    const response = await fetch(`${API_URL}/posts/${postId}`);
    return response.json();
  });
};

export const useComments = (postId) => {
  return useQuery(['comments', postId], async () => {
    const response = await fetch(`${API_URL}/posts/${postId}/comments`);
    return response.json();
  });
};